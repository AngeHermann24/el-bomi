'use client';

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, PerformanceMonitor } from '@react-three/drei';
import type { MotionValue } from 'framer-motion';
import { PALETTE } from '@/lib/homeJourney';
import CameraRig from './CameraRig';
import FilialeTeasers from './FilialeTeasers';
import GoldParticles from './GoldParticles';
import GoldRibbon3D from './GoldRibbon3D';
import PortalGate from './PortalGate';
import Skyline from './Skyline';

interface Experience3DProps {
  progress: MotionValue<number>;
  onLoad?: () => void;
}

/**
 * Scène React Three Fiber complète. Chargée à la demande (lazy) : three.js
 * n'entre jamais dans le bundle initial de la page.
 */
export default function Experience3D({ progress, onLoad }: Experience3DProps) {
  // dpr adaptatif : on démarre raisonnable puis on ajuste selon le framerate réel
  const [dpr, setDpr] = useState(1.4);

  return (
    <Canvas
      dpr={dpr}
      frameloop="always"
      gl={{
        antialias: true,
        powerPreference: 'high-performance',
        alpha: false,
      }}
      camera={{ fov: 52, near: 0.1, far: 120, position: [0, 1.4, 19] }}
      className="!absolute inset-0"
      onCreated={() => onLoad?.()}
    >
      <color attach="background" args={[PALETTE.navyDeep]} />
      <fog attach="fog" args={[PALETTE.navyDeep, 10, 62]} />

      {/* Éclairage minimal mais suffisant pour un rendu métallique crédible */}
      <ambientLight intensity={0.55} color="#8FA8CC" />
      <directionalLight position={[6, 12, 8]} intensity={1.5} color="#FFF4D6" />
      <directionalLight position={[-8, 5, -6]} intensity={0.6} color="#C9A227" />
      <pointLight position={[0, 3, 4]} intensity={18} distance={22} color="#E8C766" />

      <Skyline />
      <GoldRibbon3D />
      <FilialeTeasers />
      <GoldParticles />
      <PortalGate />

      <CameraRig progress={progress} />

      <PerformanceMonitor
        onDecline={() => setDpr(1)}
        onIncline={() => setDpr((current) => Math.min(1.75, current + 0.15))}
      />
      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
