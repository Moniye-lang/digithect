import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPage = 'home', onNavigate, onOpenConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects (4 Spaces)' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030406]/80 backdrop-blur-md border-b border-slate-900/80 px-6 sm:px-10 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Title (Discreet Top Left) */}
        <button 
          onClick={(e) => handleNavClick('home', e)} 
          className="flex items-center gap-2.5 group text-left"
        >
          <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:border-gold-400/50 transition-colors">
            <svg viewBox="0 0 100 100" className="w-5 h-5">
              <polygon points="28,80 28,62 36,54 36,80" fill="#E6C875" />
              <polygon points="40,80 40,46 48,38 48,80" fill="#DFBD67" />
              <path d="M 52 80 L 52 35 L 45 31 L 49 24 L 60 18 L 60 80 Z" fill="#F3E5AB" />
              <path d="M 60 14 C 80 26, 92 42, 86 58 C 82 69, 72 78, 60 78 C 66 73, 72 65, 74 54 C 76 43, 70 32, 60 26 Z" fill="#D4A737" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-[0.3em] font-display text-white/90 group-hover:text-gold-300 transition-colors">
              DIGITHECT
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-500 hidden sm:inline">
              SOFTWARE SERVICES
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs tracking-wider">
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

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenConsultation} 
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold-500/20 via-gold-400/20 to-gold-500/20 border border-gold-500/40 text-gold-300 hover:text-white hover:border-gold-400 text-xs font-medium font-mono tracking-wider transition-all"
          >
            <span>Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={(e) => handleNavClick(link.id, e)}
                className={`px-4 py-2.5 rounded-lg text-left text-xs font-medium transition-all ${
                  isActive
                    ? 'text-gold-300 bg-gold-500/15 border border-gold-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="mt-2 w-full py-2.5 rounded-lg bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold font-mono tracking-wider text-center"
          >
            Commission Consultation
          </button>
        </div>
      )}
    </header>
  );
}
