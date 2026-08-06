'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Droplets, CheckCircle2, ArrowRight, Users } from 'lucide-react';

const centres = [
  {
    name: 'Centre d\'hémodialyse d\'Abidjan-Cocody',
    ville: 'Abidjan — Cocody',
    adresse: 'Angré 8ème Tranche, près du CHU',
    tel: '+225 27 22 00 00',
    postes: 12,
    horaires: 'Lun-Sam · 6h-18h',
    seances: '3 séances/sem',
    img: '/images/medical-dialyse.jpg',
    services: ['Hémodialyse standard', 'HDF en ligne', 'Suivi néphrologue', 'Bilan trimestriel'],
  },
  {
    name: 'Centre d\'hémodialyse de Yopougon',
    ville: 'Abidjan — Yopougon',
    adresse: 'Quartier Niangon, Rue des Cliniques',
    tel: '+225 27 23 00 00',
    postes: 10,
    horaires: 'Lun-Sam · 6h-18h',
    seances: '3 séances/sem',
    img: '/images/medical-hero.jpg',
    services: ['Hémodialyse standard', 'Dialyse longue durée', 'Suivi nutritionnel', 'Transport patients'],
  },
  {
    name: 'Centre d\'hémodialyse de Bouaké',
    ville: 'Bouaké — Centre',
    adresse: 'Quartier Commerce, Avenue Général de Gaulle',
    tel: '+225 27 31 00 00',
    postes: 8,
    horaires: 'Lun-Sam · 6h-18h',
    seances: '3 séances/sem',
    img: '/images/medical-qualite.jpg',
    services: ['Hémodialyse standard', 'HDF en ligne', 'Consultation néphro', 'Urgences dialyse'],
  },
  {
    name: 'Centre d\'hémodialyse de San-Pédro',
    ville: 'San-Pédro',
    adresse: 'Zone Résidentielle, proximité Port',
    tel: '+225 27 34 00 00',
    postes: 6,
    horaires: 'Lun-Sam · 6h-16h',
    seances: '3 séances/sem',
    img: '/images/medical-dialyse.jpg',
    services: ['Hémodialyse standard', 'Suivi biologique', 'Téléconsultation', 'Accueil urgences'],
  },
  {
    name: 'Centre d\'hémodialyse de Yamoussoukro',
    ville: 'Yamoussoukro',
    adresse: 'Quartier Habitat, Boulevard des Martyrs',
    tel: '+225 27 30 00 00',
    postes: 8,
    horaires: 'Lun-Sam · 6h-17h',
    seances: '3 séances/sem',
    img: '/images/medical-qualite.jpg',
    services: ['Hémodialyse standard', 'Dialyse nocturne', 'Éducation thérapeutique', 'Assistance sociale'],
  },
  {
    name: 'Centre d\'hémodialyse de Daloa',
    ville: 'Daloa',
    adresse: 'Quartier Lobia, Rue du Commerce',
    tel: '+225 27 32 00 00',
    postes: 6,
    horaires: 'Lun-Sam · 6h-16h',
    seances: '3 séances/sem',
    img: '/images/medical-equipe.jpg',
    services: ['Hémodialyse standard', 'Suivi biologique', 'Consultation prégreffe', 'Soutien psychologique'],
  },
];

const stats = [
  { value: '12', label: 'Centres actifs', icon: Droplets },
  { value: '2 400+', label: 'Patients dialysés', icon: Users },
  { value: '80+', label: 'Postes de dialyse', icon: CheckCircle2 },
  { value: '3×/sem', label: 'Séances garanties', icon: Clock },
];

