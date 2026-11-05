"use client";

import { motion } from "motion/react";
import Container from "./Container";
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
    <section className="relative pt-24 pb-8 md:pt-28 md:pb-10 overflow-hidden bg-wood-dark border-b border-paper/10">
      {/* Entrance curtain, same treatment as the homepage hero */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute inset-0 z-10 bg-brand"
      />
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
          }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12"
        >
          <div className="max-w-xl">
            <motion.p
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="font-body text-xs font-semibold uppercase tracking-eyebrow text-gold mb-1.5"
            >
              {eyebrow}
            </motion.p>
            <SplitHeading
              as="h1"
              text={title}
              delay={0.25}
              className="font-display text-2xl sm:text-3xl md:text-4xl text-paper"
            />
          </div>
          {intro && (
            <motion.p
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="font-body text-putty/85 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed md:pb-1"
            >
              {intro}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
