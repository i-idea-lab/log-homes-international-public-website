import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ProcessScrollytelling from "@/components/ProcessScrollytelling";
import CTASection from "@/components/CTASection";

const STEPS = [
  {
    title: "Consultation",
    short: "Consult",
    description:
      "An initial conversation about your site, vision, and budget — in person where possible, to understand the land before designing for it.",
  },
  {
    title: "Design",
    short: "Design",
    description:
      "Our architecture team develops concept drawings and a 3D walkthrough, refined together with you until the design is right.",
  },
  {
    title: "Material Selection",
    short: "Materials",
    description:
      "Timber is sourced and dimensioned specifically for the project, balancing the look, insulation, and structural needs of the design.",
  },
  {
    title: "Construction",
    short: "Build",
    description:
      "A dedicated site team builds to the approved design, with regular progress updates shared throughout the build.",
  },
  {
    title: "Handover",
    short: "Handover",
    description:
      "A final walkthrough and quality check before the keys — and the relationship — hand over to ongoing maintenance support.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="The Process"
          title="Five Stages, One Point of Accountability"
          intro="From first consultation to final handover, one in-house team carries the project throughout — no handoffs between separate contractors."
        />

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <ProcessScrollytelling steps={STEPS} />
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
