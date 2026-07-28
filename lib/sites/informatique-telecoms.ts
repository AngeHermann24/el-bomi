import type { SubsidiarySite } from '@/types';

export const itSite: SubsidiarySite = {
  slug: 'informatique-telecoms',
  heroKicker: 'EL-BOMI Informatique et Télécoms',
  heroTitle: 'Infrastructures numériques',
  heroHighlight: 'conçues pour tenir',
  heroText:
    'Réseaux, fibre optique, data centers, cloud et cybersécurité. Nous concevons, déployons et exploitons les systèmes d’information des entreprises et des collectivités.',
  heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
  heroSecondaryImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',

  stats: [
    { value: 320, suffix: ' km', label: 'Fibre déployée' },
    { value: 90, suffix: '+', label: 'Sites raccordés' },
    { value: 99, suffix: ',9 %', label: 'Disponibilité visée' },
    { value: 15, suffix: ' min', label: 'Délai de prise en charge' },
  ],

  services: [
    {
      icon: 'Network',
      title: 'Réseaux & infrastructures',
      description:
        'Conception et déploiement de réseaux LAN, WAN et Wi-Fi haute densité.',
      bullets: [
        'Câblage structuré cuivre et fibre',
        'Commutation, routage et segmentation',
        'Wi-Fi indoor et outdoor',
        'Interconnexion multi-sites et SD-WAN',
      ],
    },
    {
      icon: 'Cable',
      title: 'Fibre optique',
      description:
        'Génie civil léger, tirage, raccordement et recette optique de liaisons FO.',
      bullets: [
        'Études de tracé et ingénierie FO',
        'Tirage aérien et souterrain',
        'Soudure, jarretièrage et brassage',
        'Réflectométrie et PV de recette',
      ],
    },
    {
      icon: 'Server',
      title: 'Data centers & cloud',
      description:
        'Salles techniques, virtualisation, sauvegarde et hébergement infogéré.',
      bullets: [
        'Aménagement de salles serveurs',
        'Virtualisation et stockage',
        'Sauvegarde et plan de reprise',
        'Cloud privé et hébergement',
      ],
    },
    {
      icon: 'ShieldCheck',
      title: 'Cybersécurité',
      description:
        'Protection périmétrique, durcissement et supervision des incidents.',
      bullets: [
        'Pare-feu, VPN et filtrage',
        'Audit et durcissement de configuration',
        'Gestion des accès et authentification forte',
        'Journalisation et supervision',
      ],
    },
    {
      icon: 'Camera',
      title: 'Sécurité électronique',
      description:
        'Vidéosurveillance, contrôle d’accès et détection intrusion.',
      bullets: [
        'Caméras IP et analytique vidéo',
        'Contrôle d’accès badge et biométrie',
        'Détection intrusion et alarme',
        'Poste de supervision centralisé',
      ],
    },
    {
      icon: 'Code',
      title: 'Développement & digital',
      description:
        'Applications métier, portails et intégration de systèmes d’information.',
      bullets: [
        'Applications web et mobiles',
        'Intégration et interfaçage d’API',
        'Dématérialisation de processus',
        'Maintenance applicative',
      ],
    },
  ],

  realisations: [
    {
      title: 'Backbone fibre — 84 km',
      client: 'Opérateur régional',
      year: '2025',
      location: 'Abidjan — Grand-Bassam',
      description:
        'Déploiement d’une liaison fibre optique 96 brins avec chambres de tirage et recette réflectométrique complète.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80',
      tags: ['Fibre optique', 'Backbone', 'Réflectométrie'],
    },
    {
      title: 'Data center Tier II',
      client: 'Groupe bancaire',
      year: '2025',
      location: 'Abidjan',
      description:
        'Aménagement complet : baies, climatisation redondante, contrôle d’accès, détection incendie et supervision.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      tags: ['Data center', 'Redondance', 'Supervision'],
    },
    {
      title: 'Refonte réseau multi-sites',
      client: 'Réseau de distribution',
      year: '2024',
      location: '12 agences',
      description:
        'Migration SD-WAN, segmentation par VLAN et Wi-Fi unifié sur douze agences avec supervision centralisée.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
      tags: ['SD-WAN', 'Multi-sites', 'Wi-Fi'],
    },
    {
      title: 'Vidéoprotection urbaine',
      client: 'Collectivité',
      year: '2024',
      location: 'Zone urbaine',
      description:
        'Installation de 120 caméras IP, liaison fibre dédiée et centre de supervision avec analytique vidéo.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&q=80',
      tags: ['Vidéosurveillance', 'Analytique', 'Fibre'],
    },
    {
      title: 'Plateforme de dématérialisation',
      client: 'Administration',
      year: '2023',
      location: 'Abidjan',
      description:
        'Développement d’un portail de dépôt et de suivi de dossiers avec signature électronique et archivage.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
      tags: ['Développement', 'Dématérialisation', 'Archivage'],
    },
    {
      title: 'Durcissement & PRA',
      client: 'Société d’assurance',
      year: '2023',
      location: 'Abidjan',
      description:
        'Audit de sécurité, refonte des règles de pare-feu et mise en place d’un plan de reprise testé.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
      tags: ['Cybersécurité', 'Audit', 'PRA'],
    },
  ],

  process: [
    {
      step: '01',
      title: 'Audit de l’existant',
      description:
        'Cartographie du parc, des flux et des risques. Identification des points de rupture et des priorités.',
    },
    {
      step: '02',
      title: 'Architecture cible',
      description:
        'Conception détaillée, choix technologiques, dimensionnement et scénarios de bascule.',
    },
    {
      step: '03',
      title: 'Déploiement',
      description:
        'Installation par lots avec fenêtres de maintenance planifiées pour limiter l’impact sur l’activité.',
    },
    {
      step: '04',
      title: 'Recette & documentation',
      description:
        'Tests fonctionnels, PV de recette, plans de câblage et transfert de compétences aux équipes internes.',
    },
    {
      step: '05',
      title: 'Infogérance',
      description:
        'Supervision proactive, gestion des incidents sous SLA et évolutions planifiées du système.',
    },
  ],

  commitments: [
    {
      icon: 'Clock',
      title: 'SLA contractualisés',
      description:
        'Délais de prise en charge et de rétablissement engagés par écrit, avec reporting mensuel.',
    },
    {
      icon: 'Lock',
      title: 'Sécurité par défaut',
      description:
        'Chaque architecture est pensée avec segmentation, moindre privilège et sauvegarde dès la conception.',
    },
    {
      icon: 'FileCheck',
      title: 'Documentation livrée',
      description:
        'Plans, configurations et procédures remis en fin de projet : vous restez maître de votre infrastructure.',
    },
  ],

  sectors: [
    'Banque & assurance',
    'Administration',
    'Opérateurs télécoms',
    'Industrie',
    'Distribution',
    'Santé',
    'Éducation',
    'Hôtellerie',
  ],

  contactIntro:
    'Audit, déploiement ou infogérance : exposez-nous votre contexte et vos contraintes. Nous vous proposons une architecture chiffrée et un planning réaliste.',
};
