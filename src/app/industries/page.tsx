"use client";

import React from 'react';
import { Badge, Button } from '@/components/UI';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Factory, 
  FlaskConical, Utensils, Scissors,
  Sun, Droplets, Car
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const industryList = [
  { name: "Automotive", slug: "automotive", icon: Car, img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=90" },
  { name: "Pharma", slug: "pharma", icon: FlaskConical, img: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=90" },
  { name: "Food & Beverage", slug: "food-beverage", icon: Utensils, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=90" },
  { name: "Renewable Energy", slug: "renewable-energy", icon: Sun, img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=90" },
  { name: "Oil & Gas", slug: "oil-gas", icon: Droplets, img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=90" },
  { name: "Textiles", slug: "textiles", icon: Scissors, img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=90" },
];

export default function IndustriesPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex flex-col justify-center px-[48px] border-b border-white/8 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/60 z-10" />
           <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=90" alt="Industries Hero" fill className="object-cover" priority />
        </div>
        <div className="max-w-[1280px] mx-auto w-full relative z-20">
          <Badge>CORE SECTOR EXPERTISE</Badge>
          <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-heading font-black mb-8 tracking-tighter leading-[0.85] uppercase italic text-white mt-4">
            INDUSTRIES<br />WE SERVE.
          </h1>
          <p className="text-[#94A3B8] text-2xl font-light italic max-w-2xl leading-relaxed mt-8">
            "Strategic engineering for the world's most mission-critical verticals."
          </p>
        </div>
      </section>

      {/* Clean Industries List */}
      <section className="bg-black py-24 px-[48px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryList.map((ind, i) => (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/industries/${ind.slug}`} className="group relative block h-[450px] rounded-[30px] overflow-hidden border border-white/5 bg-[#0D0D0D]">
                  <div className="absolute inset-0 z-0 h-2/3 overflow-hidden">
                     <Image 
                       src={ind.img} 
                       alt={ind.name} 
                       fill 
                       className="object-cover group-hover:scale-110 transition-all duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-10 z-10 h-1/3 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-4">
                       <ind.icon className="w-5 h-5 text-[#1A3D2B]" />
                    </div>
                    <h3 className="text-xl font-heading font-black tracking-tight uppercase text-white mb-6 leading-tight group-hover:titanium-text transition-all">
                      {ind.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[0.6rem] font-black tracking-[0.3em] text-[#1A3D2B] uppercase group-hover:text-white transition-all">
                      EXPLORE SOLUTION <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black px-[48px] text-center border-t border-white/5">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
           <h2 className="text-5xl md:text-8xl font-heading font-black text-white uppercase italic mb-12 tracking-tighter leading-none">
             REAL CHALLENGES.<br />PROPER ENGINEERING.
           </h2>
           <Link href="/contact" className="inline-block">
             <Button variant="secondary" className="px-16 py-7 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all">
               DISCUSS YOUR INDUSTRY CHALLENGE →
             </Button>
           </Link>
        </div>
      </section>
    </div>
  );
}
