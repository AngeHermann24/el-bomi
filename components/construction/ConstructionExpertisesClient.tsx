'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, HardHat, Wrench, Zap, Droplets, Layers, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const expertises = [
  {
    icon: Building2,
    title: 'Bâtiment & Génie Civil',
    slug: 'batiment',
    description: 'Construction neuve, gros œuvre, structures béton armé et charpentes métalliques. Résidentiel, commercial, industriel.',
    services: ['Construction neuve', 'Rénovation lourde', 'Structures béton armé', 'Charpente métallique', 'Second œuvre'],
    img: '/images/construction-hero.jpg',
  },
  {
    icon: HardHat,
    title: 'Travaux Publics & Voiries',
    slug: 'voiries',
    description: "Routes, autoroutes, aménagements urbains, réseaux divers et ouvrages d'art.",
    services: ["Voiries & routes", "Ouvrages d'art", 'Aménagement urbain', 'Signalisation', 'Pistes rurales'],
    img: '/images/construction-tp.jpg',
  },
  {
    icon: Map,
    title: 'Terrassement & Études SIG',
    slug: 'terrassement',
    description: 'Études topographiques, terrassement général, gestion des terres et cartographie technique.',
    services: ['Topographie & relevés', 'Déblais & remblais', 'Compactage & stabilisation', 'Cartographie SIG', 'Géotechnique'],
    img: '/images/construction-hero.jpg',
  },
  {
    icon: Layers,
    title: 'Matériaux & Béton préfabriqué',
    slug: 'materiaux',
    description: "Production de béton, fabrication d'éléments préfabriqués et fourniture de matériaux certifiés.",
    services: ['Centrale à béton', 'Préfabrication', 'Fournitures certifiées', 'Contrôle qualité', 'Béton spéciaux'],
    img: '/images/construction-real.jpg',
  },
  {
    icon: Droplets,
    title: 'Hydraulique & Assainissement',
    slug: 'hydraulique',
    description: "Réseaux d'eau potable et d'eaux usées, stations de traitement, drainage pluvial.",
    services: ['Réseaux AEP', 'Assainissement', 'Drainage pluvial', 'Stations de pompage', 'STEP'],
    img: '/images/construction-expertises.jpg',
  },
  {
    icon: Zap,
    title: 'Électricité & Éclairage public',
    slug: 'electricite',
    description: 'Installations haute et basse tension, éclairage public, courants faibles et domotique.',
    services: ['Installations HT/BT', 'Éclairage public', 'Courants faibles', 'Domotique', 'Groupes électrogènes'],
    img: '/images/construction-hero.jpg',
  },
  {
    icon: Wrench,
    title: 'Aménagement Urbain & VRD',
    slug: 'amenagement',
    description: 'Voiries et réseaux divers, espaces publics, mobilier urbain et paysagisme.',
    services: ['VRD', 'Espaces verts', 'Mobilier urbain', 'Parkings', 'Clôtures & portails'],
    img: '/images/energie-contact.jpg',
  },
];

export default function ConstructionExpertisesClient() {
  return (
    <>
      {/* Hero — image plein écran */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-end">
        <Image
          src="/images/construction-expertises.jpg"
          alt="Expertises Construction EL-BOMI"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/55 to-navy-900/20" />
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
            <span className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">Corps de métier</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl font-bold text-white md:text-6xl lg:text-7xl"
          >
            Nos <span className="text-gold-400">7 expertises</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl font-heading text-lg text-white/55"
          >
            Du gros œuvre aux VRD — nous couvrons l&apos;ensemble du cycle de construction.
          </motion.p>
        </div>
      </section>

      {/* Grille des expertises */}
      <section className="bg-navy-900 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {expertises.map((e, i) => (
              <motion.div
                key={e.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] transition-all duration-500 hover:border-gold-500/40"
              >
                {/* Image de fond */}
                <div className="aspect-[4/3]">
                  <Image
                    src={e.img}
                    alt={e.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                {/* Overlay permanent */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/98 via-navy-950/60 to-navy-950/10 transition-all duration-500" />
                {/* Contenu */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Icône */}
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/15 backdrop-blur-sm transition-colors group-hover:bg-gold-500/25">
                    <e.icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <h2 className="mb-2 font-heading text-lg font-bold text-white leading-snug">
                    {e.title}
                  </h2>
                  {/* Description + services au hover */}
                  <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-52">
                    <p className="mb-3 text-sm leading-relaxed text-white/55">{e.description}</p>
                    <ul className="space-y-1.5">
                      {e.services.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-xs text-white/45">
                          <span className="h-1 w-1 shrink-0 rounded-full bg-gold-400/50" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Bordure or en bas au hover */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] bg-navy-950 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/15 bg-gold-500/[0.04] p-10 text-center md:p-14">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
            <h2 className="relative font-heading text-2xl font-bold text-white md:text-3xl">
              Votre projet entre de bonnes mains
            </h2>
            <p className="relative mt-4 font-heading text-base text-white/55">
              Contactez-nous pour discuter de votre projet et obtenir un devis détaillé.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/filiales/construction/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-8 py-4 font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
