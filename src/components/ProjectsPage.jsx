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
  CheckCircle2, 
  ArrowUpRight, 
  PlusCircle,
  Clock,
  Sparkles
} from 'lucide-react';

const projectSpaces = [
  {
    id: 'project-fintech',
    categoryBadge: 'Fintech & Payments',
    status: 'Live in Production',
    statusColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    title: 'Digital Banking & Instant Payment Platform',
    category: 'fintech',
    categoryLabel: 'Fintech & Payments',
    summary: 'A secure digital banking and payment system built for financial institutions. Enables customers to transfer funds, pay bills, and view accounts in real-time with zero downtime and automatic fraud protection.',
    metrics: [
      { label: 'TRANSFER SPEED', val: 'Under 1 Sec', detail: 'Instant bank transfer' },
      { label: 'SECURITY', val: 'Bank-Grade', detail: '256-bit encryption' },
      { label: 'UPTIME', val: '24/7 Active', detail: 'Zero service outages' },
      { label: 'FRAUD SHIELD', val: 'Automated', detail: 'Blocks suspicious charges' }
    ],
    stack: ['Web & Mobile Apps', 'Payment Gateways', 'Instant Settlement', 'Fraud Shield', 'Cloud Vault'],
    highlights: [
      'Clean web portal and mobile app allowing customers to send money and pay bills in seconds',
      'Automated fraud detection that flags and stops unauthorized transactions instantly',
      'Direct integration with major banks, credit cards, and automated digital receipts',
      'Bank-grade data encryption ensuring client financial records are 100% protected'
    ],
    canvasType: 'fintech'
  },
  {
    id: 'project-ai',
    categoryBadge: 'AI & Smart Automation',
    status: 'Active Deployment',
    statusColor: 'text-gold-400 border-gold-500/30 bg-gold-500/10',
    title: 'Intelligent AI Customer Assistant & Workflow Automation',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    summary: 'A smart, private AI assistant that answers customer inquiries 24/7, organizes incoming documents, and automates repetitive administrative workflows without leaking private company data.',
    metrics: [
      { label: 'RESPONSE TIME', val: 'Instant', detail: '24/7 automated support' },
      { label: 'ACCURACY', val: 'Verified', detail: 'Human-checked answers' },
      { label: 'DATA PRIVACY', val: '100% Private', detail: 'Never shared externally' },
      { label: 'TIME SAVED', val: '40+ Hrs/Wk', detail: 'Eliminates busywork' }
    ],
    stack: ['Private AI Chatbot', 'Smart Search', 'Document Processing', 'Automated Ticketing', 'Encrypted Cloud'],
    highlights: [
      'Customer service chatbot that resolves common inquiries automatically and instantly',
      'Automated document extraction that pulls data from invoices, forms, and receipts',
      'Internal knowledge search letting employees find company answers in plain English',
      'Strict privacy boundaries ensuring confidential business data remains completely secure'
    ],
    canvasType: 'ai'
  },
  {
    id: 'project-ecommerce',
    categoryBadge: 'E-Commerce & High-Traffic Cloud',
    status: 'Global Scale',
    statusColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    title: 'High-Traffic E-Commerce & Live Inventory Platform',
    category: 'cloud',
    categoryLabel: 'E-Commerce & Cloud',
    summary: 'A high-speed online shopping and warehouse management platform built to handle heavy holiday traffic spikes, manage live product stock across warehouses, and process checkouts without crashing.',
    metrics: [
      { label: 'LOAD SPEED', val: 'Under 1 Sec', detail: 'Fast page loading' },
      { label: 'CHECKOUT', val: '1-Click Pay', detail: 'Apple Pay & cards' },
      { label: 'INVENTORY', val: 'Live Sync', detail: 'All stores & warehouses' },
      { label: 'TRAFFIC SURGE', val: 'Scales Auto', detail: 'Never crashes during sales' }
    ],
    stack: ['High-Speed Storefront', 'Live Inventory Sync', 'Apple Pay & Google Pay', 'Auto-Scaling Cloud'],
    highlights: [
      'High-converting checkout system supporting credit cards, Apple Pay, Google Pay, and PayPal',
      'Real-time inventory synchronization across multiple physical stores and online warehouses',
      'Auto-scaling cloud infrastructure that effortlessly handles viral sales and holiday rushes',
      'Intuitive admin dashboard for managing orders, tracking shipments, and viewing sales reports'
    ],
    canvasType: 'cloud'
  },
  {
    id: 'project-healthcare',
    categoryBadge: 'Healthcare & Secure Portals',
    status: 'HIPAA Compliant',
    statusColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    title: 'Secure Patient Medical Portal & Records Vault',
    category: 'security',
    categoryLabel: 'Healthcare Software',
    summary: 'A patient-friendly web and mobile portal that lets patients schedule appointments, view test results securely, and message their doctors while strictly protecting sensitive medical privacy.',
    metrics: [
      { label: 'PRIVACY', val: 'Compliant', detail: 'Full healthcare privacy' },
      { label: 'MOBILE READY', val: 'iOS & Android', detail: 'Easy patient access' },
      { label: 'BACKUPS', val: 'Daily Saves', detail: 'Encrypted cloud copies' },
      { label: 'DOCTOR COMMS', val: 'Encrypted', detail: 'Direct secure chat' }
    ],
    stack: ['Patient Portal App', 'Doctor Messaging', 'Online Booking', 'Encrypted Health Vault', 'Cloud Backups'],
    highlights: [
      'Self-service online appointment booking with automated SMS and email appointment reminders',
      'Secure medical records portal where patients can view lab reports and prescription history',
      'Private encrypted messaging connecting patients directly with their healthcare providers',
      'Automated daily encrypted cloud backups ensuring patient records are never lost'
    ],
    canvasType: 'security'
  }
];

