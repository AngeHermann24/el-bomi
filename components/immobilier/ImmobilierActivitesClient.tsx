'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Home, MapPin, FileCheck, Layers, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Promotion immobilière',
    desc: 'Développement de programmes résidentiels et tertiaires, de l\'étude de faisabilité à la livraison clé en main.',
    points: ['Études de faisabilité', 'Conception et architecte', 'Suivi de chantier', 'Commercialisation'],
  },
  {
    icon: Home,
    title: 'Gestion locative',
    desc: 'Gestion complète de votre patrimoine immobilier : recherche de locataires, encaissement des loyers, entretien.',
    points: ['Recherche et sélection de locataires', 'Encaissement et reddition de comptes', 'Entretien et maintenance', 'Syndic de copropriété'],
  },
  {
    icon: MapPin,
    title: 'Valorisation foncière',
    desc: 'Acquisition, aménagement et valorisation de terrains pour particuliers, investisseurs et promoteurs.',
    points: ['Acquisition foncière', 'Viabilisation de terrains', 'Lotissements', 'Commercialisation'],
  },
  {
    icon: FileCheck,
    title: 'Expertise immobilière',
    desc: 'Estimation, diagnostic et conseil pour sécuriser et optimiser vos décisions d\'investissement immobilier.',
    points: ['Estimation de biens', 'Diagnostics techniques', 'Conseil en investissement', 'Due diligence'],
  },
  {
    icon: Layers,
    title: 'Aménagement & lotissements',
    desc: 'Aménagement de parcelles, lotissements résidentiels et viabilisation de terrains à bâtir.',
    points: ['Découpage parcellaire', 'VRD et viabilisation', 'Bornage et topographie', 'Titre foncier'],
  },
  {
    icon: TrendingUp,
    title: 'Conseil patrimonial',
    desc: 'Structuration et gestion patrimoniale pour optimiser et transmettre votre patrimoine immobilier.',
    points: ['Audit patrimonial', 'Optimisation fiscale', 'Stratégie de transmission', 'Diversification'],
  },
];

export default function ImmobilierActivitesClient() {
  return (
    <div className="bg-[#1C1915] text-white">

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden pt-20">
        <Image
          src="/images/immobilier/hero.jpg"
          alt="Activités immobilières"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#161310]/80 via-[#1C1915]/50 to-[#1C1915]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/95 via-transparent to-transparent" />
        <div className="absolute inset-0 noise-bg opacity-30" />

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A96E]/80"
          >
            <span className="h-px w-8 bg-[#C9A96E]/50" />
            Nos activités
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Construire et
            <br />
            <span className="text-[#DEC391] italic">valoriser</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-white/45"
          >
            Promotion immobilière, gestion locative, valorisation foncière et conseil patrimonial.
            Une expertise complète au service de votre patrimoine.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.02] md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative bg-[#1C1915] p-8 transition-all duration-500 hover:bg-[#100E0B]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A96E]/15 bg-[#C9A96E]/[0.03] transition-all group-hover:border-[#C9A96E]/40 group-hover:bg-[#C9A96E]/[0.08]">
                  <s.icon className="h-6 w-6 text-[#DEC391]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold text-white">{s.title}</h3>
                <p className="mb-5 text-[13px] leading-relaxed text-white/45">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-[12px] text-white/55">
                      <span className="h-1 w-1 rounded-full bg-[#DEC391]" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 h-px w-0 bg-gradient-to-r from-[#C9A96E] to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#161310]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/25 to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold text-white md:text-4xl">
            Parlons de votre <span className="text-[#DEC391] italic">projet</span>
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-white/45">
            Un conseiller dédié pour analyser votre besoin et vous proposer une solution sur mesure.
          </p>
          <Link
            href="/filiales/immobilier/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#C9A96E] to-[#DEC391] px-8 py-4 text-sm font-semibold text-[#1C1915] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A96E]/25"
          >
            Nous contacter
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
