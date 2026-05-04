import React from 'react';

const Footer = () => (
  <footer className="py-20 px-8 md:px-16 border-t border-white/5" style={{ background: '#050505' }}>
    <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="space-y-2 text-center md:text-left">
        <p className="text-sm font-bold tracking-[0.4em] uppercase text-white">AJITH V</p>
        <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted">Luxury Personal Brand 2026</p>
      </div>

      <div className="flex items-center gap-12">
        <a href="mailto:ajithpec317@gmail.com"
          className="text-[10px] font-bold tracking-[0.3em] uppercase text-text-muted hover:text-white transition-colors">
          ajithpec317@gmail.com
        </a>
        <a href="https://linkedin.com/in/ajith-v03" target="_blank" rel="noopener noreferrer"
          className="text-[10px] font-bold tracking-[0.3em] uppercase text-text-muted hover:text-white transition-colors">
          LinkedIn
        </a>
      </div>

      <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-text-muted/40">
        © {new Date().getFullYear()} — All Rights Reserved
      </p>
    </div>
  </footer>
);

export default Footer;
