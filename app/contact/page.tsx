import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { OFFICES } from "@/lib/offices";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Tell Us About Your Site"
          intro="Reach out for a consultation, or visit our Muscat office."
        />

        <section className="bg-paper py-16 md:py-24">
          <Container className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-16">
            <Reveal>
              <ContactForm defaultCountryIso="OM" />
            </Reveal>

            <Reveal delay={0.1} className="space-y-10">
              {OFFICES.map((office) => (
                <div key={office.name}>
                  <Eyebrow>{office.name}</Eyebrow>
                  <p className="font-body text-neutral leading-relaxed mb-2">
                    {office.address}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s+/g, "")}`}
                    className="font-body text-brand hover:text-gold"
                  >
                    {office.phone}
                  </a>
                </div>
              ))}
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
