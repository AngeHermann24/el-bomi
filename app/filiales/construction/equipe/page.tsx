import Link from 'next/link';
import { ArrowRight, User, HardHat, Wrench } from 'lucide-react';

export const metadata = {
  title: 'Équipe | Construction | EL-BOMI HOLDING',
  description: 'Ingénieurs, conducteurs de travaux et chefs de chantier.',
};

const team = [
  {
    name: 'Kouassi Kouamé',
    role: 'Directeur Général',
    description: '20 ans d\'expérience en BTP et travaux publics.',
  },
  {
    name: 'Aya Touré',
    role: 'Ingénieur Génie Civil',
    description: 'Spécialiste des ouvrages d\'art et structures.',
  },
  {
    name: 'Yao Koffi',
    role: 'Conducteur de Travaux',
    description: 'Expert en gestion de chantier et planning.',
  },
  {
    name: 'Adjoua Brou',
    role: 'Chef de Chantier',
    description: 'Coordination des équipes et qualité.',
  },
];

export default function ConstructionEquipePage() {
  return (
    <>
      <section className="border-t border-gray-800 bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            Notre équipe
          </span>
          <h1 className="font-heading text-3xl font-bold uppercase text-white md:text-4xl">
            Des experts au service de vos chantiers
          </h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Ingénieurs, conducteurs de travaux et chefs de chantier portent chaque projet avec
            rigueur et engagement, de l&apos;étude à la réception.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <div key={i} className="rounded-xl border border-gray-700 bg-gray-900 p-6 text-center transition-all hover:border-orange-500/50">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
                  <User className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-orange-500 mb-2">{member.role}</p>
                <p className="text-xs text-gray-400">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border border-gray-700 bg-gray-800 p-8 text-center md:p-12">
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
              Rejoignez notre équipe
            </h2>
            <p className="mt-4 text-gray-400">
              Nous recherchons des talents passionnés par le BTP et les travaux publics.
            </p>
            <Link href="/carrieres" className="btn-orange mt-6">
              Voir les offres
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
