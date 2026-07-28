import EnergieHeader from '@/components/energie/EnergieHeader';
import EnergieFooter from '@/components/energie/EnergieFooter';

export default function EnergieLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="energie" className="min-h-screen bg-[#0A1628]">
      <EnergieHeader />
      <main>{children}</main>
      <EnergieFooter />
    </div>
  );
}
