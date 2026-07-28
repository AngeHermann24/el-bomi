'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Truck, Ship, Plane, Package, MapPin, Clock,
  ArrowRight, ChevronDown, Globe, BarChart3, Shield, Zap,
  Search, CheckCircle2,
} from 'lucide-react';
import MapRoutes from './MapRoutes';

const stats = [
  { value: '25+', label: 'Pays couverts', icon: Globe },
  { value: '50 000 T', label: 'Volume annuel traité', icon: Package },
  { value: '500+', label: 'Clients actifs', icon: BarChart3 },
  { value: '48h', label: 'Dédouanement express', icon: Clock },
];

const services = [
  {
    icon: Globe,
    title: 'Transit international & Douane',
    desc: 'Déclarations en douane, gestion des formalités import/export, tarification douanière, régimes suspensifs.',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    href: '/filiales/transit-logistique/services',
    badge: 'Douane',
  },
  {
    icon: Truck,
    title: 'Transport multimodal & Affrètement',
    desc: 'Camionnage BL/Full, affrètement maritime et aérien, transport terrestre CEDEAO, convois exceptionnels.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    href: '/filiales/transit-logistique/services',
    badge: 'Transport',
  },
  {
    icon: Package,
    title: 'Entreposage & Gestion des stocks',
    desc: 'Entrepôts sous douane et à quai, gestion des stocks WMS, manutention spécialisée, colisage.',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
    href: '/filiales/transit-logistique/services',
    badge: 'Warehouse',
  },
  {
    icon: MapPin,
    title: 'Distribution dernier kilomètre',
    desc: 'Livraison B2B et B2C, tournées optimisées, messagerie urbaine, livraison sous température dirigée.',
    img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80',
    href: '/filiales/transit-logistique/services',
    badge: 'Livraison',
  },
  {
    icon: Search,
    title: 'Tracking & Géolocalisation',
    desc: 'Suivi en temps réel des cargaisons, plateforme de tracking, alertes automatiques, rapports de statut.',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
    href: '/filiales/transit-logistique/suivi',
    badge: 'Tracking',
  },
  {
    icon: BarChart3,
    title: 'Logistique 4PL',
    desc: 'Externalisation totale de la chaîne logistique, pilotage des prestataires, optimisation coûts & délais.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    href: '/filiales/transit-logistique/services',
    badge: '4PL',
  },
];

const modes = [
  { icon: Ship,  label: 'Maritime', sub: 'Import · Export · Full · LCL' },
  { icon: Plane, label: 'Aérien',   sub: 'Express · Général · Dang.' },
  { icon: Truck, label: 'Routier',  sub: 'CEDEAO · Convois · BL' },
  { icon: Package,label:'Multimodal', sub: 'Combinaison optimale' },
];

const commitments = [
  { icon: Shield,    title: 'Fiabilité', desc: '15 ans d\'expertise douanière et logistique en Afrique.' },
  { icon: Clock,     title: 'Délais maîtrisés', desc: 'Engagements contractuels sur les délais de livraison.' },
  { icon: Zap,       title: 'Réactivité', desc: 'Équipe disponible 24h/24 pour vos urgences logistiques.' },
  { icon: Globe,     title: 'Couverture régionale', desc: '25+ pays couverts, réseau d\'agents agréés en CEDEAO.' },
];

const realisations = [
  {
    title: 'Opération minière SMDI',
    cat: 'Transport exceptionnel',
    desc: 'Convoi exceptionnel 180 tonnes pour équipements miniers — Abidjan vers Bouaké.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80',
  },
  {
    title: 'Distribution nationale Nestlé CI',
    cat: 'Distribution 4PL',
    desc: 'Gestion 4PL de la chaîne distribution — 200 points de livraison, 15 régions.',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80',
  },
  {
    title: 'Fret aérien pharmaceutique',
    cat: 'Aérien Express',
    desc: '48h Roissy-Abidjan, chaîne du froid, dédouanement prioritaire.',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&q=80',
  },
];

