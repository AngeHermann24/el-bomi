'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CircuitAnimation({ className = '' }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const paths = [
    'M0,60 L80,60 L80,20 L200,20 L200,80 L320,80 L320,40 L440,40',
    'M0,120 L60,120 L60,160 L180,160 L180,100 L300,100 L300,140 L420,140 L420,80 L500,80',
    'M40,0 L40,50 L120,50 L120,110 L240,110 L240,60 L360,60 L360,130 L480,130 L480,70',
    'M500,20 L420,20 L420,70 L300,70 L300,30 L160,30 L160,90 L80,90 L80,140 L0,140',
  ];

  const nodes = [
    { cx: 80, cy: 20 }, { cx: 200, cy: 80 }, { cx: 320, cy: 40 },
    { cx: 60, cy: 160 }, { cx: 180, cy: 100 }, { cx: 300, cy: 140 },
    { cx: 120, cy: 50 }, { cx: 240, cy: 110 }, { cx: 360, cy: 60 },
    { cx: 420, cy: 70 }, { cx: 300, cy: 30 }, { cx: 160, cy: 90 },
  ];

  return (
    <svg
      ref={ref}
      viewBox="0 0 500 180"
      className={`w-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C9A227" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#F2A93B" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0.15" />
        </linearGradient>
        <filter id="glowFilter">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Lignes de fond statiques */}
      {paths.map((d, i) => (
        <path key={`bg-${i}`} d={d} stroke="#C9A227" strokeWidth="0.5" strokeOpacity="0.12" />
      ))}

      {/* Lignes animées au scroll */}
      {paths.map((d, i) => (
        <motion.path
          key={`anim-${i}`}
          d={d}
          stroke="url(#circuitGrad)"
          strokeWidth="1"
          filter="url(#glowFilter)"
          pathLength={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2.2, delay: i * 0.35, ease: 'easeInOut' }}
        />
      ))}

      {/* Courant pulsant (secondary, plus rapide) */}
      {paths.map((d, i) => (
        <motion.path
          key={`pulse-${i}`}
          d={d}
          stroke="#F2A93B"
          strokeWidth="1.5"
          strokeOpacity="0"
          filter="url(#glowFilter)"
          pathLength={1}
          initial={{ pathLength: 0, strokeOpacity: 0 }}
          animate={inView ? { pathLength: [0, 0.3, 0.6, 1], strokeOpacity: [0, 0.8, 0.4, 0] } : {}}
          transition={{ duration: 3, delay: 1.5 + i * 0.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 4 }}
        />
      ))}

      {/* Nœuds de circuit */}
      {nodes.map((n, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={n.cx}
          cy={n.cy}
          r="3"
          fill="#F2A93B"
          filter="url(#nodeGlow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: [0, 1, 0.7] } : {}}
          transition={{ duration: 0.4, delay: 1 + i * 0.15, ease: 'backOut' }}
        />
      ))}

      {/* Points lumineux animés (particules sur le circuit) */}
      {paths.slice(0, 2).map((d, i) => (
        <motion.circle
          key={`particle-${i}`}
          r="2.5"
          fill="#F2A93B"
          filter="url(#nodeGlow)"
          opacity="0"
          animate={inView ? {
            opacity: [0, 1, 1, 0],
            offsetDistance: ['0%', '100%'],
          } : {}}
          style={{ offsetPath: `path("${d}")` } as React.CSSProperties}
          transition={{ duration: 3, delay: 2.5 + i * 1.2, repeat: Infinity, repeatDelay: 3, ease: 'linear' }}
        />
      ))}
    </svg>
  );
}
