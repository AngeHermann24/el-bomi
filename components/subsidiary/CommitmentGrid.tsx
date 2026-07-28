'use client';

import { motion } from 'framer-motion';
import IconRenderer from '@/components/IconRenderer';
import type { Commitment } from '@/types';

interface CommitmentGridProps {
  commitments: Commitment[];
  variant?: 'cards' | 'compact' | 'inline';
}

export default function CommitmentGrid({ commitments, variant = 'cards' }: CommitmentGridProps) {
  if (variant === 'inline') {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {commitments.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-start gap-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
              <IconRenderer name={c.icon} className="h-5 w-5" />
            </span>
            <div>
              <h3 className="mb-1 font-heading text-sm font-bold text-ink">{c.title}</h3>
              <p className="text-xs leading-relaxed text-ink-muted">{c.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-surface-line/10 bg-surface-line/10 md:grid-cols-3">
        {commitments.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-surface p-6 text-center"
          >
            <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
              <IconRenderer name={c.icon} className="h-5 w-5" />
            </span>
            <h3 className="mb-2 font-heading text-sm font-bold text-ink">{c.title}</h3>
            <p className="text-xs leading-relaxed text-ink-muted">{c.description}</p>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {commitments.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="surface-card p-7 text-center transition-all duration-300 hover:border-brand-500/50"
        >
          <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-brand-500 transition-colors duration-300 hover:bg-brand-500 hover:text-brand-contrast">
            <IconRenderer name={c.icon} className="h-6 w-6" />
          </span>
          <h3 className="mb-3 font-heading text-lg font-bold text-ink">{c.title}</h3>
          <p className="text-sm leading-relaxed text-ink-muted">{c.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
