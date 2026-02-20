
import React, { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import ResumeModal from './components/ResumeModal';
import Home from './sections/Home';
import About from './sections/About';
import WhatIDo from './sections/WhatIDo';
import Projects from './sections/Projects';
import HowIThink from './sections/HowIThink';
import Career from './sections/Career';
import Contact from './sections/Contact';
import DetailedExperience from './pages/DetailedExperience';
import DetailedTools from './pages/DetailedTools';
import AboutMe from './pages/AboutMe';
import CoverLetter from './pages/CoverLetter';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentView, setCurrentView] = useState<'landing' | 'about-me' | 'experience' | 'tools' | 'cover-letter'>('landing');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Handle URL hash for direct linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'cover-letter') {
        setCurrentView('cover-letter');
      } else if (hash === 'experience') {
        setCurrentView('experience');
      } else if (hash === 'tools') {
        setCurrentView('tools');
      } else if (hash === 'about-me') {
        setCurrentView('about-me');
      } else if (hash === '' || hash === 'home') {
        setCurrentView('landing');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update URL hash when view changes
  useEffect(() => {
    if (currentView === 'landing') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.history.pushState(null, '', `#${currentView}`);
    }
  }, [currentView]);

  // Track page views in GA4 whenever the view changes
  useEffect(() => {
    const pagePath = currentView === 'landing' ? '/' : `/${currentView}`;
    const pageTitle = {
      landing: 'Home',
      'about-me': 'About Me',
      experience: 'Detailed Experience',
      tools: 'Tools & Automations',
      'cover-letter': 'Cover Letter',
    }[currentView];
    (window as any).gtag?.('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }, [currentView]);

  useEffect(() => {
    if (currentView !== 'landing') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
      section.classList.add('section-fade');
    });

    return () => observer.disconnect();
  }, [currentView]);

  const renderLanding = () => (
    <div className="relative z-10">
      <Home id="home" onViewResume={() => setIsResumeOpen(true)} onViewTools={() => setCurrentView('tools')} />
      <About id="about" />
      <WhatIDo id="what-i-do" />
      <Projects id="projects" />
      <HowIThink id="how-i-think" />
      <Career id="career" />
      <Contact id="contact" />
    </div>
  );

  return (
    <div className="flex min-h-screen">
      {currentView === 'landing' && <Sidebar activeSection={activeSection} />}
      
      <main className={`flex-1 transition-all duration-500 ${currentView === 'landing' ? 'md:pl-20' : ''}`}>
        <TopNav currentView={currentView} setView={setCurrentView} />

        {/* Decorative Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 grid-pattern opacity-40"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        {currentView === 'landing' && renderLanding()}
        {currentView === 'about-me' && <AboutMe onBack={() => setCurrentView('landing')} />}
        {currentView === 'experience' && <DetailedExperience onBack={() => setCurrentView('landing')} />}
        {currentView === 'tools' && <DetailedTools onBack={() => setCurrentView('landing')} />}
        {currentView === 'cover-letter' && <CoverLetter onBack={() => setCurrentView('landing')} />}

        <footer className="relative py-12 px-8 border-t border-white/5 bg-background-dark/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-text text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-tighter uppercase">Naomi S. Donley</span>
              <span className="opacity-40">/</span>
              <span>Proposal & Client Operations</span>
            </div>
            <p>© {new Date().getFullYear()} Naomi S. Donley. All rights reserved.</p>
          </div>
        </footer>
      </main>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <SpeedInsights />
    </div>
  );
};

export default App;
