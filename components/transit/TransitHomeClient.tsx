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
    img: '/images/transit-port.jpg',
    href: '/filiales/transit-logistique/services',
    badge: 'Douane',
  },
  {
    icon: Truck,
    title: 'Transport multimodal & Affrètement',
    desc: 'Camionnage BL/Full, affrètement maritime et aérien, transport terrestre CEDEAO, convois exceptionnels.',
    img: '/images/transit-services.jpg',
    href: '/filiales/transit-logistique/services',
    badge: 'Transport',
  },
  {
    icon: Package,
    title: 'Entreposage & Gestion des stocks',
    desc: 'Entrepôts sous douane et à quai, gestion des stocks WMS, manutention spécialisée, colisage.',
    img: '/images/transit-port.jpg',
    href: '/filiales/transit-logistique/services',
    badge: 'Warehouse',
  },
  {
    icon: MapPin,
    title: 'Distribution dernier kilomètre',
    desc: 'Livraison B2B et B2C, tournées optimisées, messagerie urbaine, livraison sous température dirigée.',
    img: '/images/transit-services.jpg',
    href: '/filiales/transit-logistique/services',
    badge: 'Livraison',
  },
  {
    icon: Search,
    title: 'Tracking & Géolocalisation',
    desc: 'Suivi en temps réel des cargaisons, plateforme de tracking, alertes automatiques, rapports de statut.',
    img: '/images/transit-port.jpg',
    href: '/filiales/transit-logistique/suivi',
    badge: 'Tracking',
  },
  {
    icon: BarChart3,
    title: 'Logistique 4PL',
    desc: 'Externalisation totale de la chaîne logistique, pilotage des prestataires, optimisation coûts & délais.',
    img: '/images/unsplash/photo-1454165804606-c3d57bc86b40.jpg',
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
    img: '/images/transit-services.jpg',
  },
  {
    title: 'Distribution nationale Nestlé CI',
    cat: 'Distribution 4PL',
    desc: 'Gestion 4PL de la chaîne distribution — 200 points de livraison, 15 régions.',
    img: '/images/transit-services.jpg',
  },
  {
    title: 'Fret aérien pharmaceutique',
    cat: 'Aérien Express',
    desc: '48h Roissy-Abidjan, chaîne du froid, dédouanement prioritaire.',
    img: '/images/transit-port.jpg',
  },
];

