'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Building2, Landmark, Hammer, PaintBucket, Wrench, Leaf } from 'lucide-react';
import { Service } from '@/types';
import Tilt3D from './Tilt3D';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Landmark,
  Hammer,
  PaintBucket,
  Wrench,
  Leaf,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
    <Tilt3D intensity={8} className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-accent-500/30 transition-all duration-500 hover-lift">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/60 to-transparent" />

        {/* Icon badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-accent-500/10 backdrop-blur-md border border-accent-500/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent-400" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-accent-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {service.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/5"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/services#${service.id}`}
          className="inline-flex items-center gap-2 text-accent-400 text-sm font-semibold group/link"
        >
          En savoir plus
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent-500/5 via-transparent to-transparent" />
    </Tilt3D>
    </motion.div>
  );
}
