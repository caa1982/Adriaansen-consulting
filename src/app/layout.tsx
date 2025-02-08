import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import JsonLd from "./components/JsonLd";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const viewport: Viewport = {
  themeColor: '#D4AF37',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://adriaansenconsulting.com'),
  title: 'Adriaansen Consulting - Strategic Finance & Digital Transformation',
  description: 'Strategic Finance, Wealth Management & Digital Transformation services. Where Tradition Meets Innovation.',
  keywords: ['Finance', 'Consulting', 'Digital Transformation', 'Wealth Management', 'Innovation'],
  manifest: '/site.webmanifest',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Adriaansen Consulting',
    title: 'Adriaansen Consulting - Strategic Finance & Digital Transformation',
    description: 'Strategic Finance, Wealth Management & Digital Transformation services. Where Tradition Meets Innovation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adriaansen Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adriaansen Consulting - Strategic Finance & Digital Transformation',
    description: 'Strategic Finance, Wealth Management & Digital Transformation services. Where Tradition Meets Innovation.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="flex flex-col min-h-[100svh]">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}