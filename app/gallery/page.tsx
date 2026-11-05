"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import RevealImage from "@/components/RevealImage";
import CTASection from "@/components/CTASection";
import Lightbox from "@/components/Lightbox";
import { useCursor } from "@/lib/cursor-context";
import { GALLERY } from "@/lib/gallery";

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const { setCursor, resetCursor } = useCursor();

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Gallery"
          title="A Closer Look at the Work"
          intro="Photography from across our projects — updated as new builds are completed."
        />

        <section className="bg-paper py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {GALLERY.map((tile, i) => (
                <button
                  key={tile.title}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setCursor({ variant: "view" })}
                  onMouseLeave={resetCursor}
                  aria-label={`Open ${tile.title}`}
                  className="group block text-left"
                >
                  <RevealImage className={tile.aspect} curtainColor="bg-wood-dark">
                    {tile.image ? (
                      <Image
                        src={tile.image}
                        alt={tile.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-wood-mid to-wood-midLight">
                        <span className="px-2 text-center font-body text-[10px] uppercase tracking-eyebrow text-putty/70 md:text-xs">
                          Photo pending
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-wood-dark/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <p className="font-display text-sm text-paper md:text-base">
                        {tile.title}
                      </p>
                    </div>
                  </RevealImage>
                </button>
              ))}
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />

      <Lightbox
        items={GALLERY}
        index={active}
        onClose={() => setActive(null)}
        onChange={setActive}
      />
    </>
  );
}
