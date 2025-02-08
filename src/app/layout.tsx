import "./globals.css";
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import JsonLd from "./components/JsonLd";
import { ReactNode } from "react";

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

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  metadataBase: new URL('https://www.adriaansen-consulting.com'),
  title: {
    default: "Adriaansen Consulting | Strategic Finance & Innovation",
    template: "%s | Adriaansen Consulting"
  },
  description: "Where Tradition Meets Innovation—AI, Blockchain, and Finance for the Future. Expert consulting in strategic finance, wealth management & digital transformation for forward-thinking businesses.",
  keywords: [
    "consulting", "finance", "blockchain", "AI", "wealth management", 
    "digital transformation", "strategic consulting", "fintech", 
    "innovation", "business strategy", "financial advisory",
    "technology consulting", "business transformation", "AI consulting",
    "blockchain solutions", "strategic planning", "digital innovation"
  ],
  authors: [{ name: "Adriaansen Consulting", url: "https://www.adriaansen-consulting.com" }],
  creator: "Adriaansen Consulting",
  publisher: "Adriaansen Consulting",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.adriaansen-consulting.com",
    siteName: "Adriaansen Consulting",
    title: "Adriaansen Consulting | Strategic Finance & Innovation",
    description: "Strategic Finance, Wealth Management & Digital Transformation experts specializing in AI and Blockchain solutions.",
    images: [
      {
        url: '/logo_1.png',
        width: 1200,
        height: 630,
        alt: 'Adriaansen Consulting Logo',
      },
      {
        url: '/logo_2.png',
        width: 1200,
        height: 630,
        alt: 'Adriaansen Consulting Office',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adriaansenconslt',
    creator: '@adriaansenconslt',
    title: 'Adriaansen Consulting | Strategic Finance & Innovation',
    description: 'Strategic Finance, Wealth Management & Digital Transformation experts specializing in AI and Blockchain solutions.',
    images: ['/logo_1.png'],
  },
  verification: {
    google: 'add-your-google-site-verification-here',
    yandex: 'add-your-yandex-verification-here',
    bing: 'add-your-bing-verification-here',
  },
  alternates: {
    canonical: 'https://www.adriaansen-consulting.com',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
  },
  category: 'Business Consulting',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <JsonLd />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}