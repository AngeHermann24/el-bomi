'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SeasonScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const season = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 3]);
  const skyColor = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ['#E8C766', '#C9A227', '#E8C766', '#C9A227']);
  const fieldColor = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ['#8B6F47', '#7BA05B', '#D4A017', '#8B6F47']);
  const plantHeight = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 30, 60, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative h-[400px] w-full overflow-hidden rounded-2xl">
      <motion.svg viewBox="0 0 800 400" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        {/* Ciel */}
        <motion.rect x="0" y="0" width="800" height="250" fill={skyColor} opacity={0.3} />

        {/* Soleil */}
        <motion.circle cx="650" cy="80" r="40" fill="#E8C766" opacity={0.4} />

        {/* Collines ondulantes */}
        <motion.path d="M0 250 Q 200 200 400 240 T 800 230 L 800 400 L 0 400 Z" fill={fieldColor} opacity={0.6} />
        <motion.path d="M0 280 Q 200 240 400 270 T 800 260 L 800 400 L 0 400 Z" fill={fieldColor} opacity={0.8} />

        {/* Chemin de terre sinueux */}
        <motion.path d="M0 350 Q 150 320 300 340 T 600 330 T 800 340" stroke="#C9A227" strokeWidth="3" fill="none" opacity={0.4} strokeDasharray="8 6" />

        {/* Plantes qui poussent */}
        {[100, 200, 300, 400, 500, 600, 700].map((x, i) => (
          <motion.g key={x}>
            <motion.line
              x1={x} x2={x}
              y1={280} y2={280}
              stroke="#7BA05B"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ y: useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, -plantHeight.get(), -40, -10]) }}
            />
            <motion.circle
              cx={x}
              cy={280}
              r={useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [2, 6, 8, 5])}
              fill="#7BA05B"
              opacity={useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6])}
              style={{ cy: useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [280, 280 - 30, 280 - 60, 280 - 80]) }}
            />
          </motion.g>
        ))}

        {/* Feuille décorative */}
        <motion.path
          d="M400 150 Q 420 130 440 150 Q 420 170 400 150"
          fill="#C9A227"
          opacity={useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.3, 0.4, 0.2])}
        />
      </motion.svg>

      <motion.div style={{ opacity }} className="absolute inset-0 flex items-end justify-center pb-8">
        <div className="text-center">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-[#C9A227]">La terre qui vit</p>
        </div>
      </motion.div>
    </div>
  );
}
