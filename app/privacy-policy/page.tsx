import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

// DRAFT — written to cover what this site actually does (the contact form,
// specifically) in plain language. This has NOT been reviewed by a lawyer.
//
// Review against Oman's Personal Data Protection Law (Royal Decree 6/2022,
// now in full force since 5 Feb 2026, and recently amended by Royal Decree
// 68/2026 effective 7 Sept 2026) before publishing. Two amendments are
// worth a lawyer's specific attention, not just a general read-through:
// the law's territorial scope was expanded to cover processing of Omani
// individuals' data even when that processing happens outside Oman (which
// likely includes this form, since Resend processes the email outside
// Oman), and organizations must appoint a Personal Data Protection Officer
// with publicly available contact details. Update the "What we collect" /
// "Who we share it with" sections any time the contact form or analytics
// setup changes.
const LAST_UPDATED = "Draft — not yet published";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Legal" title="Privacy Policy" />

        <section className="bg-paper py-16 md:py-24">
          <Container className="max-w-3xl">
            <div className="space-y-12 font-body text-neutral leading-relaxed">
              <p className="text-sm uppercase tracking-eyebrow text-gold">
                Last updated: {LAST_UPDATED}
              </p>

              <div>
                <h2 className="font-display text-2xl text-brand mb-4">
                  What we collect
                </h2>
                <p>
                  When you submit an enquiry through this website, we collect
                  your name, phone number, email address, the type of
                  enquiry you select, and any message you write. We don&rsquo;t
                  collect anything else about you through this site — there
                  is currently no analytics or tracking in place.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-brand mb-4">
                  Why we collect it
                </h2>
                <p>
                  Solely to respond to your enquiry — to get in touch about
                  the project you&rsquo;ve described. We don&rsquo;t use it for
                  marketing, and we don&rsquo;t sell or rent it to anyone.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-brand mb-4">
                  How it&rsquo;s handled
                </h2>
                <p>
                  Your enquiry is sent directly to our team&rsquo;s email inbox
                  through Resend, our email delivery provider. We don&rsquo;t
                  store submissions in a separate database — the email itself
                  is the only record kept, for as long as a normal business
                  email thread would be kept. Because this processing happens
                  outside Oman, it involves a cross-border transfer of your
                  data; submitting the form is your consent to that transfer
                  for the sole purpose of responding to your enquiry.
                </p>
                <p className="mt-4">
                  The form is also protected by Cloudflare Turnstile, a bot-
                  detection service, which processes your IP address and
                  some technical signals about your browser at the moment
                  you submit the form, solely to confirm you&rsquo;re not an
                  automated script. We don&rsquo;t control what Cloudflare does
                  with that beyond their own stated privacy practices.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-brand mb-4">
                  Who we share it with
                </h2>
                <p>
                  Only the service providers mentioned above (Resend and
                  Cloudflare), strictly to deliver and protect the contact
                  form. No one else — no advertisers, no data brokers, no
                  other third parties.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-brand mb-4">
                  Your choices
                </h2>
                <p>
                  You can ask us to delete any enquiry you&rsquo;ve sent us, or
                  ask what we hold about you, by emailing us at the address
                  on our Contact page. We&rsquo;ll act on that promptly.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-brand mb-4">
                  Changes to this policy
                </h2>
                <p>
                  If how we collect or handle data changes — for example, if
                  we add analytics in the future — we&rsquo;ll update this page
                  and the date above.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
