import type { Metadata } from 'next';
import { Inter, Playfair_Display, Sora, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elbomigroup.com'),
  title: {
    default: 'EL-BOMI GROUP | Six métiers, une seule ambition',
    template: '%s | EL-BOMI GROUP',
  },
  description:
    'EL-BOMI GROUP est un holding ivoirien structuré en six filiales : construction, énergie, informatique & télécoms, transit & logistique, distribution médicale et agriculture.',
  keywords: ['EL-BOMI GROUP', 'holding', 'Côte d\'Ivoire', 'Abidjan', 'construction', 'énergie', 'télécoms', 'logistique', 'médical', 'agriculture'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'EL-BOMI GROUP',
    title: 'EL-BOMI GROUP | Six métiers, une seule ambition',
    description: 'Holding ivoirien structuré en six filiales sectorielles. Vision • Expertise • Réalisation.',
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
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} ${sora.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'EL-BOMI GROUP',
              description: 'Holding structuré en six filiales : construction, énergie, informatique & télécoms, transit & logistique, distribution médicale, agriculture',
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
      <body className="font-body overflow-x-hidden">{children}</body>
    </html>
  );
}
