export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'Residential' | 'Architecture' | 'Custom';
  location: string;
  year: string;
  area: string;
  description: string;
  materials: string[];
  image: string;
  featured?: boolean;
  aspect?: 'wide' | 'tall' | 'standard';
  challenge?: string;
  solution?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  focus: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  project: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'casa-no-01',
    number: '01',
    title: 'The Warm Minimalist',
    category: 'Residential',
    location: 'Hudson Valley, NY',
    year: '2025',
    area: '5,400 sq.ft',
    description: 'A layered residential interior anchored by honed travertine, bespoke white oak joinery, and natural morning light.',
    materials: ['Honed Travertine', 'White Oak', 'Raw Bouclé', 'Hand-applied Plaster'],
    image: '/src/assets/images/featured_warm_minimalist_1791494765618.jpg',
    featured: true,
    aspect: 'wide',
    challenge: 'To balance expansive volume with an intimate sense of warmth and acoustic softness.',
    solution: 'We introduced curved acoustic plaster arches, low-slung tactile seating, and seamless concealed oak storage.'
  },
  {
    id: 'oak-residence',
    number: '02',
    title: 'The Oak Residence',
    category: 'Residential',
    location: 'Greenwich, CT',
    year: '2025',
    area: '4,800 sq.ft',
    description: 'A quiet master suite and private sanctuary celebrating fluted oak millwork, warm cashmere drapes, and recessed architectural cove lighting.',
    materials: ['Fluted White Oak', 'Belgian Linen', 'Sandstone Bedside Elements', 'Brushed Bronze'],
    image: '/src/assets/images/portfolio_neutral_bedroom_1791494777636.jpg',
    aspect: 'standard',
    challenge: 'Creating a master suite that fosters complete sensory calm without feeling austere or sterile.',
    solution: 'Tactile textured layering, indirect 2700K perimeter cove lighting, and seamless integrated joinery.'
  },
  {
    id: 'park-house',
    number: '03',
    title: 'Park House Dining Pavilion',
    category: 'Architecture',
    location: 'Tribeca, New York',
    year: '2024',
    area: '3,200 sq.ft',
    description: 'A sculptural dining space featuring a monolithic travertine slab table, curved linen armchairs, and floor-to-ceiling blackened bronze glazing.',
    materials: ['Navona Travertine', 'Cast Bronze', 'Textured Linen Bouclé', 'Wide Plank Oak'],
    image: '/src/assets/images/portfolio_stone_dining_1791494790348.jpg',
    aspect: 'standard',
    challenge: 'Framing a lush private courtyard while anchoring formal dinner gatherings with architectural presence.',
    solution: 'Custom 12-seat honed travertine table paired with an organic sculpted ceiling drop and dimmable pendant lighting.'
  },
  {
    id: 'limestone-villa',
    number: '04',
    title: 'The Limestone Villa',
    category: 'Architecture',
    location: 'Montecito, CA',
    year: '2025',
    area: '8,200 sq.ft',
    description: 'An expansive modern pavilion where natural rough-hewn stone masonry blurs the boundary between indoor sanctuary and Mediterranean gardens.',
    materials: ['Chiseled Santa Barbara Stone', 'Polished Concrete', 'Charred Cedar', 'Textured Wool'],
    image: '/src/assets/images/editorial_architectural_living_1791494808240.jpg',
    aspect: 'wide',
    challenge: 'Harmonizing colossal 18-foot ceiling heights with human scale and emotional comfort.',
    solution: 'Sunken circular seating conversation pit, double-sided natural stone hearth, and warm perimeter up-lighting.'
  },
  {
    id: 'soft-geometry',
    number: '05',
    title: 'Soft Geometry Culinary Suite',
    category: 'Custom',
    location: 'SoHo, New York',
    year: '2024',
    area: '2,600 sq.ft',
    description: 'A monolithic travertine culinary island paired with fluted vertical cabinetry, patinated bronze fittings, and curated open shelving.',
    materials: ['Warm Roman Travertine', 'Quarter-sawn Oak', 'Aged Patinated Brass', 'Handmade Ceramics'],
    image: '/src/assets/images/portfolio_kitchen_marble_1791494853728.jpg',
    aspect: 'standard',
    challenge: 'Reimagining a high-performance chef kitchen as an architectural living furniture piece.',
    solution: 'Concealed appliance garages, waterfall stone detailing, and soft ambient task lighting.'
  },
  {
    id: 'city-retreat',
    number: '06',
    title: 'City Retreat Gallery & Hallway',
    category: 'Architecture',
    location: 'Upper East Side, NY',
    year: '2024',
    area: '3,900 sq.ft',
    description: 'Sculptural curved limewash corridors opening beneath hidden skylight apertures to showcase personal contemporary sculpture.',
    materials: ['Smooth Lime Plaster', 'Honed French Limestone', 'Solid Oak Benches', 'Sculptural Ceramics'],
    image: '/src/assets/images/portfolio_gallery_hallway_1791494870068.jpg',
    aspect: 'tall',
    challenge: 'Transforming a dark central residential circulation zone into a serene experiential journey.',
    solution: 'Curved radiused corners, concealed architectural skylight shafts, and soft museum-grade wall wash illumination.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'interior-architecture',
    number: '01',
    title: 'Interior Architecture',
    summary: 'Comprehensive spatial reconfiguration, structural flow analysis, and bespoke architectural detailing.',
    deliverables: ['Spatial planning & 3D flow studies', 'Architectural millwork drawings', 'Ceiling & partition detailing', 'Code & permit coordination'],
    focus: 'Spatial Harmony & Flow'
  },
  {
    id: 'residential-interiors',
    number: '02',
    title: 'Residential Interiors',
    summary: 'Full-scope home interiors tailored to your daily rituals, aesthetic sensibilities, and emotional tranquility.',
    deliverables: ['Full-home concept development', 'Curated furniture & textiles curation', 'Bespoke upholstery selection', 'Turnkey white-glove installation'],
    focus: 'Comfort & Timeless Living'
  },
  {
    id: 'custom-spaces',
    number: '03',
    title: 'Custom Spaces & Joinery',
    summary: 'One-of-a-kind architectural joinery, bespoke dressing rooms, libraries, and crafted furniture pieces.',
    deliverables: ['Bespoke kitchen & bath cabinetry', 'Integrated wine rooms & libraries', 'Custom furniture drafting', 'Artisan fabricator supervision'],
    focus: 'Craftsmanship & Precision'
  },
  {
    id: 'material-lighting',
    number: '04',
    title: 'Material & Lighting Design',
    summary: 'Harmonious surface coordination and circadian architectural lighting schemes calibrated to natural daylight.',
    deliverables: ['Tactile material palettes', 'Architectural lighting plans & specifications', 'Hardware & surface selection', 'Finish schedules & samples'],
    focus: 'Atmosphere & Longevity'
  },
  {
    id: 'project-direction',
    number: '05',
    title: 'Project Direction & Oversight',
    summary: 'End-to-end administration bridging client vision with general contractors, artisans, and specialist trades.',
    deliverables: ['Contractor & trade coordination', 'Site inspection & quality audits', 'Procurement & tracking', 'Budget & milestone administration'],
    focus: 'Rigorous Execution'
  },
  {
    id: 'styling-finishing',
    number: '06',
    title: 'Styling & Art Advisory',
    summary: 'The final layer that breathes life into spaces—curating fine art, sculptural ceramics, textiles, and greenery.',
    deliverables: ['Fine art acquisition curation', 'Sculptural ceramics & vessels', 'Editorial accessory styling', 'Final sensory curation'],
    focus: 'Soul & Individual Character'
  }
];

