import React from 'react';

const reasons = [
  {
    num: "01",
    title: "Scalable Products",
    desc: "I build production-ready applications designed to scale with your user base from day one.",
  },
  {
    num: "02",
    title: "AI Integration",
    desc: "Seamlessly blending machine learning and AI agents into full stack architectures.",
  },
  {
    num: "03",
    title: "Rapid Iteration",
    desc: "Fast delivery cycles that allow startups to pivot and ship features at high velocity.",
  },
  {
    num: "04",
    title: "Product Focus",
    desc: "Focusing on business results and user experience, not just writing clean code.",
  },
];

const WhyChooseMe = () => (
  <section id="Why" className="py-32 px-6 md:px-10 bg-[#0d0d0f]">
    <div className="max-w-6xl mx-auto space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
        <div className="space-y-6">
          <p className="section-label">Approach</p>
          <h2 className="text-white font-black tracking-tightest leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
            Why Work<br />With Me.
          </h2>
        </div>
        <p className="text-text-secondary text-lg font-light max-w-md leading-relaxed pb-2">
          I combine deep AI expertise with robust engineering to ship products that move the needle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r) => (
          <div key={r.num} className="space-y-6 p-1">
            <span className="text-xs font-bold text-accent font-mono tracking-widest">{r.num}</span>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white tracking-tight">{r.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseMe;
