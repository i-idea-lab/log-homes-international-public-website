// Project photos come from the owner's Instagram reels (shared via WhatsApp).
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
      {
        src: "/images/projects/lakeside-two-story-estate.jpg",
        alt: "Substantial two-story lakeside timber residence on raised plinth",
        width: 1120,
        height: 593,
      },
      {
        src: "/images/projects/mezzanine-loft-bedroom.jpg",
        alt: "Master bedroom suite with timber staircase leading to mezzanine loft",
        width: 1600,
        height: 956,
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
      {
        src: "/images/projects/private-luxury-pool-villa.jpg",
        alt: "Private pool villa with pitched timber gable roof",
        width: 900,
        height: 1600,
      },
      {
        src: "/images/projects/timber-lounge-interior.jpg",
        alt: "Warm timber lounge with upholstered armchairs and garden glazing",
        width: 960,
        height: 517,
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
    summary:
      "A luxury eco-resort featuring clusters of solid timber chalets, infinity swimming pool, and sundecks.",
    description: [
      "A luxury solid timber resort in Karjat featuring a cluster of handcrafted wooden cottages arranged around an illuminated swimming pool and stone-paved landscaped grounds.",
      "Each chalet features natural pine log interiors, master bedroom suites, open-plan living and dining spaces, and expansive sundecks opening to mountain views.",
    ],
    highlights: [
      "Solid timber cottages with pitched shingled roofs",
      "Central swimming pool & stone-paved sundecks",
      "Handcrafted pine log master suites & dining hall",
      "Illuminated landscaped gardens & stone pathways",
    ],
    image: "/images/projects/chalets-pool-twilight.jpg",
    images: [
      {
        src: "/images/projects/chalets-pool-twilight.jpg",
        alt: "Timber chalets illuminated beside the swimming pool at twilight",
        width: 960,
        height: 511,
      },
      {
        src: "/images/projects/infinity-pool-cottages.jpg",
        alt: "Crystal blue swimming pool with paved deck overlooking the cottages",
        width: 960,
        height: 536,
      },
      {
        src: "/images/projects/cottages-dusk-lawn.jpg",
        alt: "Illuminated wooden chalets connected by stone paths across manicured lawns",
        width: 960,
        height: 519,
      },
      {
        src: "/images/projects/timber-cottages-sundeck.jpg",
        alt: "Expansive timber sundeck with panoramic Western Ghats hillside views",
        width: 960,
        height: 528,
      },
      {
        src: "/images/projects/resort-living-dining.jpg",
        alt: "Spacious resort chalet living and dining hall in solid pine",
        width: 960,
        height: 544,
      },
      {
        src: "/images/projects/master-timber-bedroom.jpg",
        alt: "Master timber bedroom suite with solid log walls and wood floor",
        width: 960,
        height: 515,
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
