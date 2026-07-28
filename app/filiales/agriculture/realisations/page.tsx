import { agricultureSite } from '@/lib/sites';
import SubPageHero from '@/components/subsidiary/SubPageHero';
import RealisationGrid from '@/components/subsidiary/RealisationGrid';

export const metadata = {
  title: 'Réalisations | Agriculture | EL-BOMI GROUP',
  description: 'Projets de production agricole, élevage et transformation agroalimentaire.',
};

export default function AgricultureRealisationsPage() {
  const site = agricultureSite;

  return (
    <>
      <SubPageHero
        kicker={site.heroKicker}
        title="Nos réalisations"
        description="Projets clés en production agricole, élevage et transformation agroalimentaire."
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
