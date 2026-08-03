import { itSite } from '@/lib/sites';
import SubPageHero from '@/components/subsidiary/SubPageHero';
import ServiceGrid from '@/components/subsidiary/ServiceGrid';

export const metadata = {
  title: 'Activités | Informatique & Télécoms | EL-BOMI HOLDING',
  description: 'Réseaux, fibre optique, data centers, cloud, cybersécurité et sécurité électronique.',
};

export default function ITActivitesPage() {
  const site = itSite;

  return (
    <>
      <SubPageHero
        kicker={site.heroKicker}
        title="Nos activités"
        description="Conception, déploiement et exploitation des infrastructures numériques des entreprises et collectivités."
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
