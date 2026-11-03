import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import MaterialsTeaser from "@/components/MaterialsTeaser";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <ProjectsGrid />
        <MaterialsTeaser />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
