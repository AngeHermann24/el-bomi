import AgricultureHeader from '@/components/agriculture/AgricultureHeader';
import AgricultureFooter from '@/components/agriculture/AgricultureFooter';

export default function AgricultureLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F6F4ED]">
      <AgricultureHeader />
      <main>{children}</main>
      <AgricultureFooter />
    </div>
  );
}
