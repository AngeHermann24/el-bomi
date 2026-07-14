import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'EL-BOMI BTP | Construction & Travaux Publics d\'Excellence',
    template: '%s | EL-BOMI BTP',
  },
  description:
    'EL-BOMI BTP - Entreprise de construction et travaux publics. Plus de 15 ans d\'expertise en gros œuvre, rénovation, génie civil et aménagement. Qualité, sécurité, innovation.',
  keywords: ['BTP', 'construction', 'travaux publics', 'rénovation', 'génie civil', 'bâtiment', 'EL-BOMI'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'EL-BOMI BTP',
    title: 'EL-BOMI BTP | Construction & Travaux Publics d\'Excellence',
    description: 'Entreprise de construction et travaux publics. Qualité, sécurité, innovation depuis plus de 15 ans.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'EL-BOMI BTP',
              description: 'Entreprise de construction et travaux publics',
              url: 'https://el-bomi-btp.com',
              telephone: '+33 1 23 45 67 89',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Avenue de la Construction',
                addressLocality: 'Paris',
                postalCode: '75001',
                addressCountry: 'FR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 48.8566,
                longitude: 2.3522,
              },
              openingHours: 'Mo-Fr 07:00-18:00',
              priceRange: '€€€',
            }),
          }}
        />
      </head>
      <body className="font-body overflow-x-hidden">
        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
