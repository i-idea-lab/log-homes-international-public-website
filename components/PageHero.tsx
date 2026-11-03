"use client";

import { motion } from "motion/react";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import SplitHeading from "./SplitHeading";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-wood-dark">
      {/* Entrance curtain, same treatment as the homepage hero */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute inset-0 z-10 bg-brand"
      />
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
          }}
          className="max-w-2xl"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </motion.div>
          <SplitHeading
            as="h1"
            text={title}
            delay={0.65}
            className="font-display text-4xl md:text-5xl text-paper mb-6"
          />
          {intro && (
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="font-body text-putty/90 text-lg"
            >
              {intro}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
