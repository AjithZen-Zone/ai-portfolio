import React from 'react';

const projects = [
  {
    title: "Mammoguard AI",
    label: "Healthcare / AI System",
    desc: "AI-powered system for early breast health analysis with intelligent diagnostic workflows.",
    img: "linear-gradient(135deg, #121212 0%, #050505 100%)",
    icon: "medical_services"
  },
  {
    title: "Lung AI",
    label: "Medical / CV Analysis",
    desc: "Deep learning system for intelligent lung condition screening and screening diagnostics.",
    img: "linear-gradient(225deg, #1a1a1a 0%, #080808 100%)",
    icon: "monitoring"
  },
  {
    title: "Credentials AI",
    label: "Auth / Agent Infrastructure",
    desc: "Automated credential verification powered by AI agents and modern web architecture.",
    img: "linear-gradient(45deg, #111113 0%, #000000 100%)",
    icon: "security"
  },
];

const Projects = () => (
  <section id="Work" className="py-0" style={{ background: '#050505' }}>
    {projects.map((p, i) => (
      <div key={i} className="project-block group">
        {/* Background Image Container */}
        <div className="project-img-container">
           <div className="w-full h-full" style={{ background: p.img }}>
              <div className="w-full h-full flex items-center justify-center opacity-[0.03]">
                 <span className="material-symbols-outlined text-[30rem]">{p.icon}</span>
              </div>
           </div>
           {/* Dark Overlay */}
           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-1000" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full h-full flex flex-col justify-center">
           <div className="max-w-2xl space-y-8">
              <div className="space-y-4">
                 <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">
                    Project {i + 1} / {projects.length}
                 </p>
                 <h2 className="text-white font-black tracking-tightest leading-none"
                     style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
                   {p.title}
                 </h2>
                 <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent/80">
                    {p.label}
                 </p>
              </div>

              <div className="w-16 h-px bg-white/10" />

              <p className="text-lg text-text-secondary font-light leading-relaxed">
                 {p.desc}
              </p>

              <div className="pt-4">
                 <button className="btn-outline px-8 py-4 text-[10px] tracking-[0.25em] uppercase group-hover:border-white transition-all duration-500">
                    View Case Study
                 </button>
              </div>
           </div>
        </div>
      </div>
    ))}
  </section>
);

export default Projects;
