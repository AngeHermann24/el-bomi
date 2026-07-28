import { energieSite } from '@/lib/sites';
import SubPageHero from '@/components/subsidiary/SubPageHero';
import RealisationGrid from '@/components/subsidiary/RealisationGrid';

export const metadata = {
  title: 'Réalisations | Énergie & Électricité | EL-BOMI GROUP',
  description: 'Projets de réseaux BT/HTA, électrification rurale, solaire photovoltaïque et automatismes.',
};

export default function EnergieRealisationsPage() {
  const site = energieSite;

  return (
    <>
      <SubPageHero
        kicker={site.heroKicker}
        title="Nos réalisations"
        description="Projets clés en réseaux, électrification rurale, solaire et automatismes industriels."
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
