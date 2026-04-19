'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Gavel, Cpu, Globe, Scale, CreditCard, ShieldAlert, Zap, Lock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  const sections = [
    {
      id: "01",
      title: "Introduction",
      icon: <Gavel size={20} />,
      points: [
        "Welcome to ASKworX Smart Automation LLP.",
        "Terms govern your use of askworx.in and our professional services.",
        "Acceptance of terms is mandatory for using our platform or engaging our team."
      ]
    },
    {
      id: "02",
      title: "Services Offered",
      icon: <Cpu size={20} />,
      points: [
        "Industrial Automation (OT + IT Systems)",
        "Cloud & Data Intelligence Solutions",
        "Software Development (Web, ERP, CRM, SaaS)",
        "Mobile App Development (Android & iOS)",
        "WhatsApp Business Automation",
        "Digital Marketing (Meta Ads, Google Ads)"
      ]
    },
    {
      id: "03",
      title: "User Responsibilities",
      icon: <ShieldAlert size={20} />,
      points: [
        "Users must provide accurate, verifiable information.",
        "Prohibited: Fraudulent use, illegal activities, or system abuse.",
        "Prohibited: Reverse engineering of proprietary software or architectures."
      ]
    },
    {
      id: "04",
      title: "Intellectual Property",
      icon: <Lock size={20} />,
      points: [
        "All designs and 'Ground-to-Cloud' logic are exclusive to ASKworX.",
        "Proprietary software and architectures are legally protected.",
        "No replication or redistribution without express written consent."
      ]
    },
    {
      id: "05",
      title: "Payments & Pricing",
      icon: <CreditCard size={20} />,
      points: [
        "Project-based pricing models vary by scope and hardware.",
        "Payments are non-refundable unless stated in the SOW.",
        "Subscription services follow specific billing cycle terms."
      ]
    },
    {
      id: "06",
      title: "Limitation of Liability",
      icon: <Scale size={20} />,
      points: [
        "No liability for indirect or consequential damages.",
        "No liability for business interruption or external data loss.",
        "Liability is limited to the core architecture services provided."
      ]
    },
    {
      id: "07",
      title: "Third-Party Services",
      icon: <Globe size={20} />,
      points: [
        "Integration with Meta, Google, and WhatsApp APIs.",
        "Not responsible for third-party platform policy shifts.",
        "Technical interruptions from external providers are out of scope."
      ]
    },
    {
      id: "08",
      title: "Termination",
      icon: <Zap size={20} />,
      points: [
        "Service suspension for violation of these professional terms.",
        "Immediate termination for activities detrimental to ASKworX.",
        "Right to refuse service for non-compliance with industrial safety."
      ]
    },
    {
      id: "09",
      title: "Governing Law",
      icon: <Gavel size={20} />,
      points: [
        "Governed strictly by the laws of the Republic of India.",
        "Exclusive jurisdiction: Courts in Bangalore, Karnataka.",
        "Discussions for reconciliation must occur before legal action."
      ]
    },
    {
      id: "10",
      title: "Changes to Terms",
      icon: <Scale size={20} />,
      points: [
        "Terms subject to update to reflect evolving technology.",
        "Continued use constitutes acceptance of revised terms.",
        "Significant shifts will be noted with a fresh timestamp."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      
      <div className="pt-40 pb-32 max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-20"
        >
          {/* Header */}
          <div className="space-y-8 text-center md:text-left">
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <Gavel size={14} /> <span>Industrial Accord</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter titanium-text uppercase leading-none">
              <span className="pr-6">Terms & Conditions</span>
            </h1>
            <div className="h-[2px] w-24 bg-blue-600/50" />
            <p className="text-zinc-500 text-sm font-black uppercase tracking-[0.5em]">Last Updated: April 14, 2026</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {sections.map((section) => (
              <div key={section.id} className="space-y-8 group p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/10 transition-all flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-zinc-950 border border-white/5 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                    {section.icon}
                  </div>
                  <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors uppercase italic">{section.id}</span>
                </div>
                
                <h2 className="text-2xl font-black uppercase tracking-tighter group-hover:text-blue-400 transition-colors">{section.title}</h2>
                
                <ul className="space-y-4 flex-1">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
                      <ChevronRight className="w-3 h-3 text-blue-500 mt-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span className="text-[10px] md:text-[11px] font-black leading-relaxed uppercase tracking-widest italic">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Board */}
          <div className="p-16 glass rounded-[3.5rem] border border-white/10 mt-24 text-center space-y-12 relative overflow-hidden group">
            <div className="absolute inset-x-0 bottom-0 top-0 bg-blue-600/5 blur-[120px] pointer-events-none" />
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter relative z-10 italic">Reach Legal Team</h3>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
               <div className="flex flex-col items-center space-y-4">
                  <p className="text-blue-500 font-black text-[10px] tracking-widest uppercase mb-1">Electronic Mail</p>
                  <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400 leading-relaxed">contact@askworx.in</p>
               </div>
               <div className="flex flex-col items-center space-y-4">
                  <p className="text-blue-500 font-black text-[10px] tracking-widest uppercase mb-1">Direct Line</p>
                  <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400 leading-relaxed">+91 9030108949</p>
               </div>
               <div className="flex flex-col items-center space-y-4">
                  <p className="text-blue-500 font-black text-[10px] tracking-widest uppercase mb-1">Jurisdiction HQ</p>
                  <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400 leading-relaxed">Bangalore, India</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default TermsPage;
