'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface GrowthCurveProps {
  className?: string;
  variant?: 'hero' | 'section';
}

export default function GrowthCurve({ className = '', variant = 'hero' }: GrowthCurveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [drawProgress, setDrawProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const dashOffset = useTransform(scrollYProgress, [0, 0.6], [1200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.3]);

  useEffect(() => {
    const unsub = dashOffset.on('change', (v) => {
      setDrawProgress(1 - v / 1200);
    });
    return () => unsub();
  }, [dashOffset]);

  const isHero = variant === 'hero';
  const height = isHero ? 280 : 160;
  const width = 1200;

  return (
    <div ref={ref} className={`pointer-events-none ${className}`}>
      <motion.svg
        style={{ opacity }}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="growth-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B87333" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#D4B896" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B87333" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="growth-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B87333" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#B87333" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area under curve */}
        <motion.path
          d={`M0 ${height} L0 ${height * 0.75} Q 150 ${height * 0.72} 250 ${height * 0.6} T 500 ${height * 0.45} T 750 ${height * 0.3} T 1000 ${height * 0.15} L ${width} ${height * 0.1} L ${width} ${height} Z`}
          fill="url(#growth-fill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Grid lines — precision feel */}
        {[0.25, 0.5, 0.75].map((p) => (
          <line
            key={p}
            x1="0"
            y1={height * p}
            x2={width}
            y2={height * p}
            stroke="#B87333"
            strokeWidth="0.5"
            strokeOpacity="0.08"
            strokeDasharray="4 8"
          />
        ))}

        {/* Main growth curve */}
        <motion.path
          d={`M0 ${height * 0.75} Q 150 ${height * 0.72} 250 ${height * 0.6} T 500 ${height * 0.45} T 750 ${height * 0.3} T 1000 ${height * 0.15} L ${width} ${height * 0.1}`}
          stroke="url(#growth-gold)"
          strokeWidth={isHero ? 2.5 : 1.5}
          fill="none"
          strokeLinecap="round"
          style={{ strokeDasharray: 1200, strokeDashoffset: dashOffset }}
        />

        {/* Data points at key intervals */}
        {[
          { x: 250, y: height * 0.6 },
          { x: 500, y: height * 0.45 },
          { x: 750, y: height * 0.3 },
          { x: 1000, y: height * 0.15 },
        ].map((pt, i) => (
          <motion.circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={isHero ? 4 : 3}
            fill="#0A1F17"
            stroke="#D4B896"
            strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
          />
        ))}

        {/* Final glowing point */}
        <motion.circle
          cx={width}
          cy={height * 0.1}
          r={isHero ? 6 : 4}
          fill="#D4B896"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.circle
          cx={width}
          cy={height * 0.1}
          r={isHero ? 12 : 8}
          fill="none"
          stroke="#D4B896"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
}
