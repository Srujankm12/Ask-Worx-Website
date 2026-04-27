"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Menu, X, Cloud, 
  Cpu, Database, ShieldCheck, Activity, 
  Settings, Globe, BarChart3, Zap,
  Monitor, Layers, Network, Factory,
  Droplets, FlaskConical, Scissors, Utensils,
  Sun, Car, Rocket, Briefcase, MessageSquare,
  Smartphone, Code, FileText, Layout, Users,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import { Button } from './UI';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const navItems = [
  {
    title: 'PLATFORM',
    isMega: true,
    sections: [
      {
        label: 'MODULES',
        links: [
          { name: 'Edge & Control', href: '/products/edge-computing', icon: Cpu, desc: 'Deterministic local intelligence.' },
          { name: 'IIoT Gateway', href: '/products/iiot-gateways', icon: Zap, desc: 'Secure data bridge & normalization.' },
          { name: 'Cloud Platform', href: '/services/iiot', icon: Cloud, desc: 'Scalable storage & processing hub.', highlight: true },
          { name: 'Analytics & Dashboards', href: '/products/dashboards', icon: BarChart3, desc: 'Real-time operational visibility.' },
          { name: 'Security & Compliance', href: '/products/redundancy', icon: ShieldCheck, desc: 'GxP, Audit Logs & Data Integrity.' },
        ]
      },
      {
        label: 'USE CASES',
        links: [
          { name: 'Remote Monitoring', href: '/iiot-platform#monitoring', icon: Monitor, desc: 'Global visibility of site operations.' },
          { name: 'Predictive Maintenance', href: '/products/predictive-analytics', icon: Activity, desc: 'Prevent downtime before it happens.' },
          { name: 'Energy Monitoring', href: '/products/energy-monitoring', icon: Droplets, desc: 'Optimize consumption & cost.' },
        ]
      },
      {
        label: 'ECOSYSTEM',
        links: [
          { name: 'Cloud Integrations', href: '/iiot-platform#integrations', icon: Network, desc: 'Native AWS, Azure & API sync.' },
          { name: 'Protocol Support', href: '/iiot-platform#protocols', icon: Settings, desc: 'OPC-UA, MQTT & Modbus Ready.' },
        ]
      }
    ]
  },
  {
    title: 'SOLUTIONS',
    dropdown: [
      { name: 'PLC & Control Systems', href: '/products/plc', icon: Cpu },
      { name: 'SCADA / HMI', href: '/products/scada', icon: Layout },
      { name: 'Industrial Networking', href: '/products/networking', icon: Network },
      { name: 'Control Panels', href: '/products/panels', icon: Settings },
      { name: 'Edge Computing', href: '/products/edge-computing', icon: Layers },
      { name: 'IIoT Gateways', href: '/products/iiot-gateways', icon: Zap },
    ]
  },
  {
    title: 'SERVICES',
    dropdown: [
      { name: 'Industrial Automation', href: '/services/automation', icon: Factory },
      { name: 'Cloud & IIoT Implementation', href: '/services/iiot', icon: Cloud },
      { name: 'Software Development', href: '/services/software', icon: Code },
      { name: 'Mobile Applications', href: '/services/mobile', icon: Smartphone },
      { name: 'WhatsApp Automation', href: '/services/whatsapp', icon: MessageSquare },
    ]
  },
  {
    title: 'INDUSTRIES',
    dropdown: [
      { name: 'Automotive', href: '/industries/automotive', icon: Car },
      { name: 'Pharma', href: '/industries/pharma', icon: FlaskConical },
      { name: 'Food & Beverage', href: '/industries/food-beverage', icon: Utensils },
      { name: 'Oil & Gas', href: '/industries/oil-gas', icon: Droplets },
      { name: 'Renewable Energy', href: '/industries/renewable-energy', icon: Sun },
      { name: 'Textiles', href: '/industries/textiles', icon: Scissors },
    ]
  },
  {
    title: 'COMPANY',
    dropdown: [
      { name: 'About Us', href: '/about', icon: Briefcase },
      { name: 'Industry Blog', href: '/blog', icon: FileText },
      { name: 'Careers', href: '/careers', icon: Users },
      { name: 'Contact', href: '/contact', icon: MessageSquare },
    ]
  }
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuTitle: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuTitle);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-[80px] flex items-center px-[48px] ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/8' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="ASKworX icon" width={40} height={40} className="h-10 w-auto object-contain hover:scale-110 transition-transform" priority />
          <div className="flex flex-col">
            <span className="text-xl font-heading font-black tracking-widest text-white uppercase leading-none">ASKworX</span>
            <span className="text-[7px] font-bold tracking-[0.4em] text-white/60 uppercase mt-1">Ground to Cloud</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div 
              key={item.title} 
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-2 text-[10px] font-black tracking-[0.25em] transition-all uppercase relative ${activeMenu === item.title ? 'text-white' : 'text-[#94A3B8] hover:text-white'}`}>
                {item.title} 
                <ChevronDown className={`w-3 h-3 opacity-50 transition-transform duration-300 ${activeMenu === item.title ? 'rotate-180' : ''}`} />
                {activeMenu === item.title && (
                   <motion.div layoutId="nav-glow" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#1A3D2B] shadow-[0_0_15px_#1A3D2B]" />
                )}
              </button>

              <AnimatePresence>
                {activeMenu === item.title && (
                  <>
                    <div style={{ position:'absolute', top:'100%', left:'-40px', right:'-40px', height:'20px', background:'transparent' }} />
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.99 }}
                      className={`absolute top-[calc(100%+0px)] left-1/2 -translate-x-1/2 bg-black/95 backdrop-blur-[40px] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.9)] rounded-[16px] z-[1000] overflow-hidden ${item.isMega ? 'w-[920px] p-10 pt-12 pb-8' : 'w-[280px] p-6'}`}
                    >
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1A3D2B]/40 to-transparent" />
                      
                      {item.isMega ? (
                        <div className="flex flex-col gap-10 relative z-10">
                          <div className="grid grid-cols-3 gap-12">
                            {item.sections?.map((section) => (
                              <div key={section.label}>
                                <h4 className="text-[10px] text-white/40 font-black tracking-[0.4em] mb-10 uppercase">{section.label}</h4>
                                <div className="flex flex-col gap-6">
                                  {section.links.map((link) => (
                                    <Link 
                                      key={link.name} 
                                      href={link.href} 
                                      className={`group/link flex gap-5 p-3 -m-3 rounded-xl transition-all duration-300 ${link.highlight ? 'bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.03)]' : 'hover:bg-white/[0.03]'}`}
                                    >
                                       <div className={`w-11 h-11 shrink-0 border rounded-xl flex items-center justify-center transition-all duration-500 ${link.highlight ? 'bg-[#1A3D2B] border-[#1A3D2B] shadow-[0_0_15px_#1A3D2B]' : 'bg-white/5 border-white/10 group-hover/link:bg-[#1A3D2B] group-hover/link:border-[#1A3D2B]'}`}>
                                          <link.icon className="w-5 h-5 text-white" />
                                       </div>
                                       <div className="flex flex-col justify-center">
                                          <span className="block text-[13px] text-white font-bold tracking-tight mb-1">{link.name}</span>
                                          <span className="block text-[11px] text-white/40 font-medium leading-tight">{link.desc}</span>
                                       </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex justify-end pt-6 border-t border-white/5">
                            <Link href="/iiot-platform" className="flex items-center gap-3 text-[11px] font-black text-[#1A3D2B] hover:text-white transition-all uppercase tracking-widest group/cta">
                               View Full Platform <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-2 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-3 relative z-10">
                           {item.dropdown?.map((sub) => (
                             <Link key={sub.name} href={sub.href} className="group/sub flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all text-white/50 hover:text-white">
                                <sub.icon className="w-4 h-4 group-hover/sub:text-[#1A3D2B] transition-colors" />
                                <span className="text-[11px] font-bold uppercase tracking-widest">{sub.name}</span>
                             </Link>
                           ))}
                        </div>
                      )}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <a 
            href="https://wa.me/917892943426?text=Hello%20ASKworX%20Support,%20I%20need%20assistance%20with%20your%20industrial%20platform." 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full transition-all group"
          >
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-black tracking-[0.2em] text-white uppercase leading-none">24/7 SUPPORT</span>
              <span className="text-[7px] font-bold tracking-[0.1em] text-green-500 uppercase mt-0.5">AI BOT ONLINE</span>
            </div>
          </a>
          <Link href="/contact">
            <Button className="hidden sm:flex py-3 px-10 text-[10px] tracking-[0.2em] bg-white text-black hover:bg-white/90 rounded-full font-black uppercase shadow-2xl">GET PLATFORM DEMO →</Button>
          </Link>
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-[2000] p-8 flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                 <Image src="/logo.png" alt="ASKworX icon" width={32} height={32} className="h-8 w-auto object-contain grayscale brightness-200" />
                 <span className="text-2xl font-heading font-black text-white uppercase">ASKworX</span>
              </Link>
              <button className="text-white" onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            <div className="flex flex-col gap-12">
              {navItems.map(item => (
                <div key={item.title}>
                  <h3 className="text-[#1A3D2B] text-[10px] font-bold tracking-[0.4em] mb-8 uppercase">{item.title}</h3>
                  <div className="grid grid-cols-1 gap-6 pl-4 border-l border-white/5">
                    {item.isMega ? (
                      item.sections?.map(sec => 
                        sec.links.map(l => (
                          <Link key={l.name} href={l.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4">
                             <l.icon className="w-5 h-5 text-white/50" />
                             <span className="text-xl font-heading font-black tracking-tight text-white uppercase">{l.name}</span>
                          </Link>
                        ))
                      )
                    ) : (
                      item.dropdown?.map(sub => (
                        <Link key={sub.name} href={sub.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4">
                           <sub.icon className="w-5 h-5 text-white/50" />
                           <span className="text-xl font-heading font-black tracking-tight text-white uppercase">{sub.name}</span>
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-20 pt-10 border-t border-white/5 pb-10 flex flex-col gap-4">
               <a 
                 href="https://wa.me/917892943426?text=Hello%20ASKworX%20Support,%20I%20need%20assistance%20with%20your%20industrial%20platform." 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 py-5 rounded-xl transition-all"
               >
                 <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                 <span className="text-sm font-black text-white tracking-widest uppercase">24/7 SUPPORT BOT</span>
               </a>
               <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full py-6 text-xs bg-white text-black font-black uppercase tracking-widest rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.1)]">REQUEST DEMO →</Button>
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
