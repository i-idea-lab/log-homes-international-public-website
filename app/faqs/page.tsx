import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

// PLACEHOLDER copy — review against the owner's actual policies (import
// logistics, timelines, warranty terms, pricing/currency) before this goes
// live. These are genuinely different questions from the India site's FAQ,
// not a find-and-replace of the same answers.
const FAQS = [
  {
    question: "How long does a build take, including shipping?",
    answer:
      "Timelines account for both the build itself and shipping timber from India to Oman. Most projects move from signed design to handover within several months — exact timing depends on size, site conditions, and shipping schedules, agreed upfront.",
  },
  {
    question: "How is the timber imported into Oman?",
    answer:
      "Timber is kiln-dried and prepared in India before shipment, then imported to Oman for assembly on site. Import logistics are handled as part of the project — it's not something you need to arrange separately.",
  },
  {
    question: "Is pricing available in Omani Rial?",
    answer:
      "Yes — quotes for Oman-based projects are provided in OMR.",
  },
  {
    question: "Do you build outside Muscat?",
    answer:
      "Our office is based in Muscat, but projects are undertaken across Oman and the wider Gulf — site visits and logistics are planned per project.",
  },
  {
    question: "What ongoing maintenance is required?",
    answer:
      "Wooden homes benefit from periodic finish and seal maintenance, and Oman's climate makes this more important, not less. Our team offers ongoing support to keep structures in condition for decades.",
  },
  {
    question: "Can I see 3D designs before construction begins?",
    answer:
      "Yes — our in-house design team produces detailed drawings and 3D walkthroughs as part of the design stage, before construction starts.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="FAQs"
          title="Common Questions, Answered"
        />

        <section className="bg-paper py-16 md:py-24">
          <Container>
            <FAQAccordion items={FAQS.map(({ question, answer }) => ({ question, answer }))} />
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
