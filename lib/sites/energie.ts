import type { SubsidiarySite } from '@/types';

export const energieSite: SubsidiarySite = {
  slug: 'energie',
  heroKicker: 'EL-BOMI Énergie, Électricité & Automatisme',
  heroTitle: 'L’énergie,',
  heroHighlight: 'de la ligne au compteur',
  heroText:
    'Études, construction et maintenance de réseaux BT/HTA, électrification rurale, solaire photovoltaïque et automatismes industriels. Nous intervenons sur toute la chaîne électrique, du poste source au dernier raccordement.',
  heroImage: '/images/energie-impact.jpg',
  heroSecondaryImage: '/images/energie-impact.jpg',

  stats: [
    { value: 1200, suffix: ' km', label: 'Réseaux déployés' },
    { value: 45, suffix: '+', label: 'Postes équipés' },
    { value: 8, suffix: ' MWc', label: 'Solaire installé' },
    { value: 24, suffix: '/7', label: 'Astreinte maintenance' },
  ],

  services: [
    {
      icon: 'Zap',
      title: 'Réseaux BT & HTA',
      description:
        'Conception, construction et extension de réseaux de distribution basse et moyenne tension.',
      bullets: [
        'Études de dimensionnement et calculs de chute de tension',
        'Pose de supports, déroulage et raccordement',
        'Postes de transformation H61, cabines et compacts',
        'Mise en service et essais de conformité',
      ],
    },
    {
      icon: 'Home',
      title: 'Électrification rurale',
      description:
        'Programmes d’extension de réseau et raccordement de localités isolées.',
      bullets: [
        'Levés terrain et tracés de lignes',
        'Densification et extension de réseaux existants',
        'Branchements abonnés et comptage',
        'Éclairage public solaire ou raccordé',
      ],
    },
    {
      icon: 'Sun',
      title: 'Solaire photovoltaïque',
      description:
        'Centrales au sol, toitures et systèmes hybrides pour sites isolés ou autoconsommation.',
      bullets: [
        'Étude de productible et dimensionnement',
        'Centrales au sol et ombrières',
        'Systèmes hybrides avec stockage',
        'Pompage solaire et kits autonomes',
      ],
    },
    {
      icon: 'Wrench',
      title: 'Maintenance HTB/HTA',
      description:
        'Entretien préventif et curatif des lignes et postes, avec équipes d’astreinte.',
      bullets: [
        'Visites périodiques et thermographie',
        'Élagage et sécurisation d’emprises',
        'Dépannage et remise en service',
        'Contrats de maintenance pluriannuels',
      ],
    },
    {
      icon: 'Gauge',
      title: 'Exploitation de postes sources',
      description:
        'Conduite, surveillance et manœuvres sur postes sources et départs HTA.',
      bullets: [
        'Consignation et déconsignation',
        'Manœuvres programmées et d’urgence',
        'Relevés et reporting d’exploitation',
        'Formation des équipes clientes',
      ],
    },
    {
      icon: 'Cpu',
      title: 'Automatismes & supervision',
      description:
        'Armoires, automates et supervision pour installations industrielles et process.',
      bullets: [
        'Armoires de commande et TGBT',
        'Programmation automates et IHM',
        'Supervision SCADA et télégestion',
        'Régulation et variation de vitesse',
      ],
    },
  ],

  realisations: [
    {
      title: 'Extension réseau HTA — 62 km',
      client: 'Opérateur de distribution',
      year: '2025',
      location: 'Région du Gôh',
      description:
        'Construction d’une dorsale HTA de 62 km avec 14 postes de transformation pour raccorder onze localités.',
      image: '/images/energie-solutions.jpg',
      tags: ['HTA', 'Électrification rurale', 'Postes H61'],
    },
    {
      title: 'Centrale solaire 2,4 MWc',
      client: 'Site industriel agroalimentaire',
      year: '2025',
      location: 'Abidjan',
      description:
        'Centrale au sol en autoconsommation avec supervision temps réel et couplage au réseau existant.',
      image: '/images/energie-impact.jpg',
      tags: ['Photovoltaïque', 'Autoconsommation', 'SCADA'],
    },
    {
      title: 'Éclairage public solaire — 340 points',
      client: 'Collectivité territoriale',
      year: '2024',
      location: 'Yamoussoukro',
      description:
        'Fourniture et pose de 340 lampadaires solaires autonomes avec télégestion et contrat de maintenance.',
      image: '/images/energie-projets.jpg',
      tags: ['Éclairage public', 'Solaire', 'Télégestion'],
    },
    {
      title: 'Automatisation station de pompage',
      client: 'Régie des eaux',
      year: '2024',
      location: 'Bouaké',
      description:
        'Refonte des armoires, automates et supervision SCADA sur trois stations de pompage interconnectées.',
      image: '/images/energie-solutions.jpg',
      tags: ['Automatisme', 'SCADA', 'Pompage'],
    },
    {
      title: 'Maintenance lignes HTB — contrat 3 ans',
      client: 'Gestionnaire de transport',
      year: '2023',
      location: 'Sud-Comoé',
      description:
        'Entretien préventif, thermographie et élagage sur 180 km de lignes haute tension.',
      image: '/images/energie-contact.jpg',
      tags: ['HTB', 'Maintenance', 'Thermographie'],
    },
    {
      title: 'TGBT et secours pour data center',
      client: 'Opérateur télécom',
      year: '2023',
      location: 'Abidjan',
      description:
        'Installation TGBT redondant, groupes électrogènes et bascule automatique sans coupure.',
      image: '/images/energie-impact.jpg',
      tags: ['TGBT', 'Secours', 'Redondance'],
    },
  ],

  process: [
    {
      step: '01',
      title: 'Étude & dimensionnement',
      description:
        'Relevés terrain, calculs de charge et de chute de tension, choix des matériels et chiffrage détaillé.',
    },
    {
      step: '02',
      title: 'Approvisionnement',
      description:
        'Sélection de matériels conformes aux normes, contrôle réception et logistique jusqu’au chantier.',
    },
    {
      step: '03',
      title: 'Travaux & raccordement',
      description:
        'Équipes habilitées, procédures de consignation et suivi qualité à chaque étape de pose.',
    },
    {
      step: '04',
      title: 'Essais & mise en service',
      description:
        'Contrôles de conformité, essais diélectriques, procès-verbaux et formation des exploitants.',
    },
    {
      step: '05',
      title: 'Maintenance',
      description:
        'Contrat d’entretien préventif, astreinte 24/7 et reporting périodique sur l’état des installations.',
    },
  ],

  commitments: [
    {
      icon: 'ShieldCheck',
      title: 'Habilitations à jour',
      description:
        'Personnel habilité BT/HTA/HTB, procédures de consignation strictes et équipements de protection contrôlés.',
    },
    {
      icon: 'Clock',
      title: 'Astreinte 24/7',
      description:
        'Une équipe mobilisable en permanence pour les dépannages urgents sur réseaux et postes.',
    },
    {
      icon: 'FileCheck',
      title: 'Conformité normative',
      description:
        'Installations réalisées selon les normes en vigueur, avec dossiers d’essais et PV de réception.',
    },
  ],

  sectors: [
    'Distribution publique',
    'Collectivités',
    'Industrie',
    'Agro-industrie',
    'Télécoms',
    'Mines & carrières',
    'Santé',
    'Hôtellerie',
  ],

  contactIntro:
    'Décrivez-nous votre besoin : extension de réseau, installation solaire, mise en conformité ou contrat de maintenance. Notre bureau d’études revient vers vous avec un chiffrage.',
};
