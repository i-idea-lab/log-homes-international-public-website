// Gallery photos come from the owner's Instagram reels (shared via WhatsApp).
// DRAFT: titles and captions are descriptive copy written from the photos and
// still need the owner's review. `aspect` keeps the magazine-style variation
// in the grid; the lightbox ignores it.
export interface GalleryItem {
  aspect: string;
  title: string;
  description: string;
  image: string;
}

export const GALLERY: GalleryItem[] = [
  {
    aspect: "aspect-[4/5]",
    title: "Lakeside Mountain Villa — Living Room",
    description: "Expansive living room with leather lounge, wood floors, and panoramic glass opening to mountain lake views.",
    image: "/images/gallery/gallery-1.jpg",
  },
  {
    aspect: "aspect-square",
    title: "Karjat A-Frame Chalets — Night Illumination",
    description: "Twin illuminated luxury A-frame chalets with private lit plunge pools and stone pathways at night.",
    image: "/images/gallery/gallery-2.jpg",
  },
  {
    aspect: "aspect-[3/4]",
    title: "Cathedral Master Suite",
    description: "Soaring exposed pine wood ceiling with structural tie beams, recessed warm lights, and garden windows.",
    image: "/images/gallery/gallery-3.jpg",
  },
  {
    aspect: "aspect-[4/5]",
    title: "The Valley Estate Bungalow",
    description: "U-shaped solid timber estate bungalow at dusk with warm glowing rooms, stone walkways, and private pool.",
    image: "/images/gallery/gallery-4.jpg",
  },
  {
    aspect: "aspect-[3/4]",
    title: "Private Pool & Manicured Lawns",
    description: "Overhead aerial view of crystal turquoise swimming pool nestled within lush lawns and stone pavers.",
    image: "/images/gallery/gallery-5.jpg",
  },
  {
    aspect: "aspect-square",
    title: "Karjat Timber Cottage",
    description: "Handcrafted single-story wooden cottage with dark shingle roof and landscaped garden grounds.",
    image: "/images/gallery/gallery-6.jpg",
  },
  {
    aspect: "aspect-[4/5]",
    title: "Two-Story A-Frame Chalets — Dusk",
    description: "Architectural elevation of timber chalets featuring stone foundation plinths and external staircases.",
    image: "/images/gallery/gallery-7.jpg",
  },
  {
    aspect: "aspect-[3/4]",
    title: "Great Room & Vaulted Ceiling",
    description: "Open-concept timber chalet living and dining room with exposed rafters and warm ambient lighting.",
    image: "/images/gallery/gallery-8.jpg",
  },
  {
    aspect: "aspect-[3/4]",
    title: "Oman Expansion — Announcement",
    description: "The founder with our Omani counterpart in the announcement of Log Homes India's expansion into Oman.",
    image: "/images/gallery/oman-announcement.jpg",
  },
  {
    aspect: "aspect-[4/5]",
    title: "Oman Expansion — Expo Meeting",
    description: "The founder meeting our Omani counterpart at an expo as Log Homes India expands into Oman.",
    image: "/images/gallery/oman-expo-meeting.jpg",
  },
  {
    aspect: "aspect-[16/10]",
    title: "Resort Chalet Living & Dining Hall",
    description: "Spacious open-plan solid timber living and dining interior featuring natural pine walls, dining table, and picture windows.",
    image: "/images/gallery/resort-living-dining.jpg",
  },
  {
    aspect: "aspect-[4/5]",
    title: "Timber Lounge & Garden View",
    description: "Cozy interior lounge with handcrafted timber paneling, comfortable armchairs, and floor-to-ceiling garden glazing.",
    image: "/images/gallery/timber-lounge-interior.jpg",
  },
  {
    aspect: "aspect-[16/10]",
    title: "Illuminated Timber Cottages at Dusk",
    description: "Cluster of warm-lit wooden cottages connected by hand-laid stone pathways across manicured resort lawns at twilight.",
    image: "/images/gallery/cottages-dusk-lawn.jpg",
  },
  {
    aspect: "aspect-[16/10]",
    title: "Timber Cottage Sundeck & Mountain Vista",
    description: "Expansive outdoor timber sundeck connecting resort chalets with rolling Western Ghats hillside views.",
    image: "/images/gallery/timber-cottages-sundeck.jpg",
  },
  {
    aspect: "aspect-[16/10]",
    title: "Twilight Pool & Timber Chalets",
    description: "Mirror-still swimming pool reflecting glowing timber resort cottages under the evening sky.",
    image: "/images/gallery/chalets-pool-twilight.jpg",
  },
  {
    aspect: "aspect-square",
    title: "Master Timber Bedroom Suite",
    description: "Minimalist master suite with solid interlocking pine log walls, warm timber floor, and turquoise accent drapes.",
    image: "/images/gallery/master-timber-bedroom.jpg",
  },
  {
    aspect: "aspect-[16/10]",
    title: "Resort Infinity Swimming Pool",
    description: "Crystal blue swimming pool with paved sunbathing deck framing the timber cottage cluster.",
    image: "/images/gallery/infinity-pool-cottages.jpg",
  },
  {
    aspect: "aspect-[3/4]",
    title: "Private Pool Villa Estate",
    description: "Striking pitched-roof timber villa with private swimming pool and expansive tropical garden enclosure.",
    image: "/images/gallery/private-luxury-pool-villa.jpg",
  },
  {
    aspect: "aspect-[16/10]",
    title: "Mezzanine Loft Suite & Timber Staircase",
    description: "Double-height master bedroom suite featuring an open timber staircase leading to a cozy mezzanine loft.",
    image: "/images/gallery/mezzanine-loft-bedroom.jpg",
  },
  {
    aspect: "aspect-[16/10]",
    title: "Two-Story Lakeside Timber Estate",
    description: "Substantial two-story wooden home on a stone plinth with wrap-around balconies overlooking a tranquil lake.",
    image: "/images/gallery/lakeside-two-story-estate.jpg",
  },
];
