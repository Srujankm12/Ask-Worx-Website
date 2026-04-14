'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Shield, Eye, Lock, FileSearch, UserCheck, Trash2, Link2, Bell, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  const sections = [
    {
      id: "01",
      title: "Introduction",
      icon: <Shield size={18} />,
      points: [
        "Commitment to protecting user data and industrial assets.",
        "Ensuring complete transparency in data processing.",
        "Governance of all digital and physical data flows."
      ]
    },
    {
      id: "02",
      title: "Information We Collect",
      icon: <FileSearch size={18} />,
      points: [
        "Personal Identification (Name, Email, Professional Contact).",
        "Business Metadata (Project scopes, industrial requirements).",
        "Technical Telemetry (IP Address, Browser Analytics, Cookies)."
      ]
    },
    {
      id: "03",
      title: "How We Use Information",
      icon: <Eye size={18} />,
      points: [
        "Providing Industrial Automation and Cloud Engineering.",
        "Maintaining direct consultancy communication and support.",
        "Marketing communications (subject to explicit user consent).",
        "Service optimization based on behavioral telemetry."
      ]
    },
    {
      id: "04",
      title: "Cookies & Tracking",
      icon: <Bell size={18} />,
      points: [
        "Cookie implementation to refine your navigational experience.",
        "Integration with standard tools like Google Analytics.",
        "Option to manage or disable tracking via your local settings."
      ]
    },
    {
      id: "05",
      title: "Data Sharing",
      icon: <Shield size={18} />,
      points: [
        "Selective sharing with critical partners (WhatsApp, Ad Platforms).",
        "Absolutely no selling or renting of personal dataset for marketing.",
        "Compliance with legal data disclosure mandates if required."
      ]
    },
    {
      id: "06",
      title: "Data Security",
      icon: <Lock size={18} />,
      points: [
        "Adherence to industry-standard encryption and security logic.",
        "Secure storage for all industrial and personal metadata.",
        "Regular audits of our Cloud-to-Cloud data bridge protocols."
      ]
    },
    {
      id: "07",
      title: "User Rights",
      icon: <UserCheck size={18} />,
      points: [
        "Right to access and verification of stored personal data.",
        "Right to request immediate update or correction of data.",
        "Right to request deletion or opt-out from specific flows."
      ]
    },
    {
      id: "08",
      title: "Data Retention",
      icon: <Bell size={18} />,
      points: [
        "Data stored only for the duration of the active engagement.",
        "Retention aligned with industrial project requirements.",
        "Immediate disposal once the technical purpose is satisfied."
      ]
    },
    {
      id: "09",
      title: "Third-Party Links",
      icon: <Link2 size={18} />,
      points: [
        "Guidance to external platforms (Social Media, Partners).",
        "No responsibility for external privacy policy frameworks.",
        "Recommendation to review policies of third-party domains."
      ]
    },
    {
      id: "10",
      title: "Updates to Policy",
      icon: <Bell size={18} />,
      points: [
        "Periodic shifts to reflect regulatory the global standards.",
        "Updates will be indicated by a fresh 'Last Updated' stamp.",
        "Continued interaction implies acceptance of the latest policy."
      ]
    },
    {
      id: "11",
      title: "Contact Information",
      icon: <Mail size={18} />,
      points: [
        "Direct email access: contact@askworx.in",
        "Professional support: +91 9030108949",
        "HQ Location: RR Nagar, Bangalore, India."
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
              <Shield size={14} /> <span>Privacy Guard</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter titanium-text uppercase leading-none">
              <span className="pr-6">Privacy Policy</span>
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
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter relative z-10 italic">Reach Support</h3>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
               <div className="flex flex-col items-center space-y-4">
                  <p className="text-blue-500 font-black text-[10px] tracking-widest uppercase mb-1">Inquiry Mailbox</p>
                  <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400 leading-relaxed">contact@askworx.in</p>
               </div>
               <div className="flex flex-col items-center space-y-4">
                  <p className="text-blue-500 font-black text-[10px] tracking-widest uppercase mb-1">Direct Helpdesk</p>
                  <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400 leading-relaxed">+91 9030108949</p>
               </div>
               <div className="flex flex-col items-center space-y-4">
                  <p className="text-blue-500 font-black text-[10px] tracking-widest uppercase mb-1">Facility HQ</p>
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

export default PrivacyPage;
