'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  label?: string;
  image: string;
  backHref?: string;
  backLabel?: string;
}

export default function PageHeader({
  title,
  label,
  image,
  backHref,
  backLabel,
}: PageHeaderProps) {
  return (
    <section className="relative flex h-[45vh] min-h-[320px] items-end overflow-hidden">
      {/* Background */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-900/40" />

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pb-12">
        {backHref && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-gold-300"
            >
              <ArrowLeft className="h-4 w-4" />
              {backLabel ?? 'Retour'}
            </Link>
          </motion.div>
        )}
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400"
          >
            {label}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl font-black uppercase leading-tight text-white md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
