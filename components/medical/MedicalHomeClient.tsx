'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  HeartPulse, Microscope, Pill, Building2, Droplets,
  ArrowRight, ChevronDown, Shield, Star, Users, CheckCircle2,
  Award, Globe,
} from 'lucide-react';

const stats = [
  { value: '12', label: 'Centres d\'hémodialyse', icon: Droplets },
  { value: '2 400+', label: 'Patients accompagnés', icon: Users },
  { value: '500+', label: 'Établissements équipés', icon: Building2 },
  { value: '15 ans', label: 'D\'expertise santé', icon: Award },
];

const activites = [
  {
    icon: Microscope,
    title: 'Équipements & dispositifs médicaux',
    desc: 'Distribution d\'équipements hospitaliers, imagerie, chirurgie, soins intensifs — marques leaders certifiées CE/ISO.',
    img: '/images/medical-hero.jpg',
    href: '/filiales/medical/activites',
    color: 'text-[#4A7C7C]',
    bg: 'bg-[#4A7C7C]/6',
    border: 'border-[#4A7C7C]/15',
  },
  {
    icon: Droplets,
    title: 'Centres d\'hémodialyse',
    desc: 'Gestion de centres d\'hémodialyse modernes, équipements Fresenius & Gambro, suivi patient personnalisé.',
    img: '/images/medical-dialyse.jpg',
    href: '/filiales/medical/centres',
    color: 'text-[#0B1E3D]',
    bg: 'bg-[#0B1E3D]/4',
    border: 'border-[#0B1E3D]/10',
  },
  {
    icon: Pill,
    title: 'Produits pharmaceutiques',
    desc: 'Médicaments essentiels, parapharmacie, dispositifs OTC — distribution nationale respectant la chaîne du froid.',
    img: '/images/medical-dialyse.jpg',
    href: '/filiales/medical/activites',
    color: 'text-[#C9A227]',
    bg: 'bg-[#C9A227]/6',
    border: 'border-[#C9A227]/15',
  },
  {
    icon: HeartPulse,
    title: 'Matériel biomédical & labo',
    desc: 'Équipements de laboratoire, analyseurs, matériel dentaire et de stérilisation pour cliniques et hôpitaux.',
    img: '/images/medical-qualite.jpg',
    href: '/filiales/medical/activites',
    color: 'text-[#4A7C7C]',
    bg: 'bg-[#4A7C7C]/6',
    border: 'border-[#4A7C7C]/15',
  },
  {
    icon: Building2,
    title: 'Construction de cliniques',
    desc: 'Conception, construction et équipement clé en main de cliniques, centres de santé et unités spécialisées.',
    img: '/images/medical-equipe.jpg',
    href: '/filiales/medical/activites',
    color: 'text-[#0B1E3D]',
    bg: 'bg-[#0B1E3D]/4',
    border: 'border-[#0B1E3D]/10',
  },
];

const temoignages = [
  {
    quote: 'EL-BOMI Medical a équipé notre bloc opératoire en un temps record. La qualité du matériel et le suivi technique sont irréprochables.',
    name: 'Dr. Kouamé Assi',
    role: 'Chirurgien, Clinique Sainte-Marie',
    img: '/images/medical-equipe.jpg',
  },
  {
    quote: 'Nos patients hémodialysés bénéficient d\'un accompagnement de qualité internationale grâce aux équipements fournis et maintenus par EL-BOMI.',
    name: 'Dr. Aminata Diallo',
    role: 'Néphrologue, Centre de Dialyse d\'Abidjan',
    img: '/images/medical-hero.jpg',
  },
  {
    quote: 'La réactivité de leur équipe technique 24h/24 et la disponibilité des pièces nous permettent de maintenir nos équipements opérationnels en permanence.',
    name: 'Pr. Yao N\'Guessan',
    role: 'Directeur médical, CHU de Cocody',
    img: '/images/medical-dialyse.jpg',
  },
];

const engagements = [
  { icon: Shield,       title: 'Qualité certifiée',    desc: 'ISO 9001 · Normes OMS · MSDS CI' },
  { icon: CheckCircle2, title: 'SAV 24h/24',           desc: 'Maintenance préventive et corrective sur site' },
  { icon: Globe,        title: 'Marques mondiales',    desc: 'Partenaire agréé Siemens, Fresenius, Gambro' },
  { icon: Star,         title: 'Patients d\'abord',   desc: 'Protocoles centrés patient, formation continue' },
];

