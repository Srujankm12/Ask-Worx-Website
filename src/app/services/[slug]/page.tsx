"use client";

import React from 'react';
import { Badge, Button } from '@/components/UI';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, 
  Settings, Zap, Shield, Cpu, Database, 
  Cloud, Monitor, Share2, Globe, Radio,
  Lock, Activity, LineChart, Layout,
  Smartphone, Code2, Rocket, BarChart,
  Megaphone, Search, Target, Users
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const serviceDetails: Record<string, any> = {
  "automation": {
    title: "INDUSTRIAL AUTOMATION",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90",
    description: "Discrete and process automation solutions tailored for high-availability manufacturing environments. We unify the machine layer into a deterministic power hub.",
    longContent: "Industrial Automation is at the core of our engineering identity. We design, program, and commission complex PLC/SCADA systems that act as the deterministic backbone of modern manufacturing. Every logic block we write is designed for 24/7 reliability, safety, and long-term scalability.",
    features: [
      { title: "Deterministic Logic", text: "Structured text and ladder logic designed for zero-latency execution." },
      { title: "Motion Control Mastery", text: "Complex multi-axis synchronization for robotics and CNC." },
      { title: "Fail-safe Implementation", text: "Safety-integrated control (SIL-rated) to protect personnel." }
    ],
    sections: [
      {
        title: "Core Engineering",
        items: ["PLC/PAC Programming", "Distributed I/O Systems", "AC Servo & VFD Control", "Integrated Safety Circuits"]
      },
      {
        title: "Visualization",
        items: ["High-Perf HMI Design", "Alarm Rationalization", "Historical Trending", "Remote Site Monitoring"]
      }
    ]
  },
  "iiot": {
    title: "CLOUD & IIOT INTELLIGENCE",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=90",
    description: "Capturing and transmitting plant-floor data into scalable cloud platforms. We bridge the OT/IT gap with secure telemetry.",
    longContent: "We transform machine data into actionable operational intelligence. Using MQTT and secure TLS 1.3 tunnels, we move data from the shop floor to the cloud, enabling real-time OEE tracking and predictive maintenance.",
    features: [
      { title: "Secure Data Tunnels", text: "Hardened encryption path from the edge to the cloud." },
      { title: "Asset Mirroring", text: "Digital twin modeling for real-time facility visibility." },
      { title: "Scaleable Analytics", text: "Unified Namespace (UNS) for enterprise-wide data parity." }
    ],
    sections: [
      {
        title: "Connectivity",
        items: ["MQTT/OPC-UA Bridges", "Protocol Normalization", "Edge Buffering", "Secure Gateways"]
      },
      {
        title: "Intelligence",
        items: ["Real-time OEE Analytics", "Executive Reports", "Anomaly Detection", "Predictive Health Logic"]
      }
    ]
  },
  "software": {
    title: "CUSTOM SOFTWARE DEVELPMENT",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90",
    description: "Premium enterprise software solutions. From Fintech portals to complex CRM/ERP systems, we build highly-scalable, production-ready applications.",
    longContent: "ASKworX SoftDev specializes in building robust, modern software for the digital economy. We move beyond simple websites to build complex, mission-critical applications including Financial Portals, Custom ERPs, and Enterprise Resource Management systems. Using modern stacks like Next.js and high-performance Go backends, we deliver software that is inherently secure, massively scalable, and designed for an exceptional user experience on every device.",
    features: [
      { title: "Fintech & Portals", text: "High-security transaction portals with encrypted data paths and multi-layer authentication." },
      { title: "ERP & CRM Customization", text: "Bespoke resource management tools tailored perfectly to your unique business logic." },
      { title: "High-Performance API", text: "Scalable backend architectures built in Go and Node.js for sub-millisecond response." }
    ],
    sections: [
      {
        title: "Enterprise Web Applications",
        items: ["Custom ERP/CRM Systems", "Fintech Payment Portals", "Admin Control Panels", "SaaS Platform Development"]
      },
      {
        title: "Modern Tech Stack",
        items: ["React & Next.js Frontends", "Go & Node.js Backends", "PostgreSQL & MongoDB", "Cloud-native (AWS/Azure)"]
      }
    ]
  },
  "mobile": {
    title: "MOBILE APP DEVELOPMENT",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=90",
    description: "High-performance iOS and Android applications. We build seamless, native-feeling mobile experiences that drive engagement and efficiency.",
    longContent: "In the mobile-first world, your application is your most direct link to your users. ASKworX builds premium mobile apps for both iOS and Android using Flutter and React Native. We focus on creating fluid, high-conversion user interfaces that work flawlessly across all device sizes. From customer-facing fintech apps to internal operational tools, we deliver mobile excellence at scale with zero compromise on speed.",
    features: [
      { title: "Cross-Platform Mastery", text: "Unified codebase for iOS and Android with zero compromise on performance." },
      { title: "UX-First Design", text: "Fluid animations and intuitive layouts designed to maximize user retention." },
      { title: "Real-time Synchronization", text: "Live data sync and offline persistence for mission-critical mobility." }
    ],
    sections: [
      {
        title: "Application Types",
        items: ["Consumer Fintech Apps", "E-commerce Mobile Stores", "Internal Corporate Tools", "Social & Collaboration Apps"]
      },
      {
        title: "Core Capabilities",
        items: ["iOS (Swift/SwiftUI)", "Android (Kotlin/Jetpack)", "Cross-platform (Flutter/RN)", "Secure API Integration"]
      }
    ]
  },
  "marketing": {
    title: "DIGITAL MARKETING SERVICES",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90",
    description: "Driving growth through data-backed marketing strategies. From SEO to high-performance Meta and Google Ads, we scale your digital presence.",
    longContent: "Digital marketing is no longer just about 'being online'; it's about being visible to the right people at the right time. ASKworX provides a comprehensive digital growth suite designed to maximize your ROI. We specialize in high-conversion Meta (Facebook/Instagram) Ads, Google Search Ads, and technical Search Engine Optimization (SEO). Our approach is data-driven—we analyze user behavior and optimize every pixel to ensure that every marketing rupee results in measurable revenue growth.",
    features: [
      { title: "Performance Ads", text: "High-ROI Google & Meta ad campaigns with precise audience targeting and A/B testing." },
      { title: "Surgical SEO", text: "Technical SEO and content strategies designed to dominate search engine results." },
      { title: "Conversion Optimization", text: "Heatmap analysis and UX tweaks to turn your website traffic into high-value leads." }
    ],
    sections: [
      {
        title: "Ad Management",
        items: ["Meta Ads (FB/IG)", "Google Search Ads", "YouTube & Video Ads", "LinkedIn B2B Campaigns"]
      },
      {
        title: "Organic Growth",
        items: ["Keyword & Market Research", "Content Strategy & Writing", "Technical On-Page SEO", "Backlink Building"]
      }
    ]
  },
  "whatsapp": {
    title: "WHATSAPP AUTOMATION",
    img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&q=90",
    description: "Automating customer engagement via the world's most popular messaging app. AI-powered bots and automated notification engines.",
    longContent: "We help you harness the power of WhatsApp with automated bot orchestration. Using the Meta Cloud API, we build intelligent notification engines, AI-powered FAQ bots, and structured query handling systems that provide a professional, 24/7 engagement layer for your brand.",
    features: [
      { title: "Meta Cloud API Sync", text: "Official, high-volume WhatsApp Business integration with zero risk of bans." },
      { title: "AI-Powered Flow", text: "Intelligent NLP-driven chatbots that handle complex customer queries 24/7." },
      { title: "Dynamic Broadcasting", text: "Automated image and PDF broadcasts for marketing and operational updates." }
    ],
    sections: [
      {
        title: "Bot Orchestration",
        items: ["AI Chatbot Integration", "Automated Query Routing", "Multi-Agent Support", "Custom Button Menus"]
      },
      {
        title: "Operational Flow",
        items: ["Payment Reminder Bots", "Event Booking & RSVP", "Service Status Updates", "Customer Feedback Loops"]
      }
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = serviceDetails[slug] || serviceDetails["automation"];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden px-[48px] pb-20 pt-24">
        <Image src={service.img} alt={service.title} fill priority className="object-cover object-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/95 z-0" />
        <div className="max-w-[1280px] mx-auto w-full relative z-10">
          <Link href="/services" className="flex items-center gap-2 text-[#94A3B8] text-[0.75rem] font-black tracking-[0.2em] uppercase mb-8 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> BACK TO ALL SERVICES
          </Link>
          <Badge>● PREMIUM DIGITAL SOLUTIONS</Badge>
          <h1 className="text-[clamp(3rem,6vw,6rem)] font-heading font-black leading-[0.9] mt-4 text-white uppercase italic tracking-tighter">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-black px-[48px]">
        <div className="max-w-[1280px] mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                 <h2 className="text-sm font-black tracking-[0.4em] text-[#1A3D2B] uppercase mb-12">Service Overview</h2>
                 <p className="text-3xl font-heading font-black text-white uppercase leading-tight mb-12 italic">
                    DIGITAL EXCELLENCE<br />AT PRODUCTION SCALE.
                 </p>
                 <div className="space-y-8 mb-12">
                   <p className="text-xl text-[#94A3B8] leading-relaxed italic">
                      {service.description}
                   </p>
                 </div>
                 <div className="grid grid-cols-1 gap-6">
                    {service.features?.map((feat: any, i: number) => (
                      <div key={i} className="flex gap-6 p-6 bg-[#0D0D0D] border border-white/5 rounded-2xl group hover:border-white transition-all">
                         <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#1A3D2B] transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                         </div>
                         <div>
                            <h4 className="text-sm font-heading font-black text-white uppercase mb-2">{feat.title}</h4>
                            <p className="text-xs text-secondary uppercase font-bold tracking-widest leading-relaxed">{feat.text}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </motion.div>
              <div className="relative h-[650px] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                 <Image src={service.img} fill alt={service.title} className="object-cover opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>
           </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-[120px] bg-[#050505] px-[48px] border-y border-white/5">
         <div className="max-w-[1000px] mx-auto">
            <Badge>THE ARCHITECTURE</Badge>
            <h3 className="text-5xl font-heading font-black text-white uppercase italic leading-[0.9] mb-12">BUILT TO<br />OUTPERFORM.</h3>
            <p className="text-2xl text-white leading-relaxed font-light italic border-l-4 border-[#1A3D2B] pl-10">
               {service.longContent}
            </p>
         </div>
      </section>

      {/* Grid Capability Detail */}
      <section className="section-padding bg-black px-[48px]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {service.sections?.map((sec: any, i: number) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-[#0D0D0D] border border-white/5 rounded-3xl group hover:border-white transition-all"
            >
              <h3 className="text-white font-heading font-black uppercase text-xl tracking-widest mb-10 border-b border-white/10 pb-4 italic group-hover:titanium-text transition-all">{sec.title}</h3>
              <ul className="space-y-6">
                {sec.items.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-4 items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#1A3D2B]" />
                    <span className="text-[#94A3B8] text-sm font-bold uppercase tracking-[0.2em] leading-snug group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="hr-separator" />

      {/* Final CTA */}
      <section className="section-padding bg-black px-[48px] text-center">
        <div className="max-w-[1280px] mx-auto">
           <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-heading font-black mb-12 uppercase leading-tight text-white italic">RELIABLE SOFTWARE.<br />STRATEGIC GROWTH.</h2>
           <div className="flex flex-wrap justify-center gap-6">
              <a href="https://wa.me/919030108949" target="_blank" rel="noopener noreferrer">
                <Button className="px-16 py-6 bg-[#1A3D2B] text-white rounded-full font-black uppercase tracking-widest text-xs">WHATSAPP CONSULTATION →</Button>
              </a>
              <Link href="/contact">
                <Button variant="secondary" className="px-16 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">START YOUR PROJECT →</Button>
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
