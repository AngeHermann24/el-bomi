'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import type { Realisation } from '@/types';

interface RealisationGridProps {
  realisations: Realisation[];
  variant?: 'cards' | 'masonry' | 'list';
}

export default function RealisationGrid({ realisations, variant = 'cards' }: RealisationGridProps) {
  if (variant === 'list') {
    return (
      <div className="space-y-6">
        {realisations.map((r, i) => (
          <motion.article
            key={r.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group grid grid-cols-1 gap-6 rounded-2xl border border-surface-line/10 bg-surface-line/[0.02] p-6 transition-all duration-300 hover:border-brand-500/40 lg:grid-cols-12 lg:p-8"
          >
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="mb-3 flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <span key={t} className="brand-chip">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-ink">{r.title}</h3>
              <div className="mb-4 flex flex-wrap gap-4 text-sm text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5" />
                  {r.client}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {r.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {r.year}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">{r.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    );
  }

  if (variant === 'masonry') {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {realisations.map((r, i) => {
          const tall = i % 3 === 0;
          return (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group rounded-2xl border border-surface-line/10 bg-surface-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-lg ${tall ? 'md:row-span-2' : ''}`}
            >
              <div className={`relative ${tall ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {r.tags.slice(0, 2).map((t) => (
                      <span key={t} className="brand-chip !px-2 !py-0.5 !text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink">{r.title}</h3>
                  <p className="mt-1 text-xs text-ink-muted">{r.client} • {r.location}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {realisations.map((r, i) => (
        <motion.article
          key={r.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
          className="group rounded-2xl border border-surface-line/10 bg-surface-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-lg"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={r.image}
              alt={r.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-6">
            <div className="mb-3 flex flex-wrap gap-2">
              {r.tags.slice(0, 2).map((t) => (
                <span key={t} className="brand-chip">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="mb-2 font-heading text-lg font-bold text-ink">{r.title}</h3>
            <div className="mb-3 flex flex-wrap gap-3 text-xs text-ink-muted">
              <span className="flex items-center gap-1">
                <Building2 className="h-3 w-3" />
                {r.client}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {r.location}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ink-muted line-clamp-2">{r.description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
