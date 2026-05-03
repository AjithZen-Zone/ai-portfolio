import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-12 pt-28 pb-12 px-6 lg:px-12">
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left space-y-8 animate-float">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-glow-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#2563eb]"></span>
          <span className="font-space text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
            Available for Freelance Work
          </span>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-space text-lg md:text-2xl text-on-surface-variant font-light tracking-widest uppercase">
              AJITH V
            </h2>
            <h1 className="font-space text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
              I help startups build <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI-powered products</span> from idea to deployment.
            </h1>
          </div>
          <p className="font-inter text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            I design and develop scalable, intelligent applications using full stack development and AI.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
          <a 
            href="#Contact" 
            className="group relative px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg rounded-2xl overflow-hidden transition-all hover:shadow-neon hover:-translate-y-1 text-center"
          >
            Start a Project
          </a>
          
          <a 
            href="#Projects" 
            className="px-10 py-5 border border-white/10 hover:bg-white/5 text-white font-bold text-lg rounded-2xl backdrop-blur-md transition-all hover:-translate-y-1 text-center"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Right Content - Profile Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative group">
          {/* Radial Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[100px]"></div>
          
          {/* Animated Background Rings */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-all duration-700 animate-pulse"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-50 group-hover:opacity-100 transition-all duration-700"></div>
          
          {/* Profile Image Container */}
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] shadow-glow-primary">
            <img 
              src="/profile.jpg" 
              alt="AJITH V" 
              className="w-full h-full object-cover transition-all duration-700"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x400/0a0a0a/2563eb?text=AJITH+V';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
