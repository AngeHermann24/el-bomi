'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Zap, Sun, Radio, Wrench, Building2, Activity,
  ArrowRight, ChevronDown, TrendingUp, Users, Globe, Award,
  Bolt, Plug, Gauge,
} from 'lucide-react';
import CircuitAnimation from './CircuitAnimation';

const stats = [
  { value: '850+', label: 'km de réseaux', sub: 'BT/HTA posés' },
  { value: '120+', label: 'postes MT/BT', sub: 'exploités' },
  { value: '45 MW', label: 'solaire installé', sub: 'photovoltaïque' },
  { value: '300k', label: 'habitants', sub: 'électrifiés' },
];

const solutions = [
  {
    icon: Zap,
    title: 'Électricité générale BT',
    desc: 'Installations industrielles, tertiaires et résidentielles basse tension. Tableaux, câblages, mise en conformité.',
    img: '/images/energie-projets.jpg',
    href: '/filiales/energie/solutions',
    color: 'from-amber-500/20',
  },
  {
    icon: Radio,
    title: 'Réseaux BT/HTA',
    desc: 'Extension et réhabilitation de lignes aériennes et souterraines, postes de transformation HTA/BT.',
    img: '/images/energie-impact.jpg',
    href: '/filiales/energie/solutions',
    color: 'from-gold-600/20',
  },
  {
    icon: Globe,
    title: 'Électrification rurale',
    desc: "Extension du réseau électrique vers les zones rurales isolées. Impact direct sur des milliers de foyers.",
    img: '/images/energie-impact.jpg',
    href: '/filiales/energie/impact',
    color: 'from-gold-500/20',
  },
  {
    icon: Sun,
    title: 'Solaire photovoltaïque',
    desc: 'Centrales solaires, kits isolés, systèmes hybrides. Énergie propre pour zones connectées et off-grid.',
    img: '/images/energie-impact.jpg',
    href: '/filiales/energie/solutions',
    color: 'from-yellow-500/20',
  },
  {
    icon: Activity,
    title: 'Automatismes & supervision',
    desc: 'Automates industriels, SCADA, télégestion de réseaux. Optimisation et monitoring en temps réel.',
    img: '/images/unsplash/photo-1581094794329-c8112a89af12.jpg',
    href: '/filiales/energie/solutions',
    color: 'from-cyan-500/20',
  },
  {
    icon: Wrench,
    title: 'Maintenance HTB/HTA',
    desc: 'Maintenance préventive et curative des infrastructures haute tension. Interventions 24h/24.',
    img: '/images/energie-projets.jpg',
    href: '/filiales/energie/solutions',
    color: 'from-red-500/20',
  },
];

const projects = [
  {
    title: 'Électrification Zone Nord',
    location: 'Korhogo',
    desc: '320 km de lignes HTA, 45 postes MT/BT, 18 000 foyers raccordés.',
    img: '/images/energie-solutions.jpg',
    tag: 'Réseaux HTA',
  },
  {
    title: 'Centrale solaire Bouaké',
    location: 'Bouaké',
    desc: '15 MW photovoltaïques, alimentation de la zone industrielle.',
    img: '/images/energie-solutions.jpg',
    tag: 'Solaire',
  },
  {
    title: 'Automatisation Usine CIE',
    location: 'Abidjan, Yopougon',
    desc: 'Supervision SCADA, télégestion réseau, 12 postes automatisés.',
    img: '/images/energie-contact.jpg',
    tag: 'Automatismes',
  },
];

const commitments = [
  { icon: Award, title: 'Certification ISO', desc: 'Processus certifiés ISO 9001 pour la qualité de nos installations.' },
  { icon: TrendingUp, title: 'Fiabilité réseau', desc: "Taux de disponibilité > 99,5% sur nos réseaux exploités." },
  { icon: Users, title: 'Expertise locale', desc: 'Ingénieurs ivoiriens formés aux standards internationaux.' },
  { icon: Building2, title: 'Conformité réglementaire', desc: 'Toutes installations conformes aux normes CIGRE et CIE.' },
];

