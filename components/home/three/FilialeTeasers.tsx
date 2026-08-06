'use client';

import React, { useMemo, useRef } from 'react';
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

/* ── Scènes animées par filiale ── */

interface SceneProps {
  gold: THREE.Material;
  goldBright: THREE.Material;
  navy: THREE.Material;
  glass: THREE.Material;
  line: THREE.LineBasicMaterial;
  halo: THREE.MeshBasicMaterial;
  t: number;
}

/* Construction : grue rotative, étage qui monte, feux clignotants */
function TowerScene({ gold, goldBright, navy, glass, line, halo, t }: SceneProps) {
  const craneRef = useRef<THREE.Group>(null);
  const hookRef = useRef<THREE.Mesh>(null);
  const blockRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.Mesh>(null);
  const winRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (craneRef.current) craneRef.current.rotation.y = time * 0.5;
    if (hookRef.current) {
      const hoist = (Math.sin(time * 0.7) + 1) / 2;
      hookRef.current.position.y = 0.5 - hoist * 0.6;
    }
    if (blockRef.current) {
      const rise = (Math.sin(time * 0.5) + 1) / 2;
      blockRef.current.position.y = -0.2 + rise * 0.4;
      const s = 0.3 + rise * 0.7;
      blockRef.current.scale.set(s, s, s);
    }
    if (lightRef.current) {
      const blink = Math.sin(time * 5) > 0.6 ? 1.4 : 0.7;
      lightRef.current.scale.setScalar(blink);
    }
    winRefs.current.forEach((m, i) => {
      if (!m) return;
      const flicker = Math.sin(time * 3 + i * 1.7) > 0.3 ? 1 : 0.3;
      m.scale.x = flicker;
    });
  });

  return (
    <group>
      {/* Base */}
      <mesh material={navy} position={[0, -0.45, 0]}>
        <boxGeometry args={[0.9, 0.5, 0.9]} />
      </mesh>
      {/* Corps */}
      <mesh material={navy} position={[0, 0.05, 0]}>
        <boxGeometry args={[0.68, 0.6, 0.68]} />
      </mesh>
      {/* Couronnement */}
      <mesh material={gold} position={[0, 0.55, 0]}>
        <boxGeometry args={[0.45, 0.4, 0.45]} />
      </mesh>
      {/* Bloc en construction animé */}
      <mesh ref={blockRef} material={goldBright} position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.3, 0.5]} />
      </mesh>
      {/* Grue rotative au sommet */}
      <group ref={craneRef} position={[0, 0.9, 0]}>
        <mesh material={goldBright}>
          <cylinderGeometry args={[0.03, 0.03, 0.5, 4]} />
        </mesh>
        <mesh material={gold} position={[0.35, 0.15, 0]}>
          <boxGeometry args={[0.7, 0.04, 0.04]} />
        </mesh>
        {/* Hook */}
        <mesh ref={hookRef} material={goldBright} position={[0.6, 0.1, 0]}>
          <boxGeometry args={[0.06, 0.06, 0.06]} />
        </mesh>
        {/* Câble */}
        <mesh material={line} position={[0.6, 0.12, 0]}>
          <boxGeometry args={[0.005, 0.15, 0.005]} />
        </mesh>
      </group>
      {/* Antenne */}
      <mesh material={goldBright} position={[0, 1.15, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 4]} />
      </mesh>
      {/* Feu clignotant */}
      <mesh ref={lightRef} material={goldBright} position={[0, 1.35, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
      </mesh>
      {/* Fenêtres qui scintillent */}
      {[-0.2, 0, 0.2].map((y, i) => (
        <mesh
          key={`r-${y}`}
          ref={(el) => { winRefs.current[i] = el; }}
          material={glass}
          position={[0.35, -0.15 + y, 0]}
        >
          <boxGeometry args={[0.01, 0.12, 0.12]} />
        </mesh>
      ))}
      {[-0.2, 0, 0.2].map((y, i) => (
        <mesh
          key={`l-${y}`}
          ref={(el) => { winRefs.current[i + 3] = el; }}
          material={glass}
          position={[-0.35, -0.15 + y, 0]}
        >
          <boxGeometry args={[0.01, 0.12, 0.12]} />
        </mesh>
      ))}
      {/* Halo au sol */}
      <mesh material={halo} rotation={[Math.PI / 2, 0, 0]} scale={1.4} position={[0, -0.7, 0]}>
        <ringGeometry args={[0.8, 1.4, 32]} />
      </mesh>
    </group>
  );
}

