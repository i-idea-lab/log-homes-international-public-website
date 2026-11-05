"use client";

import { useScroll } from "motion/react";
import { useCallback, useRef, useState } from "react";
import ProcessSteps from "./ProcessSteps";
import ProcessVisual from "./ProcessVisual";
import type { ProcessStep } from "@/app/process/page";

export default function ProcessScrollytelling({
  steps,
}: {
  steps: ProcessStep[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const handleSelectStep = useCallback((index: number) => {
    setActiveStep(index);
    const targetEl = document.getElementById(steps[index].id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [steps]);

  return (
    <div ref={containerRef} className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start relative">
      {/* Left Column: Vertical Process Steps */}
      <div className="lg:col-span-6 xl:col-span-7">
        <ProcessSteps
          steps={steps}
          activeStep={activeStep}
          onStepVisible={setActiveStep}
        />
      </div>

      {/* Right Column: Sticky Architectural Visual & Blueprint Canvas */}
      <div className="hidden lg:block lg:col-span-6 xl:col-span-5 sticky top-28">
        <ProcessVisual
          steps={steps}
          activeStep={activeStep}
          scrollYProgress={scrollYProgress}
          onSelectStep={handleSelectStep}
        />
      </div>
    </div>
  );
}
