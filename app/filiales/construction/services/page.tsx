import Link from 'next/link';
import { ArrowRight, Building2, HardHat, Wrench, Home, Hammer, Layers } from 'lucide-react';

export const metadata = {
  title: 'Services | Construction | EL-BOMI GROUP',
  description: 'Bâtiment, travaux publics, génie civil, rénovation et aménagement.',
};

const services = [
  {
    icon: Building2,
    title: 'Bâtiment',
    description: 'Construction de bâtiments résidentiels, commerciaux et industriels. Gros œuvre et second œuvre.',
  },
  {
    icon: HardHat,
    title: 'Travaux Publics',
    description: 'Voiries, réseaux d\'assainissement, aménagements urbains et infrastructures routières.',
  },
  {
    icon: Wrench,
    title: 'Génie Civil',
    description: 'Ouvrages d\'art, fondations, structures en béton armé et études de sol.',
  },
  {
    icon: Home,
    title: 'Rénovation',
    description: 'Rénovation de bâtiments existants, mise aux normes et amélioration énergétique.',
  },
  {
    icon: Hammer,
    title: 'Démolition',
    description: 'Démolition contrôlée, terrassement et préparation de terrain pour nouveaux projets.',
  },
  {
    icon: Layers,
    title: 'Aménagement',
    description: 'Aménagement d\'espaces intérieurs et extérieurs, finitions et travaux de second œuvre.',
  },
];

export default function ConstructionServicesPage() {
  return (
    <>
      <section className="border-t border-gray-800 bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            Corps de métier
          </span>
          <h1 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">
            Nos services
          </h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Du gros œuvre à la construction durable, nous couvrons l&apos;ensemble des métiers du BTP.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div key={i} className="rounded-xl border border-gray-700 bg-gray-900 p-6 transition-all hover:border-orange-500/50">
                <service.icon className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="font-heading text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border border-gray-700 bg-gray-800 p-8 text-center md:p-12">
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
              Besoin d&apos;un service sur mesure ?
            </h2>
            <p className="mt-4 text-gray-400">
              Contactez-nous pour une étude personnalisée et un devis adapté à vos besoins.
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
