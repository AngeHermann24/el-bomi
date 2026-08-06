'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Ship, Plane, MapPin } from 'lucide-react';
import MapRoutes from './MapRoutes';

const countries = [
  { region: 'Afrique de l\'Ouest', pays: ['Côte d\'Ivoire', 'Sénégal', 'Mali', 'Burkina Faso', 'Ghana', 'Togo', 'Bénin', 'Niger', 'Nigeria', 'Guinée'] },
  { region: 'Afrique Centrale', pays: ['Cameroun', 'Gabon', 'Congo', 'RDC', 'Tchad', 'Centrafrique'] },
  { region: 'Afrique Australe', pays: ['Afrique du Sud', 'Zimbabwe', 'Zambie', 'Mozambique'] },
  { region: 'International', pays: ['France', 'Belgique', 'Chine', 'Émirats Arabes Unis', 'Inde', 'Canada'] },
];

const ports = [
  { name: 'Port d\'Abidjan', type: 'Maritime', desc: 'Hub principal — 1er port d\'Afrique de l\'Ouest', icon: Ship },
  { name: 'Port de San Pedro', type: 'Maritime', desc: 'Spécialisé café-cacao et conteneurs', icon: Ship },
  { name: 'Aéroport FHB', type: 'Aérien', desc: 'Fret aérien express et général', icon: Plane },
  { name: 'Corridor Nord (RN3)', type: 'Routier', desc: 'Axe Abidjan–Bamako–Ouagadougou', icon: Truck },
  { name: 'Corridor Est (RN4)', type: 'Routier', desc: 'Axe Abidjan–Accra–Lagos', icon: Truck },
  { name: 'Port sec de Ferkessédougou', type: 'Multimodal', desc: 'Plateforme logistique Nord', icon: MapPin },
];

const stats = [
  { value: '25+', label: 'Pays couverts' },
  { value: '15', label: 'Pays CEDEAO' },
  { value: '5', label: 'Corridors routiers' },
  { value: '2', label: 'Ports maritimes CI' },
];

export default function TransitReseauClient() {
  return (
    <div className="bg-[#F7F5F0] text-navy-900">

      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-end overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(11,30,61,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(11,30,61,0.8) 1px, transparent 1px)`, backgroundSize: '48px 48px' }}
        />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16 pt-28">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#E85D04]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E85D04]">Couverture géographique</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-navy-900 md:text-6xl lg:text-7xl"
          >
            Réseau &<br />
            <span className="bg-gradient-to-r from-[#E85D04] to-[#F77F00] bg-clip-text text-transparent">couverture</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-navy-900/50"
          >
            25+ pays, 5 corridors routiers, 2 ports maritimes — le réseau EL-BOMI Transit couvre l&apos;Afrique subsaharienne et au-delà.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#EDE9E0] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="rounded-xl border border-navy-900/8 bg-white p-5 text-center shadow-sm"
              >
                <p className="font-heading text-3xl font-bold text-[#E85D04]">{s.value}</p>
                <p className="mt-1 text-xs text-navy-900/50">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carte interactive */}
      <section className="bg-[#F7F5F0] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#E85D04]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E85D04]">Carte des trajets</span>
              <span className="h-px w-8 bg-[#E85D04]" />
            </div>
            <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">Flux logistiques en direct</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-navy-900/45">Les tracés orange et teal représentent nos routes actives depuis Abidjan vers nos destinations partenaires.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-md"
            style={{ minHeight: '500px' }}
          >
            <MapRoutes className="h-full w-full" />
            {/* Légende overlay */}
            <div className="absolute bottom-4 left-4 flex flex-col gap-1.5 rounded-xl border border-navy-900/10 bg-white/90 p-4 backdrop-blur-sm">
              <p className="mb-1 font-heading text-[9px] font-bold uppercase tracking-widest text-[#E85D04]/70">Légende</p>
              {[
                { color: 'bg-[#E85D04]', label: 'Hub Abidjan' },
                { color: 'bg-[#0D7377]', label: 'Destinations' },
                { color: 'bg-transparent border border-[#E85D04]/40', label: 'Routes actives' },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${l.color}`} />
                  <span className="text-[10px] text-navy-900/55">{l.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pays couverts */}
      <section className="bg-[#EDE9E0] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#E85D04]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E85D04]">Présence</span>
              <span className="h-px w-8 bg-[#E85D04]" />
            </div>
            <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">Pays desservis</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((region, i) => (
              <motion.div key={region.region} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-navy-900/8 bg-white p-5 shadow-sm"
              >
                <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#E85D04]/80">{region.region}</h3>
                <ul className="space-y-1.5">
                  {region.pays.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-navy-900/50">
                      <span className="h-1 w-1 rounded-full bg-[#E85D04]/50" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Points d'entrée / ports */}
      <section className="bg-[#F7F5F0] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">Infrastructures & points d&apos;entrée</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ports.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group flex gap-4 rounded-xl border border-navy-900/8 bg-white p-5 shadow-sm transition-all hover:border-[#E85D04]/22 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E85D04]/20 bg-[#E85D04]/8 transition-all group-hover:bg-[#E85D04]/15">
                  <p.icon className="h-5 w-5 text-[#E85D04]" />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold uppercase text-navy-900">{p.name}</p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#0D7377]/70">{p.type}</p>
                  <p className="mt-1.5 text-xs text-navy-900/45">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EDE9E0] py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">Expédiez vers votre destination</h2>
            <p className="mx-auto mt-4 max-w-lg text-navy-900/45">Demandez un devis pour votre destination — réponse sous 24h.</p>
            <Link href="/filiales/transit-logistique/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#E85D04] to-[#F77F00] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-[0_0_35px_rgba(232,93,4,0.3)]"
            >
              Obtenir un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
