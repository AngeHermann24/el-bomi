'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Cpu } from 'lucide-react';

const categories = ['Tous', 'Réseaux', 'Télécoms', 'Cybersécurité', 'Cloud', 'Dev', 'Smart Building'];

const projects = [
  {
    title: 'Infrastructure réseau BNI',
    cat: 'Réseaux', location: 'Abidjan, Plateau', year: '2023', scope: '12 agences',
    desc: 'Architecture LAN/WAN et WiFi enterprise pour 12 agences de la Banque Nationale d\'Investissement.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    tags: ['Cisco', 'LAN/WAN', 'WiFi'],
  },
  {
    title: 'Backbone fibre Yopougon',
    cat: 'Télécoms', location: 'Abidjan, Yopougon', year: '2023', scope: '45 km fibre',
    desc: '45 km de fibre optique G.652D pour le backbone de la zone industrielle de Yopougon.',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    tags: ['Fibre G.652D', 'Backbone', 'OTDR'],
  },
  {
    title: 'SOC Ministère des Finances',
    cat: 'Cybersécurité', location: 'Abidjan, Plateau', year: '2022', scope: '200 équipements',
    desc: 'SOC managé 24/7 avec SIEM Splunk, supervision de 200+ équipements réseau et postes.',
    img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80',
    tags: ['Splunk', 'SOC 24/7', 'SIEM'],
  },
  {
    title: 'Migration cloud PALM CI',
    cat: 'Cloud', location: 'Abidjan', year: '2022', scope: '40 serveurs',
    desc: 'Migration de 40 serveurs vers Azure. Virtualisation VMware, mise en place PRA RTO < 2h.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    tags: ['Azure', 'VMware', 'PRA'],
  },
  {
    title: 'ERP Groupe CHC',
    cat: 'Dev', location: 'Abidjan', year: '2023', scope: '500 utilisateurs',
    desc: 'Développement ERP sur mesure pour gestion RH, stocks et finances. 500 utilisateurs actifs.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    tags: ['Node.js', 'React', 'PostgreSQL'],
  },
  {
    title: 'Smart campus Université FHB',
    cat: 'Smart Building', location: 'Abidjan, Cocody', year: '2021', scope: '15 bâtiments',
    desc: 'GTB et domotique pour 15 bâtiments universitaires — éclairage LED, contrôle d\'accès, énergie.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    tags: ['GTB', 'KNX', 'BMS'],
  },
];

export default function InforProjetsClient() {
  const [active, setActive] = useState('Tous');
  const filtered = active === 'Tous' ? projects : projects.filter((p) => p.cat === active);

  return (
    <div className="bg-[#0B1E3D] text-white">

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-[#060f1f]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgb(201 162 39) 1px, transparent 1px), linear-gradient(90deg, rgb(201 162 39) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />
        <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85" alt="Projets IT" fill priority
          className="object-cover opacity-15" sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f1f]/97 via-[#060f1f]/50 to-transparent" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Portfolio</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-white md:text-6xl lg:text-7xl"
          >
            Nos projets IT
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-white/45"
          >
            Réseaux, cybersécurité, cloud et digital — nos réalisations en Côte d&apos;Ivoire.
          </motion.p>
        </div>
      </section>

      {/* Filtres */}
      <section className="sticky top-[70px] z-30 border-b border-gold-500/8 bg-[#0B1E3D]/95 backdrop-blur py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`rounded-lg px-4 py-1.5 text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-[#0B1E3D] shadow-[0_0_12px_rgba(201,162,39,0.25)]'
                    : 'border border-white/8 text-white/40 hover:border-gold-500/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille */}
      <section className="bg-[#060f1f] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.div key={p.title} layout
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-xl border border-gold-500/10 transition-all hover:border-gold-500/22"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.img} alt={p.title} fill
                    className="object-cover opacity-50 transition-all duration-700 group-hover:opacity-70 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060f1f] via-[#060f1f]/40 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,162,39,0.07), transparent 70%)' }}
                  />
                  {/* Corner brackets */}
                  <div className="absolute top-3 left-3 h-4 w-4 border-l border-t border-gold-500/25" />
                  <div className="absolute top-3 right-3">
                    <span className="rounded border border-gold-500/25 bg-[#060f1f]/80 px-2 py-0.5 font-heading text-[9px] font-bold uppercase tracking-widest text-gold-400/75 backdrop-blur-sm">
                      {p.cat}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded border border-gold-500/12 bg-gold-500/6 px-2 py-0.5 text-[10px] font-semibold text-gold-400/55">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 font-heading text-base font-bold uppercase text-white">{p.title}</h3>
                  <p className="mb-4 text-xs leading-relaxed text-white/35">{p.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-white/25">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold-400/35" />{p.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold-400/35" />{p.year}</span>
                    <span className="ml-auto font-semibold text-gold-400/45">{p.scope}</span>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1E3D] py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold uppercase text-white">Votre projet sera notre prochaine réalisation</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/35">Contactez-nous pour un devis personnalisé.</p>
            <Link href="/filiales/informatique-telecoms/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0B1E3D] transition-all hover:shadow-[0_0_35px_rgba(201,162,39,0.35)]"
            >
              Nous contacter <Cpu className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
