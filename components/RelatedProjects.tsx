"use client";

import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { staggerContainer } from "@/lib/motion";
import type { Project } from "@/lib/projects";

// "More projects" row at the bottom of a project detail page. Client
// component because ProjectCard's reveal animation needs a motion parent.
export default function RelatedProjects({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer(0.1)}
      className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </motion.div>
  );
}
