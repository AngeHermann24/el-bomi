'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import IconRenderer from '@/components/IconRenderer';
import type { SubsidiaryService } from '@/types';

interface ServiceGridProps {
  services: SubsidiaryService[];
  variant?: 'cards' | 'rows' | 'bento';
}

export default function ServiceGrid({ services, variant = 'cards' }: ServiceGridProps) {
  if (variant === 'rows') {
    return (
      <div className="space-y-4">
        {services.map((service, i) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group grid grid-cols-1 gap-6 rounded-2xl border border-surface-line/10 bg-surface-line/[0.02] p-6 transition-colors duration-300 hover:border-brand-500/40 lg:grid-cols-12 lg:p-8"
          >
            <div className="lg:col-span-4">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-brand-contrast">
                <IconRenderer name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.description}</p>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    <span className="text-sm text-ink-muted">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    );
  }

  if (variant === 'bento') {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {services.map((service, i) => {
          const wide = i === 0 || i === 3;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-surface-line/10 bg-surface-line/[0.02] p-7 transition-all duration-300 hover:border-brand-500/50 ${
                wide ? 'md:col-span-4' : 'md:col-span-2'
              }`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-500/10 text-brand-500">
                  <IconRenderer name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-ink">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-ink-muted">{service.description}</p>
                <ul className="space-y-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink-faint">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <motion.article
          key={service.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
          className="group rounded-2xl border border-surface-line/10 bg-surface-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-lg"
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-brand-contrast">
            <IconRenderer name={service.icon} className="h-6 w-6" />
          </div>
          <h3 className="mb-2 font-heading text-lg font-bold text-ink">{service.title}</h3>
          <p className="mb-5 text-sm leading-relaxed text-ink-muted">{service.description}</p>
          <ul className="space-y-2 border-t border-surface-line/10 pt-5">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />
                <span className="text-sm text-ink-faint">{b}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
