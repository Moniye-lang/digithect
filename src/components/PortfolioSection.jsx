import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, X, ChevronLeft, ChevronRight } from 'lucide-react';

const projectVideos = [
  {
    tag: "FINTECH & PAYMENTS",
    cam: "CAM_01",
    title: "Instant Mobile Banking & Payment App",
    metric: "Under 1 Sec",
    progress: "w-2/3",
    tc: "00:01:24:18",
    badge: "FINTECH & PAYMENTS",
    desc: "Modern financial app allowing customers to transfer money instantly with biometric Face ID security."
  },
  {
    tag: "AI & AUTOMATION",
    cam: "CAM_02",
    title: "Smart AI Customer Support Agent",
    metric: "Instant Reply",
    progress: "w-4/5",
    tc: "00:03:45:09",
    badge: "AI & AUTOMATION",
    desc: "Private AI assistant trained on business docs to resolve support tickets and answer questions 24/7."
  },
  {
    tag: "E-COMMERCE & CLOUD",
    cam: "CAM_03",
    title: "High-Traffic Online Shopping Store",
    metric: "0.4s Page Load",
    progress: "w-1/2",
    tc: "00:07:12:33",
    badge: "CLOUD & E-COMMERCE",
    desc: "Fast e-commerce shopping platform built for major sales spikes without crashing, featuring 1-click checkout."
  },
  {
    tag: "HEALTHCARE PORTAL",
    cam: "CAM_04",
    title: "Secure Patient & Doctor Portal",
    metric: "HIPAA Compliant",
    progress: "w-3/4",
    tc: "00:11:08:21",
    badge: "HEALTHCARE & SECURITY",
    desc: "Secure patient web portal enabling thousands of patients to book visits and view lab results securely."
  },
  {
    tag: "MODERNIZATION",
    cam: "CAM_05",
    title: "Custom Business Platform Upgrade",
    metric: "24/7 Reliability",
    progress: "w-full",
    tc: "00:15:30:04",
    badge: "MODERNIZATION",
    desc: "Modern API architecture replacing outdated software systems with fast, responsive cloud applications."
  }
];

