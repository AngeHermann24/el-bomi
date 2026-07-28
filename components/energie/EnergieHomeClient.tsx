'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Zap, Sun, Radio, Wrench, Building2, Activity,
  ArrowRight, ChevronDown, TrendingUp, Users, Globe, Award,
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
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    href: '/filiales/energie/solutions',
    color: 'from-amber-500/20',
  },
  {
    icon: Radio,
    title: 'Réseaux BT/HTA',
    desc: 'Extension et réhabilitation de lignes aériennes et souterraines, postes de transformation HTA/BT.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    href: '/filiales/energie/solutions',
    color: 'from-gold-600/20',
  },
  {
    icon: Globe,
    title: 'Électrification rurale',
    desc: "Extension du réseau électrique vers les zones rurales isolées. Impact direct sur des milliers de foyers.",
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    href: '/filiales/energie/impact',
    color: 'from-gold-500/20',
  },
  {
    icon: Sun,
    title: 'Solaire photovoltaïque',
    desc: 'Centrales solaires, kits isolés, systèmes hybrides. Énergie propre pour zones connectées et off-grid.',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80',
    href: '/filiales/energie/solutions',
    color: 'from-yellow-500/20',
  },
  {
    icon: Activity,
    title: 'Automatismes & supervision',
    desc: 'Automates industriels, SCADA, télégestion de réseaux. Optimisation et monitoring en temps réel.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    href: '/filiales/energie/solutions',
    color: 'from-cyan-500/20',
  },
  {
    icon: Wrench,
    title: 'Maintenance HTB/HTA',
    desc: 'Maintenance préventive et curative des infrastructures haute tension. Interventions 24h/24.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    href: '/filiales/energie/solutions',
    color: 'from-red-500/20',
  },
];