export default function MedicalCentresClient() {
  return (
    <div className="bg-white text-[#0B1E3D]">

      {/* Hero */}
      <section className="relative min-h-[54vh] flex items-end overflow-hidden">
        <Image src="/images/medical-dialyse.jpg" alt="Centres hémodialyse" fill priority
          className="object-cover object-center" sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/96 via-white/55 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A227]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Hémodialyse</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold text-[#0B1E3D] md:text-6xl lg:text-7xl"
          >
            Nos centres<br />
            <span className="text-[#4A7C7C]">d&apos;hémodialyse</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-[#0B1E3D]/50"
          >
            12 centres répartis sur tout le territoire ivoirien pour accompagner les patients insuffisants rénaux avec humanité et excellence technique.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0B1E3D] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center gap-2 py-4 text-center"
              >
                <s.icon className="h-5 w-5 text-[#4A7C7C]" strokeWidth={1.8} />
                <p className="font-heading text-3xl font-bold text-[#C9A227]">{s.value}</p>
                <p className="text-xs text-white/38">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qu'est l'hémodialyse */}
      <section className="bg-[#F7F7F5] py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A227]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Traitement</span>
              </div>
              <h2 className="font-heading text-4xl font-bold text-[#0B1E3D]">Un suivi médical<br />personnalisé et humain</h2>
              <p className="mt-6 leading-relaxed text-[#0B1E3D]/50">
                Chaque patient bénéficie d&apos;un protocole individualisé, suivi par un néphrologue dédié. Nos infirmiers spécialisés assurent 3 séances hebdomadaires avec un accompagnement psychologique et nutritionnel continu.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Machines Fresenius 5008S dernière génération',
                  'Eau ultra-pure pour dialysat conforme OMS',
                  'Suivi biologique mensuel inclus',
                  'Prise en charge Assurance Maladie Universelle (AMU)',
                  'Service d\'ambulance pour patients à mobilité réduite',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#0B1E3D]/52">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4A7C7C]" strokeWidth={2} /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(11,30,61,0.1)]"
              style={{ minHeight: '400px' }}
            >
              <Image src="/images/medical-hero.jpg" alt="Hémodialyse" fill className="object-cover" sizes="50vw" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grille centres */}
      <section className="bg-white py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Localisation</span>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-[#0B1E3D]">Nos centres en Côte d&apos;Ivoire</h2>
            <p className="mx-auto mt-3 max-w-lg text-[#0B1E3D]/45">Un réseau dense pour que chaque patient puisse accéder à un centre proche de son domicile.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {centres.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group overflow-hidden rounded-2xl border border-[#0B1E3D]/6 bg-[#F7F7F5] shadow-sm transition-all hover:shadow-[0_12px_40px_rgba(11,30,61,0.08)] hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={c.img} alt={c.name} fill className="object-cover transition-all duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/85 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-[#0B1E3D]/80 px-2.5 py-1 backdrop-blur-sm">
                    <Droplets className="h-3.5 w-3.5 text-[#4A7C7C]" strokeWidth={2} />
                    <span className="text-[10px] font-bold text-white">{c.postes} postes</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-sm font-bold text-[#0B1E3D] leading-snug">{c.name}</h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-start gap-2 text-xs text-[#0B1E3D]/42">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A227]/60" /> {c.adresse}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0B1E3D]/42">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-[#C9A227]/60" />
                      <a href={`tel:${c.tel.replace(/\s/g, '')}`} className="hover:text-[#0B1E3D] transition-colors">{c.tel}</a>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0B1E3D]/42">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-[#C9A227]/60" /> {c.horaires} · {c.seances}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.services.map((s) => (
                      <span key={s} className="rounded-md border border-[#4A7C7C]/12 bg-[#4A7C7C]/5 px-2 py-0.5 text-[10px] text-[#4A7C7C]">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F7F5] py-10 sm:py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-[#0B1E3D]">Besoin d&apos;une prise en charge ?</h2>
            <p className="mx-auto mt-4 max-w-lg text-[#0B1E3D]/45">Notre équipe vous oriente vers le centre le plus proche et vous accompagne dans votre parcours de soin.</p>
            <Link href="/filiales/medical/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0B1E3D] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#0B1E3D]/85 hover:shadow-[0_8px_30px_rgba(11,30,61,0.18)]"
            >
              Prendre contact <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
