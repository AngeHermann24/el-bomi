'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView, motion } from 'framer-motion';

interface PremiumCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
  className?: string;
}

export default function PremiumCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  decimals = 0,
  className = '',
}: PremiumCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  const formatted = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(display);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center text-center ${className}`}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#B87333]/20 bg-[#B87333]/[0.03]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D4B896]" />
      </div>
      <div className="font-heading text-3xl font-bold tracking-tight text-[#D4B896] lg:text-4xl">
        {prefix}{formatted}<span className="text-[#B87333]">{suffix}</span>
      </div>
      <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/40">{label}</div>
    </motion.div>
  );
}
