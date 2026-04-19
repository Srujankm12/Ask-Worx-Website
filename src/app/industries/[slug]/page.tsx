"use client";

import React from 'react';
import { Badge, Button } from '@/components/UI';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, CheckCircle2, Factory,
  Monitor, Settings, Zap, Shield, Cpu, Database,
  Activity, BarChart3, ShieldCheck, Globe, FlaskConical,
  Wind, Droplets, Plane, ZapOff
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const industryDetails: Record<string, any> = {
  "automotive": {
    name: "Automotive",
    badge: "PRECISION MANUFACTURING",
    heroImg: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=90",
    description: "Discrete manufacturing at high-velocity. We help automotive leaders and ancillaries implement deterministic control loops and zero-defect assembly lines.",
    longContent: "In the automotive industry, milliseconds of cycle time decide profitability. ASKworX understands the high-pressure environment of the modern body shop and assembly line. Our engineering for the automotive sector focuses on maximum flexibility—enabling production lines to handle multiple vehicle models with zero-setup time. We implement high-speed vision systems that perform non-destructive testing at the pace of production, and our SCADA overlays provide managers with instant OEE data across entire facilities. From Tier-1 component manufacturers to global OEMs, we provide the automation layer that ensures quality is built-in, not inspected-in.",
    challenge: {
      title: "Complexity in Velocity",
      bullets: [
        "Increasing model variety requiring zero-setup line retooling.",
        "High-frequency data bottlenecks in multi-robot cells.",
        "Manual quality checks slowing down overall throughput."
      ]
    },
    solution: {
      stat: "100% DATA INTEGRITY",
      points: [
        "Distributed IO networks with multi-recipe logic.",
        "Real-time robot-cell synchronization.",
        "AI-driven vision inspection for defect detection.",
        "Secure maintenance gateways for remote upkeep."
      ]
    },
    keyInsights: [
      { title: "Predictive Health", text: "Monitoring tri-axial vibration on high-duty conveyor motors to prevent line-side downtime." },
      { title: "Energy Footprint", text: "Optimizing peak-load shifts in paint shops and high-power welding cells." }
    ]
  },
  "pharma": {
    name: "Pharma",
    badge: "COMPLIANCE & QUALITY",
    heroImg: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=90",
    description: "Ensuring 100% data integrity and GxP compliance. We bridge the gap between production and quality assurance with validated automation systems.",
    longContent: "Pharmaceutical manufacturing is the most regulated industrial environment on earth. At ASKworX, we don't just automate pharma lines; we validate them. Our systems are built from the ground up to comply with GAMP-5, 21 CFR Part 11, and ALCOA+ principles. We ensure that every shift in temperature, every batch weight, and every operator action is logged in an encrypted, immutable audit trail. By integrating electronic batch records (EBR) directly into the SCADA layer, we eliminate the risks associated with manual paper logs and vastly reduce batch release times. In a field where data integrity is as critical as the product itself, ASKworX provides the security and transparency that global auditors demand.",
    challenge: {
      title: "Strict Regulatory Guardrails",
      bullets: [
        "Maintaining absolute 21 CFR Part 11 consistency.",
        "Data silos between production floor and QA labs.",
        "Inconsistent batch report generation leading to delays."
      ]
    },
    solution: {
      stat: "100% AUDIT COMPLIANCE",
      points: [
        "Validated SCADA with biometric user logins.",
        "Automated Electronic Batch Records (EBR).",
        "Environmental monitoring for storage stability.",
        "Full CSV (Computer System Validation) lifecycle."
      ]
    },
    keyInsights: [
      { title: "Cleanroom Visibility", text: "Integrated differential pressure and particulate monitoring in real-time." },
      { title: "Serialization", text: "Track-and-trace integration from ground-to-distribution via secure cloud relay." }
    ],
    metrics: ["Zero Audit Minors", "100% Data Integrity", "4 Month ROI"]
  },
  "ev-battery": {
    name: "EV & Battery",
    badge: "THE FUTURE OF ENERGY",
    heroImg: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=90",
    description: "Driving efficiency in gigafactories. We provide the control layer for the high-precision chemistry and assembly of next-generation energy storage.",
    longContent: "The EV battery revolution requires a new level of manufacturing precision. ASKworX supports battery manufacturers in managing the complex, multi-stage process from slurry mixing to cell formation and pack assembly. Our solutions focus on nanoscale accuracy in electrode coating and ultra-high-resolution thermal monitoring during the formation process. We implement high-frequency telemetry tracking for every cell, creating a digital birth certificate that follows the battery throughout its lifecycle. Whether you are scaling a pilot line or optimizing a gigafactory, our automation stack ensures that energy density is maximized and safety is never compromised.",
    challenge: {
      title: "Nanoscale Precision",
      bullets: [
        "Managing precise chemical ratios in high-speed mixers.",
        "Eliminating thermal runaway risks during formation.",
        "Ensuring 100% traceability for mineral sourcing."
      ]
    },
    solution: {
      stat: "ZERO-DEFECT ASSEMBLY",
      points: [
        "Closed-loop PID control for coating thickness.",
        "Matrixed thermal reporting for formation banks.",
        "Cloud-synced cell-level documentation.",
        "Robotic handling for delicate foil stacking."
      ]
    },
    keyInsights: [
      { title: "Chemical Harmony", text: "Real-time viscosity and moisture control in slurry preparation." },
      { title: "Grid Energy Sync", text: "Optimizing the massive energy load required for cell seasoning and aging." }
    ],
    metrics: ["15% Efficiency Boost", "Zero Cell-failures", "8 Month ROI"]
  },
  "food-beverage": {
    name: "Food & Beverage",
    badge: "HYGIENE & SCALE",
    heroImg: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=1920&q=90",
    description: "High-speed packaging and safe process control. We ensure ISO-22000 readiness with automated CIP cycles and vision-guided quality checks.",
    longContent: "In Food & Beverage, scalability must never come at the cost of hygiene. ASKworX provides turnkey automation for bottling, packaging, and process lines. We specialize in automated Clean-In-Place (CIP) systems that guarantee food safety by tracking every temperature and chemical dosage parameter. Our high-speed vision systems reject defective labels or misaligned caps in milliseconds, ensuring that your secondary packaging lines run at peak velocity. With integrated energy monitoring for cold-chain facilities, we help you reduce wastage and operational costs while maintaining the highest product standards.",
    challenge: {
      title: "Perishable Velocity",
      bullets: [
        "Ensuring zero-contamination during high-speed bottling.",
        "Managing energy-intensive cold storage logistics.",
        "Reducing packaging waste in high-volume runs."
      ]
    },
    solution: {
      stat: "ISO-22000 COMPLIANT",
      points: [
        "Automated CIP sequence validation reports.",
        "High-frequency vision inspection arrays.",
        "Integrated energy heatmaps for chillers.",
        "Smart load-cell filling accuracy control."
      ]
    },
    keyInsights: [
      { title: "Cold Chain IoT", text: "Sub-degree temperature logging synced to batch IDs in the cloud." },
      { title: "Cycle Speed", text: "Optimizing conveyor transitions to eliminate bottleneck accumulation." }
    ],
    metrics: ["20% Waste Reduction", "99.8% Fill Accuracy", "5 Month ROI"]
  },
  "renewable-energy": {
    name: "Renewable Energy",
    badge: "SUSTAINABLE POWER",
    heroImg: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=90",
    description: "Maximizing yield from distributed assets. We provide the SCADA/IoT backbone for solar, wind, and microgrid power systems.",
    longContent: "Renewable energy assets are often distributed, remote, and highly intermittent. ASKworX provides the digital infrastructure to monitor and control these assets as a single, unified power plant. Our SCADA solutions for solar and wind farms integrate directly with smart inverters and trackers, providing millisecond-level data for grid synchronization and frequency regulation. We deploy 'Edge Analytics' that monitor turbine vibration signatures to predict bearing failure months in advance, reducing the need for expensive offshore or remote site visits. With ASKworX, green energy becomes predictable, reliable, and highly profitable.",
    challenge: {
      title: "Distributed Intermittency",
      bullets: [
        "Synchronizing erratic wind/solar output with grid load.",
        "Predicting failures in remote, hard-to-access sites.",
        "Cyber-hardening critical power delivery nodes."
      ]
    },
    solution: {
      stat: "99.99% ASSET UPTIME",
      points: [
        "Smart Inverter millisecond control loops.",
        "Edge-based vibration analytics (FFT).",
        "Secure micro-grid load balancing logic.",
        "Global multi-site solar cloud oversight."
      ]
    },
    keyInsights: [
      { title: "Yield Optimization", text: "Dynamic tracker adjustment based on real-time cloud-cover sensors." },
      { title: "Grid Hardening", text: "Hardware-based firewalls for IEC 61850 protocol protection." }
    ],
    metrics: ["12% Yield Increase", "40% Lower OpEx", "12 Month ROI"]
  },
  "oil-gas": {
    name: "Oil & Gas",
    badge: "MISSION CRITICAL",
    heroImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=90",
    description: "Hazardous zone instrumentation and secure telemetry. We provide the control and safety layer for upstream and midstream assets.",
    longContent: "The Oil & Gas sector demands the highest level of safety and reliability. ASKworX provides ATEX/Ex certified instrumentation and control solutions for hazardous environments. We understand that in a remote wellhead or an offshore platform, communication is a luxury. Our 'Store-and-Forward' IIoT gateways ensure that critical data—flow, pressure, and temperature—is never lost during satellite or LTE dropouts. We implement mass-balance leak detection algorithms that monitor thousands of kilometers of pipeline in real-time, providing operators with instant alerts and automated shutdown sequences to prevent environmental incidents.",
    challenge: {
      title: "Hazardous Persistence",
      bullets: [
        "Monitoring flow in Class 1 Div 1 hazardous zones.",
        "Vast distances requiring satellite-linked telemetry.",
        "Protecting aging assets from cyber-security threats."
      ]
    },
    solution: {
      stat: "EXPLOSION-PROOF DATA",
      points: [
        "Intrinsic Safety (IS) loop isolators.",
        "Satellite/4G Hub-and-Spoke telemetry.",
        "Automated pipeline leak detection.",
        "Hardened OT Security for legacy PLCs."
      ]
    },
    keyInsights: [
      { title: "Flow Dynamics", text: "Precision sonic flow tracking with pressure-compensated logic." },
      { title: "Remote Power", text: "Solar-powered IoT node optimization for zero-grid locations." }
    ],
    metrics: ["99.9% Leak Accuracy", "Zero LTI Record", "18 Month ROI"]
  },
  "textiles": {
    name: "Textiles",
    badge: "FIBER TO FABRIC",
    heroImg: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1920&q=90",
    description: "Multi-axis synchronization and precision tension control. We help textile mills optimize their dyeing, spinning, and weaving operations with high-speed automation.",
    longContent: "In the textile industry, profitability is a function of tension control and energy efficiency. ASKworX provides sophisticated automation for the full textile lifecycle—from raw fiber processing to high-speed weaving and specialized dyeing. Our solutions focus on ultra-precise multi-axis synchronization (electronic gearing) that prevents yarn breakage even at maximum production velocities. We implement high-perf PID loops for chemical dosage in dyeing plants, ensuring color consistency across every batch while reducing water and chemical waste by up to 25%. By integrating VFDs with centralized power quality monitoring, we help legacy mills transform into modern, sustainable, and highly efficient manufacturing hubs.",
    challenge: {
      title: "Precision at High-Velocity",
      bullets: [
        "Inconsistent yarn tension leading to micro-breaks and downtime.",
        "High chemical and energy waste in legacy dyeing processes.",
        "Difficulty in tracking real-time OEE across distributed looms."
      ]
    },
    solution: {
      stat: "25% LOWER ENERGY",
      points: [
        "Electronic Gearing (E-CAM) for multi-motor sync.",
        "Automated chemical dosage via precise flow logic.",
        "Precision fabric tension monitoring (Load-cell integration).",
        "Heat recovery automation for boiler/dyeing optimization."
      ]
    },
    keyInsights: [
      { title: "Tension Logic", text: "Predictive tension adjustment based on fiber type and humidity sensors." },
      { title: "Water Scarcity", text: "Automated water recycling logic for zero-liquid discharge goals." }
    ],
    metrics: ["20% Higher Speed", "Zero Yarn Breaks", "7 Month ROI"]
  },
}
  ;

