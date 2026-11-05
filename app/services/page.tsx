"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import SplitHeading from "@/components/SplitHeading";
import RevealImage from "@/components/RevealImage";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";

interface ServiceItem {
  id: string;
  number: string;
  phase: string;
  title: string;
  tagline: string;
  description: string[];
  image: string;
  imageAlt: string;
  deliverables: string[];
  scopeTimeline: { step: string; duration: string; details: string }[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "design",
    number: "01",
    phase: "Phase 01 · Concept to Blueprint",
    title: "Design & Architecture",
    tagline: "Translating land and vision into structural timber blueprints",
    description: [
      "Every solid timber home begins with the land. Our in-house architectural team studies your plot's contours, sun orientation, wind patterns, and surrounding vista to craft a bespoke design suited specifically to timber construction.",
      "Before a single log is shaped, we deliver hyper-realistic 3D walkthroughs, detailed structural CAD drawings, and joinery engineering plans, ensuring total visual clarity and regulatory compliance.",
    ],
    image: "/images/services/design-architecture.jpg",
    imageAlt: "Architect drafting blueprints and timber models for a luxury log villa",
    deliverables: [
      "Topography & Sunpath Orientation Study",
      "3D Spatial Walkthroughs & Renders",
      "Structural Engineering & Joinery CAD",
      "Statutory & Local Building Approvals",
      "Material Specification Schedule",
    ],
    scopeTimeline: [
      { step: "Site Survey & Client Brief", duration: "Weeks 1–2", details: "Detailed contour mapping, orientation analysis, and spatial requirement discovery." },
      { step: "Schematic Architectural Design", duration: "Weeks 3–4", details: "Floor plans, elevations, and volumetric 3D models presented for your review." },
      { step: "Technical Joinery & Construction Pack", duration: "Weeks 5–6", details: "Complete engineering specifications, log profiles, and prefabrication cut sheets." },
    ],
  },
  {
    id: "construction",
    number: "02",
    phase: "Phase 02 · Groundbreaking to Handover",
    title: "Turnkey Timber Construction",
    tagline: "Precision on-site assembly by master timber carpenters",
    description: [
      "Unlike conventional builders who adapt masonry laborers for woodwork, Log Homes International employs specialized master carpenters trained exclusively in post-and-beam and load-bearing log joinery.",
      "Our components are precision-milled off-site and assembled on your foundation with millimeter accuracy. Double tongue-and-groove interlocking joints and compression-fit weather seals ensure absolute climate resilience from Day One.",
    ],
    image: "/images/services/timber-construction.jpg",
    imageAlt: "Carpenters fitting heavy structural timber frame on active villa site",
    deliverables: [
      "Reinforced Plinth & Foundation Verification",
      "Heavy Post-and-Beam Structural Frame",
      "Interlocking Tongue-and-Groove Wall Erection",
      "Multi-Layer Thermal & Acoustic Insulation",
      "Turnkey Roofing, Glazing & Weather-Sealing",
    ],
    scopeTimeline: [
      { step: "Substructure & Plinth Preparation", duration: "Weeks 1–4", details: "Engineered foundation casting with specialized moisture barriers and anchor bolts." },
      { step: "Superstructure Erection", duration: "Weeks 5–10", details: "Rapid on-site assembly of precision-milled timber logs, trusses, and ceiling beams." },
      { step: "Envelope, Joinery & Handover", duration: "Weeks 11–16", details: "Glazing installation, weatherproofing seals, interior finishes, and key handover." },
    ],
  },
  {
    id: "materials",
    number: "03",
    phase: "Phase 03 · Certified Sourcing",
    title: "Custom Wood Selection & Profiling",
    tagline: "Kiln-dried Nordic timber dimensioned to your climate and scale",
    description: [
      "We source exclusively sustainable, FSC-certified Nordic spruce and Siberian pine from slow-growth northern forests. The tight annual growth rings provide unparalleled density, dimensional stability, and natural resistance to pests.",
      "Every batch is kiln-dried to an exact 12%–14% equilibrium moisture content. We profile logs from 38mm for light resort outbuildings up to 100mm solid profiles for heavy mountain estates and hot valley microclimates.",
    ],
    image: "/images/services/custom-wood-selection.jpg",
    imageAlt: "Kiln-dried timber log profiles and material library samples",
    deliverables: [
      "100% Kiln-Dried (12%–14% MC) Certified Timber",
      "Profile Options: 38mm, 50mm, 70mm, 100mm",
      "Double Tongue-and-Groove Milled Joinery",
      "Organic Eco-Friendly Anti-Termite Infusion",
      "Fire-Retardant & UV-Shield Priming",
    ],
    scopeTimeline: [
      { step: "Timber Selection & Grading", duration: "Week 1", details: "Selecting timber grade and log thickness tailored to your site's altitude and exposure." },
      { step: "Kiln-Drying & Moisture Audit", duration: "Weeks 2–3", details: "Controlled thermal drying ensuring zero shrinkage, warping, or fungal vulnerability." },
      { step: "CNC Profiling & Protective Priming", duration: "Weeks 4–5", details: "Precision milling of interlocking joints and organic deep-penetration bio-treatment." },
    ],
  },
  {
    id: "maintenance",
    number: "04",
    phase: "Phase 04 · Lifelong Stewardship",
    title: "Preservation & Maintenance",
    tagline: "Dedicated care ensuring your timber estate outlasts generations",
    description: [
      "A wooden home is an organic, enduring asset that deepens in beauty over time. To ensure longevity, our dedicated maintenance division provides scheduled seasonal care and proactive stewardship.",
      "We apply breathable, microporous organic oils that protect against intense UV rays, monsoonal moisture, and insects without trapping moisture inside the logs. We audit seals, settling screws, and roof flashing annually.",
    ],
    image: "/images/services/timber-maintenance.jpg",
    imageAlt: "Craftsman hand-applying protective natural oil to timber log exterior",
    deliverables: [
      "Scheduled Annual Exterior Inspections",
      "UV & Weather-Shield Oil Re-application",
      "Compression Seal & Flashing Integrity Audit",
      "Structural Settling Jack Calibration",
      "24/7 Priority Emergency Technical Support",
    ],
    scopeTimeline: [
      { step: "6-Month Post-Handover Audit", duration: "Month 6", details: "First seasonal settling inspection and joinery tension check." },
      { step: "Annual Protective Refresh", duration: "Yearly", details: "Deep wash and coat of organic matte UV-filter sealant on sun/rain-exposed elevations." },
      { step: "Decadal Comprehensive Overhaul", duration: "Year 10", details: "Complete perimeter seal replacement, joint re-torqueing, and full facade rejuvenation." },
    ],
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>("design");
  const [expandedScope, setExpandedScope] = useState<string | null>(null);

  // Estimator Quiz State
  const [buildType, setBuildType] = useState<string>("villa");
  const [scopeType, setScopeType] = useState<string>("turnkey");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getEstimatedTimeline = () => {
    if (scopeType === "design") return "4–6 Weeks (Complete Architecture & Engineering)";
    if (buildType === "resort") return "16–22 Weeks (Phased Multi-Cottage Turnkey Handover)";
    if (scopeType === "supply") return "8–10 Weeks (Material Profiling, Logistics & Superstructure)";
    return "12–16 Weeks (Complete Turnkey Design & Build)";
  };

  const getRecommendedProfile = () => {
    if (buildType === "villa") return "70mm–100mm Solid Nordic Spruce with Double Tongue & Groove";
    if (buildType === "resort") return "50mm–70mm Engineered Pine with High-Frequency Acoustic Core";
    return "70mm Solid Pine with High-Exposure Weather Sealing";
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Comprehensive Services"
          title="From First Sketch to Final Handover"
          intro="A single in-house team carries every project end to end — bespoke architecture, sustainable timber sourcing, master construction, and lifelong maintenance."
        />

        {/* Interactive Sticky Sub-Navigation */}
        <section className="sticky top-[60px] z-30 border-y border-putty bg-paper/95 backdrop-blur-md py-3 shadow-xs">
          <Container className="flex items-center justify-between overflow-x-auto no-scrollbar gap-3 md:gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral/70 hidden sm:inline-block">
              Jump to Service:
            </span>
            <div className="flex items-center gap-2 md:gap-4 shrink-0">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`px-3.5 py-1.5 text-xs md:text-sm font-body tracking-wide transition-all rounded-full flex items-center gap-2 ${
                    activeTab === s.id
                      ? "bg-brand text-paper shadow-sm"
                      : "text-brand/80 hover:text-brand hover:bg-sand/60"
                  }`}
                >
                  <span className={activeTab === s.id ? "text-gold" : "text-brand/50"}>
                    {s.number}
                  </span>
                  <span>{s.title}</span>
                </button>
              ))}
            </div>
            <Link
              href="/contact"
              className="hidden lg:inline-flex text-xs py-2 px-4 uppercase font-body font-medium tracking-wide border border-brand text-brand hover:bg-brand hover:text-paper transition-colors rounded-xs"
            >
              Book Consultation
            </Link>
          </Container>
        </section>

        {/* Detailed Alternating Service Showcases */}
        <div className="bg-paper py-16 md:py-24 space-y-24 md:space-y-36">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 1;
            const isScopeOpen = expandedScope === service.id;

            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
              >
                <Container>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Visual Media Column */}
                    <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <Reveal>
                        <div className="relative group">
                          <RevealImage className="aspect-[16/10] shadow-md border border-brand/10">
                            <Image
                              src={service.image}
                              alt={service.imageAlt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </RevealImage>
                          {/* Floating Phase Pill */}
                          <div className="absolute top-4 left-4 z-20 bg-brand/90 backdrop-blur-xs text-paper px-3 py-1 font-mono text-xs uppercase tracking-wider border border-gold/40">
                            {service.phase}
                          </div>
                        </div>
                      </Reveal>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <Reveal>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-display text-2xl text-gold font-bold">
                            {service.number}
                          </span>
                          <span className="h-px w-8 bg-gold/60" />
                          <span className="font-mono text-xs uppercase tracking-widest text-neutral">
                            Dedicated In-House Service
                          </span>
                        </div>

                        <SplitHeading
                          as="h2"
                          text={service.title}
                          className="font-display text-3xl md:text-4xl text-brand mb-3"
                        />

                        <p className="font-display text-lg text-gold mb-6 italic">
                          {service.tagline}
                        </p>

                        <div className="space-y-4 font-body text-neutral leading-relaxed mb-8">
                          {service.description.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>

                        {/* Deliverables Checklist Chips */}
                        <div className="mb-8">
                          <h4 className="font-mono text-xs uppercase tracking-wider text-brand font-semibold mb-3">
                            Key Deliverables &amp; Inclusions:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.deliverables.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-2 text-xs font-body text-brand/90 bg-sand/35 p-2 rounded-xs border border-putty/60"
                              >
                                <svg
                                  className="w-4 h-4 text-gold shrink-0 mt-0.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Scope & Process Toggle Drawer */}
                        <div className="border border-putty bg-sand/20 rounded-xs overflow-hidden mb-8">
                          <button
                            onClick={() => setExpandedScope(isScopeOpen ? null : service.id)}
                            className="w-full flex items-center justify-between p-4 text-left font-body text-sm font-medium text-brand hover:bg-sand/40 transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-gold font-bold">{isScopeOpen ? "−" : "+"}</span>
                              <span>{isScopeOpen ? "Hide Detailed Scope & Workflow" : "View Step-by-Step Workflow & Timelines"}</span>
                            </span>
                            <span className="font-mono text-xs text-gold uppercase tracking-wider">
                              {isScopeOpen ? "Close" : "Expand"}
                            </span>
                          </button>

                          <AnimatePresence>
                            {isScopeOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden border-t border-putty/70 p-4 space-y-4 bg-paper"
                              >
                                {service.scopeTimeline.map((step, sIdx) => (
                                  <div
                                    key={step.step}
                                    className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 pb-3 border-b border-putty/40 last:border-b-0 last:pb-0"
                                  >
                                    <div className="sm:w-32 shrink-0">
                                      <span className="font-mono text-xs font-bold text-brand block">
                                        Step {sIdx + 1}
                                      </span>
                                      <span className="font-mono text-[11px] text-gold uppercase">
                                        {step.duration}
                                      </span>
                                    </div>
                                    <div className="flex-1">
                                      <h5 className="font-display text-sm text-brand font-semibold mb-1">
                                        {step.step}
                                      </h5>
                                      <p className="font-body text-xs text-neutral leading-relaxed">
                                        {step.details}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Direct CTA */}
                        <div className="flex items-center gap-4">
                          <Button href={`/contact?service=${service.id}`} variant="primary">
                            Enquire for {service.title}
                          </Button>
                          <Link
                            href="/projects"
                            className="font-body text-sm text-brand underline underline-offset-4 hover:text-gold transition-colors"
                          >
                            View completed projects →
                          </Link>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </Container>
              </section>
            );
          })}
        </div>

        {/* Interactive Scope & Build Estimator */}
        <section className="bg-sand/40 border-t border-putty py-24 md:py-32">
          <Container className="max-w-4xl">
            <Reveal className="text-center mb-12">
              <Eyebrow>Build Scope Planner</Eyebrow>
              <SplitHeading
                as="h2"
                text="Determine Your Recommended Service Scope"
                className="font-display text-3xl md:text-4xl text-brand mb-4"
              />
              <p className="font-body text-neutral max-w-xl mx-auto">
                Select your intended structure and involvement level to preview the recommended timber profile and handover schedule.
              </p>
            </Reveal>

            <Reveal>
              <div className="bg-paper p-6 md:p-10 border border-putty shadow-sm rounded-xs">
                {/* Step 1: Project Type */}
                <div className="mb-8">
                  <label className="block font-display text-sm text-brand font-bold uppercase tracking-wider mb-3">
                    1. Select Your Property Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: "villa", label: "Private Luxury Villa", sub: "3,500+ sq.ft custom residence" },
                      { id: "resort", label: "Resort & Hospitality", sub: "Multi-cottage clusters & clubhouse" },
                      { id: "farmhouse", label: "Farmhouse Retreat", sub: "1,500–3,000 sq.ft weekend haven" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setBuildType(opt.id)}
                        className={`p-4 text-left border transition-all rounded-xs ${
                          buildType === opt.id
                            ? "border-brand bg-brand text-paper shadow-xs"
                            : "border-putty hover:border-gold/80 bg-paper text-brand"
                        }`}
                      >
                        <span className="font-display text-base font-semibold block mb-1">
                          {opt.label}
                        </span>
                        <span
                          className={`font-body text-xs block ${
                            buildType === opt.id ? "text-paper/70" : "text-neutral"
                          }`}
                        >
                          {opt.sub}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Scope Type */}
                <div className="mb-8">
                  <label className="block font-display text-sm text-brand font-bold uppercase tracking-wider mb-3">
                    2. Select Your Preferred Engagement Level
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: "turnkey", label: "Complete Turnkey", sub: "Design, sourcing, build & interior handover" },
                      { id: "design", label: "Design & Engineering Only", sub: "Blueprints, 3D renders & CAD cut-sheets" },
                      { id: "supply", label: "Timber Sourcing & Erection", sub: "Precision logs delivered & erected on your plinth" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setScopeType(opt.id)}
                        className={`p-4 text-left border transition-all rounded-xs ${
                          scopeType === opt.id
                            ? "border-brand bg-brand text-paper shadow-xs"
                            : "border-putty hover:border-gold/80 bg-paper text-brand"
                        }`}
                      >
                        <span className="font-display text-base font-semibold block mb-1">
                          {opt.label}
                        </span>
                        <span
                          className={`font-body text-xs block ${
                            scopeType === opt.id ? "text-paper/70" : "text-neutral"
                          }`}
                        >
                          {opt.sub}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic Recommendation Panel */}
                <div className="bg-wood-dark text-paper p-6 md:p-8 border border-gold/30 rounded-xs mb-8">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold mb-4">
                    <span>Summary of Recommended Architecture</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-paper/15">
                    <div>
                      <span className="font-body text-xs text-paper/60 uppercase block mb-1">
                        Recommended Log Specification
                      </span>
                      <span className="font-display text-base text-paper font-semibold block">
                        {getRecommendedProfile()}
                      </span>
                    </div>

                    <div>
                      <span className="font-body text-xs text-paper/60 uppercase block mb-1">
                        Estimated Handover Schedule
                      </span>
                      <span className="font-display text-base text-gold font-semibold block">
                        {getEstimatedTimeline()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="font-body text-xs text-paper/70 max-w-md">
                      Ready to discuss your site? Speak directly with our lead architects and engineers for a tailored feasibility consultation.
                    </p>
                    <Link
                      href={`/contact?type=${buildType}&scope=${scopeType}`}
                      className="bg-gold hover:bg-gold-glow text-wood-dark font-body text-sm font-semibold tracking-wide uppercase px-6 py-3 shrink-0 transition-colors inline-flex items-center justify-center"
                    >
                      Book Feasibility Call
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
