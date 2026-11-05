"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { fadeUp } from "@/lib/motion";
import { useCursor } from "@/lib/cursor-context";
import RevealImage from "./RevealImage";
import TiltCard from "./TiltCard";

export default function ProjectCard({
  slug,
  title,
  category,
  location,
  image,
}: {
  slug: string;
  title: string;
  category: string;
  location: string;
  image?: string;
}) {
  const { setCursor, resetCursor } = useCursor();

  return (
    <motion.div variants={fadeUp}>
      <Link
        href={`/projects/${slug}`}
        className="group block"
        onMouseEnter={() => setCursor({ variant: "view" })}
        onMouseLeave={resetCursor}
      >
        <TiltCard className="[transform-style:preserve-3d]">
          <RevealImage className="aspect-[4/5]">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-wood-mid to-wood-dark flex items-center justify-center">
                <span className="font-body text-xs uppercase tracking-eyebrow text-putty/70">
                  Project photo pending
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-500" />
          </RevealImage>
        </TiltCard>
        <div className="mt-4">
          <p className="font-body text-xs uppercase tracking-eyebrow text-gold mb-1">
            {category}
          </p>
          <h3 className="font-display text-xl text-brand">{title}</h3>
          <p className="font-body text-sm text-neutral mt-1">{location}</p>
        </div>
      </Link>
    </motion.div>
  );
}
