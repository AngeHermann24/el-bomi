import { Subsidiary, Pillar, TimelineEntry, StatItem, NewsItem, JobOffer } from '@/types';

export const groupInfo = {
  name: 'EL-BOM GROUP',
  baseline: 'Six métiers, une seule ambition.',
  address: '27 Bp 399 Abj 27',
  addressDetail: 'Abidjan, Cocody - Angré 8ème Tranche',
  phone: '(225) 27 22 20 11 15',
  phoneRaw: '+2252722201115',
  email: 'contact@elbomigroup.com',
  hours: 'Lundi - Vendredi : 08h00 - 18h30',
  hoursClosed: 'Samedi & Dimanche : Fermé',
};

export const groupStats: StatItem[] = [
  { value: 6, suffix: '', label: 'Filiales sectorielles' },
  { value: 10, suffix: '+', label: "Années d'expérience" },
  { value: 150, suffix: '+', label: 'Projets réalisés' },
  { value: 200, suffix: '+', label: 'Collaborateurs' },
];

export const subsidiaries: Subsidiary[] = [
  {
    slug: 'construction',
    name: 'EL-BOMI Construction & Infrastructures',
    shortName: 'Construction & Infrastructures',
    tagline: 'Bâtir des ouvrages qui durent',
    summary:
      'Construction, immobilier, génie civil et infrastructures routières, de l’étude technique à la livraison.',
    intro:
      'Notre filiale historique conçoit et réalise des ouvrages de bâtiment, de génie civil et d’infrastructures routières. Elle réunit les compétences d’études, de terrassement, de production de matériaux et d’exécution nécessaires pour porter un projet de bout en bout.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
    activities: [
      'Construction, immobilier & génie civil',
      'Travaux publics, voiries & infrastructures routières',
      'Terrassement, topographie, études techniques & SIG/GIS',
      'Matériaux de construction & béton préfabriqué',
      'Hydraulique, assainissement & environnement',
      'Logistique, transport & location d’engins de chantier',
      'Aménagement urbain & VRD',
      'Électricité, énergies & éclairage public (BT/HTA, solaire)',
    ],
    email: 'construction@elbomigroup.com',
    phone: '(225) 27 22 20 11 15',
    hasSubSite: true,
  },
  {
    slug: 'energie',
    name: 'EL-BOMI Énergie, Électricité & Automatisme',
    shortName: 'Énergie & Électricité',
    tagline: 'Distribuer et maîtriser l’énergie',
    summary:
      'Réseaux électriques BT/HTA, électrification rurale, solaire photovoltaïque et automatismes industriels.',
    intro:
      'Cette filiale intervient sur toute la chaîne électrique : études de réseaux, construction et maintenance des lignes, exploitation de postes sources, électrification rurale et production solaire. Elle déploie également des solutions d’automatisme et de supervision industrielle.',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80',
    activities: [
      'Électricité générale & installations BT',
      'Études de réseaux BT/HTA',
      'Construction, extension & maintenance de réseaux électriques',
      'Électrification rurale & distribution d’énergie',
      'Maintenance de lignes HTB/HTA',
      'Exploitation de postes sources',
      'Solaire photovoltaïque',
      'Automatismes industriels & supervision',
    ],
    email: 'energie@elbomigroup.com',
    phone: '(225) 27 22 20 11 15',
  },
  {
    slug: 'informatique-telecoms',
    name: 'EL-BOMI Informatique et Télécoms',
    shortName: 'Informatique & Télécoms',
    tagline: 'Connecter et sécuriser les organisations',
    summary:
      'Systèmes d’information, réseaux, fibre optique, cybersécurité, cloud et smart building.',
    intro:
      'Nous concevons et intégrons les infrastructures numériques des entreprises et des collectivités : réseaux, fibre optique, data centers, cloud, sécurité électronique et solutions logicielles sur mesure.',
    icon: 'Network',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
    activities: [
      'Solutions informatiques & systèmes d’information',
      'Réseaux & infrastructures numériques',
      'Fibre optique & transmission de données',
      'Intégration IT & télécoms',
      'Développement logiciel & solutions digitales',
      'Cybersécurité, vidéosurveillance & sécurité électronique',
      'Data centers, cloud & hébergement',
      'Domotique & smart building',
    ],
    email: 'it@elbomigroup.com',
    phone: '(225) 27 22 20 11 15',
  },
  {
    slug: 'transit-logistics',
    name: 'EL-BOMI Transit, Logistics & Transport',
    shortName: 'Transit & Logistique',
    tagline: 'Faire circuler vos marchandises',
    summary:
      'Transit international, dédouanement, transport multimodal, entreposage et distribution.',
    intro:
      'De l’enlèvement au dernier kilomètre, cette filiale prend en charge l’acheminement et la gestion de vos flux : formalités douanières, affrètement multimodal, entreposage piloté par WMS, suivi de flotte et manutention portuaire.',
    icon: 'Truck',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80',
    activities: [
      'Transit international & dédouanement',
      'Transport multimodal & affrètement',
      'Entrepôts & gestion des stocks (WMS)',
      'Distribution & dernier kilomètre',
      'Gestion de flotte, géolocalisation & tracking',
      'Manutention portuaire & aéroportuaire',
      'Solutions logistiques 4PL',
    ],
    email: 'logistics@elbomigroup.com',
    phone: '(225) 27 22 20 11 15',
  },
  {
    slug: 'medical',
    name: 'EL-BOMI Medical Distribution',
    shortName: 'Distribution Médicale',
    tagline: 'Équiper et accompagner la santé',
    summary:
      'Équipements médicaux, hémodialyse, produits pharmaceutiques et construction d’établissements de santé.',
    intro:
      'Cette filiale importe, distribue et maintient des équipements médicaux — dont les unités d’hémodialyse — et accompagne les établissements de santé de la conception à l’exploitation, y compris la construction de cliniques et d’unités industrielles.',
    icon: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80',
    activities: [
      'Importation, distribution & maintenance d’équipements médicaux',
      'Centres d’hémodialyse & établissements de santé',
      'Produits pharmaceutiques & parapharmaceutiques',
      'Matériels biomédicaux, dentaires & de laboratoire',
      'Conseil en formulation pharmaceutique',
      'Construction de cliniques',
      'Unités industrielles médicales & pharmaceutiques',
    ],
    email: 'medical@elbomigroup.com',
    phone: '(225) 27 22 20 11 15',
  },
  {
    slug: 'agriculture',
    name: 'EL-BOMI Agriculture & Ressources Naturelles',
    shortName: 'Agriculture & Ressources',
    tagline: 'Valoriser la terre et ses ressources',
    summary:
      'Production agricole, élevage, transformation, intrants, irrigation et ingénierie de projets agricoles.',
    intro:
      'De la mise en valeur des terres à la commercialisation, cette filiale couvre la production en plein champ et sous serre, l’élevage, l’aquaculture, la transformation agroalimentaire et l’hydraulique agricole.',
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80',
    activities: [
      'Production agricole (plein champ, serres)',
      'Élevage & aquaculture',
      'Transformation & commercialisation de produits agricoles',
      'Intrants agricoles',
      'Équipements agricoles & agro-industriels',
      'Hydraulique agricole (irrigation, forages)',
      'Conseil & ingénierie de projets agricoles',
      'Aménagement de terres agricoles',
    ],
    email: 'agriculture@elbomigroup.com',
    phone: '(225) 27 22 20 11 15',
  },
];

