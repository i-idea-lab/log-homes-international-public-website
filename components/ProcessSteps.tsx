"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Reveal from "./Reveal";

export default function ProcessSteps({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative max-w-3xl">
      {/* Track + drawing line */}
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-putty" />
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-[11px] top-2 w-px bg-gold origin-top"
      />

      <div className="space-y-14">
        {steps.map((step, i) => (
          <Reveal key={step.title} className="relative pl-12">
            <span className="absolute left-0 top-1 h-6 w-6 rounded-full border-2 border-gold bg-paper flex items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-gold" />
            </span>
            <p className="font-body text-xs uppercase tracking-eyebrow text-gold mb-2">
              Step {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display text-2xl text-brand mb-2">{step.title}</h3>
            <p className="font-body text-neutral leading-relaxed max-w-xl">
              {step.description}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
