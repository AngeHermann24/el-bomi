'use client';

import { motion } from 'framer-motion';
import type { ProcessStep } from '@/types';

interface ProcessTimelineProps {
  process: ProcessStep[];
  variant?: 'horizontal' | 'vertical' | 'cards';
}

export default function ProcessTimeline({ process, variant = 'horizontal' }: ProcessTimelineProps) {
  if (variant === 'vertical') {
    return (
      <div className="relative">
        <div className="absolute left-5 top-0 h-full w-px bg-brand-500/20" />
        <div className="space-y-8">
          {process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12"
            >
              <span className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-500 bg-surface text-sm font-bold text-brand-500">
                {step.step}
              </span>
              <h3 className="mb-2 font-heading text-lg font-bold text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'cards') {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {process.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative rounded-2xl border border-surface-line/10 bg-surface-card p-6 text-center"
          >
            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-500 bg-brand-500/10 text-lg font-bold text-brand-500">
              {step.step}
            </span>
            <h3 className="mb-2 font-heading text-base font-bold text-ink">{step.title}</h3>
            <p className="text-xs leading-relaxed text-ink-muted">{step.description}</p>
            {i < process.length - 1 && (
              <div className="absolute right-0 top-1/2 hidden h-px w-8 bg-brand-500/20 lg:block" />
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative overflow-x-auto pb-4">
      <div className="flex min-w-max gap-8">
        {process.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative w-64 flex-shrink-0"
          >
            <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-500 bg-brand-500/10 text-xl font-bold text-brand-500">
              {step.step}
            </span>
            <h3 className="mb-2 font-heading text-lg font-bold text-ink">{step.title}</h3>
            <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
            {i < process.length - 1 && (
              <div className="absolute right-0 top-7 h-px w-8 bg-brand-500/20" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
