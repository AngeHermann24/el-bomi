'use client';

import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const GOLD = '#C9A227';
const GOLD_BRIGHT = '#E8C766';
const NAVY = '#0B1E3D';
const NAVY_DEEP = '#070d1a';
const CONCRETE = '#2a2d32';
const STEEL = '#5a6070';
const GLASS_BLUE = '#1a3a6e';

/* ═══ MATÉRIAUX — simplifiés pour performance ═══ */

function useMaterials() {
  return useMemo(() => ({
    gold: new THREE.MeshStandardMaterial({ color: GOLD, metalness: 0.7, roughness: 0.3, emissive: GOLD, emissiveIntensity: 0.05, transparent: true }),
    goldBright: new THREE.MeshStandardMaterial({ color: GOLD_BRIGHT, metalness: 0.8, roughness: 0.2, emissive: GOLD_BRIGHT, emissiveIntensity: 0.15 }),
    navy: new THREE.MeshStandardMaterial({ color: NAVY, metalness: 0.3, roughness: 0.7, transparent: true }),
    concrete: new THREE.MeshStandardMaterial({ color: CONCRETE, metalness: 0.05, roughness: 0.9, transparent: true }),
    steel: new THREE.MeshStandardMaterial({ color: STEEL, metalness: 0.6, roughness: 0.35, transparent: true }),
    glass: new THREE.MeshStandardMaterial({ color: GLASS_BLUE, metalness: 0.3, roughness: 0.15, transparent: true, opacity: 0.45 }),
    glassDark: new THREE.MeshStandardMaterial({ color: '#0a1525', metalness: 0.2, roughness: 0.2 }),
  }), []);
}

/* ═══ CAMÉRA ═══ */

function CameraRig({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 2, 9));
  const targetLook = useRef(new THREE.Vector3(0, 1.5, 0));

  useFrame(() => {
    const p = progressRef.current;
    const angle = THREE.MathUtils.lerp(-0.25, Math.PI * 0.7, Math.min(p / 0.4, 1));
    const radius = THREE.MathUtils.lerp(10, 8, Math.min(p / 0.4, 1));
    const height = THREE.MathUtils.lerp(2.5, 4, Math.min(p / 0.4, 1));

    const zoneP = THREE.MathUtils.clamp((p - 0.4) / 0.32, 0, 1);
    const zoneAngle = angle + zoneP * Math.PI * 0.4;
    const zoneRadius = THREE.MathUtils.lerp(radius, 9, zoneP);
    const zoneHeight = THREE.MathUtils.lerp(height, 2, zoneP);

    const endP = THREE.MathUtils.clamp((p - 0.72) / 0.28, 0, 1);
    const endRadius = THREE.MathUtils.lerp(zoneRadius, 11, endP);
    const endHeight = THREE.MathUtils.lerp(zoneHeight, 2.5, endP);

    targetPos.current.set(
      Math.sin(zoneAngle + endP * 0.25) * endRadius,
      endHeight,
      Math.cos(zoneAngle + endP * 0.25) * endRadius
    );

    camera.position.lerp(targetPos.current, 0.05);
    camera.lookAt(targetLook.current);
  });

  return null;
}

/* ═══ TERRAIN ═══ */

function Terrain({ progressRef, mats }: { progressRef: React.MutableRefObject<number>; mats: ReturnType<typeof useMaterials> }) {
  const gridRef = useRef<THREE.GridHelper>(null);
  const groundRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const p = progressRef.current;
    if (gridRef.current) {
      const mat = gridRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = p < 0.15 ? THREE.MathUtils.lerp(0, 0.4, p / 0.15) : Math.max(0.4 - (p - 0.15) * 0.4, 0.03);
    }
    if (groundRef.current) {
      const mat = groundRef.current.material as THREE.MeshStandardMaterial;
      mat.opacity = p < 0.1 ? THREE.MathUtils.lerp(0, 1, p / 0.1) : 1;
    }
  });

  return (
    <group>
      <mesh ref={groundRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]} receiveShadow material={mats.navy}>
        <planeGeometry args={[40, 40, 1, 1]} />
      </mesh>
      {/* Grille principale */}
      <gridHelper ref={gridRef} args={[24, 24, GOLD, GOLD]} position={[0, -1.59, 0]} />
      {/* Grille fine secondaire */}
      <gridHelper args={[24, 48, '#1a2a4e', '#1a2a4e']} position={[0, -1.585, 0]} />
    </group>
  );
}

