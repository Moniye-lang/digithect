import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Cpu, Shield, Cloud, Server, Database, CheckCircle, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export default function ArchitectureConfigurator({ onOpenConsultation }) {
  const [domain, setDomain] = useState('fintech');
  const [throughput, setThroughput] = useState('1m');
  const [securityTier, setSecurityTier] = useState('pqc');
  const [cloudProvider, setCloudProvider] = useState('multicloud');

  const domainOptions = [
    { id: 'fintech', label: 'Fintech & Transaction Core', desc: 'Sub-millisecond ledger, fraud engine, multi-currency settlement' },
    { id: 'ai', label: 'Bespoke AI & Autonomous Agents', desc: 'Private domain LLM, RAG vector pipeline, agentic reasoning loops' },
    { id: 'cloud', label: 'Distributed Cloud & Microservices', desc: 'Auto-scaling event brokers, Kafka streaming, GraphQL federation' },
    { id: 'modernize', label: 'Core Legacy De-Monolithing', desc: 'Zero-downtime strangler migration, dual-write parity synchronization' },
  ];

  const throughputOptions = [
    { id: '100k', label: '100K RPS', tier: 'High-Concurrency Tier' },
    { id: '1m', label: '1M+ RPS', tier: 'Hyperscale Cluster' },
    { id: '10m', label: '10M+ RPS', tier: 'Tier-1 Sovereign Core' },
  ];

  const securityOptions = [
    { id: 'soc2', label: 'SOC2 Type II & ISO 27001', badge: 'Commercial Enterprise' },
    { id: 'pqc', label: 'Post-Quantum & Zero-Trust', badge: 'Ultra-Defensive' },
    { id: 'pci', label: 'PCI-DSS L1 & Bank Grade', badge: 'Financial Infrastructure' },
  ];

  const cloudOptions = [
    { id: 'multicloud', label: 'Multi-Cloud Active-Active', note: 'AWS + GCP Peered' },
    { id: 'aws', label: 'AWS Enterprise GovCloud', note: 'Dedicated VPCs' },
    { id: 'sovereign', label: 'Private Sovereign Datacenter', note: 'Air-Gapped Bare Metal' },
  ];

  // Dynamic calculations based on state
  const getTimeline = () => {
    if (throughput === '10m') return '12 – 16 Weeks';
    if (throughput === '1m') return '8 – 12 Weeks';
    return '6 – 8 Weeks';
  };

  const getSLA = () => {
    if (cloudProvider === 'multicloud' || throughput === '10m') return '99.999%';
    return '99.99%';
  };

  const getLatency = () => {
    if (domain === 'fintech') return '< 0.8ms P99';
    if (domain === 'ai') return '< 45ms TTFT';
    return '< 12ms P99';
  };

  return (
    <section id="configurator" className="relative py-28 bg-[#050609] border-t border-gold-500/10 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-xs font-mono text-gold-300">
            <Sliders className="w-3.5 h-3.5 text-gold-400" />
            <span>INTERACTIVE SYSTEM DESIGNER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Configure Your <span className="text-gold-gradient">Enterprise Blueprint</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Select your architecture parameters to simulate the optimal Digithect engineering blueprint, targeted latency tolerances, and delivery sprint timeline.
          </p>
        </div>

        {/* The Interactive Configurator Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 space-y-8 bg-[#0b0e15]/80 p-6 sm:p-8 rounded-3xl border border-gold-500/20 backdrop-blur-xl">
            
            {/* Step 1: System Domain */}
            <div>
              <label className="block text-xs font-mono text-gold-400 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>01. Primary System Domain</span>
                <span className="text-slate-500">Required</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {domainOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setDomain(opt.id)}
                    className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                      domain === opt.id
                        ? 'bg-gold-500/15 border-gold-400 shadow-[0_0_15px_rgba(212,167,55,0.2)]'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="font-semibold text-sm text-white">{opt.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-snug">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Concurrency & Throughput */}
            <div>
              <label className="block text-xs font-mono text-gold-400 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>02. Throughput & Concurrency Envelope</span>
                <span className="text-slate-500">Sizing</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {throughputOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setThroughput(opt.id)}
                    className={`p-3 rounded-xl text-center border transition-all duration-200 ${
                      throughput === opt.id
                        ? 'bg-gold-500/15 border-gold-400 shadow-[0_0_15px_rgba(212,167,55,0.2)]'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="font-bold text-sm sm:text-base text-white">{opt.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{opt.tier}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Security & Cryptographic Standard */}
            <div>
              <label className="block text-xs font-mono text-gold-400 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>03. Security & Compliance Standard</span>
                <span className="text-slate-500">Hardening</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {securityOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSecurityTier(opt.id)}
                    className={`p-3 rounded-xl text-left sm:text-center border transition-all duration-200 ${
                      securityTier === opt.id
                        ? 'bg-gold-500/15 border-gold-400 shadow-[0_0_15px_rgba(212,167,55,0.2)]'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{opt.label}</div>
                    <div className="text-[10px] font-mono text-gold-400/90 mt-1">{opt.badge}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Cloud Topology */}
            <div>
              <label className="block text-xs font-mono text-gold-400 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>04. Deployment Environment</span>
                <span className="text-slate-500">Topology</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {cloudOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setCloudProvider(opt.id)}
                    className={`p-3 rounded-xl text-left border transition-all duration-200 ${
                      cloudProvider === opt.id
                        ? 'bg-gold-500/15 border-gold-400 shadow-[0_0_15px_rgba(212,167,55,0.2)]'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{opt.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{opt.note}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Blueprint Output / Architectural Specification Card (Right) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#131722] via-[#0d1017] to-[#07090f] border-2 border-gold-500/40 shadow-2xl relative overflow-hidden">
              
              {/* Gold Top Light Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

              <div className="flex items-center justify-between pb-4 border-b border-gold-500/20">
                <div>
                  <div className="text-[10px] font-mono text-gold-400 tracking-widest">BLUEPRINT SPEC ID</div>
                  <div className="text-base font-bold font-mono text-white">DGT-{domain.toUpperCase()}-{throughput.toUpperCase()}</div>
                </div>
                <div className="px-2.5 py-1 rounded bg-gold-500/20 text-gold-300 text-[10px] font-mono font-bold">
                  VERIFIED DESIGN
                </div>
              </div>

              {/* Dynamic Blueprint Summary */}
              <div className="space-y-4 py-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Target Availability SLA:</span>
                  <span className="font-mono font-bold text-emerald-400">{getSLA()} (Zero-Downtime)</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">P99 Latency Objective:</span>
                  <span className="font-mono font-bold text-gold-300">{getLatency()}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Hardening Protocol:</span>
                  <span className="font-mono text-white text-[11px]">
                    {securityTier === 'pqc' ? 'NIST Post-Quantum Cryptography' : securityTier.toUpperCase()}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Estimated Construction:</span>
                  <span className="font-mono font-bold text-white">{getTimeline()}</span>
                </div>
              </div>

              {/* Architectural Engine Composition */}
              <div className="p-4 rounded-xl bg-black/50 border border-slate-800 space-y-2 text-xs">
                <div className="font-mono text-gold-400 text-[11px] font-semibold flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5" /> RECOMMENDED ENGINE STACK:
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {domain === 'fintech' && "Go & Rust low-latency trading core, Apache Kafka streaming, PostgreSQL multi-master Raft consensus, Hardware Security Module (HSM)."}
                  {domain === 'ai' && "PyTorch inference clusters, Qdrant vector index, LangGraph agentic orchestrators, air-gapped private weights."}
                  {domain === 'cloud' && "Kubernetes GitOps, Envoy service mesh, Terraform IaC, distributed Redis cache, Prometheus/Grafana tracing."}
                  {domain === 'modernize' && "Strangler-fig proxy router, dual-write CDC sync engine, automated regression parity testing harness."}
                </p>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-4 rounded-xl font-bold text-black text-sm bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500 hover:brightness-110 shadow-xl shadow-gold-500/25 transition-all flex items-center justify-center gap-2"
                >
                  Request Detailed Architectural Proposal
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[10px] text-slate-500 mt-2 font-mono">
                  Includes NDA, topographical audit roadmap, and fixed engineering milestones.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

