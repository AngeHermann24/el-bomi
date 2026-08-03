'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, HeartPulse, Home, Car, Umbrella, FileCheck } from 'lucide-react';

const assurances = [
  { icon: HeartPulse, title: 'Assurance vie', desc: 'Constituez un capital et protégez vos proches en cas de décès ou d\'invalidité.' },
  { icon: Shield, title: 'Prévoyance', desc: 'Maintien de revenus et protection financière face aux aléas de la vie.' },
  { icon: Home, title: 'Assurance habitation', desc: 'Couverture de votre résidence principale et secondaire.' },
  { icon: Car, title: 'Assurance auto', desc: 'Protection tous risques ou au tiers de vos véhicules.' },
  { icon: Umbrella, title: 'Responsabilité civile', desc: 'Protection contre les dommages causés à autrui.' },
  { icon: FileCheck, title: 'Assurance professionnelle', desc: 'Couverture des risques liés à votre activité professionnelle.' },
];

export default function InvestissementAssuranceClient() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
          alt="Assurance"
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
            Protection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-black uppercase leading-tight text-white md:text-5xl"
          >
            Solutions d&apos;<span className="text-gradient">assurance</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assurances.map((a, i) => (
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

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-navy-900" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 font-heading text-3xl font-black uppercase text-white md:text-4xl">
            Protégez ce qui <span className="text-gradient">compte</span>
          </h2>
          <Link
            href="/filiales/investissement-assurance/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-8 py-4 text-base font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold-500/30"
          >
            Demander un devis
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