/* ═══ GRUE TOUR — simplifiée et élégante ═══ */

function TowerCrane({ progressRef, mats }: { progressRef: React.MutableRefObject<number>; mats: ReturnType<typeof useMaterials> }) {
  const craneRef = useRef<THREE.Group>(null);
  const hookRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const p = progressRef.current;
    if (craneRef.current) {
      const visibility = p < 0.05 ? 0 : Math.min((p - 0.05) / 0.1, 1);
      craneRef.current.visible = visibility > 0;
      craneRef.current.scale.setScalar(visibility);
      craneRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      craneRef.current.position.x = 2.5 - p * 1.5;
    }
    if (hookRef.current) {
      const t = state.clock.elapsedTime;
      hookRef.current.position.x = Math.sin(t * 0.3) * 0.8;
      hookRef.current.position.y = -0.8 + Math.sin(t * 0.5) * 0.15;
    }
  });

  const mastH = 5;

  return (
    <group ref={craneRef} position={[2.5, 1, 0]}>
      {/* Mât — simple colonne carrée */}
      <mesh material={mats.steel} position={[0, mastH / 2, 0]} castShadow>
        <boxGeometry args={[0.15, mastH, 0.15]} />
      </mesh>
      {/* Croisillons simplifiés — 3 niveaux */}
      {[1, 2, 3].map((n) => (
        <mesh key={n} material={mats.steel} position={[0, n * 1.5, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.18, 0.02, 0.02]} />
        </mesh>
      ))}

      {/* Cabine */}
      <mesh material={mats.navy} position={[-0.15, mastH - 0.1, 0]} castShadow>
        <boxGeometry args={[0.3, 0.25, 0.25]} />
      </mesh>

      {/* Contrepoids */}
      <mesh material={mats.concrete} position={[-0.5, mastH, 0]} castShadow>
        <boxGeometry args={[0.6, 0.35, 0.3]} />
      </mesh>

      {/* Bras horizontal — simple poutre */}
      <mesh material={mats.gold} position={[0.8, mastH, 0]} castShadow>
        <boxGeometry args={[2.8, 0.06, 0.06]} />
      </mesh>
      {/* Supports verticaux du bras */}
      {[-0.5, 0, 0.5, 1.0, 1.5].map((x) => (
        <mesh key={x} material={mats.gold} position={[0.8 + x, mastH, 0]}>
          <boxGeometry args={[0.02, 0.12, 0.02]} />
        </mesh>
      ))}

      {/* Câble + crochet */}
      <group ref={hookRef} position={[1.5, mastH - 0.1, 0]}>
        <mesh material={mats.steel}>
          <cylinderGeometry args={[0.008, 0.008, 0.8, 4]} />
        </mesh>
        <mesh material={mats.steel} position={[0, -0.45, 0]} castShadow>
          <boxGeometry args={[0.12, 0.08, 0.1]} />
        </mesh>
      </group>

      {/* Sommet du mât */}
      <mesh material={mats.gold} position={[0, mastH + 0.15, 0]}>
        <cylinderGeometry args={[0.015, 0.025, 0.25, 6]} />
      </mesh>
      <mesh material={mats.goldBright} position={[0, mastH + 0.3, 0]}>
        <sphereGeometry args={[0.02, 8, 8]} />
      </mesh>
    </group>
  );
}

/* ═══ BÂTIMENT — simplifié et élégant ═══ */

const FLOORS = 6;
const FLOOR_H = 0.7;
const GROUND_H = 0.9;
const FLOOR_W = 2.2;
const FLOOR_D = 1.6;
const SLAB_T = 0.08;
const N_MULLIONS = 4;

