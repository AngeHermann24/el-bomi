'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { createDotTexture } from './sceneCore';

const COUNT = 320;

/** Poussière d'or flottante — profondeur et parallax, très peu coûteuse. */
export default function GoldParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const spd = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i += 1) {
      pos[i * 3] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = Math.random() * 14 - 3;
      pos[i * 3 + 2] = 12 - Math.random() * 62;
      spd[i] = 0.12 + Math.random() * 0.35;
    }

    return { positions: pos, speeds: spd };
  }, []);

  const texture = useMemo(() => createDotTexture(), []);

  useEffect(() => () => texture.dispose(), [texture]);

  useFrame((_, delta) => {
    const points = pointsRef.current;
    if (!points) return;

    const attribute = points.geometry.getAttribute('position') as THREE.BufferAttribute;
    const array = attribute.array as Float32Array;

    for (let i = 0; i < COUNT; i += 1) {
      const yIndex = i * 3 + 1;
      array[yIndex] += speeds[i] * delta;
      if (array[yIndex] > 11) array[yIndex] = -3;
    }

    attribute.needsUpdate = true;
    points.rotation.y += delta * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={0.14}
        sizeAttenuation
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.7}
      />
    </points>
  );
}
