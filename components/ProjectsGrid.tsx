"use client";

import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import Eyebrow from "./Eyebrow";
import SplitHeading from "./SplitHeading";
import Button from "./Button";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { useCursor } from "@/lib/cursor-context";
import { PROJECTS } from "@/lib/projects";

// Homepage "Selected Work" carousel. Native scroll-snap track (touch, trackpad
// and mouse-wheel-shift all work) plus arrow buttons and a progress line.
// Add more entries in lib/projects.ts and they appear here automatically.
export default function ProjectsGrid() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);
  const { setCursor, resetCursor } = useCursor();

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  // Auto-scroll every 3 seconds; loop back to start once end is reached
  useEffect(() => {
    const interval = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 5) return;

      // When reaching or near the end, smoothly return to the first card
      if (el.scrollLeft >= max - 25) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const firstCard = el.firstElementChild as HTMLElement | null;
        const cardStep = firstCard ? firstCard.offsetWidth + 24 : el.clientWidth * 0.8;
        const target = Math.min(el.scrollLeft + cardStep, max);
        el.scrollTo({ left: target, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardStep = firstCard ? firstCard.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * cardStep, behavior: "smooth" });
  };

  const arrowClasses =
    "flex h-12 w-12 items-center justify-center border border-brand/30 text-brand transition-colors duration-300 hover:bg-brand hover:text-paper disabled:pointer-events-none disabled:opacity-30";

  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-xl"
          >
            <Eyebrow>Selected Work</Eyebrow>
            <SplitHeading
              as="h2"
              text="A portfolio of quiet, considered craftsmanship"
              className="font-display text-3xl md:text-4xl text-brand"
            />
          </motion.div>

          <div className="flex gap-3">
            <button
              aria-label="Previous projects"
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
              onMouseEnter={() => setCursor({ variant: "link" })}
              onMouseLeave={resetCursor}
              className={arrowClasses}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              aria-label="Next projects"
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
              onMouseEnter={() => setCursor({ variant: "link" })}
              onMouseLeave={resetCursor}
              className={arrowClasses}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          onScroll={update}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.15)}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="shrink-0 basis-[78%] snap-start sm:basis-[46%] lg:basis-[calc((100%-3rem)/3)]"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </motion.div>

        {/* Progress line */}
        <div className="mt-10 h-px w-full bg-putty">
          <div
            className="h-px bg-gold transition-[width] duration-300"
            style={{ width: `${Math.max(progress * 100, 100 / PROJECTS.length)}%` }}
          />
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/projects" variant="outline">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