/* Énergie : éclair qui pulse, étincelles qui orbitent, anneaux d'énergie */
function BoltScene({ gold, goldBright, navy, glass, line, halo, t }: SceneProps) {
  const boltRef = useRef<THREE.Mesh>(null);
  const sparksRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (boltRef.current) {
      const pulse = 1 + Math.sin(time * 6) * 0.12;
      boltRef.current.scale.set(pulse, pulse, pulse);
    }
    if (sparksRef.current) {
      sparksRef.current.rotation.z = time * 1.5;
      sparksRef.current.children.forEach((child, i) => {
        const angle = time * 2 + i * 2.1;
        child.position.x = Math.cos(angle) * 0.7;
        child.position.y = Math.sin(angle) * 0.7;
      });
    }
    if (ringRef.current) {
      const expand = (Math.sin(time * 2) + 1) / 2;
      ringRef.current.scale.setScalar(0.8 + expand * 1.2);
    }
  });

  return (
    <group>
      <mesh ref={boltRef} material={gold}>
        <extrudeGeometry args={[boltShape, { depth: 0.16, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2 }]} />
      </mesh>
      {/* Anneau d'énergie qui expande */}
      <mesh ref={ringRef} material={halo} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.6, 1.0, 32]} />
      </mesh>
      {/* Étincelles orbitantes */}
      <group ref={sparksRef}>
        {[0, 1, 2, 3, 4].map((i) => (
          <mesh key={i} material={goldBright}>
            <sphereGeometry args={[0.04, 6, 6]} />
          </mesh>
        ))}
      </group>
      {/* Sphère d'énergie centrale */}
      <mesh material={goldBright} scale={0.12}>
        <sphereGeometry args={[1, 12, 12]} />
      </mesh>
    </group>
  );
}

/* IT & Télécoms : paquets de données qui transitent, nœuds qui pulsent */
function NetworkScene({ gold, goldBright, navy, glass, line, halo, t }: SceneProps) {
  const nodes = useMemo(() => [
    [0, 0.75, 0], [-0.65, 0.2, 0.2], [0.68, 0.25, -0.15],
    [-0.35, -0.55, -0.2], [0.42, -0.5, 0.25],
  ] as [number, number, number][], []);

  const pairs = useMemo(() => [
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [1, 2],
  ] as [number, number][], []);

  const networkGeometry = useMemo(() => {
    const vertices: number[] = [];
    pairs.forEach(([a, b]) => vertices.push(...nodes[a], ...nodes[b]));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return geo;
  }, [nodes, pairs]);

  const packetRefs = useRef<(THREE.Mesh | null)[]>([]);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    // Paquets de données qui voyagent le long des connexions
    pairs.forEach(([a, b], i) => {
      const mesh = packetRefs.current[i];
      if (!mesh) return;
      const phase = (time * 0.6 + i * 0.25) % 1;
      const from = nodes[a];
      const to = nodes[b];
      mesh.position.set(
        from[0] + (to[0] - from[0]) * phase,
        from[1] + (to[1] - from[1]) * phase,
        from[2] + (to[2] - from[2]) * phase,
      );
      const visible = phase > 0.05 && phase < 0.95;
      mesh.scale.setScalar(visible ? 0.05 : 0);
    });
    // Nœuds qui pulsent en séquence
    nodes.forEach((_, i) => {
      const mesh = nodeRefs.current[i];
      if (!mesh) return;
      const pulse = 1 + Math.sin(time * 2.5 + i * 1.3) * 0.25;
      mesh.scale.setScalar(pulse);
    });
  });

  return (
    <group>
      {/* Lignes du réseau */}
      <lineSegments geometry={networkGeometry} material={line} />
      {/* Nœuds */}
      {nodes.map((node, i) => (
        <mesh
          key={i}
          ref={(el) => { nodeRefs.current[i] = el; }}
          material={i === 0 ? goldBright : gold}
          position={node}
        >
          <icosahedronGeometry args={[i === 0 ? 0.16 : 0.09, 0]} />
        </mesh>
      ))}
      {/* Halos autour des nœuds */}
      {nodes.map((node, i) => (
        <mesh key={`h-${i}`} material={halo} position={node} rotation={[Math.PI / 2, 0, 0]} scale={0.3}>
          <ringGeometry args={[0.12, 0.2, 16]} />
        </mesh>
      ))}
      {/* Paquets de données animés */}
      {pairs.map((_, i) => (
        <mesh
          key={`p-${i}`}
          ref={(el) => { packetRefs.current[i] = el; }}
          material={goldBright}
        >
          <sphereGeometry args={[1, 6, 6]} />
        </mesh>
      ))}
    </group>
  );
}

