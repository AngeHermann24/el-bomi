'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe, Truck, Package, MapPin, Search, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Globe, title: 'Transit international & Douane', subtitle: 'Import · Export · Régimes suspensifs',
    desc: 'Prise en charge complète des formalités douanières import/export. Déclarations en douane (DUM), tarification, régimes économiques, représentation en douane agréé.',
    services: ['Déclarations douanières', 'Représentation agréée', 'Régimes suspensifs', 'Tarification douanière', 'Procédure simplifiée'],
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=85',
  },
  {
    icon: Truck, title: 'Transport multimodal & Affrètement', subtitle: 'Maritime · Aérien · Routier · Rail',
    desc: "Organisation des transports par tous modes selon vos besoins : FCL/LCL maritime, fret aérien, camionnage national et régional CEDEAO, convois exceptionnels.",
    services: ['Fret maritime FCL/LCL', 'Fret aérien', 'Camionnage CEDEAO', 'Convois exceptionnels', 'Affrètement spot & contrat'],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85',
  },
  {
    icon: Package, title: 'Entreposage & Gestion des stocks', subtitle: 'Entrepôts · WMS · Manutention',
    desc: "Entrepôts sécurisés sous douane et à quai. Gestion des stocks en temps réel (WMS), manutention spécialisée, colisage, reconditionnement et étiquetage.",
    services: ['Entrepôts sous douane', 'WMS temps réel', 'Manutention spécialisée', 'Colisage & étiquetage', 'Stockage frigorifique'],
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=85',
  },
  {
    icon: MapPin, title: 'Distribution dernier kilomètre', subtitle: 'B2B · B2C · Tournées optimisées',
    desc: "Livraison finale à vos clients finaux ou points de vente. Tournées optimisées par IA, messagerie urbaine express, livraison sous température dirigée.",
    services: ['Livraison B2B & B2C', 'Tournées optimisées', 'Messagerie urbaine', 'Chaîne du froid', 'Proof of delivery digital'],
    img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900&q=85',
  },
  {
    icon: Search, title: 'Tracking & Géolocalisation', subtitle: 'GPS · Alertes · Rapports temps réel',
    desc: "Suivi GPS en temps réel de vos cargaisons à chaque étape. Plateforme web et mobile, alertes automatiques SMS/email, rapports de statut détaillés.",
    services: ['Tracking GPS temps réel', 'Alertes SMS & email', 'Portail client 24/7', 'Rapports automatiques', 'Signature électronique'],
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=85',
  },
  {
    icon: BarChart3, title: 'Logistique 4PL', subtitle: 'Pilotage · Optimisation · KPIs',
    desc: "Externalisation totale de votre chaîne logistique. Pilotage et coordination de tous vos prestataires, optimisation des coûts et délais, reporting et analytics.",
    services: ['Pilotage prestataires', 'Optimisation coûts', 'SLA & KPIs', 'Reporting avancé', 'Conseil supply chain'],
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85',
  },
];

export default function TransitServicesClient() {
  return (
    <div className="bg-[#0B1E3D] text-white">
      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85" alt="Services Transit" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/97 via-[#0B1E3D]/55 to-[#0B1E3D]/15" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path d="M0 400 Q360 200 720 400 T1440 400" stroke="#C9A227" strokeWidth="1.5" fill="none" strokeDasharray="12 8" />
        </svg>
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-400" /><span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Prestations</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-white md:text-6xl lg:text-7xl"
          >Nos services logistiques</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-white/42"
          >De la douane au dernier kilomètre — une couverture complète de votre chaîne.</motion.p>
        </div>
      </section>

      {/* Services alternés */}
      <section className="bg-[#0B1E3D] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div className={`relative overflow-hidden rounded-xl border border-gold-500/10 ${i % 2 === 1 ? 'lg:order-2' : ''}`} style={{ minHeight: '340px' }}>
                <Image src={s.img} alt={s.title} fill className="object-cover opacity-55 transition-all duration-700 hover:opacity-70 hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3D]/50 to-transparent" />
                {/* Route trace déco */}
                <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]" viewBox="0 0 500 300">
                  <path d="M0 200 Q125 80 250 200 T500 200" stroke="#C9A227" strokeWidth="1.5" fill="none" strokeDasharray="8 5" />
                </svg>
                <div className="absolute top-4 left-4 h-5 w-5 border-l-2 border-t-2 border-gold-500/28" />
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/22 bg-[#0B1E3D]/80 backdrop-blur-sm">
                  <s.icon className="h-5 w-5 text-gold-400" />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400/60">{s.subtitle}</span>
                <h2 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">{s.title}</h2>
                <div className="mt-3 h-px w-12 bg-gradient-to-r from-gold-500 to-transparent" />
                <p className="mt-5 leading-relaxed text-white/38">{s.desc}</p>
                <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {s.services.map((sv) => (
                    <li key={sv} className="flex items-center gap-2 text-sm text-white/38">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-500/45" /> {sv}
                    </li>
                  ))}
                </ul>
                <Link href="/filiales/transit-logistique/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-lg border border-gold-500/18 bg-gold-500/6 px-6 py-3 text-sm font-semibold text-gold-300 transition-all hover:border-gold-400/32 hover:bg-gold-500/12"
                >
                  Demander un devis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#060f1f] py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold uppercase text-white">Un envoi à planifier ?</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/35">Devis gratuit sous 24h.</p>
            <Link href="/filiales/transit-logistique/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0B1E3D] transition-all hover:shadow-[0_0_35px_rgba(201,162,39,0.35)]"
            >
              Nous contacter <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
