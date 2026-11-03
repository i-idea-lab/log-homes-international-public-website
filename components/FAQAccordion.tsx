"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Reveal from "./Reveal";

export default function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal key={item.question} delay={i * 0.03}>
            <div className="border-b border-putty">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg md:text-xl text-brand">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 font-display text-2xl text-gold"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-neutral leading-relaxed pb-6 max-w-2xl">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
