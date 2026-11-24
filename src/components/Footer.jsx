import React from 'react';

export default function Footer({ onNavigate, onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (pageId, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
    scrollToTop();
  };

  return (
    <footer className="py-12 bg-[#020305] border-t border-slate-900 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
            <span className="text-[10px] font-bold text-gold-400 font-display">D</span>
          </div>
          <div>
            <span className="font-bold text-slate-300 font-display tracking-widest">DIGITHECT</span>
            <span className="text-slate-500"> — Software Services. All rights reserved.</span>
          </div>
        </div>

        {/* Center Status Pill */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-slate-800 text-[10px] font-mono text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>ALL SYSTEMS OPERATIONAL // 99.999% SLA</span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono">
          <button onClick={scrollToTop} className="hover:text-gold-300 transition-colors">Top ↑</button>
          <button onClick={(e) => handleLink('home', e)} className="hover:text-gold-300 transition-colors">Home</button>
          <button onClick={(e) => handleLink('services', e)} className="hover:text-gold-300 transition-colors">Services</button>
          <button onClick={(e) => handleLink('projects', e)} className="hover:text-gold-300 transition-colors">Projects (4 Spaces)</button>
          <button onClick={(e) => handleLink('about', e)} className="hover:text-gold-300 transition-colors">About</button>
          <button onClick={(e) => handleLink('contact', e)} className="hover:text-gold-300 transition-colors">Contact</button>
          <button onClick={onOpenConsultation} className="text-gold-400 hover:text-gold-300 transition-colors">Engage</button>
        </div>

      </div>
    </footer>
  );
}
