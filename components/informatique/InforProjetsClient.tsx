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
    img: '/images/infor-projets.jpg',
    tags: ['Cisco', 'LAN/WAN', 'WiFi'],
  },
  {
    title: 'Backbone fibre Yopougon',
    cat: 'Télécoms', location: 'Abidjan, Yopougon', year: '2023', scope: '45 km fibre',
    desc: '45 km de fibre optique G.652D pour le backbone de la zone industrielle de Yopougon.',
    img: '/images/infor-projets.jpg',
    tags: ['Fibre G.652D', 'Backbone', 'OTDR'],
  },
  {
    title: 'SOC Ministère des Finances',
    cat: 'Cybersécurité', location: 'Abidjan, Plateau', year: '2022', scope: '200 équipements',
    desc: 'SOC managé 24/7 avec SIEM Splunk, supervision de 200+ équipements réseau et postes.',
    img: '/images/infor-cyber.jpg',
    tags: ['Splunk', 'SOC 24/7', 'SIEM'],
  },
  {
    title: 'Migration cloud PALM CI',
    cat: 'Cloud', location: 'Abidjan', year: '2022', scope: '40 serveurs',
    desc: 'Migration de 40 serveurs vers Azure. Virtualisation VMware, mise en place PRA RTO < 2h.',
    img: '/images/infor-cyber.jpg',
    tags: ['Azure', 'VMware', 'PRA'],
  },
  {
    title: 'ERP Groupe CHC',
    cat: 'Dev', location: 'Abidjan', year: '2023', scope: '500 utilisateurs',
    desc: 'Développement ERP sur mesure pour gestion RH, stocks et finances. 500 utilisateurs actifs.',
    img: '/images/infor-projets.jpg',
    tags: ['Node.js', 'React', 'PostgreSQL'],
  },
  {
    title: 'Smart campus Université FHB',
    cat: 'Smart Building', location: 'Abidjan, Cocody', year: '2021', scope: '15 bâtiments',
    desc: 'GTB et domotique pour 15 bâtiments universitaires — éclairage LED, contrôle d\'accès, énergie.',
    img: '/images/energie-contact.jpg',
    tags: ['GTB', 'KNX', 'BMS'],
  },
];

export default function InforProjetsClient() {
  const [active, setActive] = useState('Tous');
  const filtered = active === 'Tous' ? projects : projects.filter((p) => p.cat === active);

  return (
    <div className="bg-[#D6E4F0] text-navy-900">

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgb(11 30 61) 1px, transparent 1px), linear-gradient(90deg, rgb(11 30 61) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />
        <Image src="/images/infor-projets.jpg" alt="Projets IT" fill priority
          className="object-cover opacity-20" sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Portfolio</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-navy-900 md:text-6xl lg:text-7xl"
          >
            Nos projets IT
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-navy-900/55"
          >
            Réseaux, cybersécurité, cloud et digital — nos réalisations en Côte d&apos;Ivoire.
          </motion.p>
        </div>
      </section>

      {/* Filtres */}
      <section className="sticky top-[70px] z-30 border-b border-navy-900/8 bg-white/95 backdrop-blur py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`rounded-lg px-4 py-1.5 text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-navy-900 shadow-[0_0_12px_rgba(201,162,39,0.15)]'
                    : 'border border-navy-900/10 text-navy-900/50 hover:border-gold-500/25 hover:text-navy-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille */}
      <section className="bg-white py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.div key={p.title} layout
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-xl border border-navy-900/8 bg-white shadow-sm transition-all hover:border-gold-500/25 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.img} alt={p.title} fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(47,182,196,0.06), transparent 70%)' }}
                  />
                  {/* Corner brackets */}
                  <div className="absolute top-3 left-3 h-4 w-4 border-l border-t border-gold-500/40" />
                  <div className="absolute top-3 right-3">
                    <span className="rounded border border-gold-500/30 bg-white/85 px-2 py-0.5 font-heading text-[9px] font-bold uppercase tracking-widest text-gold-600 backdrop-blur-sm">
                      {p.cat}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded border border-cyan-accent/20 bg-cyan-accent/8 px-2 py-0.5 text-[10px] font-semibold text-cyan-accent-dark">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 font-heading text-base font-bold uppercase text-navy-900">{p.title}</h3>
                  <p className="mb-4 text-xs leading-relaxed text-navy-900/50">{p.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-navy-900/40">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold-600/50" />{p.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-gold-600/50" />{p.year}</span>
                    <span className="ml-auto font-semibold text-gold-600/60">{p.scope}</span>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-cyan-accent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C8D8E8] py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">Votre projet sera notre prochaine réalisation</h2>
            <p className="mx-auto mt-4 max-w-lg text-navy-900/45">Contactez-nous pour un devis personnalisé.</p>
            <Link href="/filiales/informatique-telecoms/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-900 transition-all hover:shadow-[0_0_35px_rgba(201,162,39,0.2)]"
            >
              Nous contacter <Cpu className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
