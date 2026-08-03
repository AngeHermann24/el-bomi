'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BarChart3, Briefcase, Coins, LineChart, DollarSign, Calculator, Shield } from 'lucide-react';
import GrowthCurve from './GrowthCurve';
import PremiumCounter from './PremiumCounter';

const services = [
  {
    icon: BarChart3,
    title: 'Gestion de portefeuille',
    desc: 'Gestion déléguée de portefeuilles avec suivi actif, rééquilibrage régulier et reporting transparent.',
    points: ['Gestion profilée (prudent, équilibré, dynamique)', 'Rééquilibrage tactique', 'Reporting trimestriel'],
  },
  {
    icon: TrendingUp,
    title: 'Conseil en investissement',
    desc: 'Analyse de vos objectifs, profil de risque et horizon de placement pour bâtir une stratégie adaptée.',
    points: ['Diagnostic patrimonial', 'Allocation d\'actifs sur mesure', 'Suivi et pilotage de la performance'],
  },
  {
    icon: Briefcase,
    title: 'Financement de projets',
    desc: 'Structuration financière et accompagnement de vos projets d\'envergure (immobilier, corporate, infrastructure).',
    points: ['Montage financier', 'Recherche de financement', 'Structuration de dette et capitaux'],
  },
  {
    icon: LineChart,
    title: 'Analyse de risques & actuariat',
    desc: 'Évaluation quantitative des risques, modélisation actuarielle et stress-testing de vos portefeuilles.',
    points: ['Modélisation des risques financiers', 'Stress-tests et scénarios', 'Conseil en couverture'],
  },
  {
    icon: Coins,
    title: 'Placements structurés',
    desc: 'Produits à capital garanti ou à performance conditionnelle, construits selon votre profil de risque.',
    points: ['Capital garanti', 'Performance conditionnelle', 'Solutions sur-mesure'],
  },
  {
    icon: DollarSign,
    title: 'Investissement responsable',
    desc: 'Solutions ESG et investissements à impact pour concilier rendement et valeurs.',
    points: ['Fonds ESG sélectionnés', 'Investissement à impact', 'Reporting extra-financier'],
  },
];

export default function InvestissementInvestissementClient() {
  return (
    <div className="bg-[#0A1628] text-white">

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#070F1C] via-[#0A1628] to-[#0A1628]" />
        <div className="absolute inset-0 noise-bg opacity-30" />

        <div className="absolute inset-x-0 bottom-0 h-[50%]">
          <GrowthCurve variant="hero" className="h-full w-full" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]/70"
          >
            <span className="h-px w-8 bg-[#C9A227]/40" />
            Investissement
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Faire fructifier
            <br />
            <span className="text-[#E8C766]">votre capital</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-white/40"
          >
            Gestion de portefeuille, conseil en investissement, financement de projets et analyse
            de risques. Une approche rigoureuse, des décisions éclairées.
          </motion.p>
        </div>
      </section>

      {/* Compteurs */}
      <section className="border-y border-[#C9A227]/[0.06] bg-[#070F1C] py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
            <PremiumCounter value={10} suffix=" Mds" label="FCFA d'actifs sous gestion" />
            <PremiumCounter value={7} suffix="%" label="Rendement moyen annualisé" />
            <PremiumCounter value={500} suffix="+" label="Portefeuilles pilotés" />
          </div>
        </div>
      </section>

      {/* Services en grille */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.02] md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative bg-[#0A1628] p-8 transition-all duration-500 hover:bg-[#0D1B30]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A227]/15 bg-[#C9A227]/[0.03] transition-all group-hover:border-[#C9A227]/40 group-hover:bg-[#C9A227]/[0.08]">
                  <s.icon className="h-6 w-6 text-[#E8C766]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold text-white">{s.title}</h3>
                <p className="mb-5 text-[13px] leading-relaxed text-white/40">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-[12px] text-white/50">
                      <span className="h-1 w-1 rounded-full bg-[#E8C766]" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 h-px w-0 bg-gradient-to-r from-[#C9A227] to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#070F1C]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold uppercase text-white md:text-4xl">
            Construisons votre <span className="text-[#E8C766]">stratégie</span>
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-white/40">
            Un conseiller dédié pour analyser votre situation et bâtir un plan d&apos;investissement sur mesure.
          </p>
          <Link
            href="/filiales/investissement-assurance/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#C9A227] to-[#E8C766] px-8 py-4 text-sm font-semibold text-[#0A1628] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A227]/20"
          >
            Prendre rendez-vous
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
