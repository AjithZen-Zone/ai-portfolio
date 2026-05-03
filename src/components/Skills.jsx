import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS"],
      icon: "web",
      color: "primary"
    },
    {
      title: "Backend",
      skills: ["Node.js", "APIs"],
      icon: "database",
      color: "secondary"
    },
    {
      title: "AI & Tools",
      skills: ["AI-assisted development", "Prompt engineering"],
      icon: "psychology",
      color: "primary"
    },
    {
      title: "Deployment",
      skills: ["Vercel", "Netlify"],
      icon: "cloud_done",
      color: "secondary"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#080808]" id="Skills">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="font-space text-xs font-bold tracking-[0.4em] text-secondary uppercase">
            // TECH STACK
          </span>
          <h2 className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 group shadow-xl"
            >
              <div className={`w-14 h-14 rounded-2xl bg-${category.color}/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <span className={`material-symbols-outlined text-3xl text-${category.color}`}>
                  {category.icon}
                </span>
              </div>
              
              <h3 className="font-space text-xl font-bold text-white mb-6 tracking-tight">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-on-surface-variant group-hover:text-white transition-colors">
                    <span className={`w-1.5 h-1.5 rounded-full bg-${category.color}`}></span>
                    <span className="font-inter text-sm font-light tracking-wide">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
