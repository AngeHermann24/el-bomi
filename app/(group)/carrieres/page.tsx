import Link from 'next/link';
import type { Metadata } from 'next';
import { MapPin, Briefcase, ArrowRight, Mail } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import IconRenderer from '@/components/IconRenderer';
import { jobs, groupInfo } from '@/lib/group';

export const metadata: Metadata = {
  title: 'Carrières',
  description:
    'Rejoignez EL-BOMI HOLDING : offres d\'emploi dans la construction, l\'énergie, les télécoms, la logistique, le médical, l\'agriculture, l\'immobilier et l\'investissement & assurance.',
};

const advantages = [
  {
    icon: 'Layers',
    title: 'Huit métiers, une carrière',
    description:
      'Évoluer entre filiales est possible : un profil technique peut passer de la construction à l\'énergie ou aux télécoms.',
  },
  {
    icon: 'Award',
    title: 'Formation continue',
    description:
      'Nous investissons dans la montée en compétence de nos équipes, sur les aspects techniques comme sur la sécurité.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Sécurité au travail',
    description:
      'Équipements, procédures et sensibilisation : la sécurité des collaborateurs est une condition non négociable.',
  },
];

export default function CarrieresPage() {
  return (
    <>
      <PageHeader
        label="Nous rejoindre"
        title="Carrières"
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=90"
      />

      {/* Intro */}
      <section className="section-light py-20 lg:py-28">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-black uppercase leading-tight text-navy-900 md:text-4xl">
              Construire votre parcours avec nous
            </h2>
            <p className="leading-relaxed text-navy-900/60">
              Nos filiales recrutent régulièrement des profils techniques et fonctionnels. Si vous
              cherchez un environnement où les projets sont concrets et variés, votre candidature
              nous intéresse.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {advantages.map((item) => (
              <div key={item.title} className="card-light p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10">
                  <IconRenderer name={item.icon} className="h-7 w-7 text-gold-600" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-navy-900/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offres */}
      <section className="section-padding bg-navy-900">
        <div className="container-max">
          <div className="mb-14 max-w-2xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Offres en cours
            </span>
            <h2 className="font-heading text-3xl font-black uppercase leading-tight text-white md:text-4xl">
              Postes <span className="text-gradient">ouverts</span>
            </h2>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:border-gold-500/40 hover:bg-white/[0.04]"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 font-heading text-xl font-bold text-white transition-colors group-hover:text-gold-300">
                    {job.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/55">{job.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/45">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-gold-500" />
                      {job.subsidiary}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gold-500" />
                      {job.location}
                    </span>
                    <span className="rounded-full border border-gold-500/25 bg-gold-500/10 px-2.5 py-0.5 font-semibold text-gold-300">
                      {job.contract}
                    </span>
                  </div>
                </div>

                <a
                  href={`mailto:${groupInfo.email}?subject=Candidature - ${encodeURIComponent(job.title)}`}
                  className="btn-outline-gold shrink-0 group/btn"
                >
                  Postuler
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidature spontanée */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/20 bg-navy-900 p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/[0.07] blur-[100px]" />

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold-500/30 bg-gold-500/10">
                <Mail className="h-8 w-8 text-gold-400" />
              </div>
              <h2 className="mb-4 font-heading text-3xl font-black uppercase text-white">
                Candidature <span className="text-gradient">spontanée</span>
              </h2>
              <p className="mb-8 leading-relaxed text-white/60">
                Aucune offre ne correspond à votre profil ? Envoyez-nous votre CV en précisant la
                filiale et le type de poste qui vous intéressent.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${groupInfo.email}?subject=Candidature spontanée`}
                  className="btn-gold group"
                >
                  Envoyer une candidature
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link href="/contact" className="btn-outline-gold">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
