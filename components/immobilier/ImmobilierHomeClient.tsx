'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, MapPin, Layers, FileCheck, TrendingUp, Home, Map, Radar } from 'lucide-react';

const activities = [
  { icon: Building2, title: 'Promotion immobilière', desc: 'Développement de programmes résidentiels et tertiaires, de l\'étude à la livraison.' },
  { icon: Home, title: 'Gestion locative', desc: 'Gestion de patrimoine immobilier, syndic de copropriété et optimisation des revenus.' },
  { icon: MapPin, title: 'Valorisation foncière', desc: 'Acquisition, aménagement et valorisation de terrains pour particuliers et investisseurs.' },
  { icon: FileCheck, title: 'Expertise immobilière', desc: 'Estimation, diagnostic et conseil pour vos décisions d\'investissement immobilier.' },
  { icon: Layers, title: 'Lotissements & parcelles', desc: 'Aménagement de parcelles, lotissements et viabilisation de terrains.' },
  { icon: TrendingUp, title: 'Conseil patrimonial', desc: 'Structuration et gestion patrimoniale pour optimiser votre patrimoine immobilier.' },
];

const stats = [
  { value: '50+', label: 'Projets livrés' },
  { value: '1 200', label: 'Logements construits' },
  { value: '15', label: 'Ans d\'expérience' },
  { value: '300+', label: 'Parcelles aménagées' },
];

export default function ImmobilierHomeClient() {
  return (
    <div className="bg-[#1C1915] text-white">

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-20">
        <Image
          src="/images/immobilier/hero.jpg"
          alt="Immobilier & Patrimoine"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#161310]/70 via-[#1C1915]/40 to-[#1C1915]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/85 via-transparent to-transparent" />
        <div className="absolute inset-0 noise-bg opacity-30" />

        {/* Glow */}
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#C9A96E]/[0.04] blur-[140px]" />

        <div className="container relative z-10 mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 max-w-4xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Bâtir un patrimoine
            <br />
            <span className="text-[#DEC391] italic">qui dure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-12 max-w-2xl text-base leading-relaxed text-white/45"
          >
            Promotion immobilière, gestion locative, valorisation foncière et ingénierie patrimoniale.
            Nous accompagnons particuliers et entreprises dans la construction et la préservation
            de leur patrimoine immobilier, avec l&apos;expertise d&apos;un groupe ivoirien de référence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/filiales/immobilier/activites"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#C9A96E] to-[#DEC391] px-7 py-3.5 text-[13px] font-semibold text-[#1C1915] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A96E]/20"
            >
              Nos activités
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/filiales/immobilier/biens-terrains"
              className="inline-flex items-center gap-2 rounded-lg border border-[#C9A96E]/25 px-7 py-3.5 text-[13px] font-semibold text-[#DEC391] transition-all hover:bg-[#C9A96E]/[0.06]"
            >
              Biens & terrains disponibles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#C9A96E]/[0.08] bg-[#161310] py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/[0.03]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#DEC391]" />
                </div>
                <div className="font-heading text-3xl font-bold tracking-tight text-[#DEC391] lg:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/40">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A96E]/80">
              <span className="h-px w-8 bg-[#C9A96E]/50" />
              Nos expertises
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
              Un accompagnement <span className="text-[#DEC391] italic">global</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Six métiers complémentaires pour couvrir l&apos;ensemble de vos besoins immobiliers et patrimoniaux.
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
                className="group relative bg-[#1C1915] p-8 transition-all duration-500 hover:bg-[#241F1A]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A96E]/15 bg-[#C9A96E]/[0.03] transition-all group-hover:border-[#C9A96E]/40 group-hover:bg-[#C9A96E]/[0.08]">
                  <a.icon className="h-6 w-6 text-[#DEC391]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold text-white">{a.title}</h3>
                <p className="text-[13px] leading-relaxed text-white/45">{a.desc}</p>
                <div className="mt-5 h-px w-0 bg-gradient-to-r from-[#C9A96E] to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology highlight */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1915] via-[#100E0B] to-[#1C1915]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9A96E]/80">
                <span className="h-px w-8 bg-[#C9A96E]/50" />
                Technologie & Innovation
              </span>
              <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
                Topographie par drone
                <br />
                <span className="text-[#DEC391] italic">& SIG/GIS</span>
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-white/45">
                Nous mobilisons les technologies de pointe au service de l&apos;immobilier et du foncier :
                levés topographiques par drone, cartographie SIG/GIS, modélisation 3D et analyse
                foncière pour des décisions précises et fiables.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Radar, title: 'Levés par drone', desc: 'Topographie aérienne haute précision' },
                  { icon: Map, title: 'SIG / GIS', desc: 'Cartographie et analyse foncière' },
                ].map((t) => (
                  <div
                    key={t.title}
                    className="rounded-xl border border-white/[0.05] bg-white/[0.01] p-5 transition-all hover:border-[#C9A96E]/25"
                  >
                    <t.icon className="mb-3 h-5 w-5 text-[#DEC391]" strokeWidth={1.5} />
                    <h3 className="mb-1 text-sm font-semibold text-white/90">{t.title}</h3>
                    <p className="text-[12px] text-white/40">{t.desc}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/filiales/immobilier/technologie-gis-drone"
                className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-[#DEC391] transition-colors hover:text-[#C9A96E]"
              >
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
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

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#161310]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/25 to-transparent" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 font-heading text-3xl font-bold text-white md:text-4xl"
            >
              Un projet <span className="text-[#DEC391] italic">immobilier</span> ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mb-10 text-sm leading-relaxed text-white/45"
            >
              Nos conseillers analysent votre besoin et vous proposent une solution sur mesure,
              en toute confidentialité.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/filiales/immobilier/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#C9A96E] to-[#DEC391] px-8 py-4 text-sm font-semibold text-[#1C1915] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A96E]/25"
              >
                Prendre rendez-vous
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
