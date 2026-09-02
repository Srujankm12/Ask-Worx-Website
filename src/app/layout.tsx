import type { Metadata } from "next";
import { Roboto, Roboto_Condensed, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MotionProvider } from "@/components/MotionProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["latin"],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700', '900'],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: '--font-roboto-condensed',
  weight: ['400', '600', '700', '800'],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: '--font-roboto-mono',
  weight: ['400', '500', '700'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: {
    default: "ASKworX | Ground to Cloud Industrial Automation",
    template: "%s | ASKworX"
  },
  description: "Premier Industrial Automation & Digital Transformation company specializing in PLC, SCADA, IIoT, and Cloud Infrastructure. Based in Bangalore, India.",
  keywords: ["industrial automation India", "IIoT solutions Bangalore", "SCADA integration", "PLC programming", "Industry 4.0", "digital transformation manufacturing"],
  authors: [{ name: "ASKworX" }],
  creator: "ASKworX",
  publisher: "ASKworX",

  // ✅ FIX 1: Use your real domain
  metadataBase: new URL('https://askworx.in'),

  // ✅ FIX 2: Proper canonical URL
  alternates: {
    canonical: 'https://askworx.in',
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: 'ASKworX | Ground to Cloud Automation',
    description: 'Automation that works today. Intelligence that scales tomorrow.',

    // ✅ FIX 3: Update domain here also
    url: 'https://askworx.in',

    siteName: 'ASKworX',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ASKworX | Ground to Cloud Automation',
    description: 'Automation that works today. Intelligence that scales tomorrow.',
    images: ['/og-image.png'],
  },

  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(roboto.variable, robotoCondensed.variable, robotoMono.variable)}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://videos.pexels.com" />
      </head>
      <body className="bg-background antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-full focus:bg-ink focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <StructuredData />
        <SmoothScroll />
        <MotionProvider>
          <Navbar />
          <main id="main" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </MotionProvider>
      </body>
    </html>
  );
}
