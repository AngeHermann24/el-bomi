import SubsidiaryHeader from './SubsidiaryHeader';
import SubsidiaryFooter from './SubsidiaryFooter';
import PageTransition from '@/components/PageTransition';
import { getSubsidiary } from '@/lib/group';

interface SubsidiaryShellProps {
  slug: string;
  children: React.ReactNode;
}

export default function SubsidiaryShell({ slug, children }: SubsidiaryShellProps) {
  const subsidiary = getSubsidiary(slug);
  if (!subsidiary) return null;

  return (
    <div data-theme={slug} className="theme-root min-h-screen">
      <SubsidiaryHeader subsidiary={subsidiary} />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <SubsidiaryFooter subsidiary={subsidiary} />
    </div>
  );
}
