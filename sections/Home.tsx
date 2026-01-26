
import React from 'react';

interface HomeProps {
  id: string;
  onViewResume: () => void;
  onViewTools: () => void;
}

const Home: React.FC<HomeProps> = ({ id, onViewResume, onViewTools }) => {
  return (
    <section id={id} className="relative min-h-screen flex flex-col justify-center py-24 px-8 sm:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-10 animate-slide-up z-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface-dark border border-white/5 w-fit shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[11px] font-bold tracking-widest text-primary uppercase">Active in High-Impact Proposals</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extralight leading-[1.1] tracking-tight">
              Naomi S. <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Donley</span>
            </h1>
            <p className="text-neutral-text text-lg sm:text-xl font-light leading-relaxed max-w-xl">
              I support business operations and cross-functional teams by managing proposals, documents, data, and workflows—ensuring every handoff is clear, accurate, and executable. My background spans proposal coordination, document control, database management, pricing alignment, and process automation, allowing me to step in wherever structure and follow-through are needed most.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <button 
              onClick={onViewResume}
              className="group relative flex items-center justify-center h-14 px-10 rounded-full bg-primary text-background-dark hover:bg-white hover:scale-105 transform transition-all duration-300 shadow-[0_0_30px_rgba(220, 165, 169, 0.2)]"
            >
              <span className="text-sm font-bold tracking-wide uppercase mr-2">View Resume</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-y-1 transition-transform">description</span>
            </button>
            <a href="mailto:taneekwa@outlook.com" className="group flex items-center justify-center h-14 px-10 rounded-full border border-white/10 hover:border-primary/50 bg-transparent hover:bg-surface-dark text-white hover:text-primary transition-all duration-300">
              <span className="material-symbols-outlined mr-2 text-[20px] text-primary/80 group-hover:text-primary transition-colors">mail</span>
              <span className="text-sm font-semibold tracking-wide uppercase">Get In Touch</span>
            </a>
            <button
              onClick={onViewTools}
              className="group flex items-center justify-center h-14 px-10 rounded-full border border-white/10 hover:border-primary/50 bg-transparent hover:bg-surface-dark text-white hover:text-primary transition-all duration-300"
            >
              <span className="material-symbols-outlined mr-2 text-[20px] text-primary/80 group-hover:text-primary transition-colors">build</span>
              <span className="text-sm font-semibold tracking-wide uppercase">Tools & Automations</span>
            </button>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-12 border-t border-white/5 mt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-light text-white">90%</span>
              <span className="text-xs uppercase tracking-widest text-neutral-text font-bold">Turnaround Improvement</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-light text-white">Advanced</span>
              <span className="text-xs uppercase tracking-widest text-neutral-text font-bold">Excel & CRM Expert</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-light text-white">BBA</span>
              <span className="text-xs uppercase tracking-widest text-neutral-text font-bold">Business Admin</span>
            </div>
          </div>
        </div>

        <div className="relative group perspective-1000 z-0">
          <div className="absolute -inset-10 bg-gradient-to-tr from-primary/30 to-transparent rounded-[2rem] blur-[120px] opacity-40 group-hover:opacity-70 transition duration-1000"></div>
          
          <div className="relative aspect-[4/5] md:aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-[2rem] bg-surface-dark border border-white/5 shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:border-primary/20">
            {/* Naomi's Portrait - Use a clear placeholder representing the provided headshot */}
            <img
              src="/portrait.jpg"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              alt="Naomi S. Donley Professional Portrait"
            />
            
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-background-dark/40 backdrop-blur-md border border-white/5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <p className="text-white text-sm font-light italic leading-relaxed">
                 "I enable growth by ensuring that every proposal commitment is operationally achievable and commercially sound."
               </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <a href="tel:9194410915" className="flex items-center gap-2 text-neutral-text hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-lg">phone</span>
              <span className="text-sm font-light">(919) 441-0915</span>
            </a>
            <span className="text-white/20">|</span>
            <a href="mailto:naomidonley@outlook.com" className="flex items-center gap-2 text-neutral-text hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-lg">mail</span>
              <span className="text-sm font-light">naomidonley@outlook.com</span>
            </a>
          </div>

          {/* LinkedIn Button */}
          <div className="flex items-center justify-center mt-4">
            <a
              href="https://www.linkedin.com/in/taneekwadonley/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-primary/50 bg-surface-dark hover:bg-primary/10 text-white hover:text-primary transition-all duration-300"
            >
              <span className="material-symbols-outlined text-lg">person</span>
              <span className="text-sm font-semibold uppercase tracking-wide">LinkedIn</span>
            </a>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-6 -right-6 size-24 border border-primary/20 rounded-full animate-float-slow opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 size-48 border border-white/5 rounded-full animate-pulse-slow opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
