
import React from 'react';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'what-i-do', label: 'What I Do' },
    { id: 'projects', label: 'Work' },
    { id: 'how-i-think', label: 'Philosophy' },
    { id: 'career', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <aside className="fixed left-0 top-0 bottom-0 w-20 z-50 glass-sidebar flex flex-col items-center justify-between py-10 hidden md:flex">
        <div className="group flex items-center justify-center size-10 rounded-lg border border-white/10 text-primary hover:bg-white/5 transition-all cursor-pointer">
          <span className="font-bold text-xl tracking-tighter group-hover:scale-110 transition-transform uppercase">ND</span>
        </div>

        <nav className="flex flex-col gap-10 items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group flex flex-col items-center gap-2 cursor-pointer transition-all ${
                activeSection === item.id ? 'opacity-100' : 'opacity-40 hover:opacity-100'
              }`}
            >
              <span 
                className={`w-1 transition-all rounded-full ${
                  activeSection === item.id ? 'h-10 bg-primary' : 'h-1 bg-white group-hover:h-8'
                }`}
              ></span>
              <span className={`vertical-text text-[10px] uppercase tracking-[0.2em] font-bold ${
                activeSection === item.id ? 'text-primary' : 'text-white'
              }`}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <button className="flex items-center justify-center text-white/50 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[24px]">more_vert</span>
        </button>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-background-dark/90 backdrop-blur border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-primary tracking-tighter uppercase">Naomi Donley</span>
        <button className="text-white"><span className="material-symbols-outlined">menu</span></button>
      </header>
    </>
  );
};

export default Sidebar;
