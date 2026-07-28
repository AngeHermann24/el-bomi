'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Network, Wifi, Shield, Cloud, Code2, Building2,
  ArrowRight, ChevronDown, TrendingUp, Award, Users, Clock,
  Terminal, Database, Lock,
} from 'lucide-react';
import NetworkCanvas from './NetworkCanvas';

const stats = [
  { value: '200+', label: 'Projets IT livrés', sub: 'depuis 2010' },
  { value: '50+', label: 'Clients actifs', sub: 'entreprises & institutions' },
  { value: '99.9%', label: 'Uptime garanti', sub: 'sur nos infrastructures' },
  { value: '24/7', label: 'Support', sub: 'NOC opérationnel' },
];

const solutions = [
  {
    icon: Network,
    title: 'Réseaux & Infrastructures IT',
    desc: 'LAN/WAN, WiFi entreprise, MPLS, SD-WAN. Conception, déploiement et supervision de parcs IT.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    href: '/filiales/informatique-telecoms/solutions',
    badge: 'Infrastructure',
  },
  {
    icon: Wifi,
    title: 'Télécoms & Fibre optique',
    desc: "Déploiement fibre optique, liaisons longue distance, VoIP, ToIP et réseaux de télécommunications.",
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
    href: '/filiales/informatique-telecoms/solutions',
    badge: 'Télécoms',
  },
  {
    icon: Shield,
    title: 'Cybersécurité & Vidéosurveillance',
    desc: 'Audit de sécurité, firewall next-gen, SIEM, SOC managé, CCTV IP et contrôle d\'accès.',
    img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&q=80',
    href: '/filiales/informatique-telecoms/cybersecurite',
    badge: 'Sécurité',
  },
  {
    icon: Cloud,
    title: 'Cloud & Data Centers',
    desc: 'Migration cloud (AWS, Azure), virtualisation, hébergement privé, salles serveurs et colocation.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    href: '/filiales/informatique-telecoms/solutions',
    badge: 'Cloud',
  },
  {
    icon: Code2,
    title: 'Développement logiciel',
    desc: 'Applications web & mobile sur mesure, ERP, intégrations API, portails clients et solutions digitales.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    href: '/filiales/informatique-telecoms/solutions',
    badge: 'Dev',
  },
  {
    icon: Building2,
    title: 'Smart Building & Domotique',
    desc: 'GTB, domotique industrielle, éclairage intelligent, gestion énergie et bâtiments connectés.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    href: '/filiales/informatique-telecoms/solutions',
    badge: 'Smart',
  },
];

const projects = [
  {
    title: 'Infrastructure réseau BNI',
    cat: 'Réseaux', location: 'Abidjan',
    desc: 'Déploiement réseau LAN/WAN + WiFi enterprise pour 12 agences bancaires.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80',
  },
  {
    title: 'Fibre optique Yopougon',
    cat: 'Télécoms', location: 'Abidjan, Yopougon',
    desc: '45 km de fibre optique déployés, backbone zone industrielle.',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80',
  },
  {
    title: 'SOC Ministère des Finances',
    cat: 'Cybersécurité', location: 'Abidjan, Plateau',
    desc: 'SOC managé 24/7, SIEM Splunk, 200+ équipements supervisés.',
    img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=700&q=80',
  },
];

const commitments = [
  { icon: Award, title: 'Certifications', desc: 'Cisco CCNP, Microsoft Azure, ISO 27001 audits.' },
  { icon: Clock, title: 'Réactivité', desc: 'GTI < 4h, astreinte 24/7 pour les infrastructures critiques.' },
  { icon: TrendingUp, title: 'Innovation', desc: 'Veille technologique permanente, R&D sur les nouvelles architectures.' },
  { icon: Users, title: 'Équipe certifiée', desc: '30+ ingénieurs certifiés sur les technologies leaders du marché.' },
];

const techStack = [
  { name: 'Cisco', cat: 'Réseau' }, { name: 'Fortinet', cat: 'Sécurité' },
  { name: 'Microsoft Azure', cat: 'Cloud' }, { name: 'VMware', cat: 'Virtualisation' },
  { name: 'Splunk', cat: 'SIEM' }, { name: 'Palo Alto', cat: 'Firewall' },
  { name: 'AWS', cat: 'Cloud' }, { name: 'Huawei', cat: 'Télécoms' },
  { name: 'CheckPoint', cat: 'Sécurité' }, { name: 'Veeam', cat: 'Backup' },
  { name: 'HPE', cat: 'Infra' }, { name: 'Dell EMC', cat: 'Storage' },
];