export const PHILOSOPHY = [
  {
    number: '01',
    name: 'PROPORTION',
    headline: 'Balance, volume, and natural rhythm',
    description: 'Every successful interior begins with architectural discipline. We calculate volume, ceiling heights, sightlines, and human scale so every room feels grounding, calm, and effortlessly balanced.'
  },
  {
    number: '02',
    name: 'MATERIAL',
    headline: 'Authenticity, tactile depth, and longevity',
    description: 'We prioritize honest, unvarnished natural elements: honed limestone, quarter-sawn white oak, raw Belgian linen, and patinated bronze. Surfaces that develop character over decades rather than following transient trends.'
  },
  {
    number: '03',
    name: 'LIGHT',
    headline: 'Atmospheric warmth from dawn to twilight',
    description: 'Light is our most essential architectural material. We orchestrate natural sunlight through considered window framing and layer warm 2700K indirect fixtures to sculpt atmosphere throughout the day.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Listening & Spatial Exploration',
    timeline: 'Weeks 1–3',
    summary: 'We begin with an in-depth dialogue examining your lifestyle, daily routines, tactile preferences, and architectural context.',
    points: ['Lifestyle ritual questionnaire', 'Site documentation & 3D laser scan', 'Atmospheric mood & vision alignment', 'Budgetary framework setup']
  },
  {
    step: '02',
    title: 'DEFINE',
    subtitle: 'Concept & Spatial Architecture',
    timeline: 'Weeks 4–7',
    summary: 'Our studio translates the initial brief into spatial master plans, material samples, 3D visualizations, and lighting concepts.',
    points: ['Architectural space planning', 'Material physical board presentation', 'Photorealistic render previews', 'Preliminary finish specifications']
  },
  {
    step: '03',
    title: 'DESIGN',
    subtitle: 'Detail Drafting & Procurement',
    timeline: 'Weeks 8–14',
    summary: 'We engineer complete construction documents, millwork shop drawings, and order custom furnishings from master artisans.',
    points: ['Full construction drawing sets', 'Custom joinery & millwork details', 'Furnishing, art & textile procurement', 'Contractor bidding coordination']
  },
  {
    step: '04',
    title: 'DELIVER',
    subtitle: 'Site Direction & Final Styling',
    timeline: 'Execution to Turnkey',
    summary: 'We supervise construction milestones, manage deliveries, oversee white-glove installation, and curate every final accessory.',
    points: ['Regular job site quality audits', 'Logistics & white-glove placement', 'Art hanging & accessory styling', 'Turnkey home handover']
  }
];

