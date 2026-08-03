'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, type MotionValue } from 'framer-motion';

interface ExtrudedStatProps {
  value: number;
  suffix?: string;
  label: string;
  /** Progression de la scène « chiffres clés » (0 → 1), pilote le compteur. */
  progress: MotionValue<number>;
  index: number;
  animate?: boolean;
}

/**
 * Chiffre clé en relief doré : l'extrusion est obtenue par empilement de
 * text-shadow (aucun coût GPU, contrairement à une géométrie de texte 3D).
 */
export default function ExtrudedStat({
  value,
  suffix = '',
  label,
  progress,
  index,
  animate = true,
}: ExtrudedStatProps) {
  const [display, setDisplay] = useState(animate ? 0 : value);
  const startedAt = useRef(0.08 + index * 0.06);

  useMotionValueEvent(progress, 'change', (latest) => {
    if (!animate) return;
    const local = Math.min(1, Math.max(0, (latest - startedAt.current) / 0.55));
    const eased = 1 - Math.pow(1 - local, 3);
    setDisplay(Math.round(value * eased));
  });

  useEffect(() => {
    if (!animate) setDisplay(value);
  }, [animate, value]);

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 24, rotateX: -18 } : false}
      whileInView={animate ? { opacity: 1, y: 0, rotateX: 0 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="text-center [perspective:800px]"
    >
      <div
        className="font-heading text-5xl font-black tabular-nums leading-none text-gold-300 md:text-6xl lg:text-7xl"
        style={{
          transform: 'rotateX(12deg) rotateY(-8deg)',
          textShadow: [
            '0 1px 0 #C9A227',
            '0 2px 0 #b8942318',
            '0 3px 0 #a8831d',
            '0 4px 0 #9a7a1b',
            '0 5px 0 #8b6e19',
            '0 6px 0 #7c6217',
            '0 7px 0 #6d5615',
            '0 10px 18px rgba(0,0,0,0.45)',
            '0 0 34px rgba(232,199,102,0.25)',
          ].join(', '),
        }}
      >
        {display}
        {suffix}
      </div>
      <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
        {label}
      </div>
    </motion.div>
  );
}
