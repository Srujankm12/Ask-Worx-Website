"use client";

import React from 'react';
import { Badge, Button } from '@/components/UI';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const cases = [
  {
    title: "Automotive Plant Automation",
    location: "Pune, India",
    challenge: "Manual quality inspection causing 12% bottleneck in throughput.",
    solution: "Implementation of vision-integrated PLC logic with real-time SCADA tracking.",
    result: "40% increase in production rate with zero-defect tracking.",
    img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80"
  },
  {
    title: "Pharma SCADA Integration",
    location: "Bangalore, India",
    challenge: "Non-compliance with 21 CFR Part 11 for data integrity.",
    solution: "Unified SCADA platform with audit trails and electronic signatures.",
    result: "Successful FDA audit with 100% data compliance reporting.",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
  },
  {
    title: "Renewable Energy Monitoring",
    location: "Gujarat, India",
    challenge: "Lack of centralized performance monitoring for 50+ wind turbines.",
    solution: "IIoT Gateways with cloud-based dashboarding and predictive alerts.",
    result: "15% reduction in O&M costs via pro-active maintenance.",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80"
  },
  {
    title: "Food Processing Line",
    location: "Chennai, India",
    challenge: "Legacy control systems lacking energy efficiency data.",
    solution: "Retrofitting modern energy meters and a central monitoring software.",
    result: "22% energy saving identified within the first quarter.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <section className="py-24 px-10 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80" alt="Case Studies Hero" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        </div>
        <div className="container-custom relative z-10 w-full">
          <Badge>FIELD DEPLOYMENTS</Badge>
          <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-heading font-black mb-8 tracking-tighter leading-[0.9] uppercase">
            REAL RESULTS.<br />REAL ENGINEERING.
          </h1>
          <p className="text-secondary text-xl font-light italic max-w-2xl">
            "How we solve complex industrial challenges through integrated technology."
          </p>
        </div>
      </section>

      <section className="section-padding px-10">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="card-border flex flex-col relative overflow-hidden h-full rounded-2xl bg-[#0D0D0D]">
                <div className="relative h-[300px] w-full overflow-hidden">
                   <Image src={project.img} alt={project.title} fill className="object-cover group-hover:scale-105 transition-all duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
                </div>
                
                <div className="p-10 flex flex-col flex-1 relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <h3 className="text-2xl font-heading font-black uppercase tracking-tight max-w-[70%] text-white group-hover:titanium-text transition-all leading-tight">{project.title}</h3>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all group-hover:scale-110 shadow-2xl">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-10 mb-12">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.4em] text-[#1A3D2B] block mb-3 uppercase">The Challenge</span>
                      <p className="text-[#94A3B8] text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.4em] text-[#6B7280] block mb-3 uppercase">The Solution</span>
                      <p className="text-[#94A3B8]/70 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="p-8 bg-black border-l-2 border-white/10">
                      <span className="text-[10px] font-bold tracking-[0.4em] text-white block mb-3 uppercase">The Result</span>
                      <p className="text-white font-black text-xl italic uppercase tracking-tight">{project.result}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.3em] text-[#6B7280] uppercase font-bold">{project.location}</span>
                    <Link href="/contact" className="text-[10px] tracking-[0.3em] text-white uppercase font-bold hover:underline underline-offset-8">
                      REPLICATE SUCCESS →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