export const STATS = [
  { value: '12+', label: 'Years of Practice', detail: 'Dedicated to warm minimalism' },
  { value: '85+', label: 'Completed Residences', detail: 'Across premier locations' },
  { value: '18', label: 'Cities & Destinations', detail: 'New York, Zurich, California & London' },
  { value: '100%', label: 'Detail Focused', detail: 'From master joinery to door hardware' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Every detail feels intentional. The result is beautiful without ever feeling staged. Aurelia House gave us a home that grounds our entire family the moment we step inside.',
    author: 'Emma & Robert R.',
    location: 'Hudson Valley, NY',
    project: 'Private Estate'
  },
  {
    id: '2',
    quote: 'They understood how we wanted our home to feel before we even knew how to articulate it. Their mastery of natural light and tactile stone is unmatched.',
    author: 'Daniel & Sofia M.',
    location: 'Tribeca, New York',
    project: 'Loft Residence'
  },
  {
    id: '3',
    quote: 'A remarkably thoughtful process from the very first concept to the final white-glove handover. There is an unmistakable calm in the spaces they design.',
    author: 'Olivia K.',
    location: 'Montecito, CA',
    project: 'Coastal Villa'
  }
];

export const JOURNAL_POSTS: JournalArticle[] = [
  {
    id: 'timeless-neutral-interior',
    title: 'How to Create a Timeless Neutral Interior',
    category: 'Design Philosophy',
    date: 'February 2026',
    readTime: '5 min read',
    excerpt: 'True neutrality is not about the absence of color—it is about the presence of rich textures, soft tonal contrasts, and natural warmth.',
    image: '/src/assets/images/journal_material_palette_1791494898739.jpg',
    content: [
      'When clients ask for a "neutral" interior, they are rarely seeking sterile white walls. What human beings innately crave is sensory calm: an environment where the visual noise of the external world recedes, leaving space for restful thought and human connection.',
      'To build longevity into a neutral room, one must replace pigment variation with textural contrast. An unlacquered travertine coffee table juxtaposed against a thick looped wool rug and dry-laid oak millwork creates endless subtle depth without demanding attention.',
      'We also examine undertones under natural shifting daylight. A cream pigment with a microscopic green undertone behaves differently under north-facing winter light than warm south-facing afternoon sun. Calibrating these subtleties is what distinguishes luxury architectural interiors from generic staging.'
    ]
  },
  {
    id: 'art-of-layering-materials',
    title: 'The Art of Layering Natural Materials',
    category: 'Craft & Materials',
    date: 'January 2026',
    readTime: '6 min read',
    excerpt: 'Combining travertine, fluted oak, patinated bronze, and Belgian linen to construct spaces that mature with grace.',
    image: '/src/assets/images/portfolio_kitchen_marble_1791494853728.jpg',
    content: [
      'A room composed entirely of smooth, synthetic surfaces feels static. In contrast, natural materials possess inherent variation—veining, grain, pores, and living patina—that catch light in ever-changing ways.',
      'In our studio, we practice what we term the "Three-Touch Rule": every primary living space must engage at least three distinct tactile registers: cool honed mineral (stone or plaster), warm organic timber (oak, walnut, or cedar), and soft woven fiber (bouclé, linen, or raw cashmere).',
      'When these elements coexist within harmonious geometric proportions, the room requires very little ornamental decoration. The architecture itself becomes the quiet artwork.'
    ]
  },
  {
    id: 'why-lighting-changes-everything',
    title: 'Why Lighting Changes Everything',
    category: 'Atmosphere & Light',
    date: 'December 2025',
    readTime: '4 min read',
    excerpt: 'How concealed architectural illumination and warm 2700K Kelvin temperatures shape circadian well-being throughout the day.',
    image: '/src/assets/images/journal_lighting_detail_1791494882538.jpg',
    content: [
      'The biggest misconception in residential design is that lighting exists solely to illuminate darkness. In truth, lighting dictates how an interior feels emotionally.',
      'We reject overhead recessed spotlights placed indiscriminately in grid layouts. Instead, we wash vertical walls with concealed cove fixtures, drop architectural pendants low over surfaces of gathering, and introduce portable warm accent luminaires at eye level.',
      'By utilizing strictly 2400K to 2700K high-CRI illumination with gradual circadian dimming curves, an Aurelia House home transitions naturally from invigorating daytime clarity to deep evening serenity.'
    ]
  }
];
