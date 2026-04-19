"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Badge, Button } from '@/components/UI';
import { CommandCenter, Marquee } from '@/components/Widgets';
import { 
  ArrowRight, Eye, Lightbulb, BarChart3, 
  Map, Wrench, FileText, Search, Share2, 
  CheckCircle2, Cpu, Factory, Cloud, Compass,
  ShieldCheck, Zap, Layers, Activity, Monitor,
  Smartphone, Code, Megaphone, Server, Boxes,
  ChevronRight, Quote, Trophy, Globe, Lock,
  Radio, Terminal, MessageSquare, FlaskConical,
  Sun, Building2, Car, Utensils, Droplets,
  Scissors, Plane
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden pt-[72px] bg-black">
      {/* 01. Hero Section */}
      <section className="relative h-[95vh] flex items-center px-[48px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=90" alt="Advanced Industrial" fill priority className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/5" />
        </div>

        <div className="max-w-[1280px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="flex items-center gap-4 mb-8">
                   <Badge>● GROUND TO CLOUD ENGINEERING</Badge>
                   <div className="h-[1px] w-24 bg-white/10" />
                </div>
                <h1 className="text-[clamp(3.5rem,8.5vw,7.5rem)] leading-[0.85] font-heading font-black tracking-tighter mb-10 uppercase italic text-white">
                  ENGINEERING<br />THE INDUSTRIAL<br /><span className="titanium-text">FUTURE.</span>
                </h1>
                <p className="text-xl md:text-2xl text-secondary max-w-2xl mb-14 italic leading-relaxed font-light">
                  "High-availability logic. Secure telemetry. Scalable software. We build the systems that power the modern world."
                </p>
                <div className="flex flex-wrap gap-6">
                  <a href="https://wa.me/919030108949" target="_blank" rel="noopener noreferrer">
                    <Button className="px-14 py-6 bg-[#1A3D2B] text-white rounded-full font-black uppercase tracking-widest text-[11px] shadow-[0_0_50px_rgba(26,61,43,0.3)] hover:scale-105 transition-all">WHATSAPP CONSULTATION →</Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="secondary" className="px-14 py-6 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-black transition-all border-white/20">GET TECHNICAL QUOTE →</Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
               <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }}>
                 <CommandCenter />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. The Process Section (Velocity) */}
      <section className="section-padding px-[48px] bg-black border-b border-white/5">
         <div className="max-w-[1280px] mx-auto">
            <div className="mb-24">
               <Badge>THE VELOCITY</Badge>
               <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase italic mt-6 tracking-tighter">OUR DEPLOYMENT<br />FRAMEWORK.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {[
                 { step: "01", title: "Discovery & Audit", body: "Deep-dive into existing OT/IT infrastructure to identify scale bottlenecks." },
                 { step: "02", title: "Logic Architecture", body: "Engineering deterministic PLC logic and secure cloud-bridge telemetry." },
                 { step: "03", title: "Agile Deployment", body: "Non-disruptive integration with existing shop-floor operations." },
                 { step: "04", title: "Scaling & Growth", body: "Amplifying local results with global digital marketing and SaaS extensions." }
               ].map((item, i) => (
                 <div key={i} className="relative p-12 bg-[#0D0D0D] border border-white/5 rounded-3xl hover:border-[#1A3D2B] transition-all group overflow-hidden">
                    <span className="absolute -right-4 -top-4 text-9xl font-heading font-black text-white/[0.02] transition-colors group-hover:text-[#1A3D2B]/10">{item.step}</span>
                    <div className="relative z-10">
                       <h3 className="text-2xl font-heading font-black text-white uppercase italic mb-6">{item.title}</h3>
                       <p className="text-secondary text-xs font-bold tracking-widest leading-loose uppercase italic">{item.body}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 03. FULL SERVICES GRID WITH IMAGES */}
      <section className="section-padding px-[48px] bg-[#050505]">
         <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
               <div className="max-w-xl">
                  <Badge>OUR CORE CAPABILITIES</Badge>
                  <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase italic mt-6 leading-none tracking-tighter">ENGINEERING<br />& GROWTH STACK.</h2>
               </div>
               <p className="text-xl text-secondary italic max-w-sm mb-4">
                  "From deterministic plant-floor logic to global digital expansion. One partner for your entire journey."
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { 
                   icon: Factory, 
                   title: "Industrial Automation", 
                   body: "PLC/SCADA, motion control, and high-availability engineering.", 
                   img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
                   link: "/services/automation" 
                 },
                 { 
                   icon: Cloud, 
                   title: "IIoT & Cloud", 
                   body: "Secure telemetry and real-time operational intelligence.", 
                   img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
                   link: "/services/iiot" 
                 },
                 { 
                   icon: Terminal, 
                   title: "Software Dev", 
                   body: "Fintech portals, custom ERP/CRM, and scalable SaaS solutions.", 
                   img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
                   link: "/services/software" 
                 },
                 { 
                   icon: Smartphone, 
                   title: "Mobile Apps", 
                   body: "Premium iOS and Android apps for consumer and enterprise.", 
                   img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
                   link: "/services/mobile" 
                 },
                 { 
                   icon: Megaphone, 
                   title: "Digital Marketing", 
                   body: "Meta Ads, Google Search Ads, and high-conversion SEO.", 
                   img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
                   link: "/services/marketing" 
                 },
                 { 
                   icon: MessageSquare, 
                   title: "WhatsApp Bot", 
                   body: "AI-powered automation for sales and factory alarm bridges.", 
                   img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800",
                   link: "/services/whatsapp" 
                 }
               ].map((card, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -10 }}
                   className="group bg-black border border-white/5 rounded-[40px] overflow-hidden hover:border-[#1A3D2B] transition-all flex flex-col h-full"
                 >
                    {/* Card Image Header */}
                    <div className="relative h-64 overflow-hidden">
                       <Image src={card.img} fill alt={card.title} className="object-cover opacity-50 group-hover:scale-110 transition-all duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                       <div className="absolute top-8 left-8 p-3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                          <card.icon className="w-6 h-6 text-white group-hover:text-[#1A3D2B] transition-colors" />
                       </div>
                    </div>

                    <div className="p-10 flex flex-col justify-between flex-grow">
                       <div>
                          <h3 className="text-2xl font-heading font-black text-white uppercase italic mb-4">{card.title}</h3>
                          <p className="text-secondary text-xs font-bold tracking-widest leading-relaxed uppercase italic mb-10">{card.body}</p>
                       </div>
                       <Link href={card.link}>
                          <Button variant="secondary" className="w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] group-hover:bg-[#1A3D2B] group-hover:text-white transition-all">VIEW DETAILS →</Button>
                       </Link>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 04. Industrial Products Showcase (Teaser) */}
      <section className="section-padding px-[48px] bg-black border-y border-white/5">
         <div className="max-w-[1280px] mx-auto mb-24 flex flex-col items-center text-center">
            <Badge>PRECISION HARDWARE</Badge>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase italic mt-8 leading-[0.85] tracking-tighter">THE GROUND ENGINE.</h2>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1280px] mx-auto">
            <Link href="/products/plc" className="group h-[500px] relative rounded-3xl overflow-hidden border border-white/10">
               <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" fill alt="PLC" className="object-cover opacity-60 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
               <div className="absolute bottom-12 left-12">
                  <h3 className="text-4xl font-heading font-black text-white uppercase italic">PLC & CONTROL →</h3>
                  <p className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mt-4">Deterministic Logic at Scale</p>
               </div>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <Link href="/products/scada" className="group h-[234px] relative rounded-3xl overflow-hidden border border-white/10">
                  <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" fill alt="SCADA" className="object-cover opacity-60 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-8 left-8">
                     <h3 className="text-xl font-heading font-black text-white uppercase italic">SCADA VISUAL →</h3>
                  </div>
               </Link>
               <Link href="/products/sensors" className="group h-[234px] relative rounded-3xl overflow-hidden border border-white/10">
                  <Image src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600" fill alt="Sensors" className="object-cover opacity-60 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-8 left-8">
                     <h3 className="text-xl font-heading font-black text-white uppercase italic">PRECISION SENSORS →</h3>
                  </div>
               </Link>
               <Link href="/products/networking" className="group col-span-1 md:col-span-2 h-[234px] relative rounded-3xl overflow-hidden border border-white/10">
                  <Image src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1000" fill alt="Networking" className="object-cover opacity-60 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-8 left-8">
                     <h3 className="text-2xl font-heading font-black text-white uppercase italic">INDUSTRIAL NETWORKING →</h3>
                  </div>
               </Link>
            </div>
         </div>
      </section>

      {/* 05. Engineering Blog Section (Latest Insights) */}
      <section className="section-padding bg-black px-[48px] border-b border-white/5">
        <div className="max-w-[1280px] mx-auto">
           <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                 <Badge>ENGINEERING INSIGHTS</Badge>
                 <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase italic mt-6 leading-none tracking-tighter">LATEST FROM<br />THE LAB.</h2>
              </div>
              <Link href="/blog">
                 <Button variant="secondary" className="px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px]">VISIT FULL BLOG →</Button>
              </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { 
                  title: "Industry 4.0 in India: Deep Dive into 2025 Manufacturing", 
                  date: "APR 19, 2026",
                  img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000",
                  tag: "INDUSTRY ANALYSIS",
                  slug: "industry-4-india-2025",
                  body: "Where manufacturers really stand in the digital revolution and how to overcome legacy infrastructure barriers."
                },
                { 
                  title: "PLC VS DCS: Which Control System is Right for Your Plant?", 
                  date: "APR 15, 2026",
                  img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=1000",
                  tag: "TECHNICAL GUIDE",
                  slug: "plc-vs-dcs-which-to-choose",
                  body: "Understanding the architectural differences and how hybrid control systems are disrupting process automation."
                },
                { 
                  title: "How to Calculate the Real ROI of an IIoT Investment", 
                  date: "APR 10, 2026",
                  img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000",
                  tag: "BUSINESS CASE",
                  slug: "iiot-roi-manufacturing",
                  body: "A framework for measuring the direct economic impact of predictive maintenance and operational visibility."
                }
              ].map((blog, i) => (
                <motion.div 
                   key={i} 
                   whileHover={{ y: -10 }}
                   className="group bg-[#0A0A0A] border border-white/5 rounded-[40px] overflow-hidden hover:border-[#1A3D2B] transition-all flex flex-col h-full"
                >
                   <div className="relative h-64 overflow-hidden">
                      <Image src={blog.img} fill alt={blog.title} className="object-cover opacity-40 group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                      <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                         <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[8px] font-black tracking-widest text-white uppercase">{blog.tag}</span>
                         <span className="px-3 py-1.5 bg-[#1A3D2B] rounded-full text-[8px] font-black tracking-widest text-white uppercase">{blog.date}</span>
                      </div>
                   </div>
                   <div className="p-8 flex flex-col justify-between flex-grow">
                      <div>
                         <h3 className="text-xl font-heading font-black text-white uppercase italic mb-6 leading-tight group-hover:titanium-text transition-all min-h-[3rem]">{blog.title}</h3>
                         <p className="text-white/40 text-xs leading-relaxed italic mb-8">{blog.body}</p>
                      </div>
                      <Link href={`/blog/${blog.slug}`}>
                         <Button variant="secondary" className="w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] group-hover:bg-[#1A3D2B] group-hover:text-white transition-all">READ ARTICLE →</Button>
                      </Link>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 07. Industries Verticals (Teaser Grid) */}
      <section className="section-padding px-[48px] bg-[#050505]">
         <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
               <div className="max-w-xl">
                  <Badge>GLOBAL VERTICALS</Badge>
                  <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase italic mt-6 leading-none tracking-tighter">INDUSTRIES<br />WE SERVE.</h2>
               </div>
               <Link href="/industries">
                  <Button variant="secondary" className="px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px]">VIEW ALL SECTORS →</Button>
               </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                 { name: "Automotive", icon: Car },
                 { name: "Pharma", icon: FlaskConical },
                 { name: "Food & Bev", icon: Utensils },
                 { name: "Renewables", icon: Sun },
                 { name: "Oil & Gas", icon: Droplets },
                 { name: "Textiles", icon: Scissors }
               ].map((ind, i) => (
                 <Link href={`/industries`} key={i} className="p-10 bg-black border border-white/5 rounded-[30px] hover:border-[#1A3D2B] transition-all group flex flex-col justify-between h-[220px]">
                    <ind.icon className="w-8 h-8 text-white/50 group-hover:text-[#1A3D2B] transition-colors" />
                    <div>
                       <h4 className="text-[12px] font-black tracking-[0.3em] text-white uppercase italic">{ind.name}</h4>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-white group-hover:translate-x-2 transition-all" />
                 </Link>
               ))}
            </div>
         </div>
      </section>

      {/* 10. Final CTA */}
      <section className="section-padding bg-black text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1A3D2B]/5 blur-3xl rounded-full" />
        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center">
          <Badge>RELIABLE & READY</Badge>
          <h2 className="text-[clamp(3rem,8vw,10rem)] font-heading font-black text-white uppercase italic mb-16 leading-[0.8] tracking-tighter text-center">
            THE FUTURE IS<br /><span className="titanium-text">AUTOMATED.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
             <a href="https://wa.me/919030108949" target="_blank" rel="noopener noreferrer">
              <Button className="px-16 py-7 bg-[#1A3D2B] text-white rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl">WHATSAPP CONSULTATION →</Button>
            </a>
            <Link href="/contact" className="inline-block">
              <Button variant="secondary" className="px-16 py-7 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all border-white/20">CONSULT WITH AN ENGINEER →</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
