import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ProcessScrollytelling from "@/components/ProcessScrollytelling";
import CTASection from "@/components/CTASection";

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  short: string;
  phase: string;
  timeline: string;
  description: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
}

const STEPS: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Consultation & Site Discovery",
    short: "Consult",
    phase: "Stage 01 · Site Discovery",
    timeline: "Weeks 1–2",
    description:
      "Every project begins with a personal conversation and a deep study of your plot. Our architects examine the land's contours, wind patterns, solar orientation, and panoramic views — in person wherever possible — before drawing a single line.",
    deliverables: [
      "Topographical & microclimate land evaluation",
      "Bespoke spatial & lifestyle brief discovery",
      "Initial feasibility, budget & timeline framework",
    ],
    image: "/images/services/design-architecture.jpg",
    imageAlt: "Architect studying blueprints and site plan during initial consultation",
  },
  {
    id: "step-2",
    number: "02",
    title: "Architectural Design & 3D Walkthrough",
    short: "Design",
    phase: "Stage 02 · 3D Modeling & CAD",
    timeline: "Weeks 3–6",
    description:
      "Our in-house architecture studio develops concept drawings, structural timber engineering plans, and interactive 3D virtual walkthroughs. We refine layouts together until every room, sightline, and joinery detail feels effortless.",
    deliverables: [
      "Hyper-realistic 3D spatial walkthrough & renderings",
      "Structural timber engineering & joinery specifications",
      "Statutory approval drawings & prefabrication cut sheets",
    ],
    image: "/images/materials/craft-joinery.jpg",
    imageAlt: "Architectural timber joinery drawings and precision scale model",
  },
  {
    id: "step-3",
    number: "03",
    title: "Certified Timber Selection & Milling",
    short: "Materials",
    phase: "Stage 03 · Sourcing & Profiling",
    timeline: "Weeks 7–9",
    description:
      "We source certified, slow-grown Nordic spruce and Siberian pine, kiln-dried to an exact 12%–14% moisture content to eliminate shrinking or warping. Each log is CNC-milled with interlocking double tongue-and-groove joints.",
    deliverables: [
      "FSC-certified kiln-dried solid timber logs (12%–14% MC)",
      "Precision CNC tongue-and-groove profile milling",
      "Organic anti-termite, fungal & UV-protective infusion",
    ],
    image: "/images/materials/kiln-dried-timber.jpg",
    imageAlt: "Kiln-dried timber logs stacked in temperature-controlled warehouse",
  },
  {
    id: "step-4",
    number: "04",
    title: "On-Site Timber Construction",
    short: "Build",
    phase: "Stage 04 · Rapid Assembly",
    timeline: "Weeks 10–16",
    description:
      "Our dedicated in-house team of master timber carpenters erects the superstructure on your foundation with millimetric precision. Because components are pre-milled, on-site assembly is quiet, clean, and completed in a fraction of conventional build times.",
    deliverables: [
      "Heavy post-and-beam and load-bearing timber frame assembly",
      "Compression-fit weather seals & multi-layer roof insulation",
      "Architectural glazing, doors & preliminary interior finishes",
    ],
    image: "/images/services/timber-construction.jpg",
    imageAlt: "Skilled carpenters fitting heavy timber roof trusses on site",
  },
  {
    id: "step-5",
    number: "05",
    title: "Final Handover & Stewardship",
    short: "Handover",
    phase: "Stage 05 · Handover & Care",
    timeline: "Week 17+",
    description:
      "A comprehensive joint walkthrough and 120-point quality audit ensure every seal, lock, and timber surface is pristine. We hand over the keys alongside a dedicated maintenance schedule and ongoing warranty support for decades to come.",
    deliverables: [
      "120-point quality handover inspection & certification",
      "Comprehensive homeowner care manual & warranty dossier",
      "Scheduled annual maintenance program & priority support",
    ],
    image: "/images/projects/lakeside-mountain-villa.jpg",
    imageAlt: "Completed luxury solid timber lake villa ready for handover",
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

        <section className="bg-paper py-20 md:py-28">
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
