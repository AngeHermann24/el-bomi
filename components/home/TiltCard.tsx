'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import IconRenderer from '@/components/IconRenderer';
import type { Subsidiary } from '@/types';

interface TiltCardProps {
  subsidiary: Subsidiary;
  index: number;
  animate?: boolean;
}

/**
 * Carte filiale avec effet de tilt/parallax au survol : la carte suit
 * légèrement le curseur, effet de profondeur façon carte qui se soulève.
 */
export default function TiltCard({ subsidiary, index, animate = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 18,
  });

  const iconTranslateZ = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 20,
  });
  const arrowTranslateZ = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 40, rotateX: -15, scale: 0.85 } : false}
      whileInView={animate ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : undefined}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1000 }}
    >
      <Link href={`/filiales/${subsidiary.slug}`} className="block">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="group relative h-full overflow-hidden rounded-2xl border border-gold-500/15 bg-gradient-to-br from-navy-900 to-navy-950 p-7 transition-colors duration-300 hover:border-gold-500/50"
        >
          {/* Reflet diagonal qui traverse au reveal */}
          {animate && (
            <motion.div
              initial={{ x: '-150%', rotate: 25 }}
              whileInView={{ x: '250%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.09 + 0.3, ease: 'easeInOut' }}
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent"
            />
          )}

          {/* Lueur dorée au survol */}
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(201,162,39,0.08), transparent 70%)',
            }}
          />

          {/* Bordure lumineuse supérieure */}
          <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

          {/* Icône en relief */}
          <motion.div
            style={{ z: iconTranslateZ, transformStyle: 'preserve-3d' }}
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 transition-colors duration-300 group-hover:border-gold-500/60 group-hover:bg-gold-500/20"
          >
            <IconRenderer name={subsidiary.icon} className="h-7 w-7 text-gold-400" />
          </motion.div>

          <h3 className="mb-2 font-heading text-lg font-bold uppercase tracking-wide text-white">
            {subsidiary.shortName}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-white/45">
            {subsidiary.tagline}
          </p>

          <motion.div
            style={{ z: arrowTranslateZ, transformStyle: 'preserve-3d' }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400/70 transition-colors group-hover:text-gold-300"
          >
            Découvrir
            <ArrowRight
              className={`h-3.5 w-3.5 transition-transform duration-300 ${
                hovered ? 'translate-x-1' : ''
              }`}
            />
          </motion.div>

          {/* Numéro de filiale en filigrane */}
          <span
            className="pointer-events-none absolute right-4 top-3 font-heading text-5xl font-black text-white/[0.04]"
            style={{ transform: 'translateZ(0)' }}
          >
            0{index + 1}
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