export default function ProjectsPage({ onOpenConsultation }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const canvasRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const filteredSpaces = activeFilter === 'all' 
    ? projectSpaces 
    : projectSpaces.filter(s => s.category === activeFilter);

  // Canvas visual simulations for the 4 spaces
  useEffect(() => {
    let animId;
    let t = 0;

    const render = () => {
      t += 0.03;

      canvasRefs.forEach((ref, idx) => {
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const w = (canvas.width = canvas.offsetWidth);
        const h = (canvas.height = canvas.offsetHeight);

        ctx.fillStyle = '#05070c';
        ctx.fillRect(0, 0, w, h);

        // Subtle background grid
        ctx.strokeStyle = 'rgba(212, 167, 55, 0.05)';
        ctx.lineWidth = 1;
        const gridSize = 24;
        for (let x = 0; x < w; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        for (let y = 0; y < h; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }

        // Draw animated wave telemetry
        ctx.beginPath();
        ctx.lineWidth = 2;
        const colors = ['#10b981', '#f59e0b', '#06b6d4', '#a855f7'];
        ctx.strokeStyle = colors[idx % colors.length];

        for (let x = 0; x < w; x += 4) {
          const freq = 0.02 + idx * 0.005;
          const y = h / 2 + Math.sin(x * freq + t + idx) * (h * 0.22) + Math.cos(x * 0.04 - t) * 8;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Pulsing data node
        const dotX = (Math.sin(t * 0.5) * 0.5 + 0.5) * (w - 40) + 20;
        const dotY = h / 2 + Math.sin(dotX * (0.02 + idx * 0.005) + t + idx) * (h * 0.22);
        ctx.fillStyle = colors[idx % colors.length];
        ctx.beginPath();
        ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [filteredSpaces]);

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#030406] text-slate-100">
      
      {/* Background Ambience */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-gold-500/10 via-gold-500/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Page Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-medium text-gold-300 mb-4">
            <Layers className="w-3.5 h-3.5 text-gold-400" />
            <span>Featured Client Projects & Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            Real Software Built for <span className="text-gold-gradient">Growing Businesses</span>
          </h1>
          <p className="max-w-3xl text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            Here are real-world software platforms we have engineered for our clients—from high-volume payment platforms and private AI helpers to global e-commerce and secure healthcare portals.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-900">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">Filter By Industry:</span>
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fintech', label: 'Fintech & Payments' },
              { id: 'ai', label: 'AI & Automation' },
              { id: 'cloud', label: 'E-Commerce & Cloud' },
              { id: 'security', label: 'Healthcare & Security' }
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

        {/* The Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSpaces.map((space, idx) => (
            <div 
              key={space.id}
              className="group relative rounded-2xl bg-[#07090e]/90 border border-slate-800/90 hover:border-gold-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] hover:shadow-gold-500/5"
            >
              {/* Top Bar: Category & Status */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800/70">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gold-500/10 text-gold-300 border border-gold-500/20">
                    {space.categoryBadge}
                  </span>

                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${space.statusColor}`}>
                    {space.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gold-200 transition-colors mb-3">
                  {space.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                  {space.summary}
                </p>

                {/* Architecture Visualization Canvas */}
                <div className="relative mb-6 rounded-xl overflow-hidden border border-slate-800/90 bg-[#05070c]">
                  <div className="absolute top-2 left-3 z-10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs text-slate-400">Live System Monitor</span>
                  </div>
                  <canvas 
                    ref={canvasRefs[idx]} 
                    className="w-full h-44 sm:h-48 block"
                  />
                </div>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                  {space.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">{m.label}</div>
                      <div className="text-sm sm:text-base font-bold text-gold-300 my-0.5">{m.val}</div>
                      <div className="text-[10px] text-slate-500 leading-tight">{m.detail}</div>
                    </div>
                  ))}
                </div>

                {/* Key Deliverables */}
                <div className="mb-6 space-y-2 text-xs text-slate-300">
                  <div className="text-xs font-semibold text-gold-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                    <span>What We Delivered:</span>
                  </div>
                  {space.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-slate-300">
                      <span className="text-gold-400 font-bold">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {space.stack.map((item, sIdx) => (
                    <span key={sIdx} className="px-2.5 py-1 rounded bg-black/50 border border-slate-800 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between">
                <span className="text-xs text-slate-400">Custom Built & Fully Owned by Client</span>
                <button
                  onClick={() => onOpenConsultation && onOpenConsultation(space.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-semibold transition-colors"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 relative rounded-2xl bg-gradient-to-r from-gold-500/10 via-[#0a0d14] to-gold-500/5 border border-gold-500/30 p-8 sm:p-12 overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold-300 uppercase tracking-wider mb-2">
                <PlusCircle className="w-3.5 h-3.5 text-gold-400" />
                <span>Custom Software Development</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Have a Custom Software Project in Mind?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                We design and build custom web applications, mobile apps, payment gateways, and automated AI tools tailored to your exact business workflow. Tell us what you want to build and we'll provide a clear project plan.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation && onOpenConsultation('Custom Project Scope')}
              className="flex-shrink-0 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F9E8A2] via-[#E2BB58] to-[#C99726] text-black font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-gold-500/20 hover:brightness-105 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Discuss Your Project</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
