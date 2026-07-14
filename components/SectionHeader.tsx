'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}
      style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-4 backdrop-blur-sm"
        >
          {badge}
        </motion.span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white leading-tight">
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-lg text-white/50 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
