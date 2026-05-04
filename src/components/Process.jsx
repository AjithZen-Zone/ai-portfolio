import React from 'react';

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We dive deep into your product vision, identifying the core technical challenges and AI opportunities."
  },
  {
    num: "02",
    title: "Architecture Design",
    desc: "Crafting a scalable full stack infrastructure and selecting the right AI models for your specific use case."
  },
  {
    num: "03",
    title: "Agile Development",
    desc: "Rapidly building and iterating on the product with a focus on production-ready code and robust AI integrations."
  },
  {
    num: "04",
    title: "Deployment & Scale",
    desc: "Launching your product to the world and ensuring it scales seamlessly as your user base grows."
  }
];

const Process = () => (
  <section id="Process" className="py-32 px-8 md:px-16 bg-[#080808]">
    <div className="max-w-[1600px] mx-auto space-y-24">
      
      <div className="space-y-6">
        <p className="section-label">Workflow</p>
        <h2 className="text-white font-black tracking-tightest leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
          How I Work.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col gap-6 group">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/20 group-hover:text-white transition-colors duration-500">
              {step.num}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none group-hover:translate-x-2 transition-transform duration-500">
              {step.title}
            </h3>
            <p className="text-lg text-text-secondary font-light max-w-md leading-relaxed">
              {step.desc}
            </p>
            <div className="w-12 h-px bg-white/10 group-hover:w-24 transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
