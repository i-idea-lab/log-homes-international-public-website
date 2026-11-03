"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { magneticSpring } from "@/lib/motion";
import { useCursor } from "@/lib/cursor-context";

export default function CustomCursor() {
  const { cursor } = useCursor();
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, magneticSpring);
  const springY = useSpring(y, magneticSpring);

  useEffect(() => {
    // Only on devices with a real pointer — never intercept touch.
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || reduced) return;

    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  const isView = cursor.variant === "view";
  const isLink = cursor.variant === "link";

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: isView ? 88 : isLink ? 48 : 14,
        height: isView ? 88 : isLink ? 48 : 14,
        backgroundColor: "#FAF8F3",
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {isView && (
        <span className="font-body text-[11px] uppercase tracking-eyebrow text-brand">
          View
        </span>
      )}
    </motion.div>
  );
}