export const pillars: Pillar[] = [
  {
    icon: 'Layers',
    title: 'Intégration',
    description:
      'Six filiales complémentaires qui travaillent ensemble. Un projet peut mobiliser la construction, l’énergie et les télécoms sous un pilotage unique.',
  },
  {
    icon: 'MapPin',
    title: 'Expertise locale',
    description:
      'Une connaissance fine du terrain ivoirien et sous-régional : réglementation, chaîne d’approvisionnement, partenaires et contraintes de chantier.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Fiabilité',
    description:
      'Des engagements tenus sur les délais, les budgets et la qualité, avec un suivi rigoureux et un interlocuteur dédié à chaque étape.',
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: '2014',
    title: 'Naissance du groupe',
    description:
      'Création de l’activité construction et premiers chantiers de bâtiment et de voirie en région d’Abidjan.',
  },
  {
    year: '2017',
    title: 'Ouverture à l’énergie',
    description:
      'Lancement de la filiale énergie et électricité, avec les premiers marchés d’électrification et de réseaux BT/HTA.',
  },
  {
    year: '2019',
    title: 'Pôle numérique',
    description:
      'Structuration de l’activité informatique et télécoms pour accompagner la transformation digitale des clients du groupe.',
  },
  {
    year: '2021',
    title: 'Transit & logistique',
    description:
      'Intégration de la chaîne logistique : transit international, entreposage et distribution pour sécuriser les approvisionnements.',
  },
  {
    year: '2023',
    title: 'Santé & agriculture',
    description:
      'Ouverture des filiales de distribution médicale et d’agriculture, élargissant le groupe à six métiers.',
  },
  {
    year: 'Aujourd’hui',
    title: 'Un holding intégré',
    description:
      'Six filiales, une gouvernance commune et une ambition partagée : porter des projets structurants en Côte d’Ivoire et dans la sous-région.',
  },
];

