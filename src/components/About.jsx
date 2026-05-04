import React from 'react';

const About = () => (
  <section id="About" className="py-48 px-8 md:px-16" style={{ background: '#050505' }}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-8">
        <p className="section-label">Profile</p>
        <h2 className="text-white font-black tracking-tightest leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
          Minimalist<br />Architect.
        </h2>
      </div>

      <div className="space-y-10">
        <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed tracking-tight">
          I am a Full Stack Developer and AI Product Builder dedicated to creating intelligent digital experiences. My work focuses on the intersection of complex engineering and clean, intentional design.
        </p>
        <p className="text-base text-text-muted leading-relaxed font-light">
          With a focus on startups and innovative businesses, I help turn abstract ideas into scalable, production-ready products. I believe in the power of simplicity and the impact of well-crafted software.
        </p>
        <div className="pt-4">
           <a href="#Contact" className="text-sm font-bold tracking-[0.3em] uppercase text-white border-b border-white/20 pb-2 hover:border-white transition-all">
              Work with me
           </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
