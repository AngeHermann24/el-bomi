'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FILIALE_TEASERS, type FilialeTeaser, type TeaserKind } from '@/lib/homeJourney';
import { COLORS, journeyState, proximityPulse, ribbonCurve } from './sceneCore';

const boltShape = (() => {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0.95);
  shape.lineTo(-0.36, 0.12);
  shape.lineTo(-0.06, 0.12);
  shape.lineTo(-0.3, -0.95);
  shape.lineTo(0.4, 0.04);
  shape.lineTo(0.06, 0.04);
  shape.closePath();
  return shape;
})();

const routeCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-0.9, 0, 0.3),
  new THREE.Vector3(-0.3, 0.12, -0.2),
  new THREE.Vector3(0.3, -0.08, 0.25),
  new THREE.Vector3(0.95, 0.06, -0.15),
]);

const growthCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-0.8, -0.5, 0),
  new THREE.Vector3(-0.25, -0.2, 0),
  new THREE.Vector3(0.25, 0.25, 0),
  new THREE.Vector3(0.8, 0.75, 0),
]);

function useTeaserMaterials() {
  return useMemo(() => {
    const gold = new THREE.MeshStandardMaterial({
      color: COLORS.goldDark,
      metalness: 1,
      roughness: 0.26,
      emissive: COLORS.goldLight,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0,
    });
    const navy = new THREE.MeshStandardMaterial({
      color: COLORS.navy.clone().multiplyScalar(1.9),
      metalness: 0.2,
      roughness: 0.8,
      transparent: true,
      opacity: 0,
    });
    const line = new THREE.LineBasicMaterial({
      color: COLORS.goldLight,
      transparent: true,
      opacity: 0,
    });
    return { gold, navy, line };
  }, []);
}

interface ShapeProps {
  kind: TeaserKind;
  gold: THREE.Material;
  navy: THREE.Material;
  line: THREE.LineBasicMaterial;
}

