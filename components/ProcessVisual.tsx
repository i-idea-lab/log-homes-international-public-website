"use client";

import Image from "next/image";
import { AnimatePresence, motion, MotionValue } from "motion/react";
import type { ProcessStep } from "@/app/process/page";

// Architectural SVG overlays representing the physical evolution of the build:
// 1: Site discovery & topography contours
// 2: Architectural CAD blueprint & dimension lines
// 3: Interlocking tongue-and-groove log joinery profiles
// 4: Structural timber frame, columns & roof trusses
// 5: Complete luxury villa elevation with handover seal
const ARCHITECTURAL_BLUEPRINTS: {
  viewBox: string;
  paths: { d: string; strokeDash?: string }[];
}[] = [
  // Stage 1: Topography contours & orientation compass
  {
    viewBox: "0 0 200 200",
    paths: [
      { d: "M 20,100 C 60,60 140,140 180,100" },
      { d: "M 30,120 C 70,80 130,160 170,120" },
      { d: "M 15,80 C 65,40 145,120 185,80" },
      { d: "M 100,20 L 100,50 M 100,150 L 100,180" },
      { d: "M 20,100 L 50,100 M 150,100 L 180,100" },
      { d: "M 100,30 L 105,42 L 100,38 L 95,42 Z" },
    ],
  },
  // Stage 2: Architectural floor plan blueprint & dimension lines
  {
    viewBox: "0 0 200 200",
    paths: [
      { d: "M 35,45 H 165 V 155 H 35 Z" },
      { d: "M 35,100 H 115 V 155" },
      { d: "M 115,45 V 100 H 165" },
      { d: "M 65,45 V 70 H 85 V 45" },
      { d: "M 135,155 V 130 H 155 V 155" },
      { d: "M 25,45 V 155 M 20,45 H 30 M 20,155 H 30" },
      { d: "M 35,165 H 165 M 35,160 V 170 M 165,160 V 170" },
    ],
  },
  // Stage 3: Kiln-dried log cross section & interlocking joinery
  {
    viewBox: "0 0 200 200",
    paths: [
      { d: "M 40,70 Q 100,55 160,70 V 95 Q 100,110 40,95 Z" },
      { d: "M 40,95 Q 100,110 160,95 V 120 Q 100,135 40,120 Z" },
      { d: "M 40,120 Q 100,135 160,120 V 145 Q 100,160 40,145 Z" },
      { d: "M 80,70 V 145" },
      { d: "M 120,70 V 145" },
      { d: "M 90,82 A 10 10 0 1 0 110,82 A 10 10 0 1 0 90,82" },
      { d: "M 85,107 A 15 15 0 1 0 115,107 A 15 15 0 1 0 85,107" },
    ],
  },
  // Stage 4: Structural post-and-beam frame & roof truss
  {
    viewBox: "0 0 200 200",
    paths: [
      { d: "M 30,160 H 170" },
      { d: "M 45,160 V 85 M 155,160 V 85 M 100,160 V 45" },
      { d: "M 35,85 L 100,40 L 165,85 Z" },
      { d: "M 45,85 L 100,85 L 155,85" },
      { d: "M 45,120 L 75,85 M 155,120 L 125,85" },
      { d: "M 70,85 L 100,45 M 130,85 L 100,45" },
    ],
  },
  // Stage 5: Completed timber villa & handover key
  {
    viewBox: "0 0 200 200",
    paths: [
      { d: "M 30,160 H 170" },
      { d: "M 40,160 V 90 L 100,45 L 160,90 V 160 Z" },
      { d: "M 55,160 V 105 H 90 V 160" },
      { d: "M 110,110 H 145 V 140 H 110 Z" },
      { d: "M 100,45 V 90" },
      { d: "M 100,140 A 18 18 0 1 0 136,140 A 18 18 0 1 0 100,140" },
      { d: "M 136,140 H 165 M 150,140 V 150 M 160,140 V 152" },
    ],
  },
];

export default function ProcessVisual({
  steps,
  activeStep,
  scrollYProgress,
  onSelectStep,
}: {
  steps: ProcessStep[];
  activeStep: number;
  scrollYProgress: MotionValue<number>;
  onSelectStep: (index: number) => void;
}) {
  const currentStep = steps[activeStep] || steps[0];
  const blueprint = ARCHITECTURAL_BLUEPRINTS[activeStep] || ARCHITECTURAL_BLUEPRINTS[0];

  return (
    <div className="relative overflow-hidden bg-wood-dark border border-gold/30 shadow-2xl rounded-xs">
      {/* Visual Canvas Container */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-brand">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={currentStep.image}
              alt={currentStep.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-wood-dark via-wood-dark/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Blueprint Vector Drawing Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center p-8">
          <AnimatePresence mode="wait">
            <motion.svg
              key={`bp-${activeStep}`}
              viewBox={blueprint.viewBox}
              className="w-full h-full max-w-[240px] max-h-[240px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {blueprint.paths.map((p, idx) => (
                <motion.path
                  key={idx}
                  d={p.d}
                  fill="none"
                  stroke="#DFC37A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                />
              ))}
            </motion.svg>
          </AnimatePresence>
        </div>

        {/* Top Floating Badges */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <span className="bg-wood-dark/90 backdrop-blur-xs text-gold border border-gold/40 font-mono text-[11px] uppercase tracking-wider px-3 py-1">
            {currentStep.phase}
          </span>
          <span className="bg-wood-dark/90 backdrop-blur-xs text-paper/90 border border-paper/20 font-mono text-[11px] uppercase tracking-wider px-3 py-1">
            {currentStep.timeline}
          </span>
        </div>

        {/* Watermark Numeral */}
        <div className="pointer-events-none absolute right-4 bottom-2 select-none font-display text-8xl font-bold leading-none text-paper/10 z-10">
          {currentStep.number}
        </div>
      </div>

      {/* Info & Interactive Timeline Navigation Box */}
      <div className="p-6 md:p-8 bg-wood-dark text-paper relative z-20">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-gold font-semibold">
            Stage {currentStep.number} of {String(steps.length).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs text-paper/60 uppercase">
            Interactive Roadmap
          </span>
        </div>

        <h4 className="font-display text-xl md:text-2xl text-paper mb-2">
          {currentStep.title}
        </h4>

        <p className="font-body text-xs text-paper/75 leading-relaxed line-clamp-2 mb-6">
          {currentStep.description}
        </p>

        {/* Continuous Scroll Progress Track */}
        <div className="relative mb-6">
          <div className="h-1 w-full bg-paper/15 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-gold origin-left"
            />
          </div>
        </div>

        {/* Interactive Step Switcher Buttons */}
        <div className="grid grid-cols-5 gap-1.5 pt-2 border-t border-paper/10">
          {steps.map((s, index) => {
            const isCurrent = index === activeStep;
            const isCompleted = index < activeStep;

            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onSelectStep(index)}
                className={`py-2 px-1 text-center transition-all rounded-xs group flex flex-col items-center gap-1 ${
                  isCurrent
                    ? "bg-gold/20 text-gold border-b-2 border-gold"
                    : "text-paper/60 hover:text-paper hover:bg-paper/5"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full transition-all ${
                    isCurrent
                      ? "bg-gold scale-125"
                      : isCompleted
                      ? "bg-gold/60"
                      : "bg-paper/20"
                  }`}
                />
                <span className="font-mono text-[10px] tracking-wider uppercase block">
                  {s.short}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
