import type { SubsidiarySite } from '@/types';

export const logisticsSite: SubsidiarySite = {
  slug: 'transit-logistics',
  heroKicker: 'EL-BOMI Transit, Logistics & Transport',
  heroTitle: 'Vos flux,',
  heroHighlight: 'maîtrisés de bout en bout',
  heroText:
    'Transit international, dédouanement, transport multimodal, entreposage et distribution. Un interlocuteur unique de l’enlèvement au dernier kilomètre.',
  heroImage: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80',
  heroSecondaryImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80',

  stats: [
    { value: 4500, suffix: '+', label: 'Dossiers traités / an' },
    { value: 12000, suffix: ' m²', label: 'Surface d’entreposage' },
    { value: 48, suffix: ' h', label: 'Délai moyen de dédouanement' },
    { value: 60, suffix: '+', label: 'Véhicules mobilisables' },
  ],

  services: [
    {
      icon: 'FileCheck',
      title: 'Transit & dédouanement',
      description:
        'Prise en charge complète des formalités douanières import et export.',
      bullets: [
        'Déclarations en douane et régimes suspensifs',
        'Classement tarifaire et valeur en douane',
        'Suivi des inspections et contrôles',
        'Gestion des cautions et franchises',
      ],
    },
    {
      icon: 'Ship',
      title: 'Transport multimodal',
      description:
        'Affrètement maritime, aérien et routier selon vos délais et budgets.',
      bullets: [
        'Groupage et conteneurs complets',
        'Fret aérien urgent',
        'Transport routier national et sous-régional',
        'Transports exceptionnels et hors gabarit',
      ],
    },
    {
      icon: 'Warehouse',
      title: 'Entreposage & stocks',
      description:
        'Stockage sécurisé piloté par WMS, avec inventaires et traçabilité.',
      bullets: [
        'Entrepôts couverts et zones sécurisées',
        'Gestion des stocks sous WMS',
        'Préparation de commandes et picking',
        'Inventaires tournants et reporting',
      ],
    },
    {
      icon: 'Truck',
      title: 'Distribution',
      description:
        'Livraison régionale et dernier kilomètre avec preuve de livraison.',
      bullets: [
        'Tournées optimisées',
        'Livraison en points de vente',
        'Preuve de livraison numérique',
        'Gestion des retours',
      ],
    },
    {
      icon: 'MapPin',
      title: 'Suivi & géolocalisation',
      description:
        'Visibilité temps réel sur vos marchandises et sur la flotte.',
      bullets: [
        'Tracking des expéditions',
        'Géolocalisation des véhicules',
        'Alertes et jalons automatiques',
        'Tableaux de bord clients',
      ],
    },
    {
      icon: 'Anchor',
      title: 'Manutention portuaire',
      description:
        'Opérations à quai et en zone aéroportuaire, avec engins adaptés.',
      bullets: [
        'Chargement et déchargement',
        'Empotage et dépotage de conteneurs',
        'Levage et engins spécialisés',
        'Coordination avec les terminaux',
      ],
    },
  ],

  realisations: [
    {
      title: 'Import d’équipements industriels',
      client: 'Groupe agro-industriel',
      year: '2025',
      location: 'Port d’Abidjan',
      description:
        'Dédouanement et acheminement de 42 conteneurs d’équipements, dont trois colis hors gabarit sous escorte.',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80',
      tags: ['Import', 'Hors gabarit', 'Escorte'],
    },
    {
      title: 'Plateforme de distribution nationale',
      client: 'Réseau de distribution',
      year: '2025',
      location: 'Abidjan',
      description:
        'Mise en place d’un entrepôt de 4 000 m² sous WMS avec préparation de commandes pour 180 points de vente.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80',
      tags: ['Entreposage', 'WMS', 'Distribution'],
    },
    {
      title: 'Corridor sous-régional',
      client: 'Négociant en matières premières',
      year: '2024',
      location: 'Abidjan — Ouagadougou',
      description:
        'Organisation de rotations routières régulières avec suivi GPS et gestion des formalités de transit.',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80',
      tags: ['Transit', 'Corridor', 'GPS'],
    },
    {
      title: 'Fret aérien urgent',
      client: 'Secteur médical',
      year: '2024',
      location: 'Aéroport d’Abidjan',
      description:
        'Acheminement en 36 heures de consommables sous température dirigée, avec dédouanement prioritaire.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80',
      tags: ['Aérien', 'Urgence', 'Température dirigée'],
    },
    {
      title: 'Projet clé en main mine',
      client: 'Opérateur minier',
      year: '2023',
      location: 'Nord Côte d’Ivoire',
      description:
        'Coordination logistique complète : import, stockage tampon, transport et livraison sur site isolé.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80',
      tags: ['4PL', 'Site isolé', 'Coordination'],
    },
    {
      title: 'Externalisation de flotte',
      client: 'Industriel',
      year: '2023',
      location: 'Abidjan',
      description:
        'Reprise et pilotage de la flotte de distribution avec optimisation des tournées et reporting mensuel.',
      image: 'https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?w=1200&q=80',
      tags: ['Flotte', 'Optimisation', 'Reporting'],
    },
  ],

  process: [
    {
      step: '01',
      title: 'Analyse du flux',
      description:
        'Nature de la marchandise, incoterm, contraintes réglementaires et délais attendus.',
    },
    {
      step: '02',
      title: 'Cotation',
      description:
        'Proposition chiffrée détaillée par poste : fret, droits, manutention, transport et stockage.',
    },
    {
      step: '03',
      title: 'Formalités',
      description:
        'Constitution du dossier, déclaration en douane et coordination avec les autorités et terminaux.',
    },
    {
      step: '04',
      title: 'Acheminement',
      description:
        'Enlèvement, transport et suivi jalonné avec information proactive en cas d’aléa.',
    },
    {
      step: '05',
      title: 'Livraison & archivage',
      description:
        'Remise avec preuve de livraison, restitution du dossier complet et archivage réglementaire.',
    },
  ],

  commitments: [
    {
      icon: 'Eye',
      title: 'Transparence des coûts',
      description:
        'Une cotation détaillée poste par poste, sans frais surprise en cours de dossier.',
    },
    {
      icon: 'Clock',
      title: 'Respect des délais',
      description:
        'Des jalons contractualisés et une information immédiate dès qu’un aléa menace le planning.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Marchandise assurée',
      description:
        'Couverture ad valorem proposée sur l’ensemble du parcours, du départ à la livraison finale.',
    },
  ],

  sectors: [
    'Agro-industrie',
    'Mines & carrières',
    'BTP',
    'Distribution',
    'Santé',
    'Énergie',
    'Automobile',
    'Négoce',
  ],

  contactIntro:
    'Communiquez-nous la nature de votre marchandise, l’incoterm et l’origine : nous revenons avec une cotation détaillée et un délai ferme.',
};
