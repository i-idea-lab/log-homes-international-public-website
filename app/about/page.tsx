import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import SplitHeading from "@/components/SplitHeading";
import RevealImage from "@/components/RevealImage";
import Reveal from "@/components/Reveal";
import StatsStrip from "@/components/StatsStrip";
import CTASection from "@/components/CTASection";

const PILLARS = [
  {
    title: "Craftsmanship",
    description:
      "Every joint, beam, and finish is executed by carpenters trained specifically in timber-frame construction — not adapted from conventional masonry work.",
  },
  {
    title: "Accountability",
    description:
      "One in-house team carries a project from first site visit through design, construction, and handover — a single point of contact throughout.",
  },
  {
    title: "Longevity",
    description:
      "Imported, kiln-dried timber and load-bearing frame construction are chosen for structures meant to last for decades, not seasons.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About Us"
          title="The Same Craftsmanship, Now in the Gulf"
          intro="Log Homes International brings over a decade of timber-frame expertise from Log Homes India to Oman — the same in-house team, the same materials, built for a new climate and a new market."
        />

        <section className="bg-paper py-24 md:py-32">
          <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              {/* PLACEHOLDER — replace with a real founder/team or job-site photo */}
              <RevealImage className="aspect-[4/5]" curtainColor="bg-putty">
                <div className="absolute inset-0 bg-gradient-to-br from-wood-mid to-wood-dark flex items-center justify-center">
                  <span className="font-body text-xs uppercase tracking-eyebrow text-putty/70">
                    Team photo pending
                  </span>
                </div>
              </RevealImage>
            </div>
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
              <SplitHeading
                as="h2"
                text="A decade of timber-frame expertise, arriving in Oman"
                className="font-display text-3xl md:text-4xl text-brand mb-6"
              />
              <p className="font-body text-neutral leading-relaxed mb-4">
                {/* PLACEHOLDER copy — replace once the owner confirms the
                    Oman entity's own story/registration details. */}
                Log Homes India was founded on a simple premise: that a
                wooden home, built properly, is not a rustic compromise but
                a genuine luxury. Over a decade, that premise took shape
                across resorts, farmhouses, and private residences spanning
                India — and now extends to Oman and the wider Gulf under
                Log Homes International.
              </p>
              <p className="font-body text-neutral leading-relaxed">
                The same in-house design and architecture team carries
                every project from first consultation to final handover —
                nothing about the craft changes for a new climate, only
                what it&rsquo;s built to withstand.
              </p>
            </Reveal>
          </Container>
        </section>

        <StatsStrip />

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <Reveal className="max-w-xl mb-16">
              <Eyebrow>What Guides Us</Eyebrow>
              <SplitHeading
                as="h2"
                text="Three principles behind every build"
                className="font-display text-3xl md:text-4xl text-brand"
              />
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 0.1}>
                  <span className="font-display text-3xl text-gold mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-brand mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-neutral leading-relaxed">
                    {pillar.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-putty py-24 md:py-32">
          <Container className="max-w-3xl">
            <Reveal>
              <Eyebrow>Built For the Gulf</Eyebrow>
              <SplitHeading
                as="h2"
                text="Why timber-frame construction suits Oman's climate"
                className="font-display text-3xl md:text-4xl text-brand mb-6"
              />
              <p className="font-body text-neutral leading-relaxed mb-4">
                {/* PLACEHOLDER — reasonable claims for a timber-frame
                    builder entering a hot climate; confirm specifics with
                    the owner before publishing. */}
                Solid timber has genuine thermal mass — it absorbs heat
                slowly through the day and releases it slowly at night,
                keeping interiors steadier through Oman&rsquo;s heat than many
                lighter conventional structures manage. Combined with the
                same compression-fit insulation seals used across every
                build, the result is a home suited to the climate, not just
                tolerant of it.
              </p>
              <p className="font-body text-neutral leading-relaxed">
                The aesthetic translates naturally too — covered outdoor
                living spaces, shaded verandas, and a majlis built in warm,
                textured timber rather than poured concrete.
              </p>
            </Reveal>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
