'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Radar, Map, Layers, Camera, Satellite, FileCheck } from 'lucide-react';

const technologies = [
  {
    icon: Radar,
    title: 'Levés topographiques par drone',
    desc: 'Topographie aérienne haute précision pour la cartographie de terrains, le suivi de chantier et la modélisation 3D.',
    points: ['Orthophotoplan', 'Modèle numérique de terrain (MNT)', 'Suivi de chantier', 'Mesures de volumes'],
  },
  {
    icon: Map,
    title: 'SIG / GIS',
    desc: 'Système d\'information géographique pour l\'analyse, la gestion et la visualisation des données foncières.',
    points: ['Cartographie foncière', 'Analyse spatiale', 'Gestion de parcelles', 'Superposition de couches'],
  },
  {
    icon: Satellite,
    title: 'Imagerie satellite',
    desc: 'Imagerie satellite pour l\'analyse de site, le suivi environnemental et la planification urbaine.',
    points: ['Analyse de site', 'Suivi temporel', 'Cartographie de couverture', 'Planification urbaine'],
  },
  {
    icon: Camera,
    title: 'Modélisation 3D',
    desc: 'Reconstruction 3D de bâtiments et de terrains pour la visualisation et la planification de projets.',
    points: ['Modélisation de bâtiments', 'Visualisation de projet', 'Simulation d\'insertion', 'Rendu photoréaliste'],
  },
  {
    icon: Layers,
    title: 'Analyse foncière',
    desc: 'Analyse approfondie du foncier : titres, limites, contraintes et opportunités d\'aménagement.',
    points: ['Vérification de titres', 'Analyse des contraintes', 'Bornage numérique', 'Expertise foncière'],
  },
  {
    icon: FileCheck,
    title: 'Documentation & titres',
    desc: 'Gestion et numérisation de la documentation foncière, accompagnement dans l\'obtention des titres.',
    points: ['Numérisation de plans', 'Dossiers fonciers', 'Suivi de titres', 'Archivage numérique'],
  },
];

export default function ImmobilierTechnoClient() {
  return (
    <div className="bg-[#1C1915] text-white">

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-20">
        <Image
          src="/images/immobilier/hero.jpg"
          alt="Technologie GIS & Drone"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#161310]/80 via-[#1C1915]/50 to-[#1C1915]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/95 via-transparent to-transparent" />
        <div className="absolute inset-0 noise-bg opacity-30" />

        {/* Decorative circles */}
        <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full border border-[#C9A96E]/10" />
        <div className="absolute right-1/4 top-1/3 h-48 w-48 rounded-full border border-[#C9A96E]/[0.06]" />

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A96E]/80">
                <span className="h-px w-8 bg-[#C9A96E]/50" />
                Technologie & Innovation
              </span>
              <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Topographie par drone
                <br />
                <span className="text-[#DEC391] italic">& SIG/GIS</span>
              </h1>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/45">
                Nous mobilisons les technologies de pointe au service de l&apos;immobilier et du foncier.
                Levés topographiques par drone, cartographie SIG/GIS, modélisation 3D et analyse
                foncière pour des décisions précises et fiables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden justify-center lg:flex"
            >
              <div className="relative h-64 w-64 rounded-full border border-[#C9A96E]/20">
                <div className="absolute inset-4 rounded-full border border-[#C9A96E]/10" />
                <div className="absolute inset-8 rounded-full border border-[#C9A96E]/[0.06]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Radar className="h-16 w-16 text-[#DEC391]/40" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies grid */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.02] md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative bg-[#1C1915] p-8 transition-all duration-500 hover:bg-[#100E0B]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A96E]/15 bg-[#C9A96E]/[0.03] transition-all group-hover:border-[#C9A96E]/40 group-hover:bg-[#C9A96E]/[0.08]">
                  <t.icon className="h-6 w-6 text-[#DEC391]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold text-white">{t.title}</h3>
                <p className="mb-5 text-[13px] leading-relaxed text-white/45">{t.desc}</p>
                <ul className="space-y-2">
                  {t.points.map((pt) => (
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
            Un besoin <span className="text-[#DEC391] italic">technique</span> ?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-white/45">
            Notre équipe technique vous accompagne dans vos projets de topographie, cartographie et analyse foncière.
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
