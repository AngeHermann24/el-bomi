'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* ── Ports / villes sur la carte stylisée Afrique (viewBox 0 0 800 700) ── */
const NODES = [
  { id: 'abidjan',  x: 195, y: 320, label: 'Abidjan' },
  { id: 'dakar',    x: 110, y: 230, label: 'Dakar' },
  { id: 'lagos',    x: 280, y: 330, label: 'Lagos' },
  { id: 'accra',    x: 240, y: 335, label: 'Accra' },
  { id: 'bamako',   x: 175, y: 250, label: 'Bamako' },
  { id: 'douala',   x: 320, y: 365, label: 'Douala' },
  { id: 'nairobi',  x: 480, y: 360, label: 'Nairobi' },
  { id: 'johannesburg', x: 430, y: 530, label: 'Johannesburg' },
  { id: 'marseille', x: 340, y: 85,  label: 'Marseille' },
  { id: 'shanghai', x: 680, y: 165, label: 'Shanghai' },
  { id: 'dubai',    x: 590, y: 230, label: 'Dubaï' },
  { id: 'montreal', x: 90,  y: 105, label: 'Montréal' },
];

const ROUTES = [
  { from: 'abidjan', to: 'dakar',       mode: 'truck' as const, delay: 0 },
  { from: 'abidjan', to: 'lagos',       mode: 'truck' as const, delay: 1.2 },
  { from: 'abidjan', to: 'accra',       mode: 'truck' as const, delay: 0.6 },
  { from: 'abidjan', to: 'bamako',      mode: 'truck' as const, delay: 1.8 },
  { from: 'abidjan', to: 'douala',      mode: 'ship' as const,  delay: 2.4 },
  { from: 'abidjan', to: 'marseille',   mode: 'ship' as const,  delay: 0.3 },
  { from: 'abidjan', to: 'nairobi',     mode: 'plane' as const, delay: 1.0 },
  { from: 'abidjan', to: 'johannesburg',mode: 'plane' as const, delay: 2.0 },
  { from: 'abidjan', to: 'dubai',       mode: 'plane' as const, delay: 0.8 },
  { from: 'abidjan', to: 'shanghai',    mode: 'ship' as const,  delay: 1.5 },
  { from: 'marseille','to': 'montreal', mode: 'ship' as const,  delay: 3.0 },
];

const ICON_SVG: Record<string, string> = {
  truck: 'M2 10h2V7L7 4h9v6h2l2 2v2h-2a2 2 0 01-4 0H9a2 2 0 01-4 0H3zm0 0v2',
  ship:  'M3 17l9-9 9 9M5 15v4h14v-4',
  plane: 'M21 16v-2l-8-5V3.5A1.5 1.5 0 0011.5 2h-1A1.5 1.5 0 009 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L12 19v-5.5z',
};

function getNodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

function buildPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = Math.min(from.y, to.y) - 60;
  return `M${from.x},${from.y} Q${mx},${my} ${to.x},${to.y}`;
}

