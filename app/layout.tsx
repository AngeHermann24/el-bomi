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
    default: 'EL-BOMI HOLDING | Huit métiers, une seule ambition',
    template: '%s | EL-BOMI HOLDING',
  },
  description:
    "EL-BOMI HOLDING est la société mère d'EL-BOMI GROUP, un groupe intégré composé de six filiales sectorielles. Elle assure la gouvernance, définit les orientations stratégiques, pilote les investissements et coordonne les activités des filiales.",
  keywords: ['EL-BOMI HOLDING', 'holding', 'Côte d\'Ivoire', 'Abidjan', 'construction', 'énergie', 'télécoms', 'logistique', 'médical', 'agriculture', 'immobilier', 'investissement', 'assurance'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'EL-BOMI HOLDING',
    title: 'EL-BOMI HOLDING | Huit métiers, une seule ambition',
    description: "EL-BOMI HOLDING, société mère d'EL-BOMI GROUP. Gouvernance, stratégie et pilotage des investissements d'un groupe intégré de six filiales sectorielles.",
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
              name: 'EL-BOMI HOLDING',
              description: "EL-BOMI HOLDING est la société mère d'EL-BOMI GROUP, un groupe intégré composé de six filiales sectorielles. Elle assure la gouvernance, définit les orientations stratégiques, pilote les investissements et coordonne les activités des filiales afin de garantir une croissance durable, une performance opérationnelle et la création de valeur pour l'ensemble du Groupe.",
              foundingDate: '2020',
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