function floorHeight(i: number) {
  return i === 0 ? GROUND_H : FLOOR_H;
}

function floorY(i: number) {
  let y = 0;
  for (let f = 0; f < i; f++) y += floorHeight(f);
  return y;
}

function ConstructionBuilding({ progressRef, mats }: { progressRef: React.MutableRefObject<number>; mats: ReturnType<typeof useMaterials> }) {
  const groupRef = useRef<THREE.Group>(null);
  const foundationsRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const p = progressRef.current;
    if (foundationsRef.current) {
      const fP = THREE.MathUtils.clamp((p - 0.05) / 0.07, 0, 1);
      foundationsRef.current.scale.y = fP;
      (foundationsRef.current.material as THREE.MeshStandardMaterial).opacity = fP;
      foundationsRef.current.visible = fP > 0;
    }
    if (groupRef.current) {
      const buildP = THREE.MathUtils.clamp((p - 0.12) / 0.28, 0, 1);
      groupRef.current.children.forEach((child, i) => {
        if (i < FLOORS) {
          const floorProgress = THREE.MathUtils.clamp(buildP * FLOORS - i, 0, 1);
          const floorGroup = child as THREE.Group;
          floorGroup.visible = floorProgress > 0.02;
          floorGroup.scale.y = floorProgress;
        }
      });
    }
  });

  // Mullions verticaux (position X)
  const mullionX = useMemo(() => {
    const arr: number[] = [];
    for (let m = 0; m <= N_MULLIONS; m++) {
      arr.push(-FLOOR_W / 2 + (FLOOR_W / N_MULLIONS) * m);
    }
    return arr;
  }, []);

  return (
    <group position={[-1.2, -1.5, 0]}>
      {/* Fondations */}
      <mesh ref={foundationsRef} material={mats.concrete} position={[0, -0.25, 0]} castShadow receiveShadow>
        <boxGeometry args={[FLOOR_W + 0.4, 0.5, FLOOR_D + 0.4]} />
      </mesh>

      <group ref={groupRef}>
        {Array.from({ length: FLOORS }).map((_, i) => {
          const fH = floorHeight(i);
          const yBase = floorY(i);
          const isTopFloor = i === FLOORS - 1;
          const isGround = i === 0;
          const w = isTopFloor ? FLOOR_W * 0.8 : FLOOR_W;
          const d = isTopFloor ? FLOOR_D * 0.8 : FLOOR_D;

          return (
            <group key={i} position={[0, yBase, 0]}>
              {/* Dalle */}
              <mesh material={mats.concrete} position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[w + 0.1, SLAB_T, d + 0.1]} />
              </mesh>

              {/* Corps de l'étage — boîte principale avec façade sombre */}
              <mesh material={mats.glassDark} position={[0, (fH - SLAB_T) / 2 + SLAB_T / 2, 0]} castShadow>
                <boxGeometry args={[w - 0.12, fH - SLAB_T, d - 0.12]} />
              </mesh>

              {/* Façade vitrée avant — une seule plaque */}
              <mesh material={mats.glass} position={[0, (fH - SLAB_T) / 2 + SLAB_T / 2, d / 2 - 0.02]}>
                <boxGeometry args={[w - 0.15, fH - SLAB_T - 0.02, 0.006]} />
              </mesh>
              {/* Façade vitrée arrière */}
              <mesh material={mats.glass} position={[0, (fH - SLAB_T) / 2 + SLAB_T / 2, -d / 2 + 0.02]}>
                <boxGeometry args={[w - 0.15, fH - SLAB_T - 0.02, 0.006]} />
              </mesh>

              {/* Mullions verticaux — avant uniquement */}
              {mullionX.map((mx, mi) => (
                <mesh key={`m-${mi}`} material={mats.gold} position={[mx * (w / FLOOR_W), (fH - SLAB_T) / 2 + SLAB_T / 2, d / 2]} castShadow>
                  <boxGeometry args={[0.02, fH - SLAB_T, 0.015]} />
                </mesh>
              ))}

              {/* Coins — 4 piliers */}
              {[
                [-w / 2, d / 2], [w / 2, d / 2],
                [-w / 2, -d / 2], [w / 2, -d / 2],
              ].map(([cx, cz], ci) => (
                <mesh key={`c-${ci}`} material={mats.navy} position={[cx, (fH - SLAB_T) / 2 + SLAB_T / 2, cz]} castShadow>
                  <boxGeometry args={[0.08, fH - SLAB_T, 0.08]} />
                </mesh>
              ))}

              {/* Porte au RDC */}
              {isGround && (
                <mesh material={mats.gold} position={[-w * 0.2, 0.35, d / 2 + 0.02]}>
                  <boxGeometry args={[0.3, 0.7, 0.03]} />
                </mesh>
              )}

              {/* Linteau doré tous les 2 étages */}
              {i % 2 === 0 && !isGround && (
                <mesh material={mats.gold} position={[0, fH - SLAB_T / 2 - 0.02, d / 2 + 0.02]} castShadow>
                  <boxGeometry args={[w, 0.03, 0.02]} />
                </mesh>
              )}
            </group>
          );
        })}
      </group>

      {/* Toit-terrasse */}
      <mesh material={mats.concrete} position={[0, floorY(FLOORS) + 0.04, 0]} castShadow receiveShadow>
        <boxGeometry args={[FLOOR_W * 0.8 + 0.1, 0.08, FLOOR_D * 0.8 + 0.1]} />
      </mesh>

      {/* Local technique toit */}
      <mesh material={mats.navy} position={[FLOOR_W * 0.15, floorY(FLOORS) + 0.22, 0]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.4]} />
      </mesh>

      {/* Antenne toit */}
      <mesh material={mats.steel} position={[-FLOOR_W * 0.15, floorY(FLOORS) + 0.4, 0]}>
        <cylinderGeometry args={[0.01, 0.015, 0.5, 6]} />
      </mesh>
      <mesh material={mats.goldBright} position={[-FLOOR_W * 0.15, floorY(FLOORS) + 0.68, 0]}>
        <sphereGeometry args={[0.02, 8, 8]} />
      </mesh>
    </group>
  );
}

