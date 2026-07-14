import { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import StatCounter from '@/components/StatCounter';
import { stats } from '@/lib/data';
import { Play } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos | EL-BOMI BTP',
  description:
    'Découvrez l\'histoire d\'EL-BOMI BTP, nos valeurs, notre équipe et notre engagement envers l\'excellence dans la construction depuis plus de 15 ans.',
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
            Une entreprise de référence dans la construction depuis 2009
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>
                Fondée en 2009, EL-BOMI est une entreprise spécialisée dans les travaux de bâtiment, génie civil, voiries et réseaux divers. Implantée en France, nous intervenons sur des chantiers d&apos;envergure régionale et nationale.
              </p>
              <p>
                Avec plus de 250 projets livrés et une équipe de 45 collaborateurs qualifiés, nous nous positionnons comme un acteur incontournable du secteur. Notre force : une approche rigoureuse, des équipes compétentes et un engagement total envers la satisfaction du client.
              </p>
              <p>
                Nous développons en permanence nos capacités d&apos;intervention et investissons dans la formation de nos équipes et la modernisation de nos équipements pour rester à la pointe du métier.
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
                Réaliser des ouvrages de qualité supérieure en respectant les délais, les budgets et les normes les plus exigeantes. Nous accompagnons chaque client de la phase d&apos;études jusqu&apos;à la livraison, avec un suivi rigoureux à chaque étape.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-xl font-heading font-bold text-accent-400 mb-4">Notre Engagement</h3>
              <p className="text-white/60 leading-relaxed">
                Garantir la sécurité de nos équipes et la protection de l&apos;environnement sur chaque chantier. Nous nous engageons dans une démarche d&apos;amélioration continue, avec des certifications Qualibat et ISO 9001 qui attestent de notre sérieux.
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
                Ingénieur ESTP diplômé en 1999, Marc Ebomi a fondé EL-BOMI après 10 années passées dans de grands groupes du BTP français. Sa vision : créer une entreprise à taille humaine mais capable d&apos;affronter les projets les plus ambitieux.
              </p>
              <p className="text-white/60 leading-relaxed">
                Son leadership, son exigence technique et sa proximité avec les équipes terrain font d&apos;EL-BOMI une entreprise reconnue pour la qualité de ses réalisations et le sérieux de sa gestion.
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
            Chez EL-BOMI, nous croyons que l&apos;excellence naît de la combinaison entre innovation technique, amélioration continue et travail d&apos;équipe. Nous partageons les connaissances entre nos collaborateurs, investissons dans la formation et adoptons les méthodes les plus modernes pour garantir des résultats optimaux sur chaque projet.
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
