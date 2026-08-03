'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sprout, Fish, Package, FlaskConical, Droplets, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

const domains = [
  {
    icon: Sprout,
    title: 'Production agricole',
    img: 'https://images.unsplash.com/photo-1574943340216-217332b55e64?w=800&q=85',
    desc: 'Cultures intensives en plein champ et sous serre, pour les marchés locaux et l\'agro-industrie.',
    services: ['Céréales (riz, maïs, mil)', 'Maraîchage (tomate, oignon, gombo)', 'Cultures industrielles (cacao, café, hévéa)', 'Cultures sous serre', 'Semences sélectionnées'],
  },
  {
    icon: Fish,
    title: 'Élevage & Aquaculture',
    img: 'https://images.unsplash.com/photo-15302672centercrop&w=800&q=85',
    desc: 'Élevage de rente et pisciculture en bassins contrôlés, avec chaîne d\'alimentation intégrée.',
    services: ['Élevage bovin viande & lait', 'Aviculture (poulets de chair, pondeuses)', 'Pisciculture en bassins', 'Aliments pour bétail', 'Suivi vétérinaire'],
  },
  {
    icon: Package,
    title: 'Transformation & Commercialisation',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85',
    desc: 'Valorisation locale des productions agricoles : conditionnement, séchage, emballage et distribution.',
    services: ['Conditionnement et emballage', 'Séchage et conservation', 'Unités de transformation', 'Réseaux de distribution', 'Export de produits transformés'],
  },
  {
    icon: FlaskConical,
    title: 'Intrants agricoles',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=85',
    desc: 'Fourniture de semences certifiées, engrais, amendements et produits phytosanitaires adaptés.',
    services: ['Semences certifiées', 'Engrais NPK et organiques', 'Amendements calcaires', 'Produits phytosanitaires', 'Bio-stimulants'],
  },
  {
    icon: Droplets,
    title: 'Hydraulique agricole',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280c87e644?w=800&q=85',
    desc: 'Irrigation, forages et réseaux d\'adduction d\'eau pour optimiser les rendements.',
    services: ['Irrigation goutte-à-goutte', 'Forages et pompages', 'Réserves d\'eau agricoles', 'Réseaux d\'adduction', 'Gestion intelligente de l\'eau'],
  },
  {
    icon: Compass,
    title: 'Conseil & Ingénierie agricole',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=85',
    desc: 'Études de faisabilité, aménagement de terres et pilotage de projets agricoles de A à Z.',
    services: ['Études de faisabilité', 'Aménagement de terres', 'Pilotage de projets', 'Formation et accompagnement', 'Audit et conseil technique'],
  },
];

export default function AgricultureActivitesClient() {
  return (
    <div className="bg-[#0B1E3D] text-white">

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1625237573060-4a064087909d?w=1920&q=85" alt="Activités agricoles" fill priority
          className="object-cover object-center" sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/96 via-[#0B1E3D]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3D]/80 to-transparent" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A227]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">Nos métiers</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold md:text-6xl"
          >
            Six filières<br />
            <span className="text-[#C9A227]">agricoles</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-lg text-lg text-white/50"
          >De la production à la commercialisation, nous couvrons toute la chaîne de valeur agricole.</motion.p>
        </div>
      </section>

      {/* Domaines en alternance */}
      <section className="bg-[#0B1E3D] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {domains.map((d, i) => (
            <motion.div key={d.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Image src={d.img} alt={d.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/40 to-transparent" />
              </div>
              <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A227]/25 bg-[#C9A227]/8">
                  <d.icon className="h-5 w-5 text-[#C9A227]" strokeWidth={1.8} />
                </div>
                <h2 className="font-heading text-2xl font-bold md:text-3xl">{d.title}</h2>
                <p className="mt-3 text-white/50">{d.desc}</p>
                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {d.services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C9A227]/60" strokeWidth={2} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#060f1f] py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold">Développons votre projet agricole</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/45">Notre équipe vous accompagne de l&apos;étude à l&apos;exploitation.</p>
            <Link href="/filiales/agriculture/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-8 py-4 text-sm font-bold text-[#0B1E3D] transition-all hover:bg-[#E8C766] hover:shadow-[0_8px_30px_rgba(201,162,39,0.2)]"
            >
              Contactez-nous <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
