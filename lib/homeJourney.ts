/**
 * Scénographie de la page d'accueil : plages de scroll, tracé du ruban doré
 * et évocations 3D de chaque filiale.
 *
 * Ce fichier ne dépend PAS de three.js : il est consommé aussi bien par les
 * overlays DOM (rendus côté serveur) que par la scène 3D (chargée à la demande).
 */

export type Vec3 = [number, number, number];

/** Hauteur totale de la zone de scroll piloté (en viewports). */
export const JOURNEY_VH = 600;

/** Bornes de progression [début, fin] de chaque scène, sur une échelle 0 → 1. */
export const SCENES = {
  hero: [0, 0.1667] as [number, number],
  journey: [0.1667, 0.6667] as [number, number],
  stats: [0.6667, 0.75] as [number, number],
  grid: [0.75, 0.9167] as [number, number],
  cta: [0.9167, 1] as [number, number],
};

/**
 * Points de contrôle du ruban doré (Catmull-Rom).
 * Le ruban part du pied du skyline (z positif) et s'enfonce dans la profondeur
 * en serpentant, jusqu'au portail final.
 */
export const RIBBON_WAYPOINTS: Vec3[] = [
  [0, -0.6, 8],
  [2.6, -0.2, 2],
  [-2.9, 0.5, -4],
  [2.7, 1.1, -10],
  [-2.5, 0.6, -16],
  [2.3, 1.5, -22],
  [-2.7, 0.9, -28],
  [1.9, 1.7, -34],
  [-1.5, 1.1, -40],
  [0, 1.3, -46],
];

/** Position du portail final (fermeture du ruban en cercle lumineux). */
export const PORTAL_POSITION: Vec3 = [0, 1.3, -47.5];

export type TeaserKind =
  | 'tower'
  | 'bolt'
  | 'network'
  | 'route'
  | 'cross'
  | 'organic'
  | 'parcel'
  | 'curve';

export interface FilialeTeaser {
  slug: string;
  label: string;
  /** Évocation visuelle jouée au passage du virage. */
  kind: TeaserKind;
  /** Position sur la courbe du ruban (0 → 1). */
  t: number;
  /** Décalage latéral / vertical par rapport au ruban. */
  offset: Vec3;
}

/**
 * Une évocation par filiale — volontairement brève : un objet low-poly qui
 * apparaît au virage puis disparaît, pas une scène complète.
 */
export const FILIALE_TEASERS: FilialeTeaser[] = [
  { slug: 'construction', label: 'Construction & Infrastructures', kind: 'tower', t: 0.08, offset: [3.4, 0, 0] },
  { slug: 'energie', label: 'Énergie & Électricité', kind: 'bolt', t: 0.2, offset: [-3.6, 1.1, 0] },
  { slug: 'informatique-telecoms', label: 'Informatique & Télécoms', kind: 'network', t: 0.31, offset: [3.5, 1.2, 0] },
  { slug: 'transit-logistique', label: 'Transit & Logistique', kind: 'route', t: 0.42, offset: [-3.5, 0.4, 0] },
  { slug: 'medical', label: 'Distribution Médicale', kind: 'cross', t: 0.53, offset: [3.3, 1.3, 0] },
  { slug: 'agriculture', label: 'Agriculture & Ressources', kind: 'organic', t: 0.64, offset: [-3.4, 0.2, 0] },
  { slug: 'immobilier', label: 'Immobilier & Patrimoine', kind: 'parcel', t: 0.75, offset: [3.4, 0.1, 0] },
  { slug: 'investissement-assurance', label: 'Investissement & Assurance', kind: 'curve', t: 0.87, offset: [-3.3, 1.2, 0] },
];

/** Palette partagée entre le DOM et les matériaux three.js. */
export const PALETTE = {
  navy: '#0B1E3D',
  navyDeep: '#061229',
  goldDark: '#C9A227',
  goldLight: '#E8C766',
};

/** Progression normalisée (0 → 1) à l'intérieur d'une plage de scène. */
export function sceneProgress(progress: number, range: [number, number]): number {
  const [start, end] = range;
  if (end <= start) return 0;
  return Math.min(1, Math.max(0, (progress - start) / (end - start)));
}
