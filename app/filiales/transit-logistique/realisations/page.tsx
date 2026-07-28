import { logisticsSite } from '@/lib/sites';
import SubPageHero from '@/components/subsidiary/SubPageHero';
import RealisationGrid from '@/components/subsidiary/RealisationGrid';

export const metadata = {
  title: 'Réalisations | Transit & Logistique | EL-BOMI GROUP',
  description: 'Projets de transit, transport, entreposage et logistique internationale.',
};

export default function TransitRealisationsPage() {
  const site = logisticsSite;

  return (
    <>
      <SubPageHero
        kicker={site.heroKicker}
        title="Nos réalisations"
        description="Projets clés en transit, transport, entreposage et chaîne logistique."
        image={site.heroImage}
      />

      <section className="section-padding bg-surface">
        <div className="container-max">
          <RealisationGrid realisations={site.realisations} variant="list" />
        </div>
      </section>
    </>
  );
}
