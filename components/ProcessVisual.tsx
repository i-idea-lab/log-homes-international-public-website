"use client";

import { AnimatePresence, motion, MotionValue, useTransform } from "motion/react";

const circle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy} A${r} ${r} 0 1 0 ${cx + r} ${cy} A${r} ${r} 0 1 0 ${cx - r} ${cy}`;

// One icon per process stage, drawn on a 120×120 grid: line-art only, so each
// path can "draw itself" via pathLength. Order matches the steps in
// app/process/page.tsx — if steps are added or reordered there, update here,
// and keep ICONS.length equal to steps.length.
const ICONS: string[][] = [
  // 1 · Consultation — two speech bubbles
  [
    "M24 22 H64 A10 10 0 0 1 74 32 V52 A10 10 0 0 1 64 62 H40 L26 76 V62 H24 A10 10 0 0 1 14 52 V32 A10 10 0 0 1 24 22 Z",
    "M68 66 H98 A10 10 0 0 1 108 76 V86 A10 10 0 0 1 98 96 H96 V106 L84 96 H68 A10 10 0 0 1 58 86 V76 A10 10 0 0 1 68 66 Z",
    "M28 42 H36 M42 42 H50 M56 42 H62",
  ],
  // 2 · Design — blueprint house with a dimension line
  [
    "M22 60 L60 26 L98 60 V96 H22 Z",
    "M52 96 V74 H68 V96",
    "M22 110 H98 M22 105 V115 M98 105 V115",
  ],
  // 3 · Material Selection — stacked logs, end-on
  [
    circle(48, 86, 20),
    circle(88, 86, 20),
    circle(68, 51, 20),
    circle(48, 86, 9),
    circle(88, 86, 9),
    circle(68, 51, 9),
    "M12 108 H108",
  ],
  // 4 · Construction — timber frame with roof truss and knee braces
  [
    "M14 102 H106",
    "M24 102 V50 M96 102 V50",
    "M18 50 H102",
    "M18 50 L60 20 L102 50",
    "M60 20 V50",
    "M24 76 L44 50 M96 76 L76 50",
  ],
  // 5 · Handover — the key
  [
    circle(36, 60, 18),
    circle(36, 60, 6),
    "M54 60 H106",
    "M84 60 V74 M96 60 V78",
  ],
];

// One stroke within one step's icon. `localProgress` is 0→1 across just that
// step's slice of the overall scroll range; `start`/`end` stagger this path
// against its siblings within that same slice, so the icon draws
// stroke-by-stroke as the user scrolls through the step — not on a clock.
function AnimatedPath({
  d,
  localProgress,
  start,
  end,
}: {
  d: string;
  localProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const pathLength = useTransform(localProgress, [start, end], [0, 1], {
    clamp: true,
  });
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="#DEA880"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ pathLength }}
    />
  );
}

// One step's full icon. Visible only while scroll sits within this step's
// slice of the overall range (a quick crossfade at each boundary); its paths
// draw in from that same slice, staggered. Because everything here derives
// from scroll position rather than a timer, the icon is guaranteed to be
// fully drawn by the moment its slice ends — there's no clock left to fall
// behind if the user scrolls fast.
function AnimatedIcon({
  paths,
  scrollYProgress,
  index,
  total,
}: {
  paths: string[];
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const margin = 0.15 / total;

  const opacity = useTransform(
    scrollYProgress,
    [start - margin, start, end, end + margin],
    [0, 1, 1, 0],
    { clamp: true }
  );
  const localProgress = useTransform(scrollYProgress, [start, end], [0, 1], {
    clamp: true,
  });

  return (
    <motion.svg
      viewBox="0 0 120 120"
      style={{ opacity }}
      className="absolute inset-0"
    >
      {paths.map((d, i) => {
        // Staggered, overlapping draw windows within this step's local
        // progress, with room left over at the end so the completed icon
        // sits still for a beat before the next one crossfades in.
        const pathStart = (i / paths.length) * 0.6;
        const pathEnd = pathStart + 0.4;
        return (
          <AnimatedPath
            key={i}
            d={d}
            localProgress={localProgress}
            start={pathStart}
            end={pathEnd}
          />
        );
      })}
    </motion.svg>
  );
}

export default function ProcessVisual({
  steps,
  scrollYProgress,
  activeStep,
}: {
  steps: { title: string; short: string }[];
  scrollYProgress: MotionValue<number>;
  activeStep: number;
}) {
  const stepLabel = String(activeStep + 1).padStart(2, "0");

  return (
    <div className="relative overflow-hidden bg-wood-dark p-8 md:p-10">
      {/* Oversized watermark numeral */}
      <AnimatePresence mode="wait">
        <motion.span
          key={`n-${activeStep}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none absolute -right-2 -top-8 select-none font-display text-[11rem] leading-none text-paper/[0.05]"
        >
          {stepLabel}
        </motion.span>
      </AnimatePresence>

      <p className="relative font-body text-xs uppercase tracking-eyebrow text-gold">
        Step {stepLabel} / {String(steps.length).padStart(2, "0")}
      </p>

      {/* Icons stack absolutely and crossfade — see AnimatedIcon */}
      <div className="relative mx-auto my-8 aspect-square w-full max-w-[15rem]">
        {ICONS.map((paths, i) => (
          <AnimatedIcon
            key={i}
            paths={paths}
            scrollYProgress={scrollYProgress}
            index={i}
            total={steps.length}
          />
        ))}
      </div>

      <div className="relative min-h-[2.5rem]">
        <AnimatePresence mode="wait">
          <motion.h3
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="font-display text-2xl text-paper"
          >
            {steps[activeStep]?.title}
          </motion.h3>
        </AnimatePresence>
      </div>

      {/* Stage tracker — the fill line is bound directly to overall scroll
          progress (not the discrete step), so it moves continuously */}
      <div className="relative mt-8">
        <div className="absolute left-0 right-0 top-[7px] h-px bg-putty/20" />
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute left-0 right-0 top-[7px] h-px origin-left bg-gold"
        />
        <div className="relative flex justify-between">
          {steps.map((s, i) => (
            <div key={s.title} className="flex w-0 flex-col items-center">
              <span
                className={`h-[15px] w-[15px] rounded-full border transition-colors duration-500 ${
                  i <= activeStep ? "border-gold bg-gold" : "border-putty/40 bg-wood-dark"
                }`}
              />
              <span
                className={`mt-3 whitespace-nowrap font-body text-[10px] uppercase tracking-eyebrow transition-colors duration-500 ${
                  i === activeStep ? "text-paper" : "text-putty/40"
                }`}
              >
                {s.short}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
