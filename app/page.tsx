import HeroCarousel from '@/components/HeroCarousel';
import StatCounter from '@/components/StatCounter';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import { heroSlides, stats, services, projects } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* Teaser À propos */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Dirigeant EL-BOMI"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-3 block">
                Qui sommes-nous
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6 leading-tight">
                Vision • Expertise • Réalisation
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                EL-BOMI GROUP est une entreprise spécialisée dans l&apos;immobilier, la construction et les travaux publics. Avec une vision orientée vers l&apos;excellence et une expertise solide, nous accompagnons nos clients dans la concrétisation de leurs projets.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Notre engagement : professionnalisme, qualité et fiabilité dans la réalisation de projets durables en Côte d&apos;Ivoire.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/a-propos"
                  className="group inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                >
                  <Play className="w-4 h-4 text-accent-400" />
                  Vidéo de présentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services complets */}
      <section className="section-padding bg-anthracite-900/30">
        <div className="container-max">
          <SectionHeader
            badge="Nos Expertises"
            title="L'ensemble de nos"
            highlight="services"
            description="Du gros œuvre au développement durable, nous maîtrisons chaque corps de métier pour mener vos projets à bien."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Projets phares */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Réalisations"
            title="Nos projets"
            highlight="phares"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/projets"
              className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-500/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Tous nos projets
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatCounter stats={stats} />
    </>
  );
}
