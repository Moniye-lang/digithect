import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ConsultationModal from './components/ConsultationModal';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [consultationOpen, setConsultationOpen] = useState(false);

  // Sync hash routing on mount and hashchange
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      if (['projects', 'about', 'contact', 'services'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    if (pageId === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = `#/${pageId}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030406] text-slate-100 font-sans selection:bg-gold-500/30 selection:text-gold-200">
      {/* Header Navigation with Active Page State */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setConsultationOpen(true)} 
      />

      <main>
        {/* Route: Dedicated Projects Page (4 Spaces) */}
        {currentPage === 'projects' && (
          <ProjectsPage onOpenConsultation={() => setConsultationOpen(true)} />
        )}

        {/* Route: Dedicated About Page */}
        {currentPage === 'about' && (
          <AboutPage onOpenConsultation={() => setConsultationOpen(true)} />
        )}

        {/* Route: Dedicated Contact Page */}
        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {/* Route: Services view */}
        {currentPage === 'services' && (
          <div className="pt-20">
            <ServicesSection onOpenConsultation={() => setConsultationOpen(true)} />
            <div className="py-12 text-center bg-[#030406]">
              <button
                onClick={() => handleNavigate('projects')}
                className="px-6 py-3 rounded-full bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-mono font-bold tracking-wider transition-all"
              >
                VIEW PROJECTS & ARCHITECTURE SPACES →
              </button>
            </div>
          </div>
        )}

        {/* Route: Home Showcase */}
        {currentPage === 'home' && (
          <>
            {/* Pure Centerpiece Hero: Animated Emblem with Building Rise */}
            <Hero onOpenConsultation={() => setConsultationOpen(true)} />

            {/* Clean Software Services Section */}
            <ServicesSection onOpenConsultation={() => setConsultationOpen(true)} />

            {/* 5 Cinematic Video Frames Portfolio Preview */}
            <PortfolioSection onOpenConsultation={() => setConsultationOpen(true)} />

            {/* Direct Link to Dedicated Projects Page */}
            <section className="py-16 bg-[#020305] border-t border-slate-900 text-center">
              <div className="max-w-4xl mx-auto px-6">
                <div className="p-8 sm:p-10 rounded-2xl bg-[#06080e] border border-gold-500/20 shadow-xl">
                  <span className="text-xs font-mono text-gold-400 tracking-widest uppercase">
                    Dedicated Architecture Portfolio
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2 mb-3">
                    Explore All 4 Enterprise Project Spaces
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
                    Inspect telemetry, microsecond metrics, and cryptographic architecture schematics across our 4 dedicated enterprise project spaces.
                  </p>
                  <button
                    onClick={() => handleNavigate('projects')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#F9E8A2] via-[#E2BB58] to-[#C99726] text-black font-bold text-xs tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all"
                  >
                    <span>OPEN PROJECT PAGE (4 SPACES)</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Clean Footer with Page Navigation */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenConsultation={() => setConsultationOpen(true)} 
      />

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={consultationOpen} 
        onClose={() => setConsultationOpen(false)} 
      />
    </div>
  );
}
