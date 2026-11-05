// Project photos come from the owner's Instagram reels (shared via WhatsApp)
// and are the India portfolio, presented as proof of craftsmanship.
// DRAFT: titles, categories and locations are inferred from reel captions and
// still need the owner's confirmation. Single source of truth for the
// homepage carousel and the /projects listing; keep the shape so ProjectCard
// doesn't need changes.
export interface Project {
  title: string;
  category: "Resort" | "Farmhouse" | "Private Residence";
  location: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Karjat Luxury A-Frame Resort",
    category: "Resort",
    location: "Karjat, Maharashtra",
    image: "/images/projects/karjat-aframe-resort.jpg",
  },
  {
    title: "Lakeside Mountain Villa",
    category: "Private Residence",
    location: "Maharashtra",
    image: "/images/projects/lakeside-mountain-villa.jpg",
  },
  {
    title: "The Karjat Valley Estate",
    category: "Farmhouse",
    location: "Karjat, Maharashtra",
    image: "/images/projects/karjat-valley-estate.jpg",
  },
  {
    title: "A-Frame Chalet Master Suite",
    category: "Resort",
    location: "Karjat, Maharashtra",
    image: "/images/projects/aframe-master-suite.jpg",
  },
  {
    title: "Private Pool Villa & Gardens",
    category: "Private Residence",
    location: "Maharashtra",
    image: "/images/projects/private-pool-villa.jpg",
  },
  {
    title: "Karjat Heritage Timber Cottage",
    category: "Farmhouse",
    location: "Karjat, Maharashtra",
    image: "/images/projects/karjat-timber-cottage.jpg",
  },
];
