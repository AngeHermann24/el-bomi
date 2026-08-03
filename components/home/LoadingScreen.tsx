'use client';

import { motion } from 'framer-motion';

/** Écran de chargement de la scène 3D, aux couleurs du groupe. */
export default function LoadingScreen() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-950">
      <div className="noise-bg pointer-events-none absolute inset-0 opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Ruban doré qui se trace en boucle */}
        <svg viewBox="0 0 160 60" className="h-14 w-40" aria-hidden="true">
          <defs>
            <linearGradient id="loader-gold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C9A227" />
              <stop offset="50%" stopColor="#E8C766" />
              <stop offset="100%" stopColor="#C9A227" />
            </linearGradient>
          </defs>
          <motion.path
            d="M4 46 C 34 46, 40 14, 66 14 S 100 46, 126 46 S 152 22, 156 18"
            fill="none"
            stroke="url(#loader-gold)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.4 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
        </svg>

        <p className="mt-6 font-heading text-sm uppercase tracking-[0.35em] text-gold-400/80">
          EL-BOMI HOLDING
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-white/25">
          Préparation de l&apos;expérience
        </p>
      </motion.div>
    </div>
  );
}
