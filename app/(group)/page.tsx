import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import GroupHero from '@/components/GroupHero';
import StatCounter from '@/components/StatCounter';
import SubsidiaryCard from '@/components/SubsidiaryCard';
import Timeline from '@/components/Timeline';
import GoldRibbon from '@/components/GoldRibbon';
import IconRenderer from '@/components/IconRenderer';
import { subsidiaries, groupStats, pillars, timeline } from '@/lib/group';

export default function HomePage() {
  return (
    <>
      <GroupHero />

      {/* Chiffres clés */}
      <StatCounter stats={groupStats} />

      {/* Les 8 filiales */}
      <section id="filiales" className="section-light relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-60">
          <GoldRibbon variant="divider" opacity={0.4} className="h-60" />
        </div>

        <div className="container-max relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Nos filiales
            </span>
            <h2 className="mb-6 font-heading text-4xl font-black uppercase leading-tight text-navy-900 md:text-5xl">
              Huit pôles d&apos;expertise
            </h2>
            <p className="leading-relaxed text-navy-900/60">
              Chaque filiale est autonome sur son métier et mobilisable avec les autres.
              C&apos;est ce qui nous permet de traiter un projet complet sans multiplier les
              intervenants.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subsidiaries.map((sub, i) => (
              <SubsidiaryCard key={sub.slug} subsidiary={sub} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Nos piliers */}
      <section className="section-padding relative overflow-hidden bg-navy-900">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-gold-500/[0.05] blur-[120px]" />

        <div className="container-max relative">
          <div className="mb-16 max-w-2xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Notre différence
            </span>
            <h2 className="font-heading text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              Ce qui nous <span className="text-gradient">distingue</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/40 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 transition-colors duration-300 group-hover:border-gold-500/60 group-hover:bg-gold-500/20">
                  <IconRenderer name={pillar.icon} className="h-7 w-7 text-gold-400" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frise historique */}
      <section className="section-padding relative overflow-hidden bg-navy-950">
        <div className="container-max relative">
          <div className="mb-16 max-w-2xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Notre parcours
            </span>
            <h2 className="font-heading text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              Une croissance <span className="text-gradient">par étapes</span>
            </h2>
          </div>

          <Timeline entries={timeline} />
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
          alt="Projet EL-BOMI GROUP"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />

        <div className="container-max relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="mb-6 font-heading text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              Un projet à <span className="text-gradient">porter ensemble</span> ?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/65">
              Décrivez-nous votre besoin. Nous identifions la ou les filiales concernées et
              revenons vers vous avec une proposition adaptée.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold group">
                Nous contacter
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/a-propos" className="btn-outline-gold">
                En savoir plus sur le groupe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
