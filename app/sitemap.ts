import type { MetadataRoute } from "next";

// Update once the real domain is registered and confirmed (see the build
// scope doc's Pending Items) — this is what sitemap.xml uses for every URL.
const BASE_URL = "https://www.loghomesinternational.com";

const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.8 },
  { path: "/projects", priority: 0.9 },
  { path: "/materials", priority: 0.7 },
  { path: "/process", priority: 0.7 },
  { path: "/gallery", priority: 0.7 },
  { path: "/faqs", priority: 0.5 },
  { path: "/contact", priority: 0.9 },
  { path: "/privacy-policy", priority: 0.3 },
];

// Next.js picks this up automatically and serves it at /sitemap.xml — no
// other wiring needed.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
