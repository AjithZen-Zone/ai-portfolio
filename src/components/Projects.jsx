import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Mammoguard AI",
      description: "AI-powered system designed to assist in early breast health analysis and improve detection workflows.",
      tags: ["AI", "Healthcare", "Full Stack"],
      icon: "health_and_safety",
      color: "primary"
    },
    {
      title: "Lung AI",
      description: "AI-based solution for analyzing lung conditions and providing intelligent diagnostic insights.",
      tags: ["Computer Vision", "Diagnostics", "AI"],
      icon: "lunge_capacity",
      color: "secondary"
    },
    {
      title: "Credentials AI",
      description: "Automated AI system for verifying and managing credentials, improving trust and efficiency.",
      tags: ["Authentication", "AI Agents", "Next.js"],
      icon: "verified_user",
      color: "primary"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12" id="Projects">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <span className="font-space text-xs font-bold tracking-[0.4em] text-primary uppercase">
            // INNOVATIONS
          </span>
          <h2 className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative glass-card rounded-[2.5rem] p-8 md:p-10 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl overflow-hidden border border-white/5 hover:border-primary/20 shadow-xl"
            >
              {/* Card Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-${project.color}/5 rounded-full blur-3xl group-hover:bg-${project.color}/20 transition-all duration-700`}></div>
              
              <div className="relative z-10 space-y-8">
                <div className={`w-16 h-16 rounded-2xl bg-${project.color}/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-glow-${project.color}`}>
                  <span className={`material-symbols-outlined text-4xl text-${project.color}`}>
                    {project.icon}
                  </span>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-space text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className={`text-[10px] font-bold uppercase tracking-widest text-${project.color}/80 border border-${project.color}/20 px-2.5 py-1 rounded-lg bg-${project.color}/5`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="font-inter text-base text-on-surface-variant leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
                
                <div className="pt-4">
                  <button className={`flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-${project.color} group-hover:gap-4 transition-all`}>
                    View Project
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
