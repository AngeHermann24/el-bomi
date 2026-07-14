import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import IconRenderer from '@/components/IconRenderer';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Projet non trouvé' };

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.image, width: 1200, height: 630 }],
    },
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const details = [
    { icon: 'MapPin', label: 'Localisation', value: project.location },
    { icon: 'Calendar', label: 'Année', value: project.year },
    { icon: 'Clock', label: 'Durée', value: project.duration },
    { icon: 'Maximize2', label: 'Surface', value: project.surface },
    { icon: 'Building2', label: 'Client', value: project.client },
  ];

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/40 to-anthracite-950/20" />

        {/* Back button */}
        <div className="absolute top-28 left-4 sm:left-8 z-10">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-white/70 hover:text-white text-sm transition-all hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux réalisations
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="container-max">
            <span className="inline-block px-3 py-1.5 rounded-full bg-accent-500/10 backdrop-blur-md border border-accent-500/20 text-accent-400 text-xs font-semibold mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-white mb-6">
                À propos du projet
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                {project.description}
              </p>

              {/* Image gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.slice(1).map((img, index) => (
                  <div key={index} className="relative h-[250px] rounded-2xl overflow-hidden group">
                    <Image
                      src={img}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="glass-card p-6 sticky top-28">
                <h3 className="text-lg font-heading font-bold text-white mb-6">
                  Détails du projet
                </h3>
                <div className="space-y-5">
                  {details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center shrink-0">
                        <IconRenderer name={detail.icon} className="w-5 h-5 text-accent-400" />
                      </div>
                      <div>
                        <span className="text-white/40 text-xs uppercase tracking-wider">
                          {detail.label}
                        </span>
                        <p className="text-white font-medium">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/25"
                  >
                    Un projet similaire ?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
