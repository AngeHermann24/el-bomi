'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Radio, Globe, Sun, Activity, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import CircuitAnimation from './CircuitAnimation';

const solutions = [
  {
    icon: Zap,
    title: 'Électricité générale BT',
    subtitle: 'Installations basse tension',
    desc: "Conception et réalisation d'installations électriques BT pour les secteurs industriels, tertiaires et résidentiels. Tableaux électriques, câblages, mise en conformité NFC 15-100.",
    services: ['Tableaux généraux BT', 'Câblage industriel', 'Mise en conformité', 'Éclairage & prises', 'Groupes électrogènes'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    accent: 'from-gold-600/30 to-gold-400/10',
  },
  {
    icon: Radio,
    title: 'Réseaux BT/HTA',
    subtitle: 'Distribution & transport',
    desc: "Extension, réhabilitation et construction de lignes aériennes et souterraines BT et HTA. Postes de transformation, câbles MT/BT, équipements de manœuvre.",
    services: ['Lignes aériennes HTA', 'Câbles souterrains', 'Postes MT/BT', 'Protection & relayage', 'Télégestion réseaux'],
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=85',
    accent: 'from-amber-500/20 to-gold-500/10',
  },
  {
    icon: Globe,
    title: 'Électrification rurale',
    subtitle: 'Extension réseau & zones isolées',
    desc: "Programme d'électrification des zones rurales isolées en partenariat avec l'État ivoirien et les bailleurs internationaux. Extension MT/BT, raccordements, kits solaires autonomes.",
    services: ['Extension MT/BT rurale', 'Raccordements foyers', 'Kits solaires off-grid', 'Formation locale', 'Maintenance rurale'],
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=85',
    accent: 'from-green-500/20 to-gold-500/10',
  },
  {
    icon: Sun,
    title: 'Solaire photovoltaïque',
    subtitle: 'Énergie propre & renouvelable',
    desc: "Conception et installation de centrales solaires, systèmes hybrides et kits isolés. Du dimensionnement à la mise en service, en passant par l'étude d'ombrage et le suivi de production.",
    services: ['Centrales solaires', 'Systèmes hybrides', 'Onduleurs & batteries', "Étude d'ombrage", 'Supervision de production'],
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=900&q=85',
    accent: 'from-yellow-500/20 to-gold-400/10',
  },
  {
    icon: Activity,
    title: 'Automatismes & supervision',
    subtitle: 'Industrie 4.0 & SCADA',
    desc: "Intégration d'automates industriels (API), systèmes de supervision SCADA, télégestion de réseaux électriques. Optimisation des process industriels et monitoring en temps réel.",
    services: ['Automates industriels', 'SCADA & HMI', 'Télégestion réseaux', 'Variateurs de vitesse', 'Maintenance prédictive'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85',
    accent: 'from-cyan-500/20 to-gold-500/10',
  },
  {
    icon: Wrench,
    title: 'Maintenance HTB/HTA',
    subtitle: 'Fiabilité & continuité de service',
    desc: "Service de maintenance préventive, prédictive et curative des infrastructures haute tension. Astreinte 24h/24, diagnostic thermographique, tests et mesures sur ouvrages HTA/HTB.",
    services: ['Maintenance préventive', 'Astreinte 24h/24', 'Thermographie IR', 'Essais & mesures HT', 'Remplacement équipements'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85',
    accent: 'from-red-500/15 to-gold-500/10',
  },
];

export default function EnergieSolutionsClient() {
  return (
    <div className="bg-[#0A1628] text-white">

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=85"
          alt="Solutions énergie EL-BOMI"
          fill priority className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/97 via-[#0A1628]/60 to-[#0A1628]/20" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgb(201 162 39) 1px, transparent 1px), linear-gradient(90deg, rgb(201 162 39) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Domaines d&apos;expertise</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-white md:text-6xl lg:text-7xl"
          >
            Nos solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-white/50"
          >
            6 pôles d&apos;expertise pour couvrir l&apos;ensemble de la chaîne électrique.
          </motion.p>
        </div>
      </section>

      {/* Séparateur circuit */}
      <div className="relative overflow-hidden bg-[#060e1c] py-5">
        <CircuitAnimation className="opacity-50 max-w-6xl mx-auto" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060e1c] via-transparent to-[#060e1c]" />
      </div>

      {/* Solutions — alternance image/texte */}
      <section className="bg-[#0A1628] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded-2xl ${i % 2 === 1 ? 'lg:order-2' : ''}`} style={{ minHeight: '360px' }}>
                <Image src={s.img} alt={s.title} fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 to-transparent" />
                {/* Badge icône */}
                <div className="absolute top-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/30 bg-[#0A1628]/80 backdrop-blur-sm shadow-[0_0_20px_rgba(201,162,39,0.15)]">
                  <s.icon className="h-6 w-6 text-gold-400" />
                </div>
              </div>

              {/* Texte */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400/70">{s.subtitle}</span>
                <h2 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">{s.title}</h2>
                <div className="mt-3 h-px w-12 bg-gradient-to-r from-gold-500 to-transparent" />
                <p className="mt-5 leading-relaxed text-white/45">{s.desc}</p>
                <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {s.services.map((sv) => (
                    <li key={sv} className="flex items-center gap-2.5 text-sm text-white/50">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-500/60" />
                      {sv}
                    </li>
                  ))}
                </ul>
                <Link href="/filiales/energie/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/8 px-6 py-3 text-sm font-semibold text-gold-300 transition-all hover:border-gold-400/40 hover:bg-gold-500/15 hover:shadow-[0_0_20px_rgba(201,162,39,0.12)]"
                >
                  Demander un devis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#060e1c] py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-400/50" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400/60">Votre projet</span>
              <span className="h-px w-8 bg-gold-400/50" />
            </div>
            <h2 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">
              Discutons de votre besoin
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/40">
              Étude gratuite, devis détaillé sous 48h.
            </p>
            <Link href="/filiales/energie/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0A1628] transition-all hover:shadow-[0_0_35px_rgba(201,162,39,0.4)]"
            >
              Contacter notre équipe <Zap className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