/* Logistique : camion qui circule sur la route, conteneurs, flèche */
function RouteScene({ gold, goldBright, navy, glass, line, halo, t }: SceneProps) {
  const truckRef = useRef<THREE.Group>(null);
  const arrowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (truckRef.current) {
      const phase = (time * 0.35) % 1;
      const point = routeCurve.getPointAt(phase);
      truckRef.current.position.set(point.x, point.y + 0.15, point.z);
      const next = routeCurve.getPointAt(Math.min(phase + 0.01, 1));
      truckRef.current.lookAt(next.x, point.y + 0.15, next.z);
      truckRef.current.visible = phase > 0.02 && phase < 0.98;
    }
    if (arrowRef.current) {
      arrowRef.current.rotation.z = -Math.PI / 2 + Math.sin(time * 3) * 0.15;
    }
  });

  return (
    <group>
      {/* Route */}
      <mesh material={gold}>
        <tubeGeometry args={[routeCurve, 56, 0.03, 8, false]} />
      </mesh>
      {/* Conteneurs fixes */}
      {[0.2, 0.55, 0.88].map((tt) => {
        const point = routeCurve.getPointAt(tt);
        return (
          <group key={tt} position={[point.x, point.y + 0.14, point.z]}>
            <mesh material={navy}>
              <boxGeometry args={[0.22, 0.16, 0.32]} />
            </mesh>
            <mesh material={goldBright} position={[0, 0.1, 0]}>
              <boxGeometry args={[0.24, 0.02, 0.34]} />
            </mesh>
          </group>
        );
      })}
      {/* Camion animé qui circule */}
      <group ref={truckRef}>
        <mesh material={goldBright}>
          <boxGeometry args={[0.14, 0.12, 0.2]} />
        </mesh>
        <mesh material={navy} position={[0, -0.08, 0]}>
          <boxGeometry args={[0.16, 0.04, 0.22]} />
        </mesh>
      </group>
      {/* Flèche de direction */}
      <mesh ref={arrowRef} material={goldBright} position={[0.95, 0.22, -0.15]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.1, 0.2, 4]} />
      </mesh>
    </group>
  );
}

/* Medical : heartbeat pulsé, ondes sonar qui se propagent */
function CrossScene({ gold, goldBright, navy, glass, line, halo, t }: SceneProps) {
  const crossRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const sonarRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    // Heartbeat : double-pulse cardiaque
    if (crossRef.current) {
      const beat = Math.sin(time * 3.5) > 0.85 ? 1.12 : Math.sin(time * 3.5 + 0.3) > 0.85 ? 1.08 : 1;
      crossRef.current.scale.setScalar(beat);
    }
    if (coreRef.current) {
      const glow = 1 + Math.sin(time * 3.5) * 0.4;
      coreRef.current.scale.setScalar(glow);
    }
    // Ondes sonar expansives
    sonarRefs.current.forEach((m, i) => {
      if (!m) return;
      const phase = (time * 0.5 + i * 0.33) % 1;
      m.scale.setScalar(0.3 + phase * 2.5);
      const mat = m.material as THREE.MeshBasicMaterial;
      mat.opacity = (1 - phase) * 0.4;
    });
  });

  return (
    <group>
      <group ref={crossRef}>
        {/* Barre horizontale */}
        <mesh material={gold}>
          <boxGeometry args={[0.95, 0.26, 0.22]} />
        </mesh>
        {/* Barre verticale */}
        <mesh material={gold}>
          <boxGeometry args={[0.26, 0.95, 0.22]} />
        </mesh>
      </group>
      {/* Centre lumineux pulsé */}
      <mesh ref={coreRef} material={goldBright} position={[0, 0, 0.12]}>
        <sphereGeometry args={[0.08, 12, 12]} />
      </mesh>
      {/* Ondes sonar */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => { sonarRefs.current[i] = el; }}
          material={halo}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[0.5, 0.6, 32]} />
        </mesh>
      ))}
    </group>
  );
}

