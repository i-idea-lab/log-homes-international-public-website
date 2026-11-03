"use client";

import { motion } from "motion/react";
import { ElementType } from "react";
import { splitWords, wordReveal, staggerContainer } from "@/lib/motion";

export default function SplitHeading({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  once = true,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const words = splitWords(text);

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-80px" }}
        variants={staggerContainer(0.08, delay)}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom pb-[0.18em] -mb-[0.18em]"
          >
            <motion.span variants={wordReveal} className="inline-block">
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