export default function InforHomeClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <div className="bg-[#0B1E3D] text-white">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        {/* Network Canvas */}
        <NetworkCanvas className="opacity-70" />

        {/* Radial gradient centre */}
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(11,30,61,0) 0%, rgba(11,30,61,0.7) 70%, rgba(11,30,61,1) 100%)' }}
        />
        {/* Gradient bas */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B1E3D] to-transparent" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 pt-24"
        >
          <div className="max-w-5xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/8 px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Systèmes actifs — 99.9% uptime</span>
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-5xl font-bold uppercase leading-[1.05] text-white md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Le digital au{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">service</span>
                <span className="absolute -inset-2 -z-0 rounded-lg bg-gold-500/8 blur-xl" />
              </span>
              <br />de votre{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-white/90 to-gold-200 bg-clip-text text-transparent">croissance</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-white/45"
            >
              Réseaux, cybersécurité, cloud, télécoms et développement logiciel —
              EL-BOMI IT connecte, protège et digitalise les organisations ivoiriennes.
            </motion.p>

            {/* Métriques inline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-6"
            >
              {[
                { icon: Terminal, v: '200+ projets' },
                { icon: Database, v: '99.9% uptime' },
                { icon: Lock, v: 'ISO 27001' },
              ].map((m) => (
                <div key={m.v} className="flex items-center gap-2 text-sm">
                  <m.icon className="h-4 w-4 text-gold-400/60" />
                  <span className="font-semibold text-white/55">{m.v}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/filiales/informatique-telecoms/solutions"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0B1E3D] transition-all hover:shadow-[0_0_35px_rgba(201,162,39,0.4)]"
              >
                <span className="relative flex items-center gap-2">
                  Nos solutions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="/filiales/informatique-telecoms/contact"
                className="group rounded-lg border border-white/10 px-7 py-3.5 text-sm font-semibold text-white/60 backdrop-blur-sm transition-all hover:border-gold-500/25 hover:text-white hover:bg-white/[0.03]"
              >
                <span className="flex items-center gap-2">
                  Demander un audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="h-5 w-5 text-gold-500/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS — MODULE DASHBOARD ─────────────────────── */}
      <section className="relative bg-[#060f1f] py-16">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(rgb(201 162 39) 1px, transparent 1px), linear-gradient(90deg, rgb(201 162 39) 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl border border-gold-500/10 bg-white/[0.02] p-5 transition-all hover:border-gold-500/25 hover:bg-white/[0.04]"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 h-6 w-6 border-r border-t border-gold-500/20 rounded-bl-none" />
                <div className="absolute bottom-0 left-0 h-6 w-6 border-l border-b border-gold-500/10" />
                <p className="font-heading text-3xl font-bold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium text-white/55">{s.label}</p>
                <p className="mt-0.5 text-xs text-white/20">{s.sub}</p>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS — MODULES ──────────────────────────── */}
      <section className="bg-[#0B1E3D] py-24">
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
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Modules</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">
                6 domaines d&apos;expertise
              </h2>
            </div>
            <Link href="/filiales/informatique-telecoms/solutions"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-400/60 hover:text-gold-400 transition-colors"
            >
              Toutes les solutions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-xl border border-gold-500/10 bg-white/[0.015] transition-all duration-400 hover:border-gold-500/30 hover:bg-white/[0.035]"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={s.img} alt={s.title} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/98 via-[#0B1E3D]/60 to-[#0B1E3D]/10" />
                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="rounded border border-gold-500/25 bg-[#0B1E3D]/80 px-2 py-0.5 font-heading text-[9px] font-bold uppercase tracking-widest text-gold-400/80 backdrop-blur-sm">
                      {s.badge}
                    </span>
                  </div>
                  {/* Corner scan effect */}
                  <div className="absolute top-3 left-3 h-4 w-4 border-l border-t border-gold-500/30 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-3 right-3 h-4 w-4 border-r border-b border-gold-500/30 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                {/* Contenu */}
                <div className="p-5">
                  <div className="mb-3 flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold-500/20 bg-gold-500/8 transition-all group-hover:bg-gold-500/15 group-hover:shadow-[0_0_12px_rgba(201,162,39,0.15)]">
                      <s.icon className="h-4 w-4 text-gold-400" />
                    </div>
                    <h3 className="font-heading text-sm font-bold uppercase text-white leading-snug">{s.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-white/35">{s.desc}</p>
                  <Link href={s.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold-400/50 transition-colors hover:text-gold-400"
                  >
                    En savoir plus <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                {/* Scan line bottom */}
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500/80 to-gold-300/50 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETS PHARES ───────────────────────────────── */}
      <section className="bg-[#060f1f] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Portfolio</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">Projets clés</h2>
            </div>
            <Link href="/filiales/informatique-telecoms/projets"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-400/55 hover:text-gold-400 transition-colors"
            >
              Voir tous <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-gold-500/10 transition-all hover:border-gold-500/25"
                style={{ minHeight: '280px' }}
              >
                <Image src={p.img} alt={p.title} fill
                  className="object-cover opacity-40 transition-all duration-700 group-hover:opacity-60 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f1f]/98 via-[#060f1f]/60 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,162,39,0.08) 0%, transparent 70%)' }}
                />
                {/* Corner brackets */}
                <div className="absolute top-4 left-4 h-5 w-5 border-l border-t border-gold-500/25" />
                <div className="absolute top-4 right-4 h-5 w-5 border-r border-t border-gold-500/25" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="mb-2 inline-flex w-fit rounded border border-gold-500/25 bg-gold-500/10 px-2 py-0.5 font-heading text-[9px] font-bold uppercase tracking-widest text-gold-400/80 backdrop-blur-sm">
                    {p.cat}
                  </span>
                  <h3 className="font-heading text-base font-bold uppercase text-white">{p.title}</h3>
                  <p className="mt-1.5 text-xs text-white/40 leading-relaxed">{p.desc}</p>
                  <p className="mt-2 text-[11px] text-gold-400/40">{p.location}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────── */}
      <section className="bg-[#0B1E3D] py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Technologies</span>
              <span className="h-px w-8 bg-gold-400" />
            </div>
            <h2 className="font-heading text-3xl font-bold uppercase text-white">Notre stack technologique</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group flex items-center gap-2 rounded-lg border border-gold-500/10 bg-white/[0.02] px-4 py-2 transition-all hover:border-gold-500/25 hover:bg-gold-500/[0.04] hover:shadow-[0_0_12px_rgba(201,162,39,0.08)]"
              >
                <span className="text-sm font-semibold text-white/55 transition-colors group-hover:text-white/80">{t.name}</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gold-400/40 group-hover:text-gold-400/70">{t.cat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CYBERSÉCURITÉ TEASER ─────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060f1f] py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #C9A227 1px, transparent 0)`, backgroundSize: '28px 28px' }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Sécurité</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">
                Votre sécurité,<br />
                <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">notre priorité</span>
              </h2>
              <p className="mt-6 leading-relaxed text-white/40">
                Face à des menaces cybernétiques en constante évolution, EL-BOMI IT déploie des solutions
                de cybersécurité complètes — de l&apos;audit au SOC managé 24/7.
              </p>
              <ul className="mt-7 space-y-3">
                {['Audit de sécurité & tests d\'intrusion', 'Firewall next-gen & SIEM', 'SOC managé 24/7', 'Vidéosurveillance IP & contrôle d\'accès'].map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <Lock className="h-4 w-4 shrink-0 text-gold-400/50" />
                    <span className="text-sm text-white/45">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/filiales/informatique-telecoms/cybersecurite"
                className="group mt-9 inline-flex items-center gap-2.5 rounded-lg border border-gold-500/20 bg-gold-500/8 px-6 py-3 text-sm font-semibold text-gold-300 transition-all hover:border-gold-400/35 hover:bg-gold-500/15 hover:shadow-[0_0_20px_rgba(201,162,39,0.12)]"
              >
                Découvrir notre offre sécurité <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl border border-gold-500/10" style={{ minHeight: '380px' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=900&q=85"
                alt="Cybersécurité EL-BOMI"
                fill className="object-cover opacity-50 transition-opacity hover:opacity-65"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3D]/60 to-transparent" />
              {/* Corner brackets */}
              <div className="absolute top-5 left-5 h-6 w-6 border-l-2 border-t-2 border-gold-500/35" />
              <div className="absolute top-5 right-5 h-6 w-6 border-r-2 border-t-2 border-gold-500/35" />
              <div className="absolute bottom-5 left-5 h-6 w-6 border-l-2 border-b-2 border-gold-500/35" />
              <div className="absolute bottom-5 right-5 h-6 w-6 border-r-2 border-b-2 border-gold-500/35" />
              {/* Status badge */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-lg border border-gold-500/20 bg-[#060f1f]/80 px-3 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-xs font-semibold text-white/60">SOC — Surveillance active</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENTS ──────────────────────────────────── */}
      <section className="bg-[#0B1E3D] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Pourquoi nous</span>
              <span className="h-px w-8 bg-gold-400" />
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-white">Nos engagements</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative rounded-xl border border-gold-500/10 bg-white/[0.015] p-6 transition-all hover:border-gold-500/25 hover:bg-white/[0.035]"
              >
                <div className="absolute top-3 right-3 h-4 w-4 border-r border-t border-gold-500/15 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/15 bg-gold-500/8 transition-all group-hover:bg-gold-500/15 group-hover:shadow-[0_0_12px_rgba(201,162,39,0.12)]">
                  <c.icon className="h-5 w-5 text-gold-400" />
                </div>
                <h3 className="mb-2 font-heading text-sm font-bold uppercase text-white">{c.title}</h3>
                <p className="text-xs leading-relaxed text-white/30">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060f1f]">
        {/* Network canvas light */}
        <div className="absolute inset-0 opacity-30">
          <NetworkCanvas />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[#060f1f]/70" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-400/40" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400/60">Passons à l&apos;action</span>
              <span className="h-px w-8 bg-gold-400/40" />
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl lg:text-6xl">
              Votre transformation<br />
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">digitale commence ici</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-white/40">
              Audit gratuit, devis sous 48h, accompagnement de A à Z.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/filiales/informatique-telecoms/contact"
                className="group rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0B1E3D] transition-all hover:shadow-[0_0_40px_rgba(201,162,39,0.4)]"
              >
                <span className="flex items-center gap-2">
                  Demander un audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link href="/"
                className="rounded-lg border border-white/10 px-8 py-4 text-sm font-semibold text-white/45 transition-all hover:border-white/20 hover:text-white"
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
