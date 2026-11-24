import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Globe, 
  ExternalLink, 
  FileCode2, 
  Activity, 
  Lock, 
  Terminal, 
  CheckCircle2, 
  ArrowUpRight, 
  PlusCircle,
  Clock,
  Sparkles
} from 'lucide-react';

const projectSpaces = [
  {
    id: 'space-01',
    slotNumber: '01',
    slotLabel: 'SPACE 01 // FINTECH CORE',
    status: 'DEPLOYED // PRODUCTION SLA',
    statusColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    title: 'Apex Global Clearing & Settlement Core',
    category: 'fintech',
    categoryLabel: 'Fintech & Ledgers',
    codename: 'PROJECT // APEX-SETTLE',
    summary: 'Sub-millisecond high-frequency clearing engine with zero-knowledge cryptographic verification, fault-tolerant Raft consensus, and hardware-signed transaction settlement.',
    metrics: [
      { label: 'P99 LATENCY', val: '< 0.58ms', detail: 'Hardware timestamped' },
      { label: 'THROUGHPUT', val: '1.8M TPS', detail: 'Peak sustained batch' },
      { label: 'VERIFICATION', val: 'ZK-SNARK', detail: 'Zero knowledge privacy' },
      { label: 'AVAILABILITY', val: '99.999%', detail: 'Zero downtime upgrade' }
    ],
    stack: ['Rust', 'C++20', 'Raft Consensus', 'gRPC', 'ZK-Proofs', 'DPDK', 'Hardware HSM'],
    highlights: [
      'Deterministic state machine replication across 7 geo-distributed validator nodes',
      'Kernel-bypass DPDK network stack achieving sub-microsecond wire packet ingress',
      'Dual-entry immutable ledger with real-time automated anti-money laundering (AML)',
      'Bank-grade PCI-DSS Level 1 & SOC2 Type II cryptographic compliance audit passed'
    ],
    canvasType: 'fintech'
  },
  {
    id: 'space-02',
    slotNumber: '02',
    slotLabel: 'SPACE 02 // PRIVATE AI',
    status: 'AIR-GAPPED // ACTIVE CLUSTER',
    statusColor: 'text-gold-400 border-gold-500/30 bg-gold-500/10',
    title: 'Synapse Sovereign Neural Reasoning Mesh',
    category: 'ai',
    categoryLabel: 'Autonomous AI',
    codename: 'PROJECT // SYNAPSE-CORE',
    summary: 'Private, air-gapped neural engine executing domain-specific generative reasoning and vector retrieval across 140M enterprise documents with mathematical zero data leakage guarantee.',
    metrics: [
      { label: 'VECTOR EMBED', val: '140M Docs', detail: 'Sub-12ms HNSW index' },
      { label: 'INFERENCE', val: '240 Tok/s', detail: 'Dedicated H100 cluster' },
      { label: 'LEAKAGE SLA', val: '0.00% Zero', detail: 'Hardware air-gapped' },
      { label: 'PRECISION', val: '99.4%', detail: 'Domain fine-tuned' }
    ],
    stack: ['PyTorch', 'vLLM', 'Qdrant Distributed', 'Triton', 'CUDA 12', 'Ray Core', 'NVIDIA H100'],
    highlights: [
      'Air-gapped on-premise deployment guaranteeing corporate weights never touch third-party clouds',
      'Sub-12ms vector similarity lookup utilizing custom quantization and HNSW index graphs',
      'Autonomous multi-agent verification loop cross-checking factual accuracy with mathematical proofs',
      'Role-based granular cryptographic token governance preventing internal privilege escalation'
    ],
    canvasType: 'ai'
  },
  {
    id: 'space-03',
    slotNumber: '03',
    slotLabel: 'SPACE 03 // CLOUD FABRIC',
    status: 'MULTI-REGION // HIGH CONCURRENCY',
    statusColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    title: 'Helios Planet-Scale Distributed Backbone',
    category: 'cloud',
    categoryLabel: 'Cloud & Distributed',
    codename: 'PROJECT // HELIOS-MESH',
    summary: 'Planet-scale sovereign cloud fabric with active-active geo-routing across 14 enterprise regions, orchestrating seamless strangler-fig migration of monolithic legacy banking cores.',
    metrics: [
      { label: 'PEAK TRAFFIC', val: '42M RPS', detail: 'Edge filtered & routed' },
      { label: 'GLOBAL REGIONS', val: '14 Active', detail: 'Active-Active meshed' },
      { label: 'CONVERGENCE', val: '< 2.4s', detail: 'Autonomous failover' },
      { label: 'COST REDUCTION', val: '-46%', detail: 'Optimized bin-packing' }
    ],
    stack: ['Go', 'Kubernetes', 'Envoy / Istio', 'eBPF', 'Kafka Cluster', 'Terraform', 'Multi-Cloud'],
    highlights: [
      'BGP Anycast routing mesh with eBPF-accelerated packet inspection and zero-hop proxying',
      'Autonomous self-healing cluster recovery restoring failed nodes in under 2.4 seconds',
      'Zero-downtime strangler-fig transformation migrating legacy mainframe workloads live',
      'Cross-cloud failover redundancy spanning AWS, GCP, and bare-metal European data centers'
    ],
    canvasType: 'cloud'
  },
  {
    id: 'space-04',
    slotNumber: '04',
    slotLabel: 'SPACE 04 // ZERO-TRUST DEFENSE',
    status: 'SECURITY CLEARANCE // POST-QUANTUM',
    statusColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    title: 'Fortress Zero-Trust Cryptographic Mesh',
    category: 'security',
    categoryLabel: 'Cybersecurity',
    codename: 'PROJECT // FORTRESS-DEFENSE',
    summary: 'Post-quantum cryptographic mesh providing continuous identity verification, mutual TLS microsegmentation, and automated red-team defense against advanced nation-state vectors.',
    metrics: [
      { label: 'SECURITY RECORD', val: '0 Breaches', detail: 'Continuous pentesting' },
      { label: 'PQ READINESS', val: 'Kyber-1024', detail: 'NIST standardized' },
      { label: 'REVOCATION', val: '< 100ms', detail: 'Global token invalidation' },
      { label: 'COMPLIANCE', val: 'ISO 27001', detail: 'SOC2 & FedRAMP Ready' }
    ],
    stack: ['Rust', 'Kyber-1024', 'Dilithium', 'SPIFFE / SPIRE', 'HashiCorp Vault', 'mTLS', 'eBPF Shield'],
    highlights: [
      'Post-quantum ML-KEM (Kyber) and ML-DSA (Dilithium) cryptographic algorithms embedded in wire transport',
      'Microsegmentation isolating every database transaction and inter-service call to ephemeral credentials',
      'Automated synthetic red-team bot injection continuously validating defense boundaries 24/7/365',
      'Hardware secure enclave key attestation with tamper-evident cryptographic event auditing'
    ],
    canvasType: 'security'
  }
];

