import { logisticsSite } from '@/lib/sites';
import SubPageHero from '@/components/subsidiary/SubPageHero';
import ServiceGrid from '@/components/subsidiary/ServiceGrid';

export const metadata = {
  title: 'Activités | Transit & Logistique | EL-BOMI GROUP',
  description: 'Transit, transport, entreposage, douane, fret maritime et aérien.',
};

export default function TransitActivitesPage() {
  const site = logisticsSite;

  return (
    <>
      <SubPageHero
        kicker={site.heroKicker}
        title="Nos activités"
        description="Solutions de transit, transport et logistique intégrée pour le commerce international."
        image={site.heroImage}
      />

      <section className="section-padding bg-surface">
        <div className="container-max">
          <ServiceGrid services={site.services} variant="rows" />
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-max">
          <div className="surface-card p-8 md:p-12">
            <h2 className="font-heading text-2xl font-bold text-ink md:text-3xl">
              Secteurs d&apos;intervention
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.sectors.map((s) => (
                <span key={s} className="brand-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
