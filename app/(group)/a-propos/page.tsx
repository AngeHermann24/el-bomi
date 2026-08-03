import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import StatCounter from '@/components/StatCounter';
import Timeline from '@/components/Timeline';
import IconRenderer from '@/components/IconRenderer';
import { groupStats, pillars, timeline, subsidiaries, groupInfo } from '@/lib/group';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos',
  description:
    'Découvrez EL-BOMI HOLDING : histoire, mission, vision, gouvernance et organisation en huit filiales sectorielles.',
};

export default function AProposPage() {
  return (
    <>
      <PageHeader
        label="Notre histoire"
        title="À Propos du Groupe"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=90"
      />

      {/* Société mère */}
      <section className="section-padding bg-navy-950">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              <span className="h-px w-8 bg-gold-400" />
              Fondée en {groupInfo.foundedYear}
              <span className="h-px w-8 bg-gold-400" />
            </span>
            <p className="text-lg leading-relaxed text-white/60">{groupInfo.description}</p>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="section-light py-20 lg:py-28">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
                Le groupe
              </span>
              <h2 className="mb-8 font-heading text-3xl font-black uppercase leading-tight text-navy-900 md:text-4xl">
                Un holding structuré autour de huit métiers
              </h2>
              <div className="space-y-5 leading-relaxed text-navy-900/70">
                <p>
                  EL-BOMI HOLDING réunit huit sociétés spécialisées dans la construction, l&apos;énergie,
                  l&apos;informatique et les télécoms, le transit et la logistique, la distribution
                  médicale, l&apos;agriculture, l&apos;immobilier et l&apos;investissement &amp; assurance. Le
                  siège est établi à Abidjan, Cocody - Angré 8ème Tranche.
                </p>
                <p>
                  Cette organisation nous permet d&apos;adresser des besoins très différents tout en
                  conservant une gouvernance commune, des standards partagés et une capacité à
                  mobiliser plusieurs expertises sur un même projet.
                </p>
                <p>
                  Notre ambition est de porter des projets structurants en Côte d&apos;Ivoire et dans
                  la sous-région, avec des équipes formées et des méthodes éprouvées.
                </p>
              </div>
            </div>
            <div className="relative h-[440px] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
                alt="EL-BOMI HOLDING"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Valeurs */}
      <section className="section-padding bg-navy-900">
        <div className="container-max">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Notre Mission',
                text: "Accompagner nos clients de l'étude à la livraison, en mobilisant la filiale — ou la combinaison de filiales — la plus adaptée à leur besoin.",
              },
              {
                title: 'Notre Vision',
                text: "Devenir un groupe de référence en Afrique de l'Ouest, capable de porter des projets d'infrastructure, d'énergie et de services à forte valeur ajoutée.",
              },
              {
                title: 'Nos Valeurs',
                text: 'Rigueur dans l\'exécution, transparence dans la relation client, sécurité des équipes et respect des engagements pris.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-500 hover:border-gold-500/40"
              >
                <h3 className="mb-4 font-heading text-xl font-bold text-gold-400">{item.title}</h3>
                <p className="leading-relaxed text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <StatCounter stats={groupStats} />

      {/* Piliers */}
      <section className="section-light py-20 lg:py-28">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Nos piliers
            </span>
            <h2 className="font-heading text-3xl font-black uppercase leading-tight text-navy-900 md:text-4xl">
              Ce qui structure notre action
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="card-light group p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/50">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10">
                  <IconRenderer name={pillar.icon} className="h-7 w-7 text-gold-600" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-navy-900">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-navy-900/60">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gouvernance */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[450px] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Direction du groupe"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                Gouvernance
              </span>
              <h2 className="mb-2 font-heading text-3xl font-black uppercase text-white">
                Une direction engagée
              </h2>
              <p className="mb-6 font-medium text-gold-400">Présidence du groupe</p>
              <p className="mb-4 leading-relaxed text-white/60">
                La direction générale fixe le cap stratégique du groupe et veille à la cohérence
                entre les huit filiales : arbitrages d&apos;investissement, standards qualité,
                politique de sécurité et développement des compétences.
              </p>
              <p className="leading-relaxed text-white/60">
                Chaque filiale dispose de sa propre équipe opérationnelle, responsable de ses
                projets et de sa relation client, dans un cadre commun défini par le groupe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frise */}
      <section className="section-padding bg-navy-900">
        <div className="container-max">
          <div className="mb-16 max-w-2xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Notre parcours
            </span>
            <h2 className="font-heading text-3xl font-black uppercase leading-tight text-white md:text-4xl">
              Les étapes <span className="text-gradient">clés</span>
            </h2>
          </div>
          <Timeline entries={timeline} />
        </div>
      </section>

      {/* Accès filiales */}
      <section className="section-light py-20 lg:py-28">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Organisation
            </span>
            <h2 className="font-heading text-3xl font-black uppercase leading-tight text-navy-900 md:text-4xl">
              Nos huit filiales
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subsidiaries.map((sub) => (
              <Link
                key={sub.slug}
                href={`/filiales/${sub.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-navy-900/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold-500/25 bg-gold-500/10">
                  <IconRenderer name={sub.icon} className="h-5 w-5 text-gold-600" />
                </span>
                <span className="flex-1 text-sm font-semibold text-navy-900 transition-colors group-hover:text-gold-600">
                  {sub.shortName}
                </span>
                <ArrowRight className="h-4 w-4 text-navy-900/30 transition-all group-hover:translate-x-1 group-hover:text-gold-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
