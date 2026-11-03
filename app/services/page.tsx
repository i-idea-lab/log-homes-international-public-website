import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

const SERVICES = [
  {
    title: "Design & Architecture",
    description:
      "In-house architects translate a site and a brief into a full design — from initial concept sketches through detailed drawings and 3D walkthroughs — before a single log is cut.",
  },
  {
    title: "Construction",
    description:
      "A dedicated site team executes the build using imported, kiln-dried timber and load-bearing frame construction, with regular progress reviews shared throughout.",
  },
  {
    title: "Custom Wood Selection",
    description:
      "Timber is sourced and dimensioned to the specific character of each project — from 38mm to 100mm profiles — balancing aesthetics, insulation, and structural needs.",
  },
  {
    title: "Maintenance",
    description:
      "Wooden homes are a long-term asset, not a one-time build. Ongoing maintenance support keeps finishes, seals, and structural elements in condition for decades.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          title="From First Sketch to Final Handover"
          intro="A single team carries every project end to end — design, construction, material sourcing, and long-term maintenance."
        />

        <section className="bg-paper py-16 md:py-24">
          <Container>
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} index={i + 1} {...service} />
            ))}
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
