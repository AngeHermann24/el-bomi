'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/types';
import FloatingParticles from './FloatingParticles';

interface Props {
  project: Project;
}

export default function HomeFeaturedProject({ project }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const contentX = useTransform(scrollYProgress, [0, 0.5, 1], ['-5%', '0%', '5%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.8]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[85vh] min-h-[650px] flex items-center overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Parallax background image */}
      <motion.div
        style={{ scale: imgScale, y: imgY }}
        className="absolute inset-0"
      >
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dynamic overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-r from-anthracite-950 via-anthracite-950/80 to-transparent"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/50 via-transparent to-anthracite-950/30" />

      {/* Particles */}
      <FloatingParticles count={12} />

      {/* 3D Grid floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none" style={{ perspective: '400px' }}>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            transform: 'rotateX(65deg)',
            transformOrigin: 'bottom center',
            backgroundImage: 'linear-gradient(rgba(249,115,22,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.6) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content with 3D motion */}
      <motion.div
        style={{ x: contentX }}
        className="relative z-10 container-max section-padding"
      >
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring', stiffness: 60 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-4 backdrop-blur-sm">
            Projet à la une
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4 max-w-2xl leading-tight" style={{ textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}>
            {project.title}
          </h2>

          <p className="text-xl text-white/60 max-w-xl mb-8">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={`/realisations/${project.slug}`}
              className="group relative inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/30 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Voir ce projet
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-accent-500/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Tous les projets
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Ambient light effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-[20%] w-[300px] h-[300px] bg-accent-600/[0.05] rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
