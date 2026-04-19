"use client";

import React from 'react';
import { Badge } from '@/components/UI';
import { motion } from 'framer-motion';

const stack = [
  {
    category: "OT Stack",
    items: ["Siemens TIA Portal", "Rockwell Studio 5000", "Schneider EcoStruxure", "Ignition SCADA", "Inductive Automation"]
  },
  {
    category: "IT Stack",
    items: ["Node-RED", "Python (Django/FastAPI)", "PostgreSQL", "MQTT / OPC-UA", "React / Next.js"]
  },
  {
    category: "Cloud Stack",
    items: ["AWS IoT Core", "Azure IoT Hub", "Google Cloud IoT", "Snowflake Data Lake", "Grafana / InfluxDB"]
  },
  {
    category: "AI/ML Integration",
    items: ["TensorFlow Lite (Edge)", "AWS SageMaker", "Predictive Analytics", "Anomaly Detection", "NLP for Chatbots"]
  }
];

export default function TechnologyPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <Badge>BUILT ON INDUSTRIAL DNA</Badge>
          <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 tracking-tighter">
            OUR TECHNOLOGY STACK
          </h1>
          <p className="text-secondary text-xl font-light italic max-w-2xl">
            We leverage market-leading platforms and open-source innovations to build resilient, interoperable systems.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stack.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-[11px] font-bold tracking-[0.3em] text-[#1A3D2B] uppercase mb-8 border-b border-white/5 pb-4">{group.category}</h3>
              <ul className="flex flex-col gap-6">
                {group.items.map((item, j) => (
                  <li key={j} className="text-lg font-bold text-white/80 hover:text-white transition-colors cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-32 px-6 bg-[#050505] border-y border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.4em] text-secondary uppercase">CERTIFIED PARTNERS & ECOSYSTEM</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 grayscale opacity-40">
           {["SIEMENS", "ROCKWELL", "SCHNEIDER", "AWS", "AZURE", "GOOGLE CLOUD", "IGNITION"].map((logo, i) => (
             <span key={i} className="text-3xl md:text-4xl font-heading font-black tracking-tighter">{logo}</span>
           ))}
        </div>
      </section>
    </div>
  );
}
