"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

// Wraps an image (or, for now, a placeholder block) in a scale-in + curtain
// wipe reveal on scroll-into-view. The wrapping element needs its own
// aspect-ratio/height set via className (e.g. "aspect-[4/5]").
export default function RevealImage({
  children,
  className = "",
  curtainColor = "bg-wood-dark",
}: {
  children: ReactNode;
  className?: string;
  curtainColor?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>

      <motion.div
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
        style={{ transformOrigin: "top" }}
        className={`absolute inset-0 z-10 ${curtainColor}`}
      />
    </div>
  );
}
