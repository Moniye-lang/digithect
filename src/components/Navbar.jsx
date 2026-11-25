import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronRight, X } from 'lucide-react';

export default function Navbar({ currentPage = 'home', onNavigate, onOpenConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (pageId, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', num: '01 //', label: 'Home' },
    { id: 'services', num: '02 //', label: 'Services' },
    { id: 'projects', num: '03 //', label: 'Projects (4 Spaces)' },
    { id: 'about', num: '04 //', label: 'About' },
    { id: 'contact', num: '05 //', label: 'Contact' },
  ];

  return (
    <>
      {/* Fixed Luxury Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#030406]/85 backdrop-blur-xl border-b border-gold-500/15 px-4 sm:px-8 lg:px-10 py-3.5 sm:py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo & Wordmark */}
          <button 
            onClick={(e) => handleNavClick('home', e)} 
            className="flex items-center gap-2.5 group text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center group-hover:border-gold-400/50 transition-colors">
              <svg viewBox="0 0 100 100" className="w-5 h-5">
                <polygon points="28,80 28,62 36,54 36,80" fill="#E6C875" />
                <polygon points="40,80 40,46 48,38 48,80" fill="#DFBD67" />
                <path d="M 52 80 L 52 35 L 45 31 L 49 24 L 60 18 L 60 80 Z" fill="#F3E5AB" />
                <path d="M 60 14 C 80 26, 92 42, 86 58 C 82 69, 72 78, 60 78 C 66 73, 72 65, 74 54 C 76 43, 70 32, 60 26 Z" fill="#D4A737" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-[0.25em] font-display text-white/95 group-hover:text-gold-300 transition-colors">
                DIGITHECT
              </span>
              <span className="text-[8px] font-mono tracking-widest text-slate-500 hidden sm:inline">
                SOFTWARE SERVICES
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 text-xs tracking-wider">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'text-gold-300 bg-gold-500/10 border border-gold-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTA & Mobile Hamburger Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button 
              onClick={onOpenConsultation} 
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-gold-500/20 via-gold-400/20 to-gold-500/20 border border-gold-500/40 text-gold-300 hover:text-white hover:border-gold-400 text-xs font-medium font-mono tracking-wider transition-all"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Animated 3-Bar Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 hover:border-gold-500/50 flex flex-col items-center justify-center gap-1.5 p-2 transition-all active:scale-95"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span 
                className={`w-5 h-0.5 bg-gold-300 rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? 'translate-y-[8px] rotate-45' : ''
                }`} 
              />
              <span 
                className={`w-3.5 h-0.5 bg-gold-400 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`} 
              />
              <span 
                className={`w-5 h-0.5 bg-gold-300 rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? '-translate-y-[8px] -rotate-45' : ''
                }`} 
              />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      <div 
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Mobile Slide-In Navigation Drawer */}
      <aside 
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-[#07090e] border-l border-gold-500/25 p-6 flex flex-col justify-between shadow-2xl shadow-gold-500/10 transition-transform duration-300 ease-out md:hidden overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header & Links */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                <span className="text-xs font-bold text-gold-400 font-display">D</span>
              </div>
              <div>
                <span className="text-xs font-bold font-display tracking-[0.25em] text-white">DIGITHECT</span>
                <div className="text-[9px] font-mono text-gold-400/80 tracking-wider">SOVEREIGN SOFTWARE</div>
              </div>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors active:scale-95"
              aria-label="Close Navigation"
            >
              <X className="w-4 h-4 text-slate-300" />
            </button>
          </div>

          {/* Navigation Links with Architectural Numbers */}
          <div className="mt-6 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-xs font-mono font-medium transition-all text-left ${
                    isActive
                      ? 'text-gold-300 bg-gold-500/10 border border-gold-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/80 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? 'text-[10px] text-gold-400/80' : 'text-[10px] text-slate-500'}>
                      {link.num}
                    </span>
                    <span className="text-sm font-display font-bold">
                      {link.label}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="pt-6 border-t border-slate-800/80 space-y-4">
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F9E8A2] via-[#E2BB58] to-[#C99726] text-black font-bold text-xs font-mono tracking-wider shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all"
          >
            <span>COMMISSION CONSULTATION</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>99.999% SLA ACTIVE</span>
            </span>
            <span className="text-gold-400/80">SECURE // PGP</span>
          </div>
        </div>
      </aside>
    </>
  );
}
