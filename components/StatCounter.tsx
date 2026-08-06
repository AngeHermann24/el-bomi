'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { StatItem } from '@/types';

interface StatCounterProps {
  stats: StatItem[];
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
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
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatCounter({ stats }: StatCounterProps) {
  return (
    <section className="relative py-12 sm:py-20 lg:py-28 overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

      {/* Ambient 3D orbs */}
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-[10%] w-32 h-32 bg-gold-500/[0.06] rounded-full blur-[60px]"
      />
      <motion.div
        animate={{ y: [0, 10, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 right-[15%] w-24 h-24 bg-gold-400/[0.06] rounded-full blur-[50px]"
      />

      <div className="relative container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.05, rotateY: 5, z: 20 }}
              className="relative text-center group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gold-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <div className="relative p-6" style={{ transform: 'translateZ(10px)' }}>
                <div className="text-gradient mb-2 font-heading text-4xl font-black sm:text-5xl lg:text-6xl">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm sm:text-base text-white/40 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
                {/* Accent line with glow */}
                <div className="mt-4 mx-auto w-8 h-0.5 bg-gold-500/30 group-hover:w-16 group-hover:bg-gold-500 group-hover:shadow-lg group-hover:shadow-gold-500/50 transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
