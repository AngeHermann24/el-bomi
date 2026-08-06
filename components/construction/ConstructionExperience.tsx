'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Phone } from 'lucide-react';
import dynamic from 'next/dynamic';
import ConstructionLoadingScreen from './ConstructionLoadingScreen';
import ConstructionLiteExperience from './ConstructionLiteExperience';
import { groupInfo } from '@/lib/group';

const ConstructionScene3D = dynamic(() => import('./ConstructionScene3D'), {
  ssr: false,
  loading: () => null,
});

const TOTAL_VH = 850;

/* ═══ DONNÉES ═══ */

const expertiseZones = [
  { title: 'Bâtiment & Génie Civil', desc: 'La tour que vous venez de voir se construire — structure béton armé, gros œuvre, architecture technique.' },
  { title: 'Travaux Publics & Voiries', desc: 'La route dorée qui se trace au sol — routes, réseaux, ouvrages d\'art, aménagements urbains.' },
  { title: 'Terrassement & Études SIG', desc: 'Les courbes de niveau qui apparaissent — études de sol, terrassement, cartographie et plans topographiques.' },
  { title: 'Hydraulique & Assainissement', desc: 'Le réseau de canalisations sous le sol — réseaux d\'eau, drainage, stations de traitement.' },
  { title: 'Électricité & Éclairage Public', desc: 'Les poteaux qui s\'allument en doré — installations HT/BT, éclairage urbain, courants faibles.' },
];

const stats = [
  { value: '250+', label: 'Projets livrés' },
  { value: '6+', label: 'Années d\'expérience' },
  { value: '80+', label: 'Ingénieurs & techniciens' },
];

const projects = [
  {
    title: 'Centre Commercial Abidjan',
    type: 'Bâtiment commercial',
    area: '12 000 m²',
    year: '2023',
    img: '/images/construction-hero.jpg',
    span: 'lg:col-span-2',
  },
  {
    title: 'Route Yamoussoukro–Bouaké',
    type: 'Travaux publics',
    area: '45 km',
    year: '2022',
    img: '/images/construction-tp.jpg',
    span: '',
  },
  {
    title: 'Résidence Cocody Premium',
    type: 'Logements haut standing',
    area: '8 500 m²',
    year: '2023',
    img: '/images/construction-real.jpg',
    span: '',
  },
];

const GRID_STYLE = {
  backgroundImage: `linear-gradient(rgb(255 255 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)`,
  backgroundSize: '40px 40px',
};

/* ═══ DÉTECTION DEVICE ═══ */

