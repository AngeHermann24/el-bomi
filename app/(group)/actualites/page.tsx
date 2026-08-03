import Image from 'next/image';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { news } from '@/lib/group';

export const metadata: Metadata = {
  title: 'Actualités',
  description:
    'Actualités et projets réalisés par les filiales d\'EL-BOMI HOLDING : construction, énergie, télécoms, logistique, médical, agriculture, immobilier et investissement & assurance.',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function ActualitesPage() {
  const [featured, ...rest] = news;

  return (
    <>
      <PageHeader
        label="Vie du groupe"
        title="Actualités"
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=90"
      />

      <section className="section-padding">
        <div className="container-max">
          {/* Article à la une */}
          <article className="group mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[340px] overflow-hidden rounded-2xl">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-300">
                  {featured.category}
                </span>
                <span className="text-sm text-white/40">{formatDate(featured.date)}</span>
              </div>
              <h2 className="mb-4 font-heading text-3xl font-black leading-tight text-white">
                {featured.title}
              </h2>
              <p className="leading-relaxed text-white/60">{featured.excerpt}</p>
            </div>
          </article>

          <div className="gold-rule mb-16" />

          {/* Autres actualités */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <article
                key={item.slug}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/40"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-gold-500/30 bg-navy-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-300 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <span className="mb-3 block text-xs text-white/40">{formatDate(item.date)}</span>
                  <h3 className="mb-3 font-heading text-lg font-bold leading-snug text-white transition-colors group-hover:text-gold-300">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
