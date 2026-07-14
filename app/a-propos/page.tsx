import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import StatCounter from '@/components/StatCounter';
import SectionHeader from '@/components/SectionHeader';
import IconRenderer from '@/components/IconRenderer';
import { stats, team } from '@/lib/data';

export const metadata: Metadata = {
  title: 'À Propos',
  description:
    'Découvrez l\'histoire d\'EL-BOMI BTP, nos valeurs, notre équipe et notre engagement envers l\'excellence dans la construction depuis plus de 15 ans.',
};

const values = [
  {
    icon: 'Target',
    title: 'Excellence',
    description:
      'Nous visons l\'excellence dans chaque détail. Chaque projet est une opportunité de repousser nos limites et de dépasser les attentes.',
  },
  {
    icon: 'Eye',
    title: 'Innovation',
    description:
      'Nous intégrons les technologies les plus avancées et les méthodes les plus innovantes pour construire le futur dès aujourd\'hui.',
  },
  {
    icon: 'Heart',
    title: 'Engagement',
    description:
      'Notre engagement va au-delà du contrat. Sécurité, respect de l\'environnement et satisfaction client sont nos priorités absolues.',
  },
];

export default function AProposPage() {
  return (
    <>
      <Hero
        title="15 Ans À Construire L'Excellence"
        subtitle=""
        description="Fondée en 2009, EL-BOMI BTP est née de la vision d'un ingénieur passionné. Aujourd'hui, nous sommes une référence dans le secteur de la construction en France."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=90"
        compact
        ctaText=""
      />

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-6">
                Notre ADN
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6 leading-tight">
                Bâtir avec passion,<br />
                <span className="text-gradient">innover avec audace</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Depuis notre création, nous avons toujours refusé le compromis sur la qualité. Chaque chantier est abordé avec la même rigueur, la même exigence, qu&apos;il s&apos;agisse d&apos;une maison individuelle ou d&apos;une tour de 35 étages.
                </p>
                <p>
                  Notre croissance s&apos;est construite sur la confiance de nos clients et la compétence de nos équipes. En 15 ans, nous avons livré plus de 250 projets dans toute la France, du résidentiel au génie civil en passant par les ouvrages d&apos;art.
                </p>
                <p>
                  Aujourd&apos;hui, EL-BOMI BTP c&apos;est 45 collaborateurs experts, un bureau d&apos;études intégré et une capacité d&apos;intervention sur les projets les plus complexes et ambitieux.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Chantier EL-BOMI"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-[220px]">
                <div className="text-3xl font-heading font-black text-accent-400 mb-1">2009</div>
                <div className="text-white/50 text-sm">Année de création</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatCounter stats={stats} />

      {/* Values */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Nos Valeurs"
            title="Ce qui nous"
            highlight="anime"
            description="Trois piliers fondamentaux guident chacune de nos décisions et actions au quotidien."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-8 text-center hover-lift group">
                <div className="w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-500/20 transition-colors">
                  <IconRenderer name={value.icon} className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/50 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-anthracite-900/30">
        <div className="container-max">
          <SectionHeader
            badge="L'Équipe"
            title="Les visages derrière"
            highlight="les projets"
            description="Une équipe de passionnés, experts dans leur domaine, unis par la volonté de construire l'excellence."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-[320px] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white/70 text-sm">{member.bio}</p>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-white">{member.name}</h3>
                <p className="text-accent-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
