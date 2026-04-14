'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, Radio, Network, Database, BrainCircuit,
  Zap, Shield, TrendingUp, Cpu, CheckCircle2 
} from 'lucide-react';

const Approach = () => {
  return (
    <section id="approach" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-20 lg:gap-32">
          {/* Left Column: Heading & Flow */}
          <div className="w-full lg:w-1/2 pt-4">
            <p className="text-[10px] font-black tracking-[0.5em] text-zinc-600 mb-8 uppercase">Our Approach</p>
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.85] px-4">
               A Seamless Journey <br /> <span className="titanium-text italic px-2">from Ground</span> <br /> to Cloud
            </h2>
            
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-10 border-y border-white/5 py-6">
               <span className="text-white/40">Machines</span> <Arrow /> 
               <span className="text-white/40">PLC</span> <Arrow /> 
               <span className="text-white/40">SCADA</span> <Arrow /> 
               <span className="text-white/40">IIoT</span> <Arrow /> 
               <span className="text-white/40">Cloud</span> <Arrow /> 
               <span className="text-white">Insights</span>
            </div>

            <p className="text-zinc-500 text-sm font-medium leading-loose max-w-md italic border-l-2 border-white/10 pl-6">
               "Our approach ensures seamless integration and real-time visibility across all business nodes, from local logic to global intelligence."
            </p>
          </div>

          {/* Right Column: Architectural Levels */}
          <div className="w-full lg:w-1/2">
             <div className="space-y-4">
                {[
                  { name: "Cloud Insights", icon: <BrainCircuit size={18} />, lvl: "05" },
                  { name: "IIoT Connectivity", icon: <Database size={18} />, lvl: "04" },
                  { name: "SCADA / HMI Systems", icon: <Network size={18} />, lvl: "03" },
                  { name: "PLC Logic Control", icon: <Radio size={18} />, lvl: "02" },
                  { name: "Sensors & Actuators", icon: <Factory size={18} />, lvl: "01" }
                ].map((level, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 glass rounded-2xl border border-white/5 flex items-center justify-between group hover:border-white/20 hover:bg-white/[0.02] transition-all"
                  >
                    <div className="flex items-center space-x-8">
                       <div className="p-4 bg-zinc-900 rounded-xl group-hover:bg-white group-hover:text-black transition-all">
                          {level.icon}
                       </div>
                       <span className="text-sm font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{level.name}</span>
                    </div>
                    <span className="text-[10px] font-black text-zinc-700 uppercase tracking-widest">Phase {level.lvl}</span>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Arrow = () => <span className="text-zinc-800 opacity-50">→</span>;

const Benefits = () => {
  const benefits = [
    { 
      title: "Better Operational Visibility", 
      desc: "Gain complete control across all systems and processes with centralized transparency and real-time awareness." 
    },
    { 
      title: "Smarter Decision Making", 
      desc: "Leverage real-time data to drive high-performance efficiency and data-backed strategies." 
    },
    { 
      title: "Scalable Systems", 
      desc: "Build future-ready infrastructure that grows seamlessly with your business expansion." 
    }
  ];

  return (
    <section className="py-32 bg-zinc-950/10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <p className="text-[10px] font-black tracking-[0.8em] text-zinc-700 mb-6 uppercase">Key Benefits</p>
           <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter shadow-2xl px-4">
              THE TANGIBLE <span className="titanium-text italic pr-4">BENEFITS</span>
           </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 glass rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all group flex flex-col justify-between min-h-[400px]"
            >
              <div className="space-y-8">
                 <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:bg-white group-hover:text-black transition-all">
                    <CheckCircle2 size={24} />
                 </div>
                 
                 <div className="space-y-6">
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight">{benefit.title}</h3>
                    <p className="text-zinc-500 font-bold uppercase tracking-[0.1em] text-[11px] leading-relaxed">
                       {benefit.desc}
                    </p>
                 </div>
              </div>
              
              <div className="w-12 h-[2px] bg-white/10 group-hover:w-full transition-all duration-700 mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Approach, Benefits };
