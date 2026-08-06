'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ConstructionLoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return p + Math.random() * 12 + 4;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-anthracite-950"
        >
          {/* Grille de chantier en filigrane */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Icône grue animée SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              {/* Mât */}
              <motion.rect
                x="38" y="10" width="4" height="55"
                fill="#C9A227"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: '40px 65px' }}
              />
              {/* Bras */}
              <motion.rect
                x="40" y="10" width="30" height="3"
                fill="#E8C766"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                style={{ transformOrigin: '40px 11px' }}
              />
              {/* Contrepoids */}
              <rect x="28" y="8" width="12" height="6" rx="1" fill="#0B1E3D" stroke="#C9A227" strokeWidth="1" />
              {/* Câble */}
              <motion.line
                x1="62" y1="13" x2="62" y2="40"
                stroke="#8A8D91" strokeWidth="1" strokeDasharray="3 2"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                style={{ transformOrigin: '62px 13px' }}
              />
              {/* Charge */}
              <motion.rect
                x="57" y="40" width="10" height="8"
                fill="#0B1E3D" stroke="#C9A227" strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              />
              {/* Base */}
              <rect x="30" y="65" width="20" height="4" rx="1" fill="#C9A227" fillOpacity="0.6" />
            </svg>
          </motion.div>

          {/* Titre */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-rust-400"
          >
            EL-BOMI Construction
          </motion.h2>

          {/* Barre de progression */}
          <div className="mt-6 h-0.5 w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-rust-600 to-safety-400"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          {/* Pourcentage */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-[11px] font-medium tabular-nums tracking-wider text-white/40"
          >
            {Math.min(Math.floor(progress), 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
