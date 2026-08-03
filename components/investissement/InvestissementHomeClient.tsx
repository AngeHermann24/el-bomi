'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, PiggyBank, Landmark, BarChart3, Wallet } from 'lucide-react';

const activities = [
  { icon: TrendingUp, title: 'Conseil en investissement', desc: 'Stratégie et sélection de placements adaptés à vos objectifs.' },
  { icon: Shield, title: 'Assurance vie & prévoyance', desc: 'Protection de votre famille et de vos proches en toutes circonstances.' },
  { icon: PiggyBank, title: 'Épargne & produits financiers', desc: 'Solutions d\'épargne flexibles pour constituer un capital à long terme.' },
  { icon: Landmark, title: 'Ingénierie patrimoniale', desc: 'Structuration et optimisation de votre patrimoine.' },
  { icon: BarChart3, title: 'Gestion d\'actifs', desc: 'Gestion déléguée et diversification de vos portefeuilles.' },
  { icon: Wallet, title: 'Assurance dommages', desc: 'Couverture de vos biens et responsabilités civiles.' },
];

const stats = [
  { value: 500, suffix: '+', label: 'Clients accompagnés' },
  { value: 10, suffix: 'Mds', label: 'FCFA d\'actifs sous conseil' },
  { value: 12, suffix: '+', label: 'Années d\'expérience' },
  { value: 98, suffix: '%', label: 'Clients satisfaits' },
];

export default function InvestissementHomeClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
          alt="EL-BOMI Investissement & Assurance"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/90 to-navy-900" />

        <div className="container relative z-10 mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-500/30 bg-gold-500/5 px-5 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
              Filiale EL-BOMI GROUP
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 max-w-3xl font-heading text-4xl font-black uppercase leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            Protéger et faire
            <br />
            <span className="text-gradient">fructifier votre capital</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-10 max-w-2xl text-lg leading-relaxed text-white/65"
          >
            Conseil en investissement, gestion d&apos;actifs, produits d&apos;assurance et
            ingénierie patrimoniale. Nous accompagnons particuliers et entreprises dans la
            protection et la croissance de leur capital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/filiales/investissement-assurance/investissement"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold-500/30"
            >
              Nos solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/filiales/investissement-assurance/simulateur"
              className="inline-flex items-center gap-2 rounded-xl border border-gold-500/40 bg-gold-500/10 px-6 py-3 text-sm font-semibold text-gold-300 transition-all hover:bg-gold-500/20"
            >
              Simuler mon épargne
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/[0.06] bg-navy-950 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 font-heading text-3xl font-black text-gold-400 lg:text-4xl">
                  {s.value}<span className="text-gold-300">{s.suffix}</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Nos expertises
            </span>
            <h2 className="font-heading text-3xl font-black uppercase leading-tight text-white md:text-4xl">
              Un accompagnement <span className="text-gradient">global</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/40 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 transition-colors group-hover:border-gold-500/60 group-hover:bg-gold-500/20">
                  <a.icon className="h-7 w-7 text-gold-400" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-white">{a.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-navy-900" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-black uppercase text-white md:text-4xl">
              Un projet <span className="text-gradient">patrimonial</span> ?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/60">
              Nos conseillers analysent votre situation et vous proposent une stratégie sur mesure.
            </p>
            <Link
              href="/filiales/investissement-assurance/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-8 py-4 text-base font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold-500/30"
            >
              Prendre rendez-vous
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
