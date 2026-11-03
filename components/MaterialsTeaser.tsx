"use client";

import { motion } from "motion/react";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import RevealImage from "./RevealImage";
import SplitHeading from "./SplitHeading";
import Button from "./Button";
import { fadeUp } from "@/lib/motion";

// This section is written to later become a pinned scrollytelling block
// (image pinned via GSAP ScrollTrigger while this text scrolls past) once
// real material/craft photography is available — see Section 5 of the
// build scope doc. For now it's a static two-column reveal.
export default function MaterialsTeaser() {
  return (
    <section className="bg-putty py-24 md:py-32">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          {/* PLACEHOLDER — replace with a close-up material/craft photo */}
          <RevealImage className="aspect-square" curtainColor="bg-putty">
            <div className="absolute inset-0 bg-gradient-to-br from-wood-midLight to-wood-mid flex items-center justify-center">
              <span className="font-body text-xs uppercase tracking-eyebrow text-putty/70">
                Material photo pending
              </span>
            </div>
          </RevealImage>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="order-1 md:order-2"
        >
          <Eyebrow>Materials &amp; Craftsmanship</Eyebrow>
          <SplitHeading
            as="h2"
            text="Kiln-dried timber, joinery mastered over a decade"
            className="font-display text-3xl md:text-4xl text-brand mb-6"
          />
          <p className="font-body text-neutral leading-relaxed mb-4">
            Every home begins with imported, kiln-dried wood — dimensioned
            from 38mm to 100mm and interlocked with tongue-and-groove
            joinery, set within a load-bearing timber frame built to last
            for decades.
          </p>
          <p className="font-body text-neutral leading-relaxed">
            An in-house design and architecture team carries each project
            from first site visit through 3D walkthroughs to final
            handover — a single point of accountability from concept to
            completion.
          </p>
          <div className="mt-8">
            <Button href="/materials" variant="outline">
              Explore Materials &amp; Craftsmanship
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
