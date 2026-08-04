'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FILIALE_TEASERS, type FilialeTeaser, type TeaserKind } from '@/lib/homeJourney';
import { COLORS, journeyState, proximityPulse, ribbonCurve } from './sceneCore';

/* ── Formes prégénérées ── */

const boltShape = (() => {
  const shape = new THREE.Shape();
  shape.moveTo(0, 1.05);
  shape.lineTo(-0.38, 0.15);
  shape.lineTo(-0.08, 0.15);
  shape.lineTo(-0.32, -1.0);
  shape.lineTo(0.42, 0.06);
  shape.lineTo(0.08, 0.06);
  shape.closePath();
  return shape;
})();

const routeCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-0.95, -0.1, 0.3),
  new THREE.Vector3(-0.3, 0.18, -0.2),
  new THREE.Vector3(0.3, -0.05, 0.25),
  new THREE.Vector3(0.95, 0.12, -0.15),
]);

const growthCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-0.85, -0.55, 0),
  new THREE.Vector3(-0.25, -0.22, 0),
  new THREE.Vector3(0.25, 0.28, 0),
  new THREE.Vector3(0.85, 0.8, 0),
]);

/* ── Matériaux ── */

function useTeaserMaterials() {
  return useMemo(() => {
    const gold = new THREE.MeshStandardMaterial({
      color: COLORS.goldDark,
      metalness: 1,
      roughness: 0.22,
      emissive: COLORS.goldLight,
      emissiveIntensity: 0.45,
      transparent: true,
      opacity: 0,
    });
    const goldBright = new THREE.MeshStandardMaterial({
      color: COLORS.goldLight,
      metalness: 1,
      roughness: 0.15,
      emissive: COLORS.goldLight,
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0,
    });
    const navy = new THREE.MeshStandardMaterial({
      color: COLORS.navy.clone().multiplyScalar(2.1),
      metalness: 0.3,
      roughness: 0.7,
      transparent: true,
      opacity: 0,
    });
    const glass = new THREE.MeshStandardMaterial({
      color: COLORS.goldLight,
      metalness: 0.1,
      roughness: 0.05,
      transparent: true,
      opacity: 0,
      emissive: COLORS.goldLight,
      emissiveIntensity: 0.3,
    });
    const line = new THREE.LineBasicMaterial({
      color: COLORS.goldLight,
      transparent: true,
      opacity: 0,
    });
    const halo = new THREE.MeshBasicMaterial({
      color: COLORS.goldLight,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    return { gold, goldBright, navy, glass, line, halo };
  }, []);
}

/* ── Composant halo réutilisable ── */

function Halo({ material, scale = 1 }: { material: THREE.Material; scale?: number }) {
  return (
    <mesh material={material} scale={scale} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.8, 1.4, 32]} />
    </mesh>
  );
}

/* ── Formes 3D par filiale ── */

interface ShapeProps {
  kind: TeaserKind;
  gold: THREE.Material;
  goldBright: THREE.Material;
  navy: THREE.Material;
  glass: THREE.Material;
  line: THREE.LineBasicMaterial;
  halo: THREE.MeshBasicMaterial;
}

