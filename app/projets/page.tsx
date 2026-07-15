import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Projets | EL-BOMI GROUP',
  description: 'Découvrez les réalisations d\'EL-BOMI GROUP en immobilier, construction et travaux publics en Côte d\'Ivoire.',
};

export default function ProjetsPage() {
  const categories = ['Tous', ...Array.from(new Set(projects.map((p) => p.category)))];

  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Nos Réalisations"
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90"
      />

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
