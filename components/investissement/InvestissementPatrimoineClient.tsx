'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Landmark, ScrollText, Building, Users, FileText, Scale, PiggyBank, Coins, Wallet, Briefcase, Gift } from 'lucide-react';
import GrowthCurve from './GrowthCurve';
import PremiumCounter from './PremiumCounter';

const services = [
  {
    icon: Landmark,
    title: 'Structuration patrimoniale',
    desc: 'Organisation de vos actifs pour optimiser transmission et fiscalité.',
    points: ['Audit patrimonial complet', 'Holding et structures d\'optimisation', 'Séparation des actifs professionnels et privés'],
  },
  {
    icon: ScrollText,
    title: 'Optimisation fiscale',
    desc: 'Maîtrise de l\'impôt et recours aux dispositifs de défiscalisation disponibles.',
    points: ['Analyse de la fiscalité actuelle', 'Dispositifs de défiscalisation', 'Suivi des évolutions législatives'],
  },
  {
    icon: Building,
    title: 'Immobilier patrimonial',
    desc: 'Sélection et structuration d\'investissements immobiliers pour diversifier votre patrimoine.',
    points: ['Sélection de biens', 'Montage juridique et fiscal', 'Gestion locative intégrée'],
  },
  {
    icon: Users,
    title: 'Transmission d\'entreprise',
    desc: 'Préparation et exécution de la cession ou transmission de votre société.',
    points: ['Pacte d\'actionnaires', 'Montage de cession', 'Optimisation de la plus-value'],
  },
  {
    icon: FileText,
    title: 'Donation & succession',
    desc: 'Accompagnement dans la planification et l\'exécution des successions.',
    points: ['Planification successorale', 'Donations et démembrement', 'Évaluation et partage'],
  },
  {
    icon: Scale,
    title: 'Protection juridique',
    desc: 'Mise en place de structures de protection patrimoniale et juridique.',
    points: ['Statuts et clauses sur-mesure', 'Protection du conjoint', 'Mandats de protection future'],
  },
];

const epargneSolutions = [
  { icon: PiggyBank, title: 'Épargne flexible', desc: 'Versements libres ou programmés, disponibilité à tout moment.' },
  { icon: Coins, title: 'Plan d\'épargne', desc: 'Construction progressive d\'un capital sur un horizon défini.' },
  { icon: Wallet, title: 'Diversification', desc: 'Répartition multi-supports selon votre profil de risque.' },
  { icon: Gift, title: 'Épargne retraite', desc: 'Constitution d\'un complément de revenus pour la retraite.' },
];

export default function InvestissementPatrimoineClient() {
  return (
    <div className="bg-[#0A1F17] text-white">

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071610] via-[#0A1F17] to-[#0A1F17]" />
        <div className="absolute inset-0 noise-bg opacity-30" />

        <div className="absolute inset-x-0 bottom-0 h-[50%]">
          <GrowthCurve variant="hero" className="h-full w-full" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B87333]/80"
          >
            <span className="h-px w-8 bg-[#B87333]/50" />
            Gestion de patrimoine & Épargne
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Structurer.
            <br />
            <span className="text-[#D4B896] italic">Transmettre.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-white/45"
          >
            Ingénierie patrimoniale, optimisation fiscale, épargne et transmission.
            Nous construisons avec vous une stratégie patrimoniale cohérente et durable.
          </motion.p>
        </div>
      </section>

      {/* Compteurs */}
      <section className="border-y border-[#B87333]/[0.08] bg-[#071610] py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
            <PremiumCounter value={200} suffix="+" label="Plans patrimoniaux actifs" />
            <PremiumCounter value={15} suffix="%" label="Économie fiscale moyenne" />
            <PremiumCounter value={8} suffix=" Mds" label="FCFA de patrimoine géré" />
          </div>
        </div>
      </section>

      {/* Services patrimoine */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B87333]/80">
              <span className="h-px w-8 bg-[#B87333]/50" />
              Ingénierie patrimoniale
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
              Une stratégie <span className="text-[#D4B896] italic">sur mesure</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.02] md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative bg-[#0A1F17] p-8 transition-all duration-500 hover:bg-[#0D2820]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#B87333]/15 bg-[#B87333]/[0.03] transition-all group-hover:border-[#B87333]/40 group-hover:bg-[#B87333]/[0.08]">
                  <s.icon className="h-6 w-6 text-[#D4B896]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold text-white">{s.title}</h3>
                <p className="mb-5 text-[13px] leading-relaxed text-white/45">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-[12px] text-white/55">
                      <span className="h-1 w-1 rounded-full bg-[#D4B896]" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 h-px w-0 bg-gradient-to-r from-[#B87333] to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions d'épargne */}
      <section className="bg-[#071610] py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B87333]/80">
              <span className="h-px w-8 bg-[#B87333]/50" />
              Épargne
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
              Construire un <span className="text-[#D4B896] italic">capital</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {epargneSolutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-white/[0.05] bg-white/[0.01] p-6 transition-all hover:border-[#B87333]/25"
              >
                <s.icon className="mb-4 h-6 w-6 text-[#D4B896]" strokeWidth={1.5} />
                <h3 className="mb-2 text-sm font-semibold text-white/90">{s.title}</h3>
                <p className="text-[12px] leading-relaxed text-white/40">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#071610]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B87333]/25 to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold text-white md:text-4xl">
            Sécurisez votre <span className="text-[#D4B896] italic">avenir</span>
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-white/45">
            Un audit patrimonial gratuit pour faire le point et définir vos priorités.
          </p>
          <Link
            href="/filiales/investissement-assurance/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#B87333] to-[#D4B896] px-8 py-4 text-sm font-semibold text-[#0A1F17] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#B87333]/25"
          >
            Prendre rendez-vous
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
