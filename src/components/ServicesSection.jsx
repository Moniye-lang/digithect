import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const bladesData = [
  {
    num: "01 //",
    tag: "CLOUD FABRIC",
    collapsedTitle: "Distributed\nCloud",
    metricBadge: "99.999%",
    mobileTitle: "Distributed Cloud Fabric",
    title: "Enterprise Cloud & Distributed Systems",
    subtitle: "Active-Active",
    desc: "Self-healing multi-region backbones engineered for tens of millions of concurrent requests with 99.999% SLA availability and zero-downtime rollouts.",
    tags: ["Active-Active Geo", "Immutable IaC", "<15ms P99 Latency"],
    scope: "Enterprise Cloud & Distributed Systems",
    metricLabel: "SLA:",
    metricVal: "99.999%"
  },
  {
    num: "02 //",
    tag: "NEURAL SYSTEMS",
    collapsedTitle: "Bespoke\nAI Core",
    metricBadge: "Air-Gapped",
    mobileTitle: "Bespoke AI Platforms",
    title: "Bespoke AI & Autonomous Agent Platforms",
    subtitle: "Zero Data Leakage",
    desc: "Private neural engines, fine-tuned domain models, high-speed vector retrieval, and autonomous agent loops that execute air-gapped on your sovereign servers.",
    tags: ["Private Weights", "High-Speed Vectors", "SOC2 Type II"],
    scope: "Bespoke AI & Autonomous Agent Platforms",
    metricLabel: "ACCURACY:",
    metricVal: "99.4%"
  },
  {
    num: "03 //",
    tag: "SETTLEMENT",
    collapsedTitle: "Fintech\nCore",
    metricBadge: "< 0.8ms",
    mobileTitle: "Fintech Core & Ledgers",
    title: "Fintech Core & Settlement Systems",
    subtitle: "Bank-Grade SLA",
    desc: "Ultra-low latency transaction engines, immutable double-entry ledgers, zero-knowledge verification, and bank-grade settlement executing at hardware speed.",
    tags: ["Hardware Crypto Signing", "Real-Time AML", "PCI-DSS L1"],
    scope: "Fintech Core & Settlement Systems",
    metricLabel: "LATENCY:",
    metricVal: "< 0.8ms"
  },
  {
    num: "04 //",
    tag: "DEFENSE SYSTEMS",
    collapsedTitle: "Zero-Trust\nDefense",
    metricBadge: "ISO 27001",
    mobileTitle: "Zero-Trust Defense",
    title: "Zero-Trust Cybersecurity Architecture",
    subtitle: "Post-Quantum",
    desc: "Continuous cryptographic authentication, mutual TLS microservice isolation, automated code-level threat triage, and post-quantum key encapsulation.",
    tags: ["Post-Quantum Keys", "mTLS Mesh", "Zero Breach SLA"],
    scope: "Zero-Trust Cybersecurity Architecture",
    metricLabel: "COMPLIANCE:",
    metricVal: "ISO 27001"
  }
];

export default function ServicesSection({ onOpenConsultation }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="relative py-14 sm:py-16 bg-[#030406] border-t border-gold-500/15 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Sleek Compact Header */}
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] font-mono text-gold-400 tracking-[0.25em] uppercase font-semibold">
              WHAT WE ARCHITECT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight mt-1">
              Enterprise <span className="text-gold-gradient">Software Services</span>
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
            <span>Hover or tap pillar to inspect</span>
          </div>
        </div>

        {/* Low-Profile Architectural Blades Container (Height 330px on desktop) */}
        <div className="flex flex-col lg:flex-row gap-3 lg:h-[330px]">
          {bladesData.map((blade, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={blade.num}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => {
                  if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                    setActiveIndex(idx);
                  }
                }}
                className={`relative rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'lg:flex-[3.6] border border-gold-500/50 bg-[#090b10] shadow-[0_10px_35px_-10px_rgba(212,167,55,0.2)] p-5 lg:p-6'
                    : 'lg:flex-1 border border-slate-800/80 bg-[#06080d] hover:border-gold-500/50 p-4 lg:p-5'
                }`}
              >
                {/* Mobile Bar for Inactive State */}
                {!isActive && (
                  <div className="flex lg:hidden items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-gold-400">{blade.num}</span>
                      <span className="text-xs font-bold font-display text-white">{blade.mobileTitle}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gold-300/80">{blade.metricBadge} ↓</span>
                  </div>
                )}

                {/* Desktop Collapsed View */}
                {!isActive && (
                  <div className="hidden lg:flex absolute inset-0 flex-col justify-between p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-widest text-gold-400">{blade.num}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    </div>
                    <div className="my-auto py-4">
                      <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-500 mb-1">DISCIPLINE</div>
                      <h3 className="text-base font-bold font-display text-white leading-snug whitespace-pre-line">
                        {blade.collapsedTitle}
                      </h3>
                    </div>
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="text-gold-300">{blade.metricBadge}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                  </div>
                )}

                {/* Expanded View */}
                {isActive && (
                  <div className="relative z-10 w-full h-full flex flex-col justify-between animate-fadeIn">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold tracking-widest text-gold-400">
                          {blade.num} {blade.tag}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-[10px] font-mono text-gold-300">
                          {blade.subtitle}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                        {blade.title}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed mt-2 max-w-lg">
                        {blade.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {blade.tags.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-md bg-black/60 border border-slate-800 text-[10px] font-mono text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenConsultation) onOpenConsultation(blade.scope);
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-black bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500 hover:brightness-110 shadow-md transition-all"
                      >
                        <span>Commission Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                        {blade.metricLabel} <strong className="text-gold-300">{blade.metricVal}</strong>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
