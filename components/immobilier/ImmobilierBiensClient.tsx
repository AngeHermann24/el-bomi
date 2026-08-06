'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Building2, Home, Layers } from 'lucide-react';

const biens = [
  {
    type: 'Résidentiel',
    icon: Home,
    titre: 'Villa moderne — Cocody Riviera',
    lieu: 'Cocody, Abidjan',
    surface: '320 m²',
    statut: 'À vendre',
    desc: 'Villa contemporaine avec jardin, piscine et finitions haut de gamme dans un quartier résidentiel prisé.',
  },
  {
    type: 'Tertiaire',
    icon: Building2,
    titre: 'Plateau de bureaux — Plateau',
    lieu: 'Plateau, Abidjan',
    surface: '450 m²',
    statut: 'À louer',
    desc: 'Plateau open-space climatisé avec salle de réunion, fibre optique et parking sécurisé.',
  },
  {
    type: 'Foncier',
    icon: Layers,
    titre: 'Terrain viabilisé — Bingerville',
    lieu: 'Bingerville',
    surface: '5 000 m²',
    statut: 'À vendre',
    desc: 'Terrain plat viabilisé (eau, électricité, voirie), titre foncier, idéal pour promotion immobilière.',
  },
  {
    type: 'Résidentiel',
    icon: Home,
    titre: 'Appartement — Marcory Zone 4',
    lieu: 'Marcory, Abidjan',
    surface: '120 m²',
    statut: 'À louer',
    desc: 'Appartement 3 pièces meublé, balcon, sécurité 24/7, proche commerces et écoles.',
  },
  {
    type: 'Foncier',
    icon: Layers,
    titre: 'Parcelle — Angré 8ème Tranche',
    lieu: 'Cocody Angré, Abidjan',
    surface: '600 m²',
    statut: 'À vendre',
    desc: 'Parcelle bornée avec titre foncier, dans un quartier en développement, accès bitumé.',
  },
  {
    type: 'Tertiaire',
    icon: Building2,
    titre: 'Local commercial — Yopougon',
    lieu: 'Yopougon, Abidjan',
    surface: '200 m²',
    statut: 'À louer',
    desc: 'Local commercial sur axe passant, vitrine, grande hauteur sous plafond, idéal commerce ou entrepôt.',
  },
];

export default function ImmobilierBiensClient() {
  return (
    <div className="bg-[#1C1915] text-white">

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden pt-20">
        <Image
          src="/images/immobilier/hero.jpg"
          alt="Biens & Terrains"
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
            Biens & Terrains
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Notre <span className="text-[#DEC391] italic">portefeuille</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-white/45"
          >
            Découvrez notre sélection de biens immobiliers et terrains disponibles à la vente et à la location.
          </motion.p>
        </div>
      </section>

      {/* Biens grid */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {biens.map((b, i) => (
              <motion.div
                key={b.titre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/[0.05] bg-white/[0.01] p-6 transition-all duration-500 hover:border-[#C9A96E]/25 hover:bg-white/[0.02]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A96E]/15 bg-[#C9A96E]/[0.03]">
                    <b.icon className="h-5 w-5 text-[#DEC391]" strokeWidth={1.5} />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                    b.statut === 'À vendre'
                      ? 'border border-[#C9A96E]/30 bg-[#C9A96E]/[0.06] text-[#DEC391]'
                      : 'border border-white/10 bg-white/[0.03] text-white/50'
                  }`}>
                    {b.statut}
                  </span>
                </div>
                <h3 className="mb-2 font-heading text-base font-bold text-white">{b.titre}</h3>
                <div className="mb-3 flex items-center gap-1.5 text-[12px] text-white/40">
                  <MapPin className="h-3.5 w-3.5 text-[#C9A96E]/50" />
                  {b.lieu}
                </div>
                <p className="mb-4 text-[12px] leading-relaxed text-white/40">{b.desc}</p>
                <div className="flex items-center justify-between border-t border-white/[0.04] pt-4">
                  <span className="text-[11px] uppercase tracking-wider text-white/30">Surface</span>
                  <span className="text-sm font-semibold text-[#DEC391]">{b.surface}</span>
                </div>
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
            Vous cherchez un <span className="text-[#DEC391] italic">bien spécifique</span> ?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-white/45">
            Notre équipe vous aide à trouver le bien ou le terrain qui correspond à vos critères.
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
