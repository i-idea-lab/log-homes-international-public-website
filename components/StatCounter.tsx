"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

export default function StatCounter({
  value,
  suffix = "",
  label,
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl text-brand">
        {display}
        {suffix}
      </p>
      <p className="font-body text-xs md:text-sm uppercase tracking-eyebrow text-neutral mt-2">
        {label}
      </p>
    </div>
  );
}
