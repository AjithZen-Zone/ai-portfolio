import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Full Stack Development",
      description: "Build complete, scalable web applications using the latest technologies and best practices.",
      icon: "web_stories",
      color: "primary"
    },
    {
      title: "AI Integration",
      description: "Add intelligent features, automation, and AI-powered systems to your existing or new products.",
      icon: "psychology_alt",
      color: "secondary"
    },
    {
      title: "MVP Development",
      description: "Turn ideas into working products quickly. Perfect for startups looking to validate their vision.",
      icon: "bolt",
      color: "primary"
    },
    {
      title: "Custom Solutions",
      description: "Develop tailored software for specific business needs, ensuring maximum efficiency and impact.",
      icon: "token",
      color: "secondary"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#080808]" id="Services">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="font-space text-xs font-bold tracking-[0.4em] text-secondary uppercase">
            // EXPERTISE
          </span>
          <h2 className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight">
            Services I Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 group shadow-xl hover:shadow-glow-primary"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className={`w-16 h-16 rounded-2xl bg-${service.color}/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                  <span className={`material-symbols-outlined text-4xl text-${service.color}`}>
                    {service.icon}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-space text-2xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="font-inter text-base text-on-surface-variant leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
