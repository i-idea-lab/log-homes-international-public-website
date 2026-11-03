import { Variants } from "motion/react";

// Shared, restrained motion variants — luxury reads as confidence, not spectacle.
// Keep durations modest and easing soft; nothing should feel bouncy or playful.

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

// Respect prefers-reduced-motion: components using these variants should
// check this and fall back to opacity-only transitions with no movement.
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Splits a string into words for staggered heading reveals (SplitHeading.tsx).
export const splitWords = (text: string) => text.split(" ");

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Shared spring used for magnetic buttons and the custom cursor — soft and
// a little heavy, so it feels considered rather than snappy/toy-like.
export const magneticSpring = { stiffness: 150, damping: 15, mass: 0.15 };
