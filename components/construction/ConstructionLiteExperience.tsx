'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Building2, HardHat, Layers, Droplets, Zap, Map, TrendingUp, Award, Users } from 'lucide-react';

const stats = [
  { value: '250+', label: 'Projets livrés', icon: TrendingUp },
  { value: '6+', label: 'Années d\'expérience', icon: Award },
  { value: '80+', label: 'Ingénieurs & techniciens', icon: Users },
  { value: '7', label: 'Corps de métier', icon: Layers },
];

const expertises = [
  { icon: Building2, label: 'Bâtiment & Génie Civil', desc: 'Construction neuve, gros œuvre, structure béton armé.' },
  { icon: HardHat, label: 'Travaux Publics & Voiries', desc: 'Routes, réseaux, ouvrages d\'art, aménagements urbains.' },
  { icon: Map, label: 'Terrassement & Études SIG', desc: 'Études de sol, terrassement, cartographie et plans.' },
  { icon: Droplets, label: 'Hydraulique & Assainissement', desc: 'Réseaux d\'eau, drainage, stations de traitement.' },
  { icon: Zap, label: 'Électricité & Éclairage', desc: 'Installations HT/BT, éclairage urbain, courants faibles.' },
];

const GRID_STYLE = {
  backgroundImage: `linear-gradient(rgb(201 162 39 / 0.15) 1px, transparent 1px), linear-gradient(90deg, rgb(201 162 39 / 0.15) 1px, transparent 1px)`,
  backgroundSize: '40px 40px',
};

export default function ConstructionLiteExperience() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const buildRef = useRef(null);
  const buildInView = useInView(buildRef, { once: true, margin: '-80px' });

  const expertisesRef = useRef(null);
  const expertisesInView = useInView(expertisesRef, { once: true, margin: '-80px' });

  return (
    <>
      {/* ═══ HÉRO ═══ */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center bg-navy-950">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={GRID_STYLE} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

        {/* Grue SVG animée en fond */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
          <svg viewBox="0 0 200 400" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
            <motion.line
              x1="100" y1="20" x2="100" y2="380"
              stroke="#C9A227" strokeWidth="3"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6 }}
              style={{ transformOrigin: '100px 380px' }}
            />
            <motion.line
              x1="100" y1="20" x2="180" y2="20"
              stroke="#E8C766" strokeWidth="2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ transformOrigin: '100px 20px' }}
            />
            <motion.line
              x1="160" y1="22" x2="160" y2="80"
              stroke="#8A8D91" strokeWidth="1" strokeDasharray="4 3"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              style={{ transformOrigin: '160px 22px' }}
            />
            <motion.rect
              x="150" y="80" width="20" height="15"
              fill="#0B1E3D" stroke="#C9A227" strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <rect x="80" y="375" width="40" height="6" rx="2" fill="#C9A227" fillOpacity="0.5" />
          </svg>
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="container mx-auto relative px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
              BTP · Travaux Publics · Génie Civil
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase leading-[1.0] text-white md:text-6xl"
          >
            EL-BOMI
            <br />
            <span className="text-gold-400">Construction</span>
            <br />
            & Infrastructures
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/65"
          >
            Expert en construction, infrastructures et travaux publics en Côte d&apos;Ivoire.
            De l&apos;étude à la réception, chaque projet est une promesse tenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/filiales/construction/expertises"
              className="inline-flex items-center gap-2.5 rounded-xl bg-gold-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy-900 transition-all hover:-translate-y-1 hover:bg-gold-400 hover:shadow-2xl hover:shadow-gold-500/30"
            >
              Découvrir nos expertises
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/filiales/construction/realisations"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-8 py-4 text-sm font-semibold text-white/80 transition-all hover:border-gold-500/50 hover:bg-white/5 hover:text-white"
            >
              Voir nos réalisations
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ ÉDIFICATION SVG ═══ */}
      <section ref={buildRef} className="relative overflow-hidden bg-navy-900 py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={GRID_STYLE} />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">L&apos;édification</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">
                Bâtir avec
                <br />
                <span className="text-gold-400">précision</span>
              </h2>
              <p className="mt-6 max-w-lg text-white/55 leading-relaxed">
                Chaque étage s&apos;élève avec méthode. De la fondation à la livraison,
                nos ingénieurs contrôlent chaque phase — matériaux testés, délais garantis,
                normes internationales respectées.
              </p>
            </div>

            {/* Bâtiment SVG animé */}
            <div className="flex justify-center">
              <svg viewBox="0 0 200 320" className="w-64 drop-shadow-2xl">
                {/* Grue */}
                <motion.line
                  x1="140" y1="10" x2="140" y2="50"
                  stroke="#C9A227" strokeWidth="2"
                  initial={{ scaleY: 0 }}
                  animate={buildInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: '140px 50px' }}
                />
                <motion.line
                  x1="80" y1="20" x2="170" y2="20"
                  stroke="#C9A227" strokeWidth="2"
                  initial={{ scaleX: 0 }}
                  animate={buildInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  style={{ transformOrigin: '140px 20px' }}
                />
                {/* Toit */}
                <motion.polygon
                  points="50,80 150,80 140,100 60,100"
                  fill="#0B2040" stroke="#C9A227" strokeWidth="1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={buildInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                />
                {/* Étages */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const reversedIndex = 5 - i;
                  const y = 100 + reversedIndex * 30;
                  const delay = (5 - reversedIndex) * 0.1 + 0.3;
                  return (
                    <motion.g
                      key={i}
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={buildInView ? { opacity: 1, scaleY: 1 } : {}}
                      transition={{ duration: 0.2, delay }}
                      style={{ transformOrigin: `100px ${y + 30}px` }}
                    >
                      <rect x="50" y={y} width="100" height="30" fill="#0B1E3D" stroke="#1a3a6e" strokeWidth="0.5" />
                      <line x1="50" y1={y} x2="150" y2={y} stroke="#C9A227" strokeWidth="0.5" strokeOpacity="0.4" />
                      {Array.from({ length: 3 }).map((_, col) => (
                        <rect
                          key={col}
                          x={60 + col * 30} y={y + 6}
                          width="20" height="18" rx="1"
                          fill="#0e2d6b" stroke="#C9A227" strokeWidth="0.4" strokeOpacity="0.5"
                        />
                      ))}
                    </motion.g>
                  );
                })}
                {/* Sol */}
                <motion.rect
                  x="30" y="280" width="140" height="6" rx="2"
                  fill="#C9A227" fillOpacity="0.6"
                  initial={{ scaleX: 0 }}
                  animate={buildInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  style={{ transformOrigin: '100px 283px' }}
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="relative border-y border-white/[0.06] bg-navy-950 py-14">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={GRID_STYLE} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-0 divide-x divide-white/[0.06] md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center gap-1 border-r border-white/[0.06] px-6 last:border-0"
              >
                <s.icon className="mb-2 h-5 w-5 text-gold-400/50" />
                <div className="font-heading text-4xl font-bold text-gold-400 md:text-5xl">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-white/40">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPERTISES ═══ */}
      <section ref={expertisesRef} className="relative bg-navy-900 py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={GRID_STYLE} />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Corps de métier</span>
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">
              Nos expertises
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertises.map((e, i) => (
              <motion.div
                key={e.label}
                initial={{ opacity: 0, y: 30 }}
                animate={expertisesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-gold-500/30 hover:bg-gold-500/[0.03]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/15">
                  <e.icon className="h-5 w-5 text-gold-400" />
                </div>
                <h3 className="font-heading text-base font-bold uppercase text-white">{e.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
