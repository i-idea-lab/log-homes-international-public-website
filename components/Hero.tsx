"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Container from "./Container";
import Button from "./Button";
import MagneticButton from "./MagneticButton";
import SplitHeading from "./SplitHeading";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax: background drifts slower than scroll, never more than ~15%.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Flagship Hero Photography */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] h-[120%]"
      >
        <Image
          src="/images/hero/hero-lake-villa.jpg"
          alt="Luxury lakefront wooden villa by Log Homes International"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="hero-overlay absolute inset-0 bg-wood-dark/40 backdrop-brightness-95" />

      {/* Entrance curtain — wipes away once on load, above everything else in the hero */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
        style={{ transformOrigin: "top" }}
        className="absolute inset-0 z-20 bg-wood-dark"
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex h-full items-center"
      >
        <Container>
          <motion.div
            variants={staggerContainer(0.15, 0.9)}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="font-body text-xs md:text-sm font-semibold uppercase tracking-eyebrow text-gold-glow mb-6"
            >
              Log Homes International · Est. 2012
            </motion.p>

            <SplitHeading
              as="h1"
              text="Building Luxury With Logs...!"
              delay={1.05}
              className="font-display text-4xl md:text-6xl leading-[1.08] text-paper mb-6"
            />

            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-lg text-putty/90 mb-10 max-w-lg"
            >
              The craftsmanship behind Log Homes India, now building for
              the Gulf&rsquo;s resorts, retreats, and private residences —
              imported, kiln-dried timber and joinery mastered over a
              decade.
            </motion.p>

            <motion.div variants={fadeUp}>
              <MagneticButton>
                <Button href="/contact">Request a Consultation</Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>

      {/* Scroll cue — signals that more content sits below the fold */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-body text-[10px] uppercase tracking-eyebrow text-putty/60">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-9 w-[1px] bg-putty/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
