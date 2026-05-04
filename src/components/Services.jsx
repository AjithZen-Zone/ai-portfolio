import React from 'react';

const services = [
  {
    title: "Full Stack Development",
    desc: "End-to-end web applications built with modern frameworks, robust APIs, and cloud-ready architecture.",
    num: "01"
  },
  {
    title: "AI Integration",
    desc: "Intelligent automation, ML models, and AI-powered features integrated directly into your product.",
    num: "02"
  },
  {
    title: "MVP Development",
    desc: "Rapid prototyping and launch-ready products for startups validating their ideas fast.",
    num: "03"
  },
  {
    title: "Custom Solutions",
    desc: "Tailored software built for your specific business challenges with long-term scalability in mind.",
    num: "04"
  },
];

const Services = () => (
  <section id="Services" className="py-32 px-6 md:px-10" style={{ background: '#0a0a0a' }}>
    <div className="max-w-6xl mx-auto space-y-24">
      <div className="space-y-6">
        <p className="section-label">Expertise</p>
        <h2 className="text-white font-black tracking-tightest leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
          Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
        {services.map((s, i) => (
          <div key={i} className="group space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="text-xs font-bold text-accent/50 font-mono tracking-widest">{s.num}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                {s.title}
              </h3>
            </div>
            <p className="text-base text-text-secondary leading-relaxed font-light max-w-md">
              {s.desc}
            </p>
            <div className="w-12 h-px bg-white/10 group-hover:w-20 transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
