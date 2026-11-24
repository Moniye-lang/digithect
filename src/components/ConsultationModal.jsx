import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Shield, Sparkles, Building, Mail, User, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: 'Enterprise Cloud & Distributed Systems',
    timeline: 'Within 30–60 Days',
    budget: '$50k – $150k',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4A737', '#FFF1B8', '#E5C163', '#FFFFFF']
      });
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-[#111520] via-[#0b0e15] to-[#07090e] border-2 border-gold-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-gold-500/10 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-gold-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-mono text-gold-300 mb-3">
                  <Shield className="w-3.5 h-3.5" />
                  <span>CONFIDENTIAL ARCHITECTURAL CONSULTATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                  Engage Digithect Software Services
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Connect directly with our Principal Enterprise Architect to review your technical topography and explore structural engagement.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">YOUR NAME *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Alexander Vance"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-slate-800 focus:border-gold-400 focus:outline-none text-white text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">ENTERPRISE / ORGANIZATION *</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Sovereign Global Labs"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-slate-800 focus:border-gold-400 focus:outline-none text-white text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">WORK EMAIL *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexander@company.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-slate-800 focus:border-gold-400 focus:outline-none text-white text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">PRIMARY SERVICE FOCUS</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-slate-800 focus:border-gold-400 focus:outline-none text-white text-sm"
                    >
                      <option>Enterprise Cloud & Distributed Systems</option>
                      <option>Bespoke AI & Autonomous Agent Platforms</option>
                      <option>Fintech Core & Mission-Critical Web3</option>
                      <option>Legacy Core De-Monolithing</option>
                      <option>Zero-Trust Cybersecurity Architecture</option>
                      <option>High-Frequency UI/UX & Design Engineering</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">TARGET TIMELINE</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-slate-800 focus:border-gold-400 focus:outline-none text-white text-sm"
                    >
                      <option>Immediate / Critical Mission (&lt; 30 Days)</option>
                      <option>Within 30–60 Days</option>
                      <option>Next Quarter (Q1/Q2 Planning)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">ESTIMATED CAPITAL ALLOCATION</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-slate-800 focus:border-gold-400 focus:outline-none text-white text-sm"
                    >
                      <option>$50k – $150k</option>
                      <option>$150k – $500k</option>
                      <option>$500k – $2M+ (Tier 1 Core)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">TECHNICAL SPECIFICATIONS / ARCHITECTURAL GOALS</label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe your current tech stack, concurrency challenges, latency expectations, or migration targets..."
                    className="w-full p-4 rounded-xl bg-black/60 border border-slate-800 focus:border-gold-400 focus:outline-none text-white text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl font-bold text-black bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500 hover:brightness-110 shadow-xl shadow-gold-500/25 transition-all text-sm flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Generating Architectural Docket...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Architectural Inquiry
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-slate-500 mt-2 font-mono">
                    Protected by Digithect mutual Non-Disclosure Agreement (NDA). All intellectual property remains sovereign.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 rounded-full bg-gold-500/20 border-2 border-gold-400 mx-auto flex items-center justify-center text-gold-300">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <div className="text-xs font-mono text-gold-400 mb-1">DOCKET #DGT-ARCH-9904 INITIATED</div>
                <h3 className="text-3xl font-extrabold font-display text-white">
                  Inquiry Received
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mt-2">
                  Thank you, <strong className="text-gold-200">{formData.name}</strong> from <strong className="text-white">{formData.company}</strong>. Our Principal Systems Architect is reviewing your requirements and will reach out to <strong className="text-gold-300">{formData.email}</strong> within 12 business hours.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-gold-500/20 max-w-sm mx-auto text-left text-xs font-mono text-slate-300 space-y-1">
                <div>SERVICE: {formData.service}</div>
                <div>TIMELINE: {formData.timeline}</div>
                <div>STATUS: ASSIGNED TO PRINCIPAL ARCHITECT</div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-gold-300 to-amber-500 text-xs shadow-lg"
              >
                Return to Site
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

