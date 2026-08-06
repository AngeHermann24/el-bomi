'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, MapPin, TrendingUp, Sun, Lightbulb } from 'lucide-react';
import CircuitAnimation from './CircuitAnimation';

const impacts = [
  { icon: Users, value: '300 000+', label: 'Habitants électrifiés', color: 'text-gold-600' },
  { icon: MapPin, value: '80+', label: 'Villages raccordés', color: 'text-gold-600' },
  { icon: Zap, value: '320 km', label: 'Lignes HTA posées', color: 'text-gold-600' },
  { icon: Sun, value: '45 MW', label: 'Solaire déployé', color: 'text-amber-accent' },
  { icon: TrendingUp, value: '15', label: 'Régions couvertes', color: 'text-gold-600' },
  { icon: Lightbulb, value: '10 000+', label: 'Foyers équipés solaire', color: 'text-gold-600' },
];

const zones = [
  {
    region: 'Zone Nord',
    villages: 28,
    foyers: 12000,
    km: 145,
    before: '/images/energie-impact.jpg',
    after: '/images/energie-impact.jpg',
    desc: "Extension du réseau HTA sur 145 km, raccordement de 28 villages dans la région de Korhogo.",
  },
  {
    region: 'Zone Ouest',
    villages: 22,
    foyers: 8500,
    km: 98,
    before: '/images/energie-projets.jpg',
    after: '/images/energie-solutions.jpg',
    desc: "Déploiement solaire off-grid et extension réseau dans la région de Man.",
  },
  {
    region: 'Zone Centre',
    villages: 18,
    foyers: 7200,
    km: 77,
    before: '/images/unsplash/photo-1581094794329-c8112a89af12.jpg',
    after: '/images/energie-solutions.jpg',
    desc: "Réhabilitation et extension du réseau BT autour de Bouaké.",
  },
];

const timeline = [
  { year: '2015', title: "Lancement programme rural", desc: "Premiers contrats d'électrification rurale avec l'État ivoirien. 8 villages pilotes." },
  { year: '2017', title: "Extension zone Nord", desc: "145 km de réseau HTA déployés. 28 villages raccordés en 18 mois." },
  { year: '2019', title: "Déploiement solaire", desc: "Premiers kits solaires off-grid pour villages hors réseau. 2 000 foyers équipés." },
  { year: '2021', title: "Programme national PRONER", desc: "Participation au Programme National d'Électrification Rurale. 15 régions couvertes." },
  { year: '2023', title: "45 MW solaires", desc: "Cap des 45 MW photovoltaïques installés. 10 000 foyers autonomes." },
  { year: '2025', title: "300 000 habitants", desc: "Franchissement du cap des 300 000 habitants électrifiés." },
];

