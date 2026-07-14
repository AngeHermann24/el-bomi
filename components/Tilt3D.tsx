'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
  glare?: boolean;
}

export default function Tilt3D({
  children,
  className = '',
  intensity = 15,
  perspective = 1000,
  glare = true,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotateX((0.5 - y) * intensity);
    setRotateY((x - 0.5) * intensity);
    setGlarePos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ perspective: `${perspective}px`, transformStyle: 'preserve-3d' }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}
