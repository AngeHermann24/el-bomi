'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Network, Wifi, Shield, Cloud, Code2, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import NetworkCanvas from './NetworkCanvas';

const solutions = [
  {
    icon: Network,
    title: 'Réseaux & Infrastructures IT',
    subtitle: 'LAN · WAN · WiFi · SD-WAN',
    desc: "Conception et déploiement d'infrastructures réseau d'entreprise performantes et évolutives. LAN/WAN structuré, WiFi enterprise, MPLS, SD-WAN, supervision NOC 24/7.",
    services: ['Architecture LAN/WAN', 'WiFi enterprise', 'SD-WAN & MPLS', 'Supervision NOC', 'Câblage structuré'],
    img: '/images/infor-projets.jpg',
  },
  {
    icon: Wifi,
    title: 'Télécoms & Fibre optique',
    subtitle: 'Fibre · VoIP · ToIP · Backbone',
    desc: "Déploiement de réseaux fibre optique longue distance et intra-bâtiment. VoIP/ToIP, réseaux opérateurs, liaisons point-à-point et architectures backbone.",
    services: ['Fibre optique', 'VoIP & ToIP', 'Liaisons P2P', 'Backbone opérateur', 'Tests & certifications'],
    img: '/images/infor-projets.jpg',
  },
  {
    icon: Shield,
    title: 'Cybersécurité & Vidéosurveillance',
    subtitle: 'Firewall · SIEM · SOC · CCTV',
    desc: "Protection complète du système d'information. Audit sécurité, firewall next-gen, SIEM, SOC managé 24/7, vidéosurveillance IP et contrôle d'accès biométrique.",
    services: ['Audit de sécurité', 'Firewall next-gen', 'SOC managé 24/7', 'CCTV IP HD', "Contrôle d'accès"],
    img: '/images/infor-cyber.jpg',
  },
  {
    icon: Cloud,
    title: 'Cloud & Data Centers',
    subtitle: 'AWS · Azure · Hébergement privé',
    desc: "Migration cloud, virtualisation, hébergement privé et colocation. Conception de salles serveurs (Tier II/III), backup & reprise d'activité, cloud hybride.",
    services: ['Migration cloud', 'Virtualisation VMware', 'Salle serveurs Tier III', 'Backup & PRA', 'Cloud hybride'],
    img: '/images/infor-cyber.jpg',
  },
  {
    icon: Code2,
    title: 'Développement logiciel',
    subtitle: 'Web · Mobile · ERP · API',
    desc: "Applications web et mobile sur mesure, ERP métier, portails clients, intégrations API et solutions digitales adaptées aux besoins spécifiques des entreprises ivoiriennes.",
    services: ['Applications web', 'Apps mobiles', 'ERP sur mesure', 'Intégrations API', 'Portails clients'],
    img: '/images/infor-projets.jpg',
  },
  {
    icon: Building2,
    title: 'Smart Building & Domotique',
    subtitle: 'GTB · Domotique · IoT · Éclairage',
    desc: "Bâtiments intelligents et connectés. Gestion technique du bâtiment (GTB), domotique industrielle, éclairage LED intelligent, gestion d'énergie et supervision IoT.",
    services: ['GTB & BMS', 'Domotique industrielle', 'Éclairage intelligent', 'Gestion énergie', 'Supervision IoT'],
    img: '/images/energie-contact.jpg',
  },
];

export default function InforSolutionsClient() {
  return (
    <div className="bg-[#D6E4F0] text-navy-900">

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-white">
        <div className="absolute inset-0">
          <NetworkCanvas className="opacity-80" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Modules</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-navy-900 md:text-6xl lg:text-7xl"
          >
            Nos solutions IT
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-navy-900/55"
          >
            6 domaines d&apos;expertise pour digitaliser, connecter et sécuriser votre organisation.
          </motion.p>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-20">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded-xl border border-navy-900/10 shadow-sm ${i % 2 === 1 ? 'lg:order-2' : ''}`} style={{ minHeight: '340px' }}>
                <Image src={s.img} alt={s.title} fill
                  className="object-cover transition-all duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900/20 to-transparent" />
                {/* Corner brackets */}
                <div className="absolute top-4 left-4 h-5 w-5 border-l-2 border-t-2 border-gold-500/50" />
                <div className="absolute bottom-4 right-4 h-5 w-5 border-r-2 border-b-2 border-gold-500/50" />
                {/* Badge */}
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/30 bg-white/85 backdrop-blur-sm">
                  <s.icon className="h-5 w-5 text-gold-600" />
                </div>
              </div>

              {/* Texte */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600/70">{s.subtitle}</span>
                <h2 className="font-heading text-3xl font-bold uppercase text-navy-900 md:text-4xl">{s.title}</h2>
                <div className="mt-3 h-px w-12 bg-gradient-to-r from-gold-500 to-cyan-accent" />
                <p className="mt-5 leading-relaxed text-navy-900/55">{s.desc}</p>
                <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {s.services.map((sv) => (
                    <li key={sv} className="flex items-center gap-2 text-sm text-navy-900/55">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-accent" /> {sv}
                    </li>
                  ))}
                </ul>
                <Link href="/filiales/informatique-telecoms/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-lg border border-gold-500/25 bg-white px-6 py-3 text-sm font-semibold text-navy-900/70 transition-all hover:border-gold-500/40 hover:bg-gold-500/8 hover:text-navy-900 hover:shadow-[0_0_18px_rgba(201,162,39,0.08)]"
                >
                  Demander un devis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C8D8E8] py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">Un projet IT à lancer ?</h2>
            <p className="mx-auto mt-4 max-w-lg text-navy-900/45">Audit gratuit, réponse sous 48h.</p>
            <Link href="/filiales/informatique-telecoms/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-900 transition-all hover:shadow-[0_0_35px_rgba(201,162,39,0.2)]"
            >
              Nous contacter <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