/* Returns (x,y) at parameter t along a quadratic bezier */
function quadBezier(
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  t: number
) {
  const x = (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t ** 2 * p2.x;
  const y = (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t ** 2 * p2.y;
  return { x, y };
}

interface IconAnim {
  routeIdx: number;
  t: number;
}

export default function MapRoutes({ className = '' }: { className?: string }) {
  const [icons, setIcons] = useState<IconAnim[]>(
    ROUTES.map((_, i) => ({ routeIdx: i, t: 0 }))
  );
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const SPEED = 0.00018; // t units per ms

    function tick(now: number) {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      setIcons(ROUTES.map((r, i) => {
        const offset = r.delay * 3000;
        const raw = ((elapsed + offset) * SPEED) % 1;
        return { routeIdx: i, t: raw };
      }));
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <svg
      viewBox="0 0 800 700"
      className={`w-full h-full ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="glow-orange" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glow-node" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="ocean-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#D6E8F0" />
          <stop offset="100%" stop-color="#C5DCE8" />
        </linearGradient>
        <linearGradient id="land-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#E8E4D8" />
          <stop offset="100%" stop-color="#D8D2C4" />
        </linearGradient>
      </defs>

      {/* Ocean background */}
      <rect width="800" height="700" fill="url(#ocean-grad)" />
      {/* Subtle ocean grid */}
      <g opacity="0.06">
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} stroke="#0D7377" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 21 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="700" stroke="#0D7377" strokeWidth="0.5" />
        ))}
      </g>

      {/* ── Silhouette Afrique low-poly stylisée ── */}
      <path
        d="M 200 60 L 260 55 L 310 70 L 360 60 L 410 80 L 450 75 L 480 90
           L 500 120 L 510 155 L 500 190 L 490 220 L 500 250 L 510 280
           L 505 310 L 490 340 L 480 370 L 470 400 L 460 430 L 450 460
           L 440 490 L 430 520 L 410 550 L 390 570 L 370 580 L 350 570
           L 330 550 L 310 530 L 290 510 L 270 490 L 250 465 L 240 440
           L 225 415 L 210 390 L 195 365 L 185 340 L 175 310 L 165 280
           L 160 250 L 155 215 L 148 185 L 140 155 L 145 125 L 155 100
           L 170 80 Z"
        fill="url(#land-grad)"
        stroke="rgba(11,30,61,0.15)"
        strokeWidth="1.5"
      />

      {/* ── Routes animées ── */}
      {ROUTES.map((r, i) => {
        const from = getNodeById(r.from);
        const toNode = getNodeById(r.to);
        const d = buildPath(from, toNode);
        return (
          <g key={i}>
            {/* Chemin de fond (dim) */}
            <path d={d} fill="none" stroke="rgba(11,30,61,0.1)" strokeWidth="1.5" />
            {/* Chemin animé */}
            <motion.path
              d={d}
              fill="none"
              stroke={r.mode === 'ship' ? '#0D7377' : r.mode === 'plane' ? '#E85D04' : '#F77F00'}
              strokeWidth="1.8"
              strokeDasharray="6 4"
              filter="url(#glow-orange)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, delay: r.delay * 0.4, ease: 'easeOut' }}
            />
          </g>
        );
      })}

      {/* ── Icônes mobiles sur les routes ── */}
      {icons.map(({ routeIdx, t }) => {
        const r = ROUTES[routeIdx];
        const from = getNodeById(r.from);
        const toNode = getNodeById(r.to);
        const mx = (from.x + toNode.x) / 2;
        const my = Math.min(from.y, toNode.y) - 60;
        const ctrl = { x: mx, y: my };
        const pos = quadBezier(from, ctrl, toNode, t);
        return (
          <g key={routeIdx} transform={`translate(${pos.x - 9},${pos.y - 9})`} opacity="0.9">
            <rect width="18" height="18" rx="4"
              fill="white" stroke={r.mode === 'ship' ? '#0D7377' : '#E85D04'} strokeWidth="1.2"
              filter="url(#glow-orange)"
            />
            <svg viewBox="0 0 24 24" width="11" height="11" x="3.5" y="3.5"
              fill="none" stroke={r.mode === 'ship' ? '#0D7377' : '#E85D04'} strokeWidth="2" strokeLinecap="round"
            >
              <path d={ICON_SVG[r.mode]} />
            </svg>
          </g>
        );
      })}

      {/* ── Nœuds villes ── */}
      {NODES.map((n) => (
        <g key={n.id}>
          {/* Halo */}
          <circle cx={n.x} cy={n.y} r="10" fill="rgba(232,93,4,0.08)" filter="url(#glow-node)" />
          {/* Cercle extérieur */}
          <motion.circle cx={n.x} cy={n.y} r="6"
            fill="white" stroke={n.id === 'abidjan' ? '#E85D04' : 'rgba(11,30,61,0.3)'} strokeWidth="1.2"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          {/* Point central */}
          <motion.circle cx={n.x} cy={n.y} r="3"
            fill={n.id === 'abidjan' ? '#E85D04' : '#0D7377'}
            filter="url(#glow-node)"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.6 }}
          />
          {/* Label */}
          {n.id === 'abidjan' && (
            <motion.text
              x={n.x + 8} y={n.y - 6}
              fontSize="9" fill="#E85D04"
              fontFamily="sans-serif" fontWeight="700"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              {n.label}
            </motion.text>
          )}
          {n.id !== 'abidjan' && (
            <motion.text
              x={n.x + 6} y={n.y - 4}
              fontSize="7" fill="rgba(11,30,61,0.55)"
              fontFamily="sans-serif" fontWeight="500"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              {n.label}
            </motion.text>
          )}
        </g>
      ))}

      {/* Légende modes */}
      {[
        { mode: 'truck', label: 'Route', x: 620, y: 600 },
        { mode: 'ship',  label: 'Maritime', x: 670, y: 615 },
        { mode: 'plane', label: 'Aérien', x: 725, y: 630 },
      ].map((l) => (
        <g key={l.mode}>
          <rect x={l.x - 2} y={l.y - 9} width="14" height="14" rx="3"
            fill="white" stroke={l.mode === 'ship' ? '#0D7377' : '#E85D04'} strokeWidth="1"
          />
          <svg viewBox="0 0 24 24" width="9" height="9" x={l.x} y={l.y - 7}
            fill="none" stroke={l.mode === 'ship' ? '#0D7377' : '#E85D04'} strokeWidth="2.5" strokeLinecap="round"
          >
            <path d={ICON_SVG[l.mode]} />
          </svg>
          <text x={l.x + 15} y={l.y + 1} fontSize="7" fill="rgba(11,30,61,0.5)" fontFamily="sans-serif" fontWeight="500">
            {l.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
