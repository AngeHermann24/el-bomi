import InforHeader from '@/components/informatique/InforHeader';
import InforFooter from '@/components/informatique/InforFooter';

export default function ITLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B1E3D]">
      <InforHeader />
      <main>{children}</main>
      <InforFooter />
    </div>
  );
}
