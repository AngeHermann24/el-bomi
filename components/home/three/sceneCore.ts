import * as THREE from 'three';
import { PALETTE, RIBBON_WAYPOINTS } from '@/lib/homeJourney';

/** Courbe maîtresse : le ruban doré du logo transposé en chemin 3D. */
export const ribbonCurve = new THREE.CatmullRomCurve3(
  RIBBON_WAYPOINTS.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
  false,
  'catmullrom',
  0.5,
);

/**
 * État partagé du parcours, écrit par le CameraRig et lu par les objets de la
 * scène. Volontairement mutable : évite un re-render React à chaque frame.
 */
export const journeyState = {
  /** Progression globale du scroll (0 → 1). */
  progress: 0,
  /** Position courante sur la courbe du ruban (0 → 1). */
  t: 0,
};

export const COLORS = {
  navy: new THREE.Color(PALETTE.navy),
  navyDeep: new THREE.Color(PALETTE.navyDeep),
  goldDark: new THREE.Color(PALETTE.goldDark),
  goldLight: new THREE.Color(PALETTE.goldLight),
};

/** Or métallique PBR — utilisé pour le ruban, le portail et les accents. */
export function createGoldMaterial(options?: {
  emissiveIntensity?: number;
  roughness?: number;
  transparent?: boolean;
}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: COLORS.goldDark,
    metalness: 1,
    roughness: options?.roughness ?? 0.28,
    emissive: COLORS.goldLight,
    emissiveIntensity: options?.emissiveIntensity ?? 0.18,
    transparent: options?.transparent ?? false,
    opacity: 1,
  });
}

/** Bleu marine mat pour les volumes (skyline, sol). */
export function createNavyMaterial(lightness = 1): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: COLORS.navy.clone().multiplyScalar(lightness),
    metalness: 0.15,
    roughness: 0.85,
  });
}

/** Petit dégradé radial généré à la volée pour les particules dorées. */
export function createDotTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(232, 199, 102, 1)');
    gradient.addColorStop(0.4, 'rgba(201, 162, 39, 0.55)');
    gradient.addColorStop(1, 'rgba(201, 162, 39, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/** Interpolation linéaire amortie, indépendante du framerate. */
export function damp(current: number, target: number, lambda: number, delta: number): number {
  return THREE.MathUtils.damp(current, target, lambda, delta);
}

/** Rampe d'intensité 0 → 1 → 0 autour d'un point du parcours. */
export function proximityPulse(t: number, center: number, radius: number): number {
  const distance = Math.abs(t - center);
  if (distance > radius) return 0;
  const normalized = 1 - distance / radius;
  return normalized * normalized * (3 - 2 * normalized);
}
