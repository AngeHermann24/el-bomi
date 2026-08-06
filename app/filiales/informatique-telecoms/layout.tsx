import InforHeader from '@/components/informatique/InforHeader';
import InforFooter from '@/components/informatique/InforFooter';

export default function ITLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#D6E4F0]">
      <InforHeader />
      <main>{children}</main>
      <InforFooter />
    </div>
  );
}
