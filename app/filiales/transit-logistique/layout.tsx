import TransitHeader from '@/components/transit/TransitHeader';
import TransitFooter from '@/components/transit/TransitFooter';

export default function TransitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B1E3D]">
      <TransitHeader />
      <main>{children}</main>
      <TransitFooter />
    </div>
  );
}
