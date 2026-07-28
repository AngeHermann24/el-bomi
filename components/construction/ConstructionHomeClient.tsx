'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, HardHat, Wrench, Zap, Droplets, Layers, TrendingUp, Users, Award, CheckCircle, Play } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import BuildingAnimation from '@/components/construction/BuildingAnimation';

const HERO_IMG = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85';

const stats = [
  { value: '15+', label: 'Années d\'expérience', icon: Award },
  { value: '250+', label: 'Projets livrés', icon: TrendingUp },
  { value: '80+', label: 'Ingénieurs & techniciens', icon: Users },
  { value: '7', label: 'Corps de métier', icon: Layers },
];

const expertises = [
  {
    icon: Building2,
    label: 'Bâtiment & Génie Civil',
    desc: 'Construction neuve, gros œuvre, structure béton armé.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
  {
    icon: HardHat,
    label: 'Travaux Publics & Voiries',
    desc: 'Routes, réseaux, ouvrages d\'art, aménagements urbains.',
    img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=80',
  },
  {
    icon: Layers,
    label: 'Terrassement & SIG',
    desc: 'Études de sol, terrassement, cartographie et plans.',
    img: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=600&q=80',
  },
  {
    icon: Wrench,
    label: 'Matériaux & Béton',
    desc: 'Production de béton, préfabrication, fourniture matériaux.',
    img: 'https://images.unsplash.com/photo-1559131937-4a0f4e2c3a1b?w=600&q=80',
  },
  {
    icon: Droplets,
    label: 'Hydraulique & Assainissement',
    desc: 'Réseaux d\'eau, drainage, stations de traitement.',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
  },
  {
    icon: Zap,
    label: 'Électricité & Éclairage',
    desc: 'Installations HT/BT, éclairage urbain, courants faibles.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
];

const projects = [
  {
    title: 'Centre Commercial Abidjan',
    type: 'Bâtiment commercial',
    area: '12 000 m²',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',
    span: 'lg:col-span-2',
  },
  {
    title: 'Route Yamoussoukro–Bouaké',
    type: 'Travaux publics',
    area: '45 km',
    year: '2022',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    span: '',
  },
  {
    title: 'Résidence Cocody Premium',
    type: 'Logements haut standing',
    area: '8 500 m²',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    span: '',
  },
];

const GRID_STYLE = {
  backgroundImage: `linear-gradient(rgb(255 255 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)`,
  backgroundSize: '40px 40px',
};

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col items-center gap-1 border-r border-white/[0.06] px-6 last:border-0"
    >
      <stat.icon className="mb-2 h-5 w-5 text-gold-400/50 transition-colors group-hover:text-gold-400" />
      <div className="font-heading text-4xl font-bold text-gold-400 md:text-5xl">{stat.value}</div>
      <div className="text-xs uppercase tracking-wider text-white/40">{stat.label}</div>
    </motion.div>
  );
}

