import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Syne } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0284c7',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://xidma-web-agency.com'),
  title: 'XIDMA WEB AGENCY | Création de sites web & Publicité digitale au Sénégal',
  description:
    'XIDMA WEB AGENCY accompagne les entreprises au Sénégal avec la création de sites web professionnels, e-commerce, landing pages et la publicité digitale sur Facebook, Instagram, TikTok et WhatsApp.',
  keywords: [
    'XIDMA WEB AGENCY',
    'agence web Sénégal',
    'agence web Dakar',
    'création site web Sénégal',
    'création site internet Dakar',
    'site web professionnel Sénégal',
    'agence digitale Sénégal',
    'publicité Facebook Sénégal',
    'publicité Instagram Sénégal',
    'publicité TikTok Sénégal',
    'Meta Ads Sénégal',
    'publicité WhatsApp Sénégal',
    'création site e-commerce Sénégal',
    'marketing digital Sénégal',
    'tunnel de conversion Sénégal',
  ],
  authors: [{ name: 'XIDMA WEB AGENCY' }],
  creator: 'XIDMA WEB AGENCY',
  publisher: 'XIDMA WEB AGENCY',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: 'https://xidma-web-agency.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'XIDMA WEB AGENCY | Création de sites web & Publicité digitale au Sénégal',
    description:
      'XIDMA WEB AGENCY accompagne les entreprises au Sénégal avec la création de sites web professionnels, e-commerce, landing pages et la publicité digitale sur Facebook, Instagram, TikTok et WhatsApp.',
    url: 'https://xidma-web-agency.com',
    siteName: 'XIDMA WEB AGENCY',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XIDMA WEB AGENCY | Création de sites web & Publicité digitale au Sénégal',
    description:
      'XIDMA WEB AGENCY accompagne les entreprises au Sénégal avec la création de sites web professionnels, e-commerce, landing pages et la publicité digitale sur Facebook, Instagram, TikTok et WhatsApp.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'XIDMA WEB AGENCY',
  image: 'https://xidma-web-agency.com/perle.png',
  '@id': 'https://xidma-web-agency.com/#agency',
  url: 'https://xidma-web-agency.com',
  telephone: '+221755044329',
  priceRange: '55 000 FCFA - 250 000 FCFA',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dakar',
    addressRegion: 'Dakar',
    addressCountry: 'SN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 14.7167,
    longitude: -17.4677,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:30',
    closes: '19:00',
  },
  sameAs: [
    'https://wa.me/221755044329',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services Digitaux XIDMA',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Création de Site Vitrine & E-commerce',
          description: 'Conception de sites internet professionnels et réactifs au Sénégal.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Publicité Digitale & Acquisition Clients',
          description: 'Campagnes publicitaires Meta Ads (Facebook, Instagram), TikTok Ads et redirection WhatsApp.',
        },
      },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`scroll-smooth ${plusJakartaSans.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#f8fafc] text-slate-900 antialiased min-h-screen selection:bg-[#0284c7] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
