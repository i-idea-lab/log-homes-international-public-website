"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef } from "react";
import { useCursor } from "@/lib/cursor-context";

type Item = { title: string; description: string; image?: string };

// Controlled lightbox: parent owns `index` (null = closed). Arrow keys and
// on-screen arrows cycle through the whole set; Escape, the close button and
// a backdrop click all close it.
export default function Lightbox({
  items,
  index,
  onClose,
  onChange,
}: {
  items: Item[];
  index: number | null;
  onClose: () => void;
  onChange: (next: number) => void;
}) {
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();
  const { setCursor, resetCursor } = useCursor();

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onChange]
  );

  // Lock page scroll while open (Lenis needs an explicit stop; body overflow
  // covers the native-scroll fallback used for reduced-motion users).
  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      lenis?.start();
      document.body.style.overflow = prev;
    };
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go, onClose]);

  const item = index !== null ? items[index] : null;

  const iconButton =
    "absolute z-10 flex h-12 w-12 items-center justify-center border border-putty/30 text-paper transition-colors duration-300 hover:bg-paper hover:text-brand";

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-wood-dark/95 px-6 backdrop-blur-sm"
        >
          <button
            ref={closeRef}
            aria-label="Close gallery"
            onClick={onClose}
            onMouseEnter={() => setCursor({ variant: "link" })}
            onMouseLeave={resetCursor}
            className={`${iconButton} right-5 top-5 md:right-8 md:top-8`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            onMouseEnter={() => setCursor({ variant: "link" })}
            onMouseLeave={resetCursor}
            className={`${iconButton} left-3 top-1/2 -translate-y-1/2 md:left-8`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            onMouseEnter={() => setCursor({ variant: "link" })}
            onMouseLeave={resetCursor}
            className={`${iconButton} right-3 top-1/2 -translate-y-1/2 md:right-8`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[4/3] max-h-[68vh] w-full overflow-hidden bg-wood-dark rounded-sm">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-wood-mid to-wood-midLight">
                      <span className="font-body text-xs uppercase tracking-eyebrow text-putty/70">
                        Photo pending
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-xl text-paper md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-body text-sm text-putty/80 md:text-base">
                      {item.description}
                    </p>
                  </div>
                  <p className="shrink-0 font-body text-xs uppercase tracking-eyebrow text-gold-glow">
                    {String((index ?? 0) + 1).padStart(2, "0")} /{" "}
                    {String(items.length).padStart(2, "0")}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
