import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Clock, Maximize, Users } from 'lucide-react';
import type { Metadata } from 'next';
import IconRenderer from '@/components/IconRenderer';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Projet introuvable' };
  return {
    title: `${project.title} | EL-BOMI BTP`,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const details = [
    { icon: 'MapPin', label: 'Localisation', value: project.location },
    { icon: 'Calendar', label: 'Année', value: project.year },
    { icon: 'Clock', label: 'Durée', value: project.duration },
    { icon: 'Maximize', label: 'Surface', value: project.surface },
    { icon: 'Users', label: 'Client', value: project.client },
  ];

  return (
    <>
      {/* Hero image */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 container-max px-4 sm:px-6 lg:px-8 pb-10">
          <Link href="/projets" className="inline-flex items-center gap-2 text-white/60 hover:text-accent-400 text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour aux projets
          </Link>
          <span className="block text-accent-400 text-sm font-semibold uppercase tracking-wider mb-2">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                {project.description}
              </p>

              {/* Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((img, i) => (
                  <div key={i} className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`${project.title} - ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar — Chiffres clés */}
            <div>
              <div className="glass-card p-6 sticky top-28">
                <h3 className="text-lg font-heading font-bold text-white mb-6">
                  Chiffres clés
                </h3>
                <div className="space-y-5">
                  {details.map((d) => (
                    <div key={d.label} className="flex items-start gap-3">
                      <IconRenderer name={d.icon} className="w-5 h-5 text-accent-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider">{d.label}</p>
                        <p className="text-white font-medium">{d.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
