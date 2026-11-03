import Container from "./Container";
import Button from "./Button";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

export default function CTASection() {
  return (
    <section className="bg-brand py-24 md:py-28">
      <Container className="text-center max-w-2xl flex flex-col items-center">
        <SplitHeading
          as="h2"
          text="Building luxury with logs, wherever you dream of home"
          className="font-display text-3xl md:text-4xl text-paper mb-6"
        />
        <Reveal delay={0.2}>
          <p className="font-body text-putty/90 mb-10">
            Tell us about your site and vision — our team will guide you
            from first consultation to final handover.
          </p>
          <MagneticButton>
            <Button href="/contact">Request a Consultation</Button>
          </MagneticButton>
        </Reveal>
      </Container>
    </section>
  );
}