/* Agriculture : plantes qui poussent et ondulent, pollen qui flotte */
function OrganicScene({ gold, goldBright, navy, glass, line, halo, t }: SceneProps) {
  const treeRefs = useRef<(THREE.Group | null)[]>([]);
  const pollenRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    // Arbres qui ondulent (vent) et poussent cycliquement
    treeRefs.current.forEach((g, i) => {
      if (!g) return;
      const grow = 0.5 + ((Math.sin(time * 0.4 + i * 0.8) + 1) / 2) * 0.5;
      g.scale.y = grow;
      g.rotation.z = Math.sin(time * 1.2 + i * 0.7) * 0.08;
    });
    // Pollen qui flotte
    if (pollenRef.current) {
      pollenRef.current.children.forEach((child, i) => {
        child.position.y = 0.3 + Math.sin(time * 0.8 + i * 1.5) * 0.25;
        child.position.x = Math.sin(time * 0.5 + i * 2) * 0.6;
      });
    }
  });

  return (
    <group>
      {/* Lignes de culture au sol */}
      {[-0.5, -0.15, 0.2, 0.55].map((z, i) => (
        <mesh key={i} material={line} position={[0, -0.55, z]}>
          <boxGeometry args={[1.1, 0.01, 0.02]} />
        </mesh>
      ))}
      {/* Arbres animés */}
      {[-0.55, -0.1, 0.35, 0.65].map((x, index) => (
        <group
          key={x}
          ref={(el) => { treeRefs.current[index] = el; }}
          position={[x, -0.35 + index * 0.06, index % 2 === 0 ? -0.2 : 0.15]}
        >
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
      {/* Particules de pollen */}
      <group ref={pollenRef}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <mesh key={i} material={goldBright} position={[Math.sin(i) * 0.5, 0.3, Math.cos(i) * 0.3]}>
            <sphereGeometry args={[0.025, 4, 4]} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* Immobilier : bâtiment qui s'assemble, toit qui descend, scan laser */
function ParcelScene({ gold, goldBright, navy, glass, line, halo, t }: SceneProps) {
  const buildingRef = useRef<THREE.Mesh>(null);
  const roofRef = useRef<THREE.Mesh>(null);
  const scanRef = useRef<THREE.Mesh>(null);

  const parcelGeometry = useMemo(() => {
    const pts = [
      new THREE.Vector3(-0.9, 0, -0.65), new THREE.Vector3(0.9, 0, -0.65),
      new THREE.Vector3(0.9, 0, 0.65), new THREE.Vector3(-0.9, 0, 0.65),
      new THREE.Vector3(-0.9, 0, -0.65),
    ];
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    // Bâtiment qui monte depuis le sol
    if (buildingRef.current) {
      const rise = (Math.sin(time * 0.5) + 1) / 2;
      buildingRef.current.position.y = -0.3 + rise * 0.45;
      buildingRef.current.scale.y = 0.2 + rise * 0.8;
    }
    // Toit qui descend et se pose
    if (roofRef.current) {
      const descend = (Math.sin(time * 0.5 + Math.PI * 0.3) + 1) / 2;
      roofRef.current.position.y = 0.2 + descend * 0.35;
    }
    // Scan laser qui balaie
    if (scanRef.current) {
      const scan = (time * 0.8) % 1;
      scanRef.current.position.x = -0.9 + scan * 1.8;
      scanRef.current.visible = scan < 1;
    }
  });

  return (
    <group>
      <lineSegments geometry={parcelGeometry} material={line} />
      {/* Bâtiment qui s'assemble */}
      <mesh ref={buildingRef} material={navy} position={[0, 0.15, 0]}>
        <boxGeometry args={[0.55, 0.5, 0.55]} />
      </mesh>
      {/* Toit pyramidal qui descend */}
      <mesh ref={roofRef} material={gold} position={[0, 0.55, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[0.45, 0.35, 4]} />
      </mesh>
      {/* Sommet lumineux */}
      <mesh material={goldBright} position={[0, 0.78, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
      </mesh>
      {/* Scan laser */}
      <mesh ref={scanRef} material={goldBright} position={[0, 0.3, 0]}>
        <boxGeometry args={[0.02, 0.8, 0.02]} />
      </mesh>
      {/* Coins de parcelle */}
      {[[-0.9, -0.65], [0.9, -0.65], [0.9, 0.65], [-0.9, 0.65]].map(([x, z], i) => (
        <mesh key={i} material={goldBright} position={[x, 0, z]}>
          <boxGeometry args={[0.06, 0.12, 0.06]} />
        </mesh>
      ))}
    </group>
  );
}

/* Investissement : barres qui grandissent en cascade, courbe qui se trace, flèche qui monte */
function CurveScene({ gold, goldBright, navy, glass, line, halo, t }: SceneProps) {
  const barRefs = useRef<(THREE.Mesh | null)[]>([]);
  const peakRef = useRef<THREE.Mesh>(null);
  const peakHaloRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    // Barres qui grandissent en cascade
    [0, 1, 2, 3].forEach((i) => {
      const mesh = barRefs.current[i];
      if (!mesh) return;
      const phase = (time * 0.5 + i * 0.2) % 1.5;
      const grow = Math.min(phase, 1);
      mesh.scale.y = 0.1 + grow * 0.9;
    });
    // Point sommet qui pulse
    if (peakRef.current) {
      const pulse = 1 + Math.sin(time * 3) * 0.3;
      peakRef.current.scale.setScalar(pulse);
    }
    if (peakHaloRef.current) {
      const expand = (Math.sin(time * 2) + 1) / 2;
      peakHaloRef.current.scale.setScalar(0.3 + expand * 0.8);
    }
  });

  return (
    <group>
      {/* Courbe de croissance */}
      <mesh material={gold}>
        <tubeGeometry args={[growthCurve, 48, 0.035, 8, false]} />
      </mesh>
      {/* Barres animées */}
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          ref={(el) => { barRefs.current[i] = el; }}
          material={navy}
          position={[-0.78 + i * 0.52, -0.4 + i * 0.14, 0]}
        >
          <boxGeometry args={[0.2, 0.24 + i * 0.22, 0.2]} />
        </mesh>
      ))}
      {/* Couvercles dorés des barres */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={`c-${i}`} material={goldBright} position={[-0.78 + i * 0.52, -0.24 + i * 0.28, 0]}>
          <boxGeometry args={[0.22, 0.02, 0.22]} />
        </mesh>
      ))}
      {/* Point sommet pulsé */}
      <mesh ref={peakRef} material={goldBright} position={[0.85, 0.8, 0]}>
        <sphereGeometry args={[0.06, 10, 10]} />
      </mesh>
      {/* Halo expansif au sommet */}
      <mesh ref={peakHaloRef} material={halo} position={[0.85, 0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.1, 0.25, 16]} />
      </mesh>
    </group>
  );
}

