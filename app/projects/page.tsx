"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { staggerContainer } from "@/lib/motion";
import { PROJECTS } from "@/lib/projects";

const FILTERS = ["All", "Resort", "Farmhouse", "Private Residence"] as const;

export default function ProjectsPage() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Selected Work"
          title="The Portfolio Behind Log Homes International"
          intro="Built by the same team in India, now bringing this standard of craftsmanship to Oman. Our first Gulf projects will join this page as they're completed."
        />

        <section className="bg-paper py-16 md:py-24">
          <Container>
            <div className="flex flex-wrap gap-3 mb-14">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActive(filter)}
                  className={`font-body text-sm uppercase tracking-eyebrow px-5 py-2 border transition-colors duration-300 ${
                    active === filter
                      ? "bg-brand text-paper border-brand"
                      : "border-putty text-neutral hover:border-brand hover:text-brand"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <motion.div
              key={active}
              initial="hidden"
              animate="visible"
              variants={staggerContainer(0.1)}
              className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
            >
              {filtered.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </motion.div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
