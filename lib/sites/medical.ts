import type { SubsidiarySite } from '@/types';

export const medicalSite: SubsidiarySite = {
  slug: 'medical',
  heroKicker: 'EL-BOMI Medical Distribution',
  heroTitle: 'Équiper la santé,',
  heroHighlight: 'accompagner les soignants',
  heroText:
    'Importation, distribution et maintenance d’équipements médicaux, centres d’hémodialyse, produits pharmaceutiques et construction d’établissements de santé.',
  heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80',
  heroSecondaryImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80',

  stats: [
    { value: 70, suffix: '+', label: 'Établissements équipés' },
    { value: 18, suffix: '', label: 'Centres d’hémodialyse' },
    { value: 400, suffix: '+', label: 'Références distribuées' },
    { value: 72, suffix: ' h', label: 'Intervention SAV' },
  ],

  services: [
    {
      icon: 'HeartPulse',
      title: 'Équipements médicaux',
      description:
        'Importation et distribution de matériels pour blocs, urgences et services d’hospitalisation.',
      bullets: [
        'Imagerie et monitorage',
        'Blocs opératoires et réanimation',
        'Mobilier médical et brancardage',
        'Consommables et dispositifs à usage unique',
      ],
    },
    {
      icon: 'Droplet',
      title: 'Hémodialyse',
      description:
        'Fourniture, installation et maintenance d’unités complètes de traitement rénal.',
      bullets: [
        'Générateurs de dialyse',
        'Traitement et distribution d’eau osmosée',
        'Consommables et dialyseurs',
        'Contrats de maintenance dédiés',
      ],
    },
    {
      icon: 'Pill',
      title: 'Pharmacie & parapharmacie',
      description:
        'Approvisionnement en produits pharmaceutiques et parapharmaceutiques.',
      bullets: [
        'Médicaments et solutés',
        'Produits parapharmaceutiques',
        'Chaîne du froid maîtrisée',
        'Traçabilité des lots',
      ],
    },
    {
      icon: 'Microscope',
      title: 'Laboratoire & dentaire',
      description:
        'Matériels d’analyse biomédicale, équipements dentaires et petit outillage.',
      bullets: [
        'Automates d’analyse',
        'Réactifs et consommables',
        'Fauteuils et unités dentaires',
        'Stérilisation et instruments',
      ],
    },
    {
      icon: 'Wrench',
      title: 'Maintenance biomédicale',
      description:
        'Installation, mise en service, formation et entretien préventif des équipements.',
      bullets: [
        'Mise en service et calibration',
        'Formation des utilisateurs',
        'Maintenance préventive planifiée',
        'Pièces détachées et SAV',
      ],
    },
    {
      icon: 'Building2',
      title: 'Construction de cliniques',
      description:
        'Conception et réalisation d’établissements de santé et d’unités industrielles médicales.',
      bullets: [
        'Programmation et conception',
        'Fluides médicaux et salles blanches',
        'Aménagement de plateaux techniques',
        'Unités de production pharmaceutique',
      ],
    },
  ],

  realisations: [
    {
      title: 'Centre d’hémodialyse — 24 postes',
      client: 'Établissement privé',
      year: '2025',
      location: 'Abidjan',
      description:
        'Fourniture des générateurs, traitement d’eau, installation complète et formation des équipes soignantes.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
      tags: ['Hémodialyse', 'Installation', 'Formation'],
    },
    {
      title: 'Plateau technique de bloc',
      client: 'Clinique polyvalente',
      year: '2025',
      location: 'Abidjan',
      description:
        'Équipement de trois salles d’opération : éclairages, tables, monitorage et fluides médicaux.',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&q=80',
      tags: ['Bloc opératoire', 'Fluides médicaux', 'Monitorage'],
    },
    {
      title: 'Laboratoire d’analyses',
      client: 'Centre de biologie',
      year: '2024',
      location: 'Bouaké',
      description:
        'Installation d’automates de biochimie et d’hématologie, avec contrat de réactifs et maintenance.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80',
      tags: ['Laboratoire', 'Automates', 'Réactifs'],
    },
    {
      title: 'Construction d’une clinique',
      client: 'Groupe de santé',
      year: '2024',
      location: 'Yamoussoukro',
      description:
        'Réalisation d’un établissement de 40 lits : gros œuvre, fluides, électricité médicale et équipement.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80',
      tags: ['Construction', 'Clé en main', 'Équipement'],
    },
    {
      title: 'Dotation en imagerie',
      client: 'Hôpital général',
      year: '2023',
      location: 'San-Pédro',
      description:
        'Installation d’un échographe haut de gamme et d’un système de radiologie numérique avec PACS.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80',
      tags: ['Imagerie', 'Radiologie', 'PACS'],
    },
    {
      title: 'Chaîne du froid pharmaceutique',
      client: 'Distributeur pharmaceutique',
      year: '2023',
      location: 'Abidjan',
      description:
        'Mise en place de chambres froides qualifiées avec enregistrement continu de température.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80',
      tags: ['Chaîne du froid', 'Qualification', 'Traçabilité'],
    },
  ],

  process: [
    {
      step: '01',
      title: 'Analyse du besoin',
      description:
        'Échange avec les équipes médicales et techniques pour cadrer les usages, les volumes et les contraintes.',
    },
    {
      step: '02',
      title: 'Sélection des matériels',
      description:
        'Proposition de références adaptées au budget et au niveau de plateau technique, avec fiches détaillées.',
    },
    {
      step: '03',
      title: 'Livraison & installation',
      description:
        'Acheminement dans le respect de la chaîne du froid si nécessaire, puis installation et calibration.',
    },
    {
      step: '04',
      title: 'Formation',
      description:
        'Prise en main par les utilisateurs et remise des protocoles d’utilisation et d’entretien courant.',
    },
    {
      step: '05',
      title: 'Suivi & maintenance',
      description:
        'Visites préventives planifiées, gestion des consommables et intervention SAV sous 72 heures.',
    },
  ],

  commitments: [
    {
      icon: 'BadgeCheck',
      title: 'Matériels conformes',
      description:
        'Équipements issus de fabricants référencés, avec documentation technique et certificats de conformité.',
    },
    {
      icon: 'Thermometer',
      title: 'Chaîne du froid maîtrisée',
      description:
        'Transport et stockage sous température contrôlée, avec enregistrement continu et traçabilité des lots.',
    },
    {
      icon: 'Wrench',
      title: 'SAV réactif',
      description:
        'Techniciens formés par les fabricants, stock de pièces courantes et intervention rapide sur site.',
    },
  ],

  sectors: [
    'Hôpitaux publics',
    'Cliniques privées',
    'Centres de dialyse',
    'Laboratoires',
    'Cabinets dentaires',
    'Pharmacies',
    'ONG & humanitaire',
    'Médecine du travail',
  ],

  contactIntro:
    'Précisez votre besoin en équipements, consommables ou maintenance. Nous établissons une proposition adaptée à votre plateau technique et à votre budget.',
};
