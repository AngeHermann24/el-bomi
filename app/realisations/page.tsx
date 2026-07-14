import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import { projects } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nos Réalisations',
  description:
    'Découvrez nos projets de construction emblématiques : tours de bureaux, éco-quartiers, ponts, rénovations de palaces et infrastructures de transport.',
};

export default function RealisationsPage() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <>
      <Hero
        title="Nos Réalisations Témoignent De Notre Savoir-Faire"
        subtitle=""
        description="Chaque projet est le fruit d'une collaboration étroite avec nos clients. Découvrez nos réalisations les plus marquantes."
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90"
        compact
        ctaText=""
      />

      {/* Featured Project — mise en avant large */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="À la une"
            title="Projet"
            highlight="phare"
          />

          <Link href={`/realisations/${featuredProject.slug}`} className="group block">
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
              <Image
                src={featuredProject.images[0]}
                alt={featuredProject.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-md text-accent-400 text-xs font-semibold uppercase tracking-wider">
                    {featuredProject.category}
                  </span>
                  <span className="text-white/40 text-sm">{featuredProject.year}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-3">
                  {featuredProject.title}
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mb-4">{featuredProject.shortDescription}</p>
                <span className="inline-flex items-center gap-2 text-accent-400 font-semibold group-hover:gap-3 transition-all">
                  Découvrir le projet <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-500/20 rounded-3xl transition-all duration-500" />
            </div>
          </Link>
        </div>
      </section>

      {/* Chiffres-clés visuels */}
      <section className="py-12 border-y border-white/5">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-black text-accent-400">250+</div>
              <div className="text-white/40 text-sm mt-1">Projets livrés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-black text-white">12</div>
              <div className="text-white/40 text-sm mt-1">Régions couvertes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-black text-accent-400">98%</div>
              <div className="text-white/40 text-sm mt-1">Satisfaction client</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-black text-white">15</div>
              <div className="text-white/40 text-sm mt-1">Ans d&apos;expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Tous les projets"
            title="L'excellence en"
            highlight="action"
            description="De la conception à la livraison, chaque projet reflète notre engagement envers la qualité et l'innovation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-anthracite-900/30">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
            Votre projet pourrait être le <span className="text-gradient">prochain</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            Rejoignez nos clients satisfaits et donnez vie à votre vision architecturale.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/25">
            Discuter de mon projet
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
