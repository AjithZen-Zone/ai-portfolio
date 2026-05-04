import React, { useState, useEffect } from 'react';

const TopNavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About',      href: '#About' },
    { name: 'Portfolio',  href: '#Work' },
    { name: 'Feedback',   href: '#Feedback' },
    { name: 'Contact',    href: '#Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? 'py-6 bg-background/90 backdrop-blur-md' : 'py-10 bg-transparent'
    }`}>
      <nav className="max-w-[1600px] mx-auto px-8 md:px-12 flex justify-between items-center">
        {/* Branding */}
        <a href="#Hero" className="text-sm font-bold tracking-[0.3em] uppercase text-white">
          AJITH V
        </a>

        {/* Links */}
        <div className="flex items-center gap-12">
          <div className="hidden lg:flex items-center gap-12">
            {links.map(l => (
              <a key={l.name} href={l.href}
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-secondary hover:text-white transition-colors duration-300">
                {l.name}
              </a>
            ))}
          </div>

          <a href="#Work" className="btn-outline py-2.5 px-6 text-[9px] tracking-[0.2em]">
            View Portfolio
          </a>
        </div>
      </nav>
    </header>
  );
};

export default TopNavBar;
