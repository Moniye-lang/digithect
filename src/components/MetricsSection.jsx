import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, Lock, Quote } from 'lucide-react';
import { clientMetrics } from '../data/servicesData';

export default function MetricsSection() {
  return (
    <section className="relative py-24 bg-[#080b12] border-t border-gold-500/15 overflow-hidden">
      <div className="absolute inset-0 architect-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {clientMetrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-[#111520] to-[#0a0d14] border border-gold-500/20 hover:border-gold-400/50 transition-all text-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-2 group-hover:text-gold-200 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs font-mono font-bold text-gold-400 uppercase tracking-wider mb-2">
                {metric.label}
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                {metric.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Executive Sovereign Statement */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#121622] via-[#0d1017] to-[#121622] border-2 border-gold-500/30 text-center max-w-4xl mx-auto shadow-2xl">
          <Quote className="w-12 h-12 text-gold-400/30 mx-auto mb-6" />
          
          <blockquote className="text-lg sm:text-2xl font-display font-medium text-slate-200 leading-relaxed italic mb-8">
            "In computing, architecture is destiny. When a system is engineered with structural discipline and mathematical elegance from the foundation, it does not fail under pressure—it ascends."
          </blockquote>

          <div className="flex flex-col items-center">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-4" />
            <div className="text-sm font-bold font-mono tracking-widest text-gold-300">
              DIGITHECT SOFTWARE SERVICES
            </div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">
              Office of the Principal Systems Architect
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

