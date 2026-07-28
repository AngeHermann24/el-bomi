export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  year: string;
  location: string;
  duration: string;
  surface: string;
  client: string;
  lots?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface Intervention {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

export interface Subsidiary {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  intro: string;
  icon: string;
  image: string;
  activities: string[];
  email: string;
  phone: string;
  hasSubSite?: boolean;
}

export interface SubsidiaryService {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface Realisation {
  title: string;
  client: string;
  year: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Commitment {
  icon: string;
  title: string;
  description: string;
}

export interface SubsidiarySite {
  slug: string;
  heroKicker: string;
  heroTitle: string;
  heroHighlight: string;
  heroText: string;
  heroImage: string;
  heroSecondaryImage: string;
  stats: StatItem[];
  services: SubsidiaryService[];
  realisations: Realisation[];
  process: ProcessStep[];
  commitments: Commitment[];
  sectors: string[];
  contactIntro: string;
}

export interface Pillar {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface JobOffer {
  id: string;
  title: string;
  subsidiary: string;
  location: string;
  contract: string;
  description: string;
}
