import React, { useState } from 'react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

const bladesData = [
  {
    id: "web-mobile-apps",
    tag: "Custom Applications",
    collapsedTitle: "Web & Mobile\nApps",
    badge: "Web & Mobile",
    mobileTitle: "Custom Web & Mobile Apps",
    title: "Custom Web & Mobile Applications",
    subtitle: "Built for All Devices",
    desc: "We design and build fast, modern websites, web applications, and mobile apps tailored specifically to your business. Easy for your customers to use, beautiful on every screen, and engineered to never slow down.",
    tags: ["Custom Websites", "iOS & Android Apps", "Customer Portals", "Fast Loading Speed"],
    scope: "Custom Web & Mobile Applications",
    benefit: "100% Mobile & Desktop Friendly"
  },
  {
    id: "ai-automation",
    tag: "Smart Automation",
    collapsedTitle: "AI Tools &\nAutomation",
    badge: "AI Powered",
    mobileTitle: "Smart AI & Automation",
    title: "AI Tools & Business Workflow Automation",
    subtitle: "Save Hours Every Week",
    desc: "Cut down manual busywork with custom AI helpers. We build smart chatbots that answer customer questions 24/7, automate document processing, and connect your business tools so routine tasks run by themselves.",
    tags: ["AI Customer Support", "Task Automation", "Document Processing", "100% Private Data"],
    scope: "AI Tools & Business Workflow Automation",
    benefit: "Saves Time & Eliminates Repetitive Work"
  },
  {
    id: "payment-ecommerce",
    tag: "Payments & Commerce",
    collapsedTitle: "Payments &\nBilling",
    badge: "Secure Checkout",
    mobileTitle: "Payments & E-Commerce",
    title: "Online Payments & E-Commerce Systems",
    subtitle: "Safe, Instant Transactions",
    desc: "Accept payments from customers anywhere in the world effortlessly. We connect credit card processors, digital wallets, automatic subscription renewals, and digital invoicing directly into your bank account.",
    tags: ["Credit Card Processing", "Apple Pay & Google Pay", "Monthly Subscriptions", "Automated Invoices"],
    scope: "Online Payments & E-Commerce Systems",
    benefit: "Bank-Grade Encryption & Instant Payouts"
  },
  {
    id: "cloud-maintenance",
    tag: "Cloud & Support",
    collapsedTitle: "Hosting &\nSecurity",
    badge: "24/7 Care",
    mobileTitle: "Hosting & Maintenance",
    title: "Cloud Hosting, Security & Ongoing Support",
    subtitle: "Complete Peace of Mind",
    desc: "We look after your software so you can focus on running your business. Includes high-speed cloud hosting, protection against hackers and malware, automatic daily backups, and prompt technical support whenever you need help.",
    tags: ["Fast Cloud Hosting", "Anti-Hacker Defense", "Daily Backups", "24/7 Ongoing Support"],
    scope: "Cloud Hosting, Security & Ongoing Support",
    benefit: "Continuous Monitoring & Daily Backups"
  }
];

export default function ServicesSection({ onOpenConsultation }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="relative py-14 sm:py-16 bg-[#030406] border-t border-gold-500/15 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Sleek Compact Header */}
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase">
              Services & What We Build
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Software Built for <span className="text-gold-gradient">Your Business</span>
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span>Tap any service to explore</span>
          </div>
        </div>

        {/* Low-Profile Architectural Blades Container (Height 330px on desktop) */}
        <div className="flex flex-col lg:flex-row gap-3 lg:h-[330px]">
          {bladesData.map((blade, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={blade.id}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => {
                  if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                    setActiveIndex(idx);
                  }
                }}
                className={`relative rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'lg:flex-[3.6] border border-gold-500/50 bg-[#090b10] shadow-[0_10px_35px_-10px_rgba(212,167,55,0.2)] p-5 lg:p-6'
                    : 'lg:flex-1 border border-slate-800/80 bg-[#06080d] hover:border-gold-500/50 p-4 lg:p-5'
                }`}
              >
                {/* Mobile Bar for Inactive State */}
                {!isActive && (
                  <div className="flex lg:hidden items-center justify-between w-full">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-gold-400/80"></span>
                      <span className="text-sm font-semibold text-white">{blade.mobileTitle}</span>
                    </div>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                    </span>
                  </div>
                )}

                {/* Desktop Collapsed View */}
                {!isActive && (
                  <div className="hidden lg:flex absolute inset-0 flex-col justify-between p-5">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-md bg-gold-500/10 border border-gold-500/20 text-[10px] font-medium text-gold-300">
                        {blade.badge}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    </div>
                    <div className="my-auto py-4">
                      <h3 className="text-base font-bold text-white leading-snug whitespace-pre-line">
                        {blade.collapsedTitle}
                      </h3>
                    </div>
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <span>View details</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                  </div>
                )}

                {/* Expanded View */}
                {isActive && (
                  <div className="relative z-10 w-full h-full flex flex-col justify-between animate-fadeIn">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold tracking-wider text-gold-400 uppercase">
                          {blade.tag}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-medium text-gold-300">
                          {blade.subtitle}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {blade.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 max-w-xl">
                        {blade.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {blade.tags.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-md bg-black/60 border border-slate-800 text-xs text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenConsultation) onOpenConsultation(blade.scope);
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500 hover:brightness-105 shadow-md active:scale-95 transition-all"
                      >
                        <span>Discuss This Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{blade.benefit}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
