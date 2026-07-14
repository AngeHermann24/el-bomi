'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

export default function HomeCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden" style={{ perspective: '1500px' }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/[0.03] rounded-full blur-[200px]" />
      </div>

      {/* Particles */}
      <FloatingParticles count={15} />

      {/* 3D rotating wireframe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotateY: [0, 360], rotateX: [0, 10, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="w-[500px] h-[500px] border border-accent-500/[0.05] rounded-full"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          animate={{ rotateY: [360, 0], rotateZ: [0, 180, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[350px] h-[350px] border border-white/[0.03] rounded-full"
          style={{ transformStyle: 'preserve-3d' }}
        />
      </div>

      <motion.div
        style={{ rotateX, scale: textScale }}
        className="relative container-max text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-8"
        >
          <span className="text-8xl md:text-9xl font-heading font-black text-white/[0.03] select-none">EL-BOMI</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-6 -mt-16"
          style={{ textShadow: '0 0 80px rgba(249,115,22,0.1)' }}
        >
          Votre prochain projet<br />
          <span className="text-gradient">commence ici.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-white/50 max-w-xl mx-auto mb-10"
        >
          Devis gratuit sous 48h. Un interlocuteur dédié pour vous accompagner de A à Z.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/30 hover:-translate-y-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Démarrer mon projet
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Shine sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
