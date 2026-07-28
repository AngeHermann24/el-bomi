'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Truck, Container, ArrowRight, CheckCircle2, Calendar, Globe } from 'lucide-react';

const realisations = [
  {
    title: 'Transport de conteneurs Port d\'Abidjan → Ouagadougou',
    client: 'Société des Mines du Burkina',
    type: 'Transport routier multimodal',
    date: '2024',
    pays: 'Côte d\'Ivoire → Burkina Faso',
    stats: { conteneurs: '240', km: '1 200', jours: '15' },
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=85',
    desc: 'Transport de 240 conteneurs 40\' en 15 jours avec convoyage sécurisé sur corridor Abidjan-Ouagadougou.',
  },
  {
    title: 'Entreposage et distribution pharmaceutique',
    client: 'Pharma Plus Côte d\'Ivoire',
    type: 'Logistique 3PL',
    date: '2023-2024',
    pays: 'Côte d\'Ivoire',
    stats: { m2: '2 500', lignes: '12 000', clients: '45' },
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=85',
    desc: 'Gestion d\'entrepôt 2 500 m² avec chaîne du froid, picking et distribution vers 45 pharmacies régionales.',
  },
  {
    title: 'Transit douanier équipements miniers',
    client: 'Mining International Ltd',
    type: 'Transit & dédouanement',
    date: '2024',
    pays: 'Mali',
    stats: { tonnes: '850', containers: '32', jours: '7' },
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=85',
    description: 'Dédouanement express de 850 tonnes d\'équipements miniers via Port de San Pedro avec transit Mali.',
  },
  {
    title: 'Fret aérien pièces automobiles',
    client: 'Auto West Africa',
    type: 'Fret aérien',
    date: '2024',
    pays: 'Côte d\'Ivoire → Ghana',
    stats: { vols: '8', tonnes: '45', heures: '24' },
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=85',
    desc: 'Transport de 45 tonnes de pièces automobiles en 8 vols avec livraison en 24h à Accra.',
  },
  {
    title: 'Projet logistique usine agroalimentaire',
    client: 'Agro Food Industries',
    type: 'Logistique industrielle',
    date: '2023',
    pays: 'Sénégal',
    stats: { m3: '5 000', camions: '120', mois: '6' },
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=85',
    desc: 'Installation chaîne logistique complète : réception, stockage, expédition pour nouvelle usine.',
  },
  {
    title: 'Distribution carburant stations-service',
    client: 'Fuel Energy Group',
    type: 'Transport citerne',
    date: '2023-2024',
    pays: 'Côte d\'Ivoire',
    stats: { litres: '2M+', stations: '35', km: '150 000' },
    img: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&q=85',
    desc: 'Distribution de carburant vers 35 stations-service avec flotte citernes et traçabilité complète.',
  },
];

export default function TransitRealisationsClient() {
  return (
    <div className="bg-[#0B1E3D] text-white">

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85" alt="Réalisations Transit" fill priority
          className="object-cover object-center" sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/96 via-[#0B1E3D]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3D]/90 to-transparent" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A227]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">Projets réalisés</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold md:text-6xl lg:text-7xl"
          >
            Nos<br />
            <span className="text-[#C9A227]">réalisations</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-lg text-lg text-white/50"
          >Projets clés en transit, transport, entreposage et chaîne logistique à travers l&apos;Afrique de l&apos;Ouest.</motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#060f1f] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { v: '25+', l: 'Pays desservis', icon: Globe },
              { v: '500+', l: 'Projets livrés', icon: CheckCircle2 },
              { v: '15K+', l: 'Conteneurs', icon: Container },
              { v: '99%', l: 'Taux de conformité', icon: Truck },
            ].map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center gap-2 py-4 text-center"
              >
                <s.icon className="h-5 w-5 text-[#C9A227]" strokeWidth={1.8} />
                <p className="font-heading text-3xl font-bold text-[#C9A227]">{s.v}</p>
                <p className="text-xs text-white/30">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grille réalisations */}
      <section className="bg-[#0B1E3D] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group overflow-hidden rounded-2xl border border-white/5 bg-[#060f1f] shadow-sm transition-all hover:shadow-[0_12px_40px_rgba(201,162,39,0.08)] hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={r.img} alt={r.title} fill className="object-cover transition-all duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060f1f]/90 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-[#C9A227]/20 px-2.5 py-1 backdrop-blur-sm">
                    <Calendar className="h-3.5 w-3.5 text-[#C9A227]" strokeWidth={2} />
                    <span className="text-[10px] font-bold text-[#C9A227]">{r.date}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs text-white/35">
                    <MapPin className="h-3 w-3" strokeWidth={2} /> {r.pays}
                  </div>
                  <h3 className="font-heading text-sm font-bold leading-snug">{r.title}</h3>
                  <p className="mt-2 text-xs text-white/40">{r.client}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {Object.entries(r.stats).map(([k, v]) => (
                      <span key={k} className="rounded-md border border-[#C9A227]/15 bg-[#C9A227]/5 px-2 py-0.5 text-[10px] text-[#C9A227]">
                        {v} {k}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#060f1f] py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold">Un projet logistique en Afrique de l&apos;Ouest ?</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/45">Notre équipe vous propose une solution adaptée et un devis sous 24h.</p>
            <Link href="/filiales/transit-logistique/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-8 py-4 text-sm font-bold text-[#0B1E3D] transition-all hover:bg-[#C9A227]/90 hover:shadow-[0_8px_30px_rgba(201,162,39,0.18)]"
            >
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
