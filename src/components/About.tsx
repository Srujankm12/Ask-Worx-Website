'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
   Cpu, Cloud, Database, ShieldCheck, Globe,
   Car, Pill, Utensils, Zap, Monitor, Fuel, Shirt, Box, Server, Plane
} from 'lucide-react';

const About = () => {
   return (
      <section id="about" className="py-24 bg-black overflow-hidden relative">
         {/* Decorative Background Glows */}
         <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               {/* Left Column: Visual Card */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 relative group"
               >
                  <div className="rounded-[2.5rem] overflow-hidden glass border border-white/5 p-12 md:p-16 flex flex-col justify-between min-h-[500px] transition-all duration-700 group-hover:border-white/10 group-hover:bg-white/[0.03]">
                     <div className="mb-12">
                        <p className="text-[10px] font-black tracking-[0.6em] text-zinc-600 mb-6 uppercase">Our Mission</p>
                        <h3 className="text-4xl md:text-5xl font-black titanium-text leading-tight uppercase tracking-tighter">
                           Automation <br /> That Works Today. <br />
                           <span className="text-white/40">Intelligence That Scales Tomorrow.</span>
                        </h3>
                     </div>

                     <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-sm">
                        ASKworX is a next-generation automation and digital transformation company focused on building reliable, scalable, and future-ready solutions.
                     </p>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 4, repeat: Infinity }}
                     className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl border border-white/10 shadow-2xl hidden md:flex items-center space-x-4 backdrop-blur-3xl z-20"
                  >
                     <div className="p-3 bg-white text-black rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <Cpu size={20} />
                     </div>
                     <div>
                        <p className="text-sm font-black uppercase tracking-tighter">Future-Ready</p>
                        <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest">Digital Ecosystems</p>
                     </div>
                  </motion.div>
               </motion.div>

                {/* Right Column: Content */}
                <motion.div
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                   <div className="space-y-12">
                      <div className="space-y-6">
                         <p className="text-zinc-400 text-xl font-medium leading-relaxed">
                            ASKworX is an industrial automation and digital transformation company focused on designing and delivering reliable, scalable, and future-ready automation systems.
                         </p>
                         <div className="relative p-6 glass rounded-2xl border border-white/5 group overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-30 group-hover:opacity-100 transition-opacity" />
                            <p className="text-white italic text-lg font-black uppercase tracking-tight pl-4">
                               "We help manufacturers move from shop-floor control to cloud-connected intelligence, enabling better visibility, smarter decisions, and long-term growth."
                            </p>
                         </div>
                      </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12 border-t border-zinc-900">
                        <div className="space-y-3 group cursor-default">
                           <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">One Partner</h4>
                           <p className="text-[11px] text-zinc-600 group-hover:text-zinc-400 font-bold leading-relaxed uppercase tracking-widest transition-colors">
                              We combine automation, software, and marketing into one seamless ecosystem.
                           </p>
                        </div>
                        <div className="space-y-3 group cursor-default">
                           <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Full Support</h4>
                           <p className="text-[11px] text-zinc-600 group-hover:text-zinc-400 font-bold leading-relaxed uppercase tracking-widest transition-colors">
                              From consulting to execution, we deliver results that drive growth.
                           </p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

const Industries = () => {
   const industries = [
      { name: "Automotive", icon: <Car size={24} /> },
      { name: "Pharma", icon: <Pill size={24} /> },
      { name: "Food & Beverage", icon: <Utensils size={24} /> },
      { name: "Renewable Energy", icon: <Zap size={24} /> },
      { name: "Electronics", icon: <Monitor size={24} /> },
      { name: "Oil & Gas", icon: <Fuel size={24} /> },
      { name: "Textiles", icon: <Shirt size={24} /> },
      { name: "Packaging", icon: <Box size={24} /> },
      { name: "Data Centers", icon: <Server size={24} /> },
      { name: "Aerospace", icon: <Plane size={24} /> }
   ];

   return (
      <section id="industries" className="py-24 bg-black relative overflow-hidden">
         {/* Decorative center glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 px-4">
               <p className="text-[9px] font-black tracking-[0.8em] text-zinc-700 mb-6 uppercase">Industries</p>
               <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic px-2">INDUS<span className="titanium-text pr-4">TRIES</span></h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-zinc-900 overflow-hidden border border-zinc-900 rounded-[2.5rem]">
               {industries.map((item, index) => (
                  <motion.div
                     key={item.name}
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.05 }}
                     className="group p-10 bg-black hover:bg-zinc-950 transition-all duration-500 flex flex-col items-center justify-center min-h-[220px] text-center relative overflow-hidden"
                  >
                     {/* Individual Hover Glow */}
                     <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-700" />

                     <div className="mb-6 text-zinc-700 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-500 relative z-10">
                        {item.icon}
                     </div>
                     <span className="font-black text-[10px] uppercase tracking-[0.2em] text-zinc-600 group-hover:text-white transition-colors relative z-10">
                        {item.name}
                     </span>

                     {/* Bottom accent line */}
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(59,130,246,1)]" />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export { About, Industries };