export default function EnergieHomeClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 160]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="bg-gradient-to-b from-[#D8CFBC] via-[#C9BFA8] to-[#D8CFBC] text-navy-900">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center bg-gradient-to-b from-[#BFB499] via-[#C9BFA8] to-[#D8CFBC]">
        {/* Image parallax — paysage électrique clair */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/images/energie-solutions.jpg"
            alt="Réseau électrique EL-BOMI"
            fill priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Overlay clair — laisse passer l'image */}
          <div className="absolute inset-0 bg-[#FAFAF8]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8]/60 via-transparent to-[#FAFAF8]" />
          {/* Glow ambre central */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-amber-accent/8 blur-3xl" />
        </motion.div>

        {/* Carte stylisée du territoire — lignes dorées qui s'allument */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.15]">
          <svg viewBox="0 0 1200 800" className="w-full h-full" fill="none">
            <defs>
              <filter id="heroGlow">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            {/* Lignes électriques horizontales */}
            {[100, 200, 350, 500, 650].map((y, i) => (
              <motion.line key={`h${i}`} x1="0" y1={y} x2="1200" y2={y}
                stroke="#C9A227" strokeWidth="1"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: i * 0.3 }}
              />
            ))}
            {/* Lignes électriques verticales */}
            {[120, 280, 440, 600, 760, 920, 1080].map((x, i) => (
              <motion.line key={`v${i}`} x1={x} y1="0" x2={x} y2="800"
                stroke="#C9A227" strokeWidth="1"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 0.5 + i * 0.2 }}
              />
            ))}
            {/* Points lumineux ambre — villages électrifiés */}
            {[[120,100],[280,200],[440,100],[600,350],[760,200],[920,350],[280,500],[440,650],[600,500]].map(([x,y], i) => (
              <motion.circle key={`n${i}`} cx={x} cy={y} r="5" fill="#F2A93B" filter="url(#heroGlow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0,1.2,1], opacity: [0,1,0.8] }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
              />
            ))}
            {/* Flux d'énergie ambre sur les lignes */}
            {[
              { x1: 0, y1: 100, x2: 1200, y2: 100 },
              { x1: 280, y1: 0, x2: 280, y2: 800 },
              { x1: 0, y1: 500, x2: 1200, y2: 500 },
              { x1: 600, y1: 0, x2: 600, y2: 800 },
            ].map((line, i) => (
              <motion.line key={`pulse-${i}`} {...line}
                stroke="#F2A93B" strokeWidth="2" filter="url(#heroGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 0.2, 0.5, 0.8, 1], opacity: [0, 0.8, 0.4, 0.6, 0] }}
                transition={{ duration: 2.5, delay: 2 + i * 0.8, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
              />
            ))}
          </svg>
        </div>

        {/* Ondes d'énergie concentriques ambre */}
        <div className="pointer-events-none absolute right-[10%] top-1/2 -translate-y-1/2">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-accent/30"
              initial={{ width: 0, height: 0, opacity: 0 }}
              animate={{ width: [0, 300, 500], height: [0, 300, 500], opacity: [0, 0.4, 0] }}
              transition={{ duration: 4, delay: i * 1, repeat: Infinity, ease: 'easeOut' }}
            />
          ))}
        </div>

        {/* Contenu hero */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 pt-24"
        >
          <div className="max-w-4xl">
            {/* Kicker avec éclair pulsé ambre */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 flex items-center gap-4"
            >
              <motion.div
                animate={{ boxShadow: ['0 0 0px rgba(242,169,59,0)', '0 0 20px rgba(242,169,59,0.5)', '0 0 0px rgba(242,169,59,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/30 bg-white shadow-sm"
              >
                <Bolt className="h-5 w-5 text-amber-accent" />
              </motion.div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-navy-900/70">
                EL-BOMI Énergie & Automatisme
              </span>
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading text-5xl font-bold uppercase leading-[1.05] text-navy-900 md:text-6xl lg:text-7xl xl:text-8xl"
            >
              L&apos;énergie qui{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-gold-500 via-gold-300 to-amber-accent bg-clip-text text-transparent">
                  alimente
                </span>
                {/* Glow pulsé ambre sous le texte */}
                <motion.span
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-2 -z-0 rounded-lg bg-amber-accent/20 blur-xl"
                />
              </span>
              <br />l&apos;avenir
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-navy-900/60"
            >
              Électricité, réseaux HTA/BT, solaire et automatismes industriels —
              nous connectons la Côte d&apos;Ivoire à l&apos;énergie de demain.
            </motion.p>

            {/* Stats inline dans le hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-6"
            >
              {[
                { val: '850+ km', label: 'Réseaux posés' },
                { val: '45 MW', label: 'Solaire installé' },
                { val: '300k', label: 'Habitants électrifiés' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="font-heading text-xl font-bold text-amber-accent-dark">{s.val}</span>
                  <span className="text-xs text-navy-900/50">{s.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/filiales/energie/solutions"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-navy-900 transition-all duration-300 hover:shadow-[0_0_40px_rgba(242,169,59,0.4)]"
              >
                <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle at 50% 50%, rgba(242,169,59,0.3) 0%, transparent 70%)' }}
                />
                <span className="relative flex items-center gap-2">
                  Nos solutions <Zap className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/filiales/energie/contact"
                className="group rounded-full border border-navy-900/20 bg-white px-7 py-3.5 text-sm font-semibold text-navy-900/80 transition-all duration-300 hover:border-amber-accent/50 hover:text-navy-900 hover:shadow-[0_0_25px_rgba(242,169,59,0.12)]"
              >
                <span className="flex items-center gap-2">
                  Demander un devis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-navy-900/40">Défiler</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-5 w-5 text-amber-accent/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── CIRCUIT SÉPARATEUR ───────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#BFB499] via-[#C9BFA8] to-[#BFB499] py-8 border-y border-gold-500/15">
        <CircuitAnimation className="opacity-90 max-w-6xl mx-auto" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
      </div>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#C9BFA8] to-[#BFB499] py-12 sm:py-20 overflow-hidden">
        {/* Glow background ambre */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-amber-accent/8 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-gold-500/6 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #C9A227 1px, transparent 0)`, backgroundSize: '32px 32px' }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm transition-all duration-500 hover:border-amber-accent/30 hover:shadow-[0_8px_30px_rgba(242,169,59,0.12)]"
              >
                {/* Glow corner pulsé ambre */}
                <motion.div
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                  className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-amber-accent/15 blur-xl"
                />
                <p className="relative font-heading text-3xl font-bold bg-gradient-to-r from-gold-500 to-amber-accent bg-clip-text text-transparent md:text-4xl">
                  {s.value}
                </p>
                <p className="relative mt-1 text-sm font-medium text-navy-900/80">{s.label}</p>
                <p className="relative mt-0.5 text-xs text-navy-900/40">{s.sub}</p>
                {/* Ligne ambre en bas */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-600 to-amber-accent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOS SOLUTIONS ────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#BFB499] to-[#C9BFA8] py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Nos domaines</span>
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-navy-900 md:text-5xl">
              6 pôles d&apos;expertise
            </h2>
            <p className="mt-4 text-navy-900/55">
              De la production à la distribution, en passant par le solaire et les automatismes.
            </p>
          </motion.div>

          {/* Grille solutions — cartes photo immersives sur fond clair */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm cursor-pointer transition-all duration-500 hover:shadow-[0_12px_40px_rgba(11,30,61,0.12)]"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <Image src={s.img} alt={s.title} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Overlay hover — glow ambre */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at 50% 100%, rgba(242,169,59,0.15) 0%, transparent 70%)` }}
                />
                {/* Flux ambre au hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-br from-amber-accent/0 via-amber-accent/8 to-amber-accent/0"
                />
                {/* Contenu */}
                <div className="relative p-6">
                  {/* Icône */}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/20 bg-gold-500/8 transition-all duration-300 group-hover:bg-amber-accent/15 group-hover:border-amber-accent/40 group-hover:shadow-[0_0_15px_rgba(242,169,59,0.15)]">
                    <s.icon className="h-5 w-5 text-gold-600" />
                  </div>
                  <h3 className="mb-2 font-heading text-base font-bold uppercase text-navy-900 leading-snug">
                    {s.title}
                  </h3>
                  {/* Desc révélée au hover */}
                  <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-24">
                    <p className="mb-3 text-xs leading-relaxed text-navy-900/55">{s.desc}</p>
                    <Link href={s.href}
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-accent-dark"
                    >
                      En savoir plus <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
                {/* Flux ambre sur la bordure au hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-amber-accent/0 transition-all duration-500 group-hover:opacity-100 group-hover:ring-amber-accent/25" />
                {/* Barre ambre bas */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-amber-accent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link href="/filiales/energie/solutions"
              className="group inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white px-6 py-3 text-sm font-semibold text-navy-900/70 transition-all hover:border-amber-accent/40 hover:text-navy-900 hover:shadow-[0_0_20px_rgba(242,169,59,0.1)]"
            >
              Voir toutes nos solutions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SÉPARATEUR CIRCUIT ───────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#C9BFA8] via-[#BFB499] to-[#C9BFA8] py-6 border-y border-gold-500/15">
        <CircuitAnimation className="opacity-70 max-w-6xl mx-auto" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FAFAF8] via-transparent to-[#FAFAF8]" />
      </div>

      {/* ── PROJETS PHARES ───────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#C9BFA8] to-[#BFB499] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Portfolio</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-navy-900 md:text-5xl">
                Projets phares
              </h2>
            </div>
            <Link href="/filiales/energie/projets"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-navy-900/60 transition-colors hover:text-amber-accent-dark"
            >
              Voir tous <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Grille asymétrique : 1 grande + 2 petites */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
            {/* Grande carte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm lg:col-span-3"
              style={{ minHeight: '420px' }}
            >
              <Image src={projects[0].img} alt={projects[0].title} fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(242,169,59,0.15) 0%, transparent 60%)' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="mb-3 inline-flex w-fit rounded-full border border-gold-500/30 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-600 backdrop-blur-sm">
                  {projects[0].tag}
                </span>
                <h3 className="font-heading text-2xl font-bold uppercase text-white">{projects[0].title}</h3>
                <p className="mt-2 text-sm text-white/70">{projects[0].desc}</p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-amber-accent-light">
                  <span className="h-1 w-1 rounded-full bg-amber-accent-light" />{projects[0].location}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-navy-900/[0.04] transition-all duration-500 group-hover:ring-amber-accent/20" />
            </motion.div>

            {/* 2 petites cartes */}
            <div className="flex flex-col gap-5 lg:col-span-2">
              {projects.slice(1).map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="group relative flex-1 overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm"
                  style={{ minHeight: '195px' }}
                >
                  <Image src={p.img} alt={p.title} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/88 via-navy-900/30 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(242,169,59,0.12) 0%, transparent 60%)' }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <span className="mb-2 inline-flex w-fit rounded-full border border-gold-500/25 bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-600 backdrop-blur-sm">
                      {p.tag}
                    </span>
                    <h3 className="font-heading text-base font-bold uppercase text-white leading-snug">{p.title}</h3>
                    <p className="mt-1 text-xs text-white/60">{p.desc}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-amber-accent transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT ÉLECTRIFICATION RURALE ────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#BFB499] to-[#C9BFA8] py-24">
        {/* Glow background pulsé ambre */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-accent/8 blur-3xl"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-navy-900/10 shadow-lg"
              style={{ minHeight: '400px' }}
            >
              <Image
                src="/images/energie-impact.jpg"
                alt="Électrification rurale"
                fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-900/20" />
              {/* Badge stats flottant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 rounded-xl border border-gold-500/20 bg-white/95 p-4 shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="text-center">
                    <p className="font-heading text-2xl font-bold text-amber-accent-dark">300k+</p>
                    <p className="text-[10px] uppercase tracking-wider text-navy-900/50">Habitants</p>
                  </div>
                  <div className="h-8 w-px bg-gold-500/20" />
                  <div className="text-center">
                    <p className="font-heading text-2xl font-bold text-amber-accent-dark">80+</p>
                    <p className="text-[10px] uppercase tracking-wider text-navy-900/50">Villages</p>
                  </div>
                  <div className="h-8 w-px bg-gold-500/20" />
                  <div className="text-center">
                    <p className="font-heading text-2xl font-bold text-amber-accent-dark">15</p>
                    <p className="text-[10px] uppercase tracking-wider text-navy-900/50">Régions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Impact</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-navy-900 md:text-5xl">
                L&apos;électricité,<br />
                <span className="bg-gradient-to-r from-gold-500 to-amber-accent bg-clip-text text-transparent">
                  un droit pour tous
                </span>
              </h2>
              <p className="mt-6 text-navy-900/60 leading-relaxed">
                Depuis des années, EL-BOMI Énergie s&apos;engage dans l&apos;électrification rurale
                en Côte d&apos;Ivoire — portant la lumière dans des zones isolées et transformant
                durablement les conditions de vie des populations.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Extension de réseaux MT/BT vers 80+ villages isolés",
                  "Kits solaires autonomes pour zones hors-réseau",
                  "Partenariats avec l'État et les bailleurs internationaux",
                  "Formation de techniciens locaux à la maintenance",
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-accent" />
                    <span className="text-sm text-navy-900/60">{point}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                <Link href="/filiales/energie/impact"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-navy-900/15 bg-white px-7 py-3.5 text-sm font-semibold text-navy-900/80 transition-all hover:border-amber-accent/40 hover:text-navy-900 hover:shadow-[0_0_25px_rgba(242,169,59,0.12)]"
                >
                  Découvrir l&apos;impact <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENTS ──────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#C9BFA8] to-[#BFB499] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Pourquoi nous</span>
              <span className="h-px w-8 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-navy-900">Nos engagements</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm transition-all duration-400 hover:border-amber-accent/25 hover:shadow-[0_8px_30px_rgba(242,169,59,0.1)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/8 transition-all group-hover:bg-amber-accent/15 group-hover:shadow-[0_0_15px_rgba(242,169,59,0.15)]">
                  <c.icon className="h-5 w-5 text-gold-600" />
                </div>
                <h3 className="mb-2 font-heading text-sm font-bold uppercase text-navy-900">{c.title}</h3>
                <p className="text-xs leading-relaxed text-navy-900/50">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — bandeau marine contrasté ─────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#BFB499] to-navy-900">
        <Image
          src="/images/energie-projets.jpg"
          alt="CTA énergie"
          fill className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-900/85" />
        {/* Glow central pulsé ambre */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="h-80 w-80 rounded-full bg-amber-accent/15 blur-3xl"
          />
        </div>
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-400/50" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400/80">Parlons de votre projet</span>
              <span className="h-px w-8 bg-gold-400/50" />
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl lg:text-6xl">
              Un projet électrique<br />
              <span className="bg-gradient-to-r from-gold-400 to-amber-accent-light bg-clip-text text-transparent">prend vie ici</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg text-white/60">
              Bureau d&apos;études, travaux, maintenance — notre équipe vous accompagne de la conception à la mise en service.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/filiales/energie/contact"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gold-500 to-amber-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-900 transition-all hover:shadow-[0_0_40px_rgba(242,169,59,0.4)]"
              >
                <span className="relative flex items-center gap-2">
                  Contacter notre équipe <Zap className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/"
                className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/70 transition-all hover:border-gold-400/50 hover:text-white"
              >
                Retour au groupe
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