function useDeviceTier() {
  const [tier, setTier] = useState<'full' | 'lite'>('full');

  useEffect(() => {
    const check = () => {
      const isMobile = window.innerWidth < 768;
      const isLowPower = navigator.hardwareConcurrency < 4;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setTier(isMobile || isLowPower || prefersReduced ? 'lite' : 'full');
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return tier;
}

/* ═══ OVERLAYS DOM ═══ */

function Scene1Overlay({ opacity }: { opacity: number }) {
  return (
    <div className="absolute inset-0 flex items-center" style={{ opacity }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-rust-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-rust-400">
            BTP · Travaux Publics · Génie Civil
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-5xl font-bold uppercase leading-[1.0] text-white md:text-6xl lg:text-7xl"
        >
          EL-BOMI
          <br />
          <span className="text-rust-400">Construction</span>
          <br />
          & Infrastructures
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-white/65"
        >
          Le chantier qui se construit sous vos yeux. De l&apos;étude à la réception,
          chaque projet est une promesse tenue.
        </motion.p>
      </div>
    </div>
  );
}

function Scene2Overlay({ opacity }: { opacity: number }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center pb-20" style={{ opacity }}>
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-rust-500/30 bg-anthracite-950/60 px-5 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-rust-400" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rust-300">
            Édification en cours
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-md text-sm text-white/50"
        >
          Chaque étage s&apos;élève au rythme de votre scroll — la grue positionne les éléments,
          les structures porteuses se révèlent en doré.
        </motion.p>
      </div>
    </div>
  );
}

function Scene3Overlay({ opacity, zoneIndex }: { opacity: number; zoneIndex: number }) {
  const zone = expertiseZones[zoneIndex];
  if (!zone) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-end" style={{ opacity }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="ml-auto max-w-md">
          <motion.div
            key={zoneIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-rust-500/20 bg-anthracite-950/70 p-6 backdrop-blur-md"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-rust-400">
              Zone {zoneIndex + 1}
            </span>
            <h3 className="mt-2 font-heading text-xl font-bold uppercase text-white">
              {zone.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {zone.desc}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Scene4Overlay({ opacity }: { opacity: number }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ opacity }}>
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
            Chiffres clés
          </span>
          <div className="mt-8 flex flex-wrap justify-center gap-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="font-heading text-5xl font-bold text-rust-400 md:text-6xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/40">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══ GALERIE RÉALISATIONS (DOM, photos réelles) ═══ */

function RealisationsSection() {
  return (
    <section className="relative bg-anthracite-950 py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-rust-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">Réalisations</span>
            </div>
            <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl">
              Projets phares
            </h2>
          </div>
          <Link
            href="/filiales/construction/realisations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-rust-400 hover:text-rust-300 transition-colors"
          >
            Tous les projets <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border-2 border-rust-500/10 transition-all duration-500 hover:border-rust-500/40 ${p.span} ${i === 0 ? 'lg:row-span-2' : ''}`}
            >
              <div className={`relative w-full ${i === 0 ? 'aspect-[3/4] lg:h-full lg:min-h-[500px]' : 'aspect-[16/10]'}`}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/90 via-anthracite-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-rust-500/30 bg-rust-500/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-rust-400 backdrop-blur-sm">
                    {p.type}
                  </span>
                  <span className="text-xs text-white/40">{p.area} · {p.year}</span>
                </div>
                <h3 className="font-heading text-lg font-bold uppercase text-white transition-colors group-hover:text-rust-300">
                  {p.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ CTA FINAL (DOM, formulaire de devis) ═══ */

function CtaSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={GRID_STYLE} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rust-500/60 to-transparent" />

      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.35em] text-rust-400">
            Parlons de votre projet
          </span>
          <h2 className="font-heading text-4xl font-bold uppercase text-white md:text-5xl lg:text-6xl">
            Construisons ensemble
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/55">
            Partagez-nous vos besoins — nous vous répondons sous 48h avec une première estimation gratuite.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/filiales/construction/contact"
              className="inline-flex items-center gap-2.5 rounded-xl bg-rust-500 px-9 py-5 text-sm font-bold uppercase tracking-wide text-anthracite-900 transition-all hover:-translate-y-1 hover:bg-rust-400 hover:shadow-2xl hover:shadow-rust-500/30"
            >
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${groupInfo.phoneRaw}`}
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 px-9 py-5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-rust-500/50 hover:bg-white/5 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {groupInfo.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ EXPÉRIENCE 3D COMPLÈTE ═══ */

function FullExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const progressRef = useRef(0);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      progressRef.current = v;
    });
    return () => unsub();
  }, [scrollYProgress]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Calcul des opacités pour chaque overlay
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]);
  const scene2Opacity = useTransform(scrollYProgress, [0.12, 0.18, 0.38, 0.42], [0, 1, 1, 0]);
  const scene3Opacity = useTransform(scrollYProgress, [0.4, 0.46, 0.68, 0.72], [0, 1, 1, 0]);
  const scene4Opacity = useTransform(scrollYProgress, [0.72, 0.76, 0.8], [0, 1, 0]);

  // Index de zone pour scène 3
  const [zoneIndex, setZoneIndex] = useState(0);
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (v >= 0.4 && v < 0.72) {
        const idx = Math.min(Math.floor(((v - 0.4) / 0.32) * 5), 4);
        setZoneIndex(idx);
      }
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} style={{ height: `${TOTAL_VH}vh` }} className="relative z-0">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!loaded && <ConstructionLoadingScreen />}

        {/* Canvas 3D */}
        <div className="absolute inset-0 pointer-events-none">
          <ConstructionScene3D progressRef={progressRef} />
        </div>

        {/* Overlays DOM */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <Scene1Overlay opacity={0} />
        </div>

        {/* Overlays avec motion values */}
        <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ opacity: scene1Opacity }}>
          <Scene1Overlay opacity={1} />
        </motion.div>

        <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ opacity: scene2Opacity }}>
          <Scene2Overlay opacity={1} />
        </motion.div>

        <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ opacity: scene3Opacity }}>
          <Scene3Overlay opacity={1} zoneIndex={zoneIndex} />
        </motion.div>

        <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ opacity: scene4Opacity }}>
          <Scene4Overlay opacity={1} />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollYProgress.get() < 0.05 ? 1 : 0 }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-8 w-px bg-gradient-to-b from-rust-400/50 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}

/* ═══ COMPOSANT PRINCIPAL ═══ */

export default function ConstructionExperience() {
  const tier = useDeviceTier();

  if (tier === 'lite') {
    return (
      <>
        <ConstructionLiteExperience />
        <RealisationsSection />
        <CtaSection />
      </>
    );
  }

  return (
    <>
      <FullExperience />
      <RealisationsSection />
      <CtaSection />
    </>
  );
}