const projects = [
  {
    title: 'Électrification Zone Nord',
    location: 'Korhogo',
    desc: '320 km de lignes HTA, 45 postes MT/BT, 18 000 foyers raccordés.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&q=80',
    tag: 'Réseaux HTA',
  },
  {
    title: 'Centrale solaire Bouaké',
    location: 'Bouaké',
    desc: '15 MW photovoltaïques, alimentation de la zone industrielle.',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&q=80',
    tag: 'Solaire',
  },
  {
    title: 'Automatisation Usine CIE',
    location: 'Abidjan, Yopougon',
    desc: 'Supervision SCADA, télégestion réseau, 12 postes automatisés.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
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
    <div className="bg-[#0A1628] text-white">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        {/* Image parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=85"
            alt="Réseau électrique EL-BOMI"
            fill priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Overlay multicouches */}
          <div className="absolute inset-0 bg-[#0A1628]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/30 via-transparent to-[#0A1628]" />
        </motion.div>

        {/* Grille de circuit en overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]">
          <svg viewBox="0 0 1200 800" className="w-full h-full" fill="none">
            {/* Lignes horizontales */}
            {[100, 200, 350, 500, 650].map((y, i) => (
              <motion.line key={`h${i}`} x1="0" y1={y} x2="1200" y2={y}
                stroke="#C9A227" strokeWidth="0.8"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: i * 0.3 }}
              />
            ))}
            {/* Lignes verticales */}
            {[120, 280, 440, 600, 760, 920, 1080].map((x, i) => (
              <motion.line key={`v${i}`} x1={x} y1="0" x2={x} y2="800"
                stroke="#C9A227" strokeWidth="0.8"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 0.5 + i * 0.2 }}
              />
            ))}
            {/* Nœuds lumineux */}
            {[[120,100],[280,200],[440,100],[600,350],[760,200],[920,350],[280,500],[440,650],[600,500]].map(([x,y], i) => (
              <motion.circle key={`n${i}`} cx={x} cy={y} r="4" fill="#E8C766"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: [0,1,0.5] }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
              />
            ))}
          </svg>
        </div>

        {/* Contenu hero */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 pt-24"
        >
          <div className="max-w-4xl">
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 flex items-center gap-4"
            >
              {/* Filament or */}
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
                EL-BOMI Énergie & Automatisme
              </span>
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading text-5xl font-bold uppercase leading-[1.05] text-white md:text-6xl lg:text-7xl xl:text-8xl"
            >
              L&apos;énergie qui{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                  alimente
                </span>
                {/* Glow sous le texte or */}
                <span className="absolute -inset-2 -z-0 rounded-lg bg-gold-500/10 blur-xl" />
              </span>
              <br />l&apos;avenir
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/50"
            >
              Électricité, réseaux HTA/BT, solaire et automatismes industriels —
              nous connectons la Côte d&apos;Ivoire à l&apos;énergie de demain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/filiales/energie/solutions"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0A1628] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]"
              >
                <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle at 50% 50%, rgba(232,199,102,0.3) 0%, transparent 70%)' }}
                />
                <span className="relative flex items-center gap-2">
                  Nos solutions <Zap className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/filiales/energie/contact"
                className="group rounded-full border border-gold-500/25 px-7 py-3.5 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-gold-400/50 hover:text-white hover:shadow-[0_0_20px_rgba(201,162,39,0.1)]"
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
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">Défiler</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-5 w-5 text-gold-500/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── CIRCUIT SÉPARATEUR ───────────────────────────── */}
      <div className="relative overflow-hidden bg-[#0A1628] py-6">
        <CircuitAnimation className="opacity-60 max-w-6xl mx-auto" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A1628] via-transparent to-[#0A1628]" />
      </div>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="relative bg-[#060e1c] py-20 overflow-hidden">
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
                className="group relative overflow-hidden rounded-2xl border border-gold-500/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-gold-500/25"
              >
                {/* Glow corner */}
                <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-gold-500/10 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="font-heading text-3xl font-bold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium text-white/60">{s.label}</p>
                <p className="mt-0.5 text-xs text-white/25">{s.sub}</p>
                {/* Ligne en bas */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-600 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOS SOLUTIONS ────────────────────────────────── */}
      <section className="bg-[#0A1628] py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Nos domaines</span>
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">
              6 pôles d&apos;expertise
            </h2>
            <p className="mt-4 text-white/45">
              De la production à la distribution, en passant par le solaire et les automatismes.
            </p>
          </motion.div>

          {/* Grille solutions — cartes photo immersives */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[16/10]">
                  <Image src={s.img} alt={s.title} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Overlay permanent */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c]/98 via-[#0A1628]/60 to-[#0A1628]/10" />
                {/* Overlay hover — glow doré */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at 50% 100%, rgba(201,162,39,0.15) 0%, transparent 70%)` }}
                />
                {/* Contenu */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Icône */}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/25 bg-gold-500/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-gold-500/20 group-hover:border-gold-400/40 group-hover:shadow-[0_0_15px_rgba(201,162,39,0.2)]">
                    <s.icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <h3 className="mb-2 font-heading text-base font-bold uppercase text-white leading-snug">
                    {s.title}
                  </h3>
                  {/* Desc révélée au hover */}
                  <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-24">
                    <p className="mb-3 text-xs leading-relaxed text-white/50">{s.desc}</p>
                    <Link href={s.href}
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold-400"
                    >
                      En savoir plus <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
                {/* Pulse sur le contour au hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-gold-400/0 transition-all duration-500 group-hover:opacity-100 group-hover:ring-gold-400/20" />
                {/* Barre or bas */}
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link href="/filiales/energie/solutions"
              className="group inline-flex items-center gap-2 rounded-full border border-gold-500/20 px-6 py-3 text-sm font-semibold text-gold-400/70 transition-all hover:border-gold-400/40 hover:text-gold-400 hover:shadow-[0_0_20px_rgba(201,162,39,0.1)]"
            >
              Voir toutes nos solutions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SÉPARATEUR CIRCUIT ───────────────────────────── */}
      <div className="relative overflow-hidden bg-[#060e1c] py-4">
        <CircuitAnimation className="opacity-40 max-w-6xl mx-auto" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060e1c] via-transparent to-[#060e1c]" />
      </div>

      {/* ── PROJETS PHARES ───────────────────────────────── */}
      <section className="bg-[#060e1c] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Portfolio</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">
                Projets phares
              </h2>
            </div>
            <Link href="/filiales/energie/projets"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-400/60 transition-colors hover:text-gold-400"
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
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] lg:col-span-3"
              style={{ minHeight: '420px' }}
            >
              <Image src={projects[0].img} alt={projects[0].title} fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c]/95 via-[#060e1c]/40 to-transparent" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,162,39,0.12) 0%, transparent 60%)' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="mb-3 inline-flex w-fit rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-400 backdrop-blur-sm">
                  {projects[0].tag}
                </span>
                <h3 className="font-heading text-2xl font-bold uppercase text-white">{projects[0].title}</h3>
                <p className="mt-2 text-sm text-white/45">{projects[0].desc}</p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-gold-400/60">
                  <span className="h-1 w-1 rounded-full bg-gold-400/60" />{projects[0].location}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.04] transition-all duration-500 group-hover:ring-gold-400/15" />
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
                  className="group relative flex-1 overflow-hidden rounded-2xl border border-white/[0.06]"
                  style={{ minHeight: '195px' }}
                >
                  <Image src={p.img} alt={p.title} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c]/95 via-[#060e1c]/40 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,162,39,0.1) 0%, transparent 60%)' }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <span className="mb-2 inline-flex w-fit rounded-full border border-gold-500/25 bg-gold-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-400/80 backdrop-blur-sm">
                      {p.tag}
                    </span>
                    <h3 className="font-heading text-base font-bold uppercase text-white leading-snug">{p.title}</h3>
                    <p className="mt-1 text-xs text-white/40">{p.desc}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT ÉLECTRIFICATION RURALE ────────────────── */}
      <section className="relative overflow-hidden bg-[#0A1628] py-24">
        {/* Glow background */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl"
              style={{ minHeight: '400px' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=85"
                alt="Électrification rurale"
                fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A1628]/30" />
              {/* Badge stats flottant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 rounded-xl border border-gold-500/20 bg-[#0A1628]/85 p-4 backdrop-blur-md"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="text-center">
                    <p className="font-heading text-2xl font-bold text-gold-400">300k+</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/40">Habitants</p>
                  </div>
                  <div className="h-8 w-px bg-gold-500/15" />
                  <div className="text-center">
                    <p className="font-heading text-2xl font-bold text-gold-400">80+</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/40">Villages</p>
                  </div>
                  <div className="h-8 w-px bg-gold-500/15" />
                  <div className="text-center">
                    <p className="font-heading text-2xl font-bold text-gold-400">15</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/40">Régions</p>
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
                <span className="h-px w-8 bg-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Impact</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">
                L&apos;électricité,<br />
                <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                  un droit pour tous
                </span>
              </h2>
              <p className="mt-6 text-white/50 leading-relaxed">
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
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400/60" />
                    <span className="text-sm text-white/50">{point}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                <Link href="/filiales/energie/impact"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-gold-500/25 bg-gold-500/8 px-7 py-3.5 text-sm font-semibold text-gold-300 transition-all hover:border-gold-400/40 hover:bg-gold-500/15 hover:shadow-[0_0_25px_rgba(201,162,39,0.15)]"
                >
                  Découvrir l&apos;impact <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENTS ──────────────────────────────────── */}
      <section className="bg-[#060e1c] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Pourquoi nous</span>
              <span className="h-px w-8 bg-gold-400" />
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-white">Nos engagements</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-400 hover:border-gold-500/20 hover:bg-gold-500/[0.03]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/8 transition-all group-hover:bg-gold-500/15 group-hover:shadow-[0_0_15px_rgba(201,162,39,0.15)]">
                  <c.icon className="h-5 w-5 text-gold-400" />
                </div>
                <h3 className="mb-2 font-heading text-sm font-bold uppercase text-white">{c.title}</h3>
                <p className="text-xs leading-relaxed text-white/35">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
          alt="CTA énergie"
          fill className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0A1628]/88" />
        {/* Glow central */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
        </div>
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-400/50" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400/70">Parlons de votre projet</span>
              <span className="h-px w-8 bg-gold-400/50" />
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl lg:text-6xl">
              Un projet électrique<br />
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">prend vie ici</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg text-white/45">
              Bureau d&apos;études, travaux, maintenance — notre équipe vous accompagne de la conception à la mise en service.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/filiales/energie/contact"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0A1628] transition-all hover:shadow-[0_0_40px_rgba(201,162,39,0.45)]"
              >
                <span className="relative flex items-center gap-2">
                  Contacter notre équipe <Zap className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/"
                className="rounded-full border border-white/10 px-8 py-4 text-sm font-semibold text-white/50 transition-all hover:border-white/20 hover:text-white"
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
