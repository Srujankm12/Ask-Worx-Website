'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import { Approach, Benefits } from '@/components/Approach';
import { About, Industries } from '@/components/About';
import { Philosophy, CTA, Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black text-white selection:bg-electric-blue/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Approach />
      <Benefits />
      <Industries />
      <Philosophy />
      <CTA />
      <Footer />
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(0,163,255,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.02),transparent_50%)]" />
      </div>
    </main>
  );
}
