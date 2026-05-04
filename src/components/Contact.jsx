import React from 'react';

const contactItems = [
  { label: "Email", value: "ajithpec317@gmail.com", href: "mailto:ajithpec317@gmail.com" },
  { label: "Phone", value: "+91 9342977517",      href: "tel:+919342977517" },
  { label: "LinkedIn", value: "ajith-v03",         href: "https://linkedin.com/in/ajith-v03" },
];

const Contact = () => (
  <section id="Contact" className="py-32 px-6 md:px-10" style={{ background: '#0a0a0a' }}>
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="space-y-8">
        <div className="space-y-6">
          <p className="section-label">Connect</p>
          <h2 className="text-white font-black tracking-tightest leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
            Let's build<br />it together.
          </h2>
        </div>
        <div className="pt-6">
          <a href="#Start" className="btn-primary px-12 py-5 text-sm uppercase tracking-widest font-black">
            Start a Project
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-end gap-12">
        {contactItems.map((c, i) => (
          <div key={i} className="group flex flex-col gap-2">
            <p className="text-[10px] font-bold text-text-muted tracking-[0.25em] uppercase">{c.label}</p>
            <a href={c.href} target="_blank" rel="noopener noreferrer"
               className="text-2xl md:text-4xl font-bold text-white tracking-tighter hover:text-accent transition-all duration-300">
              {c.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
