"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const FOUNDER_OPTIONS = [
  {
    id: "portrait",
    title: "Option 1 · Executive Portrait",
    subtitle: "Close-up portrait with evening ambient lighting",
    badge: "Option 1",
    src: "/images/about/shoaib-shaikh-portrait.jpg",
    alt: "Shoaib Shaikh, Founder & Managing Director - Executive Portrait",
    ratio: "aspect-[3/4]",
  },
  {
    id: "lakeside",
    title: "Option 2 · Lakeside Site Vista",
    subtitle: "On-site survey overlooking lakefront villa terrain",
    badge: "Option 2",
    src: "/images/about/shoaib-shaikh-lakeside.jpg",
    alt: "Shoaib Shaikh, Founder & Managing Director - Lakeside Site Vista",
    ratio: "aspect-[3/4]",
  },
];

export default function FounderPhotoSelector() {
  const [selectedId, setSelectedId] = useState<string>("portrait");
  const activeOption =
    FOUNDER_OPTIONS.find((opt) => opt.id === selectedId) || FOUNDER_OPTIONS[0];

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Mode / Option Switcher Pill */}
      <div className="flex items-center justify-between gap-2 bg-brand/70 border border-gold/30 p-1 rounded-sm">
        {FOUNDER_OPTIONS.map((opt) => {
          const isActive = opt.id === selectedId;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedId(opt.id)}
              className={`flex-1 py-1.5 px-3 text-xs font-mono uppercase tracking-wider rounded-xs transition-all text-center flex items-center justify-center gap-1.5 ${
                isActive
                  ? "bg-gold text-brand font-semibold shadow-xs"
                  : "text-paper/70 hover:text-paper hover:bg-paper/5"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isActive ? "bg-brand" : "bg-gold/60"
                }`}
              />
              <span>{opt.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Main Large Spotlight Frame */}
      <div className="relative aspect-[3/4] w-full border border-gold/40 p-2.5 bg-brand/60 shadow-xl overflow-hidden group">
        <div className="relative h-full w-full overflow-hidden bg-brand">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOption.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={activeOption.src}
                alt={activeOption.alt}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover object-center"
                priority
              />

              {/* Gradient Vignette for Editorial Polish */}
              <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/90 via-wood-dark/20 to-transparent" />

              {/* Corner Badge */}
              <div className="absolute top-3 left-3 bg-wood-dark/85 backdrop-blur-md border border-gold/40 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-gold">
                {activeOption.badge} &middot; Active Preview
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <h4 className="font-display text-lg text-paper tracking-wide">
                  Shoaib Shaikh
                </h4>
                <p className="font-mono text-[11px] uppercase tracking-wider text-gold">
                  Founder &amp; Managing Director
                </p>
                <p className="font-body text-[11px] text-paper/75 mt-0.5 line-clamp-1">
                  {activeOption.subtitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative Corner Accents */}
        <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-gold" />
        <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-gold" />
        <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-gold" />
        <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-gold" />
      </div>

      {/* Side-by-Side Dual Comparison Cards */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        {FOUNDER_OPTIONS.map((opt) => {
          const isActive = opt.id === selectedId;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedId(opt.id)}
              className={`text-left p-2 border transition-all rounded-xs relative group ${
                isActive
                  ? "border-gold bg-gold/10 ring-1 ring-gold/40 shadow-sm"
                  : "border-paper/15 bg-brand/30 hover:border-gold/50 hover:bg-brand/50"
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand/80 mb-2 border border-paper/10">
                <Image
                  src={opt.src}
                  alt={opt.alt}
                  fill
                  sizes="200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {isActive && (
                  <div className="absolute top-1 right-1 bg-gold text-brand px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider rounded-xs">
                    Current
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-gold">
                  {opt.badge}
                </span>
                <span className="text-[10px] font-body text-paper/60">
                  {isActive ? "Viewing" : "Click to view"}
                </span>
              </div>
              <p className="font-body text-xs text-paper font-medium mt-0.5 line-clamp-1">
                {opt.id === "portrait" ? "Executive Portrait" : "Lakeside Vista"}
              </p>
            </button>
          );
        })}
      </div>

      {/* Helper Note for the User */}
      <p className="text-center font-mono text-[11px] text-paper/50 tracking-wide">
        &uarr; Click either option to preview &middot; Let us know which one to keep
      </p>
    </div>
  );
}
