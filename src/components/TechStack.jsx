import React from 'react';

const tech = [
  { category: "Frontend", tools: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { category: "Backend", tools: ["Node.js", "Python", "PostgreSQL", "GraphQL"] },
  { category: "AI / ML", tools: ["PyTorch", "TensorFlow", "OpenAI API", "LangChain"] },
  { category: "Cloud", tools: ["AWS", "Vercel", "Docker", "Firebase"] },
];

const TechStack = () => (
  <section id="Stack" className="py-32 px-8 md:px-16" style={{ background: '#050505' }}>
    <div className="max-w-[1600px] mx-auto space-y-24">
      
      <div className="space-y-6">
        <p className="section-label">Capabilities</p>
        <h2 className="text-white font-black tracking-tightest leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
          Tech Arsenal.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
        {tech.map((item, i) => (
          <div key={i} className="space-y-8 group">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 group-hover:text-white transition-colors duration-500">
              {item.category}
            </h3>
            <div className="flex flex-col gap-5">
              {item.tools.map((tool, ti) => (
                <div key={ti} className="flex items-center gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-white transition-colors duration-500" />
                   <span className="text-lg text-text-secondary font-light tracking-tight group-hover:text-white transition-colors duration-500">
                     {tool}
                   </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
