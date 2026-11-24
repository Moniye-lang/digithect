import React from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedDigithectLogo from './AnimatedDigithectLogo';

export default function Hero({ onOpenConsultation }) {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#030406]">
      
      {/* Ambient Radial Golden Glow behind the Emblem */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-gold-600/20 via-amber-500/10 to-transparent blur-[80px] pointer-events-none animate-pulse-subtle" />

      {/* Centerpiece: Just the Animated Digithect Emblem */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        <div className="w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px]">
          <AnimatedDigithectLogo size="lg" showControls={false} />
        </div>
      </div>

      {/* Bottom Right Corner Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="#services"
          className="group relative inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#F9E8A2] via-[#E2BB58] to-[#C99726] text-black font-bold text-xs sm:text-sm tracking-wider shadow-[0_8px_30px_rgba(212,167,55,0.35)] hover:shadow-[0_12px_45px_rgba(212,167,55,0.6)] hover:brightness-110 active:scale-95 transition-all duration-300"
        >
          <span className="tracking-wide">Explore Services</span>
          <ArrowDown className="w-4 h-4 text-black group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

    </section>
  );
}
