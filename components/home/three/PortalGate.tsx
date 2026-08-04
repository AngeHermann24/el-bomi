'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PORTAL_POSITION, SCENES, sceneProgress } from '@/lib/homeJourney';
import { COLORS, createGoldMaterial, journeyState } from './sceneCore';

/** Fermeture du ruban : un portail lumineux à anneaux concentriques qui s'ouvre sur le CTA. */
export default function PortalGate() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  const ringMaterial = useMemo(
    () => createGoldMaterial({ emissiveIntensity: 0.9, roughness: 0.2, transparent: true }),
    [],
  );

  const ring2Material = useMemo(
    () => createGoldMaterial({ emissiveIntensity: 0.6, roughness: 0.3, transparent: true }),
    [],
  );

  const ring3Material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: COLORS.goldLight,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    [],
  );

  const haloMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: COLORS.goldLight,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    [],
  );

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const gridPhase = sceneProgress(journeyState.progress, SCENES.grid);
    const ctaPhase = sceneProgress(journeyState.progress, SCENES.cta);
    const intensity = Math.max(gridPhase * 0.45, ctaPhase);

    // Anneau principal
    ringMaterial.opacity = THREE.MathUtils.damp(ringMaterial.opacity, intensity, 5, delta);
    // Anneau moyen
    ring2Material.opacity = THREE.MathUtils.damp(ring2Material.opacity, intensity * 0.7, 5, delta);
    // Anneau fin extérieur
    ring3Material.opacity = THREE.MathUtils.damp(ring3Material.opacity, intensity * 0.4, 5, delta);
    // Halo central pulsé
    haloMaterial.opacity = THREE.MathUtils.damp(
      haloMaterial.opacity,
      intensity * (0.08 + Math.sin(state.clock.elapsedTime * 1.8) * 0.04),
      5,
      delta,
    );

    group.visible = intensity > 0.01;
    group.scale.setScalar(0.4 + intensity * 0.9);

    // Rotations différenciées pour effet hypnotique
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.18;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -state.clock.elapsedTime * 0.12;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={PORTAL_POSITION} visible={false}>
      {/* Anneau principal épais */}
      <mesh ref={ringRef} material={ringMaterial}>
        <torusGeometry args={[2.4, 0.1, 12, 72]} />
      </mesh>
      {/* Anneau moyen plus fin */}
      <mesh ref={ring2Ref} material={ring2Material}>
        <torusGeometry args={[2.9, 0.05, 8, 64]} />
      </mesh>
      {/* Anneau extérieur très fin */}
      <mesh ref={ring3Ref} material={ring3Material}>
        <torusGeometry args={[3.4, 0.03, 6, 56]} />
      </mesh>
      {/* Halo central */}
      <mesh material={haloMaterial}>
        <circleGeometry args={[2.35, 48]} />
      </mesh>
    </group>
  );
}