function TeaserShape({ kind, gold, navy, line }: ShapeProps) {
  const networkGeometry = useMemo(() => {
    const nodes = [
      [0, 0.7, 0],
      [-0.7, 0.15, 0.2],
      [0.7, 0.2, -0.15],
      [-0.35, -0.6, -0.2],
      [0.45, -0.55, 0.25],
    ];
    const pairs = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 4],
      [3, 4],
      [1, 2],
    ];
    const vertices: number[] = [];
    pairs.forEach(([a, b]) => {
      vertices.push(...nodes[a], ...nodes[b]);
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return { geometry, nodes };
  }, []);

  const parcelGeometry = useMemo(() => {
    const points = [
      new THREE.Vector3(-0.85, 0, -0.6),
      new THREE.Vector3(0.85, 0, -0.6),
      new THREE.Vector3(0.85, 0, 0.6),
      new THREE.Vector3(-0.85, 0, 0.6),
      new THREE.Vector3(-0.85, 0, -0.6),
    ];
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  switch (kind) {
    // Construction : un immeuble qui monte
    case 'tower':
      return (
        <group>
          <mesh material={navy} position={[0, -0.35, 0]}>
            <boxGeometry args={[0.85, 0.7, 0.85]} />
          </mesh>
          <mesh material={navy} position={[0, 0.25, 0]}>
            <boxGeometry args={[0.62, 0.55, 0.62]} />
          </mesh>
          <mesh material={gold} position={[0, 0.78, 0]}>
            <boxGeometry args={[0.4, 0.5, 0.4]} />
          </mesh>
        </group>
      );

    // Énergie : un éclair doré extrudé
    case 'bolt':
      return (
        <mesh material={gold}>
          <extrudeGeometry args={[boltShape, { depth: 0.14, bevelEnabled: false }]} />
        </mesh>
      );

    // IT & Télécoms : un réseau de points reliés
    case 'network':
      return (
        <group>
          {networkGeometry.nodes.map((node, index) => (
            <mesh key={index} material={gold} position={node as [number, number, number]}>
              <icosahedronGeometry args={[0.11, 0]} />
            </mesh>
          ))}
          <lineSegments geometry={networkGeometry.geometry} material={line} />
        </group>
      );

    // Logistique : un tracé de route jalonné
    case 'route':
      return (
        <group>
          <mesh material={gold}>
            <tubeGeometry args={[routeCurve, 48, 0.025, 6, false]} />
          </mesh>
          {[0.15, 0.5, 0.85].map((t) => {
            const point = routeCurve.getPointAt(t);
            return (
              <mesh key={t} material={navy} position={[point.x, point.y + 0.12, point.z]}>
                <boxGeometry args={[0.2, 0.15, 0.28]} />
              </mesh>
            );
          })}
        </group>
      );

    // Medical : une croix sobre
    case 'cross':
      return (
        <group>
          <mesh material={gold}>
            <boxGeometry args={[0.9, 0.26, 0.2]} />
          </mesh>
          <mesh material={gold}>
            <boxGeometry args={[0.26, 0.9, 0.2]} />
          </mesh>
        </group>
      );

    // Agriculture : silhouettes organiques
    case 'organic':
      return (
        <group>
          {[-0.6, 0, 0.6].map((x, index) => (
            <group key={x} position={[x, -0.2 + index * 0.08, index === 1 ? -0.25 : 0.1]}>
              <mesh material={navy} position={[0, -0.28, 0]}>
                <cylinderGeometry args={[0.045, 0.055, 0.45, 5]} />
              </mesh>
              <mesh material={gold} position={[0, 0.12, 0]}>
                <coneGeometry args={[0.26, 0.62, 5]} />
              </mesh>
            </group>
          ))}
        </group>
      );

    // Immobilier : une parcelle délimitée
    case 'parcel':
      return (
        <group>
          <lineSegments geometry={parcelGeometry} material={line} />
          <mesh material={navy} position={[0, 0.2, 0]}>
            <boxGeometry args={[0.5, 0.4, 0.5]} />
          </mesh>
          <mesh material={gold} position={[0, 0.55, 0]} rotation={[0, Math.PI / 4, 0]}>
            <coneGeometry args={[0.42, 0.32, 4]} />
          </mesh>
        </group>
      );

    // Investissement : une courbe ascendante
    case 'curve':
      return (
        <group>
          <mesh material={gold}>
            <tubeGeometry args={[growthCurve, 40, 0.03, 6, false]} />
          </mesh>
          {[0, 1, 2, 3].map((index) => (
            <mesh
              key={index}
              material={navy}
              position={[-0.75 + index * 0.5, -0.62 + (index + 1) * 0.11, 0]}
            >
              <boxGeometry args={[0.22, 0.22 + index * 0.22, 0.22]} />
            </mesh>
          ))}
        </group>
      );

    default:
      return null;
  }
}

function Teaser({ teaser }: { teaser: FilialeTeaser }) {
  const groupRef = useRef<THREE.Group>(null);
  const { gold, navy, line } = useTeaserMaterials();

  const position = useMemo(() => {
    const point = ribbonCurve.getPointAt(teaser.t);
    return new THREE.Vector3(
      point.x + teaser.offset[0],
      point.y + teaser.offset[1] + 0.9,
      point.z + teaser.offset[2],
    );
  }, [teaser]);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    // Évocation brève : n'existe qu'au passage du virage
    const intensity = proximityPulse(journeyState.t, teaser.t, 0.1);

    gold.opacity = THREE.MathUtils.damp(gold.opacity, intensity, 6, delta);
    navy.opacity = THREE.MathUtils.damp(navy.opacity, intensity * 0.9, 6, delta);
    line.opacity = THREE.MathUtils.damp(line.opacity, intensity * 0.65, 6, delta);

    const scale = 0.55 + intensity * 0.55;
    group.scale.setScalar(scale);
    group.visible = intensity > 0.01;
    group.rotation.y = state.clock.elapsedTime * 0.32 + teaser.t * 8;
    group.position.y = position.y + Math.sin(state.clock.elapsedTime * 0.9 + teaser.t * 10) * 0.09;
  });

  return (
    <group ref={groupRef} position={position} visible={false}>
      <TeaserShape kind={teaser.kind} gold={gold} navy={navy} line={line} />
    </group>
  );
}

/** Les 8 univers de filiales, évoqués très brièvement le long du ruban. */
export default function FilialeTeasers() {
  return (
    <group>
      {FILIALE_TEASERS.map((teaser) => (
        <Teaser key={teaser.slug} teaser={teaser} />
      ))}
    </group>
  );
}
