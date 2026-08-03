'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BarChart3, Briefcase, Coins, LineChart, DollarSign } from 'lucide-react';

const services = [
  { icon: TrendingUp, title: 'Conseil en investissement', desc: 'Analyse de vos objectifs, profil de risque et horizon pour bâtir une stratégie adaptée.' },
  { icon: BarChart3, title: 'Gestion d\'actifs', desc: 'Gestion déléguée de portefeuilles avec suivi actif et rééquilibrage régulier.' },
  { icon: Briefcase, title: 'Placements structurés', desc: 'Produits à capital garanti ou à performance conditionnelle selon votre profil.' },
  { icon: Coins, title: 'Diversification', desc: 'Répartition multi-classes d\'actifs : actions, obligations, monétaire, alternatives.' },
  { icon: LineChart, title: 'Suivi & reporting', desc: 'Pilotage de la performance et reporting détaillé en temps réel.' },
  { icon: DollarSign, title: 'Investissement responsable', desc: 'Solutions ESG et investissements à impact pour concilier rendement et valeurs.' },
];

export default function InvestissementInvestissementClient() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a4?w=1920&q=80"
          alt="Investissement"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/90 to-navy-900" />
        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400"
          >
            Nos solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-black uppercase leading-tight text-white md:text-5xl"
          >
            Conseil en <span className="text-gradient">investissement</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/40 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 transition-colors group-hover:border-gold-500/60 group-hover:bg-gold-500/20">
                  <s.icon className="h-7 w-7 text-gold-400" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-navy-900" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 font-heading text-3xl font-black uppercase text-white md:text-4xl">
            Construisons votre <span className="text-gradient">stratégie</span>
          </h2>
          <Link
            href="/filiales/investissement-assurance/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-8 py-4 text-base font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold-500/30"
          >
            Nous contacter
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
