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