function TeaserShape({ kind, gold, goldBright, navy, glass, line, halo }: ShapeProps) {
  const networkGeometry = useMemo(() => {
    const nodes = [
      [0, 0.75, 0],
      [-0.65, 0.2, 0.2],
      [0.68, 0.25, -0.15],
      [-0.35, -0.55, -0.2],
      [0.42, -0.5, 0.25],
    ];
    const pairs = [
      [0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [1, 2],
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
    const pts = [
      new THREE.Vector3(-0.9, 0, -0.65),
      new THREE.Vector3(0.9, 0, -0.65),
      new THREE.Vector3(0.9, 0, 0.65),
      new THREE.Vector3(-0.9, 0, 0.65),
      new THREE.Vector3(-0.9, 0, -0.65),
    ];
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  switch (kind) {
    // Construction : tour multi-niveaux avec fenêtres lumineuses et grue
    case 'tower':
      return (
        <group>
          {/* Base large */}
          <mesh material={navy} position={[0, -0.45, 0]}>
            <boxGeometry args={[0.9, 0.5, 0.9]} />
          </mesh>
          {/* Corps principal */}
          <mesh material={navy} position={[0, 0.05, 0]}>
            <boxGeometry args={[0.68, 0.6, 0.68]} />
          </mesh>
          {/* Couronnement doré */}
          <mesh material={gold} position={[0, 0.55, 0]}>
            <boxGeometry args={[0.45, 0.4, 0.45]} />
          </mesh>
          {/* Antenne */}
          <mesh material={goldBright} position={[0, 0.95, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.4, 4]} />
          </mesh>
          {/* Lumière au sommet */}
          <mesh material={goldBright} position={[0, 1.18, 0]}>
            <sphereGeometry args={[0.05, 8, 8]} />
          </mesh>
          {/* Fenêtres lumineuses */}
          {[-0.2, 0, 0.2].map((y) => (
            <mesh key={y} material={glass} position={[0.35, -0.15 + y, 0]}>
              <boxGeometry args={[0.01, 0.12, 0.12]} />
            </mesh>
          ))}
          {[-0.2, 0, 0.2].map((y) => (
            <mesh key={`l-${y}`} material={glass} position={[-0.35, -0.15 + y, 0]}>
              <boxGeometry args={[0.01, 0.12, 0.12]} />
            </mesh>
          ))}
          <Halo material={halo} scale={1.3} />
        </group>
      );

    // Énergie : éclair extrudé avec halo pulsé
    case 'bolt':
      return (
        <group>
          <mesh material={gold}>
            <extrudeGeometry args={[boltShape, { depth: 0.16, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2 }]} />
          </mesh>
          {/* Halo circulaire pulsé */}
          <mesh material={halo} rotation={[Math.PI / 2, 0, 0]} scale={1.6}>
            <ringGeometry args={[0.7, 1.3, 32]} />
          </mesh>
          {/* Étincelles */}
          {[
            [0.4, 0.5, 0.1], [-0.3, -0.4, 0.1], [0.2, -0.6, -0.1],
          ].map((pos, i) => (
            <mesh key={i} material={goldBright} position={pos as [number, number, number]}>
              <sphereGeometry args={[0.04, 6, 6]} />
            </mesh>
          ))}
        </group>
      );

    // IT & Télécoms : réseau de nœuds reliés avec sphère centrale
    case 'network':
      return (
        <group>
          {/* Sphère centrale */}
          <mesh material={gold} position={[0, 0.75, 0]}>
            <icosahedronGeometry args={[0.16, 1]} />
          </mesh>
          {/* Nœuds périphériques */}
          {networkGeometry.nodes.map((node, index) => (
            <mesh key={index} material={gold} position={node as [number, number, number]}>
              <icosahedronGeometry args={[0.09, 0]} />
            </mesh>
          ))}
          {/* Halos autour des nœuds */}
          {networkGeometry.nodes.map((node, index) => (
            <mesh key={`h-${index}`} material={halo} position={node as [number, number, number]} rotation={[Math.PI / 2, 0, 0]} scale={0.3}>
              <ringGeometry args={[0.12, 0.2, 16]} />
            </mesh>
          ))}
          <lineSegments geometry={networkGeometry.geometry} material={line} />
        </group>
      );

    // Logistique : route sinueuse avec conteneurs et flèche
    case 'route':
      return (
        <group>
          {/* Route */}
          <mesh material={gold}>
            <tubeGeometry args={[routeCurve, 56, 0.03, 8, false]} />
          </mesh>
          {/* Conteneurs jalonnés */}
          {[0.12, 0.45, 0.78].map((t) => {
            const point = routeCurve.getPointAt(t);
            return (
              <group key={t} position={[point.x, point.y + 0.14, point.z]}>
                <mesh material={navy}>
                  <boxGeometry args={[0.22, 0.16, 0.32]} />
                </mesh>
                <mesh material={goldBright} position={[0, 0.1, 0]}>
                  <boxGeometry args={[0.24, 0.02, 0.34]} />
                </mesh>
              </group>
            );
          })}
          {/* Flèche de direction au bout */}
          <mesh material={goldBright} position={[0.95, 0.22, -0.15]} rotation={[0, 0, -Math.PI / 2]}>
            <coneGeometry args={[0.1, 0.2, 4]} />
          </mesh>
        </group>
      );

    // Medical : croix médicale avec halo et capsule
    case 'cross':
      return (
        <group>
          {/* Barre horizontale */}
          <mesh material={gold}>
            <boxGeometry args={[0.95, 0.26, 0.22]} />
          </mesh>
          {/* Barre verticale */}
          <mesh material={gold}>
            <boxGeometry args={[0.26, 0.95, 0.22]} />
          </mesh>
          {/* Centre lumineux */}
          <mesh material={goldBright} position={[0, 0, 0.12]}>
            <sphereGeometry args={[0.08, 12, 12]} />
          </mesh>
          {/* Halo */}
          <mesh material={halo} rotation={[Math.PI / 2, 0, 0]} scale={1.5}>
            <ringGeometry args={[0.6, 1.1, 32]} />
          </mesh>
        </group>
      );

    // Agriculture : champ avec arbres stylisés et lignes de culture
    case 'organic':
      return (
        <group>
          {/* Lignes de culture au sol */}
          {[-0.5, -0.15, 0.2, 0.55].map((z, i) => (
            <mesh key={i} material={line} position={[0, -0.55, z]}>
              <boxGeometry args={[1.1, 0.01, 0.02]} />
            </mesh>
          ))}
          {/* Arbres : tronc + feuillage */}
          {[-0.55, -0.1, 0.35, 0.65].map((x, index) => (
            <group key={x} position={[x, -0.35 + index * 0.06, index % 2 === 0 ? -0.2 : 0.15]}>
              <mesh material={navy} position={[0, -0.15, 0]}>
                <cylinderGeometry args={[0.04, 0.06, 0.4, 5]} />
              </mesh>
              <mesh material={gold} position={[0, 0.18, 0]}>
                <coneGeometry args={[0.22, 0.5, 6]} />
              </mesh>
              <mesh material={goldBright} position={[0, 0.38, 0]}>
                <sphereGeometry args={[0.06, 6, 6]} />
              </mesh>
            </group>
          ))}
        </group>
      );

    // Immobilier : parcelle avec bâtiment et toit pyramidal
    case 'parcel':
      return (
        <group>
          {/* Délimitation de parcelle */}
          <lineSegments geometry={parcelGeometry} material={line} />
          {/* Bâtiment principal */}
          <mesh material={navy} position={[0, 0.15, 0]}>
            <boxGeometry args={[0.55, 0.5, 0.55]} />
          </mesh>
          {/* Toit pyramidal doré */}
          <mesh material={gold} position={[0, 0.55, 0]} rotation={[0, Math.PI / 4, 0]}>
            <coneGeometry args={[0.45, 0.35, 4]} />
          </mesh>
          {/* Sommet lumineux */}
          <mesh material={goldBright} position={[0, 0.78, 0]}>
            <sphereGeometry args={[0.05, 8, 8]} />
          </mesh>
          {/* Coins de parcelle marqués */}
          {[
            [-0.9, -0.65], [0.9, -0.65], [0.9, 0.65], [-0.9, 0.65],
          ].map(([x, z], i) => (
            <mesh key={i} material={goldBright} position={[x, 0, z]}>
              <boxGeometry args={[0.06, 0.12, 0.06]} />
            </mesh>
          ))}
        </group>
      );

    // Investissement : graphique à barres avec courbe de croissance
    case 'curve':
      return (
        <group>
          {/* Courbe de croissance */}
          <mesh material={gold}>
            <tubeGeometry args={[growthCurve, 48, 0.035, 8, false]} />
          </mesh>
          {/* Barres de données */}
          {[0, 1, 2, 3].map((index) => (
            <group key={index} position={[-0.78 + index * 0.52, -0.55, 0]}>
              <mesh material={navy} position={[0, 0.12 + index * 0.14, 0]}>
                <boxGeometry args={[0.2, 0.24 + index * 0.22, 0.2]} />
              </mesh>
              <mesh material={goldBright} position={[0, 0.24 + index * 0.28, 0]}>
                <boxGeometry args={[0.22, 0.02, 0.22]} />
              </mesh>
            </group>
          ))}
          {/* Point sommet de la courbe */}
          <mesh material={goldBright} position={[0.85, 0.8, 0]}>
            <sphereGeometry args={[0.06, 10, 10]} />
          </mesh>
          {/* Halo au sommet */}
          <mesh material={halo} position={[0.85, 0.8, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.5}>
            <ringGeometry args={[0.1, 0.25, 16]} />
          </mesh>
        </group>
      );

    default:
      return null;
  }
}

/* ── Teaser individuel ── */

function Teaser({ teaser }: { teaser: FilialeTeaser }) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);
  const { gold, goldBright, navy, glass, line, halo } = useTeaserMaterials();

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
    const inner = innerRef.current;
    if (!group) return;

    const intensity = proximityPulse(journeyState.t, teaser.t, 0.12);

    // Apparition fluide avec easing
    const easedIntensity = intensity * intensity * (3 - 2 * intensity);

    gold.opacity = THREE.MathUtils.damp(gold.opacity, easedIntensity, 6, delta);
    goldBright.opacity = THREE.MathUtils.damp(goldBright.opacity, easedIntensity, 7, delta);
    navy.opacity = THREE.MathUtils.damp(navy.opacity, easedIntensity * 0.92, 6, delta);
    glass.opacity = THREE.MathUtils.damp(glass.opacity, easedIntensity * 0.7, 6, delta);
    line.opacity = THREE.MathUtils.damp(line.opacity, easedIntensity * 0.7, 6, delta);
    halo.opacity = THREE.MathUtils.damp(
      halo.opacity,
      easedIntensity * (0.12 + Math.sin(state.clock.elapsedTime * 2 + teaser.t * 10) * 0.05),
      5,
      delta,
    );

    // Scale avec effet de "pop" élastique
    const scale = 0.4 + easedIntensity * 0.7;
    group.scale.setScalar(scale);
    group.visible = intensity > 0.01;

    // Rotation lente et continue de l'objet
    if (inner) {
      inner.rotation.y = state.clock.elapsedTime * 0.35 + teaser.t * 8;
    }

    // Flottement vertical doux
    group.position.y = position.y + Math.sin(state.clock.elapsedTime * 0.8 + teaser.t * 10) * 0.12;

    // Légère inclinaison qui oscille
    group.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + teaser.t * 6) * 0.08;
  });

  return (
    <group ref={groupRef} position={position} visible={false}>
      <group ref={innerRef}>
        <TeaserShape
          kind={teaser.kind}
          gold={gold}
          goldBright={goldBright}
          navy={navy}
          glass={glass}
          line={line}
          halo={halo}
        />
      </group>
    </group>
  );
}

/** Les 8 univers de filiales, évoqués le long du ruban. */
export default function FilialeTeasers() {
  return (
    <group>
      {FILIALE_TEASERS.map((teaser) => (
        <Teaser key={teaser.slug} teaser={teaser} />
      ))}
    </group>
  );
}
