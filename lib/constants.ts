export type ProjectCategory = "Residential Plots" | "Premium Villas" | "Gated Community" | "Commercial";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  coverImage: string;
  heroImage: string;
  location: string;
  year: string;
  client: string;
  area: string;
  description: string;
  gallery: string[];
};

export const SITE = {
  name: "Pan Infra",
  legalName: "Pan Infra.",
  siteUrl: "https://paninfra.com",
  email: "info@paninfra.com",
  phone: "+91 8999 666 888",
  address: "7th floor Dallas Centre, 83/1, Knowledge City Rd, Rai Durg, Hyderabad, Telangana 500032",
  social: {
    instagram: "https://www.instagram.com/paninfra/",
    facebook: "https://www.facebook.com/PanInfra/",
    linkedin: "https://www.linkedin.com/company/paninfra-space-private-limited/?originalSubdomain=in",
    twitter: "https://x.com/paninfra",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/why-paninfra", label: "Why Paninfra" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    title: "Residential Plots",
    description: "HMDA & DTCP approved premium residential plots in Hyderabad's most sought-after growth corridors.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Premium Villas",
    description: "Architect-designed luxury 3 & 4 BHK villas with world-class amenities and gated security.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Gated Communities",
    description: "Integrated townships with clubhouse, parks, and premium lifestyle amenities.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Commercial Spaces",
    description: "Prime commercial plots and office spaces in Hyderabad's key business districts.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Villa Plots",
    description: "Large-format villa plots offering freedom to build your dream home with custom architecture.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Investment Properties",
    description: "High-appreciation investment plots in upcoming micro-markets with strong ROI potential.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "NRI Corner",
    description: "Dedicated NRI services — transparent transactions, virtual tours, and assisted documentation.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Property Management",
    description: "End-to-end property management, documentation support, and resale assistance.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We bought a plot in Pan Meadows and the entire process was completely transparent. The team guided us through every step. Best investment we've made.",
    name: "R. Sharma",
    role: "Plot Owner, Pan Meadows — Shadnagar",
  },
  {
    quote:
      "Our villa in Pan Green Valley exceeded expectations. Premium construction quality, beautiful landscaping, and an amazing community to live in.",
    name: "K. Reddy",
    role: "Villa Owner, Pan Green Valley — Mokila",
  },
  {
    quote:
      "As an NRI investor, I was initially skeptical about buying property remotely. Pan Infra made it seamless with virtual tours and complete legal clarity.",
    name: "S. Patel",
    role: "NRI Investor, Kokapet",
  },
] as const;

export const TEAM = [
  {
    name: "Ramesh Gupta",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Priya Nair",
    role: "Director — Sales & Marketing",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Anil Kumar",
    role: "Head of Projects",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
] as const;

export const TIMELINE = [
  { year: "2010", text: "Pan Infra founded with a vision to redefine affordable luxury real estate in Hyderabad." },
  { year: "2015", text: "First 500+ plot community launched in Shadnagar — sold out within 60 days." },
  { year: "2019", text: "Expanded into premium villas and gated communities across ORR growth corridors." },
  { year: "2024", text: "1,000+ families housed across 15+ projects spanning 800+ acres in Hyderabad." },
] as const;

export const PROJECTS: Project[] = [
  {
    slug: "pan-meadows-shadnagar",
    title: "Pan Meadows",
    category: "Residential Plots",
    coverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600",
    location: "Shadnagar, Hyderabad",
    year: "2024",
    client: "Open for Booking",
    area: "120 Acres · 800 Plots",
    description:
      "HMDA-approved premium residential plots along NH-44, offering 100–500 sq.yd options with all infrastructure, wide roads, and clear title deeds.",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    ],
  },
  {
    slug: "pan-green-valley-mokila",
    title: "Pan Green Valley",
    category: "Gated Community",
    coverImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1600",
    location: "Mokila, Hyderabad",
    year: "2024",
    client: "Open for Booking",
    area: "200 Acres · 1,200 Plots",
    description:
      "A premium gated community nestled in greenery near the Outer Ring Road, featuring clubhouse, Olympic swimming pool, amphitheatre, and 60% open space.",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    ],
  },
  {
    slug: "pan-heights-kokapet",
    title: "Pan Heights",
    category: "Premium Villas",
    coverImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1600",
    location: "Kokapet, Hyderabad",
    year: "2025",
    client: "Open for Booking",
    area: "50 Acres · 200 Villas",
    description:
      "Luxury 3 & 4 BHK independent villas in Kokapet's Financial District corridor — smart home automation, private gardens, and resort-style amenities.",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    ],
  },
  {
    slug: "pan-golden-acres-adibatla",
    title: "Pan Golden Acres",
    category: "Residential Plots",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    location: "Adibatla, Hyderabad",
    year: "2023",
    client: "Sold Out",
    area: "80 Acres · 600 Plots",
    description:
      "DTCP-approved villa plots near ISRO, Adibatla — strategically located in the aerospace & defence industrial corridor with strong appreciation potential.",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200",
    ],
  },
  {
    slug: "pan-smart-city-tukkuguda",
    title: "Pan Smart City",
    category: "Gated Community",
    coverImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600",
    location: "Tukkuguda, Hyderabad",
    year: "2025",
    client: "Open for Booking",
    area: "300 Acres · Integrated Township",
    description:
      "Hyderabad's most ambitious integrated township near Rajiv Gandhi International Airport — residential plots, villas, commercial spaces, and social infrastructure.",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    ],
  },
  {
    slug: "pan-commercial-park-gachibowli",
    title: "Pan Commercial Park",
    category: "Commercial",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    location: "Gachibowli, Hyderabad",
    year: "2024",
    client: "Open for Booking",
    area: "15 Acres · Commercial Plots",
    description:
      "Prime commercial plots in Gachibowli's IT hub — ideal for office buildings, retail outlets, and mixed-use developments in Hyderabad's most active business zone.",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    ],
  },
];

export const PROJECT_FILTERS: Array<ProjectCategory | "All"> = [
  "All",
  "Residential Plots",
  "Premium Villas",
  "Gated Community",
  "Commercial",
];
