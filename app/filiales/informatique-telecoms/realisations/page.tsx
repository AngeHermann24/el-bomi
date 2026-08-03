import { itSite } from '@/lib/sites';
import SubPageHero from '@/components/subsidiary/SubPageHero';
import RealisationGrid from '@/components/subsidiary/RealisationGrid';

export const metadata = {
  title: 'Réalisations | Informatique & Télécoms | EL-BOMI HOLDING',
  description: 'Projets de réseaux, fibre optique, data centers, cybersécurité et développement.',
};

export default function ITRealisationsPage() {
  const site = itSite;

  return (
    <>
      <SubPageHero
        kicker={site.heroKicker}
        title="Nos réalisations"
        description="Projets clés en infrastructures numériques, fibre, data centers et cybersécurité."
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
