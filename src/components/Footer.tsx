"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'SOLUTIONS',
    links: [
      { name: 'PLC Systems', href: '/products/plc' },
      { name: 'SCADA Integration', href: '/products/scada' },
      { name: 'IIoT Platform', href: '/iiot-platform' },
      { name: 'Control Panels', href: '/products/panels' },
      { name: 'Cybersecurity', href: '/products/cloud' },
    ]
  },
  {
    title: 'COMPANY',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Philosophy', href: '/about#philosophy' },
      { name: 'Industries', href: '/industries' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Careers', href: '/careers' },
    ]
  },
  {
    title: 'INSIGHTS',
    links: [
      { name: 'Industry Blog', href: '/blog' },
      { name: 'Whitepapers', href: '/docs' },
      { name: 'Events', href: '/events' },
      { name: 'News', href: '/news' },
    ]
  },
  {
    title: 'LEGAL',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-black pt-[80px] pb-[40px] px-[48px] border-t border-white/8 relative z-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[48px] mb-20">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-8 flex items-center gap-3 group">
              <Image src="/logo.png" alt="ASKworX icon" width={40} height={40} className="h-10 w-auto object-contain hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-black tracking-tighter text-white uppercase leading-none">ASKworX</span>
                <span className="text-[7px] font-bold tracking-[0.4em] text-white/50 uppercase mt-1">Ground to Cloud</span>
              </div>
            </Link>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-8 font-medium italic">
              Ground to Cloud automation engineering for the next industrial era. Based in Bangalore, serving the world.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/50 mb-10 uppercase">{col.title}</h4>
              <ul className="space-y-0">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[#94A3B8] hover:text-white transition-colors text-sm uppercase font-bold tracking-widest leading-[2.4] inline-block">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-[32px] border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold tracking-[0.3em] text-[#6B7280] uppercase">
            © 2026 ASKworX Smart Automation LLP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-white uppercase">
              MADE IN BHARAT <ArrowRight className="w-3 h-3 text-[#1A3D2B]" />
            </span>

          </div>
        </div>
      </div>
    </footer>
  );
};