export default function TransitHomeClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="bg-[#0B1E3D] text-white">

      {/* ── HERO + CARTE ─────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        {/* Fond carte */}
        <div className="absolute inset-0 bg-[#060f1f]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(rgba(201,162,39,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.8) 1px, transparent 1px)`, backgroundSize: '48px 48px' }}
        />
        {/* Carte SVG animée — droite */}
        <div className="absolute inset-0 flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative w-full max-w-3xl opacity-60 md:opacity-75"
            style={{ minHeight: '600px' }}
          >
            <MapRoutes className="h-full w-full" />
          </motion.div>
        </div>

        {/* Gradient masque gauche */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060f1f]/98 via-[#060f1f]/75 to-[#060f1f]/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1E3D] to-transparent" />

        <motion.div style={{ opacity: heroOpacity, y: heroY }}
          className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-16"
        >
          <div className="max-w-2xl">
            {/* Badge live */}
            <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/8 px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">25 pays — flux en temps réel</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-5xl font-bold uppercase leading-[1.05] text-white md:text-6xl lg:text-7xl"
            >
              Votre cargo.<br />
              <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                Partout.<br />À temps.
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/45"
            >
              Transit douanier, transport multimodal, entreposage et distribution — EL-BOMI Transit connecte la Côte d&apos;Ivoire au monde.
            </motion.p>

            {/* Modes inline */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              {modes.map((m) => (
                <div key={m.label} className="flex items-center gap-2 rounded-lg border border-gold-500/12 bg-white/[0.02] px-3 py-1.5 backdrop-blur-sm">
                  <m.icon className="h-3.5 w-3.5 text-gold-400/65" />
                  <span className="text-xs font-semibold text-white/50">{m.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link href="/filiales/transit-logistique/services"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0B1E3D] transition-all hover:shadow-[0_0_35px_rgba(201,162,39,0.4)]"
              >
                <span className="flex items-center gap-2">
                  Nos services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link href="/filiales/transit-logistique/suivi"
                className="group rounded-lg border border-white/10 px-7 py-3.5 text-sm font-semibold text-white/55 transition-all hover:border-gold-500/22 hover:text-white hover:bg-white/[0.03]"
              >
                <span className="flex items-center gap-2">
                  Suivre ma cargaison <Search className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/15">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="h-5 w-5 text-gold-500/25" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="relative bg-[#060f1f] py-16">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: `linear-gradient(rgba(201,162,39,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.8) 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl border border-gold-500/10 bg-white/[0.02] p-5 text-center transition-all hover:border-gold-500/22"
              >
                <div className="absolute top-0 right-0 h-5 w-5 border-r border-t border-gold-500/15" />
                <s.icon className="mx-auto mb-2 h-6 w-6 text-gold-400/50" />
                <p className="font-heading text-3xl font-bold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">{s.value}</p>
                <p className="mt-1 text-sm text-white/45">{s.label}</p>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRILLE ──────────────────────────────── */}
      <section className="bg-[#0B1E3D] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Nos prestations</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">6 services logistiques</h2>
            </div>
            <Link href="/filiales/transit-logistique/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-400/55 hover:text-gold-400 transition-colors"
            >
              Voir tous <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-xl border border-gold-500/10 bg-white/[0.015] transition-all hover:border-gold-500/28 hover:bg-white/[0.03]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={s.img} alt={s.title} fill
                    className="object-cover opacity-55 transition-all duration-700 group-hover:opacity-75 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/97 via-[#0B1E3D]/50 to-[#0B1E3D]/5" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,162,39,0.09), transparent 70%)' }}
                  />
                  <div className="absolute top-3 right-3 rounded border border-gold-500/25 bg-[#0B1E3D]/80 px-2 py-0.5 font-heading text-[9px] font-bold uppercase tracking-widest text-gold-400/80 backdrop-blur-sm">
                    {s.badge}
                  </div>
                  {/* Route trace déco */}
                  <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]" viewBox="0 0 300 170">
                    <path d="M0 100 Q75 40 150 100 T300 100" stroke="#C9A227" strokeWidth="1" fill="none" strokeDasharray="5 4" />
                  </svg>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold-500/18 bg-gold-500/8 transition-all group-hover:bg-gold-500/15">
                      <s.icon className="h-4 w-4 text-gold-400" />
                    </div>
                    <h3 className="font-heading text-sm font-bold uppercase text-white leading-snug">{s.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-white/32">{s.desc}</p>
                  <Link href={s.href} className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold-400/45 hover:text-gold-400 transition-colors">
                    En savoir plus <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500/80 to-gold-300/50 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉALISATIONS ─────────────────────────────────── */}
      <section className="bg-[#060f1f] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Références</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">Opérations clés</h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {realisations.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-gold-500/10 transition-all hover:border-gold-500/22"
                style={{ minHeight: '260px' }}
              >
                <Image src={r.img} alt={r.title} fill
                  className="object-cover opacity-40 transition-all duration-700 group-hover:opacity-60 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f1f]/97 via-[#060f1f]/55 to-transparent" />
                <div className="absolute top-4 left-4 h-5 w-5 border-l border-t border-gold-500/22" />
                <div className="absolute top-4 right-4 h-5 w-5 border-r border-t border-gold-500/22" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="mb-1.5 inline-flex w-fit rounded border border-gold-500/22 bg-gold-500/10 px-2 py-0.5 font-heading text-[9px] font-bold uppercase tracking-widest text-gold-400/75">
                    {r.cat}
                  </span>
                  <h3 className="font-heading text-base font-bold uppercase text-white">{r.title}</h3>
                  <p className="mt-1.5 text-xs text-white/38 leading-relaxed">{r.desc}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODES DE TRANSPORT ───────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1E3D] py-20">
        {/* Route ondulée déco */}
        <svg className="pointer-events-none absolute inset-x-0 top-0 h-12 w-full opacity-[0.06]" viewBox="0 0 1440 50" preserveAspectRatio="none">
          <path d="M0 25 Q180 8 360 25 T720 25 T1080 25 T1440 25" stroke="#C9A227" strokeWidth="2" fill="none" strokeDasharray="10 6" />
        </svg>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Multimodal</span>
              <span className="h-px w-8 bg-gold-400" />
            </div>
            <h2 className="font-heading text-3xl font-bold uppercase text-white">Tous modes de transport</h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {[
              { icon: Ship,   label: 'Maritime', desc: 'FCL · LCL · Vrac · Ro-Ro', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80' },
              { icon: Plane,  label: 'Aérien',   desc: 'Express · Général · Dangereux', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&q=80' },
              { icon: Truck,  label: 'Routier',  desc: 'CEDEAO · Convoi · Frigo', img: 'https://images.unsplash.com/photo-1504222490345-c075b7aaeb3e?w=500&q=80' },
              { icon: Package,label: 'Ferroviaire', desc: 'Wagons · Conteneurs · Vrac', img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=500&q=80' },
            ].map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-gold-500/10 transition-all hover:border-gold-500/25"
                style={{ minHeight: '200px' }}
              >
                <Image src={m.img} alt={m.label} fill className="object-cover opacity-35 transition-all duration-500 group-hover:opacity-55 group-hover:scale-105" sizes="25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/96 via-[#0B1E3D]/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/20 bg-gold-500/10 transition-all group-hover:bg-gold-500/18">
                    <m.icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <h3 className="font-heading text-sm font-bold uppercase text-white">{m.label}</h3>
                  <p className="mt-1 text-xs text-white/35">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENTS ──────────────────────────────────── */}
      <section className="bg-[#060f1f] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Nos garanties</span>
              <span className="h-px w-8 bg-gold-400" />
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-white">Pourquoi EL-BOMI Transit ?</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group rounded-xl border border-gold-500/10 bg-white/[0.015] p-6 transition-all hover:border-gold-500/22 hover:bg-white/[0.03]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/15 bg-gold-500/8 transition-all group-hover:bg-gold-500/15">
                  <c.icon className="h-5 w-5 text-gold-400" />
                </div>
                <h3 className="mb-2 font-heading text-sm font-bold uppercase text-white">{c.title}</h3>
                <p className="text-xs leading-relaxed text-white/28">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACKING CTA ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1E3D] py-24">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80" alt="Port" fill className="object-cover opacity-10" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E3D]/90 via-[#0B1E3D]/70 to-[#0B1E3D]/95" />
        </div>
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-400/35" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400/55">Où est ma marchandise ?</span>
              <span className="h-px w-8 bg-gold-400/35" />
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">
              Suivi de cargaison<br />
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">en temps réel</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-white/38">
              Numéro de tracking, alertes SMS/email, statut à chaque étape — de l&apos;expédition à la livraison.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="text" placeholder="N° tracking ou BL..."
                className="flex-1 rounded-lg border border-gold-500/18 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none focus:border-gold-500/35 focus:shadow-[0_0_12px_rgba(201,162,39,0.08)]"
              />
              <Link href="/filiales/transit-logistique/suivi"
                className="flex-shrink-0 rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0B1E3D] transition-all hover:shadow-[0_0_28px_rgba(201,162,39,0.4)] flex items-center justify-center gap-2"
              >
                <Search className="h-4 w-4" /> Suivre
              </Link>
            </div>
            <div className="mx-auto mt-6 flex flex-wrap justify-center gap-4">
              {['Maritime','Aérien','Routier'].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-xs text-white/28">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold-400/40" /> {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA CONTACT ──────────────────────────────────── */}
      <section className="bg-[#060f1f] py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">Confiez-nous votre logistique</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/35">Devis personnalisé sous 24h. Disponible 24h/24 pour vos urgences.</p>
            <Link href="/filiales/transit-logistique/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0B1E3D] transition-all hover:shadow-[0_0_35px_rgba(201,162,39,0.38)]"
            >
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
