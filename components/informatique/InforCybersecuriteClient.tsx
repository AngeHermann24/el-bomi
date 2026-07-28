'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle2, ArrowRight, Activity } from 'lucide-react';
import NetworkCanvas from './NetworkCanvas';

const threats = [
  { label: 'Ransomware', pct: 87, color: 'from-red-500 to-red-400' },
  { label: 'Phishing', pct: 74, color: 'from-orange-500 to-orange-400' },
  { label: 'DDoS', pct: 61, color: 'from-yellow-500 to-amber-400' },
  { label: 'Intrusions', pct: 53, color: 'from-gold-500 to-gold-400' },
];

const services = [
  {
    icon: Shield,
    title: 'Audit & tests d\'intrusion',
    desc: 'Analyse de vulnérabilités, pentest interne et externe, rapport détaillé avec plan de remédiation.',
    items: ['Pentest réseau & web', 'Audit de configuration', 'Analyse de code source', 'Rapport RSSI'],
  },
  {
    icon: Lock,
    title: 'Firewall & protection périmétrique',
    desc: 'Déploiement de firewalls next-generation, segmentation réseau, IPS/IDS, VPN d\'entreprise.',
    items: ['Palo Alto / Fortinet', 'IPS/IDS & WAF', 'VPN site-à-site', 'Zero Trust Architecture'],
  },
  {
    icon: Eye,
    title: 'SOC managé 24/7',
    desc: 'Centre opérationnel de sécurité en surveillance continue. Détection, analyse et réponse aux incidents.',
    items: ['Monitoring 24h/24', 'SIEM Splunk/QRadar', 'Threat intelligence', 'Réponse aux incidents'],
  },
  {
    icon: Server,
    title: 'SIEM & gestion des logs',
    desc: 'Centralisation et corrélation des logs système. Détection comportementale et alertes en temps réel.',
    items: ['Collecte de logs', 'Corrélation d\'événements', 'Tableaux de bord', 'Conformité RGPD'],
  },
  {
    icon: AlertTriangle,
    title: 'Vidéosurveillance & contrôle d\'accès',
    desc: 'Systèmes CCTV IP HD, NVR/DVR, contrôle d\'accès biométrique et gestion des badges.',
    items: ['Caméras IP 4K', 'Reconnaissance faciale', 'Badges RFID', 'Interphonie IP'],
  },
  {
    icon: Activity,
    title: 'Plan de continuité (PCA/PRA)',
    desc: 'Élaboration et test des plans de continuité et de reprise d\'activité informatique.',
    items: ['Analyse d\'impact (BIA)', 'RTO/RPO définis', 'Sauvegardes offsite', 'Tests de reprise'],
  },
];

const stats = [
  { value: '< 15 min', label: 'Temps détection moyen', sub: 'sur incidents critiques' },
  { value: '99.9%', label: 'Disponibilité SOC', sub: '24/7/365' },
  { value: '50+', label: 'Entreprises protégées', sub: 'en production' },
  { value: '0', label: 'Breaches non détectés', sub: 'sur 3 ans' },
];

export default function InforCybersecuriteClient() {
  return (
    <div className="bg-[#0B1E3D] text-white">

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1920&q=85"
            alt="Cybersécurité EL-BOMI"
            fill priority className="object-cover opacity-30"
            sizes="100vw"
          />
          <NetworkCanvas className="opacity-35" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/97 via-[#0B1E3D]/55 to-[#0B1E3D]/20" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Sécurité IT</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-white md:text-6xl lg:text-7xl"
          >
            Cybersécurité &<br />
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">protection totale</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-white/45"
          >
            De l&apos;audit à la supervision 24/7 — nous sécurisons votre système d&apos;information.
          </motion.p>
          {/* Live status */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="text-xs font-semibold text-green-400/80">SOC opérationnel — surveillance active</span>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#060f1f] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group relative rounded-xl border border-gold-500/10 bg-white/[0.02] p-5 transition-all hover:border-gold-500/22"
              >
                <div className="absolute top-0 right-0 h-5 w-5 border-r border-t border-gold-500/15" />
                <p className="font-heading text-2xl font-bold text-gold-400 md:text-3xl">{s.value}</p>
                <p className="mt-1 text-sm text-white/50">{s.label}</p>
                <p className="mt-0.5 text-xs text-white/20">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menaces landscape */}
      <section className="bg-[#0B1E3D] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Threat landscape</span>
              </div>
              <h2 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">
                Les menaces sont réelles,<br />
                <span className="text-gold-400">nos défenses aussi</span>
              </h2>
              <p className="mt-5 text-white/40 leading-relaxed">
                En Afrique subsaharienne, les cyberattaques ont augmenté de 150% en 3 ans.
                EL-BOMI IT protège votre organisation avec une approche Zero Trust et une surveillance continue.
              </p>
              <div className="mt-8 space-y-4">
                {threats.map((t, i) => (
                  <motion.div key={t.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="text-white/50">{t.label}</span>
                      <span className="font-semibold text-gold-400/70">+{t.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${t.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${t.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl border border-gold-500/10" style={{ minHeight: '360px' }}
            >
              <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=85" alt="SOC" fill
                className="object-cover opacity-35" sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3D]/70 to-transparent" />
              <div className="absolute top-4 left-4 h-5 w-5 border-l-2 border-t-2 border-gold-500/30" />
              <div className="absolute bottom-4 right-4 h-5 w-5 border-r-2 border-b-2 border-gold-500/30" />
              {/* Simulated dashboard */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-2">
                {[
                  { label: 'Événements analysés/h', val: '24 381', ok: true },
                  { label: 'Alertes critiques', val: '0', ok: true },
                  { label: 'Équipements surveillés', val: '248', ok: true },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-lg border border-gold-500/10 bg-[#060f1f]/80 px-4 py-2.5 backdrop-blur-sm">
                    <span className="text-xs text-white/40">{row.label}</span>
                    <span className={`font-heading text-sm font-bold ${row.ok ? 'text-green-400' : 'text-red-400'}`}>{row.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services grille */}
      <section className="bg-[#060f1f] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Nos services</span>
              <span className="h-px w-8 bg-gold-400" />
            </div>
            <h2 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">Protection complète</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group relative rounded-xl border border-gold-500/10 bg-white/[0.018] p-6 transition-all hover:border-gold-500/25 hover:bg-white/[0.03]"
              >
                <div className="absolute top-3 right-3 h-4 w-4 border-r border-t border-gold-500/15 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/15 bg-gold-500/8 transition-all group-hover:bg-gold-500/15 group-hover:shadow-[0_0_12px_rgba(201,162,39,0.12)]">
                  <s.icon className="h-5 w-5 text-gold-400" />
                </div>
                <h3 className="mb-2 font-heading text-sm font-bold uppercase text-white leading-snug">{s.title}</h3>
                <p className="mb-4 text-xs leading-relaxed text-white/35">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-white/30">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-gold-500/45" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1E3D] py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">
              Auditez votre sécurité gratuitement
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/35">Notre équipe réalise un diagnostic de premier niveau sans engagement.</p>
            <Link href="/filiales/informatique-telecoms/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0B1E3D] transition-all hover:shadow-[0_0_35px_rgba(201,162,39,0.35)]"
            >
              Demander un audit <Shield className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
