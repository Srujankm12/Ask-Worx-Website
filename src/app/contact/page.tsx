"use client";

import React from 'react';
import { Badge, Button } from '@/components/UI';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin,
  Settings, Cloud, ShieldCheck,
  Activity, ArrowRight, Video,
  Calendar, MessageSquare
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Inquiry from ASKworX Website*\n\n*Name:* ${formData.name}\n*Company:* ${formData.company}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n\n*Requirements:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919030108949?text=${encodedText}`, '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-24 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex flex-col justify-center px-[48px] border-b border-white/8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=90"
            alt="Engineering Contact Hero"
            fill
            className="object-cover opacity-20 blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        </div>
        <div className="max-w-[1280px] mx-auto w-full relative z-10 text-center lg:text-left">
          <Badge>CONNECT WITH EXPERTS</Badge>
          <h1 className="text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] font-heading font-black tracking-tighter mb-8 uppercase italic transition-all">
            LET’S BUILD<br />INTELLIGENT SYSTEMS<br />TOGETHER.
          </h1>
          <p className="text-white/60 text-xl font-light italic max-w-3xl leading-relaxed mx-auto lg:ml-0">
            From shop-floor automation to cloud intelligence, connect with our engineers to design scalable, future-ready solutions for your manufacturing ecosystem.
          </p>
        </div>
      </section>

      {/* Main Hub */}
      <section className="section-padding bg-black px-[48px]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">

          {/* Left: Contact Options & Trust */}
          <div className="lg:col-span-5 space-y-20">
            {/* Action Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-2xl group hover:border-[#25D366]/50 transition-all">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center relative">
                    <MessageSquare className="w-6 h-6 text-[#25D366]" />
                    <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0D0D0D] animate-pulse" />
                  </div>
                  <h4 className="text-lg font-heading font-black text-white uppercase italic tracking-widest">24/7 AI SUPPORT</h4>
                </div>
                <p className="text-white/40 text-sm italic mb-8 font-medium">Instant technical assistance and product information via our WhatsApp bot.</p>
                <a href="https://wa.me/917892943426?text=Hello%20ASKworX%20Support,%20I%20need%20assistance%20with%20your%20industrial%20platform." target="_blank" rel="noopener noreferrer">
                  <Button className="w-full py-4 text-[10px] tracking-widest font-black uppercase rounded-lg border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all">CHAT WITH BOT →</Button>
                </a>
              </div>

              <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-2xl group hover:border-[#1A3D2B] transition-all">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-12 h-12 bg-[#1A3D2B]/20 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#1A3D2B]" />
                  </div>
                  <h4 className="text-lg font-heading font-black text-white uppercase italic tracking-widest">SCHEDULE A CALL</h4>
                </div>
                <p className="text-white/40 text-sm italic mb-8 font-medium">Book a 30-minute consultation with our automation architecture experts.</p>
                <a href="https://wa.me/919030108949" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full py-4 text-[10px] tracking-widest font-black uppercase rounded-lg border border-white/10 hover:bg-white hover:text-black transition-all">SCHEDULE NOW →</Button>
                </a>
              </div>

              <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-2xl flex flex-col md:flex-row gap-12 justify-between">
                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-[#1A3D2B] uppercase mb-4">DIRECT EMAIL</p>
                    <a href="mailto:contact@askworx.in" className="text-xl font-heading font-black text-white italic hover:titanium-text transition-all lowercase">contact@askworx.in</a>
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-[#1A3D2B] uppercase mb-4">ENGINEERING HOTLINE</p>
                    <a href="tel:+919030108949" className="text-xl font-heading font-black text-white italic hover:titanium-text transition-all">+91 90301 08949</a>
                  </div>
                </div>
                <div className="space-y-8 text-right">
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-[#1A3D2B] uppercase mb-4">LOCATION</p>
                    <p className="text-sm font-medium italic text-white/50 leading-relaxed uppercase tracking-widest">
                      1381, 5th Stage, BEML Layout,<br />RR Nagar, Bangalore – 560098
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why ASKworX */}
            <div className="pt-12 border-t border-white/10">
              <h3 className="text-xl font-heading font-black text-white uppercase italic mb-12 tracking-widest">WHY WORK WITH ASKWORX</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { title: "END-TO-END", icon: Settings, desc: "PLC level to Cloud." },
                  { title: "FACTORY PROVEN", icon: Activity, iconColor: "text-white", desc: "Built for 24/7 environments." },
                  { title: "SCALABLE", icon: Cloud, desc: "Future-ready architecture." },
                  { title: "COMPLIANCE", icon: ShieldCheck, desc: "GxP & Data Integrity native." }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <p.icon className={`w-5 h-5 text-[#1A3D2B] shrink-0`} />
                    <div>
                      <h5 className="text-[11px] font-black text-white uppercase tracking-widest mb-1 italic">{p.title}</h5>
                      <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Engineered Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0D0D0D] border border-white/8 p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A3D2B]/5 blur-[120px] rounded-full -mr-32 -mt-32" />

              <div className="mb-12">
                <h3 className="text-3xl font-heading font-black text-white uppercase italic tracking-tighter mb-2">TRANSMIT REQUIREMENTS</h3>
                <p className="text-[11px] font-black text-[#1A3D2B] tracking-[0.3em] uppercase italic">System Configuration Request</p>
              </div>

              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1 group-focus-within:text-[#1A3D2B] transition-colors">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/50 border-b border-white/10 px-1 py-4 focus:border-[#1A3D2B] focus:outline-none transition-all text-sm font-bold tracking-widest text-white"
                      placeholder="NAME"
                    />
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1 group-focus-within:text-[#1A3D2B] transition-colors">COMPANY NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-black/50 border-b border-white/10 px-1 py-4 focus:border-[#1A3D2B] focus:outline-none transition-all text-sm font-bold tracking-widest text-white"
                      placeholder="COMPANY"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1 group-focus-within:text-[#1A3D2B] transition-colors">PROFESSIONAL EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/50 border-b border-white/10 px-1 py-4 focus:border-[#1A3D2B] focus:outline-none transition-all text-sm font-bold tracking-widest text-white italic"
                      placeholder="contact@askworx.in"
                    />
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1 group-focus-within:text-[#1A3D2B] transition-colors">PHONE NUMBER</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/50 border-b border-white/10 px-1 py-4 focus:border-[#1A3D2B] focus:outline-none transition-all text-sm font-bold tracking-widest text-white italic"
                      placeholder="+91 90301 08949"
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1 group-focus-within:text-[#1A3D2B] transition-colors">SERVICE / SOLUTION INTEREST</label>
                  <input
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-black/50 border-b border-white/10 px-1 py-4 focus:border-[#1A3D2B] focus:outline-none transition-all text-sm font-bold tracking-widest text-white italic"
                    placeholder="E.G. PLC AUTOMATION / CLOUD IIOT"
                  />
                </div>

                <div className="space-y-3 group">
                  <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1 group-focus-within:text-[#1A3D2B] transition-colors">SYSTEM REQUIREMENTS / MESSAGE *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-6 focus:border-[#1A3D2B] focus:outline-none transition-all text-sm font-medium tracking-tight text-white resize-none bg-white/[0.02]"
                    placeholder="PLEASE DESCRIBE YOUR PROJECT GOALS AND TECHNICAL SPECIFICATIONS..."
                  />
                </div>

                <div className="pt-6">
                  <Button type="submit" className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-white/90 hover:scale-[0.99] transition-all shadow-xl">
                    SEND ENQUIRY →
                  </Button>
                  <div className="mt-8 flex justify-center items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D2B] animate-pulse" />
                    <p className="text-[9px] font-black tracking-[0.4em] text-white/20 uppercase italic">OUR TEAM TYPICALLY RESPONDS WITHIN 24 HOURS</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
