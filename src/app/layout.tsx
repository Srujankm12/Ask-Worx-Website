import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ASKworX | Ground to Cloud Automation',
  description: 'Premium Industrial Automation, Cloud & Data Intelligence, and Digital Transformation. Engineering smart systems for the future of manufacturing.',
  keywords: 'Industrial Automation, PLC, SCADA, Cloud Intelligence, Digital Transformation, Software Development, IoT, IIoT, Manufacturing AI',
  openGraph: {
    title: 'ASKworX | Ground to Cloud Automation',
    description: 'Intelligent systems. Scalable solutions. Future-ready businesses.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