export default function TransitHomeClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="bg-[#F7F5F0] text-navy-900">

      {/* ── HERO + CARTE ─────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center bg-white">
        {/* Carte SVG animée — droite */}
        <div className="absolute inset-0 flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative w-full max-w-3xl opacity-90 md:opacity-100"
            style={{ minHeight: '600px' }}
          >
            <MapRoutes className="h-full w-full" />
          </motion.div>
        </div>

        {/* Gradient masque gauche */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7F5F0] to-transparent" />

        <motion.div style={{ opacity: heroOpacity, y: heroY }}
          className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-16"
        >
          <div className="max-w-2xl">
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-5xl font-bold uppercase leading-[1.05] text-navy-900 md:text-6xl lg:text-7xl"
            >
              Votre cargo.<br />
              <span className="bg-gradient-to-r from-[#E85D04] via-[#F77F00] to-[#E85D04] bg-clip-text text-transparent">
                Partout.<br />À temps.
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-navy-900/50"
            >
              Transit douanier, transport multimodal, entreposage et distribution — EL-BOMI Transit connecte la Côte d&apos;Ivoire au monde.
            </motion.p>

            {/* Modes inline */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              {modes.map((m) => (
                <div key={m.label} className="flex items-center gap-2 rounded-lg border border-navy-900/10 bg-white px-3 py-1.5 shadow-sm">
                  <m.icon className="h-3.5 w-3.5 text-[#E85D04]/70" />
                  <span className="text-xs font-semibold text-navy-900/60">{m.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link href="/filiales/transit-logistique/services"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#E85D04] to-[#F77F00] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_35px_rgba(232,93,4,0.3)]"
              >
                <span className="flex items-center gap-2">
                  Nos services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link href="/filiales/transit-logistique/suivi"
                className="group rounded-lg border border-navy-900/12 bg-white px-7 py-3.5 text-sm font-semibold text-navy-900/60 transition-all hover:border-[#0D7377]/30 hover:text-navy-900 hover:shadow-md"
              >
                <span className="flex items-center gap-2">
                  Suivre ma cargaison <Search className="h-4 w-4 text-[#0D7377]" />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-navy-900/25">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="h-5 w-5 text-[#E85D04]/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="relative bg-[#EDE9E0] py-10 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(11,30,61,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(11,30,61,0.8) 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl border border-navy-900/8 bg-white p-5 text-center shadow-sm transition-all hover:border-[#E85D04]/25 hover:shadow-md"
              >
                <div className="absolute top-0 right-0 h-5 w-5 border-r border-t border-[#E85D04]/20" />
                <s.icon className="mx-auto mb-2 h-6 w-6 text-[#E85D04]/60" />
                <p className="font-heading text-3xl font-bold text-[#E85D04]">{s.value}</p>
                <p className="mt-1 text-sm text-navy-900/55">{s.label}</p>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#E85D04] to-[#0D7377] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRILLE ──────────────────────────────── */}
      <section className="bg-[#F7F5F0] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#E85D04]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E85D04]">Nos prestations</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-navy-900 md:text-5xl">6 services logistiques</h2>
            </div>
            <Link href="/filiales/transit-logistique/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0D7377] hover:text-[#0D7377]/80 transition-colors"
            >
              Voir tous <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-xl border border-navy-900/8 bg-white shadow-sm transition-all hover:border-[#E85D04]/25 hover:shadow-md"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={s.img} alt={s.title} fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/10 to-transparent" />
                  <div className="absolute top-3 right-3 rounded border border-white/40 bg-white/90 px-2 py-0.5 font-heading text-[9px] font-bold uppercase tracking-widest text-[#E85D04] backdrop-blur-sm">
                    {s.badge}
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E85D04]/20 bg-[#E85D04]/8 transition-all group-hover:bg-[#E85D04]/15">
                      <s.icon className="h-4 w-4 text-[#E85D04]" />
                    </div>
                    <h3 className="font-heading text-sm font-bold uppercase text-navy-900 leading-snug">{s.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-navy-900/45">{s.desc}</p>
                  <Link href={s.href} className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0D7377] hover:text-[#0D7377]/80 transition-colors">
                    En savoir plus <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#E85D04] to-[#0D7377] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉALISATIONS ─────────────────────────────────── */}
      <section className="bg-[#EDE9E0] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#E85D04]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E85D04]">Références</span>
              </div>
              <h2 className="font-heading text-4xl font-bold uppercase text-navy-900 md:text-5xl">Opérations clés</h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {realisations.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-navy-900/8 bg-white shadow-sm transition-all hover:shadow-md"
                style={{ minHeight: '260px' }}
              >
                <Image src={r.img} alt={r.title} fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/30 to-transparent" />
                <div className="absolute top-4 left-4 h-5 w-5 border-l border-t border-white/30" />
                <div className="absolute top-4 right-4 h-5 w-5 border-r border-t border-white/30" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="mb-1.5 inline-flex w-fit rounded border border-[#E85D04]/30 bg-[#E85D04]/15 px-2 py-0.5 font-heading text-[9px] font-bold uppercase tracking-widest text-white">
                    {r.cat}
                  </span>
                  <h3 className="font-heading text-base font-bold uppercase text-white">{r.title}</h3>
                  <p className="mt-1.5 text-xs text-white/70 leading-relaxed">{r.desc}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#E85D04] to-[#0D7377] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODES DE TRANSPORT ───────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F7F5F0] py-12 sm:py-20">
        {/* Route ondulée déco */}
        <svg className="pointer-events-none absolute inset-x-0 top-0 h-12 w-full opacity-[0.12]" viewBox="0 0 1440 50" preserveAspectRatio="none">
          <path d="M0 25 Q180 8 360 25 T720 25 T1080 25 T1440 25" stroke="#E85D04" strokeWidth="2" fill="none" strokeDasharray="10 6" />
        </svg>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#E85D04]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E85D04]">Multimodal</span>
              <span className="h-px w-8 bg-[#E85D04]" />
            </div>
            <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">Tous modes de transport</h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {[
              { icon: Ship,   label: 'Maritime', desc: 'FCL · LCL · Vrac · Ro-Ro', img: '/images/energie-projets.jpg' },
              { icon: Plane,  label: 'Aérien',   desc: 'Express · Général · Dangereux', img: '/images/transit-services.jpg' },
              { icon: Truck,  label: 'Routier',  desc: 'CEDEAO · Convoi · Frigo', img: '/images/transit-port.jpg' },
              { icon: Package,label: 'Ferroviaire', desc: 'Wagons · Conteneurs · Vrac', img: '/images/transit-services.jpg' },
            ].map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-navy-900/8 bg-white shadow-sm transition-all hover:shadow-md"
                style={{ minHeight: '200px' }}
              >
                <Image src={m.img} alt={m.label} fill className="object-cover transition-all duration-500 group-hover:scale-105" sizes="25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm transition-all group-hover:bg-white/30">
                    <m.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-heading text-sm font-bold uppercase text-white">{m.label}</h3>
                  <p className="mt-1 text-xs text-white/70">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENTS ──────────────────────────────────── */}
      <section className="bg-[#EDE9E0] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#E85D04]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E85D04]">Nos garanties</span>
              <span className="h-px w-8 bg-[#E85D04]" />
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-navy-900">Pourquoi EL-BOMI Transit ?</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group rounded-xl border border-navy-900/8 bg-white p-6 shadow-sm transition-all hover:border-[#E85D04]/25 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#E85D04]/20 bg-[#E85D04]/8 transition-all group-hover:bg-[#E85D04]/15">
                  <c.icon className="h-5 w-5 text-[#E85D04]" />
                </div>
                <h3 className="mb-2 font-heading text-sm font-bold uppercase text-navy-900">{c.title}</h3>
                <p className="text-xs leading-relaxed text-navy-900/45">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACKING CTA ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F7F5F0] py-24">
        <div className="absolute inset-0">
          <Image src="/images/transit-port.jpg" alt="Port" fill className="object-cover opacity-15" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5F0]/85 via-[#F7F5F0]/75 to-[#F7F5F0]/90" />
        </div>
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#E85D04]/50" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E85D04]">Où est ma marchandise ?</span>
              <span className="h-px w-8 bg-[#E85D04]/50" />
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-navy-900 md:text-5xl">
              Suivi de cargaison<br />
              <span className="bg-gradient-to-r from-[#E85D04] to-[#F77F00] bg-clip-text text-transparent">en temps réel</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-navy-900/45">
              Numéro de tracking, alertes SMS/email, statut à chaque étape — de l&apos;expédition à la livraison.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="text" placeholder="N° tracking ou BL..."
                className="flex-1 rounded-lg border border-navy-900/12 bg-white px-4 py-3.5 text-sm text-navy-900 placeholder-navy-900/25 outline-none focus:border-[#E85D04]/40 focus:shadow-[0_0_12px_rgba(232,93,4,0.08)]"
              />
              <Link href="/filiales/transit-logistique/suivi"
                className="flex-shrink-0 rounded-lg bg-gradient-to-r from-[#E85D04] to-[#F77F00] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_28px_rgba(232,93,4,0.3)] flex items-center justify-center gap-2"
              >
                <Search className="h-4 w-4" /> Suivre
              </Link>
            </div>
            <div className="mx-auto mt-6 flex flex-wrap justify-center gap-4">
              {['Maritime','Aérien','Routier'].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-xs text-navy-900/40">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0D7377]/60" /> {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA CONTACT ──────────────────────────────────── */}
      <section className="bg-[#EDE9E0] py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold uppercase text-navy-900 md:text-4xl">Confiez-nous votre logistique</h2>
            <p className="mx-auto mt-4 max-w-lg text-navy-900/45">Devis personnalisé sous 24h. Disponible 24h/24 pour vos urgences.</p>
            <Link href="/filiales/transit-logistique/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#E85D04] to-[#F77F00] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_35px_rgba(232,93,4,0.3)]"
            >
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
