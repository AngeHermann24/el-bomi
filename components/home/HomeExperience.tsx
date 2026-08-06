'use client';

import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useRenderMode } from '@/hooks/useRenderMode';
import { JOURNEY_VH, SCENES, sceneProgress, FILIALE_TEASERS } from '@/lib/homeJourney';
import { groupInfo, groupStats, subsidiaries } from '@/lib/group';
import LoadingScreen from './LoadingScreen';
import ExtrudedStat from './ExtrudedStat';
import TiltCard from './TiltCard';

const Experience3D = lazy(() => import('./three/Experience3D'));

/* ──────────────── Overlays DOM ──────────────── */

function HeroOverlay({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, SCENES.hero[0] * 0.7, SCENES.hero[1]], [1, 1, 0]);
  const y = useTransform(progress, [0, SCENES.hero[1]], [0, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="container-max pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-500/30 bg-gold-500/5 px-5 py-2"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
          Holding ivoirien · Fondée en {groupInfo.foundedYear}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="mb-6 font-heading text-5xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        style={{
          backgroundImage: 'linear-gradient(135deg, #C9A227 0%, #E8C766 40%, #FFF4D6 50%, #E8C766 60%, #C9A227 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 4px 20px rgba(201,162,39,0.25))',
        }}
      >
        EL-BOMI HOLDING
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75 }}
        className="mb-10 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
      >
        {groupInfo.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-400/60"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </motion.div>
  );
}

function FilialeLegends({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {FILIALE_TEASERS.map((teaser, index) => {
        const center = SCENES.journey[0] + teaser.t * (SCENES.journey[1] - SCENES.journey[0]);
        const halfWidth = ((SCENES.journey[1] - SCENES.journey[0]) / 8) * 0.55;
        return (
          <FilialeLegend
            key={teaser.slug}
            label={teaser.label}
            slug={teaser.slug}
            progress={progress}
            range={[center - halfWidth, center, center + halfWidth]}
            align={index % 2 === 0 ? 'right' : 'left'}
          />
        );
      })}
    </div>
  );
}

