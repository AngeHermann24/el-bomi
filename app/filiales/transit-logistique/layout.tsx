import TransitHeader from '@/components/transit/TransitHeader';
import TransitFooter from '@/components/transit/TransitFooter';

export default function TransitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      <TransitHeader />
      <main>{children}</main>
      <TransitFooter />
    </div>
  );
}
