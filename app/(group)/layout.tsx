import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

export default function GroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="group" className="theme-root min-h-screen">
      <Header />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
    </div>
  );
}
