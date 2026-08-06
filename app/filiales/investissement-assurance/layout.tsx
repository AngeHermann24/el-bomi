import InvestissementHeader from '@/components/investissement/InvestissementHeader';
import InvestissementFooter from '@/components/investissement/InvestissementFooter';

export default function InvestissementLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="investissement" className="min-h-screen bg-[#0A1F17] text-white">
      <InvestissementHeader />
      <main>{children}</main>
      <InvestissementFooter />
    </div>
  );
}
