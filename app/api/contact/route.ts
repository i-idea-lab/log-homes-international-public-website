import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { isRateLimited } from "@/lib/rate-limit";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("Contact form: TURNSTILE_SECRET_KEY is not configured.");
    return false;
  }

  const body = new URLSearchParams({ secret, response: token });
  if (ip !== "unknown") body.append("remoteip", ip);

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body });
    const data = (await res.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch (err) {
    console.error("Turnstile verification request failed:", err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — real visitors never see or fill this field (see ContactForm.tsx).
  // Reply with a fake success so a bot doesn't learn the submission was dropped.
  if (typeof data.company === "string" && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  const token = data.turnstileToken;
  if (typeof token !== "string" || !token || !(await verifyTurnstile(token, ip))) {
    return NextResponse.json(
      { ok: false, error: "Verification failed — please try again." },
      { status: 400 }
    );
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const countryCode = typeof data.countryCode === "string" ? data.countryCode.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const enquiryType = typeof data.enquiryType === "string" ? data.enquiryType.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (!name || !phone || !email) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, phone, and email." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    // Fails loudly in the server log rather than silently pretending to
    // succeed — see .env.local.example for what needs to be set.
    console.error(
      "Contact form: RESEND_API_KEY and/or CONTACT_TO_EMAIL is not configured."
    );
    return NextResponse.json(
      { ok: false, error: "The enquiry form isn't fully set up yet. Please call or WhatsApp us instead." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Log Homes International <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${countryCode} ${phone}`,
        `Email: ${email}`,
        `Enquiry type: ${enquiryType || "—"}`,
        "",
        "Message:",
        message || "(no message provided)",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend returned an error:", error);
      return NextResponse.json(
        { ok: false, error: "Couldn't send your enquiry. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form submission error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
