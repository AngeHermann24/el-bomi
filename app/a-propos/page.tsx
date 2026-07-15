import { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import StatCounter from '@/components/StatCounter';
import { stats } from '@/lib/data';
import { Play } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos | EL-BOMI GROUP',
  description:
    'Découvrez l\'histoire d\'EL-BOMI GROUP, notre vision, notre expertise et notre engagement dans la réalisation de projets durables en Côte d\'Ivoire.',
};

export default function AProposPage() {
  return (
    <>
      <PageHeader
        label="Notre histoire"
        title="À Propos d'EL-BOMI"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=90"
      />

      {/* Présentation */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6 max-w-3xl">
            Une entreprise orientée vers l&apos;excellence
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>
                EL-BOMI GROUP est une entreprise spécialisée dans l&apos;immobilier, la construction et les travaux publics, basée à Abidjan, Cocody - Angré 8ème Tranche. Nous intervenons sur des projets d&apos;envergure en Côte d&apos;Ivoire.
              </p>
              <p>
                Avec une vision orientée vers l&apos;excellence, une expertise solide et un engagement dans la réalisation de projets durables, le groupe accompagne ses clients dans la concrétisation de leurs projets avec professionnalisme, qualité et fiabilité.
              </p>
              <p>
                Notre force réside dans notre capacité à allier savoir-faire technique, gestion rigoureuse et innovation pour livrer des ouvrages qui répondent aux plus hauts standards.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Chantier EL-BOMI"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Engagement */}
      <section className="section-padding bg-anthracite-900/30">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-heading font-bold text-accent-400 mb-4">Notre Mission</h3>
              <p className="text-white/60 leading-relaxed">
                Accompagner nos clients dans la réalisation de projets immobiliers et de construction durables, en alliant vision stratégique, expertise technique et exécution irréprochable.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-xl font-heading font-bold text-accent-400 mb-4">Notre Engagement</h3>
              <p className="text-white/60 leading-relaxed">
                Professionnalisme, qualité et fiabilité à chaque étape. Nous nous engageons à respecter les délais, les budgets et les normes les plus exigeantes pour garantir la satisfaction totale de nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dirigeant */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Marc Ebomi - PDG"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-3 block">
                Direction
              </span>
              <h3 className="text-3xl font-heading font-black text-white mb-2">Marc Ebomi</h3>
              <p className="text-accent-400 font-medium mb-6">Président-Directeur Général</p>
              <p className="text-white/60 leading-relaxed mb-4">
                Fondateur d&apos;EL-BOMI GROUP, Marc Ebomi porte une vision claire : bâtir une entreprise d&apos;excellence capable de répondre aux défis de la construction moderne en Côte d&apos;Ivoire et dans la sous-région.
              </p>
              <p className="text-white/60 leading-relaxed">
                Son leadership, son exigence technique et son engagement envers la qualité font d&apos;EL-BOMI GROUP un acteur de confiance pour les projets immobiliers et d&apos;infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className="section-padding bg-anthracite-900/30">
        <div className="container-max max-w-4xl text-center">
          <span className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-3 block">
            Notre philosophie
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-8">
            Innovation, rigueur et esprit d&apos;équipe
          </h2>
          <p className="text-white/60 leading-relaxed text-lg">
            Chez EL-BOMI GROUP, nous croyons que l&apos;excellence naît de la combinaison entre vision stratégique, expertise technique et engagement humain. Nous investissons dans nos équipes, adoptons les méthodes les plus modernes et placons la satisfaction client au cœur de chaque décision.
          </p>
        </div>
      </section>

      {/* Bandeau vidéo */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
          alt="Vidéo institutionnelle"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-anthracite-950/70" />
        <div className="relative z-10 text-center">
          <a
            href="#"
            className="group inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-500 hover:bg-accent-600 transition-all duration-300 hover:scale-110 shadow-xl shadow-accent-500/30"
          >
            <Play className="w-8 h-8 text-white ml-1" />
          </a>
          <p className="text-white/70 mt-4 text-sm font-medium">Découvrez EL-BOMI en vidéo</p>
        </div>
      </section>

      {/* Stats */}
      <StatCounter stats={stats} />
    </>
  );
}
