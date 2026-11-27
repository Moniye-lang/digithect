import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Key, 
  Send, 
  CheckCircle2, 
  Building2, 
  Lock, 
  Terminal,
  FileCheck,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    enterprise: '',
    email: '',
    phone: '',
    domain: 'Custom Web & Mobile Applications',
    scale: 'Growing Business (10k - 100k Users)',
    timeline: 'Immediate (Within 1-2 Months)',
    scope: '',
    requireNda: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [docketNumber, setDocketNumber] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate cryptographic docket generation
    setTimeout(() => {
      const randomCode = Math.floor(100000 + Math.random() * 900000);
      setDocketNumber(`DG-ARCH-${randomCode}`);
      setIsSubmitting(false);
      setIsSubmitted(true);

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4A737', '#FFF7D6', '#E2BB58', '#FFFFFF']
        });
      }
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      role: '',
      enterprise: '',
      email: '',
      phone: '',
      domain: 'Custom Web & Mobile Applications',
      scale: 'Growing Business (10k - 100k Users)',
      timeline: 'Immediate (Within 1-2 Months)',
      scope: '',
      requireNda: true
    });
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#030406] text-slate-100">
      
      {/* Background Ambience */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-gold-500/10 via-amber-500/5 to-transparent blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Page Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-[11px] font-mono tracking-widest text-gold-300 uppercase mb-4">
            <Terminal className="w-3.5 h-3.5 text-gold-400" />
            <span>DIRECT INQUIRIES & COMMISSIONS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white mb-4">
            Contact Our <span className="text-gold-gradient">Principal Architects</span>
          </h1>
          <p className="max-w-3xl text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            Digithect accepts a limited allocation of high-stakes enterprise commissions each quarter. Submit your technical scope below for confidential evaluation or contact our offices directly.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#07090e]/95 border border-slate-800 p-6 sm:p-10 shadow-2xl">
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold-500/40 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-500/40 rounded-tr-sm pointer-events-none" />

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <h2 className="text-lg sm:text-xl font-bold font-display text-white">
                      Confidential Architectural Docket Form
                    </h2>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 flex items-center gap-1.5">
                      <Lock className="w-3 h-3" />
                      <span>256-BIT ENCRYPTED</span>
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Alistair Vance"
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                        Executive Role / Title *
                      </label>
                      <input
                        type="text"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g. Chief Technology Officer"
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Enterprise & Corporate Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                        Enterprise / Organization *
                      </label>
                      <input
                        type="text"
                        name="enterprise"
                        required
                        value={formData.enterprise}
                        onChange={handleChange}
                        placeholder="e.g. Apex Global Bank"
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. a.vance@apexbank.com"
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Domain */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                        Direct Phone / Signal
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +41 44 211 00 00"
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                        Architectural Domain *
                      </label>
                      <select
                        name="domain"
                        value={formData.domain}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-slate-100 transition-colors"
                      >
                        <option value="Custom Web & Mobile Applications">Custom Web & Mobile Applications</option>
                        <option value="AI Tools & Business Automation">AI Tools & Business Automation</option>
                        <option value="Payment Processing & E-Commerce">Payment Processing & E-Commerce</option>
                        <option value="Cloud Hosting, Security & Maintenance">Cloud Hosting, Security & Maintenance</option>
                        <option value="Custom Software Architecture Consultation">Custom Software Architecture Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Scale & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                        Project Scope / Company Size
                      </label>
                      <select
                        name="scale"
                        value={formData.scale}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-slate-100 transition-colors"
                      >
                        <option value="Startup / New MVP Launch">Startup / New MVP Launch</option>
                        <option value="Growing Business (10k - 100k Users)">Growing Business (10k - 100k Users)</option>
                        <option value="Established Business / High-Volume">Established Business / High-Volume</option>
                        <option value="System Upgrade & Redesign">System Upgrade & Redesign</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                        Deployment Window
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-slate-100 transition-colors"
                      >
                        <option value="Immediate (Within 1-2 Months)">Immediate (Within 1-2 Months)</option>
                        <option value="Next Quarter (2-4 Months)">Next Quarter (2-4 Months)</option>
                        <option value="Planning / Exploration Stage">Planning / Exploration Stage</option>
                        <option value="Urgent Fix or Maintenance">Urgent Fix or Maintenance</option>
                      </select>
                    </div>
                  </div>

                  {/* Scope details */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                      Technical Scope & Architectural Imperatives *
                    </label>
                    <textarea
                      name="scope"
                      rows={4}
                      required
                      value={formData.scope}
                      onChange={handleChange}
                      placeholder="Outline current system bottlenecks, legacy constraints, target latency SLA, security classification, or specific distributed systems requirements..."
                      className="w-full px-4 py-3 rounded-lg bg-black/60 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-slate-100 placeholder:text-slate-600 transition-colors resize-none font-sans"
                    />
                  </div>

                  {/* NDA Checkbox */}
                  <label className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
                    <input
                      type="checkbox"
                      name="requireNda"
                      checked={formData.requireNda}
                      onChange={handleChange}
                      className="mt-0.5 rounded border-slate-700 text-gold-500 focus:ring-0 bg-black cursor-pointer"
                    />
                    <div className="text-xs text-slate-400 leading-relaxed">
                      <strong className="text-slate-200">Require Mutual Non-Disclosure Agreement (M-NDA):</strong> Prior to detailed architecture inspection, Digithect will execute our bilateral cryptographic confidentiality agreement.
                    </div>
                  </label>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F9E8A2] via-[#E2BB58] to-[#C99726] text-black font-bold text-sm tracking-wider shadow-lg hover:shadow-gold-500/30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="font-mono text-xs">TRANSMITTING SECURE DOCKET...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-black" />
                        <span>TRANSMIT ARCHITECTURAL DOCKET</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Submission Confirmation */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto text-gold-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <div className="text-xs font-mono text-gold-400 uppercase tracking-widest mb-1">
                      INQUIRY RECORDED - TEAM ASSIGNED
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                      Inquiry Successfully Received
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong> from <strong className="text-white">{formData.enterprise}</strong>. Your project requirements have been safely received and routed directly to our senior software architects. We will be in touch within 24 hours.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 text-left max-w-md mx-auto font-mono text-xs space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>DOCKET NUMBER:</span>
                      <span className="text-gold-300 font-bold">{docketNumber}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>DOMAIN:</span>
                      <span className="text-slate-200">{formData.domain}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>RESPONSE SLA:</span>
                      <span className="text-emerald-400">&lt; 12 Business Hours</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>CONFIDENTIALITY:</span>
                      <span className="text-slate-200">{formData.requireNda ? 'M-NDA Mandatory' : 'Standard Discretion'}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Direct Channels & Global Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Direct Channel Box */}
            <div className="rounded-2xl bg-[#07090e] border border-slate-800 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-wider">
                <Key className="w-4 h-4 text-gold-400" />
                <span>Encrypted Direct Channels</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 text-gold-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Principal Architect Inbox</div>
                    <div className="text-sm font-mono text-slate-200 font-bold hover:text-gold-300 transition-colors">
                      architect@digithect.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 text-gold-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">PGP Key Fingerprint</div>
                    <div className="text-[11px] font-mono text-slate-300 break-all">
                      E4A2 991F 0B3C 87F2 1D9E 4038 B6F1 8C74
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 text-gold-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Enterprise SLA Response</div>
                    <div className="text-sm text-slate-200 font-medium">
                      Guaranteed review & response within 12 business hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Offices */}
            <div className="rounded-2xl bg-[#07090e] border border-slate-800 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4 text-gold-400" />
                <span>Executive Office Coordinates</span>
              </div>

              <div className="space-y-4 text-xs font-sans">
                <div className="p-3.5 rounded-lg bg-black/40 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">Zurich (Headquarters)</div>
                    <div className="text-slate-400 text-[11px]">Bahnhofstrasse Financial District</div>
                  </div>
                  <span className="font-mono text-[10px] text-gold-400/90">CET Timezone</span>
                </div>

                <div className="p-3.5 rounded-lg bg-black/40 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">London Engineering Hub</div>
                    <div className="text-slate-400 text-[11px]">Mayfair Engineering House</div>
                  </div>
                  <span className="font-mono text-[10px] text-gold-400/90">GMT Timezone</span>
                </div>

                <div className="p-3.5 rounded-lg bg-black/40 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">New York Cloud Directorate</div>
                    <div className="text-slate-400 text-[11px]">Wall Street Tower Suite</div>
                  </div>
                  <span className="font-mono text-[10px] text-gold-400/90">EST Timezone</span>
                </div>

                <div className="p-3.5 rounded-lg bg-black/40 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">Singapore AI Gateway</div>
                    <div className="text-slate-400 text-[11px]">Marina Bay Financial Center</div>
                  </div>
                  <span className="font-mono text-[10px] text-gold-400/90">SGT Timezone</span>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-4 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                <strong className="text-amber-300">Critical Migration or Outage?</strong> Existing enterprise clients with active SLAs may dial their dedicated emergency red phone number for immediate bridge escalation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
