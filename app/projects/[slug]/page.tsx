import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import RelatedProjects from "@/components/RelatedProjects";
import CTASection from "@/components/CTASection";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";
import { PROJECTS, getProject } from "@/lib/projects";

// One static page per project in lib/projects.ts.
export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  const facts = [
    { label: "Category", value: project.category },
    { label: "Location", value: project.location },
    ...(project.status ? [{ label: "Status", value: project.status }] : []),
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={project.category}
          title={project.title}
          intro={project.summary}
        />

        <section className="bg-paper py-16 md:py-24">
          <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <Reveal>
              <ProjectImageCarousel
                images={project.images}
                title={project.title}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mb-10 border-t border-putty">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex justify-between gap-6 border-b border-putty py-4"
                  >
                    <dt className="font-body text-xs uppercase tracking-eyebrow text-gold">
                      {fact.label}
                    </dt>
                    <dd className="font-body text-brand text-right">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              {project.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-body text-neutral leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}

              <Eyebrow>Highlights</Eyebrow>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="font-body text-neutral leading-relaxed"
                  >
                    — {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href="/projects" variant="outline">
                  Back to all projects
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-paper py-16 md:py-24">
          <Container>
            <Reveal>
              <Eyebrow>More Projects</Eyebrow>
            </Reveal>
            <div className="mt-8">
              <RelatedProjects projects={related} />
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
