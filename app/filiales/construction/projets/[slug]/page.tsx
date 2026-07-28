import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
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
    title: project.title,
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
    { icon: 'Maximize2', label: 'Surface', value: project.surface },
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
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
        <div className="container-max absolute bottom-0 left-0 right-0 z-10 px-4 pb-10 sm:px-6 lg:px-8">
          <Link
            href="/filiales/construction/projets"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-gold-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Link>
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            {project.category}
          </span>
          <h1 className="font-heading text-4xl font-black uppercase text-white md:text-5xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Description */}
            <div className="lg:col-span-2">
              <p className="mb-10 text-lg leading-relaxed text-white/70">{project.description}</p>

              {/* Gallery */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {project.images.slice(1).map((img, i) => (
                  <div key={i} className="relative h-[250px] overflow-hidden rounded-xl">
                    <Image
                      src={img}
                      alt={`${project.title} - ${i + 2}`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="glass-card sticky top-28 p-6">
                <h3 className="mb-6 font-heading text-lg font-bold text-white">Chiffres clés</h3>
                <div className="space-y-5">
                  {details.map((d) => (
                    <div key={d.label} className="flex items-start gap-3">
                      <IconRenderer
                        name={d.icon}
                        className="mt-0.5 h-5 w-5 shrink-0 text-gold-400"
                      />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/40">{d.label}</p>
                        <p className="font-medium text-white">{d.value}</p>
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