/* ── Sélecteur de scène ── */

const SCENE_MAP: Record<TeaserKind, React.FC<SceneProps>> = {
  tower: TowerScene,
  bolt: BoltScene,
  network: NetworkScene,
  route: RouteScene,
  cross: CrossScene,
  organic: OrganicScene,
  parcel: ParcelScene,
  curve: CurveScene,
};

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

  const SceneComponent = SCENE_MAP[teaser.kind];

  useFrame((state, delta) => {
    const group = groupRef.current;
    const inner = innerRef.current;
    if (!group) return;

    const intensity = proximityPulse(journeyState.t, teaser.t, 0.12);
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

    const scale = 0.4 + easedIntensity * 0.7;
    group.scale.setScalar(scale);
    group.visible = intensity > 0.01;

    if (inner) {
      inner.rotation.y = state.clock.elapsedTime * 0.35 + teaser.t * 8;
    }

    group.position.y = position.y + Math.sin(state.clock.elapsedTime * 0.8 + teaser.t * 10) * 0.12;
    group.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + teaser.t * 6) * 0.08;
  });

  return (
    <group ref={groupRef} position={position} visible={false}>
      <group ref={innerRef}>
        <SceneComponent
          gold={gold}
          goldBright={goldBright}
          navy={navy}
          glass={glass}
          line={line}
          halo={halo}
          t={teaser.t}
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
