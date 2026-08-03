'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PORTAL_POSITION, SCENES, sceneProgress } from '@/lib/homeJourney';
import { COLORS, createGoldMaterial, journeyState } from './sceneCore';

/** Fermeture du ruban : un cercle/portail lumineux qui s'ouvre sur le CTA. */
export default function PortalGate() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const ringMaterial = useMemo(
    () => createGoldMaterial({ emissiveIntensity: 0.9, roughness: 0.2, transparent: true }),
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

    // Le portail se matérialise sur la fin du parcours (grille + CTA)
    const gridPhase = sceneProgress(journeyState.progress, SCENES.grid);
    const ctaPhase = sceneProgress(journeyState.progress, SCENES.cta);
    const intensity = Math.max(gridPhase * 0.45, ctaPhase);

    ringMaterial.opacity = THREE.MathUtils.damp(ringMaterial.opacity, intensity, 5, delta);
    haloMaterial.opacity = THREE.MathUtils.damp(
      haloMaterial.opacity,
      intensity * (0.1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.03),
      5,
      delta,
    );

    group.visible = intensity > 0.01;
    group.scale.setScalar(0.5 + intensity * 0.85);

    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.18;
    }
  });

  return (
    <group ref={groupRef} position={PORTAL_POSITION} visible={false}>
      <mesh ref={ringRef} material={ringMaterial}>
        <torusGeometry args={[2.4, 0.1, 12, 72]} />
      </mesh>
      <mesh material={haloMaterial}>
        <circleGeometry args={[2.35, 48]} />
      </mesh>
    </group>
  );
}
