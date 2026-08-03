'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sprout, Fish, Package, FlaskConical, Droplets, Compass, ArrowRight, Leaf, Sun, TrendingUp } from 'lucide-react';
import SeasonScene from './SeasonScene';

const activities = [
  { icon: Sprout, title: 'Production agricole', desc: 'Plein champ et sous serre — céréales, maraîchage, cultures industrielles.', img: 'https://images.unsplash.com/photo-1574943340216-217332b55e64?w=800&q=85' },
  { icon: Fish, title: 'Élevage & Aquaculture', desc: 'Élevage bovin, avicole et pisciculture en bassins contrôlés.', img: 'https://images.unsplash.com/photo-15302672centercrop&w=800&q=85' },
  { icon: Package, title: 'Transformation', desc: 'Agro-industrie : conditionnement, séchage, emballage et commercialisation.', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85' },
  { icon: FlaskConical, title: 'Intrants agricoles', desc: 'Semences, engrais, produits phytosanitaires et amendements.', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=85' },
  { icon: Droplets, title: 'Hydraulique agricole', desc: 'Irrigation goutte-à-goutte, forages et réseaux d&apos;irrigation.', img: 'https://images.unsplash.com/photo-1464226184884-fa280c87e644?w=800&q=85' },
  { icon: Compass, title: 'Conseil & Ingénierie', desc: 'Études de faisabilité, aménagement de terres et pilotage de projets.', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=85' },
];

const stats = [
  { v: '1 200', l: 'Hectares exploités', icon: Leaf },
  { v: '6', l: 'Filières actives', icon: Sprout },
  { v: '350+', l: 'Emplois ruraux créés', icon: Sun },
  { v: '15K+', l: 'Tonnes / an', icon: TrendingUp },
];

export default function AgricultureHomeClient() {
  return (
    <div className="bg-[#0B1E3D] text-white">

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85" alt="EL-BOMI Agriculture" fill priority
          className="object-cover object-center" sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/97 via-[#0B1E3D]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3D]/80 to-transparent" />

        {/* Ruban sinueux */}
        <svg className="pointer-events-none absolute bottom-0 left-0 h-24 w-full opacity-[0.08]" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0 40 Q 180 10 360 40 T 720 40 T 1080 40 T 1440 40" stroke="#C9A227" strokeWidth="2" fill="none" strokeDasharray="10 8" />
        </svg>

        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">EL-BOMI Agriculture & Ressources Naturelles</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            La terre qui<br />
            <span className="text-[#C9A227]">croît et nourrit</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-white/55"
          >
            Production, élevage, transformation et ingénierie agricole. De la graine à la récolte, nous cultivons l&apos;avenir de l&apos;agriculture ivoirienne.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link href="/filiales/agriculture/activites"
              className="inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-7 py-3.5 text-sm font-bold text-[#0B1E3D] transition-all hover:bg-[#E8C766] hover:shadow-[0_8px_30px_rgba(201,162,39,0.2)]"
            >
              Nos activités <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/filiales/agriculture/exploitations"
              className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 px-7 py-3.5 text-sm font-semibold text-[#C9A227] transition-all hover:bg-[#C9A227]/10"
            >
              Nos exploitations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#060f1f] py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5">
                  <s.icon className="h-5 w-5 text-[#C9A227]" strokeWidth={1.8} />
                </div>
                <p className="font-heading text-3xl font-bold text-[#C9A227]">{s.v}</p>
                <p className="text-xs text-white/35">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scène saisonnière animée */}
      <section className="bg-[#0B1E3D] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">Notre signature</span>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">De la graine à la récolte</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/45">Faites défiler pour voir évoluer une saison agricole — terre, pousse, récolte.</p>
          </motion.div>
          <SeasonScene />
        </div>
      </section>

      {/* Activités en aperçu */}
      <section className="bg-[#060f1f] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">Nos métiers</span>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">Six filières agricoles</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-white/5 bg-[#0B1E3D] transition-all hover:border-[#C9A227]/20 hover:shadow-[0_12px_40px_rgba(201,162,39,0.06)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={a.img} alt={a.title} fill className="object-cover transition-all duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/90 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 backdrop-blur-sm">
                    <a.icon className="h-4 w-4 text-[#C9A227]" strokeWidth={1.8} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm text-white/40">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/filiales/agriculture/activites"
              className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/25 px-6 py-3 text-sm font-semibold text-[#C9A227] transition-all hover:bg-[#C9A227]/10"
            >
              Voir toutes nos activités <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section engagement */}
      <section className="bg-[#0B1E3D] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">Notre approche</span>
              <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
                Cultiver l&apos;avenir,<br />
                <span className="text-[#C9A227]">ancrer le développement</span>
              </h2>
              <p className="mt-6 text-white/50">
                Nous investissons dans des filières agricoles durables, créatrices d&apos;emplois ruraux et génératrices de valeur ajoutée locale. De la préparation des sols à la commercialisation, chaque étape est pilotée avec exigence.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { t: 'Agriculture responsable', d: 'Pratiques respectueuses des sols et de la biodiversité.' },
                  { t: 'Transfert de compétences', d: 'Formation des équipes locales et accompagnement des coopératives.' },
                  { t: 'Chaîne de valeur intégrée', d: 'De la production à la transformation, nous maîtrisons toute la filière.' },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/15">
                      <Leaf className="h-3 w-3 text-[#C9A227]" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="font-semibold text-sm text-white/90">{item.t}</p>
                      <p className="text-sm text-white/40">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image src="https://images.unsplash.com/photo-1464226184884-fa280c87e644?w=1200&q=85" alt="Exploitation agricole" fill
                className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#060f1f] py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold">Un projet agricole à développer ?</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/45">Notre équipe vous accompagne de l&apos;étude de faisabilité à la mise en exploitation.</p>
            <Link href="/filiales/agriculture/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-8 py-4 text-sm font-bold text-[#0B1E3D] transition-all hover:bg-[#E8C766] hover:shadow-[0_8px_30px_rgba(201,162,39,0.2)]"
            >
              Contactez-nous <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
