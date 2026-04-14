'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Cloud, AppWindow, SmartphoneIcon, Bot, BarChart3, ChevronRight, CheckCircle2 
} from 'lucide-react';

const services = [
  {
    title: "Industrial Automation",
    description: "We design and implement advanced automation systems for manufacturing and industrial environments.",
    points: ["PLC, SCADA & HMI Systems", "Robotics & Motion Control", "Control Panel Design", "Industrial Networking", "Real-time Monitoring"],
    icon: <Settings size={20} className="text-white" />,
  },
  {
    title: "Cloud & Data Intelligence",
    description: "Transform raw data into actionable insights with cloud-connected systems.",
    points: ["IIoT Integration", "Real-time Dashboards", "Predictive Analytics", "Data Logging & Reporting", "Cloud Infrastructure"],
    icon: <Cloud size={20} className="text-white" />,
  },
  {
    title: "Software Development",
    description: "Custom-built software solutions tailored to your business workflows (Web / ERP / CRM / SaaS).",
    points: ["Web Applications", "ERP Systems", "CRM Platforms", "SaaS Product Development", "API & Backend Systems"],
    icon: <AppWindow size={20} className="text-white" />,
  },
  {
    title: "Mobile App Development",
    description: "Build powerful mobile apps that deliver seamless user experiences and business impact.",
    points: ["Android & iOS Apps", "Flutter / React Native", "UI/UX Design", "Backend Integration", "App Store Deployment"],
    icon: <SmartphoneIcon size={20} className="text-white" />,
  },
  {
    title: "WhatsApp Automation",
    description: "Automated communication and customer engagement using WhatsApp.",
    points: ["Messaging Workflows", "Lead Nurturing Systems", "Customer Support Bots", "Campaign Automation", "CRM Integration"],
    icon: <Bot size={20} className="text-white" />,
  },
  {
    title: "Digital Marketing",
    description: "Scale your business with performance-driven marketing strategies (Meta Ads & Growth).",
    points: ["Meta Ads (FB & IG)", "Google Ads", "Funnel Design", "Lead Generation Systems", "Conversion Optimization"],
    icon: <BarChart3 size={20} className="text-white" />,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-20 max-w-3xl">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-[9px] font-black tracking-[1em] text-zinc-700 mb-6 uppercase"
          >
            Services
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase"
          >
            Tailored Engineering Services
          </motion.h2>
          <div className="w-16 h-1 bg-white/10 mb-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 overflow-hidden rounded-[2rem]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-10 md:p-12 bg-black hover:bg-zinc-950 transition-all duration-700 relative flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-black mb-4 tracking-tight uppercase">
                  {service.title}
                </h3>
                
                <p className="text-zinc-500 leading-relaxed mb-8 text-[12px] font-medium min-h-[48px]">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-12">
                   {service.points.map((point) => (
                     <li key={point} className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                        <CheckCircle2 size={12} className="text-white/20" />
                        <span>{point}</span>
                     </li>
                   ))}
                </ul>
              </div>
              
              <div className="flex items-center text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 group-hover:text-white transition-colors cursor-pointer">
                Consult Solution <ChevronRight size={12} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner */}
        <motion.div 
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 p-20 glass rounded-[3rem] border border-white/5 text-center relative overflow-hidden group"
        >
           <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors" />
           <h3 className="text-3xl md:text-5xl font-black titanium-text uppercase tracking-tighter mb-6 italic px-4 overflow-visible relative z-10">
              Build Once. Deploy Everywhere.
           </h3>
           <p className="text-zinc-500 font-black uppercase tracking-[0.4em] text-[10px] relative z-10">
              "Multi-platform ecosystems engineered for long-term scalability."
           </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
