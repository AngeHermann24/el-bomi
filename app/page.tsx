import Hero from '@/components/Hero';
import StatCounter from '@/components/StatCounter';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SectionHeader from '@/components/SectionHeader';
import HomeServices from '@/components/HomeServices';
import HomeFeaturedProject from '@/components/HomeFeaturedProject';
import HomeCTA from '@/components/HomeCTA';
import { stats, projects, testimonials } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Nous Bâtissons L'Avenir Avec Excellence"
        subtitle=""
        description="Construction, génie civil, rénovation. Nous transformons vos visions les plus ambitieuses en réalités architecturales d'exception."
        ctaText="Demander un Devis"
        ctaHref="/contact"
        secondaryCtaText="Nos Réalisations"
        secondaryCtaHref="/realisations"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=90"
      />

      {/* Stats */}
      <StatCounter stats={stats} />

      {/* Services Teaser — 3D Tilt Cards */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Nos Expertises"
            title="Ce que nous"
            highlight="maîtrisons"
          />

          <HomeServices />

          <div className="text-center mt-10">
            <Link href="/services" className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-500/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Découvrir tous nos services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project — parallax 3D immersif */}
      <HomeFeaturedProject project={projects[0]} />

      {/* Testimonials */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* CTA Section — 3D perspective immersive */}
      <HomeCTA />
    </>
  );
}
