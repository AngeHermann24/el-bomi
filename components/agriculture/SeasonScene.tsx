'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SeasonScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const season = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 3]);
  const skyColor = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ['#A8D8B9', '#7EC8A0', '#F5D76E', '#E8B517']);
  const fieldColor = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ['#8B6F47', '#5BAE6B', '#D4A017', '#8B6F47']);
  const plantHeight = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 30, 60, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  /* Transforms partagés par toutes les plantes — définis une seule fois au niveau
     supérieur du composant pour respecter les règles des Hooks React (pas de hook
     dans une boucle/callback). */
  const plantLineY = useTransform(plantHeight, (v) => -v);
  const plantCircleR = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [2, 6, 8, 5]);
  const plantCircleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6]);
  const plantCircleCy = useTransform(plantHeight, (v) => 280 - v);
  const leafOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.3, 0.4, 0.2]);

  return (
    <div ref={ref} className="relative h-[400px] w-full overflow-hidden rounded-2xl">
      <motion.svg viewBox="0 0 800 400" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        {/* Ciel */}
        <motion.rect x="0" y="0" width="800" height="250" fill={skyColor} opacity={0.3} />

        {/* Soleil */}
        <motion.circle cx="650" cy="80" r="40" fill="#F5D76E" opacity={0.5} />
        <motion.circle cx="650" cy="80" r="55" fill="#F5D76E" opacity={0.15} />

        {/* Collines ondulantes */}
        <motion.path d="M0 250 Q 200 200 400 240 T 800 230 L 800 400 L 0 400 Z" fill={fieldColor} opacity={0.5} />
        <motion.path d="M0 280 Q 200 240 400 270 T 800 260 L 800 400 L 0 400 Z" fill={fieldColor} opacity={0.7} />

        {/* Chemin de terre sinueux */}
        <motion.path d="M0 350 Q 150 320 300 340 T 600 330 T 800 340" stroke="#8B6F47" strokeWidth="3" fill="none" opacity={0.35} strokeDasharray="8 6" />

        {/* Plantes qui poussent */}
        {[100, 200, 300, 400, 500, 600, 700].map((x, i) => (
          <motion.g key={x}>
            <motion.line
              x1={x} x2={x}
              y1={280} y2={280}
              stroke="#5BAE6B"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ y: plantLineY }}
            />
            <motion.circle
              cx={x}
              cy={280}
              r={plantCircleR}
              fill="#5BAE6B"
              opacity={plantCircleOpacity}
              style={{ cy: plantCircleCy }}
            />
          </motion.g>
        ))}

        {/* Feuille décorative */}
        <motion.path
          d="M400 150 Q 420 130 440 150 Q 420 170 400 150"
          fill="#2D7A3E"
          opacity={leafOpacity}
        />
      </motion.svg>

      <motion.div style={{ opacity }} className="absolute inset-0 flex items-end justify-center pb-8">
        <div className="text-center">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-[#2D7A3E]">La terre qui vit</p>
        </div>
      </motion.div>
    </div>
  );
}
