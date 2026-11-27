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
  Sparkles,
  CheckCircle2,
  HeartHandshake,
  Clock,
  Code2
} from 'lucide-react';

export default function AboutPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#030406] text-slate-100">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-gold-500/10 via-amber-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-medium text-gold-300 mb-4">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>About Digithect Software</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Software Built with <span className="text-gold-gradient">Care & Craftsmanship</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            We help ambitious businesses build custom software that works reliably, looks beautiful, and solves real problems. No confusing technical jargon—just great software delivered by people who care.
          </p>
        </div>

        {/* Three Core Pillars */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase">Our Core Philosophy</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Three Principles Behind Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#07090e] border border-slate-800/80 hover:border-gold-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6 text-gold-400" />
              </div>
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider block mb-1">Reliability</span>
              <h3 className="text-xl font-bold text-white mb-3">Rock-Solid Stability</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Software that never crashes, loses customer data, or slows down during busy sales days. We build on battle-tested cloud technology so your business runs smoothly 24/7.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#07090e] border border-slate-800/80 hover:border-gold-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6 text-gold-400" />
              </div>
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider block mb-1">Simplicity</span>
              <h3 className="text-xl font-bold text-white mb-3">Easy & Intuitive to Use</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Clean, clear interfaces that your team and customers can use without needing manuals or training sessions. Every screen is designed for speed, clarity, and ease of use.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#07090e] border border-slate-800/80 hover:border-gold-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-gold-400" />
              </div>
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider block mb-1">Aesthetics</span>
              <h3 className="text-xl font-bold text-white mb-3">Modern Visual Polish</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Polished visual design, smooth animations, and clean typography that elevate your company's brand and immediately earn the trust of your customers.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Client Commitments */}
        <div className="mb-20 p-8 sm:p-12 rounded-2xl bg-[#06080e] border border-slate-800">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase">Our Working Promise</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Four Commitments to Every Client
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              We believe in honest partnerships, clear communication, and delivering software you are proud to own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                <Code2 className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">You Own 100% of Your Code</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  No proprietary traps or hidden lock-ins. You receive complete ownership of all source code, design assets, and database architecture from day one.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Security & Privacy by Default</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Every application we build includes bank-grade data encryption, automated daily backups, and strict privacy protection to keep your customer records safe.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                <HeartHandshake className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Plain English & Direct Access</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  You work directly with experienced software engineers who explain technical details in simple, transparent terms and keep you informed at every step.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Built to Last for Years</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  We write clean, well-organized code that can easily be updated, expanded, and scaled as your business grows over the next 5 to 10 years without needing expensive rebuilds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Guarantees */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase">What You Can Expect</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Guarantees Behind Our Work
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl bg-[#07090e] border border-slate-800 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-gold-500/10 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400" />
              </div>
              <div className="text-base font-bold text-white mb-1">100% Ownership</div>
              <div className="text-xs text-slate-400">All code & assets belong to you</div>
            </div>
            <div className="p-6 rounded-xl bg-[#07090e] border border-slate-800 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-gold-500/10 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
              </div>
              <div className="text-base font-bold text-white mb-1">Bank-Grade Safety</div>
              <div className="text-xs text-slate-400">Encrypted data & daily backups</div>
            </div>
            <div className="p-6 rounded-xl bg-[#07090e] border border-slate-800 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-gold-500/10 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-gold-400" />
              </div>
              <div className="text-base font-bold text-white mb-1">24/7 Reliability</div>
              <div className="text-xs text-slate-400">Continuous cloud monitoring</div>
            </div>
            <div className="p-6 rounded-xl bg-[#07090e] border border-slate-800 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-gold-500/10 flex items-center justify-center mb-3">
                <Award className="w-5 h-5 text-gold-400" />
              </div>
              <div className="text-base font-bold text-white mb-1">Clear Pricing</div>
              <div className="text-xs text-slate-400">Fixed milestones & no surprises</div>
            </div>
          </div>
        </div>

        {/* Global Hubs */}
        <div className="mb-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0a0d14] to-[#040507] border border-slate-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase">Our Locations</span>
              <h3 className="text-2xl font-bold text-white mt-1">International Software Hubs</h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Consultations Across Timezones</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[#05070c] border border-slate-800/80">
              <div className="text-xs text-gold-400 font-semibold mb-1">ZURICH</div>
              <div className="text-sm font-bold text-white mb-1">European Office</div>
              <div className="text-xs text-slate-400 font-sans">Switzerland</div>
            </div>

            <div className="p-5 rounded-xl bg-[#05070c] border border-slate-800/80">
              <div className="text-xs text-gold-400 font-semibold mb-1">LONDON</div>
              <div className="text-sm font-bold text-white mb-1">UK & Fintech Office</div>
              <div className="text-xs text-slate-400 font-sans">United Kingdom</div>
            </div>

            <div className="p-5 rounded-xl bg-[#05070c] border border-slate-800/80">
              <div className="text-xs text-gold-400 font-semibold mb-1">NEW YORK</div>
              <div className="text-sm font-bold text-white mb-1">Americas Office</div>
              <div className="text-xs text-slate-400 font-sans">United States</div>
            </div>

            <div className="p-5 rounded-xl bg-[#05070c] border border-slate-800/80">
              <div className="text-xs text-gold-400 font-semibold mb-1">SINGAPORE</div>
              <div className="text-sm font-bold text-white mb-1">Asia-Pacific Office</div>
              <div className="text-xs text-slate-400 font-sans">Singapore</div>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="text-center p-10 rounded-2xl bg-gradient-to-r from-gold-500/10 via-slate-900/40 to-gold-500/10 border border-gold-500/30">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Discuss Your Project?</h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Let's talk about what you want to build. We'll answer your questions in plain English and give you a straightforward project estimate.
          </p>
          <button
            onClick={() => onOpenConsultation && onOpenConsultation('General Advisory')}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F9E8A2] via-[#E2BB58] to-[#C99726] text-black font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:brightness-105 active:scale-95 transition-all"
          >
            <span>Schedule a Free Consultation</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>

      </div>
    </div>
  );
}
