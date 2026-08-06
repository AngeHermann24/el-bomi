import ImmobilierHeader from '@/components/immobilier/ImmobilierHeader';
import ImmobilierFooter from '@/components/immobilier/ImmobilierFooter';

export default function ImmobilierLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="immobilier" className="min-h-screen bg-[#1C1915] text-white">
      <ImmobilierHeader />
      <main>{children}</main>
      <ImmobilierFooter />
    </div>
  );
}
