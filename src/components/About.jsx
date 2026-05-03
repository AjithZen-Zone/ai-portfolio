import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-6 md:px-12" id="About">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden group border border-white/5 shadow-xl">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="space-y-8 relative z-10 text-center md:text-left">
            <div className="space-y-4">
              <span className="font-space text-xs font-bold tracking-[0.4em] text-primary uppercase block">
                // ABOUT THE ARCHITECT
              </span>
              <h2 className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight">
                Engineering Digital Intelligence
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="font-inter text-lg md:text-xl text-on-surface-variant leading-relaxed font-light">
                I am a <span className="text-white font-normal">full stack developer and freelancer</span> specializing in AI-powered applications. I work with startups and individuals to build scalable, real-world solutions from idea to deployment.
              </p>
              
              <p className="font-inter text-lg md:text-xl text-on-surface-variant leading-relaxed font-light">
                My focus is on delivering <span className="text-white font-normal">high-quality, impactful digital products</span> that combine robust full stack architecture with cutting-edge artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
