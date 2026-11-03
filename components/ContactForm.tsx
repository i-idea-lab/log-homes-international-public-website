"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";
import MagneticButton from "./MagneticButton";
import { COUNTRY_CODES, findCountryCode, isoToFlagEmoji } from "@/lib/country-codes";

declare global {
  interface Window {
    turnstile?: { reset: (widgetId?: string) => void };
  }
}

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({
  defaultCountryIso = "IN",
}: {
  // Which country's dial code is preselected. The India site passes "IN"
  // (+91); pass "OM" (+968) when this component is reused on the
  // International site — everything else about the form is identical.
  defaultCountryIso?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [countryIso, setCountryIso] = useState(defaultCountryIso);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      countryCode: formData.get("countryCode"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      enquiryType: formData.get("enquiryType"),
      message: formData.get("message"),
      // Honeypot — see the hidden field below.
      company: formData.get("company"),
      // Populated by the Turnstile widget script into its own hidden input.
      turnstileToken: formData.get("cf-turnstile-response"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      // A Turnstile token is single-use — refresh it so a retry doesn't
      // silently fail verification with the already-spent one.
      window.turnstile?.reset();
    }
  };

  if (status === "sent") {
    return (
      <div className="border border-putty p-10 text-center">
        <p className="font-display text-2xl text-brand mb-2">Thank you.</p>
        <p className="font-body text-neutral">
          We&rsquo;ve received your enquiry and will be in touch shortly.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-transparent border-b border-putty py-3 font-body text-brand placeholder:text-neutral/60 focus:outline-none focus:border-gold transition-colors disabled:opacity-50";
  const labelClasses =
    "font-body text-xs uppercase tracking-eyebrow text-neutral mb-2 block";
  const selectedDial = findCountryCode(countryIso)?.dial ?? "";
  const sending = status === "sending";

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        async
        defer
      />
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Honeypot — invisible and unreachable by keyboard/screen reader for
            real visitors; bots that fill every field tend to fill this too.
            Server rejects (silently) if it's non-empty. */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
        >
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className={labelClasses}>Name</label>
            <input required disabled={sending} name="name" type="text" className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses}>Contact Number</label>
            <div className="flex gap-3">
              <select
                aria-label="Country code"
                value={countryIso}
                disabled={sending}
                onChange={(e) => setCountryIso(e.target.value)}
                className={`${inputClasses} w-[5.5rem] appearance-none pr-5`}
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.iso2} value={c.iso2}>
                    {isoToFlagEmoji(c.iso2)} +{c.dial}
                  </option>
                ))}
              </select>
              {/* Selected dial code travels with the submission alongside
                  the visible national-number input. */}
              <input type="hidden" name="countryCode" value={`+${selectedDial}`} />
              <input
                required
                disabled={sending}
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="98765 43210"
                className={inputClasses}
              />
            </div>
          </div>
        </div>

        <div>
          <label className={labelClasses}>Email ID</label>
          <input required disabled={sending} name="email" type="email" className={inputClasses} />
        </div>

        <div>
          <label className={labelClasses}>Enquiry Type</label>
          <select name="enquiryType" disabled={sending} className={inputClasses}>
            <option>Resort</option>
            <option>Farmhouse</option>
            <option>Private Residence</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className={labelClasses}>Tell Us About Your Enquiry</label>
          <textarea name="message" rows={4} disabled={sending} className={inputClasses} />
        </div>

        {/* Renders automatically once the script above loads; the token it
            produces lands in a hidden "cf-turnstile-response" input inside
            this div, read via FormData in handleSubmit. */}
        <div
          className="cf-turnstile"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
          data-theme="light"
        />

        {status === "error" && (
          <p className="font-body text-sm text-red-700">{errorMessage}</p>
        )}

        <MagneticButton>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center px-8 py-3.5 font-body text-sm font-medium tracking-wide uppercase bg-gold text-paper hover:bg-brand transition-colors duration-300 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send Enquiry"}
          </button>
        </MagneticButton>
      </form>
    </>
  );
}
