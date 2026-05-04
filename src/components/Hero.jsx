import React from 'react';

const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden"
      style={{ background: '#050505' }}
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* ── LEFT: CONTENT ── */}
        <div className="relative z-10 space-y-12 animate-fade-in-up">
          <div className="space-y-6">
            <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40">
              Luxury Personal Brand
            </p>
            <h1 className="text-white font-black tracking-tightest leading-none"
                style={{ fontSize: 'clamp(4rem, 12vw, 9.5rem)' }}>
              AJITH V
            </h1>
            <p className="text-sm md:text-base font-bold tracking-[0.4em] uppercase text-text-secondary">
              Full Stack Developer | AI Product Builder
            </p>
          </div>

          <div className="w-20 h-px bg-white/20" />

          <p className="text-lg md:text-xl text-text-secondary font-light max-w-lg leading-relaxed">
            I build intelligent systems and digital products that solve real-world problems.
          </p>

          <div className="pt-4 flex flex-wrap gap-6">
            <a href="#Work" className="btn-luxury">
              View Work
            </a>
            <a href="#Contact" className="btn-outline border-white/20">
              Start Project
            </a>
          </div>
        </div>

        {/* ── RIGHT: IMAGE (FULLY VISIBLE) ── */}
        <div className="relative h-[60vh] lg:h-[85vh] flex justify-center lg:justify-end">
           <div className="relative w-full max-w-lg h-full overflow-hidden rounded-2xl group border border-white/5 shadow-2xl">
              <img
                src="/profile.jpg"
                alt="AJITH V"
                className="w-full h-full object-cover object-top grayscale group-hover:scale-105 transition-transform duration-1000 opacity-80"
                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
           </div>
           
           {/* Floating decoration */}
           <div className="absolute -bottom-10 -right-10 hidden xl:block opacity-10">
              <span className="text-[12rem] font-black tracking-tighter text-white select-none">AJ</span>
           </div>
        </div>

      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
         <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
