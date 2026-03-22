// Types
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  badge: string;
  date: string;
  budget: string;
  funder: string;
  featured?: boolean;
  photos?: number;
}

export interface NewsItem {
  id: string;
  day: string;
  month: string;
  title: string;
  excerpt: string;
  tag: string;
  tagColor: "green" | "brown" | "earth";
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  dotColor: string;
}

export interface Partner {
  id: string;
  name: string;
  type: "funder" | "technical" | "institutional";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
}

// Data
export const projects: Project[] = [
  {
    id: "1",
    title: "Projet d'Appui aux Filierères Agricoles",
    description: "Accompagnement de 500 producteurs dans la mise en place de systèmes de production durables et la commercialisation des produits agricoles.",
    category: "agriculture",
    badge: "En cours",
    date: "2023 - 2026",
    budget: "450 millions FCFA",
    funder: "Banque Mondiale",
    featured: true,
    photos: 5,
  },
  {
    id: "2",
    title: "Renforcement des Coopératives",
    description: "Formation et équipement de 20 coopératives agricoles pour améliorer leur gestion et accès aux marchés.",
    category: "cooperative",
    badge: "Terminé",
    date: "2022 - 2024",
    budget: "180 millions FCFA",
    funder: "Union Européenne",
    photos: 3,
  },
  {
    id: "3",
    title: "Irrigation et Gestion de l'Eau",
    description: "Installation de systèmes d'irrigation à faible coût pour 300 exploitations agricoles.",
    category: "infrastructure",
    badge: "En cours",
    date: "2024 - 2025",
    budget: "220 millions FCFA",
    funder: "FIDA",
    photos: 4,
  },
  {
    id: "4",
    title: "Transformation Agroalimentaire",
    description: "Appui à la création d'unités de transformation pour les produits locaux.",
    category: "transformation",
    badge: "Planifié",
    date: "2025 - 2027",
    budget: "350 millions FCFA",
    funder: "AFD",
    photos: 2,
  },
];

export const news: NewsItem[] = [
  {
    id: "1",
    day: "15",
    month: "MAR",
    title: "Lancement du nouveau programme d'accompagnement",
    excerpt: "CAEASA lance un programme ambitieux pour soutenir 1000 jeunes entrepreneurs agricoles au Burkina Faso.",
    tag: "Programme",
    tagColor: "green",
  },
  {
    id: "2",
    day: "08",
    month: "MAR",
    title: "Visite de la délégation de l'Union Européenne",
    excerpt: "Une délégation de l'UE a visité nos sites de projet pour évaluer l'impact des actions menées.",
    tag: "Partenaires",
    tagColor: "brown",
  },
  {
    id: "3",
    day: "28",
    month: "FÉV",
    title: "Formation en gestion financière à Bobo-Dioulasso",
    excerpt: "Plus de 150 entrepreneurs formés aux techniques de gestion financière et de comptabilité.",
    tag: "Formation",
    tagColor: "earth",
  },
  {
    id: "4",
    day: "20",
    month: "FÉV",
    title: "Signature de convention avec le Ministère de l'Agriculture",
    excerpt: "Une convention cadre a été signée pour renforcer la collaboration entre CAEASA et l'État.",
    tag: "Institutionnel",
    tagColor: "green",
  },
];

export const events: Event[] = [
  {
    id: "1",
    title: "Forum de l'Entrepreneuriat Agricole",
    date: "25-27 Avril 2025",
    location: "Ouagadougou",
    dotColor: "#3d7a2e",
  },
  {
    id: "2",
    title: "Journée portes ouvertes CAEASA",
    date: "15 Mai 2025",
    location: "Bobo-Dioulasso",
    dotColor: "#c47a45",
  },
  {
    id: "3",
    title: "Atelier sur la finance agricole",
    date: "10 Juin 2025",
    location: "Koudougou",
    dotColor: "#7a3b1e",
  },
];

