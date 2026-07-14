'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage: string;
  overlay?: boolean;
  compact?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Demander un Devis',
  ctaHref = '/contact',
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
  overlay = true,
  compact = false,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textZ = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const bgBlur = useTransform(scrollYProgress, [0, 0.5], [0, 4]);

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden ${compact ? 'h-[60vh] min-h-[400px] pt-24' : 'h-screen min-h-[700px]'} flex items-center`}
      style={{ perspective: '1200px' }}
    >
      {/* Background with deep parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {overlay && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-anthracite-950/95 via-anthracite-950/60 to-anthracite-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/20 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.4)_100%)]" />
          </>
        )}
      </motion.div>

      {/* Floating particles for depth */}
      <FloatingParticles count={compact ? 10 : 25} />

      {/* 3D Grid lines for immersion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[40%]" style={{ perspective: '500px' }}>
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              transform: 'rotateX(60deg)',
              transformOrigin: 'bottom center',
              backgroundImage: 'linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      </div>

      {/* Decorative 3D floating elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ perspective: '800px' }}>
        <motion.div
          animate={{ rotateY: [0, 360], rotateX: [0, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[15%] right-[10%] w-16 h-16 border border-accent-500/20 rounded-lg"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[60%] right-[20%] w-8 h-8 border border-accent-500/10"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          animate={{ y: [0, -20, 0], rotateY: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[30%] right-[30%] w-3 h-3 bg-accent-500/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[25%] left-[5%] w-20 h-20 border border-white/[0.03] rounded-2xl backdrop-blur-sm"
        />
      </div>

      {/* Content with 3D depth */}
      <motion.div
        style={{ opacity, z: textZ }}
        className="relative z-10 container-max section-padding w-full"
      >
        <div className="max-w-3xl" style={{ transformStyle: 'preserve-3d' }}>
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                {subtitle}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 60, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 80 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[0.9] tracking-tight mb-6"
            style={{ transformStyle: 'preserve-3d', textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
          >
            {title.split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className={`inline-block mr-[0.25em] ${i % 3 === 2 ? 'text-gradient' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30, rotateX: -5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-10"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            {ctaText && (
              <Link
                href={ctaHref}
                className="group relative inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/30 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {ctaText}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            )}

            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-accent-500/30 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 text-accent-400" />
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with 3D bounce */}
      {!compact && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
          >
            <motion.div
              animate={{ height: [6, 12, 6], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 rounded-full bg-accent-500"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
