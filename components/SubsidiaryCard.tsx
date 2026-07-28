'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import IconRenderer from './IconRenderer';
import type { Subsidiary } from '@/types';

interface SubsidiaryCardProps {
  subsidiary: Subsidiary;
  index?: number;
}

export default function SubsidiaryCard({ subsidiary, index = 0 }: SubsidiaryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/filiales/${subsidiary.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/60 hover:shadow-2xl hover:shadow-navy-900/15"
      >
        <div className="relative h-44 overflow-hidden">
          <Image
            src={subsidiary.image}
            alt={subsidiary.shortName}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/45 to-transparent" />

          <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/40 bg-navy-900/70 backdrop-blur-md transition-colors duration-300 group-hover:border-gold-500 group-hover:bg-gold-500">
            <IconRenderer
              name={subsidiary.icon}
              className="h-6 w-6 text-gold-300 transition-colors duration-300 group-hover:text-navy-900"
            />
          </div>

          <span className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            {subsidiary.tagline}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-3 font-heading text-xl font-bold leading-snug text-navy-900 transition-colors duration-300 group-hover:text-gold-600">
            {subsidiary.shortName}
          </h3>
          <p className="mb-6 flex-1 text-sm leading-relaxed text-navy-900/60">
            {subsidiary.summary}
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors duration-300 group-hover:text-gold-600">
            Découvrir la filiale
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>

        <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100" />
      </Link>
    </motion.div>
  );
}
