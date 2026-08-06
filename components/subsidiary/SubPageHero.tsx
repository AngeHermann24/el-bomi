import Image from 'next/image';

interface SubPageHeroProps {
  kicker: string;
  title: string;
  description?: string;
  image: string;
  align?: 'left' | 'center';
}

export default function SubPageHero({
  kicker,
  title,
  description,
  image,
  align = 'left',
}: SubPageHeroProps) {
  const centered = align === 'center';

  return (
    <section className="relative overflow-hidden border-b border-surface-line/10 bg-surface-alt">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill priority className="object-cover opacity-[0.12]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface-alt/80 to-surface-alt" />
      </div>

      <div
        className={`container-max relative px-4 py-12 sm:py-20 sm:px-6 lg:px-8 lg:py-28 ${
          centered ? 'text-center' : ''
        }`}
      >
        <span className="eyebrow mb-4">{kicker}</span>
        <h1
          className={`font-heading text-4xl font-bold leading-[1.1] text-ink md:text-5xl lg:text-6xl ${
            centered ? 'mx-auto max-w-4xl' : 'max-w-4xl'
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mt-6 text-lg leading-relaxed text-ink-muted ${
              centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
            }`}
          >
            {description}
          </p>
        )}
        <div className={`mt-8 h-1 w-20 rounded-full bg-brand-500 ${centered ? 'mx-auto' : ''}`} />
      </div>
    </section>
  );
}
