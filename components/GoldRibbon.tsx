'use client';

import { motion } from 'framer-motion';

interface GoldRibbonProps {
  className?: string;
  variant?: 'wave' | 'arc' | 'divider';
  opacity?: number;
}

const paths: Record<string, string> = {
  wave: 'M0,120 C240,40 480,200 720,120 C960,40 1200,200 1440,120',
  arc: 'M0,180 C360,20 1080,20 1440,180',
  divider: 'M0,60 C300,110 500,10 720,60 C940,110 1140,10 1440,60',
};

export default function GoldRibbon({
  className = '',
  variant = 'wave',
  opacity = 0.5,
}: GoldRibbonProps) {
  return (
    <svg
      className={`pointer-events-none absolute inset-x-0 w-full ${className}`}
      viewBox="0 0 1440 240"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`ribbon-${variant}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9A227" stopOpacity="0" />
          <stop offset="35%" stopColor="#E8C766" stopOpacity="1" />
          <stop offset="65%" stopColor="#C9A227" stopOpacity="1" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.path
        d={paths[variant]}
        stroke={`url(#ribbon-${variant})`}
        strokeWidth="2"
        strokeLinecap="round"
        style={{ opacity }}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      <motion.path
        d={paths[variant]}
        stroke={`url(#ribbon-${variant})`}
        strokeWidth="6"
        strokeLinecap="round"
        style={{ opacity: opacity * 0.25 }}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 0.1 }}
      />
    </svg>
  );
}
