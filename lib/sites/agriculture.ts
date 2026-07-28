import type { SubsidiarySite } from '@/types';

export const agricultureSite: SubsidiarySite = {
  slug: 'agriculture',
  heroKicker: 'EL-BOMI Agriculture & Ressources Naturelles',
  heroTitle: 'De la terre',
  heroHighlight: 'jusqu’au marché',
  heroText:
    'Production agricole, élevage, transformation, intrants et hydraulique agricole. Nous accompagnons la mise en valeur des terres et la structuration des filières.',
  heroImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80',
  heroSecondaryImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',

  stats: [
    { value: 850, suffix: ' ha', label: 'Surfaces exploitées' },
    { value: 6, suffix: '', label: 'Filières couvertes' },
    { value: 120, suffix: '+', label: 'Producteurs partenaires' },
    { value: 30, suffix: '+', label: 'Forages réalisés' },
  ],

  services: [
    {
      icon: 'Sprout',
      title: 'Production végétale',
      description:
        'Cultures de plein champ et production sous serre, du semis à la récolte.',
      bullets: [
        'Cultures vivrières et maraîchères',
        'Serres et abris de production',
        'Itinéraires techniques adaptés',
        'Suivi agronomique des parcelles',
      ],
    },
    {
      icon: 'Beef',
      title: 'Élevage & aquaculture',
      description:
        'Conduite d’élevages et production piscicole en étangs ou en bacs.',
      bullets: [
        'Aviculture et petits ruminants',
        'Pisciculture en étangs',
        'Alimentation et suivi sanitaire',
        'Bâtiments d’élevage',
      ],
    },
    {
      icon: 'Factory',
      title: 'Transformation',
      description:
        'Valorisation des productions et mise en marché des produits finis.',
      bullets: [
        'Séchage, tri et conditionnement',
        'Première et seconde transformation',
        'Stockage et conservation',
        'Commercialisation et débouchés',
      ],
    },
    {
      icon: 'Package',
      title: 'Intrants agricoles',
      description:
        'Approvisionnement en semences, fertilisants et produits de protection.',
      bullets: [
        'Semences sélectionnées',
        'Fertilisants et amendements',
        'Produits phytosanitaires homologués',
        'Conseil d’utilisation',
      ],
    },
    {
      icon: 'Droplets',
      title: 'Hydraulique agricole',
      description:
        'Accès à l’eau et systèmes d’irrigation dimensionnés pour vos parcelles.',
      bullets: [
        'Forages et points d’eau',
        'Irrigation goutte-à-goutte et aspersion',
        'Pompage solaire',
        'Réseaux de distribution et bassins',
      ],
    },
    {
      icon: 'Tractor',
      title: 'Équipements & ingénierie',
      description:
        'Matériels agricoles et accompagnement technique des projets.',
      bullets: [
        'Matériels de travail du sol et récolte',
        'Équipements agro-industriels',
        'Études de faisabilité',
        'Aménagement de terres agricoles',
      ],
    },
  ],

  realisations: [
    {
      title: 'Mise en valeur de 220 ha',
      client: 'Coopérative agricole',
      year: '2025',
      location: 'Région du Bélier',
      description:
        'Défrichement, aménagement parcellaire, forages et mise en place d’un réseau d’irrigation par aspersion.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',
      tags: ['Aménagement', 'Irrigation', 'Forages'],
    },
    {
      title: 'Unité de transformation',
      client: 'Groupement de producteurs',
      year: '2025',
      location: 'Korhogo',
      description:
        'Construction et équipement d’une unité de séchage et de conditionnement avec zone de stockage ventilée.',
      image: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?w=1200&q=80',
      tags: ['Transformation', 'Séchage', 'Stockage'],
    },
    {
      title: 'Complexe avicole',
      client: 'Investisseur privé',
      year: '2024',
      location: 'Agboville',
      description:
        'Réalisation de quatre bâtiments d’élevage avec ventilation, abreuvement automatique et biosécurité.',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1200&q=80',
      tags: ['Aviculture', 'Bâtiments', 'Biosécurité'],
    },
    {
      title: 'Serres maraîchères — 1,2 ha',
      client: 'Exploitation maraîchère',
      year: '2024',
      location: 'Périphérie d’Abidjan',
      description:
        'Installation de serres avec goutte-à-goutte piloté et fertirrigation pour production tout au long de l’année.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80',
      tags: ['Serres', 'Goutte-à-goutte', 'Fertirrigation'],
    },
    {
      title: 'Pompage solaire — 12 sites',
      client: 'Programme rural',
      year: '2023',
      location: 'Nord Côte d’Ivoire',
      description:
        'Équipement de douze points d’eau en pompage solaire pour l’irrigation et l’abreuvement du bétail.',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80',
      tags: ['Pompage solaire', 'Irrigation', 'Élevage'],
    },
    {
      title: 'Fermes piscicoles',
      client: 'Coopérative',
      year: '2023',
      location: 'Sud Comoé',
      description:
        'Aménagement d’étangs, alevinage et accompagnement technique sur deux cycles de production.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
      tags: ['Aquaculture', 'Étangs', 'Accompagnement'],
    },
  ],

  process: [
    {
      step: '01',
      title: 'Diagnostic du site',
      description:
        'Analyse du sol, de la ressource en eau et du potentiel agronomique de la parcelle.',
    },
    {
      step: '02',
      title: 'Étude de faisabilité',
      description:
        'Choix des cultures ou des élevages, dimensionnement, plan d’investissement et prévisionnel de rendement.',
    },
    {
      step: '03',
      title: 'Aménagement',
      description:
        'Préparation des terres, forages, irrigation, clôtures et construction des bâtiments nécessaires.',
    },
    {
      step: '04',
      title: 'Mise en production',
      description:
        'Fourniture des intrants, installation des équipements et lancement du premier cycle de production.',
    },
    {
      step: '05',
      title: 'Suivi & valorisation',
      description:
        'Appui agronomique, transformation éventuelle et mise en relation avec les circuits de commercialisation.',
    },
  ],

  commitments: [
    {
      icon: 'Leaf',
      title: 'Pratiques durables',
      description:
        'Gestion raisonnée de l’eau et des intrants, préservation de la fertilité des sols sur le long terme.',
    },
    {
      icon: 'Users',
      title: 'Ancrage local',
      description:
        'Travail avec les producteurs et les coopératives du territoire, transfert de savoir-faire aux équipes.',
    },
    {
      icon: 'TrendingUp',
      title: 'Rentabilité suivie',
      description:
        'Chaque projet est bâti sur un prévisionnel réaliste, avec suivi des rendements et des marges.',
    },
  ],

  sectors: [
    'Cultures vivrières',
    'Maraîchage',
    'Cultures de rente',
    'Aviculture',
    'Aquaculture',
    'Agro-industrie',
    'Coopératives',
    'Programmes ruraux',
  ],

  contactIntro:
    'Projet de mise en valeur, besoin d’irrigation ou d’équipements : parlons de votre terrain et de vos objectifs de production.',
};
