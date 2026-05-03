import React from 'react';

const WhyChooseMe = () => {
  const points = [
    {
      title: "I build real-world, scalable products",
      description: "My solutions are engineered to handle growth and solve actual user pain points.",
      icon: "architecture"
    },
    {
      title: "I combine full stack development with AI",
      description: "Leveraging the power of intelligence within robust web architectures for smarter apps.",
      icon: "auto_awesome"
    },
    {
      title: "I deliver fast and iterate quickly",
      description: "Time-to-market is critical. I use agile workflows to get your product live sooner.",
      icon: "speed"
    },
    {
      title: "I focus on results, not just code",
      description: "Success is measured by business impact and user satisfaction, not just lines written.",
      icon: "monitoring"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12" id="WhyMe">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="font-space text-xs font-bold tracking-[0.4em] text-primary uppercase">
            // VALUE PROPOSITION
          </span>
          <h2 className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why Work With Me?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => (
            <div 
              key={idx}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-all duration-500">
                <span className="material-symbols-outlined text-2xl text-on-surface-variant group-hover:text-primary transition-colors">
                  {point.icon}
                </span>
              </div>
              <h3 className="font-space text-xl font-bold text-white mb-4 leading-tight">
                {point.title}
              </h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed font-light">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
