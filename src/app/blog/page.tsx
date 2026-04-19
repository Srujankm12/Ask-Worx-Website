"use client";

import React from 'react';
import { Badge, Button } from '@/components/UI';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    slug: "industry-4-india-2025",
    title: "INDUSTRY 4.0 IN INDIA: WHERE ARE MANUFACTURERS REALLY STANDING IN 2026?",
    excerpt: "Only 17% of Indian manufacturers have fully implemented Industry 4.0 technologies, yet 78% say it is their top strategic priority for the next 3 years.",
    category: "INDUSTRY ANALYSIS",
    date: "APR 19, 2026",
    readTime: "6 MIN READ",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
  },
  {
    slug: "plc-vs-dcs",
    title: "PLC VS DCS: WHICH CONTROL SYSTEM IS RIGHT FOR YOUR PLANT?",
    excerpt: "This is the question every automation engineer gets asked at least once a quarter. And the honest answer is: it depends — but not on what most people think.",
    category: "TECHNICAL GUIDE",
    date: "APR 15, 2026",
    readTime: "7 MIN READ",
    img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1200&q=80"
  },
  {
    slug: "iiot-roi",
    title: "HOW TO CALCULATE THE REAL ROI OF AN IIOT INVESTMENT",
    excerpt: "Most IIoT projects fail not because the technology doesn't work — but because nobody defined what success looked like before they started.",
    category: "BUSINESS CASE",
    date: "APR 10, 2026",
    readTime: "6 MIN READ",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80"
  },
  {
    slug: "scada-hmi-design",
    title: "10 SCADA & HMI DESIGN PRINCIPLES EVERY ENGINEER MUST FOLLOW",
    excerpt: "A badly designed HMI costs more than the hardware it runs on. Alarm floods, operator confusion, missed process deviations — the cost compounds.",
    category: "BEST PRACTICES",
    date: "APR 02, 2026",
    readTime: "8 MIN READ",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
  },
  {
    slug: "whatsapp-manufacturing",
    title: "HOW INDIAN MANUFACTURERS ARE USING WHATSAPP TO AUTOMATE OPERATIONS",
    excerpt: "WhatsApp has 500 million users in India. The average operator checks it 47 times a day. So why are you still sending production reports by email?",
    category: "INNOVATION",
    date: "MAR 25, 2026",
    readTime: "5 MIN READ",
    img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&q=80"
  },
  {
    slug: "control-panel-design-guide",
    title: "THE COMPLETE GUIDE TO INDUSTRIAL CONTROL PANEL DESIGN IN INDIA",
    excerpt: "A control panel is only as good as its design. We've seen brand-new panels fail within 6 months because of avoidable design mistakes.",
    category: "ENGINEERING GUIDE",
    date: "MAR 18, 2026",
    readTime: "7 MIN READ",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      {/* Hero */}
      <section className="relative h-[60vh] flex flex-col justify-center px-[48px] border-b border-white/8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80" 
            alt="Blog Hero" 
            fill 
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        <div className="max-w-[1280px] mx-auto w-full relative z-10">
          <Badge>ENGINEERING INSIGHTS</Badge>
          <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-heading font-black mb-8 tracking-tighter leading-[0.9] uppercase">
            INDUSTRIAL<br />KNOWLEDGE BASE
          </h1>
          <p className="text-[#94A3B8] text-xl font-light italic max-w-2xl leading-relaxed">
            "Deep dives into automation logic, IIoT architecture, and the future of Indian manufacturing."
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-[120px] px-[48px] bg-black">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="bg-[#0D0D0D] border border-white/10 rounded-lg overflow-hidden flex flex-col h-full group-hover:border-white/20 transition-all">
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image 
                      src={post.img} 
                      alt={post.title} 
                      fill 
                      className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-6">
                      <div className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-[9px] font-bold tracking-[0.2em] text-[#6B7280] uppercase">
                        ● {post.category}
                      </div>
                      <span className="text-[9px] font-bold tracking-[0.2em] text-[#6B7280] uppercase">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-heading font-black mb-4 text-white uppercase tracking-tight line-clamp-2 leading-tight group-hover:titanium-text transition-all">
                      {post.title}
                    </h3>
                    
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 line-clamp-2 italic">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">{post.date}</span>
                      <span className="text-[10px] font-bold tracking-[0.15em] text-white uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                        READ ARTICLE <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
