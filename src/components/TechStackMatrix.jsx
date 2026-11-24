import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Cloud, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { techStackMatrix } from '../data/servicesData';

export default function TechStackMatrix() {
  const [activeTab, setActiveTab] = useState('backend');

  const tabs = [
    { id: 'backend', label: 'Backend & Core Systems', icon: Server },
    { id: 'cloud', label: 'Cloud & Distributed Edge', icon: Cloud },
    { id: 'ai', label: 'AI, Neural & Vector', icon: Cpu },
    { id: 'security', label: 'Cyber & Zero-Trust', icon: ShieldCheck },
  ];

  return (
    <section id="tech-stack" className="relative py-28 bg-[#050609] border-t border-gold-500/10 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-xs font-mono text-gold-300">
            <Terminal className="w-3.5 h-3.5 text-gold-400" />
            <span>ENTERPRISE ENGINEERING STACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Battle-Hardened <span className="text-gold-gradient">Technology Matrix</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            We select only mature, memory-safe, ultra-low latency frameworks engineered to sustain extreme transaction volumes and zero failure states.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-gold-500 text-black border-gold-400 shadow-[0_0_20px_rgba(212,167,55,0.3)]'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-gold-500/30 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackMatrix[activeTab].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#0e121a] to-[#080b10] border border-gold-500/20 hover:border-gold-400/60 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-base text-white group-hover:text-gold-200 transition-colors font-display">
                  {tech.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-gold-400/60 group-hover:bg-gold-400 transition-colors" />
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                {tech.role}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-gold-400/80">
                <span>PRODUCTION CERTIFIED</span>
                <span>ZERO-TRUST READY</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

