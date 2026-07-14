'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface ScrollReveal3DProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}

export default function ScrollReveal3D({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: ScrollReveal3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionConfig = {
    up: { y: 80, x: 0, rotateX: 8, rotateY: 0 },
    left: { y: 0, x: -80, rotateX: 0, rotateY: -8 },
    right: { y: 0, x: 80, rotateX: 0, rotateY: 8 },
  };

  const config = directionConfig[direction];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: config.y,
        x: config.x,
        rotateX: config.rotateX,
        rotateY: config.rotateY,
        scale: 0.95,
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        x: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
      } : undefined}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
