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
    tag: "Master Timber Joinery",
    pledge: "Carpenters trained exclusively in solid wood",
    description:
      "Every joint, beam, and finish is executed by carpenters trained specifically in timber-frame construction — not adapted from conventional masonry work.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 text-gold" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="36" height="32" rx="2" stroke="currentColor" />
        <path d="M18 8v10l6 4-6 4v14" />
        <path d="M30 8v10l-6 4 6 4v14" />
        <circle cx="24" cy="22" r="2.5" fill="currentColor" />
        <path d="M12 16h24" strokeDasharray="2 2" strokeWidth="1" />
        <path d="M12 32h24" strokeDasharray="2 2" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Accountability",
    tag: "Single-Source Stewardship",
    pledge: "One dedicated team from design to handover",
    description:
      "One in-house team carries a project from first site visit through design, construction, and handover — a single point of contact throughout.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 text-gold" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4l16 6v14c0 11-7.5 20-16 23-8.5-3-16-12-16-23V10l16-6z" />
        <path d="M24 15v14" />
        <path d="M18 21l6-6 6 6" />
        <circle cx="24" cy="29" r="2" fill="currentColor" />
        <path d="M16 34h16" />
      </svg>
    ),
  },
  {
    title: "Longevity",
    tag: "Generational Resilience",
    pledge: "Slow-grown Nordic timber built for decades",
    description:
      "Imported, kiln-dried timber and load-bearing frame construction are chosen for structures meant to last for decades, not seasons.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-7 h-7 text-gold" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="13" strokeDasharray="3 2" />
        <circle cx="24" cy="24" r="8" />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        <path d="M24 6v4 M24 38v4 M6 24h4 M38 24h4" />
      </svg>
    ),
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 0.1}>
                  <div className="h-full border border-putty/70 bg-sand/20 hover:border-gold/60 hover:bg-sand/35 transition-all duration-300 p-8 md:p-10 rounded-xs flex flex-col justify-between group shadow-xs">
                    <div>
                      {/* Top Bar: Icon + Numeral */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-14 h-14 rounded-xs border border-gold/40 bg-paper flex items-center justify-center text-gold group-hover:scale-105 group-hover:border-gold transition-transform duration-300 shadow-xs">
                          {pillar.icon}
                        </div>
                        <span className="font-display text-2xl text-gold/60 font-semibold tracking-wider">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Title & Tag */}
                      <h3 className="font-display text-2xl text-brand mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-gold font-semibold mb-4">
                        {pillar.tag}
                      </p>

                      {/* Description */}
                      <p className="font-body text-neutral leading-relaxed text-sm">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Bottom pledge indicator */}
                    <div className="mt-8 pt-4 border-t border-putty/60 flex items-center gap-2 text-xs font-body text-brand/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>{pillar.pledge}</span>
                    </div>
                  </div>
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
