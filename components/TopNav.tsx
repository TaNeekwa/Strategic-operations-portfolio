
import React from 'react';

interface TopNavProps {
  currentView: 'landing' | 'about-me' | 'experience' | 'tools';
  setView: (view: 'landing' | 'about-me' | 'experience' | 'tools') => void;
}

const TopNav: React.FC<TopNavProps> = ({ currentView, setView }) => {
  return (
    <nav className="sticky top-0 z-[60] px-8 md:px-12 py-4 flex justify-end items-center gap-8 bg-background-dark/40 backdrop-blur-lg border-b border-white/5">
      <button 
        onClick={() => setView('landing')}
        className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-all hover:text-primary ${currentView === 'landing' ? 'text-primary' : 'text-white/50'}`}
      >
        Main Portfolio
      </button>
      <button 
        onClick={() => setView('about-me')}
        className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-all hover:text-primary ${currentView === 'about-me' ? 'text-primary' : 'text-white/50'}`}
      >
        About Me
      </button>
      <button 
        onClick={() => setView('experience')}
        className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-all hover:text-primary ${currentView === 'experience' ? 'text-primary' : 'text-white/50'}`}
      >
        Work Experience
      </button>
      <button 
        onClick={() => setView('tools')}
        className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-all hover:text-primary ${currentView === 'tools' ? 'text-primary' : 'text-white/50'}`}
      >
        Tools & Automation
      </button>
    </nav>
  );
};

export default TopNav;
