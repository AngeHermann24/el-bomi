'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import GoldRibbon from './GoldRibbon';

export default function GroupHero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-900">
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        alt="EL-BOMI HOLDING — Abidjan, Côte d'Ivoire"
        fill
        priority
        className="object-cover opacity-25"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/90 to-navy-900" />
      <div className="noise-bg absolute inset-0 opacity-40" />

      <div className="absolute inset-x-0 top-1/4 h-60">
        <GoldRibbon variant="arc" opacity={0.35} className="h-60" />
      </div>
      <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="container-max relative z-10 px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold-500/30 bg-gold-500/5 px-5 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
              Holding ivoirien
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 font-heading text-5xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Huit métiers,
            <br />
            <span className="text-gradient">une seule ambition</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-white/65"
          >
            EL-BOMI HOLDING est la société mère d&apos;EL-BOMI GROUP, un groupe intégré composé
            de six filiales sectorielles. Elle assure la gouvernance, définit les orientations
            stratégiques, pilote les investissements et coordonne les activités des filiales
            afin de garantir une croissance durable, une performance opérationnelle et la
            création de valeur pour l&apos;ensemble du Groupe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="#filiales" className="btn-gold group">
              Découvrir nos filiales
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="btn-outline-gold">
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#filiales"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-gold-400/60 transition-colors hover:text-gold-400"
        aria-label="Faire défiler vers les filiales"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
