"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { ProjectImage } from "@/lib/projects";

interface ProjectImageCarouselProps {
  images: ProjectImage[];
  title: string;
}

export default function ProjectImageCarousel({
  images,
  title,
}: ProjectImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // 3-second auto-rotate timer, paused when hovered
  useEffect(() => {
    if (total <= 1 || isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [total, isHovered, nextSlide, currentIndex]);

  if (total === 0) return null;

  // Single image projects render cleanly without carousel controls
  if (total === 1) {
    const single = images[0];
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-wood-dark border border-paper/10 shadow-md rounded-xs">
        <Image
          src={single.src}
          alt={single.alt || title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-cover"
        />
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div
      className="w-full space-y-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Carousel Display Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-wood-dark border border-gold/30 shadow-xl group rounded-xs">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt || `${title} photo ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={currentIndex === 0}
              className="object-cover"
            />
            {/* Subtle Gradient Shadow for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/75 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Caption Overlay */}
            {currentImage.alt && (
              <div className="absolute bottom-3 left-4 right-16 pointer-events-none">
                <p className="font-body text-xs text-paper/90 line-clamp-1 drop-shadow-sm">
                  {currentImage.alt}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Counter Badge (e.g. 01 / 06) */}
        <div className="absolute top-3 right-3 z-10 bg-wood-dark/85 backdrop-blur-md border border-gold/40 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-gold flex items-center gap-1.5 shadow-sm rounded-xs">
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className="text-paper/40">/</span>
          <span className="text-paper/60">{String(total).padStart(2, "0")}</span>
        </div>

        {/* 3-Second Active Progress Bar */}
        {!isHovered && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-paper/20 z-10 overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-full bg-gold"
            />
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-wood-dark/75 hover:bg-wood-dark border border-gold/40 hover:border-gold text-paper flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-105 shadow-md"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-wood-dark/75 hover:bg-wood-dark border border-gold/40 hover:border-gold text-paper flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-105 shadow-md"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        {images.map((img, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={img.src}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`View photo ${idx + 1}`}
              className={`relative h-12 w-16 md:h-14 md:w-20 shrink-0 overflow-hidden border transition-all rounded-xs ${
                isActive
                  ? "border-gold ring-1 ring-gold/60 scale-[1.02]"
                  : "border-putty/70 opacity-60 hover:opacity-100 hover:border-gold/40"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt || `Thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
