import React from 'react';

const TopNavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center font-space">
        <div className="text-xl md:text-2xl font-bold tracking-tighter text-white hover:text-primary transition-all cursor-pointer flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm shrink-0">A</span>
          <span className="truncate">AJITH V</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10">
          {['About', 'Services', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="text-[11px] font-bold text-on-surface-variant hover:text-white transition-all tracking-[0.2em] uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors text-2xl hidden md:block">
            hub
          </button>
          <a 
            href="#Contact" 
            className="px-4 md:px-6 py-2 md:py-2.5 bg-white/5 border border-white/10 text-white font-bold text-[9px] md:text-[10px] uppercase tracking-widest rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all shadow-glow-primary whitespace-nowrap"
          >
            Start Project
          </a>
        </div>
      </nav>
    </header>
  );
};

export default TopNavBar;
