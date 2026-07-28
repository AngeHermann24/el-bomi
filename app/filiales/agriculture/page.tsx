import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { agricultureSite } from '@/lib/sites';
import SubStats from '@/components/subsidiary/SubStats';
import ServiceGrid from '@/components/subsidiary/ServiceGrid';
import RealisationGrid from '@/components/subsidiary/RealisationGrid';
import ProcessTimeline from '@/components/subsidiary/ProcessTimeline';
import CommitmentGrid from '@/components/subsidiary/CommitmentGrid';

export const metadata = {
  title: 'Agriculture | EL-BOMI GROUP',
  description: agricultureSite.heroText,
};

export default function AgriculturePage() {
  const site = agricultureSite;

  return (
    <>
      <section className="relative overflow-hidden border-b border-surface-line/10 bg-surface">
        <div className="absolute inset-0">
          <Image
            src={site.heroImage}
            alt={site.heroTitle}
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface/80 to-surface-alt" />
        </div>

        <div className="container-max relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <span className="eyebrow mb-4">{site.heroKicker}</span>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] text-ink md:text-5xl lg:text-6xl">
            {site.heroTitle} <span className="text-brand-500">{site.heroHighlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{site.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/filiales/agriculture/activites" className="btn-brand">
              Nos activités
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/filiales/agriculture/contact" className="btn-brand-outline">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-max">
          <SubStats stats={site.stats} variant="bar" />
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="mb-12">
            <span className="eyebrow mb-4">Nos expertises</span>
            <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">
              Filière agricole intégrée
            </h2>
          </div>
          <ServiceGrid services={site.services} variant="rows" />
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-max">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow mb-4">Projets clés</span>
              <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">
                Réalisations marquantes
              </h2>
            </div>
            <Link
              href="/filiales/agriculture/realisations"
              className="btn-brand-ghost !px-5 !py-2.5 text-sm"
            >
              Voir tout
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <RealisationGrid realisations={site.realisations.slice(0, 3)} variant="cards" />
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="mb-12">
            <span className="eyebrow mb-4">Notre méthode</span>
            <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">
              De la production à la distribution
            </h2>
          </div>
          <ProcessTimeline process={site.process} variant="horizontal" />
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-max">
          <div className="mb-12">
            <span className="eyebrow mb-4">Pourquoi nous choisir</span>
            <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">
              Nos engagements
            </h2>
          </div>
          <CommitmentGrid commitments={site.commitments} variant="cards" />
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="surface-card p-8 text-center md:p-12">
            <h2 className="font-heading text-2xl font-bold text-ink md:text-3xl">
              Un projet agricole ou agroalimentaire ?
            </h2>
            <p className="mt-4 text-ink-muted">{site.contactIntro}</p>
            <Link href="/filiales/agriculture/contact" className="btn-brand mt-6">
              Contacter l&apos;équipe agriculture
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
