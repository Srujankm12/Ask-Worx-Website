'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Linkedin, Instagram, Mail, Phone, MapPin, Box, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Philosophy = () => {
  return (
     <section id="philosophy" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-zinc-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <p className="text-[10px] font-black tracking-[0.8em] text-zinc-700 mb-10 uppercase">Our Philosophy</p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
           <Quote className="w-16 h-16 text-white/5 mx-auto mb-8" />
           <h2 className="text-4xl md:text-7xl font-black mb-20 uppercase tracking-tighter leading-tight italic px-6">
             "We don’t <span className="text-white/30 italic px-2">over-engineer</span>. <br /> 
             We engineer what <span className="titanium-text pr-4">works</span>."
           </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
           {[
             { title: "Architecture", desc: "Right Architecture Before Execution. Systems designed for longevity.", icon: <Box size={20} /> },
             { title: "Practicality", desc: "Practical, Real-World Solutions. Built for the plant floor, not just specs.", icon: <Zap size={20} /> },
             { title: "Precision", desc: "Clean Engineering & Documentation. Professionalism in every node.", icon: <ShieldCheck size={20} /> }
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-10 glass rounded-[2rem] border border-white/5 group hover:border-white/20 transition-all min-h-[280px] flex flex-col justify-between"
             >
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all">
                   {item.icon}
                </div>
                <div>
                   <h4 className="font-black text-xs uppercase tracking-widest text-white mb-4 transition-colors">{item.title}</h4>
                   <p className="text-[11px] text-zinc-500 font-bold leading-relaxed uppercase tracking-widest">{item.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6 bg-black relative">
       {/* Background Glow */}
       <div className="absolute inset-0 bg-blue-600/5 blur-[150px] pointer-events-none" />
       
      <div className="max-w-7xl mx-auto border border-white/5 rounded-[3.5rem] overflow-hidden glass p-16 md:p-32 text-center relative group">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative z-10"
        >
          <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
             Build the <br /> <span className="titanium-text">Future Together</span>
          </h2>
          <p className="text-[12px] font-black uppercase tracking-[0.6em] text-zinc-700 mb-16">Smart Systems. Scalable Results. Global Support.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
             <button className="w-full sm:w-auto px-16 py-6 bg-white text-black font-black text-[11px] uppercase tracking-widest rounded-full hover:bg-zinc-100 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center group/btn">
                Contact Us <ArrowRight size={18} className="ml-3 group-hover/btn:translate-x-1 transition-transform" />
             </button>
             <button className="w-full sm:w-auto px-16 py-6 glass border border-white/10 text-white font-black text-[11px] uppercase tracking-widest rounded-full hover:bg-white/5 transition-all active:scale-95">
                Schedule Demo
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-32 pb-12 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2 space-y-10">
            <div className="flex items-center space-x-4">
              <Logo className="w-10 h-10" />
              <div className="flex flex-col pt-1">
                 <span className="text-3xl font-black tracking-tighter titanium-text leading-none mb-1 pr-2">ASKworX</span>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">Automation Partner</span>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-zinc-500 text-[11px] font-black uppercase tracking-widest max-w-sm leading-relaxed italic">
                Headquartered in Bangalore, we operate at the intersection of industrial automation, software innovation, and digital transformation.
              </p>
              <p className="text-zinc-700 text-[10px] font-bold uppercase tracking-[0.2em] max-w-xs leading-relaxed">
                We serve clients across India and globally with remote and on-site solutions.
              </p>
            </div>
            <div className="flex space-x-6 text-zinc-800">
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
          
          <div className="space-y-10 pt-4">
            <h4 className="font-black text-white uppercase text-[10px] tracking-[0.5em]">Contact Registry</h4>
            <ul className="space-y-6 text-zinc-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed">
              <li className="flex items-start space-x-4 group cursor-pointer">
                 <Mail size={16} className="text-zinc-800 shrink-0 group-hover:text-blue-500 transition-colors" /> 
                 <a href="mailto:contact@askworx.in" className="hover:text-white transition-colors pt-0.5">contact@askworx.in</a>
              </li>
              <li className="flex items-start space-x-4 group cursor-pointer">
                 <Phone size={16} className="text-zinc-800 shrink-0 group-hover:text-blue-500 transition-colors" /> 
                 <span className="hover:text-white transition-colors pt-0.5">+91 9030108949</span>
              </li>
              <li className="flex items-start space-x-4 group cursor-pointer">
                 <MapPin size={16} className="text-zinc-800 shrink-0 group-hover:text-blue-500 transition-colors" /> 
                 <span className="hover:text-white transition-colors pt-0.5 leading-relaxed">
                   1381, 5th Stage, BEML Layout 1st Phase,<br />
                   6th Main Road, RR Nagar,<br />
                   Bangalore – 560098, India
                 </span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-10 pt-4">
            <h4 className="font-black text-white uppercase text-[10px] tracking-[0.5em]">Global Standards</h4>
            <ul className="space-y-4 text-zinc-500 text-[11px] font-bold uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors"><a href="/#services">Automation Services</a></li>
              <li className="hover:text-white cursor-pointer transition-colors"><a href="/#approach">The IIoT Blueprint</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 pb-16 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[9px] font-black uppercase tracking-[0.4em] text-center">
            <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-4 md:space-y-0 text-zinc-500">
               <p>© 2026 ASKworX Smart Automation LLP.</p>
               <div className="flex space-x-10">
                  <a href="/privacy" className="hover:text-blue-500 transition-colors uppercase">Privacy</a>
                  <a href="/terms" className="hover:text-blue-500 transition-colors uppercase">Terms</a>
               </div>
            </div>
            <p className="mt-8 md:mt-0 italic opacity-40 text-[8px] text-zinc-700">Built on Industrial DNA // Cloud Intelligence</p>
        </div>
      </div>
    </footer>
  );
};

export { Philosophy, CTA, Footer };
