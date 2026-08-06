'use client';

import Link from 'next/link';
import { ArrowRight, FileSearch, PenTool, HardHat, CheckCircle, BarChart3, Key } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Études & Analyse',
    duration: '1–4 semaines',
    description: 'Analyse du site, études géotechniques, topographie, évaluation des contraintes et faisabilité technique.',
    deliverables: ['Rapport géotechnique', 'Relevé topographique', 'Note de faisabilité'],
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Conception & Plans',
    duration: '2–8 semaines',
    description: 'Élaboration des plans d\'exécution, métrés, devis quantitatif et planning prévisionnel de chantier.',
    deliverables: ['Plans d\'exécution', 'DPGF / Devis', 'Planning Gantt'],
  },
  {
    number: '03',
    icon: HardHat,
    title: 'Préparation de chantier',
    duration: '1–2 semaines',
    description: 'Installation des bases vie, mobilisation des équipes et engins, approvisionnement en matériaux certifiés.',
    deliverables: ['Plan d\'installation', 'PPSPS', 'PV d\'ouverture'],
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Exécution & Suivi',
    duration: 'Variable',
    description: 'Réalisation des travaux par corps de métier avec contrôle qualité continu, réunions de chantier hebdomadaires et reporting.',
    deliverables: ['Comptes-rendus hebdomadaires', 'Fiches de contrôle', 'Photos de chantier'],
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Contrôle qualité',
    duration: 'En continu',
    description: 'Essais de matériaux, contrôle des ouvrages en cours d\'exécution, vérification de la conformité aux normes.',
    deliverables: ['PV d\'essais', 'Fiches de non-conformité', 'Levées de réserves'],
  },
  {
    number: '06',
    icon: Key,
    title: 'Réception & Livraison',
    duration: '1 semaine',
    description: 'Visite de réception contradictoire, levée des réserves, remise des DOE et garanties constructeur.',
    deliverables: ['PV de réception', 'DOE complet', 'Garanties & SAV'],
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="relative grid grid-cols-1 gap-6 md:grid-cols-[80px_1fr] items-start"
    >
      {/* Numéro + ligne verticale */}
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-rust-500/25 bg-rust-500/10">
          <step.icon className="h-7 w-7 text-rust-400" />
        </div>
        {index < steps.length - 1 && (
          <div className="mt-4 h-full w-px bg-gradient-to-b from-rust-500/30 to-transparent min-h-[40px]" />
        )}
      </div>

      {/* Contenu */}
      <div className="pb-10">
        <div className="mb-1 flex flex-wrap items-center gap-3">
          <span className="font-heading text-2xl font-bold text-rust-500/40">{step.number}</span>
          <h3 className="font-heading text-xl font-bold uppercase text-white">{step.title}</h3>
          <span className="ml-auto rounded-full border border-white/10 px-3 py-0.5 text-xs text-white/35">
            {step.duration}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-white/50">{step.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {step.deliverables.map((d) => (
            <span key={d} className="flex items-center gap-1.5 rounded-full border border-rust-500/15 bg-rust-500/5 px-3 py-1 text-xs text-rust-400/70">
              <span className="h-1 w-1 rounded-full bg-rust-500/50" />
              {d}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ConstructionMethodologieClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-anthracite-950 py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgb(255 255 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400"
          >
            Notre approche
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl font-bold uppercase text-white md:text-5xl"
          >
            Méthodologie de chantier
          </motion.h1>
          <div className="mt-3 h-0.5 w-16 bg-rust-500/50" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-2xl text-white/55"
          >
            De l&apos;étude de faisabilité à la remise des clés, chaque étape est rigoureusement
            planifiée et documentée pour garantir qualité, délais et sécurité.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-anthracite-900 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="border-t border-white/[0.06] bg-anthracite-950 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
              Nos engagements
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">
              La qualité à chaque étape
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { title: 'Délais garantis', desc: 'Planning Gantt détaillé avec jalons contractuels et pénalités de retard.' },
              { title: 'Traçabilité totale', desc: 'Comptes-rendus hebdomadaires, photos géolocalisées et rapports d\'avancement.' },
              { title: 'Normes certifiées', desc: 'Matériaux testés en laboratoire, béton conforme NF EN 206 et aciers certifiés.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-8"
              >
                <CheckCircle className="mb-4 h-7 w-7 text-rust-400" />
                <h3 className="mb-2 font-heading text-lg font-bold uppercase text-white">{item.title}</h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] bg-anthracite-900 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-white md:text-3xl">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="mt-4 text-white/50">
            Contactez-nous dès aujourd&apos;hui pour une analyse gratuite de votre projet.
          </p>
          <Link
            href="/filiales/construction/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-rust-500 px-8 py-4 font-semibold text-anthracite-900 transition-all hover:-translate-y-0.5 hover:bg-rust-400 hover:shadow-xl hover:shadow-rust-500/25"
          >
            Demander une étude gratuite
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
