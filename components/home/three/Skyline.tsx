'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { createGoldMaterial, createNavyMaterial } from './sceneCore';

interface Building {
  position: [number, number, number];
  size: [number, number, number];
  height: number;
  delay: number;
  gold: boolean;
}

/** Skyline stylisé bas-poly : silhouettes qui montent de terre à l'arrivée. */
export default function Skyline() {
  const groupRef = useRef<THREE.Group>(null);
  const elapsedRef = useRef(0);

  const buildings = useMemo<Building[]>(() => {
    // x, z, largeur, hauteur, accent or — grille volontairement irrégulière
    const layout: Array<[number, number, number, number, boolean]> = [
      [-7.4, 9.5, 1.5, 3.2, false],
      [-5.6, 11.2, 1.2, 4.6, false],
      [-4.2, 8.2, 1.4, 2.4, true],
      [-2.6, 12.4, 1.6, 6.2, false],
      [-1.2, 9.0, 1.1, 3.6, false],
      [0.4, 13.0, 1.8, 7.4, false],
      [1.9, 9.6, 1.3, 2.9, true],
      [3.2, 12.0, 1.5, 5.4, false],
      [4.8, 8.8, 1.2, 3.4, false],
      [6.2, 11.4, 1.6, 4.2, false],
      [7.8, 9.2, 1.3, 2.6, false],
      [-8.8, 12.6, 1.4, 3.8, false],
      [9.2, 12.8, 1.5, 4.8, false],
      [-3.4, 15.0, 1.7, 5.0, false],
      [2.4, 15.4, 1.4, 3.4, false],
    ];

    return layout.map(([x, z, width, height, gold], index) => ({
      position: [x, 0, z] as [number, number, number],
      size: [width, height, width * 0.9] as [number, number, number],
      height,
      delay: 0.06 * index,
      gold,
    }));
  }, []);

  const navyMaterial = useMemo(() => createNavyMaterial(1.35), []);
  const navyDarkMaterial = useMemo(() => createNavyMaterial(0.85), []);
  const goldMaterial = useMemo(() => createGoldMaterial({ emissiveIntensity: 0.3 }), []);

  useFrame((_, delta) => {
    elapsedRef.current += delta;
    const group = groupRef.current;
    if (!group) return;

    group.children.forEach((child, index) => {
      const building = buildings[index];
      if (!building) return;
      const local = Math.min(1, Math.max(0, (elapsedRef.current - 0.25 - building.delay) / 1.1));
      // easeOutBack léger pour l'effet "montée des bâtiments"
      const eased = 1 - Math.pow(1 - local, 3);
      child.scale.y = Math.max(0.001, eased);
      child.position.y = (building.height * eased) / 2;
    });
  });

  return (
    <group ref={groupRef}>
      {buildings.map((building, index) => (
        <mesh
          key={`${building.position[0]}-${building.position[2]}`}
          position={building.position}
          material={
            building.gold ? goldMaterial : index % 3 === 0 ? navyDarkMaterial : navyMaterial
          }
        >
          <boxGeometry args={[building.size[0], building.height, building.size[2]]} />
        </mesh>
      ))}
    </group>
  );
}