function FilialeLegend({
  label,
  slug,
  progress,
  range,
  align,
}: {
  label: string;
  slug: string;
  progress: MotionValue<number>;
  range: [number, number, number];
  align: 'left' | 'right';
}) {
  const opacity = useTransform(progress, range, [0, 1, 0]);
  const x = useTransform(progress, range, [align === 'right' ? 30 : -30, 0, align === 'right' ? -30 : 30]);

  return (
    <motion.div
      style={{ opacity, x }}
      className={`absolute top-1/2 max-w-[200px] -translate-y-1/2 ${
        align === 'right' ? 'right-[8%]' : 'left-[8%]'
      }`}
    >
      <Link href={`/filiales/${slug}`} className="pointer-events-auto block">
        <div className="rounded-xl border border-gold-500/20 bg-navy-950/70 px-4 py-3 backdrop-blur-md">
          <div className="mb-1 h-px w-6 bg-gold-400/50" />
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-300/90">
            {label}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

function StatsOverlay({ progress }: { progress: MotionValue<number> }) {
  const statsProgress = useTransform(progress, SCENES.stats, [0, 1]);
  const opacity = useTransform(progress, [SCENES.stats[0], SCENES.stats[0] + 0.03, SCENES.stats[1] - 0.03, SCENES.stats[1]], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center"
    >
      <div className="container-max px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Le groupe en chiffres
          </span>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {groupStats.map((stat, index) => (
            <ExtrudedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              progress={statsProgress}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function GridOverlay({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [SCENES.grid[0], SCENES.grid[0] + 0.04, SCENES.grid[1] - 0.04, SCENES.grid[1]], [0, 1, 1, 0]);
  const lineWidth = useTransform(progress, [SCENES.grid[0], SCENES.grid[0] + 0.08], ['0%', '100%']);
  const titleOpacity = useTransform(progress, [SCENES.grid[0] + 0.03, SCENES.grid[0] + 0.08], [0, 1]);
  const titleY = useTransform(progress, [SCENES.grid[0] + 0.03, SCENES.grid[0] + 0.08], [20, 0]);
  const subtitleOpacity = useTransform(progress, [SCENES.grid[0] + 0.05, SCENES.grid[0] + 0.1], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-center"
    >
      {/* Ligne dorée qui traverse l'écran */}
      <motion.div
        style={{ width: lineWidth }}
        className="absolute top-[22%] left-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
      />

      <div className="container-max px-4">
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="mx-auto mb-3 max-w-2xl text-center"
        >
          <motion.span
            style={{ opacity: subtitleOpacity }}
            className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400"
          >
            Nos filiales
          </motion.span>
          <h2 className="font-heading text-3xl font-black uppercase leading-tight text-white md:text-4xl">
            Huit pôles <span className="text-gradient">d&apos;expertise</span>
          </h2>
        </motion.div>

        <motion.p
          style={{ opacity: subtitleOpacity }}
          className="mx-auto mb-10 max-w-xl text-center text-sm leading-relaxed text-white/40"
        >
          Chaque filiale est autonome sur son métier et mobilisable avec les autres.
        </motion.p>

        <div className="pointer-events-auto grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {subsidiaries.map((sub, index) => (
            <TiltCard key={sub.slug} subsidiary={sub} index={index} />
          ))}
        </div>
      </div>

      {/* Ligne dorée en bas */}
      <motion.div
        style={{ width: lineWidth }}
        className="absolute bottom-[18%] right-0 h-px bg-gradient-to-l from-transparent via-gold-400/50 to-transparent"
      />
    </motion.div>
  );
}

function CtaOverlay({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [SCENES.cta[0], SCENES.cta[0] + 0.06, 1], [0, 1, 1]);
  const scale = useTransform(progress, [SCENES.cta[0], SCENES.cta[0] + 0.15], [0.85, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-center"
    >
      <div className="container-max px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 font-heading text-4xl font-black uppercase leading-tight text-white md:text-5xl">
            Un projet à <span className="text-gradient">porter ensemble</span> ?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/65">
            Décrivez-nous votre besoin. Nous identifions la ou les filiales concernées et
            revenons vers vous avec une proposition adaptée.
          </p>
          <div className="pointer-events-auto flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold group">
              Nous contacter
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/a-propos" className="btn-outline-gold">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────── Version 3D complète ──────────────── */

function Full3DExperience({ progress }: { progress: MotionValue<number> }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen />}
      <div className="absolute inset-0 pointer-events-none">
        <Suspense fallback={null}>
          <Experience3D progress={progress} onLoad={() => setLoaded(true)} />
        </Suspense>
      </div>
      <HeroOverlay progress={progress} />
      <FilialeLegends progress={progress} />
      <StatsOverlay progress={progress} />
      <GridOverlay progress={progress} />
      <CtaOverlay progress={progress} />
    </>
  );
}

/* ──────────────── Version allégée 2D (SVG/Framer Motion) ──────────────── */

function LiteExperience({ progress }: { progress: MotionValue<number> }) {
  const heroOpacity = useTransform(progress, [0, SCENES.hero[0] * 0.6, SCENES.hero[1]], [1, 1, 0]);
  const journeyOpacity = useTransform(progress, [SCENES.journey[0], SCENES.journey[0] + 0.03, SCENES.journey[1] - 0.03, SCENES.journey[1]], [0, 1, 1, 0]);
  const statsOpacity = useTransform(progress, [SCENES.stats[0], SCENES.stats[0] + 0.03, SCENES.stats[1] - 0.03, SCENES.stats[1]], [0, 1, 1, 0]);
  const gridOpacity = useTransform(progress, [SCENES.grid[0], SCENES.grid[0] + 0.04, SCENES.grid[1] - 0.04, SCENES.grid[1]], [0, 1, 1, 0]);
  const ctaOpacity = useTransform(progress, [SCENES.cta[0], SCENES.cta[0] + 0.06, 1], [0, 1, 1]);
  const ribbonOpacity = useTransform(progress, [0, 0.1, 0.9, 1], [0.15, 0.3, 0.3, 0.15]);
  const statsProgress = useTransform(progress, SCENES.stats, [0, 1]);

  return (
    <>
      {/* Fond dégradé fixe */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      {/* Ruban SVG animé en fond */}
      <motion.svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-30"
        style={{ opacity: ribbonOpacity }}
      >
        <defs>
          <linearGradient id="lite-ribbon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C9A227" />
            <stop offset="50%" stopColor="#E8C766" />
            <stop offset="100%" stopColor="#C9A227" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 520 C 200 520, 250 200, 450 200 S 700 520, 900 350 S 1150 150, 1200 100"
          fill="none"
          stroke="url(#lite-ribbon)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
      </motion.svg>

      {/* Hero */}
      <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-500/30 bg-gold-500/5 px-5 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
            Holding ivoirien · Fondée en {groupInfo.foundedYear}
          </span>
        </div>
        <h1
          className="mb-6 font-heading text-5xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{
            backgroundImage: 'linear-gradient(135deg, #C9A227 0%, #E8C766 40%, #FFF4D6 50%, #E8C766 60%, #C9A227 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          EL-BOMI HOLDING
        </h1>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          {groupInfo.description}
        </p>
      </motion.div>

      {/* Journey : liste des filiales en cartes sobres */}
      <motion.div style={{ opacity: journeyOpacity }} className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container-max px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {FILIALE_TEASERS.map((teaser, index) => (
              <motion.div
                key={teaser.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl border border-gold-500/15 bg-navy-900/60 p-4 text-center backdrop-blur-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-300/80">
                  {teaser.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div style={{ opacity: statsOpacity }} className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="container-max px-4">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Le groupe en chiffres
            </span>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            {groupStats.map((stat, index) => (
              <ExtrudedStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                progress={statsProgress}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div style={{ opacity: gridOpacity }} className="absolute inset-0 z-10 flex flex-col justify-center">
        <div className="container-max px-4">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Nos filiales
            </span>
            <h2 className="font-heading text-3xl font-black uppercase leading-tight text-white md:text-4xl">
              Huit pôles <span className="text-gradient">d&apos;expertise</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {subsidiaries.map((sub, index) => (
              <TiltCard key={sub.slug} subsidiary={sub} index={index} animate={false} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div style={{ opacity: ctaOpacity }} className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <div className="container-max px-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-heading text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              Un projet à <span className="text-gradient">porter ensemble</span> ?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/65">
              Décrivez-nous votre besoin. Nous identifions la ou les filiales concernées et
              revenons vers vous avec une proposition adaptée.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold group">
                Nous contacter
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/a-propos" className="btn-outline-gold">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

/* ──────────────── Version statique (reduced-motion) ──────────────── */

function StaticExperience() {
  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
        {/* Hero */}
        <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold-500/30 bg-gold-500/5 px-5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
              Holding ivoirien · Fondée en {groupInfo.foundedYear}
            </span>
          </div>
          <h1
            className="mb-6 font-heading text-5xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{
              backgroundImage: 'linear-gradient(135deg, #C9A227 0%, #E8C766 40%, #FFF4D6 50%, #E8C766 60%, #C9A227 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            EL-BOMI HOLDING
          </h1>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {groupInfo.description}
          </p>
        </section>

        {/* Stats */}
        <section className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Le groupe en chiffres
            </span>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            {groupStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-5xl font-black text-gold-300 md:text-6xl">
                  {stat.value}{stat.suffix}
                </div>
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="flex min-h-screen flex-col justify-center px-4 py-12 sm:py-20">
          <div className="container-max">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                Nos filiales
              </span>
              <h2 className="font-heading text-3xl font-black uppercase leading-tight text-white md:text-4xl">
                Huit pôles <span className="text-gradient">d&apos;expertise</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {subsidiaries.map((sub, index) => (
                <TiltCard key={sub.slug} subsidiary={sub} index={index} animate={false} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-heading text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              Un projet à <span className="text-gradient">porter ensemble</span> ?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/65">
              Décrivez-nous votre besoin. Nous identifions la ou les filiales concernées et
              revenons vers vous avec une proposition adaptée.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold group">
                Nous contacter
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/a-propos" className="btn-outline-gold">
                En savoir plus
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ──────────────── Composant racine ──────────────── */

export default function HomeExperience() {
  const mode = useRenderMode();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Synchroniser la MotionValue pour qu'elle soit stable entre renders
  const progress = useRef<MotionValue<number>>(scrollYProgress);
  progress.current = scrollYProgress;

  // Mode pending (SSR / premier paint) : on rend un socle neutre
  if (mode === 'pending') {
    return (
      <div ref={containerRef} style={{ height: `${JOURNEY_VH}vh` }} className="relative z-0">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-navy-950">
          <LoadingScreen />
        </div>
      </div>
    );
  }

  if (mode === 'static') {
    return <StaticExperience />;
  }

  return (
    <div ref={containerRef} style={{ height: `${JOURNEY_VH}vh` }} className="relative z-0">
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        {mode === 'full3d' && <Full3DExperience progress={progress.current} />}
        {mode === 'lite' && <LiteExperience progress={progress.current} />}
      </div>
    </div>
  );
}