export default function EnergieImpactClient() {
  return (
    <div className="bg-gradient-to-b from-[#BFB499] via-[#C9BFA8] to-[#BFB499] text-navy-900">

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/images/energie-impact.jpg"
          alt="Impact électrification rurale EL-BOMI"
          fill priority className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#BFB499]/97 via-[#BFB499]/50 to-[#BFB499]/20" />
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Électrification rurale</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold uppercase text-navy-900 md:text-6xl lg:text-7xl"
          >
            L&apos;énergie pour tous,<br />
            <span className="bg-gradient-to-r from-gold-600 to-amber-accent bg-clip-text text-transparent">partout</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-navy-900/60"
          >
            Depuis 2015, nous connectons les zones rurales ivoiriennes au réseau électrique national.
          </motion.p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-gradient-to-b from-[#C9BFA8] to-[#B5AB94] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {impacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-navy-900/8 bg-white/40 p-5 text-center transition-all hover:border-amber-accent/25 hover:shadow-[0_0_15px_rgba(242,169,59,0.08)]"
              >
                <item.icon className={`mx-auto mb-2 h-6 w-6 ${item.color} opacity-80`} />
                <p className={`font-heading text-2xl font-bold ${item.color}`}>{item.value}</p>
                <p className="mt-1 text-xs text-navy-900/45">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Circuit séparateur */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#B5AB94] via-[#BFB499] to-[#B5AB94] py-4">
        <CircuitAnimation className="opacity-70 max-w-6xl mx-auto" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#BFB499] via-transparent to-[#BFB499]" />
      </div>

      {/* Zones — avant/après */}
      <section className="bg-gradient-to-b from-[#BFB499] to-[#C9BFA8] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Zones d&apos;intervention</span>
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-navy-900 md:text-5xl">Avant / Après</h2>
            <p className="mt-4 max-w-xl text-navy-900/55">Transformation concrète des zones rurales grâce à l&apos;électrification.</p>
          </motion.div>

          <div className="space-y-16">
            {zones.map((z, i) => (
              <motion.div
                key={z.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? '' : ''}`}
              >
                {/* Images avant/après */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="group relative overflow-hidden rounded-xl" style={{ minHeight: '200px' }}>
                    <Image src={z.before} alt={`${z.region} avant`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="25vw" />
                    <div className="absolute inset-0 bg-navy-900/30" />
                    <div className="absolute bottom-3 left-3 rounded-full border border-navy-900/15 bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy-900/60 backdrop-blur-sm">
                      Avant
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl" style={{ minHeight: '200px' }}>
                    <Image src={z.after} alt={`${z.region} après`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="25vw" />
                    <div className="absolute inset-0 bg-amber-accent/10" />
                    <div className="absolute bottom-3 left-3 rounded-full border border-amber-accent/30 bg-amber-accent/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-accent backdrop-blur-sm">
                      Après
                    </div>
                  </div>
                </div>

                {/* Infos */}
                <div>
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600/70">Région</span>
                  <h3 className="font-heading text-3xl font-bold uppercase text-navy-900">{z.region}</h3>
                  <div className="mt-4 h-px w-12 bg-gradient-to-r from-gold-500 to-transparent" />
                  <p className="mt-5 text-navy-900/55 leading-relaxed">{z.desc}</p>
                  <div className="mt-7 grid grid-cols-3 gap-4">
                    <div className="rounded-xl border border-navy-900/8 bg-white/40 p-4 text-center">
                      <p className="font-heading text-xl font-bold text-gold-600">{z.villages}</p>
                      <p className="mt-0.5 text-[10px] text-navy-900/40">Villages</p>
                    </div>
                    <div className="rounded-xl border border-navy-900/8 bg-white/40 p-4 text-center">
                      <p className="font-heading text-xl font-bold text-gold-600">{z.foyers.toLocaleString()}</p>
                      <p className="mt-0.5 text-[10px] text-navy-900/40">Foyers</p>
                    </div>
                    <div className="rounded-xl border border-navy-900/8 bg-white/40 p-4 text-center">
                      <p className="font-heading text-xl font-bold text-gold-600">{z.km} km</p>
                      <p className="mt-0.5 text-[10px] text-navy-900/40">Réseau</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline chronologie */}
      <section className="bg-gradient-to-b from-[#B5AB94] to-[#C9BFA8] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Historique</span>
              <span className="h-px w-8 bg-gold-600" />
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-navy-900">10 ans d&apos;engagement</h2>
          </motion.div>

          {/* Timeline verticale */}
          <div className="relative mx-auto max-w-3xl">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent" />

            <div className="space-y-10">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block rounded-xl border border-navy-900/8 bg-white/50 p-5 ${i % 2 === 0 ? 'ml-auto' : ''}`}>
                      <p className="font-heading text-sm font-bold uppercase text-gold-600/70 mb-1">{t.year}</p>
                      <h3 className="font-heading text-base font-bold uppercase text-navy-900 mb-2">{t.title}</h3>
                      <p className="text-xs text-navy-900/50 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                  {/* Nœud central */}
                  <div className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 bg-[#B5AB94] shadow-[0_0_12px_rgba(242,169,59,0.3)] mt-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-accent" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#B5AB94] to-navy-900 py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">
              Un projet d&apos;électrification ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/50">
              Nos équipes interviennent partout en Côte d&apos;Ivoire pour connecter vos zones à l&apos;énergie.
            </p>
            <Link href="/filiales/energie/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-amber-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-900 transition-all hover:shadow-[0_0_35px_rgba(242,169,59,0.3)]"
            >
              Nous contacter <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
