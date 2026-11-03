import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import SplitHeading from "@/components/SplitHeading";
import RevealImage from "@/components/RevealImage";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

const DETAILS = [
  {
    title: "Imported, Kiln-Dried Timber",
    description:
      "Wood is kiln-dried before it ever reaches a site — reducing moisture content so the timber won't warp, crack, or shift once built.",
    image: "/images/materials/kiln-dried-timber.jpg",
    alt: "Kiln-dried timber beams stacked in craftsman facility",
  },
  {
    title: "Tongue-and-Groove Joinery",
    description:
      "Logs interlock via precision-cut tongue-and-groove joints, dimensioned from 38mm to 100mm depending on the project's climate and structural needs.",
    image: "/images/materials/tongue-and-groove-joinery.jpg",
    alt: "Precision tongue-and-groove interlocking timber joints",
  },
  {
    title: "Load-Bearing Frame Construction",
    description:
      "The timber frame itself carries the structural load — not a decorative cladding over conventional construction — built to stand for decades.",
    image: "/images/materials/load-bearing-frame.jpg",
    alt: "Massive exposed load-bearing solid timber frame structure",
  },
];

export default function MaterialsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Materials & Craftsmanship"
          title="What Luxury Actually Means Here"
          intro="Not ornamentation — material honesty. Every home is built from timber selected, dried, and joined to last."
        />

        <section className="bg-paper py-24 md:py-32">
          <Container className="space-y-24 md:space-y-32">
            {DETAILS.map((detail, i) => (
              <div
                key={detail.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <RevealImage className="aspect-[4/3] rounded-sm shadow-md" curtainColor="bg-wood-dark">
                  <Image
                    src={detail.image}
                    alt={detail.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </RevealImage>
                <Reveal>
                  <Eyebrow>{`0${i + 1}`}</Eyebrow>
                  <SplitHeading
                    as="h2"
                    text={detail.title}
                    className="font-display text-3xl md:text-4xl text-brand mb-6"
                  />
                  <p className="font-body text-neutral leading-relaxed max-w-lg">
                    {detail.description}
                  </p>
                </Reveal>
              </div>
            ))}
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
