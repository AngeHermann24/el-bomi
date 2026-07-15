import { Project, Service, Intervention, Testimonial, StatItem, TeamMember, HeroSlide } from '@/types';

export const heroSlides: HeroSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=90',
    title: 'Vision • Expertise • Réalisation',
    subtitle: 'EL-BOMI GROUP accompagne vos projets immobiliers et de construction avec professionnalisme, qualité et fiabilité.',
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=90',
    title: 'Construction & Travaux Publics',
    subtitle: 'De l\'immobilier aux infrastructures, nous réalisons des projets durables qui transforment le paysage urbain.',
  },
  {
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90',
    title: 'L\'Excellence Au Service De Vos Projets',
    subtitle: 'Une équipe engagée, des solutions sur mesure et un savoir-faire reconnu en Côte d\'Ivoire.',
  },
];

export const stats: StatItem[] = [
  { value: 10, suffix: '+', label: "Années d'expérience" },
  { value: 150, suffix: '+', label: 'Projets réalisés' },
  { value: 100, suffix: '%', label: 'Clients satisfaits' },
  { value: 30, suffix: '+', label: 'Collaborateurs experts' },
];

export const services: Service[] = [
  {
    id: 'gros-oeuvre',
    title: 'Gros Œuvre',
    description:
      'Construction de structures porteuses en béton armé, fondations profondes et superficielles, élévations et dalles. Notre expertise garantit la solidité et la pérennité de vos ouvrages.',
    icon: 'Building2',
    features: ['Fondations spéciales', 'Béton armé', 'Structures métalliques', 'Maçonnerie traditionnelle'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 'genie-civil',
    title: 'Génie Civil',
    description:
      'Conception et réalisation d\'ouvrages d\'art, ponts, tunnels et infrastructures routières. Nous maîtrisons les projets les plus complexes avec rigueur et innovation.',
    icon: 'Landmark',
    features: ['Ouvrages d\'art', 'Voiries & réseaux', 'Terrassement', 'Assainissement'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
  {
    id: 'renovation',
    title: 'Rénovation & Réhabilitation',
    description:
      'Transformation et modernisation de bâtiments existants dans le respect de leur caractère architectural. Du diagnostic à la livraison, nous redonnons vie à vos espaces.',
    icon: 'Hammer',
    features: ['Restructuration', 'Mise aux normes', 'Extension', 'Ravalement'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    id: 'amenagement',
    title: 'Aménagement Intérieur',
    description:
      'Conception et réalisation d\'espaces intérieurs fonctionnels et esthétiques pour bureaux, commerces et résidences de standing.',
    icon: 'PaintBucket',
    features: ['Cloisons & faux plafonds', 'Revêtements', 'Menuiseries', 'Agencement sur mesure'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 'demolition',
    title: 'Démolition & Déconstruction',
    description:
      'Démolition contrôlée et déconstruction sélective dans le respect de l\'environnement et de la sécurité. Gestion complète des déchets et valorisation des matériaux.',
    icon: 'Wrench',
    features: ['Démolition mécanique', 'Désamiantage', 'Curage', 'Tri & recyclage'],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
  },
  {
    id: 'construction-durable',
    title: 'Construction Durable',
    description:
      'Bâtiments à haute performance énergétique, certifications environnementales et matériaux biosourcés. Construire aujourd\'hui pour demain.',
    icon: 'Leaf',
    features: ['HQE & BREEAM', 'RT 2020 / RE2020', 'Énergie positive', 'Matériaux éco-responsables'],
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
  },
];

export const projects: Project[] = [
  {
    slug: 'tour-horizon-defense',
    title: 'Tour Horizon - La Défense',
    category: 'Gros Œuvre',
    description:
      'Construction d\'une tour de bureaux de 35 étages au cœur du quartier d\'affaires de La Défense. Ce projet emblématique combine performance structurelle et innovation architecturale avec une façade en verre sérigraphié et un noyau béton haute performance. Le bâtiment intègre les dernières normes environnementales RE2020.',
    shortDescription: 'Tour de bureaux 35 étages - Structure béton haute performance',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    ],
    year: '2023',
    location: 'La Défense, Paris',
    duration: '28 mois',
    surface: '45 000 m²',
    client: 'Groupe Nexity',
  },
  {
    slug: 'eco-quartier-seine',
    title: 'Éco-Quartier Seine Aval',
    category: 'Construction Durable',
    description:
      'Réalisation d\'un ensemble résidentiel de 120 logements dans le cadre d\'un éco-quartier innovant en bord de Seine. Construction bois-béton mixte, toitures végétalisées, récupération des eaux de pluie et production d\'énergie solaire intégrée.',
    shortDescription: '120 logements éco-responsables - Construction mixte bois-béton',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    year: '2023',
    location: 'Mantes-la-Jolie, Yvelines',
    duration: '18 mois',
    surface: '12 000 m²',
    client: 'Bouygues Immobilier',
  },
  {
    slug: 'pont-confluence',
    title: 'Pont de la Confluence',
    category: 'Génie Civil',
    description:
      'Construction d\'un pont haubanné de 180 mètres de portée enjambant la Saône. Ouvrage d\'art exceptionnel combinant une structure en acier Corten et des piles en béton architectonique. Le pont intègre une voie piétonne et cyclable suspendue.',
    shortDescription: 'Pont haubanné 180m - Acier Corten & béton architectonique',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    ],
    year: '2022',
    location: 'Lyon, Rhône',
    duration: '24 mois',
    surface: '3 600 m²',
    client: 'Métropole de Lyon',
  },
  {
    slug: 'hotel-palace-riviera',
    title: 'Hôtel Palace Riviera',
    category: 'Rénovation',
    description:
      'Réhabilitation complète d\'un palace historique classé monument historique sur la Côte d\'Azur. Restauration des façades Belle Époque, renforcement structurel parasismique et création d\'un spa souterrain de 2000 m².',
    shortDescription: 'Palace historique classé MH - Réhabilitation complète',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    year: '2022',
    location: 'Nice, Alpes-Maritimes',
    duration: '36 mois',
    surface: '8 500 m²',
    client: 'Groupe Accor',
  },
  {
    slug: 'campus-tech-saclay',
    title: 'Campus Tech Saclay',
    category: 'Gros Œuvre',
    description:
      'Construction d\'un campus technologique de 6 bâtiments interconnectés pour un géant du numérique. Architecture contemporaine avec atrium central, laboratoires, espaces collaboratifs et parking souterrain de 800 places.',
    shortDescription: 'Campus 6 bâtiments - 28 000 m² de haute technologie',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    ],
    year: '2024',
    location: 'Saclay, Essonne',
    duration: '32 mois',
    surface: '28 000 m²',
    client: 'Confidentiel',
  },
  {
    slug: 'station-metro-ligne15',
    title: 'Station Métro Ligne 15',
    category: 'Génie Civil',
    description:
      'Réalisation du génie civil d\'une station souterraine du Grand Paris Express à 35 mètres de profondeur. Parois moulées, radier, voûtes et quais dans des conditions géotechniques complexes (nappe phréatique affleurante).',
    shortDescription: 'Station souterraine -35m - Grand Paris Express',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    ],
    year: '2024',
    location: 'Bagneux, Hauts-de-Seine',
    duration: '40 mois',
    surface: '15 000 m²',
    client: 'Société du Grand Paris',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jean-Pierre Moreau',
    role: 'Directeur de Programmes',
    company: 'Nexity',
    content:
      'EL-BOMI a démontré une maîtrise exceptionnelle sur le chantier de la Tour Horizon. Respect des délais, qualité irréprochable et une capacité d\'adaptation remarquable face aux aléas techniques.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marie Dubois',
    role: 'Architecte Principal',
    company: 'ADP Architecture',
    content:
      'Collaborer avec EL-BOMI est un vrai plaisir. Leur équipe comprend les enjeux architecturaux et propose systématiquement des solutions techniques innovantes qui subliment nos projets.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Thomas Laurent',
    role: 'Maire Adjoint à l\'Urbanisme',
    company: 'Ville de Lyon',
    content:
      'Le pont de la Confluence est devenu un symbole de notre ville. EL-BOMI a livré un ouvrage d\'art exceptionnel, dans les temps et avec un souci constant de minimiser les nuisances pour les riverains.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Sophie Martin',
    role: 'Directrice Immobilier',
    company: 'Groupe Accor',
    content:
      'La réhabilitation du Palace Riviera était un défi immense. EL-BOMI a su allier respect du patrimoine et exigences modernes avec une expertise qui force l\'admiration.',
    rating: 5,
  },
];

export const team: TeamMember[] = [
  {
    name: 'Marc Ebomi',
    role: 'Président-Directeur Général',
    department: 'Direction Générale',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Ingénieur ESTP, 25 ans d\'expérience dans les grands projets de construction. Visionnaire passionné par l\'innovation dans le BTP.',
  },
  {
    name: 'Claire Fontaine',
    role: 'Directrice des Opérations',
    department: 'Direction des Opérations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Polytechnicienne, spécialiste en gestion de projets complexes. 18 ans d\'expérience en direction de travaux.',
  },
  {
    name: 'Karim Benali',
    role: 'Directeur Technique',
    department: 'Direction Technique',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Ingénieur structures, expert en béton précontraint et construction parasismique. Référent technique sur nos projets les plus ambitieux.',
  },
  {
    name: 'Isabelle Roux',
    role: 'Responsable Développement Durable',
    department: 'Bureau d\'Études',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Ingénieure environnement, pilote notre stratégie RSE et nos certifications HQE/BREEAM. Engagée pour une construction responsable.',
  },
  {
    name: 'Antoine Duval',
    role: 'Chef de Projets Senior',
    department: 'Direction des Opérations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Ingénieur Centrale Lyon, 15 ans d\'expérience en conduite de travaux de génie civil et bâtiment.',
  },
  {
    name: 'Nadia Khelifi',
    role: 'Ingénieure Structures',
    department: 'Bureau d\'Études',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
    bio: 'Spécialiste béton armé et charpente métallique. Responsable du dimensionnement sur nos projets d\'envergure.',
  },
];

export const interventions: Intervention[] = [
  {
    id: 'etudes',
    title: 'Études & Conception',
    description: 'Études de faisabilité, conception technique, plans d\'exécution et dimensionnement structurel. Notre bureau d\'études accompagne chaque projet dès sa genèse.',
    icon: 'FileSearch',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    id: 'realisation',
    title: 'Réalisation des Travaux',
    description: 'Exécution complète des travaux avec nos équipes qualifiées, dans le respect des normes, des délais et du budget. Suivi qualité permanent sur chantier.',
    icon: 'HardHat',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 'pilotage',
    title: 'Encadrement & Pilotage',
    description: 'Direction de travaux, coordination des corps d\'état, pilotage OPC et management de projet. Un interlocuteur unique pour garantir la réussite.',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
];