export const partners: Partner[] = [
  { id: "1", name: "Banque Mondiale", type: "funder" },
  { id: "2", name: "Union Européenne", type: "funder" },
  { id: "3", name: "FIDA", type: "funder" },
  { id: "4", name: "AFD", type: "funder" },
  { id: "5", name: "GIZ", type: "technical" },
  { id: "6", name: "FAO", type: "technical" },
  { id: "7", name: "Ministère de l'Agriculture", type: "institutional" },
  { id: "8", name: "Chambre de Commerce", type: "institutional" },
];

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Amadou Ouédraogo",
    role: "Directeur Exécutif",
    bio: "Expert en développement agricole avec 20 ans d'expérience dans l'accompagnement des agriculteurs.",
    initials: "AO",
    gradient: "from-green-600 to-green-400",
  },
  {
    id: "2",
    name: "Mme Fatima Sanou",
    role: "Responsable des Programmes",
    bio: "Spécialiste en gestion de projets et animation de coopératives agricoles.",
    initials: "FS",
    gradient: "from-brown-600 to-earth-500",
  },
  {
    id: "3",
    name: "M. Jean-Baptiste Kaboré",
    role: "Coordinateur Technique",
    bio: "Agronome passionné par l'innovation et les techniques agricoles durables.",
    initials: "JBK",
    gradient: "from-earth-500 to-brown-500",
  },
  {
    id: "4",
    name: "Mme Aminata Traoré",
    role: "Responsable Formation",
    bio: "Experte en formation professionnelle et renforcement des capacités.",
    initials: "AT",
    gradient: "from-green-500 to-earth-400",
  },
];

export const kpiData = [
  { label: "Entrepreneurs accompagnés", value: "2,500+" },
  { label: "Projets financés", value: "180+" },
  { label: "Emplois créés", value: "3,200+" },
  { label: "Coopératives soutenues", value: "45+" },
];

export const values = [
  {
    title: "Proximité",
    description: "Nous croyons en un accompagnement de proximité, au plus près des besoins des agriculteurs.",
  },
  {
    title: "Innovation",
    description: "Promouvoir les solutions innovantes pour relever les défis de l'agriculture africaine.",
  },
  {
    title: "Durabilité",
    description: "Concevoir des projets durables qui pérennisent l'impact sur le long terme.",
  },
  {
    title: "Collaboration",
    description: "Travailler ensemble avec les partenaires pour maximiser l'impact de nos actions.",
  },
];

export const expertiseAreas = [
  {
    title: "Accompagnement Technique",
    description: "Nous offrons un soutien technique personnalisé aux entrepreneurs agricoles, de la conception à la mise en œuvre de leurs projets.",
    icon: "🌱",
  },
  {
    title: "Finance & Investissement",
    description: "Accès aux financements, montage de dossiers bancaires et mise en relation avec des investisseurs.",
    icon: "💰",
  },
  {
    title: "Accès aux Marchés",
    description: "Facilitation de la commercialisation des produits et connexion avec les acheteurs et distributeurs.",
    icon: "🤝",
  },
];

export const galleryImages = [
  { id: "1", alt: "Formation sur le terrain" },
  { id: "2", alt: "Récolte de coton" },
  { id: "3", alt: "Coopérative agricole" },
  { id: "4", alt: "Distribution de semences" },
  { id: "5", alt: "Système d'irrigation" },
  { id: "6", alt: "Transformation agroalimentaire" },
];

export const antennes = [
  { id: "1", name: "Ouagadougou", position: { x: 52, y: 35 }, type: "Siège" },
  { id: "2", name: "Bobo-Dioulasso", position: { x: 25, y: 65 }, type: "Antenne régionale" },
  { id: "3", name: "Koudougou", position: { x: 35, y: 40 }, type: "Bureau" },
  { id: "4", name: "Fada N'Gourma", position: { x: 75, y: 30 }, type: "Point d'appui" },
];
