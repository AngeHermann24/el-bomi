'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useMotionValue, type MotionValue } from 'framer-motion';
import * as THREE from 'three';
import { SCENES, sceneProgress } from '@/lib/homeJourney';
import { journeyState, ribbonCurve } from './sceneCore';

const HERO_START = new THREE.Vector3(0, 1.4, 19);
const HERO_END = new THREE.Vector3(0, 2.6, 12.5);
const HERO_TARGET = new THREE.Vector3(0, 2.2, 8);

/** Fin du parcours sur la courbe pour chaque phase. */
const JOURNEY_T_END = 0.9;
const STATS_T_END = 0.95;
const GRID_T_END = 0.985;

/**
 * Lie la caméra à la progression du scroll : recul sur le hero, puis suivi du
 * ruban, puis traversée du portail. Tout est amorti pour rester fluide.
 */
export default function CameraRig({ progress }: { progress: MotionValue<number> }) {
  const targetPosition = useRef(new THREE.Vector3().copy(HERO_START));
  const lookAtTarget = useRef(new THREE.Vector3().copy(HERO_TARGET));
  const currentLookAt = useRef(new THREE.Vector3().copy(HERO_TARGET));
  const scratchPoint = useRef(new THREE.Vector3());
  const scratchTangent = useRef(new THREE.Vector3());

  useFrame(({ camera }, delta) => {
    const p = THREE.MathUtils.clamp(progress.get(), 0, 1);
    journeyState.progress = p;

    if (p < SCENES.journey[0]) {
      // Scène 1 — le skyline se construit, la caméra recule doucement
      const local = sceneProgress(p, SCENES.hero);
      targetPosition.current.lerpVectors(HERO_START, HERO_END, local);
      lookAtTarget.current.copy(HERO_TARGET);
      journeyState.t = 0;
    } else {
      // Scènes 2 → 5 — la caméra suit le ruban puis franchit le portail
      let t: number;

      if (p < SCENES.stats[0]) {
        t = sceneProgress(p, SCENES.journey) * JOURNEY_T_END;
      } else if (p < SCENES.grid[0]) {
        t = JOURNEY_T_END + sceneProgress(p, SCENES.stats) * (STATS_T_END - JOURNEY_T_END);
      } else if (p < SCENES.cta[0]) {
        t = STATS_T_END + sceneProgress(p, SCENES.grid) * (GRID_T_END - STATS_T_END);
      } else {
        t = GRID_T_END + sceneProgress(p, SCENES.cta) * (1 - GRID_T_END);
      }

      t = THREE.MathUtils.clamp(t, 0, 1);
      journeyState.t = t;

      const point = ribbonCurve.getPointAt(t, scratchPoint.current);
      const tangent = ribbonCurve.getTangentAt(t, scratchTangent.current).normalize();

      // Caméra légèrement au-dessus et en retrait, orientée vers l'avant du ruban
      const ctaPhase = sceneProgress(p, SCENES.cta);
      const backOff = THREE.MathUtils.lerp(3.1, 1.2, ctaPhase);
      const height = THREE.MathUtils.lerp(1.35, 0.55, ctaPhase);

      targetPosition.current
        .copy(point)
        .addScaledVector(tangent, -backOff)
        .add(new THREE.Vector3(0, height, 0));

      const lookAheadT = Math.min(1, t + 0.05);
      lookAtTarget.current.copy(ribbonCurve.getPointAt(lookAheadT));
    }

    // Amortissement — sensation "glissée" et pas de saccade au scroll
    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetPosition.current.x, 4.5, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetPosition.current.y, 4.5, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, targetPosition.current.z, 4.5, delta);

    currentLookAt.current.x = THREE.MathUtils.damp(currentLookAt.current.x, lookAtTarget.current.x, 4, delta);
    currentLookAt.current.y = THREE.MathUtils.damp(currentLookAt.current.y, lookAtTarget.current.y, 4, delta);
    currentLookAt.current.z = THREE.MathUtils.damp(currentLookAt.current.z, lookAtTarget.current.z, 4, delta);

    camera.lookAt(currentLookAt.current);
  });

  return null;
}

/** Utilisé par le fallback pour disposer d'une MotionValue neutre. */
export function useZeroProgress() {
  return useMotionValue(0);
}
