"use client";

import React from 'react';
import { Badge, Button } from '@/components/UI';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ShieldCheck, Factory, Zap, 
  Settings, Layers, Cpu, Cloud, 
  CheckCircle2, ArrowRight, Code, 
  Smartphone, MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex flex-col justify-center px-[48px] border-b border-white/8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=90" 
            alt="Engineering Hero" 
            fill 
            className="object-cover opacity-35" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        </div>
        <div className="max-w-[1280px] mx-auto w-full relative z-10">
          <Badge>ENGINEERING EXCELLENCE</Badge>
          <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.85] font-heading font-black tracking-tighter mb-10 uppercase italic">
            ENGINEERING<br />INTELLIGENCE.
          </h1>
          <p className="text-white/60 text-2xl font-light italic max-w-3xl leading-relaxed">
            From Ground to Cloud. We connect machines, control systems, and enterprise software into one unified, intelligent industrial ecosystem.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-black px-[48px]">
        <div className="max-w-[1280px] mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div>
                <Badge>ESTABLISHED 2020</Badge>
                <h2 className="text-5xl font-heading font-black text-white uppercase italic mb-12">WHO WE ARE</h2>
                <div className="space-y-8">
                  <p className="text-2xl text-white leading-relaxed font-light italic border-l-4 border-[#1A3D2B] pl-10">
                    ASKworX is an industrial automation and digital transformation company focused on building scalable, real-world automation systems.
                  </p>
                  <p className="text-xl text-white/50 leading-relaxed font-medium">
                    We specialize in connecting shop-floor operations with cloud intelligence to enable smarter, faster decision-making. By bridging the gap between rugged industrial hardware and high-performance software, we transform raw machine data into strategic operational assets.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1000&q=90" 
                   fill 
                   alt="Digital Transformation" 
                   className="object-cover opacity-60" 
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Capabilities / Pillars */}
      <section className="section-padding bg-[#050505] px-[48px] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-24">
             <Badge>OUR PILLARS</Badge>
             <h2 className="text-6xl font-heading font-black text-white uppercase italic tracking-tighter">WHAT MAKES US DIFFERENT</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "GROUND-TO-CLOUD", 
                icon: Layers, 
                desc: "We design complete architectures from the machine PLC level up to cloud analytics. We build the logic, the gateways, and the dashboards — not just snapshots." 
              },
              { 
                title: "FACTORY EXPERIENCE", 
                icon: Factory, 
                desc: "Our systems are built for the grit of the plant floor. We engineer for 24/7 high-pressure operations, not just theoretical lab designs." 
              },
              { 
                title: "CLEAN ENGINEERING", 
                icon: Settings, 
                desc: "Code is our craft. We deliver structured, fully documented, and massively scalable logic that your teams can trust for decades." 
              },
              { 
                title: "COMPLIANCE-READY", 
                icon: ShieldCheck, 
                desc: "Specialized for Regulated Industries. Our designs integrate GxP, data integrity, and comprehensive audit logs natively." 
              }
            ].map((p, i) => (
              <div key={i} className="p-10 bg-black border border-white/5 rounded-3xl group hover:border-white transition-all">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#1A3D2B] transition-colors">
                   <p.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-base font-heading font-black text-white uppercase mb-6 tracking-widest">{p.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed font-medium italic">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method / Approach */}
      <section className="section-padding bg-black px-[48px]">
        <div className="max-w-[1280px] mx-auto">
           <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-1/2">
                <Badge>OUR METHOD</Badge>
                <h2 className="text-6xl font-heading font-black text-white uppercase italic mb-16 tracking-tighter leading-none">THE ARCHITECTURE<br />PROCESS</h2>
                <div className="space-y-12">
                  {[
                    "Understand the plant and operational process",
                    "Design the ground-to-cloud architecture",
                    "Implement reliable automation & control systems",
                    "Connect to real-time cloud and analytics platform",
                    "Deliver long-term, scalable industrial solutions"
                  ].map((step, i) => (
                    <div key={i} className="flex gap-8 group">
                       <span className="text-4xl font-heading font-black text-white/10 group-hover:text-[#1A3D2B] transition-colors">0{i+1}</span>
                       <div className="pt-2">
                          <p className="text-xl text-white font-bold uppercase tracking-widest italic group-hover:translate-x-2 transition-transform">{step}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative h-[700px] w-full rounded-3xl overflow-hidden border border-white/10">
                 <Image 
                   src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=90" 
                   fill 
                   alt="Process Engineering" 
                   className="object-cover opacity-50" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                 <div className="absolute bottom-12 left-12 right-12 p-8 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <p className="text-sm text-white font-black tracking-[0.3em] uppercase mb-4 italic">OUR VISION</p>
                    <p className="text-xl text-white/80 font-light italic">"To build intelligent, connected industrial systems that bridge traditional automation with modern digital infrastructure."</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Services Expansion */}
      <section className="section-padding bg-black px-[48px] border-t border-white/5">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <Badge>SERVICE STACK</Badge>
              <h2 className="text-6xl font-heading font-black text-white uppercase italic tracking-tighter leading-none">CORE CAPABILITIES</h2>
            </div>
            <p className="text-white/40 text-lg italic max-w-sm border-l border-white/10 pl-6">
              "We provide the technical backbone for the modern digital factory."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Industrial Automation", desc: "Advanced PLC, SCADA, and motion control logic tailored for high-availability manufacturing.", icon: Settings },
              { title: "Cloud & IIoT", desc: "Seamless sensor-to-cloud telemetry using secure MQTT/OPC-UA bridges and real-time analytics.", icon: Cloud },
              { title: "Software Development", desc: "Bespoke enterprise applications, fintech portals, and custom ERP/CRM systems built for scale.", icon: Code },
              { title: "Mobile Applications", desc: "High-performance iOS and Android apps for operational visibility and consumer engagement.", icon: Smartphone },
              { title: "WhatsApp Automation", icon: MessageSquare, desc: "AI-driven bot orchestration for automated ordering, reminders, and customer support." }
            ].map((s, i) => (
              <div key={i} className="group relative">
                <div className="flex items-center gap-6 mb-6">
                   <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <s.icon className="w-5 h-5" />
                   </div>
                   <h3 className="text-xl font-heading font-black text-white uppercase italic tracking-tight">{s.title}</h3>
                </div>
                <p className="text-white/40 leading-relaxed font-medium pl-18 italic border-l border-white/5 ml-6 pl-12">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-[#050505] px-[48px] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto text-center">
          <Badge>GLOBAL VERTICALS</Badge>
          <h2 className="text-5xl font-heading font-black text-white uppercase italic mb-8">INDUSTRIES WE SERVE</h2>
          <p className="text-white/40 text-lg mb-16 italic font-medium">"Our solutions are built on real-world experience across diverse manufacturing environments."</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["Automotive", "Pharma", "Food & Beverage", "Oil & Gas", "Renewable Energy", "Textiles"].map((ind) => (
              <div key={ind} className="py-12 border border-white/5 bg-black rounded-xl flex items-center justify-center group hover:border-[#1A3D2B] transition-all">
                <span className="text-xs font-black tracking-widest text-white/50 group-hover:text-white uppercase italic">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-black px-[48px] text-center">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[clamp(3rem,8vw,7.5rem)] font-heading font-black text-white uppercase italic mb-12 leading-[0.85] tracking-tighter">
            READY TO SCALE<br />YOUR INTELLIGENCE?
          </h2>
          <p className="text-xl text-white/50 mb-20 italic">Partner with us to build your next-generation automation system.</p>
          <Link href="/contact" className="inline-block">
            <Button variant="secondary" className="px-16 py-7 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all">
              GET CONSULTATION →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
