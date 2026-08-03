'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, PiggyBank, Landmark, BarChart3, Wallet, Briefcase, HeartPulse, Home, Car, FileCheck } from 'lucide-react';
import GrowthCurve from './GrowthCurve';
import ShieldCircle from './ShieldCircle';
import PremiumCounter from './PremiumCounter';

const activities = [
  { icon: TrendingUp, title: 'Gestion de portefeuille', desc: 'Gestion déléguée et conseil en investissement adapté à votre profil de risque.' },
  { icon: Shield, title: 'Courtage d\'assurance', desc: 'Assurance vie, dommages et santé — protection sur mesure pour vous et vos proches.' },
  { icon: PiggyBank, title: 'Épargne & placements', desc: 'Solutions d\'épargne flexibles pour constituer un capital à long terme.' },
  { icon: Landmark, title: 'Gestion de patrimoine', desc: 'Structuration, optimisation fiscale et transmission de votre patrimoine.' },
  { icon: Briefcase, title: 'Financement de projets', desc: 'Accompagnement et structuration financière de vos projets d\'envergure.' },
  { icon: BarChart3, title: 'Analyse de risques & actuariat', desc: 'Évaluation et modélisation des risques pour des décisions éclairées.' },
];

const assuranceCategories = [
  { icon: HeartPulse, title: 'Assurance vie', desc: 'Constituez un capital et protégez vos proches.' },
  { icon: Home, title: 'Assurance dommages', desc: 'Habitation, auto et biens immobiliers.' },
  { icon: Wallet, title: 'Assurance santé', desc: 'Couverture santé complète pour toute la famille.' },
  { icon: FileCheck, title: 'Assurance entreprises', desc: 'Protection des risques professionnels et RC.' },
];

export default function InvestissementHomeClient() {
  return (
    <div className="bg-[#0A1628] text-white">

      {/* Hero — courbe de croissance animée */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#070F1C] via-[#0A1628] to-[#0A1628]" />
        <div className="absolute inset-0 noise-bg opacity-30" />

        {/* Courbe de croissance dorée qui se dessine au scroll */}
        <div className="absolute inset-x-0 bottom-0 h-[40%]">
          <GrowthCurve variant="hero" className="h-full w-full" />
        </div>

        {/* Glow subtil */}
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#C9A227]/[0.04] blur-[140px]" />

        <div className="container relative z-10 mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/[0.03] px-5 py-2"
          >
            <span className="h-1 w-1 rounded-full bg-[#E8C766]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]/80">
              Filiale EL-BOMI HOLDING · Finance & Assurance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 max-w-4xl font-heading text-4xl font-bold uppercase leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            La croissance
            <br />
            <span className="text-[#E8C766]">protégée</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-12 max-w-2xl text-base leading-relaxed text-white/45"
          >
            Deux sensations complémentaires : l&apos;ascension de l&apos;investissement et la
            sécurité de l&apos;assurance. Nous accompagnons particuliers et entreprises dans la
            protection et la croissance de leur capital, avec l&apos;expertise d&apos;un groupe
            ivoirien de référence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/filiales/investissement-assurance/investissement"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#C9A227] to-[#E8C766] px-7 py-3.5 text-[13px] font-semibold text-[#0A1628] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A227]/20"
            >
              Nos solutions d&apos;investissement
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/filiales/investissement-assurance/simulateur"
              className="inline-flex items-center gap-2 rounded-lg border border-[#C9A227]/25 px-7 py-3.5 text-[13px] font-semibold text-[#E8C766] transition-all hover:bg-[#C9A227]/[0.06]"
            >
              Simuler mon épargne
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Chiffres clés — compteurs élégants */}
      <section className="border-y border-[#C9A227]/[0.06] bg-[#070F1C] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <PremiumCounter value={10} suffix=" Mds" label="FCFA d'actifs sous conseil" />
            <PremiumCounter value={500} suffix="+" label="Clients accompagnés" />
            <PremiumCounter value={12} suffix=" ans" label="D'expertise financière" />
            <PremiumCounter value={98} suffix="%" label="Clients satisfaits" />
          </div>
        </div>
      </section>

      {/* Activités en aperçu */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]/70">
              <span className="h-px w-8 bg-[#C9A227]/40" />
              Nos expertises
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
              Un accompagnement <span className="text-[#E8C766]">global</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Six métiers complémentaires pour couvrir l&apos;ensemble de vos besoins en investissement,
              assurance et gestion patrimoniale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.02] md:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative bg-[#0A1628] p-8 transition-all duration-500 hover:bg-[#0D1B30]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A227]/15 bg-[#C9A227]/[0.03] transition-all group-hover:border-[#C9A227]/40 group-hover:bg-[#C9A227]/[0.08]">
                  <a.icon className="h-6 w-6 text-[#E8C766]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold text-white">{a.title}</h3>
                <p className="text-[13px] leading-relaxed text-white/40">{a.desc}</p>
                <div className="mt-5 h-px w-0 bg-gradient-to-r from-[#C9A227] to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition visuelle : croissance → protection */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#080E1A] to-[#0A1628]" />

        {/* Courbe qui se transforme en bouclier */}
        <div className="absolute inset-x-0 top-0 h-32">
          <GrowthCurve variant="section" className="h-full w-full opacity-50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]/70">
                <span className="h-px w-8 bg-[#C9A227]/40" />
                Protection
              </span>
              <h2 className="mb-6 font-heading text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
                Ce qui grandit
                <br />
                <span className="text-[#E8C766]">doit être protégé</span>
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-white/40">
                L&apos;investissement et l&apos;assurance sont les deux faces d&apos;une même pièce.
                Nous concevons des stratégies qui font fructifier votre capital tout en le
                sécurisant contre les aléas de la vie.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {assuranceCategories.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl border border-white/[0.05] bg-white/[0.01] p-5 transition-all hover:border-[#C9A227]/20"
                  >
                    <a.icon className="mb-3 h-5 w-5 text-[#E8C766]" strokeWidth={1.5} />
                    <h3 className="mb-1 text-sm font-semibold text-white/90">{a.title}</h3>
                    <p className="text-[12px] text-white/35">{a.desc}</p>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/filiales/investissement-assurance/assurance"
                className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-[#E8C766] transition-colors hover:text-[#C9A227]"
              >
                Découvrir nos assurances
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 flex justify-center lg:order-2"
            >
              <ShieldCircle size={280} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#070F1C]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 font-heading text-3xl font-bold uppercase text-white md:text-4xl"
            >
              Un projet <span className="text-[#E8C766]">patrimonial</span> ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mb-10 text-sm leading-relaxed text-white/40"
            >
              Nos conseillers analysent votre situation et vous proposent une stratégie sur mesure,
              en toute confidentialité.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/filiales/investissement-assurance/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#C9A227] to-[#E8C766] px-8 py-4 text-sm font-semibold text-[#0A1628] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A227]/20"
              >
                Prendre rendez-vous avec un conseiller
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