export default function ConstructionHomeClient() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const expertisesRef = useRef(null);
  const inViewExpertises = useInView(expertisesRef, { once: true, margin: '-80px' });

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — image plein écran + parallax
      ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">

        {/* Photo de fond en parallax */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src={HERO_IMG}
            alt="Chantier EL-BOMI Construction"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Overlay multicouche */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />

        {/* Grille architecte en filigrane */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={GRID_STYLE} />

        {/* Bandeau or en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_auto] lg:items-center">

            {/* Texte */}
            <motion.div style={{ opacity: heroOpacity }}>
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
                className="font-heading text-5xl font-bold uppercase leading-[1.0] text-white md:text-6xl lg:text-7xl"
              >
                Nous bâtissons
                <br />
                <span className="relative">
                  <span className="text-gold-400">l&apos;Afrique</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute -bottom-2 left-0 block h-1 w-full origin-left bg-gold-500/50"
                  />
                </span>
                <br />
                de demain
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
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-gold-500/50 hover:bg-white/5 hover:text-white"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Voir nos réalisations
                </Link>
              </motion.div>
            </motion.div>

            {/* Animation immeuble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:flex items-end justify-center"
            >
              <BuildingAnimation />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-8 w-px bg-gradient-to-b from-gold-400/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          STATS — bannière sombre
      ═══════════════════════════════════════ */}
      <section className="relative border-y border-white/[0.06] bg-navy-950 py-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={GRID_STYLE} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-0 divide-x divide-white/[0.06] md:grid-cols-4">
            {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EXPERTISES — cartes avec image de fond
      ═══════════════════════════════════════ */}
      <section ref={expertisesRef} className="relative bg-navy-900 py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={GRID_STYLE} />

        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Corps de métier</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">
                Nos 7 expertises
              </h2>
            </div>
            <Link
              href="/filiales/construction/expertises"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
            >
              Tout voir <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertises.map((e, i) => (
              <motion.div
                key={e.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inViewExpertises ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                {/* Image de fond */}
                <div className="aspect-[4/3]">
                  <Image
                    src={e.img}
                    alt={e.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Overlay dégradé */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-900/60 to-transparent" />
                {/* Contenu */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/15 backdrop-blur-sm">
                    <e.icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <h3 className="font-heading text-base font-bold uppercase text-white leading-tight">{e.label}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/55 max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-20">
                    {e.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    En savoir plus <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RÉALISATIONS — galerie immersive
      ═══════════════════════════════════════ */}
      <section className="bg-navy-950 py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Réalisations</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">
                Projets phares
              </h2>
            </div>
            <Link
              href="/filiales/construction/realisations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              Tous les projets <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Grille asymétrique */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl ${p.span} ${i === 0 ? 'lg:row-span-2' : ''}`}
              >
                <div className={`relative w-full ${i === 0 ? 'aspect-[3/4] lg:h-full lg:min-h-[500px]' : 'aspect-[16/10]'}`}>
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                {/* Gold border reveal on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-gold-500/0 transition-all duration-500 group-hover:border-gold-500/40" />
                {/* Contenu */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-400 backdrop-blur-sm">
                      {p.type}
                    </span>
                    <span className="text-xs text-white/40">{p.area} · {p.year}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold uppercase text-white transition-colors group-hover:text-gold-300">
                    {p.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          POURQUOI NOUS — split image/texte
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-navy-900 py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={GRID_STYLE} />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:items-stretch">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="relative min-h-[420px] overflow-hidden rounded-2xl lg:rounded-r-none"
            >
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Chantier EL-BOMI"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-900/40" />
              {/* Badge flottant */}
              <div className="absolute bottom-6 left-6 rounded-xl border border-gold-500/30 bg-navy-950/80 px-5 py-3 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wider text-gold-400/70">Certifié</p>
                <p className="text-sm font-bold text-white">Normes ISO & NF</p>
              </div>
            </motion.div>

            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col justify-center rounded-2xl border border-l-0 border-white/[0.07] bg-white/[0.02] p-10 lg:rounded-l-none lg:p-14"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Pourquoi nous choisir</span>
              </div>
              <h2 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">
                La rigueur d&apos;un groupe,<br />
                <span className="text-gold-400">l&apos;expertise locale</span>
              </h2>
              <div className="mt-8 space-y-5">
                {[
                  { title: '15 ans d\'expérience', desc: 'Présents en Côte d\'Ivoire depuis 2009.' },
                  { title: 'Équipes certifiées', desc: 'Formation permanente aux normes internationales.' },
                  { title: 'Délais garantis', desc: 'Planning contractuel avec pénalités de retard.' },
                  { title: 'Matériaux contrôlés', desc: 'Tests en laboratoire agréé avant utilisation.' },
                  { title: 'Suivi 360°', desc: 'De l\'étude géotechnique à la réception définitive.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                    <div>
                      <span className="block text-sm font-semibold text-white">{item.title}</span>
                      <span className="text-sm text-white/45">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — image plein écran avec overlay
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-32">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
          alt="Chantier construction"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-950/85" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={GRID_STYLE} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
              Parlons de votre projet
            </span>
            <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl lg:text-6xl">
              Construisons ensemble
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/55">
              Partagez-nous vos besoins — nous vous répondons sous 48h avec une première estimation gratuite.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Link
                href="/filiales/construction/contact"
                className="inline-flex items-center gap-2.5 rounded-xl bg-gold-500 px-9 py-5 text-sm font-bold uppercase tracking-wide text-navy-900 transition-all hover:-translate-y-1 hover:bg-gold-400 hover:shadow-2xl hover:shadow-gold-500/30"
              >
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/filiales/construction/methodologie"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-9 py-5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-gold-500/50 hover:bg-white/5 hover:text-white"
              >
                Notre méthode de travail
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
