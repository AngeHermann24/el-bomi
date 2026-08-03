'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse, Home, Car, Wallet, FileCheck, Shield, Umbrella, Users, Stethoscope, Building2, AlertCircle } from 'lucide-react';
import ShieldCircle from './ShieldCircle';
import PremiumCounter from './PremiumCounter';

const assurances = [
  {
    icon: HeartPulse,
    title: 'Assurance vie',
    desc: 'Constituez un capital et protégez vos proches en cas de décès ou d\'invalidité.',
    points: ['Capital décès / invalidité', 'Épargne liée au contrat', 'Options de prévoyance sur mesure'],
  },
  {
    icon: Home,
    title: 'Assurance dommages',
    desc: 'Couverture de votre résidence, vos biens immobiliers et vos véhicules.',
    points: ['Habitation (MRH)', 'Auto tous risques / au tiers', 'Dépendances et piscines'],
  },
  {
    icon: Stethoscope,
    title: 'Assurance santé',
    desc: 'Couverture santé complète pour vous et votre famille, en complément du régime de base.',
    points: ['Frais médicaux et hospitalisation', 'Forfaits optique / dentaire', 'Assistance médicale 24/7'],
  },
  {
    icon: Building2,
    title: 'Assurance entreprises',
    desc: 'Protection des risques professionnels : RC, multirisques, flotte auto, cyber.',
    points: ['Responsabilité civile professionnelle', 'Multirisques entreprise', 'Flotte auto et biens d\'exploitation'],
  },
  {
    icon: Users,
    title: 'Assurance particuliers',
    desc: 'Solutions de protection individuelle adaptées à chaque étape de la vie.',
    points: ['Prévoyance individuelle', 'Accidents de la vie', 'Protection juridique'],
  },
  {
    icon: AlertCircle,
    title: 'Sinistres & assistance',
    desc: 'Accompagnement dans la déclaration et le traitement de vos sinistres.',
    points: ['Déclaration simplifiée', 'Suivi personnalisé', 'Expertise et indemnisation'],
  },
];

export default function InvestissementAssuranceClient() {
  return (
    <div className="bg-[#0A1628] text-white">

      {/* Hero avec bouclier */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#070F1C] via-[#0A1628] to-[#0A1628]" />
        <div className="absolute inset-0 noise-bg opacity-30" />

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]/70">
                <span className="h-px w-8 bg-[#C9A227]/40" />
                Assurance
              </span>
              <h1 className="font-heading text-4xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
                Protéger ce qui
                <br />
                <span className="text-[#E8C766]">compte</span>
              </h1>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/40">
                Assurance vie, dommages, santé et entreprises. Des solutions de protection
                sur mesure pour sécuriser votre patrimoine et vos proches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden justify-center lg:flex"
            >
              <ShieldCircle size={240} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compteurs */}
      <section className="border-y border-[#C9A227]/[0.06] bg-[#070F1C] py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
            <PremiumCounter value={1200} suffix="+" label="Sinistres traités / an" />
            <PremiumCounter value={48} suffix="h" label="Délai moyen d'indemnisation" />
            <PremiumCounter value={500} suffix="+" label="Contrats actifs" />
          </div>
        </div>
      </section>

      {/* Catégories d'assurance */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.02] md:grid-cols-2 lg:grid-cols-3">
            {assurances.map((a, i) => (
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
                <p className="mb-5 text-[13px] leading-relaxed text-white/40">{a.desc}</p>
                <ul className="space-y-2">
                  {a.points.map((pt) => (
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
            Demandez un <span className="text-[#E8C766]">devis</span>
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-white/40">
            Nos conseillers évaluent vos besoins et vous proposent une couverture adaptée, au meilleur tarif.
          </p>
          <Link
            href="/filiales/investissement-assurance/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#C9A227] to-[#E8C766] px-8 py-4 text-sm font-semibold text-[#0A1628] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A227]/20"
          >
            Demander un devis
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
