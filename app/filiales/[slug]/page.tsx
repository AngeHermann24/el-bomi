import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import SubsidiaryPage from '@/components/SubsidiaryPage';
import { subsidiaries, getSubsidiary } from '@/lib/group';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return subsidiaries
    .filter((s) => !s.hasSubSite)
    .map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const subsidiary = getSubsidiary(params.slug);
  if (!subsidiary) return { title: 'Filiale introuvable' };

  return {
    title: subsidiary.shortName,
    description: subsidiary.summary,
    openGraph: {
      title: `${subsidiary.name} | EL-BOMI HOLDING`,
      description: subsidiary.summary,
      images: [subsidiary.image],
    },
  };
}

export default function FilialePage({ params }: PageProps) {
  const subsidiary = getSubsidiary(params.slug);

  if (!subsidiary || subsidiary.hasSubSite) notFound();

  return <SubsidiaryPage subsidiary={subsidiary} />;
}
