import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2, Shield, Layers, GitBranch, ArrowRight, Activity } from 'lucide-react';
import { blueprintPhases } from '../data/servicesData';

export default function BlueprintProcess({ onOpenConsultation }) {
  const [selectedPhase, setSelectedPhase] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-[#07090e] border-t border-gold-500/10 overflow-hidden">
      <div className="absolute inset-0 architect-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-xs font-mono text-gold-300">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>THE DIGITHECT METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            How We Build <span className="text-gold-gradient">Digital Monuments</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Software architecture is not guesswork—it is rigorous structural science. From topographical audit to sovereign deployment, our 4-phase lifecycle guarantees predictable outcomes.
          </p>
        </div>

        {/* Phase Stepper Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {blueprintPhases.map((phase, idx) => {
            const isCurrent = selectedPhase === idx;

            return (
              <button
                key={phase.phase}
                onClick={() => setSelectedPhase(idx)}
                className={`p-6 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden ${
                  isCurrent
                    ? 'bg-[#141824] border-gold-400 shadow-[0_0_25px_rgba(212,167,55,0.2)]'
                    : 'bg-[#0d1017] border-slate-800/80 hover:border-slate-700 text-slate-400'
                }`}
              >
                {/* Gold accent bar on top if active */}
                {isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-amber-200" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-bold font-mono ${isCurrent ? 'text-gold-300' : 'text-slate-600'}`}>
                    PHASE {phase.phase}
                  </span>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                  )}
                </div>

                <div className="font-bold text-sm sm:text-base text-white line-clamp-1">
                  {phase.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Phase Deep-Dive Detail View */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121622] via-[#0d1017] to-[#07090e] border border-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono text-gold-400 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-300">STAGE {blueprintPhases[selectedPhase].phase}</span>
                <span>SYSTEM CONSTRUCT PROTOCOL</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {blueprintPhases[selectedPhase].name}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {blueprintPhases[selectedPhase].desc}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  Key Phase Deliverables & Artefacts:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {blueprintPhases[selectedPhase].deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200 p-2.5 rounded-xl bg-black/40 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Blueprint Diagram / Visual HUD */}
            <div className="lg:col-span-5 bg-black/70 p-6 rounded-2xl border border-gold-500/20 relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-gold-400">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  VERIFICATION PIPELINE
                </span>
                <span className="text-slate-500">GATE 0{selectedPhase + 1}</span>
              </div>

              <div className="space-y-4 py-4 text-xs font-mono">
                <div className="flex justify-between items-center p-2 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">Formal Verification:</span>
                  <span className="text-emerald-400">100% Deterministic</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">Load Simulation:</span>
                  <span className="text-gold-300">10x Projected Peak</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">Chaos Engineering:</span>
                  <span className="text-white">Region Kill Tests Passed</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">Executive Warranty:</span>
                  <span className="text-gold-400 font-bold">Included 12-Month SLA</span>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full mt-2 py-3 rounded-xl font-semibold text-black text-xs bg-gradient-to-r from-gold-300 to-amber-500 hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                Inquire About Phase {blueprintPhases[selectedPhase].phase} Consultation
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

