'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { createGoldMaterial, journeyState, ribbonCurve } from './sceneCore';

/**
 * Le ruban du logo en 3D : un tube doré qui serpente dans la profondeur.
 * Il se "dessine" au fil du scroll via drawRange, comme un tracé qui se révèle.
 */
export default function GoldRibbon3D() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const tubularSegments = 420;
  const radialSegments = 8;

  const geometry = useMemo(
    () => new THREE.TubeGeometry(ribbonCurve, tubularSegments, 0.085, radialSegments, false),
    [],
  );

  const glowGeometry = useMemo(
    () => new THREE.TubeGeometry(ribbonCurve, Math.floor(tubularSegments / 2), 0.2, 6, false),
    [],
  );

  const material = useMemo(() => createGoldMaterial({ emissiveIntensity: 0.55, roughness: 0.22 }), []);

  const glowMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#E8C766',
        transparent: true,
        opacity: 0.07,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [],
  );

  const indexCount = geometry.index?.count ?? 0;
  const glowIndexCount = glowGeometry.index?.count ?? 0;

  useFrame(() => {
    // Le ruban se révèle progressivement : toujours un peu en avance sur la caméra
    const revealed = Math.min(1, journeyState.t + 0.12);

    if (meshRef.current) {
      const visible = Math.max(6, Math.floor(indexCount * revealed));
      meshRef.current.geometry.setDrawRange(0, visible);
    }
    if (glowRef.current) {
      const visible = Math.max(6, Math.floor(glowIndexCount * revealed));
      glowRef.current.geometry.setDrawRange(0, visible);
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={geometry} material={material} />
      <mesh ref={glowRef} geometry={glowGeometry} material={glowMaterial} />
    </group>
  );
}
