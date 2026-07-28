'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { StatItem } from '@/types';

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('fr-FR')}
      {suffix}
    </span>
  );
}

interface SubStatsProps {
  stats: StatItem[];
  variant?: 'bar' | 'cards';
}

export default function SubStats({ stats, variant = 'cards' }: SubStatsProps) {
  if (variant === 'bar') {
    return (
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-surface-line/10 bg-surface-line/10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-surface p-6 text-center"
          >
            <div className="mb-1 font-heading text-3xl font-bold text-brand-500 lg:text-4xl">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-xs uppercase tracking-wider text-ink-muted">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="surface-card p-6"
        >
          <div className="mb-2 font-heading text-3xl font-bold text-brand-500 lg:text-4xl">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-sm text-ink-muted">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
