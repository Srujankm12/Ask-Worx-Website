"use client";

import React from 'react';
import { Badge, Button } from '@/components/UI';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Globe, Users } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="pt-24 min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-10">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1A3D2B]/10 blur-[120px] rounded-full z-0" />

      <div className="container-custom relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge>WE ARE PREPARING THE FLOOR</Badge>
          <h1 className="text-[clamp(3rem,8vw,8rem)] leading-[0.85] font-heading font-black tracking-tighter mb-8 uppercase italic text-white mt-10">
            ENGINEERING<br />YOUR <span className="titanium-text">CAREER.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#94A3B8] max-w-2xl mx-auto italic mb-16 leading-relaxed">
            "We are currently scaling our engineering teams. Our official recruitment portal is opening soon."
          </p>

          <div className="p-10 bg-[#0A0A0A] border border-white/5 rounded-[40px] mb-12 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-[#1A3D2B]">
                  <Briefcase className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase italic">OPEN ROLES</span>
                <span className="text-3xl font-heading font-black text-white italic">00</span>
              </div>
              <div className="h-[1px] w-20 bg-white/10 hidden md:block" />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-heading font-black text-white uppercase italic mb-2">WE WILL NOTIFY SHORTLY</h3>
                <p className="text-xs font-bold tracking-widest text-[#6B7280] uppercase">FOLLOW US FOR REAL-TIME UPDATES</p>
              </div>
            </div>
          </div>
          {/* 
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/919030108949" target="_blank" rel="noopener noreferrer">
              <Button className="px-14 py-6 bg-white text-black rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-[#1A3D2B] hover:text-white transition-all">JOIN WAITING LIST →</Button>
            </a>
            <Link href="/contact">
              <Button variant="secondary" className="px-14 py-6 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-black transition-all border-white/20">GENERAL INQUIRY</Button>
            </Link>
          </div> */}
        </motion.div>
      </div>

      {/* Trust Pillars */}
      <div className="container-custom relative z-10 mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
        {[
          { icon: Rocket, title: "NEXT-GEN TECH", desc: "Work with advanced PLC, AI, and IIoT frameworks." },
          { icon: Globe, title: "GLOBAL REACH", desc: "Building industrial systems for the world market." },
          { icon: Users, title: "ELITE TEAM", desc: "Collaborate with senior automation engineers." }
        ].map((p, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <p.icon className="w-6 h-6 text-white/20 mb-6 group-hover:text-[#1A3D2B] transition-colors" />
            <h4 className="text-[10px] font-black tracking-[0.3em] text-white uppercase italic mb-4">{p.title}</h4>
            <p className="text-[11px] text-[#6B7280] leading-relaxed uppercase font-bold tracking-wider">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
