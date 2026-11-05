"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { ProcessStep } from "@/app/process/page";

export default function ProcessSteps({
  steps,
  activeStep,
  onStepVisible,
}: {
  steps: ProcessStep[];
  activeStep: number;
  onStepVisible: (index: number) => void;
}) {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              onStepVisible(index);
            }
          });
        },
        {
          rootMargin: "-25% 0px -35% 0px",
          threshold: 0.1,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [onStepVisible, steps.length]);

  return (
    <div className="relative">
      {/* Background vertical line */}
      <div className="absolute left-[15px] top-8 bottom-8 w-px bg-putty/70" />

      {/* Progress fill line */}
      <div
        className="absolute left-[15px] top-8 w-px bg-gold transition-[height] duration-500 ease-out"
        style={{
          height: `${(activeStep / (steps.length - 1)) * 92}%`,
        }}
      />

      <div className="space-y-16 lg:space-y-28">
        {steps.map((step, i) => {
          const isActive = i === activeStep;
          const isPast = i < activeStep;

          return (
            <div
              key={step.id}
              id={step.id}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`relative pl-12 lg:pl-14 transition-all duration-500 min-h-[45vh] lg:min-h-[55vh] flex flex-col justify-center ${
                isActive ? "opacity-100" : isPast ? "opacity-60" : "opacity-40"
              }`}
            >
              {/* Node Indicator Dot */}
              <div
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${
                  isActive
                    ? "border-gold bg-wood-dark shadow-md scale-110"
                    : isPast
                    ? "border-gold bg-gold text-paper"
                    : "border-putty bg-paper"
                }`}
              >
                {isPast ? (
                  <svg className="w-3.5 h-3.5 text-paper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      isActive ? "bg-gold" : "bg-putty"
                    }`}
                  />
                )}
              </div>

              {/* Stage Sub-Badge */}
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                  {step.phase}
                </span>
                <span className="h-px w-6 bg-gold/40" />
                <span className="font-mono text-xs text-neutral/70">
                  {step.timeline}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl text-brand mb-4">
                {step.title}
              </h3>

              {/* Mobile Image (inline for small screens) */}
              <div className="lg:hidden relative aspect-[16/10] w-full rounded-xs overflow-hidden my-4 border border-brand/10 shadow-sm">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-brand/90 text-paper text-[11px] font-mono uppercase px-2.5 py-0.5 tracking-wider border border-gold/40">
                  {step.number} / 05
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-neutral leading-relaxed text-base max-w-xl mb-6">
                {step.description}
              </p>

              {/* Key Deliverables Chips */}
              <div className="space-y-2">
                <h5 className="font-mono text-[11px] uppercase tracking-wider text-brand font-semibold">
                  Stage Inclusions:
                </h5>
                <ul className="space-y-1.5">
                  {step.deliverables.map((item, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-center gap-2 font-body text-xs text-neutral"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
