import MedicalHeader from '@/components/medical/MedicalHeader';
import MedicalFooter from '@/components/medical/MedicalFooter';

export default function MedicalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <MedicalHeader />
      <main>{children}</main>
      <MedicalFooter />
    </div>
  );
}
