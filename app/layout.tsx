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
    default: 'EL-BOMI GROUP | Immobilier, Construction & Travaux Publics',
    template: '%s | EL-BOMI GROUP',
  },
  description:
    'EL-BOMI GROUP - Entreprise spécialisée dans l\'immobilier, la construction et les travaux publics à Abidjan, Côte d\'Ivoire. Vision, expertise et réalisation de projets durables.',
  keywords: ['BTP', 'construction', 'travaux publics', 'immobilier', 'Abidjan', 'Côte d\'Ivoire', 'EL-BOMI GROUP'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'EL-BOMI GROUP',
    title: 'EL-BOMI GROUP | Immobilier, Construction & Travaux Publics',
    description: 'Entreprise spécialisée dans l\'immobilier, la construction et les travaux publics à Abidjan. Vision • Expertise • Réalisation.',
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
              name: 'EL-BOMI GROUP',
              description: 'Entreprise spécialisée dans l\'immobilier, la construction et les travaux publics',
              url: 'https://elbomigroup.com',
              telephone: '+225 27 22 20 11 15',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '27 Bp 399 Abj 27, Cocody - Angré 8ème Tranche',
                addressLocality: 'Abidjan',
                postalCode: '27',
                addressCountry: 'CI',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 5.3599,
                longitude: -3.9627,
              },
              openingHours: 'Mo-Fr 08:00-18:30',
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
