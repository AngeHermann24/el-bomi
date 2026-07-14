import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import SectionHeader from '@/components/SectionHeader';
import IconRenderer from '@/components/IconRenderer';
import { services } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nos Services',
  description:
    'EL-BOMI BTP propose une gamme complète de services : gros œuvre, génie civil, rénovation, aménagement, démolition et construction durable.',
};

const advantages = [
  {
    icon: 'Shield',
    title: 'Qualité garantie',
    description: 'Certifications ISO 9001, Qualibat et engagements contractuels sur la qualité.',
  },
  {
    icon: 'Clock',
    title: 'Respect des délais',
    description: 'Planification rigoureuse et suivi en temps réel de l\'avancement.',
  },
  {
    icon: 'Award',
    title: 'Expertise reconnue',
    description: '15+ années d\'expérience sur des projets d\'envergure nationale.',
  },
  {
    icon: 'Users',
    title: 'Équipe dédiée',
    description: 'Un interlocuteur unique et une équipe mobilisée pour votre projet.',
  },
];

const processSteps = [
  { step: '01', title: 'Étude & Diagnostic', description: 'Analyse du terrain, études de sol, diagnostic technique et architectural.' },
  { step: '02', title: 'Conception & Devis', description: 'Plans d\'exécution, chiffrage détaillé, planning prévisionnel.' },
  { step: '03', title: 'Réalisation', description: 'Mobilisation des équipes, suivi qualité, reporting en temps réel.' },
  { step: '04', title: 'Livraison', description: 'Contrôles finaux, réception des ouvrages, garanties contractuelles.' },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Des Services d'Excellence Pour Chaque Projet"
        subtitle=""
        description="De la fondation au dernier étage, nous maîtrisons chaque étape de la construction avec précision et passion."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=90"
        compact
        ctaText=""
      />

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Services"
            title="Une expertise complète"
            highlight="à votre service"
            description="Chaque projet est unique. Notre gamme de services couvre l'ensemble des besoins en construction et travaux publics."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process / Méthodologie — section unique à cette page */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
        </div>
        <div className="container-max relative">
          <SectionHeader
            badge="Notre Méthode"
            title="Un processus éprouvé"
            highlight="en 4 étapes"
            description="Chaque projet suit un parcours structuré pour garantir excellence et transparence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative group">
                <div className="text-7xl font-heading font-black text-accent-500/10 group-hover:text-accent-500/20 transition-colors duration-300 mb-2">
                  {item.step}
                </div>
                <div className="relative -mt-8 pl-2">
                  <div className="w-3 h-3 rounded-full bg-accent-500 mb-4 shadow-lg shadow-accent-500/50" />
                  <h3 className="text-lg font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-anthracite-900/30">
        <div className="container-max">
          <SectionHeader
            badge="Pourquoi EL-BOMI"
            title="Les engagements qui font"
            highlight="la différence"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover-lift group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500/20 transition-colors">
                  <IconRenderer name={item.icon} className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA spécifique services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80"
              alt="Chantier EL-BOMI"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-anthracite-950/95 via-anthracite-950/70 to-anthracite-950/40" />
            <div className="relative p-10 md:p-16 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
                Besoin d&apos;un service <span className="text-gradient">sur mesure</span> ?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Chaque projet est différent. Contactez-nous pour une étude personnalisée et un devis adapté à vos besoins spécifiques.
              </p>
              <Link href="/contact" className="group inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/25">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
