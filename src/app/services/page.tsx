"use client";

import React from 'react';
import { Badge, Button } from '@/components/UI';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Factory, Monitor, 
  Settings, Database, Cloud, Radio, ShieldCheck, 
  Box, LineChart, Zap, Globe, Cpu, Share2, Layout,
  Smartphone, Code, Megaphone, Terminal, Users,
  Rocket, BarChart, Search, Target
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const detailedServices = [
  {
    title: "INDUSTRIAL AUTOMATION",
    slug: "automation",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=90",
    sections: [
      {
        title: "Core Control & Motion Systems",
        items: ["Programmable Controllers (PLC)", "Motion Controllers (Multi-axis)", "Servo Systems & AC Inverters", "Integrated Safety (SIL2/3)"]
      },
      {
        title: "Visualization & SCADA",
        items: ["High-Performance HMI Design", "Historical Trend Databases", "Distributed SCADA Clusters", "Alarm Shelving & Management"]
      }
    ]
  },
  {
    title: "CLOUD & IIOT INTELLIGENCE",
    slug: "iiot",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1000&q=90",
    body: "We enable manufacturers to capture, normalize, and transmit their raw plant-floor data into scalable cloud platforms. Our 'The Bridge' architecture secures every bit with TLS 1.3 encryption and MQTT/OPC-UA standardization.",
    subsections: [
      { title: "Real-time Dashboards", icon: Monitor, text: "Instant OEE and line-state tracking across any device." },
      { title: "Performance Analytics", icon: LineChart, text: "High-frequency telemetry for bottleneck analysis." },
      { title: "Predictive Triggers", icon: ShieldCheck, text: "AI-ready anomaly detection for preventive alerting." },
      { title: "Operational Intelligence", icon: Database, text: "Automated shift reporting and ERP synchronization." }
    ],
    flow: ["FACTORY", "EDGE GW", "ENCRYPT", "CLOUD"]
  },
  {
    title: "PREMIUM SOFTWARE & PORTALS",
    slug: "software",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=90",
    body: "We build high-performance web applications, fintech portals, and custom enterprise tools. Our software is designed for massive scale, featuring robust security and sub-millisecond response times.",
    subsections: [
      { title: "Fintech Portals", icon: Globe, text: "Secure payment gateways and financial transaction dashboards." },
      { title: "Custom ERP/CRM", icon: Terminal, text: "Bespoke resource management systems built for your logic." },
      { title: "Web Applications", icon: Code, text: "Scalable SaaS platforms built with React and high-perf Go backends." },
      { title: "Enterprise Admin", icon: Layout, text: "Powerful internal control panels for operational oversight." }
    ],
    flow: ["IDEATION", "PROTOTYPE", "DEV", "DEPLOY"]
  },
  {
    title: "DIGITAL GROWTH & MARKETING",
    slug: "marketing",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=90",
    body: "Scaling your brand through data-driven performance marketing. From surgical SEO to high-conversion Meta and Google Ads, we drive the numbers that matter.",
    subsections: [
      { title: "Meta & Google Ads", icon: Target, text: "High-ROI paid campaigns with precision audience targeting." },
      { title: "Surgical SEO", icon: Search, text: "Dominating search results through technical SEO and content strategy." },
      { title: "Conversion (CRO)", icon: BarChart, text: "Optimizing landing pages to turn traffic into high-value leads." },
      { title: "Brand Narrative", icon: Megaphone, text: "Crafting a digital presence that resonates with your core audience." }
    ],
    flow: ["AUDIT", "STRATEGY", "EXECUTE", "SCALE"]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      {/* Hero */}
      <section className="relative h-[70vh] flex flex-col justify-center px-[48px] border-b border-white/8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=90" 
            alt="Services Hero" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="max-w-[1280px] mx-auto w-full relative z-10">
          <Badge>ENGINEERING & GROWTH</Badge>
          <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-heading font-black mb-8 tracking-tighter leading-[0.9] uppercase italic transition-all">
            FULL SERVICE<br />DIGITAL STACK.
          </h1>
          <p className="text-[#94A3B8] text-2xl font-light italic max-w-2xl leading-relaxed">
            "We build the systems that control machines, and the software that scales businesses."
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-black py-24">
        {detailedServices.map((service, index) => (
          <div key={service.slug} className={`section-padding px-[48px] ${index % 2 !== 0 ? 'bg-[#050505]' : 'bg-black'}`}>
            <div className={`max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
               <div className="lg:w-1/2">
                  <Badge>{service.slug.toUpperCase()}</Badge>
                  <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase mb-12 italic">{service.title}</h2>
                  
                  {service.sections ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                      {service.sections.map((sec, i) => (
                        <div key={i}>
                          <h4 className="text-white font-heading font-black uppercase text-[11px] tracking-[0.3em] mb-4 border-b border-white/10 pb-2">{sec.title}</h4>
                          <ul className="space-y-4">
                            {sec.items.map((item, idx) => (
                              <li key={idx} className="flex gap-4 text-[13px] text-white/60 uppercase font-black tracking-widest leading-snug">
                                <Zap className="w-3 h-3 mt-1 shrink-0 text-[#1A3D2B]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="text-2xl text-[#94A3B8] leading-relaxed mb-12 italic border-l-2 border-[#1A3D2B] pl-8">
                        {service.body}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {service.subsections?.map((sub: any, i) => (
                          <div key={i} className="p-8 bg-black border border-white/5 rounded-2xl group hover:border-white transition-all">
                             <sub.icon className="w-8 h-8 text-white mb-6 group-hover:scale-110 transition-transform" />
                             <h5 className="text-white font-heading font-black uppercase text-sm mb-4">{sub.title}</h5>
                             <p className="text-secondary text-xs uppercase font-bold tracking-widest leading-relaxed">{sub.text}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-6 mb-12">
                         {service.flow?.map((step, i, arr) => (
                           <React.Fragment key={i}>
                             <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">{step}</span>
                             {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-white/20" />}
                           </React.Fragment>
                         ))}
                      </div>
                    </>
                  )}

                  <Link href={`/services/${service.slug}`}>
                    <Button variant="secondary" className="px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">EXPLORE {service.slug.toUpperCase()} →</Button>
                  </Link>
               </div>
               
               <div className="lg:w-1/2 relative h-[600px] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                 <Image src={service.img} fill alt={service.title} className="object-cover opacity-70 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               </div>
            </div>
          </div>
        ))}
      </section>

      {/* Tech Marquee */}
      <section className="py-24 bg-[#050505] border-y border-white/5 overflow-hidden">
         <div className="animate-marquee gap-24 flex whitespace-nowrap">
            {[
              "PLC", "SCADA", "HMI", "Software", "React Native", "Golang", 
              "Digital Marketing", "Docker", "Flutter", "React JS", "Next JS",
              "PLC", "SCADA", "HMI", "Software", "React Native", "Golang", 
              "Digital Marketing", "Docker", "Flutter", "React JS", "Next JS"
            ].map((tech, i) => (
              <span key={i} className="text-4xl md:text-6xl font-heading font-black text-white/10 uppercase italic hover:text-white transition-colors cursor-default whitespace-nowrap">{tech}</span>
            ))}
         </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-black px-[48px] text-center">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
           <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-heading font-black text-white uppercase mb-12 leading-[0.85] italic">RELIABLE CODE.<br />STRATEGIC GROWTH.</h2>
           <Link href="/contact" className="inline-block">
             <Button variant="secondary" className="px-16 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
               START YOUR PROJECT →
             </Button>
           </Link>
        </div>
      </section>
    </div>
  );
}
