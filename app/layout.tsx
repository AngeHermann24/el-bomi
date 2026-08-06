import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B1E3D',
};

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
      className="font-body"
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
      <body className="font-body overflow-x-hidden" style={{ fontFamily: 'var(--font-sora), system-ui, sans-serif' }}>{children}</body>
    </html>
  );
}
