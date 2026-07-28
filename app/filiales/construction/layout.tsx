import ConstructionHeader from '@/components/construction/ConstructionHeader';
import ConstructionFooter from '@/components/construction/ConstructionFooter';

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="construction" className="min-h-screen bg-navy-900 text-white">
      <ConstructionHeader />
      <main>{children}</main>
      <ConstructionFooter />
    </div>
  );
}