export const news: NewsItem[] = [
  {
    slug: 'nouvelle-unite-prefabrication',
    title: 'Mise en service d’une unité de préfabrication béton',
    excerpt:
      'La filiale Construction & Infrastructures renforce sa capacité de production avec une nouvelle unité dédiée aux éléments préfabriqués.',
    date: '2026-05-12',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
  },
  {
    slug: 'electrification-rurale-phase-2',
    title: 'Lancement de la phase 2 d’un programme d’électrification rurale',
    excerpt:
      'Extension du réseau BT/HTA sur plusieurs localités, avec raccordement progressif des foyers et de l’éclairage public.',
    date: '2026-03-28',
    category: 'Énergie',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
  },
  {
    slug: 'deploiement-fibre-entreprises',
    title: 'Déploiement fibre optique pour un parc d’entreprises',
    excerpt:
      'La filiale Informatique & Télécoms livre une infrastructure de transmission haut débit avec supervision centralisée.',
    date: '2026-02-09',
    category: 'Télécoms',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
  },
  {
    slug: 'centre-hemodialyse',
    title: 'Équipement d’un centre d’hémodialyse',
    excerpt:
      'Installation, mise en service et contrat de maintenance pour un nouveau centre de traitement rénal.',
    date: '2025-12-15',
    category: 'Médical',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
  },
];

export const jobs: JobOffer[] = [
  {
    id: 'conducteur-travaux',
    title: 'Conducteur de travaux',
    subsidiary: 'Construction & Infrastructures',
    location: 'Abidjan',
    contract: 'CDI',
    description:
      'Pilotage de chantiers de bâtiment et de VRD : planning, coordination des équipes, suivi qualité et sécurité.',
  },
  {
    id: 'ingenieur-reseaux-electriques',
    title: 'Ingénieur réseaux électriques',
    subsidiary: 'Énergie & Électricité',
    location: 'Abidjan',
    contract: 'CDI',
    description:
      'Études et suivi d’exécution de réseaux BT/HTA, dimensionnement et contrôle des installations.',
  },
  {
    id: 'administrateur-systemes',
    title: 'Administrateur systèmes & réseaux',
    subsidiary: 'Informatique & Télécoms',
    location: 'Abidjan',
    contract: 'CDI',
    description:
      'Exploitation des infrastructures serveurs et réseaux, supervision, sécurité et support aux clients du groupe.',
  },
  {
    id: 'declarant-en-douane',
    title: 'Déclarant en douane',
    subsidiary: 'Transit & Logistique',
    location: 'Abidjan',
    contract: 'CDI',
    description:
      'Traitement des formalités douanières import/export et suivi des dossiers de dédouanement.',
  },
];

export function getSubsidiary(slug: string): Subsidiary | undefined {
  return subsidiaries.find((s) => s.slug === slug);
}
