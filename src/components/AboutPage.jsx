import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Compass, 
  Cpu, 
  Award, 
  Users, 
  Globe2, 
  CheckCircle, 
  ArrowRight,
  Lock,
  Layers,
  Sparkles
} from 'lucide-react';

export default function AboutPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#030406] text-slate-100">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-gold-500/10 via-amber-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-[11px] font-mono tracking-widest text-gold-300 uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>ARCHITECTURAL PROVENANCE // ABOUT DIGITHECT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white mb-6">
            Architecting <span className="text-gold-gradient">Sovereign Software</span> for Global Enterprises
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            Digithect was founded on a singular conviction: mission-critical software systems demand the same mathematical discipline, structural longevity, and aesthetic nobility as monumental physical architecture.
          </p>
        </div>

        {/* The Classical Vitruvian Foundation */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-gold-400 tracking-widest uppercase">The Classical Foundation</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              The Vitruvian Triad in Modern Software
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#07090e] border border-slate-800/80 hover:border-gold-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6 text-gold-400" />
              </div>
              <div className="text-xs font-mono text-gold-400/80 uppercase tracking-widest mb-1">01 // FIRMITAS</div>
              <h3 className="text-xl font-bold font-display text-white mb-3">Structural Soundness</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Fault-tolerant distributed consensus, memory-safe execution with zero memory leaks, post-quantum cryptographic security, and automated self-healing failover across global cloud backbones.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#07090e] border border-slate-800/80 hover:border-gold-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6 text-gold-400" />
              </div>
              <div className="text-xs font-mono text-gold-400/80 uppercase tracking-widest mb-1">02 // UTILITAS</div>
              <h3 className="text-xl font-bold font-display text-white mb-3">Uncompromising Utility</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Sub-millisecond latency envelopes, high-throughput transaction buses capable of 10M+ RPS, and domain-specialized private AI models engineered to generate immediate enterprise competitive advantage.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#07090e] border border-slate-800/80 hover:border-gold-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-gold-400" />
              </div>
              <div className="text-xs font-mono text-gold-400/80 uppercase tracking-widest mb-1">03 // VENUSTAS</div>
              <h3 className="text-xl font-bold font-display text-white mb-3">Architectural Beauty</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Crisp modular decomposition, self-documenting domain models, intuitive visual systems observability, and executive interfaces engineered with 120 FPS precision and aesthetic distinction.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Immutable Engineering Standards */}
        <div className="mb-20 p-8 sm:p-12 rounded-2xl bg-[#06080e] border border-slate-800">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono text-gold-400 tracking-widest uppercase">Our Code of Construction</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              Four Immutable Engineering Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every system designed, reviewed, and deployed by Digithect must meet four non-negotiable architectural mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-mono text-xs font-bold text-gold-400">01</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Sovereignty & Zero Vendor Lock-in</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  You own 100% of your source code, architectural schemas, and model weights. Our platforms can be deployed air-gapped on bare metal, hybrid clouds, or sovereign national data centers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-mono text-xs font-bold text-gold-400">02</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Mathematical Precision & Memory Safety</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  We construct backbones with memory-safe languages like Rust and Go, accompanied by formal state-machine proofs, automated continuous fuzzing, and deterministic concurrency control.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-mono text-xs font-bold text-gold-400">03</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Absolute Discretion & Defense-Grade Security</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  We work under strict mutual non-disclosure agreements with tier-1 banks, sovereign funds, and defense contractors. Our code passes rigorous third-party red-team penetration testing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-mono text-xs font-bold text-gold-400">04</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Decadal Longevity & Evolution</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  We build architectures designed to endure for 15+ years. Clean hexagonal interfaces and strangler-fig migration paths ensure your core can evolve without ever incurring catastrophic rewrites.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Proven Track Record / Benchmarks */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-gold-400 tracking-widest uppercase">Verified Benchmarks</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              Architectural Performance in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl bg-[#07090e] border border-slate-800 text-center">
              <div className="text-2xl sm:text-4xl font-extrabold font-mono text-gold-300 mb-1">99.999%</div>
              <div className="text-xs font-mono text-slate-400">HISTORICAL SLA UPTIME</div>
            </div>
            <div className="p-6 rounded-xl bg-[#07090e] border border-slate-800 text-center">
              <div className="text-2xl sm:text-4xl font-extrabold font-mono text-gold-300 mb-1">$40B+</div>
              <div className="text-xs font-mono text-slate-400">ANNUAL SETTLEMENT SECURED</div>
            </div>
            <div className="p-6 rounded-xl bg-[#07090e] border border-slate-800 text-center">
              <div className="text-2xl sm:text-4xl font-extrabold font-mono text-gold-300 mb-1">0</div>
              <div className="text-xs font-mono text-slate-400">SECURITY BREACHES RECORDED</div>
            </div>
            <div className="p-6 rounded-xl bg-[#07090e] border border-slate-800 text-center">
              <div className="text-2xl sm:text-4xl font-extrabold font-mono text-gold-300 mb-1">14</div>
              <div className="text-xs font-mono text-slate-400">ACTIVE GLOBAL REGIONS</div>
            </div>
          </div>
        </div>

        {/* Global Coordinates */}
        <div className="mb-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0a0d14] to-[#040507] border border-slate-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-mono text-gold-400 tracking-widest uppercase">Global Footprint</span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">Principal Architect Offices</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ROUND-THE-CLOCK SYSTEM ARCHITECTURE COVERAGE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[#05070c] border border-slate-800/80">
              <div className="text-xs font-mono text-gold-400 font-bold mb-1">ZURICH // HQ</div>
              <div className="text-sm font-bold text-white mb-2">Cryptographic Labs</div>
              <div className="text-xs text-slate-400 font-sans">Bahnhofstrasse District, Switzerland</div>
              <div className="text-[11px] font-mono text-slate-500 mt-3">CET // UTC+1</div>
            </div>

            <div className="p-5 rounded-xl bg-[#05070c] border border-slate-800/80">
              <div className="text-xs font-mono text-gold-400 font-bold mb-1">LONDON</div>
              <div className="text-sm font-bold text-white mb-2">Fintech Core Center</div>
              <div className="text-xs text-slate-400 font-sans">Mayfair Engineering House, UK</div>
              <div className="text-[11px] font-mono text-slate-500 mt-3">GMT // UTC+0</div>
            </div>

            <div className="p-5 rounded-xl bg-[#05070c] border border-slate-800/80">
              <div className="text-xs font-mono text-gold-400 font-bold mb-1">NEW YORK</div>
              <div className="text-sm font-bold text-white mb-2">Cloud Scale Directorate</div>
              <div className="text-xs text-slate-400 font-sans">Wall Street Tower, USA</div>
              <div className="text-[11px] font-mono text-slate-500 mt-3">EST // UTC-5</div>
            </div>

            <div className="p-5 rounded-xl bg-[#05070c] border border-slate-800/80">
              <div className="text-xs font-mono text-gold-400 font-bold mb-1">SINGAPORE</div>
              <div className="text-sm font-bold text-white mb-2">Autonomous AI Gateway</div>
              <div className="text-xs text-slate-400 font-sans">Marina Bay Financial Center, SG</div>
              <div className="text-[11px] font-mono text-slate-500 mt-3">SGT // UTC+8</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-10 sm:p-14 rounded-2xl bg-gradient-to-r from-gold-500/10 via-[#0a0d14] to-gold-500/10 border border-gold-500/30">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
            Commission an Architectural Review
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-8 font-sans">
            Our Principal Architects provide comprehensive forensics and blueprints for enterprise software systems under strict mutual confidentiality.
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#F9E8A2] via-[#E2BB58] to-[#C99726] text-black font-bold text-xs sm:text-sm tracking-wider shadow-lg hover:shadow-gold-500/30 hover:brightness-110 active:scale-95 transition-all"
          >
            <span>COMMISSION CONSULTATION</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>

      </div>
    </div>
  );
}
