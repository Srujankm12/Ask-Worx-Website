"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CommandCenter = () => {
  const [uptime, setUptime] = useState(99.98);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => Math.min(99.99, prev + 0.0001));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0D0D0D] border border-white/10 rounded-xl p-6 font-mono text-[11px] shadow-2xl overflow-hidden relative group">
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-white font-bold tracking-tight">COMMAND CENTER V2.4</span>
        </div>
        <span className="text-secondary">SYS_STATUS: OPTIMAL</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-secondary mb-1 uppercase tracking-tighter">Network Uptime</p>
          <p className="text-white text-lg font-bold">{uptime.toFixed(4)}%</p>
        </div>
        <div>
          <p className="text-secondary mb-1 uppercase tracking-tighter">Active Nodes</p>
          <p className="text-white text-lg font-bold">1,402</p>
        </div>
        <div>
          <p className="text-secondary mb-1 uppercase tracking-tighter">Sync State</p>
          <p className="text-green-500 text-lg font-bold">LIVE</p>
        </div>
        <div>
          <p className="text-secondary mb-1 uppercase tracking-tighter">Latency</p>
          <p className="text-white text-lg font-bold">14ms</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-1 opacity-50">
        <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-green-500" 
            initial={{ width: '0%' }}
            animate={{ width: '85%' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>
        <p className="text-[8px] text-secondary">REAL-TIME DATA PROCESSING...</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
    </div>
  );
};

export interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ children, direction = 'left', speed = 20 }) => {
  return (
    <div className="flex overflow-hidden select-none group">
      <motion.div 
        className="flex shrink-0 min-w-full items-center gap-10"
        animate={{ x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};