export default function IndustrySubPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = industryDetails[slug] || industryDetails["automotive"];

  return (
    <div className="pt-24 min-h-screen bg-black">
      {/* Hero */}
      <section className="relative h-[75vh] flex flex-col justify-center px-10 border-b border-white/8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={data.heroImg} alt={data.name} fill priority className="object-cover opacity-60 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="max-w-[1280px] mx-auto w-full pt-32 relative z-10">
          <Link href="/industries" className="flex items-center gap-3 text-[#94A3B8] text-[10px] font-black tracking-[0.4em] uppercase mb-12 hover:text-white transition-all group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> BACK TO INDUSTRIES
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6">● {data.badge}</Badge>
            <h1 className="text-[clamp(4rem,12vw,12rem)] leading-[0.8] font-heading font-black tracking-tighter mb-8 uppercase italic text-white">
              {data.name}
            </h1>
            <p className="text-2xl text-secondary max-w-2xl font-light italic leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-[120px] bg-black px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4">
            <Badge>THE SECTOR VIEW</Badge>
            <h2 className="text-4xl font-heading font-black text-white uppercase italic leading-[0.9] mb-12">DEEP DOMAIN<br />EXPERTISE.</h2>
            <div className="w-24 h-1 bg-[#1A3D2B] mb-12" />
            <p className="text-secondary text-[10px] font-black tracking-[0.5em] uppercase">Industry-specific Logic</p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl text-white leading-relaxed font-light italic border-l-4 border-white/5 pl-10 mb-12">
              {data.longContent}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
              {data.keyInsights?.map((insight: any, i: number) => (
                <div key={i} className="p-8 bg-[#0D0D0D] border border-white/5 rounded-2xl">
                  <h4 className="text-xl font-heading font-black text-white uppercase italic mb-4">{insight.title}</h4>
                  <p className="text-secondary text-sm font-bold uppercase tracking-widest leading-loose italic">{insight.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge / Solution Grid */}
      <section className="section-padding px-10 bg-[#050505] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-10 text-[#6B7280]">THE CHALLENGE</h3>
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-12 uppercase leading-tight italic text-white">{data.challenge.title}</h2>
            <div className="space-y-6">
              {data.challenge.bullets.map((bullet: string, i: number) => (
                <p key={i} className="text-xl text-[#94A3B8] leading-relaxed italic border-l border-white/10 pl-8">{bullet}</p>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-10 text-[#1A3D2B]">THE ASKWORX SOLUTION</h3>
            <div className="bg-black p-12 border border-white/10 rounded-3xl mb-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A3D2B]/5 blur-3xl rounded-full" />
              <span className="text-4xl md:text-5xl font-heading font-black titanium-text block mb-12 italic">{data.solution.stat}</span>
              <div className="space-y-6">
                {data.solution.points.map((point: string, i: number) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <CheckCircle2 className="w-5 h-5 text-[#1A3D2B] flex-shrink-0" />
                    <p className="text-[#94A3B8] text-[13px] font-bold tracking-widest uppercase group-hover:text-white transition-colors">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black px-10 text-center">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-heading font-black mb-12 uppercase leading-[0.85] italic text-white">Ready to transform your<br />{data.name} operations?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/919030108949" target="_blank" rel="noopener noreferrer">
              <Button className="px-16 py-6 bg-[#1A3D2B] text-white rounded-full font-black uppercase text-xs tracking-widest shadow-2xl">WHATSAPP CONSULTATION →</Button>
            </a>
            <Link href="/contact">
              <Button variant="secondary" className="px-16 py-6 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">GET CASE STUDY →</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
