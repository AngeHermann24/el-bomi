import EnergieHeader from '@/components/energie/EnergieHeader';
import EnergieFooter from '@/components/energie/EnergieFooter';

export default function EnergieLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="energie" className="min-h-screen bg-[#C9BFA8]">
      <EnergieHeader />
      <main>{children}</main>
      <EnergieFooter />
    </div>
  );
}
