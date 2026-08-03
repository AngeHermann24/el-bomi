import { energieSite } from '@/lib/sites';
import SubPageHero from '@/components/subsidiary/SubPageHero';
import ServiceGrid from '@/components/subsidiary/ServiceGrid';

export const metadata = {
  title: 'Activités | Énergie & Électricité | EL-BOMI HOLDING',
  description: 'Réseaux BT/HTA, électrification rurale, solaire photovoltaïque, maintenance et automatismes industriels.',
};

export default function EnergieActivitesPage() {
  const site = energieSite;

  return (
    <>
      <SubPageHero
        kicker={site.heroKicker}
        title="Nos activités"
        description="Une intervention sur toute la chaîne électrique : études, construction, maintenance et exploitation."
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
