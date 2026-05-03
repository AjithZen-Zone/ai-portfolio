import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-2">
          <div className="text-2xl font-bold font-space text-white tracking-tighter">
            AJITH V
          </div>
          <p className="font-inter text-[10px] text-on-surface-variant tracking-[0.2em] uppercase opacity-50">
            Engineered for the Future
          </p>
        </div>
        
        <div className="flex gap-10">
          {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map(item => (
            <a 
              key={item}
              href="#" 
              className="font-space text-[10px] font-bold tracking-[0.3em] uppercase text-on-surface-variant hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="font-inter text-[10px] text-on-surface-variant tracking-widest uppercase opacity-40">
          © 2024 AJITH V. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
