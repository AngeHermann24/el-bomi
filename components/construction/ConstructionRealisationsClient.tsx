'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = ['Tous', 'Bâtiment', 'Travaux Publics', 'Génie Civil', 'Hydraulique', 'VRD'];

const projects = [
  {
    title: 'Centre Commercial Abidjan',
    category: 'Bâtiment',
    location: 'Abidjan, Plateau',
    year: '2023',
    area: '12 000 m²',
    description: 'Bâtiment commercial R+3 avec parking souterrain, façades rideaux et CVC intégré.',
    tags: ['R+3', 'Béton armé', 'Façade rideau'],
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
  },
  {
    title: 'Route Yamoussoukro–Toumodi',
    category: 'Travaux Publics',
    location: 'Yamoussoukro',
    year: '2022',
    area: '45 km',
    description: 'Réhabilitation et élargissement de voirie avec création de couche de base et revêtement bitumineux.',
    tags: ['Voirie', 'Bitume', 'Assainissement'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'Résidence Premium Cocody',
    category: 'Bâtiment',
    location: 'Abidjan, Cocody',
    year: '2023',
    area: '8 500 m²',
    description: 'Ensemble résidentiel de 40 villas haut standing avec piscine, clôture et voiries internes.',
    tags: ['Villas', 'Haut standing', 'VRD'],
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
  {
    title: 'Pont sur le Bandama',
    category: 'Génie Civil',
    location: 'Bouaké',
    year: '2021',
    area: '120 m',
    description: "Ouvrage d'art en béton précontraint, fondations sur pieux, chaussée bituminée.",
    tags: ['Béton précontraint', 'Fondations profondes'],
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
  },
  {
    title: 'Station de pompage AEP',
    category: 'Hydraulique',
    location: 'San-Pédro',
    year: '2022',
    area: '1 500 m²',
    description: "Construction d'une station de pompage d'eau potable, bâtiment de traitement et réseau de distribution.",
    tags: ['AEP', 'Hydraulique', 'Génie civil'],
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
  {
    title: 'Aménagement Zone Industrielle',
    category: 'VRD',
    location: 'Abidjan, Yopougon',
    year: '2023',
    area: '35 ha',
    description: "Voiries, réseaux divers, éclairage public et assainissement d'une zone industrielle.",
    tags: ['VRD', 'Éclairage public', 'Assainissement'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
];

export default function ConstructionRealisationsClient() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered = activeCategory === 'Tous'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero plein écran avec image */}
      <section className="relative overflow-hidden min-h-[55vh] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85"
          alt="Chantier EL-BOMI Construction"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/50 to-navy-950/20" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgb(255 255 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Portfolio</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-white md:text-6xl lg:text-7xl"
          >
            Nos réalisations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-white/55"
          >
            Des dizaines de chantiers livrés à travers la Côte d&apos;Ivoire.
          </motion.p>
        </div>
      </section>

      {/* Filtres */}
      <section className="sticky top-[73px] z-30 border-b border-white/[0.06] bg-navy-900/95 backdrop-blur py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-navy-900'
                    : 'border border-white/10 text-white/50 hover:border-gold-500/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille projets */}
      <section className="bg-navy-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-all duration-300 hover:border-gold-500/30"
              >
                {/* Image avec effet zoom au survol */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  {/* Overlay hover or */}
                  <div className="absolute inset-0 bg-navy-950/0 transition-colors duration-500 group-hover:bg-navy-950/20" />
                  {/* Badge catégorie */}
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full border border-gold-500/40 bg-navy-950/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-400 backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  {/* Overlay gradient bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-950 to-transparent" />
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-gold-500/20 bg-gold-500/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-400/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold uppercase text-white">{p.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/45">{p.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-white/35">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gold-400/50" />
                      {p.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-gold-400/50" />
                      {p.year}
                    </span>
                    <span className="ml-auto font-semibold text-gold-400/60">{p.area}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] bg-navy-950 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-white md:text-3xl">
            Votre projet sera notre prochaine réalisation
          </h2>
          <p className="mt-4 text-white/50">
            Partagez-nous vos besoins pour obtenir une estimation gratuite.
          </p>
          <Link
            href="/filiales/construction/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold-500 px-8 py-4 font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
          >
            Demander un devis
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