export default function MedicalHomeClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const imgScale = useTransform(scrollY, [0, 600], [1, 1.1]);

  return (
    <div className="bg-white text-[#0B1E3D]">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        {/* Grande image de fond */}
        <motion.div style={{ scale: imgScale }} className="absolute inset-0">
          <Image
            src="/images/medical-hero.jpg"
            alt="Soins médicaux"
            fill priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Overlay dégradé sophistiqué */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/97 via-white/88 to-white/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/60" />

        {/* Accent teal subtil */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#4A7C7C]/30 to-transparent" />

        <motion.div style={{ opacity: heroOpacity, y: heroY }}
          className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 pt-20"
        >
          <div className="max-w-xl">
            {/* Kicker */}
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Santé · Confiance · Excellence</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}
              className="font-heading text-5xl font-bold leading-[1.08] text-[#0B1E3D] md:text-6xl lg:text-7xl"
            >
              La santé,<br />
              <span className="relative inline-block">
                au cœur
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#C9A227] to-transparent" />
              </span><br />
              <span className="text-[#4A7C7C]">de nos actions.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="mt-7 max-w-lg text-lg leading-relaxed text-[#0B1E3D]/52"
            >
              Équipements médicaux, hémodialyse, pharmacie et construction de cliniques — EL-BOMI Medical accompagne les professionnels de santé ivoiriens avec des solutions fiables et certifiées.
            </motion.p>

            {/* Mini stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-6"
            >
              {[
                { v: '12', l: 'centres hémodialyse' },
                { v: '2 400+', l: 'patients' },
                { v: '500+', l: 'établissements' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-heading text-2xl font-bold text-[#C9A227]">{s.v}</p>
                  <p className="text-xs text-[#0B1E3D]/40">{s.l}</p>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/filiales/medical/activites"
                className="group rounded-xl bg-[#0B1E3D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0B1E3D]/85 hover:shadow-[0_8px_30px_rgba(11,30,61,0.22)]"
              >
                <span className="flex items-center gap-2">
                  Nos activités <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link href="/filiales/medical/centres"
                className="group rounded-xl border border-[#4A7C7C]/25 bg-[#4A7C7C]/5 px-7 py-3.5 text-sm font-semibold text-[#4A7C7C] transition-all hover:bg-[#4A7C7C]/10 hover:border-[#4A7C7C]/40"
              >
                <span className="flex items-center gap-2">
                  Centres d&apos;hémodialyse <Droplets className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown className="h-5 w-5 text-[#0B1E3D]/22" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS BANDE ───────────────────────────────────────────── */}
      <section className="bg-[#0B1E3D] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center gap-2 py-4 text-center"
              >
                <s.icon className="h-6 w-6 text-[#C9A227]/60" strokeWidth={1.5} />
                <p className="font-heading text-3xl font-bold text-[#C9A227]">{s.value}</p>
                <p className="text-xs text-white/40">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIVITÉS ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A227]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Nos expertises</span>
              </div>
              <h2 className="font-heading text-4xl font-bold text-[#0B1E3D] md:text-5xl">5 domaines de santé</h2>
            </div>
            <Link href="/filiales/medical/activites"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0B1E3D]/40 hover:text-[#0B1E3D] transition-colors"
            >
              Voir tout <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {activites.map((a, i) => (
              <motion.div key={a.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55, delay: i * 0.07 }}
                className={`group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-500 hover:shadow-[0_12px_40px_rgba(11,30,61,0.1)] hover:-translate-y-1 ${a.border}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={a.img} alt={a.title} fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className={`mb-4 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 ${a.bg} ${a.border}`}>
                    <a.icon className={`h-4 w-4 ${a.color}`} strokeWidth={1.8} />
                    <span className={`text-xs font-semibold ${a.color}`}>{a.title.split(' ')[0]}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#0B1E3D] leading-snug">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0B1E3D]/45">{a.desc}</p>
                  <Link href={a.href}
                    className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${a.color} opacity-50 hover:opacity-100`}
                  >
                    En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMMERSIF — HÉMODIALYSE ─────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/medical-dialyse.jpg" alt="Hémodialyse" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3D]/96 via-[#0B1E3D]/80 to-[#0B1E3D]/30" />
        </div>
        <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 py-28">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="max-w-lg"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]/70">Hémodialyse</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">
              12 centres dédiés<br />
              <span className="text-[#4A7C7C]">aux patients insuffisants rénaux</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/50">
              Nos centres d&apos;hémodialyse sont équipés des meilleures machines Fresenius 5008, avec un suivi médical personnalisé 3 séances par semaine.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: '12', l: 'Centres' },
                { v: '3×/sem', l: 'Séances' },
                { v: '24h/24', l: 'Astreinte' },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center backdrop-blur-sm">
                  <p className="font-heading text-xl font-bold text-[#C9A227]">{s.v}</p>
                  <p className="mt-0.5 text-xs text-white/40">{s.l}</p>
                </div>
              ))}
            </div>
            <Link href="/filiales/medical/centres"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#0B1E3D] transition-all hover:bg-white/90 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
            >
              Voir nos centres <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Partenaires & patients</span>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-[#0B1E3D] md:text-5xl">Ils nous font confiance</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {temoignages.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-[#0B1E3D]/6 bg-[#F7F7F5] p-7 transition-all hover:shadow-md"
              >
                {/* Guillemets */}
                <div className="mb-5 font-heading text-5xl font-bold leading-none text-[#C9A227]/25">&ldquo;</div>
                <p className="text-[15px] leading-relaxed text-[#0B1E3D]/60 italic">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[#4A7C7C]/20">
                    <Image src={t.img} alt={t.name} fill className="object-cover" sizes="44px" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-[#0B1E3D]">{t.name}</p>
                    <p className="text-xs text-[#0B1E3D]/38">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENTS ────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Notre ADN</span>
              <span className="h-px w-8 bg-[#C9A227]" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-[#0B1E3D]">Nos engagements qualité</h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {engagements.map((e, i) => (
              <motion.div key={e.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-[#0B1E3D]/6 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#4A7C7C]/15 bg-[#4A7C7C]/6 transition-all group-hover:bg-[#4A7C7C]/12">
                  <e.icon className="h-5 w-5 text-[#4A7C7C]" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading text-sm font-bold text-[#0B1E3D]">{e.title}</h3>
                <p className="mt-1.5 text-xs text-[#0B1E3D]/42">{e.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 text-center">
            <Link href="/filiales/medical/qualite"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A7C7C] hover:text-[#0B1E3D] transition-colors"
            >
              Notre démarche qualité <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── BANDE CHIFFRE + PHOTO ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(11,30,61,0.1)]"
              style={{ minHeight: '420px' }}
            >
              <Image src="/images/medical-qualite.jpg" alt="Soins" fill className="object-cover" sizes="50vw" />
              {/* Badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4A7C7C]/10">
                  <HeartPulse className="h-5 w-5 text-[#4A7C7C]" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-[#0B1E3D]">+500 établissements</p>
                  <p className="text-xs text-[#0B1E3D]/45">équipés à travers le pays</p>
                </div>
              </div>
            </motion.div>
            {/* Texte */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A227]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4A7C7C]">Notre mission</span>
              </div>
              <h2 className="font-heading text-4xl font-bold text-[#0B1E3D] md:text-5xl">
                Rendre la santé<br />de qualité accessible.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#0B1E3D]/50">
                Depuis 15 ans, EL-BOMI Medical Distribution œuvre pour démocratiser l&apos;accès aux équipements médicaux de qualité en Côte d&apos;Ivoire et en Afrique de l&apos;Ouest.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  'Partenaire agréé des plus grandes marques mondiales',
                  'Équipe de techniciens biomédicaux certifiés',
                  'Maintenance préventive et corrective garantie',
                  'Formation des équipes soignantes incluse',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#0B1E3D]/55">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4A7C7C]" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/filiales/medical/qualite"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0B1E3D] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0B1E3D]/85 hover:shadow-[0_8px_30px_rgba(11,30,61,0.2)]"
              >
                Notre engagement qualité <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA CONTACT ─────────────────────────────────────────────── */}
      <section className="bg-[#0B1E3D] py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <HeartPulse className="mx-auto mb-5 h-10 w-10 text-[#4A7C7C]" strokeWidth={1.5} />
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Un projet médical en Côte d&apos;Ivoire ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/42">
              Équipement, hémodialyse, pharma ou construction — notre équipe vous accompagne de A à Z.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/filiales/medical/contact"
                className="rounded-xl border border-[#C9A227]/30 bg-[#C9A227]/10 px-8 py-3.5 text-sm font-semibold text-[#C9A227] transition-all hover:bg-[#C9A227]/20"
              >
                Nous contacter
              </Link>
              <Link href="/filiales/medical/activites"
                className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#0B1E3D] transition-all hover:bg-white/90"
              >
                Nos activités
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
