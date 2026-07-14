'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  label?: string;
  image: string;
}

export default function PageHeader({ title, label, image }: PageHeaderProps) {
  return (
    <section className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
      {/* Background */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/70 to-anthracite-950/30" />

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pb-12">
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-accent-400 text-sm font-semibold uppercase tracking-wider mb-3"
          >
            {label}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