export default function PortfolioSection({ onOpenConsultation }) {
  const [activeReel, setActiveReel] = useState(0);
  const [theaterModalIndex, setTheaterModalIndex] = useState(null);
  const [isTheaterPlaying, setIsTheaterPlaying] = useState(true);

  const canvasRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const theaterCanvasRef = useRef(null);
  const trackRef = useRef(null);

  // Canvas simulations
  useEffect(() => {
    let animId;
    let t = 0;

    const render = () => {
      t += 0.016;

      canvasRefs.forEach((ref, idx) => {
        const cvs = ref.current;
        if (!cvs) return;
        if (!cvs.width || cvs.width !== cvs.offsetWidth) {
          cvs.width = cvs.offsetWidth || 380;
          cvs.height = cvs.offsetHeight || 214;
        }
        const ctx = cvs.getContext('2d');
        const w = cvs.width;
        const h = cvs.height;

        ctx.fillStyle = '#05070c';
        ctx.fillRect(0, 0, w, h);

        if (idx === 0) {
          // Candlestick + Spline
          for (let i = 0; i < 14; i++) {
            const cx = (i + 1) * (w / 16);
            const cy = h * 0.55 + Math.sin(t * 1.5 + i * 0.8) * 35;
            const ch = 15 + Math.abs(Math.cos(t * 1.2 + i * 1.1)) * 25;
            ctx.strokeStyle = '#F9E8A2';
            ctx.beginPath();
            ctx.moveTo(cx, cy - ch - 6);
            ctx.lineTo(cx, cy + ch + 6);
            ctx.stroke();
            ctx.fillStyle = 'rgba(212, 167, 55, 0.7)';
            ctx.fillRect(cx - 4, cy - ch / 2, 8, ch);
          }
          ctx.beginPath();
          ctx.strokeStyle = '#FFE8A3';
          ctx.lineWidth = 2;
          for (let x = 0; x <= w; x += 6) {
            const y = h * 0.45 + Math.sin(x * 0.02 + t * 2.5) * 20;
            if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();
        } else if (idx === 1) {
          // 3D Neural Net
          const cx = w / 2, cy = h / 2;
          for (let i = 0; i < 16; i++) {
            const angle = t * 0.8 + i * 0.4;
            const px = cx + Math.cos(angle) * (w * 0.32);
            const py = cy + Math.sin(angle * 1.2) * (h * 0.32);
            ctx.beginPath();
            ctx.arc(px, py, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#FFE8A3';
            ctx.fill();
            ctx.strokeStyle = 'rgba(212, 167, 55, 0.25)';
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(px, py);
            ctx.stroke();
          }
        } else if (idx === 2) {
          // Globe rings
          const cx = w / 2, cy = h / 2, r = h * 0.38;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(212, 167, 55, 0.3)';
          ctx.stroke();
          for (let k = 0; k < 4; k++) {
            const wX = Math.cos(t * 0.6 + k * 0.8) * r;
            ctx.beginPath();
            ctx.ellipse(cx, cy, Math.max(1, Math.abs(wX)), r, 0, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(212, 167, 55, 0.15)';
            ctx.stroke();
          }
        } else if (idx === 3) {
          // Radar
          const cx = w * 0.45, cy = h / 2, maxR = h * 0.42;
          ctx.beginPath();
          ctx.arc(cx, cy, maxR, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(212, 167, 55, 0.2)';
          ctx.stroke();
          const sweep = (t * 2.2) % (Math.PI * 2);
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.arc(cx, cy, maxR, sweep - 0.4, sweep);
          ctx.fillStyle = 'rgba(212, 167, 55, 0.25)';
          ctx.fill();
        } else {
          // Event Bus
          for (let p = 0; p < 25; p++) {
            const px = ((p * 20) + t * 90) % w;
            const py = (h * 0.3) + (p % 3) * (h * 0.2);
            ctx.beginPath();
            ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = '#FFE8A3';
            ctx.fill();
          }
        }
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, []);

  const scrollReel = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 380, behavior: 'smooth' });
    }
  };

  const jumpTo = (idx) => {
    setActiveReel(idx);
    if (trackRef.current) {
      const child = trackRef.current.children[idx];
      if (child) child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section id="portfolio" className="relative py-14 sm:py-16 bg-[#020306] border-t border-gold-500/15 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[11px] font-mono text-gold-400 tracking-[0.25em] uppercase font-semibold">
                CLIENT SHOWCASE & INTERACTIVE DEMOS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
              Systems Architecture <span className="text-gold-gradient">In Motion</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollReel(-1)}
              className="w-9 h-9 rounded-full bg-[#0a0d14] border border-slate-800 hover:border-gold-400 text-slate-300 hover:text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollReel(1)}
              className="w-9 h-9 rounded-full bg-[#0a0d14] border border-slate-800 hover:border-gold-400 text-slate-300 hover:text-white flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Video Frames Track */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projectVideos.map((proj, idx) => (
            <div
              key={proj.title}
              onClick={() => setTheaterModalIndex(idx)}
              className="flex-none w-[320px] sm:w-[380px] lg:w-[410px] snap-center rounded-2xl bg-[#06080d] border border-gold-500/30 hover:border-gold-400/80 overflow-hidden relative group cursor-pointer shadow-[0_10px_35px_-10px_rgba(212,167,55,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header HUD */}
              <div className="relative z-20 px-4 py-2.5 bg-black/80 backdrop-blur-md border-b border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span className="font-bold text-red-400 tracking-wider">REC</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-gold-300 font-bold">{proj.cam}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="px-1.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/20 text-gold-300 text-[9px]">4K 60FPS</span>
                  <span>{proj.tc}</span>
                </div>
              </div>

              {/* Video Screen Viewport */}
              <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
                <canvas ref={canvasRefs[idx]} className="w-full h-full block" />
                
                {/* Viewfinder Markers */}
                <span className="absolute top-2 left-2 text-[10px] font-mono text-gold-400/40 select-none">⌜</span>
                <span className="absolute top-2 right-2 text-[10px] font-mono text-gold-400/40 select-none">⌝</span>
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-gold-400/40 select-none">⌞</span>
                <span className="absolute bottom-2 right-2 text-[10px] font-mono text-gold-400/40 select-none">⌟</span>

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-300 to-amber-500 text-black flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-black ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Scrubber & Info */}
              <div className="relative z-20 p-4 bg-[#080b12] border-t border-slate-800/80">
                <div className="w-full h-1 bg-slate-800 rounded-full mb-3 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-gold-400 to-amber-500 rounded-full ${proj.progress}`} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">{proj.tag}</span>
                    <h3 className="text-sm font-bold font-display text-white group-hover:text-gold-200 transition-colors">
                      {proj.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{proj.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {projectVideos.map((p, i) => (
            <button
              key={p.cam}
              onClick={() => jumpTo(i)}
              className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all ${
                activeReel === i
                  ? 'bg-gold-500 text-black font-bold'
                  : 'bg-[#0a0d14] border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {p.tag}
            </button>
          ))}
        </div>

      </div>

      {/* Theater Lightbox Modal */}
      {theaterModalIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          <div onClick={() => setTheaterModalIndex(null)} className="fixed inset-0 bg-black/90 backdrop-blur-xl" />
          
          <div className="relative w-full max-w-4xl bg-[#080b12] border border-gold-500/50 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col">
            <div className="px-6 py-4 bg-black/80 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white font-bold tracking-wider">{projectVideos[theaterModalIndex].title}</span>
                <span className="text-gold-400 border border-gold-500/30 px-2 py-0.5 rounded text-[10px]">
                  {projectVideos[theaterModalIndex].badge}
                </span>
              </div>
              <button
                onClick={() => setTheaterModalIndex(null)}
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-gold-400 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black flex items-center justify-center p-8 text-center">
              <div className="space-y-4 max-w-md">
                <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400 mx-auto flex items-center justify-center text-gold-300">
                  <Play className="w-8 h-8 fill-gold-400" />
                </div>
                <h4 className="text-xl font-bold font-display text-white">{projectVideos[theaterModalIndex].title}</h4>
                <p className="text-xs text-slate-300 font-mono">{projectVideos[theaterModalIndex].desc}</p>
                <div className="pt-2 text-gold-400 font-mono text-xs">
                  METRIC: <strong>{projectVideos[theaterModalIndex].metric}</strong>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-[#05070c] border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">DIGITHECT ARCHITECTURAL CINEMA</span>
              <button
                onClick={() => {
                  setTheaterModalIndex(null);
                  if (onOpenConsultation) onOpenConsultation(projectVideos[theaterModalIndex].title);
                }}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-gold-300 to-amber-500 hover:brightness-110 shadow-md transition-all"
              >
                Commission Similar Scope →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

