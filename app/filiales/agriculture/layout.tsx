import SubsidiaryShell from '@/components/subsidiary/SubsidiaryShell';

export default function AgricultureLayout({ children }: { children: React.ReactNode }) {
  return <SubsidiaryShell slug="agriculture">{children}</SubsidiaryShell>;
}