/* ═══ PARTICULES ═══ */

function GoldDust({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 40;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = Math.random() * 6 - 1;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const p = progressRef.current;
    const mat = pointsRef.current.material as THREE.PointsMaterial;
    mat.opacity = p > 0.05 && p < 0.75 ? 0.4 : 0.1;

    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += 0.005;
      pos[i * 3] += Math.sin(state.clock.elapsedTime + i) * 0.001;
      if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = -1;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color={GOLD_BRIGHT} transparent opacity={0.4} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

/* ═══ ZONES D'EXPERTISE ═══ */

function ExpertiseZones({ progressRef, mats }: { progressRef: React.MutableRefObject<number>; mats: ReturnType<typeof useMaterials> }) {
  const roadRef = useRef<THREE.Mesh>(null);
  const topoRef = useRef<THREE.Group>(null);
  const pipesRef = useRef<THREE.Group>(null);
  const lightsRef = useRef<THREE.Group>(null);

  const topoCurves = useMemo(() => {
    const curves: THREE.Vector3[][] = [];
    for (let level = 0; level < 5; level++) {
      const points: THREE.Vector3[] = [];
      for (let i = 0; i <= 32; i++) {
        const angle = (i / 32) * Math.PI * 2;
        const r = 1.5 + level * 0.3 + Math.sin(angle * 3) * 0.15;
        points.push(new THREE.Vector3(Math.cos(angle) * r, -1.55 + level * 0.02, Math.sin(angle) * r));
      }
      curves.push(points);
    }
    return curves;
  }, []);

  const pipes = useMemo(() => {
    const arr: { pos: [number, number, number]; rot: [number, number, number]; len: number }[] = [];
    for (let i = 0; i < 4; i++) {
      arr.push({ pos: [3 + i * 0.4, -2 + i * 0.1, 1 + i * 0.5], rot: [0, 0, Math.PI / 2], len: 2 + i * 0.3 });
    }
    return arr;
  }, []);

  const poles = useMemo(() => {
    const arr: [number, number][] = [];
    for (let i = 0; i < 5; i++) {
      arr.push([-3 + i * 0.8, 2 + i * 0.3]);
    }
    return arr;
  }, []);

  useFrame((state) => {
    const p = progressRef.current;

    if (roadRef.current) {
      const roadP = THREE.MathUtils.clamp((p - 0.4) / 0.08, 0, 1);
      roadRef.current.scale.x = roadP;
      (roadRef.current.material as THREE.MeshStandardMaterial).opacity = roadP;
      roadRef.current.visible = roadP > 0;
    }

    if (topoRef.current) {
      const topoP = THREE.MathUtils.clamp((p - 0.48) / 0.08, 0, 1);
      topoRef.current.children.forEach((child, i) => {
        const line = child as THREE.Line;
        const mat = line.material as THREE.LineBasicMaterial;
        mat.opacity = THREE.MathUtils.clamp(topoP * 5 - i, 0, 1) * 0.6;
      });
      topoRef.current.visible = topoP > 0;
    }

    if (pipesRef.current) {
      const pipeP = THREE.MathUtils.clamp((p - 0.56) / 0.08, 0, 1);
      pipesRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        mesh.scale.x = THREE.MathUtils.clamp(pipeP * 4 - i, 0, 1);
        (mesh.material as THREE.MeshStandardMaterial).opacity = mesh.scale.x > 0.05 ? 0.7 : 0;
      });
      pipesRef.current.visible = pipeP > 0;
    }

    if (lightsRef.current) {
      const lightP = THREE.MathUtils.clamp((p - 0.64) / 0.08, 0, 1);
      lightsRef.current.children.forEach((child, i) => {
        const group = child as THREE.Group;
        const poleP = THREE.MathUtils.clamp(lightP * 5 - i, 0, 1);
        group.scale.setScalar(poleP);
        const bulb = group.children[1] as THREE.Mesh;
        if (bulb) {
          const bulbMat = bulb.material as THREE.MeshStandardMaterial;
          bulbMat.emissiveIntensity = poleP > 0.5 ? 1.5 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.3 : 0;
        }
      });
      lightsRef.current.visible = lightP > 0;
    }
  });

  return (
    <group>
      {/* Route dorée avec marquage */}
      <mesh ref={roadRef} rotation={[-Math.PI / 2, 0, 0]} position={[3, -1.55, 1.5]} material={mats.gold}>
        <planeGeometry args={[4, 0.4]} />
      </mesh>

      <group ref={topoRef} position={[-3, 0, 2]}>
        {topoCurves.map((curve, i) => (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={curve.length}
                array={new Float32Array(curve.flatMap((v) => [v.x, v.y, v.z]))}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color={GOLD_BRIGHT} transparent opacity={0} />
          </line>
        ))}
      </group>

      <group ref={pipesRef}>
        {pipes.map((pipe, i) => (
          <mesh key={i} material={mats.steel} position={pipe.pos} rotation={pipe.rot}>
            <cylinderGeometry args={[0.08, 0.08, pipe.len, 12]} />
          </mesh>
        ))}
      </group>

      <group ref={lightsRef}>
        {poles.map(([x, z], i) => (
          <group key={i} position={[x, -1.5, z]}>
            <mesh material={mats.steel} position={[0, 0.6, 0]}>
              <cylinderGeometry args={[0.03, 0.04, 1.2, 8]} />
            </mesh>
            {/* Bras de lampadaire */}
            <mesh material={mats.steel} position={[0.1, 1.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
              <cylinderGeometry args={[0.02, 0.02, 0.25, 6]} />
            </mesh>
            <mesh material={mats.goldBright} position={[0.2, 1.28, 0]}>
              <sphereGeometry args={[0.06, 12, 12]} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

/* ═══ CHIFFRES 3D ═══ */

function Stats3D({ progressRef, mats }: { progressRef: React.MutableRefObject<number>; mats: ReturnType<typeof useMaterials> }) {
  const groupRef = useRef<THREE.Group>(null);

  const numbers = useMemo(() => [
    { pos: [-2.5, 1.5, 0] as [number, number, number] },
    { pos: [0, 1.5, 0] as [number, number, number] },
    { pos: [2.5, 1.5, 0] as [number, number, number] },
  ], []);

  useFrame(() => {
    const p = progressRef.current;
    if (groupRef.current) {
      const statsP = THREE.MathUtils.clamp((p - 0.72) / 0.1, 0, 1);
      groupRef.current.visible = statsP > 0;
      groupRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        const itemP = THREE.MathUtils.clamp(statsP * 3 - i, 0, 1);
        mesh.scale.setScalar(itemP * 0.8);
        mesh.position.y = numbers[i].pos[1] + Math.sin(Date.now() * 0.001 + i) * 0.05;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {numbers.map((n, i) => (
        <Float key={i} speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
          <mesh material={mats.goldBright} position={n.pos}>
            <boxGeometry args={[1.2, 0.5, 0.1]} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ═══ PORTAIL ═══ */

function Portal({ progressRef, mats }: { progressRef: React.MutableRefObject<number>; mats: ReturnType<typeof useMaterials> }) {
  const portalRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const p = progressRef.current;
    if (portalRef.current) {
      const portalP = THREE.MathUtils.clamp((p - 0.82) / 0.18, 0, 1);
      portalRef.current.visible = portalP > 0;
      portalRef.current.scale.setScalar(portalP);
      portalRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={portalRef} position={[0, 1.5, 0]}>
      <mesh material={mats.goldBright} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 64]} />
      </mesh>
      <mesh material={mats.gold} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.03, 16, 64]} />
      </mesh>
      <pointLight position={[0, 0, 0]} intensity={5} distance={8} color={GOLD_BRIGHT} />
    </group>
  );
}

/* ═══ SCÈNE ═══ */

function Scene({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  const mats = useMaterials();

  return (
    <>
      <color attach="background" args={[NAVY_DEEP]} />
      <fog attach="fog" args={[NAVY_DEEP, 8, 28]} />

      {/* Éclairage doux et chaleureux */}
      <ambientLight intensity={0.35} color="#8FA8CC" />
      <directionalLight
        position={[6, 10, 4]}
        intensity={1.0}
        color="#FFF4D6"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={25}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />
      <directionalLight position={[-4, 5, -3]} intensity={0.3} color={GOLD} />
      <pointLight position={[0, 3, 5]} intensity={4} distance={16} color={GOLD_BRIGHT} />

      {/* Environment pour reflets — éclairage manuel pour éviter le fetch HDR externe */}
      <ambientLight intensity={0.4} color="#B8C5D6" />

      <CameraRig progressRef={progressRef} />
      <Terrain progressRef={progressRef} mats={mats} />
      <TowerCrane progressRef={progressRef} mats={mats} />
      <ConstructionBuilding progressRef={progressRef} mats={mats} />
      <GoldDust progressRef={progressRef} />
      <ExpertiseZones progressRef={progressRef} mats={mats} />
      <Stats3D progressRef={progressRef} mats={mats} />
      <Portal progressRef={progressRef} mats={mats} />

      {/* Ombres de contact au sol */}
      <ContactShadows position={[0, -1.59, 0]} opacity={0.35} scale={12} blur={3} far={6} color="#000000" />

      <Stars radius={30} depth={15} count={80} factor={3} fade speed={1} />
    </>
  );
}

/* ═══ EXPORT ═══ */

export default function ConstructionScene3D({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ fov: 45, near: 0.1, far: 50, position: [0, 2, 9] }}
      shadows
      className="!absolute inset-0"
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <Scene progressRef={progressRef} />
      </Suspense>
    </Canvas>
  );
}
