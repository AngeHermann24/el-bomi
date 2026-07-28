import Link from 'next/link';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Projets | Construction | EL-BOMI GROUP',
  description: 'Portfolio de réalisations en bâtiment, travaux publics et génie civil.',
};

const projects = [
  {
    title: 'Centre Commercial Abidjan',
    location: 'Abidjan, Côte d\'Ivoire',
    year: '2023',
    description: 'Bâtiment commercial de 12 000 m² sur 3 niveaux avec parking et espaces commerciaux.',
  },
  {
    title: 'Route Yamoussoukro',
    location: 'Yamoussoukro, Côte d\'Ivoire',
    year: '2022',
    description: 'Travaux de voirie sur 45 km avec aménagements urbains et réseaux d\'assainissement.',
  },
  {
    title: 'Résidence Cocody',
    location: 'Abidjan, Côte d\'Ivoire',
    year: '2023',
    description: 'Ensemble résidentiel de 40 villas haut standing avec piscine et jardins.',
  },
  {
    title: 'Pont de Bouaké',
    location: 'Bouaké, Côte d\'Ivoire',
    year: '2021',
    description: 'Ouvrage d\'art de 120 m sur le Bandama avec fondations profondes.',
  },
];

export default function ConstructionProjectsPage() {
  return (
    <>
      <section className="border-t border-gray-800 bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            Réalisations
          </span>
          <h1 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">
            Nos projets
          </h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Découvrez nos réalisations en bâtiment, travaux publics et génie civil.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <div key={i} className="rounded-xl border border-gray-700 bg-gray-900 p-6 transition-all hover:border-orange-500/50">
                <div className="aspect-video bg-gray-800 mb-4 rounded-lg" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border border-gray-700 bg-gray-800 p-8 text-center md:p-12">
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
              Un projet à réaliser ?
            </h2>
            <p className="mt-4 text-gray-400">
              Notre équipe d&apos;ingénieurs et de conducteurs de travaux est prête à vous accompagner.
            </p>
            <Link href="/filiales/construction/contact" className="btn-orange mt-6">
              Demander un devis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
