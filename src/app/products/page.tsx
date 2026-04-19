"use client";

import React from 'react';
import { Badge, Button } from '@/components/UI';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Layers, Monitor, Network, Settings, ShieldCheck, Database, Cloud } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    title: "PLC & CONTROL SYSTEMS",
    id: "plc",
    icon: Settings,
    img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80",
    description: "Programmable Logic Controllers form the backbone of modern industrial automation. ASKworX engineers design, program, and commission PLC systems using Allen-Bradley, Siemens S7, Mitsubishi, and Schneider platforms. From simple machine control to complex multi-axis coordination, our solutions deliver reliable, deterministic control at every scale of your manufacturing operation.",
    specs: ["Scan time <10ms", "Redundant CPU", "IEC 61131-3"]
  },
  {
    title: "SCADA & HMI SYSTEMS",
    id: "scada",
    icon: Monitor,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    description: "Give operators complete real-time visibility and control over distributed industrial processes. Our SCADA/HMI solutions use Ignition, WinCC, and FactoryTalk platforms — delivering process visualization, alarm management, historical trending, and secure remote access capabilities built to ISA-101 display standards.",
    specs: ["<1s refresh", "10,000+ tags", "Multi-site capable"]
  },
  {
    title: "IIOT GATEWAYS & EDGE",
    id: "gateways",
    icon: Network,
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    description: "Bridge the gap between OT and IT with industrial-grade IIoT gateways and edge computing nodes. We collect data from PLCs, sensors, and field devices and transmit securely to cloud platforms. Protocol support: OPC-UA, MQTT, Modbus TCP, Profinet, EtherNet/IP — with TLS 1.3 encryption on every data stream.",
    specs: ["OPC-UA native", "5ms edge latency", "TLS 1.3"]
  },
  {
    title: "CONTROL PANEL DESIGN",
    id: "panels",
    icon: Layers,
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=80",
    description: "Custom industrial control panels engineered and built to IS/IEC 61439 standards. MCC panels, PLC panels, VFD panels, power distribution boards, and remote I/O cabinets — each panel is designed for your specific application, fully documented, and undergoes complete Factory Acceptance Testing before delivery to site.",
    specs: ["IP54–IP66 rated", "Full FAT testing", "12-month warranty"]
  },
  {
    title: "INDUSTRIAL NETWORKING",
    id: "networking",
    icon: Cpu,
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    description: "Industrial networks demand deterministic communication, electromagnetic immunity, and zero-downtime architecture. We design EtherNet/IP, Profinet, Modbus TCP, and fiber optic networks for factory floors — with ring topology redundancy, managed switch configuration, VLAN segmentation, and full network documentation.",
    specs: ["Ring topology", "<1ms cycle time", "VLAN ready"]
  },
  {
    title: "SENSORS & FIELD INSTRUMENTS",
    id: "sensors",
    icon: Database,
    img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&q=80",
    description: "Reliable automation starts with accurate sensing. ASKworX sources, installs, and calibrates industrial sensors and field instruments — pressure transmitters, flow meters, temperature sensors, proximity switches, vision systems, and safety light curtains from Sick, Balluff, Endress+Hauser, Keyence, and Pepperl+Fuchs.",
    specs: ["HART/4-20mA/IO-Link", "SIL rated options", "Full calibration"]
  },
  {
    title: "AUTOMATION SOFTWARE",
    id: "software",
    icon: ShieldCheck,
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    description: "Custom automation software that connects your plant floor to your business layer. MES integration, OEE tracking dashboards, production reporting engines, quality management systems, and real-time analytics platforms — all built on open standards and designed for long-term maintainability by your internal teams.",
    specs: ["REST API", "Cloud-native", "Open standards"]
  },
  {
    title: "CLOUD INFRASTRUCTURE",
    id: "cloud",
    icon: Cloud,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    description: "Scalable cloud infrastructure purpose-built for industrial workloads. We deploy and manage AWS, Azure, and Google Cloud environments optimized for time-series data, high-frequency telemetry, and industrial AI/ML pipelines. Secure VPN tunnels, role-based access control, and 99.99% SLA uptime — guaranteed.",
    specs: ["AWS/Azure/GCP", "99.99% SLA", "Industrial-grade security"]
  }
];

export default function ProductsPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      {/* Hero */}
      <section className="relative h-[60vh] flex flex-col justify-center px-[48px] border-b border-white/8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80" 
            alt="Products Hero" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        <div className="max-w-[1280px] mx-auto w-full relative z-10">
          <Badge>INDUSTRIAL STACK</Badge>
          <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-heading font-black mb-8 tracking-tighter leading-[0.9] uppercase">
            INDUSTRIAL-GRADE<br />COMPONENTS
          </h1>
          <p className="text-[#94A3B8] text-xl font-light italic max-w-2xl leading-relaxed">
            "We supply and integrate the world's most reliable automation hardware and software platforms."
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-[120px] px-[48px] bg-black">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/products/${product.id}`} className="group block h-full">
                  <div className="card-border flex flex-col h-full bg-[#0D0D0D] overflow-hidden rounded-xl border border-white/10 group-hover:border-[#1A3D2B] transition-all">
                    <div className="relative h-[300px] w-full overflow-hidden">
                       <Image 
                         src={product.img} 
                         alt={product.title} 
                         fill 
                         className="object-cover opacity-45 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0D0D]" />
                       <div className="absolute top-8 left-8 w-14 h-14 border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-md group-hover:bg-[#1A3D2B]/50 transition-colors">
                          <product.icon className="w-6 h-6 text-white" />
                       </div>
                    </div>
                    
                    <div className="p-10 flex flex-col flex-1">
                      <h3 className="text-2xl font-heading font-black mb-6 text-white uppercase tracking-tight group-hover:titanium-text transition-all">{product.title}</h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed mb-12 flex-1">{product.description}</p>
                      
                      <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-white/5">
                        {product.specs.map((spec, sidx) => (
                          <div key={sidx} className="text-[10px] font-bold tracking-[0.25em] text-white/50 uppercase whitespace-nowrap">
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
