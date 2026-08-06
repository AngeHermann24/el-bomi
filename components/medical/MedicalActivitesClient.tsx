'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeartPulse, Microscope, Pill, Building2, Droplets, CheckCircle2, ArrowRight } from 'lucide-react';

const activites = [
  {
    icon: Microscope,
    title: 'Équipements & dispositifs médicaux',
    subtitle: 'Imagerie · Chirurgie · Soins intensifs',
    desc: 'Distribution exclusive d\'équipements hospitaliers de haute technicité : imagerie médicale (IRM, scanner, échographie), blocs opératoires, soins intensifs, équipements de rééducation.',
    services: [
      'Imagerie médicale (IRM, scanner, radio)', 'Équipements de blocs opératoires',
      'Moniteurs et équipements soins intensifs', 'Équipements de rééducation & kinésithérapie',
      'Stérilisation et décontamination', 'Mobilier médical & hospitalier',
    ],
    img: '/images/medical-hero.jpg',
    brands: ['Siemens Healthineers', 'GE Healthcare', 'Mindray', 'Stryker'],
    color: 'text-[#4A7C7C]', bg: 'bg-[#4A7C7C]/5', border: 'border-[#4A7C7C]/12',
  },
  {
    icon: Droplets,
    title: 'Centres d\'hémodialyse',
    subtitle: 'Équipement · Gestion · Suivi patient',
    desc: 'Installation, équipement et gestion complète de centres d\'hémodialyse. Machines Fresenius 5008/6008, consommables, eau de dialyse et suivi médical par des néphrologues expérimentés.',
    services: [
      'Machines Fresenius 5008 / 6008', 'Traitement et purification de l\'eau',
      'Consommables dialyse', 'Suivi et dossier patient informatisé',
      'Formation du personnel soignant', 'Maintenance préventive & corrective',
    ],
    img: '/images/medical-dialyse.jpg',
    brands: ['Fresenius Medical Care', 'Gambro', 'B. Braun'],
    color: 'text-[#0B1E3D]', bg: 'bg-[#0B1E3D]/4', border: 'border-[#0B1E3D]/8',
  },
  {
    icon: Pill,
    title: 'Produits pharmaceutiques & parapharmaceutiques',
    subtitle: 'Médicaments · OTC · Chaîne du froid',
    desc: 'Importation et distribution de médicaments essentiels, produits OTC, parapharmacie et compléments alimentaires. Respect strict de la chaîne du froid et des normes d\'entreposage pharmaceutique.',
    services: [
      'Médicaments essentiels DCI', 'Gamme OTC & automédication',
      'Produits parapharmaceutiques', 'Chaîne du froid (-2° à +8°C)',
      'Distribution nationale', 'Traçabilité et pharmacovigilance',
    ],
    img: '/images/medical-dialyse.jpg',
    brands: ['Sanofi', 'Pfizer', 'Roche', 'Novartis'],
    color: 'text-[#C9A227]', bg: 'bg-[#C9A227]/5', border: 'border-[#C9A227]/12',
  },
  {
    icon: HeartPulse,
    title: 'Matériel biomédical, dentaire & laboratoire',
    subtitle: 'Analyseurs · Dentisterie · Labo',
    desc: 'Équipements spécialisés pour laboratoires d\'analyses médicales, cabinets dentaires et unités de biologie clinique. Installation, formation et maintenance incluses.',
    services: [
      'Analyseurs biochimie & hématologie', 'Unités dentaires & chirurgie orale',
      'Autoclaves et stérilisateurs', 'Microscopes & centrifugeuses',
      'Panneaux de radiologie dentaire', 'Maintenance contrat annuel',
    ],
    img: '/images/medical-qualite.jpg',
    brands: ['Roche Diagnostics', 'bioMérieux', 'KaVo', 'Sirona'],
    color: 'text-[#4A7C7C]', bg: 'bg-[#4A7C7C]/5', border: 'border-[#4A7C7C]/12',
  },
  {
    icon: Building2,
    title: 'Construction & équipement de cliniques',
    subtitle: 'Clé en main · Norme OMS · Audit',
    desc: 'Conception architecturale, construction et équipement complet de cliniques, centres de santé communautaires et unités spécialisées selon les normes OMS et le Code de santé ivoirien.',
    services: [
      'Conception architecturale médicale', 'Construction aux normes OMS',
      'Équipement médical complet', 'Systèmes de gaz médicaux',
      'Réseaux informatiques hospitaliers', 'Audit et mise aux normes',
    ],
    img: '/images/medical-equipe.jpg',
    brands: ['EL-BOMI Construction', 'Partenaires agréés MSDS'],
    color: 'text-[#0B1E3D]', bg: 'bg-[#0B1E3D]/4', border: 'border-[#0B1E3D]/8',
  },
];

export default function MedicalActivitesClient() {
  return (
    <div className="bg-white text-[#0B1E3D]">

      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <Image src="/images/medical-qualite.jpg" alt="Activités médicales" fill priority
          className="object-cover object-top" sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/97 via-white/60 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/30 to-transparent" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A227]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Expertises</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold text-[#0B1E3D] md:text-6xl lg:text-7xl"
          >Nos activités</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-[#0B1E3D]/50"
          >5 domaines d&apos;expertise santé — de l&apos;équipement au patient.</motion.p>
        </div>
      </section>

      {/* Activités en alternance */}
      <section className="bg-[#F7F7F5] py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-20">
          {activites.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div className={`relative overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(11,30,61,0.08)] ${i % 2 === 1 ? 'lg:order-2' : ''}`} style={{ minHeight: '360px' }}>
                <Image src={a.img} alt={a.title} fill className="object-cover transition-all duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                {/* Brands badge */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                  {a.brands.map((b) => (
                    <span key={b} className="rounded-lg border border-white/25 bg-white/90 px-2 py-1 text-[10px] font-semibold text-[#0B1E3D]/65 backdrop-blur-sm">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className={`mb-5 inline-flex items-center gap-2 rounded-xl border px-4 py-2 ${a.bg} ${a.border}`}>
                  <a.icon className={`h-4 w-4 ${a.color}`} strokeWidth={1.8} />
                  <span className={`text-xs font-semibold uppercase tracking-wider ${a.color}`}>{a.subtitle}</span>
                </div>
                <h2 className="font-heading text-3xl font-bold text-[#0B1E3D] md:text-4xl">{a.title}</h2>
                <div className="mt-3 h-px w-12 bg-gradient-to-r from-[#C9A227] to-transparent" />
                <p className="mt-5 leading-relaxed text-[#0B1E3D]/50">{a.desc}</p>
                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {a.services.map((sv) => (
                    <li key={sv} className="flex items-start gap-2 text-sm text-[#0B1E3D]/48">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${a.color}`} strokeWidth={2} /> {sv}
                    </li>
                  ))}
                </ul>
                <Link href="/filiales/medical/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-[#0B1E3D]/10 bg-[#0B1E3D]/[0.03] px-6 py-3 text-sm font-semibold text-[#0B1E3D] transition-all hover:bg-[#0B1E3D] hover:text-white"
                >
                  Demander un devis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1E3D] py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-white">Un besoin médical spécifique ?</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/42">Notre équipe spécialisée vous répond sous 24h.</p>
            <Link href="/filiales/medical/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-[#0B1E3D] transition-all hover:bg-white/90 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
            >
              Contactez-nous <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
