import InvestissementHeader from '@/components/investissement/InvestissementHeader';
import InvestissementFooter from '@/components/investissement/InvestissementFooter';

export default function InvestissementLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="investissement" className="min-h-screen bg-navy-900 text-white">
      <InvestissementHeader />
      <main>{children}</main>
      <InvestissementFooter />
    </div>
  );
}
