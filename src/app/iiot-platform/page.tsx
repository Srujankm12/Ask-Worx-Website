"use client";

import React from 'react';
import { Badge, Button } from '@/components/UI';
import { motion } from 'framer-motion';
import { 
  Database, Wifi, Activity, LineChart, 
  Globe, ArrowRight, ShieldCheck, Cpu,
  Layers, Settings, Monitor, Factory, Cloud,
  Zap, Lock, Share2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const analyticsItems = [
  { title: "Real-time Dashboards", text: "Live machine and line data, accessible from any device anywhere. Optimized for low-bandwidth environments." },
  { title: "Performance Analytics", text: "OEE, cycle time, throughput, and quality metrics tracking. Identifying hidden capacity in your existing lines." },
  { title: "Predictive Maintenance", text: "Anomaly detection and trend analysis before equipment failure. Move from reactive to proactive service." },
  { title: "Operational Intelligence", text: "Automated management reports and shift performance summaries. Aligning shop-floor with top-floor goals." },
];

export default function IIoTPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      {/* Hero */}
      <section className="relative h-[80vh] flex flex-col justify-center px-[48px] border-b border-white/8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=90" 
            alt="IIoT Hero" 
            fill 
            className="object-cover opacity-50 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="max-w-[1280px] mx-auto w-full relative z-10">
          <Badge>● DATA INTELLIGENCE</Badge>
          <h1 className="text-[clamp(3.5rem,10vw,10rem)] leading-[0.85] font-heading font-black tracking-tighter mb-8 uppercase italic">
            CONNECTING PLANT<br />TO THE CLOUD.
          </h1>
          <p className="text-[#94A3B8] text-2xl font-light italic max-w-2xl leading-relaxed">
            "We enable machines to speak the language of the cloud, transforming raw vibrations and cycles into profitable insights."
          </p>
        </div>
      </section>

      {/* The Bridge Section - Diagram from Brochure */}
      <section className="section-padding bg-black px-[48px]">
        <div className="max-w-[1280px] mx-auto text-center">
           <Badge>THE BRIDGE ARCHITECTURE</Badge>
           <h2 className="text-[clamp(2rem,5vw,5.5rem)] font-heading font-black mb-12 uppercase text-white leading-none italic">
             SECURE OT TO IT INTEGRATION
           </h2>
           <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto mb-32 leading-relaxed italic">
            The Bridge is our proprietary framework for secure, scalable data orchestration. It ensures that sensitive factory controls remain isolated while telemetry flows seamlessly to the cloud.
           </p>

           <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto mb-32 relative">
             <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-gradient-to-r from-[#1A3D2B] via-white/10 to-[#1A3D2B] -z-1" />
             {[
               { icon: Factory, label: "01. GROUND LAYER", desc: "Sensors & PLCs" },
               { icon: Cpu, label: "02. EDGE LAYER", desc: "Normalization" },
               { icon: ShieldCheck, label: "03. SECURE RELAY", desc: "TLS 1.3 Encryption" },
               { icon: Cloud, label: "04. CLOUD LAYER", desc: "Large Scale AI" }
             ].map((step, i) => (
               <div key={i} className="flex flex-col items-center gap-6 group">
                 <div className="w-32 h-32 bg-[#0D0D0D] border border-white/10 flex items-center justify-center rounded-[2.5rem] group-hover:border-[#1A3D2B] group-hover:bg-black transition-all shadow-2xl relative">
                    <step.icon className="w-12 h-12 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center font-black text-[10px] text-white">
                      {i + 1}
                    </div>
                 </div>
                 <div className="text-center">
                    <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase block mb-1">{step.label}</span>
                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#6B7280] uppercase">{step.desc}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      <hr className="hr-separator" />

      {/* The Insight Section from Brochure */}
      <section className="section-padding px-[48px] bg-[#050505]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative h-[700px] border border-white/10 rounded-3xl overflow-hidden lg:order-2">
            <Image 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=90" 
              alt="Operational Analytics" 
              fill 
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 p-10 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
               <Activity className="w-10 h-10 text-[#1A3D2B] mb-6" />
               <h4 className="text-2xl font-heading font-black text-white uppercase italic mb-4">LIVE TELEMETRY FEED</h4>
               <p className="text-secondary text-sm font-bold uppercase tracking-widest leading-relaxed">Sampled at 100ms intervals, visualized in 1s real-time.</p>
            </div>
          </div>
          <div className="lg:order-1">
            <Badge>THE INSIGHT</Badge>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-heading font-black mb-12 uppercase text-white leading-[0.9] italic">
              TRANSFORMING DATA<br />INTO INTELLIGENCE
            </h2>
            <div className="space-y-12 mb-16">
              <p className="text-[#94A3B8] text-2xl leading-relaxed italic border-l-4 border-white/10 pl-8">
                We transform chaotic streams of machine data into clear, actionable intelligence. From individual sensor signals to plant-wide operational visibility.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {analyticsItems.map((item, i) => (
                <div key={i} className="space-y-4 p-8 bg-black border border-white/5 rounded-2xl hover:border-white transition-all">
                  <h4 className="text-white font-heading font-black uppercase text-sm tracking-widest flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#1A3D2B]" />
                    {item.title}
                  </h4>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed uppercase font-bold tracking-widest">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Stack Expansion */}
      <section className="section-padding bg-black px-[48px] text-center">
        <div className="max-w-[1280px] mx-auto">
           <Badge>INTEROPERABILITY</Badge>
           <h3 className="text-5xl font-heading font-black mb-24 uppercase italic">INDUSTRIAL PROTOCOL STACK</h3>
           <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {[
                { name: "MQTT", icon: Share2, desc: "Lightweight Telemetry" },
                { name: "OPC-UA", icon: Cpu, desc: "Information Modeling" },
                { name: "REST API", icon: Globe, desc: "Custom Integration" },
                { name: "MODBUS", icon: Activity, desc: "Legacy Serial/TCP" },
                { name: "TLS 1.3", icon: Lock, desc: "State-of-art Security" },
                { name: "DOCKER", icon: Layers, desc: "Edge Containers" }
              ].map(proto => (
                <div key={proto.name} className="p-8 bg-[#0D0D0D] border border-white/5 rounded-2xl group hover:border-[#1A3D2B] transition-all">
                  <proto.icon className="w-8 h-8 text-white/20 group-hover:text-white mb-6 mx-auto transition-colors" />
                  <h5 className="text-white font-black text-sm tracking-widest uppercase mb-2">{proto.name}</h5>
                  <p className="text-[9px] font-bold text-secondary uppercase tracking-[0.2em]">{proto.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Digital Twin Section */}
      <section className="section-padding bg-[#050505] px-[48px] border-y border-white/10">
        <div className="max-w-[1280px] mx-auto text-center">
           <Badge>BEYOND DASHBOARDS</Badge>
           <h2 className="text-[clamp(3rem,8vw,8rem)] font-heading font-black text-white uppercase italic leading-[0.85] mb-12">THE DIGITAL TWIN<br />FOUNDATION.</h2>
           <p className="text-2xl text-secondary max-w-4xl mx-auto italic leading-relaxed mb-24">
             Every ASKworX IIoT deployment is built using Unified Namespace (UNS) architecture, creating a semantic data model that represents your entire facility digitally.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <div className="p-12 bg-black border border-white/10 rounded-3xl">
                 <h4 className="text-white font-heading font-black uppercase italic text-xl mb-6">Semantic Context</h4>
                 <p className="text-secondary text-sm font-bold uppercase tracking-widest leading-loose">We don't just send 'Tag 101'. We send 'PharmaSite/Line4/Motor01/Temperature'—giving your data immediate business context.</p>
              </div>
              <div className="p-12 bg-black border border-white/10 rounded-3xl">
                 <h4 className="text-white font-heading font-black uppercase italic text-xl mb-6">Scalable Storage</h4>
                 <p className="text-secondary text-sm font-bold uppercase tracking-widest leading-loose">Time-series databases optimized for millions of events per second, with automated tiered storage for cost efficiency.</p>
              </div>
              <div className="p-12 bg-black border border-white/10 rounded-3xl">
                 <h4 className="text-white font-heading font-black uppercase italic text-xl mb-6">AI Integration</h4>
                 <p className="text-secondary text-sm font-bold uppercase tracking-widest leading-loose">Clean, normalized data streams ready for consumption by SageMaker, Azure ML, or your custom Python analytics pipelines.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Final Global CTA */}
      <section className="py-[160px] bg-black text-center px-[48px]">
        <div className="max-w-[1280px] mx-auto">
           <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-heading font-black text-white uppercase mb-12 leading-[0.85] italic">IS YOUR DATA<br />WORKING FOR YOU?</h2>
           <div className="flex flex-wrap justify-center gap-6">
              <a href="https://wa.me/919030108949" target="_blank" rel="noopener noreferrer">
                <Button className="px-12 py-5 bg-[#1A3D2B] text-white rounded-full font-black uppercase tracking-widest text-xs">TALK TO AN IIOT ENGINEER →</Button>
              </a>
              <Link href="/contact">
                <Button variant="secondary" className="px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">REQUEST TECHNICAL BRIEF →</Button>
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
