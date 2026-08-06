'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FLOORS = 8;
const FLOOR_H = 40;
const FLOOR_W = 200;
const WINDOW_COLS = 4;
const WINDOW_ROWS = FLOORS;

export default function BuildingAnimation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const totalH = FLOORS * FLOOR_H + 60; // +60 pour le toit et la base

  return (
    <div ref={ref} className="relative flex flex-col items-center select-none">
      {/* Grue */}
      <svg
        width="280"
        height="60"
        viewBox="0 0 280 60"
        className="mb-0"
        aria-hidden="true"
      >
        {/* Bras horizontal de la grue */}
        <motion.line
          x1="80" y1="20" x2="260" y2="20"
          stroke="#C9A227" strokeWidth="3" strokeLinecap="round"
          initial={{ scaleX: 0, originX: '80px' }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: '80px 20px' }}
        />
        {/* Mât vertical */}
        <motion.line
          x1="80" y1="20" x2="80" y2="60"
          stroke="#C9A227" strokeWidth="3" strokeLinecap="round"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: '80px 60px' }}
        />
        {/* Câble */}
        <motion.line
          x1="220" y1="20" x2="220" y2="55"
          stroke="#8A8D91" strokeWidth="1.5" strokeDasharray="4 3"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.8 }}
          style={{ transformOrigin: '220px 20px' }}
        />
        {/* Crochet */}
        <motion.circle
          cx="220" cy="56" r="4"
          fill="none" stroke="#8A8D91" strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
        {/* Contrepoids */}
        <motion.rect
          x="82" y="12" width="28" height="14" rx="3"
          fill="#0B1E3D" stroke="#C9A227" strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.4 }}
        />
        <motion.text
          x="96" y="23"
          textAnchor="middle" fill="#C9A227"
          fontSize="7" fontFamily="serif"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          ELB
        </motion.text>
      </svg>

      {/* Bâtiment */}
      <svg
        width={FLOOR_W + 80}
        height={totalH}
        viewBox={`0 0 ${FLOOR_W + 80} ${totalH}`}
        aria-label="Animation de construction d'un immeuble"
        className="drop-shadow-2xl"
      >
        {/* Toit */}
        <motion.polygon
          points={`${40},${30} ${FLOOR_W + 40},${30} ${FLOOR_W + 20},${50} ${60},${50}`}
          fill="#0B2040" stroke="#C9A227" strokeWidth="1.5"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: FLOORS * 0.12 + 0.5 }}
        />

        {/* Étages (bottom-up) */}
        {Array.from({ length: FLOORS }).map((_, floorIndex) => {
          const reversedIndex = FLOORS - 1 - floorIndex;
          const y = 50 + reversedIndex * FLOOR_H;
          const delay = (FLOORS - 1 - reversedIndex) * 0.12 + 0.3;
          return (
            <motion.g
              key={floorIndex}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={inView ? { opacity: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.25, delay }}
              style={{ transformOrigin: `${FLOOR_W / 2 + 40}px ${y + FLOOR_H}px` }}
            >
              {/* Dalle */}
              <rect
                x="40" y={y}
                width={FLOOR_W} height={FLOOR_H}
                fill="#0B1E3D"
                stroke="#1a3a6e"
                strokeWidth="1"
              />
              {/* Ligne de plancher (accent béton) */}
              <line
                x1="40" y1={y}
                x2={FLOOR_W + 40} y2={y}
                stroke="#C9A227" strokeWidth="0.8" strokeOpacity="0.4"
              />
              {/* Fenêtres */}
              {Array.from({ length: WINDOW_COLS }).map((_, col) => {
                const wx = 40 + 12 + col * (FLOOR_W / WINDOW_COLS) + 4;
                const wy = y + 8;
                const ww = FLOOR_W / WINDOW_COLS - 18;
                const wh = FLOOR_H - 18;
                return (
                  <motion.rect
                    key={col}
                    x={wx} y={wy}
                    width={ww} height={wh}
                    rx="1"
                    fill="#0e2d6b"
                    stroke="#C9A227"
                    strokeWidth="0.6"
                    strokeOpacity="0.5"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.2, delay: delay + 0.15 + col * 0.04 }}
                  />
                );
              })}
            </motion.g>
          );
        })}

        {/* Numéro d'étage (indicateur) */}
        {inView && (
          <motion.text
            x={FLOOR_W + 52} y={50 + FLOOR_H * 0.5 + 5}
            fontSize="9" fill="#C9A227" fillOpacity="0.6"
            fontFamily="serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: FLOORS * 0.12 + 0.6 }}
          >
            R+{FLOORS - 1}
          </motion.text>
        )}

        {/* Sol / fondations */}
        <motion.rect
          x="20" y={50 + FLOORS * FLOOR_H}
          width={FLOOR_W + 40} height="8" rx="2"
          fill="#C9A227" fillOpacity="0.7"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ transformOrigin: `${(FLOOR_W + 60) / 2}px ${50 + FLOORS * FLOOR_H + 4}px` }}
        />
      </svg>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: FLOORS * 0.12 + 1 }}
        className="mt-3 text-xs uppercase tracking-[0.25em] text-rust-400/50"
      >
        En construction
      </motion.p>
    </div>
  );
}