export default function ProjectsPage({ onOpenConsultation }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedSpace, setExpandedSpace] = useState('space-01');
  const canvasRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const filteredSpaces = activeFilter === 'all' 
    ? projectSpaces 
    : projectSpaces.filter(s => s.category === activeFilter);

  // Canvas visual simulations for the 4 spaces
  useEffect(() => {
    let animId;
    let t = 0;

    const render = () => {
      t += 0.018;

      canvasRefs.forEach((ref, idx) => {
        const cvs = ref.current;
        if (!cvs) return;

        if (!cvs.width || cvs.width !== cvs.offsetWidth) {
          cvs.width = cvs.offsetWidth || 340;
          cvs.height = cvs.offsetHeight || 190;
        }

        const ctx = cvs.getContext('2d');
        const w = cvs.width;
        const h = cvs.height;

        ctx.fillStyle = '#06080e';
        ctx.fillRect(0, 0, w, h);

        // Subtle background grid
        ctx.strokeStyle = 'rgba(212, 167, 55, 0.08)';
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 25) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        for (let y = 0; y < h; y += 25) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }

        if (idx === 0) {
          // Space 1: Candlestick / Settlement stream
          ctx.strokeStyle = '#D4A737';
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let i = 0; i < 18; i++) {
            const x = (i + 1) * (w / 20);
            const y = h * 0.5 + Math.sin(t * 1.8 + i * 0.6) * 32;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);

            // Candle bars
            ctx.fillStyle = i % 2 === 0 ? 'rgba(223, 189, 103, 0.4)' : 'rgba(16, 185, 129, 0.4)';
            const barH = 12 + Math.abs(Math.sin(t + i)) * 26;
            ctx.fillRect(x - 3, y - barH / 2, 6, barH);
          }
          ctx.stroke();

          // Live ticker
          ctx.fillStyle = '#DFBD67';
          ctx.font = '9px monospace';
          ctx.fillText(`P99: 0.574ms // CONSENSUS: STABLE`, 12, h - 14);
        } else if (idx === 1) {
          // Space 2: AI Neural Cluster / Vector Mesh
          const nodes = 10;
          const pts = [];
          for (let n = 0; n < nodes; n++) {
            const angle = (n / nodes) * Math.PI * 2 + t * 0.4;
            const radius = 45 + Math.sin(t * 1.2 + n) * 15;
            pts.push({
              x: w / 2 + Math.cos(angle) * radius * 1.5,
              y: h / 2 + Math.sin(angle) * radius * 0.8
            });
          }

          ctx.strokeStyle = 'rgba(212, 167, 55, 0.3)';
          ctx.lineWidth = 1;
          for (let a = 0; a < pts.length; a++) {
            for (let b = a + 1; b < pts.length; b++) {
              if (Math.hypot(pts[a].x - pts[b].x, pts[a].y - pts[b].y) < 95) {
                ctx.beginPath();
                ctx.moveTo(pts[a].x, pts[a].y);
                ctx.lineTo(pts[b].x, pts[b].y);
                ctx.stroke();
              }
            }
          }

          pts.forEach((p, i) => {
            ctx.fillStyle = i % 3 === 0 ? '#F9E8A2' : '#DFBD67';
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fill();
          });

          ctx.fillStyle = '#DFBD67';
          ctx.font = '9px monospace';
          ctx.fillText(`AIR-GAPPED // 140M VECTORS`, 12, h - 14);
        } else if (idx === 2) {
          // Space 3: Cloud multi-region pulse
          const regions = [
            { x: w * 0.2, y: h * 0.4, label: 'US-EAST' },
            { x: w * 0.5, y: h * 0.35, label: 'EU-WEST' },
            { x: w * 0.8, y: h * 0.55, label: 'AP-SOUTH' }
          ];

          ctx.strokeStyle = 'rgba(34, 211, 238, 0.4)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(regions[0].x, regions[0].y);
          ctx.lineTo(regions[1].x, regions[1].y);
          ctx.lineTo(regions[2].x, regions[2].y);
          ctx.lineTo(regions[0].x, regions[0].y);
          ctx.stroke();

          regions.forEach((r, i) => {
            const pulse = (Math.sin(t * 3 + i * 1.5) + 1) * 6;
            ctx.strokeStyle = 'rgba(34, 211, 238, 0.6)';
            ctx.beginPath();
            ctx.arc(r.x, r.y, 8 + pulse, 0, Math.PI * 2);
            ctx.stroke();

            ctx.fillStyle = '#22d3ee';
            ctx.beginPath();
            ctx.arc(r.x, r.y, 4, 0, Math.PI * 2);
            ctx.fill();
          });

          ctx.fillStyle = '#22d3ee';
          ctx.font = '9px monospace';
          ctx.fillText(`ACTIVE-ACTIVE // 42M RPS ROUTED`, 12, h - 14);
        } else if (idx === 3) {
          // Space 4: Security Shield & Lattice
          const cx = w / 2;
          const cy = h / 2 - 4;
          const shieldRadius = 40;

          ctx.save();
          ctx.strokeStyle = 'rgba(192, 132, 252, 0.7)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, shieldRadius, 0, Math.PI * 2);
          ctx.stroke();

          // Rotating scan line
          const scanAngle = t * 2.2;
          ctx.strokeStyle = 'rgba(216, 180, 254, 0.8)';
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + Math.cos(scanAngle) * shieldRadius, cy + Math.sin(scanAngle) * shieldRadius);
          ctx.stroke();

          ctx.restore();

          ctx.fillStyle = '#c084fc';
          ctx.font = '9px monospace';
          ctx.fillText(`POST-QUANTUM KYBER-1024 // 0 BREACH`, 12, h - 14);
        }
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#030406] text-slate-100">
      
      {/* Background Ambience */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-gold-500/10 via-gold-500/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Page Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-[11px] font-mono tracking-widest text-gold-300 uppercase mb-4">
            <Terminal className="w-3.5 h-3.5 text-gold-400" />
            <span>PORTFOLIO DIRECTORY // 4 ENTERPRISE SPACES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white mb-4">
            Projects & Sovereign <span className="text-gold-gradient">Architecture Spaces</span>
          </h1>
          <p className="max-w-3xl text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            Here are the dedicated project spaces allocated for our sovereign enterprise engagements. Each space represents a battle-tested distributed architecture, private AI cluster, or post-quantum defense infrastructure engineered by Digithect.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-900">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2 hidden sm:inline">Filter Spaces:</span>
            {[
              { id: 'all', label: 'All 4 Spaces' },
              { id: 'fintech', label: 'Fintech & Clearing' },
              { id: 'ai', label: 'Autonomous AI' },
              { id: 'cloud', label: 'Distributed Cloud' },
              { id: 'security', label: 'Cybersecurity' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === f.id
                    ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:text-white hover:border-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* The 4 Project Spaces Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSpaces.map((space, idx) => {
            const isExpanded = expandedSpace === space.id;
            return (
              <div 
                key={space.id}
                className="group relative rounded-2xl bg-[#07090e]/90 border border-slate-800/90 hover:border-gold-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] hover:shadow-gold-500/5"
              >
                {/* Architectural Corner Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold-500/40 rounded-tl-sm pointer-events-none" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-500/40 rounded-tr-sm pointer-events-none" />

                {/* Top Bar: Space Identifier & Status */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800/70">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20">
                        {space.slotLabel}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 tracking-wider">
                        {space.codename}
                      </span>
                    </div>

                    <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${space.statusColor}`}>
                      {space.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-gold-200 transition-colors mb-3">
                    {space.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                    {space.summary}
                  </p>

                  {/* Architecture Visualization Canvas */}
                  <div className="relative mb-6 rounded-xl overflow-hidden border border-slate-800/90 bg-[#05070c]">
                    <div className="absolute top-2 left-3 z-10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[10px] font-mono text-slate-400">LIVE SYSTEM TELEMETRY</span>
                    </div>
                    <canvas 
                      ref={canvasRefs[idx]} 
                      className="w-full h-44 sm:h-48 block"
                    />
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                    {space.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{m.label}</div>
                        <div className="text-sm sm:text-base font-bold font-mono text-gold-300 mt-0.5">{m.val}</div>
                        <div className="text-[9px] font-sans text-slate-500 mt-0.5">{m.detail}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights / Architectural Deliverables */}
                  <div className="mb-6 space-y-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                      <Layers className="w-3.5 h-3.5 text-gold-400" />
                      <span>Architectural Deliverables:</span>
                    </div>
                    {space.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400/80 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {space.stack.map((item, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2.5 py-1 rounded bg-black/50 border border-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SPACE VERIFIED // READY FOR AUDIT</span>
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-bold font-mono tracking-wider transition-all"
                  >
                    <span>COMMISSION SPEC</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Space 05: Reserve an Enterprise Space Banner */}
        <div className="mt-14 relative rounded-2xl bg-gradient-to-r from-gold-500/10 via-[#0a0d14] to-gold-500/5 border border-gold-500/30 p-8 sm:p-12 overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-gold-300 uppercase mb-2">
                <PlusCircle className="w-3.5 h-3.5 text-gold-400" />
                <span>EXPANSION // SPACE 05 ALLOCATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2">
                Need a Custom Project Space for Your Enterprise?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Our Principal Architects allocate dedicated project spaces for bespoke distributed platforms, private AI infrastructure, and mission-critical ledger transformations. Reserve your space for the upcoming quarter.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="flex-shrink-0 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F9E8A2] via-[#E2BB58] to-[#C99726] text-black font-bold text-xs sm:text-sm tracking-wider shadow-lg hover:shadow-gold-500/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>RESERVE PROJECT SPACE</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
