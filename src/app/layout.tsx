import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { PremiumEffects } from "@/components/PremiumEffects";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://askworx.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ASKworX | Ground to Cloud Automation',
    description: 'Automation that works today. Intelligence that scales tomorrow.',
    url: 'https://askworx.vercel.app',
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-black">
        <PremiumEffects />
        <StructuredData />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
