import Image from "next/image";
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
              <RevealImage className="aspect-[4/5]" curtainColor="bg-putty">
                <Image
                  src="/images/about/oman-trade-expo.jpg"
                  alt="Log Homes International expansion into Oman"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
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

        {/* About The Founder */}
        <section className="bg-wood-dark py-24 md:py-32 text-paper relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C29B38_1px,transparent_1px)] [background-size:24px_24px]" />
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Founder Monogram / Frame Placeholder */}
              <div className="lg:col-span-5">
                <Reveal>
                  <div className="relative aspect-[3/4] w-full max-w-md mx-auto border border-gold/30 p-3 bg-brand/50">
                    <div className="relative h-full w-full bg-brand/90 flex flex-col items-center justify-center p-8 text-center border border-dashed border-gold/25">
                      <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center mb-6 text-gold font-display text-2xl tracking-widest bg-gold/5 shadow-inner">
                        SS
                      </div>
                      <span className="font-display text-2xl text-paper tracking-wide mb-1">
                        Shoaib Shaikh
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-gold mb-6">
                        Founder &amp; Managing Director
                      </span>
                      <p className="font-body text-xs text-paper/60 leading-relaxed max-w-xs">
                        Pioneering authentic solid timber architecture in India &amp; the GCC since 2012.
                      </p>
                      <div className="mt-8 pt-6 border-t border-paper/10 w-full flex items-center justify-center text-paper/40 font-mono text-[11px] tracking-wider uppercase">
                        <span>Official Portrait Forthcoming</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Founder Letter / Narrative */}
              <div className="lg:col-span-7">
                <Reveal>
                  <Eyebrow>Founder&apos;s Perspective</Eyebrow>
                  <SplitHeading
                    as="h2"
                    text="&ldquo;A wooden home, built honestly, is not a rustic compromise &mdash; it is the ultimate expression of permanence.&rdquo;"
                    className="font-display text-2xl md:text-3xl lg:text-4xl text-paper mb-8 leading-snug"
                  />
                  <div className="space-y-4 font-body text-paper/80 leading-relaxed text-base">
                    <p>
                      When I founded Log Homes India in 2012, authentic solid timber construction was virtually unheard of in our region. Most builders relied on concrete and brick, dismissing wood as either vulnerable to extreme heat or purely cosmetic.
                    </p>
                    <p>
                      I believed otherwise. Having studied European timber engineering and joinery, I knew that properly harvested, kiln-dried Nordic spruce and Siberian pine could outlast masonry when detailed with care. Wood breathes, naturally regulates thermal comfort in both cold mountain winters and arid desert climates, and develops a richer patina over decades.
                    </p>
                    <p>
                      Our expansion into Oman under Log Homes International represents the natural evolution of this journey. Every home we build remains an uncompromising commitment to honest materials, master carpentry, and architecture that lives in quiet harmony with its environment.
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-paper/15 flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-xl text-paper">Shoaib Shaikh</h4>
                      <p className="font-mono text-xs uppercase tracking-wider text-gold mt-0.5">
                        Founder &amp; Managing Director
                      </p>
                    </div>
                    <div className="font-serif italic text-gold/80 text-xl tracking-wider select-none">
                      Shoaib Shaikh
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
