import { medicalSite } from '@/lib/sites';
import SubPageHero from '@/components/subsidiary/SubPageHero';
import RealisationGrid from '@/components/subsidiary/RealisationGrid';

export const metadata = {
  title: 'Réalisations | Distribution Médicale | EL-BOMI GROUP',
  description: 'Projets d\'équipements médicaux, laboratoires et installations hospitalières.',
};

export default function MedicalRealisationsPage() {
  const site = medicalSite;

  return (
    <>
      <SubPageHero
        kicker={site.heroKicker}
        title="Nos réalisations"
        description="Projets clés en équipements médicaux, laboratoires et installations hospitalières."
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
