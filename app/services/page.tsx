import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';
import SectionHeader from '@/components/SectionHeader';
import IconRenderer from '@/components/IconRenderer';
import { services, interventions } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nos Services | EL-BOMI BTP',
  description:
    'EL-BOMI BTP propose une gamme complète de services : gros œuvre, génie civil, rénovation, aménagement, démolition et construction durable.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Ce que nous faisons"
        title="Nos Services"
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=90"
      />

      {/* Groupe 1 — Corps de métier */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Services"
            title="Nos corps de"
            highlight="métier"
            description="Du gros œuvre à la construction durable, nous couvrons l'ensemble des métiers du BTP."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Séparateur visuel */}
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
      </div>

      {/* Groupe 2 — Nature d'intervention */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Nature d'intervention"
            title="Comment nous"
            highlight="intervenons"
            description="Trois modes d'action adaptés à chaque configuration de projet."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interventions.map((item, index) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl">
                <div className="relative h-[280px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 backdrop-blur-md border border-accent-500/20 flex items-center justify-center mb-4">
                    <IconRenderer name={item.icon} className="w-6 h-6 text-accent-400" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-anthracite-900/30">
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
                Contactez-nous pour une étude personnalisée et un devis adapté à vos besoins.
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
