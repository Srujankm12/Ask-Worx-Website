'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Cpu, Cloud, Database, BarChart3, Globe, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const DashboardMockup = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-20 relative px-4">
      {/* Decorative Glows */}
      <div className="absolute inset-0 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="glass rounded-[2rem] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group"
      >
        {/* Dashboard Header */}
        <div className="h-12 border-b border-white/5 flex items-center px-6 space-x-2 bg-white/5 backdrop-blur-3xl">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
          </div>
          <div className="flex-1 text-center font-black text-[10px] uppercase tracking-[0.4em] text-zinc-600 group-hover:text-blue-400 transition-colors">
            ASKworX Command Center // Deployment ID: ALPHA-01
          </div>
        </div>

        <div className="flex bg-black h-[520px] relative">
          {/* Scanning Line Animation */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent z-10 pointer-events-none"
          />

          {/* Sidebar */}
          <div className="w-16 md:w-52 border-r border-white/5 p-6 flex flex-col space-y-8 bg-zinc-950/30">
            {[Activity, Cpu, Database, Cloud, BarChart3, Globe].map((Icon, i) => (
              <div key={i} className={`flex items-center space-x-4 p-2.5 rounded-xl transition-all duration-300 cursor-pointer ${i === 2 ? 'bg-blue-600/10 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)] border border-blue-500/20' : 'text-zinc-700 hover:text-zinc-500'}`}>
                <Icon size={18} />
                <span className="hidden md:inline text-[10px] font-black uppercase tracking-widest">
                  {['Assets', 'Logic', 'Database', 'Cloud', 'Metrics', 'Regions'][i]}
                </span>
              </div>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-10 overflow-hidden relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
               {[
                 { label: 'Uptime', value: '99.99%', color: 'text-green-500', glow: 'shadow-[0_0_20px_rgba(34,197,94,0.1)]' },
                 { label: 'Sync State', value: 'Live', color: 'text-blue-400', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.1)]' },
                 { label: 'Total Nodes', value: '1,402', color: 'text-white', glow: 'shadow-[0_0_20px_rgba(255,255,255,0.05)]' }
               ].map((stat) => (
                 <div key={stat.label} className={`p-6 rounded-2xl border border-white/5 bg-zinc-950/80 ${stat.glow} hover:border-white/20 transition-all cursor-default`}>
                    <div className="flex justify-between items-center mb-4">
                       <p className="text-[9px] font-black uppercase tracking-widest text-zinc-700">{stat.label}</p>
                       <div className={`w-1.5 h-1.5 rounded-full ${stat.color} animate-pulse`} />
                    </div>
                    <p className={`text-2xl font-black ${stat.color} tracking-tighter`}>{stat.value}</p>
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
               <div className="p-8 rounded-2xl border border-white/5 bg-zinc-950/80 relative overflow-hidden group/card backdrop-blur-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-8 flex items-center">
                    <Activity size={12} className="mr-2 text-blue-500" /> System Throughput
                  </p>
                  <div className="space-y-5">
                     {[80, 45, 90, 60].map((w, i) => (
                       <div key={i} className="h-2 w-full bg-zinc-900 rounded-full relative overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${w}%` }}
                            transition={{ duration: 2, delay: i * 0.1 }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-400" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" />
                       </div>
                     ))}
                  </div>
               </div>
               
               <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center text-center group/node backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full border border-blue-500/20 flex items-center justify-center mb-6 relative group-hover/node:border-blue-500/40 transition-all duration-500">
                     <div className="absolute inset-0 border border-blue-500/10 rounded-full animate-ping" />
                     <Logo className="w-8 h-8 opacity-40 grayscale group-hover/node:opacity-100 group-hover/node:grayscale-0 transition-all duration-500" />
                  </div>
                  <p className="text-[12px] text-zinc-300 uppercase tracking-widest font-black italic mb-2">Syncing Industrial Data</p>
                  <p className="text-[9px] text-zinc-700 uppercase tracking-[0.4em] font-black">Pune-IN Cluster-04</p>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-40 flex flex-col items-center justify-center overflow-hidden bg-black border-b border-white/5 grid-bg">
      {/* Dynamic Background Auras */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-zinc-400/5 blur-[160px] rounded-full pointer-events-none animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-4">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full border border-blue-500/10 bg-blue-500/5 backdrop-blur-sm mb-12 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,1)]" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-blue-400/80">Smart Automation</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter shadow-2xl leading-[0.85] mb-12 uppercase">
            <span className="titanium-text pr-6">ENGINEERING</span> <br />
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Ground to Cloud</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-500 mb-16 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight italic">
            "Automation that works today. <br /> Intelligence that scales tomorrow."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-10">
            <a 
              href="https://wa.me/919030108949" 
              target="_blank" 
              className="px-16 py-6 bg-green-500/10 border border-green-500/20 text-green-500 font-black text-[11px] uppercase tracking-widest rounded-full hover:bg-green-500 hover:text-white transition-all flex items-center group"
            >
              WhatsApp
            </a>
            <button className="px-16 py-6 bg-white text-black font-black text-[11px] uppercase tracking-widest rounded-full hover:bg-white/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center group">
              Consultation <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      <DashboardMockup />

      {/* Elegant Scroll Indicator */}
      <motion.a 
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-24 text-zinc-800 flex flex-col items-center space-y-3 opacity-40 group cursor-pointer hover:opacity-100 transition-opacity"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.4em]">Explore Mission</span>
        <ChevronDown size={24} className="text-zinc-600" />
      </motion.a>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default Hero;
