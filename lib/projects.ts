// Project photos come from the owner's Instagram reels (shared via WhatsApp)
// and are the India portfolio, shown on this site as proof of craftsmanship.
// DRAFT: titles, categories, locations and descriptions are inferred from the
// photos and reel captions and still need the owner's confirmation. Locations
// are only specific (e.g. Karjat) where a reel's location tag said so; otherwise
// they read "India". Descriptions only state what is visible in the photos —
// no sizes, dates, client names or specifications have been invented.
//
// Single source of truth for the homepage carousel, the /projects listing and
// each /projects/[slug] detail page. `image` is the card thumbnail; `images`
// is the detail-page gallery (the first entry is the main image).
export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  category: "Resort" | "Farmhouse" | "Private Residence";
  location: string;
  status?: string;
  summary: string;
  description: string[];
  highlights: string[];
  image: string;
  images: ProjectImage[];
}

export const PROJECTS: Project[] = [
  {
    slug: "karjat-luxury-a-frame-resort",
    title: "Karjat Luxury A-Frame Resort",
    category: "Resort",
    location: "Karjat, Maharashtra",
    summary:
      "Timber A-frame cottages with private plunge pools, set in the hills of Karjat.",
    description: [
      "A cluster of timber A-frame cottages built by Log Homes India in Karjat. Each cottage has a steep, timber-clad front, a raised sundeck and its own private plunge pool.",
      "Stone-paved paths and steps connect the cottages and are lit after dark, so the resort reads as warmly at night as it does by day.",
    ],
    highlights: [
      "Timber A-frame cottages",
      "Private plunge pool for each cottage",
      "Raised sundecks with garden seating",
      "Stone-paved paths and steps, lit at night",
    ],
    image: "/images/projects/karjat-aframe-resort.jpg",
    images: [
      {
        src: "/images/projects/karjat-aframe-resort.jpg",
        alt: "A-frame cottages with lit plunge pools at night, Karjat",
        width: 640,
        height: 580,
      },
      {
        src: "/images/projects/karjat-aframe-day-aerial.jpg",
        alt: "Aerial view of the A-frame cottages and their plunge pools by day",
        width: 640,
        height: 430,
      },
      {
        src: "/images/projects/karjat-aframe-plunge-pool.jpg",
        alt: "Front of an A-frame cottage with its private plunge pool",
        width: 640,
        height: 780,
      },
      {
        src: "/images/projects/karjat-aframe-dusk.jpg",
        alt: "Two-storey A-frame cottages at dusk with a stone plinth and timber staircase",
        width: 640,
        height: 645,
      },
    ],
  },
  {
    slug: "lakeside-mountain-villa",
    title: "Lakeside Mountain Villa",
    category: "Private Residence",
    location: "India",
    summary:
      "A timber villa with a double-height ceiling and glass walls opening to a lake and hills.",
    description: [
      "A private villa built in timber, with a double-height pitched ceiling and full-height glazing that opens onto a terrace facing a lake and the hills beyond.",
      "Warm wood-plank flooring and a timber frame carry the interior, while the glass keeps the view part of every room.",
    ],
    highlights: [
      "Double-height timber ceiling",
      "Full-height glazing and a terrace facing the lake",
      "Wood-plank flooring",
    ],
    image: "/images/projects/lakeside-mountain-villa.jpg",
    images: [
      {
        src: "/images/projects/lakeside-mountain-villa.jpg",
        alt: "Living room of the lakeside villa with leather seating and a view of the lake",
        width: 580,
        height: 905,
      },
      {
        src: "/images/projects/lakeside-villa-view.jpg",
        alt: "Floor-to-ceiling windows and terrace overlooking the lake and hills",
        width: 580,
        height: 475,
      },
    ],
  },
  {
    slug: "the-valley-estate",
    title: "The Valley Estate",
    category: "Farmhouse",
    location: "India",
    summary:
      "A single-storey timber bungalow with a pool, set against forested hills.",
    description: [
      "A single-storey timber bungalow with a dark pitched roof and glowing timber walls, set on a lawn with stone-paver paths and a swimming pool, with forested hills rising behind.",
    ],
    highlights: [
      "Single-storey timber-clad bungalow",
      "Swimming pool and stone-paver garden paths",
    ],
    image: "/images/projects/karjat-valley-estate.jpg",
    images: [
      {
        src: "/images/projects/karjat-valley-estate.jpg",
        alt: "Timber bungalow and pool at dusk with forested hills behind",
        width: 640,
        height: 670,
      },
    ],
  },
  {
    slug: "karjat-cathedral-master-suite",
    title: "Karjat Cathedral Master Suite",
    category: "Resort",
    location: "Karjat, Maharashtra",
    summary:
      "A vaulted pine-clad bedroom and a wood-panelled bathroom in a Karjat stay.",
    description: [
      "A bedroom with a vaulted, pine-clad ceiling, exposed cross-beams and large sliding glass doors that open to the garden.",
      "The attached bathroom pairs wood-panelled walls with dark marble tiling and a glass shower enclosure.",
    ],
    highlights: [
      "Vaulted pine ceiling with exposed cross-beams",
      "Sliding glass doors to the garden",
      "Wood-panelled bathroom with dark marble and glass shower",
    ],
    image: "/images/projects/aframe-master-suite.jpg",
    images: [
      {
        src: "/images/projects/aframe-master-suite.jpg",
        alt: "Bedroom with a vaulted pine ceiling and exposed cross-beams",
        width: 640,
        height: 580,
      },
      {
        src: "/images/projects/cathedral-suite-bathroom.jpg",
        alt: "Wood-panelled bathroom with dark marble tiling and a glass shower",
        width: 640,
        height: 750,
      },
      {
        src: "/images/projects/cathedral-suite-pine-room.jpg",
        alt: "Pine-clad room with a pitched ceiling",
        width: 640,
        height: 750,
      },
    ],
  },
  {
    slug: "private-pool-villa-and-gardens",
    title: "Private Pool Villa & Gardens",
    category: "Private Residence",
    location: "India",
    summary: "A garden swimming pool laid into a lawn of stone pavers.",
    description: [
      "An aerial view of a rectangular swimming pool set into a lawn, with stepping-stone paths running along both sides.",
    ],
    highlights: ["Rectangular swimming pool", "Stepping-stone garden paths"],
    image: "/images/projects/private-pool-villa.jpg",
    images: [
      {
        src: "/images/projects/private-pool-villa.jpg",
        alt: "Aerial view of a swimming pool surrounded by lawn and stepping stones",
        width: 600,
        height: 680,
      },
    ],
  },
  {
    slug: "karjat-heritage-timber-cottage",
    title: "Karjat Heritage Timber Cottage",
    category: "Farmhouse",
    location: "Karjat, Maharashtra",
    summary: "A timber-clad cottage with a gabled front, set behind a clipped hedge.",
    description: [
      "A timber-clad cottage with a dark shingle roof and a gabled front, set behind a clipped hedge in Karjat.",
    ],
    highlights: ["Timber-clad walls", "Gabled front with a shingle roof"],
    image: "/images/projects/karjat-timber-cottage.jpg",
    images: [
      {
        src: "/images/projects/karjat-timber-cottage.jpg",
        alt: "Timber cottage with a gabled front and shingle roof behind a hedge",
        width: 640,
        height: 465,
      },
    ],
  },
  {
    slug: "karjat-wooden-resort",
    title: "Karjat Wooden Resort",
    category: "Resort",
    location: "Karjat, Maharashtra",
    status: "Under development",
    summary:
      "A row of timber cottages around a paved courtyard, photographed as the resort was being completed.",
    description: [
      "A row of timber cottages with pitched, shingled roofs, arranged around a paved courtyard with landscaped beds. The reel it comes from was captioned \"Wooden Resort Coming Up\", so the site was still being completed when it was filmed.",
    ],
    highlights: [
      "Row of timber cottages with shingled roofs",
      "Paved courtyard with landscaped beds",
    ],
    image: "/images/projects/karjat-wooden-resort.jpg",
    images: [
      {
        src: "/images/projects/karjat-wooden-resort.jpg",
        alt: "Timber cottages around a paved courtyard while the resort was being completed",
        width: 620,
        height: 540,
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
