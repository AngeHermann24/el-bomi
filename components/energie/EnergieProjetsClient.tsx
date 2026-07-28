'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Calendar, ArrowRight, Zap } from 'lucide-react';
import CircuitAnimation from './CircuitAnimation';

const categories = ['Tous', 'Réseaux HTA', 'Solaire', 'Automatismes', 'Électrification rurale', 'BT Industriel'];

const projects = [
  {
    title: 'Électrification Zone Nord',
    category: 'Électrification rurale',
    location: 'Korhogo, Nord CI',
    year: '2023',
    scope: '320 km réseau',
    desc: '28 villages raccordés, 12 000 foyers alimentés. Extension HTA sur 320 km, 45 postes MT/BT.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    tags: ['HTA', 'Rural', '12 000 foyers'],
  },
  {
    title: 'Centrale solaire Bouaké Nord',
    category: 'Solaire',
    location: 'Bouaké, Centre CI',
    year: '2023',
    scope: '15 MW',
    desc: 'Centrale PV 15 MW pour alimentation de la zone industrielle de Bouaké. Onduleurs centraux, monitoring SCADA.',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    tags: ['PV', '15 MW', 'Industriel'],
  },
  {
    title: 'Automatisation usine SIMAF',
    category: 'Automatismes',
    location: 'Abidjan, Yopougon',
    year: '2022',
    scope: '12 postes automatisés',
    desc: 'Supervision SCADA complète, 12 postes automatisés, télégestion réseau BT, HMI opérateur.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    tags: ['SCADA', 'API', 'HMI'],
  },
  {
    title: 'Réseau HTA Corridor Est',
    category: 'Réseaux HTA',
    location: 'Abengourou, Est CI',
    year: '2022',
    scope: '180 km HTA',
    desc: 'Construction de 180 km de ligne HTA 33 kV, 30 postes de distribution, protection et relayage.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tags: ['33 kV', 'HTA', '30 postes'],
  },
  {
    title: 'Kits solaires zone Ouest',
    category: 'Solaire',
    location: 'Man, Ouest CI',
    year: '2022',
    scope: '3 000 kits',
    desc: '3 000 kits solaires autonomes déployés dans 22 villages hors-réseau. Maintenance incluse sur 5 ans.',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    tags: ['Off-grid', '3 000 kits', 'Rural'],
  },
  {
    title: 'Électrification usine CIE Vridi',
    category: 'BT Industriel',
    location: 'Abidjan, Vridi',
    year: '2021',
    scope: '8 000 m²',
    desc: 'Installation BT complète sur 8 000 m². Tableaux généraux, câblage industriel, éclairage, mise en conformité.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    tags: ['BT', 'Industriel', '8 000 m²'],
  },
];

export default function EnergieProjetsClient() {
  const [active, setActive] = useState('Tous');

  const filtered = active === 'Tous' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="bg-[#0A1628] text-white">

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
          alt="Projets énergie EL-BOMI"
          fill priority className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/97 via-[#0A1628]/55 to-[#0A1628]/20" />
        {/* Grille circuit */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgb(201 162 39) 1px, transparent 1px), linear-gradient(90deg, rgb(201 162 39) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Portfolio</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-white md:text-6xl lg:text-7xl"
          >
            Nos projets
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-white/50"
          >
            Des dizaines de réalisations à travers la Côte d&apos;Ivoire.
          </motion.p>
        </div>
      </section>

      {/* Filtres sticky */}
      <section className="sticky top-[72px] z-30 border-b border-gold-500/10 bg-[#0A1628]/95 backdrop-blur py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-[#0A1628] shadow-[0_0_15px_rgba(201,162,39,0.3)]'
                    : 'border border-white/10 text-white/45 hover:border-gold-500/25 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Séparateur circuit */}
      <div className="relative overflow-hidden bg-[#060e1c] py-4">
        <CircuitAnimation className="opacity-35 max-w-6xl mx-auto" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060e1c] via-transparent to-[#060e1c]" />
      </div>

      {/* Grille projets */}
      <section className="bg-[#060e1c] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-300 hover:border-gold-500/25"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.img} alt={p.title} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c] via-[#060e1c]/30 to-transparent" />
                  {/* Badge catégorie */}
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full border border-gold-500/35 bg-[#060e1c]/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-400 backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  {/* Glow hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,162,39,0.1) 0%, transparent 70%)' }}
                  />
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-gold-500/15 bg-gold-500/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-400/60">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold uppercase text-white">{p.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/40">{p.desc}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-white/30">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gold-400/40" />{p.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-gold-400/40" />{p.year}
                    </span>
                    <span className="ml-auto font-semibold text-gold-400/50">{p.scope}</span>
                  </div>
                </div>
                {/* Barre or bas */}
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold uppercase text-white">
              Votre projet sera notre prochaine réalisation
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/40">Contactez-nous pour un devis personnalisé.</p>
            <Link href="/filiales/energie/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0A1628] transition-all hover:shadow-[0_0_35px_rgba(201,162,39,0.4)]"
            >
              Nous contacter <Zap className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
