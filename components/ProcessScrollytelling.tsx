"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import ProcessSteps from "./ProcessSteps";
import ProcessVisual from "./ProcessVisual";

// Text steps scroll normally on the left; the panel on the right stays
// sticky and is driven DIRECTLY by scroll position, not a timer. Each step
// gets an even slice of the scroll range spanning this whole container, and
// how far the user has scrolled through a slice IS how much of that step's
// icon has drawn (see ProcessVisual/AnimatedIcon). There's no clock to fall
// behind: by the moment the panel scrolls out of its sticky window, the
// scroll fraction has necessarily reached that slice's endpoint too, so the
// icon is always left fully drawn — never caught mid-stroke, however fast
// someone scrolls.
//
// To put the panel on the left instead, add `lg:order-first` to its wrapper
// div below.
export default function ProcessScrollytelling({
  steps,
}: {
  steps: { title: string; short: string; description: string }[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Only used for the discrete bits (step title crossfade, tracker dots) —
  // the icon drawing itself reads scrollYProgress continuously, not this.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    setActiveStep((prev) => (prev === next ? prev : next));
  });

  return (
    <div ref={containerRef} className="grid gap-16 lg:grid-cols-2 lg:gap-24">
      <ProcessSteps steps={steps} />
      <div className="hidden lg:block">
        <div className="sticky top-32">
          <ProcessVisual
            steps={steps}
            scrollYProgress={scrollYProgress}
            activeStep={activeStep}
          />
        </div>
      </div>
    </div>
  );
}
