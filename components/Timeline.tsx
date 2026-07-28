'use client';

import { motion } from 'framer-motion';
import type { TimelineEntry } from '@/types';

interface TimelineProps {
  entries: TimelineEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-[62px] hidden h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent lg:block" />

      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible">
        {entries.map((entry, index) => (
          <motion.div
            key={entry.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group w-[260px] shrink-0 snap-start lg:w-auto"
          >
            <div className="mb-4 font-heading text-2xl font-black text-gold-400">
              {entry.year}
            </div>

            <div className="relative mb-6 flex h-6 items-center">
              <span className="h-3 w-3 rounded-full bg-gold-500 shadow-[0_0_0_5px_rgba(201,162,39,0.15)] transition-all duration-300 group-hover:shadow-[0_0_0_8px_rgba(201,162,39,0.25)]" />
            </div>

            <h3 className="mb-2 font-heading text-base font-bold text-white">
              {entry.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/50">{entry.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
