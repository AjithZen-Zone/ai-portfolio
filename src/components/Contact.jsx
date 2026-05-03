import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "ajithpec317@gmail.com",
      href: "mailto:ajithpec317@gmail.com",
      icon: "mail"
    },
    {
      label: "Phone",
      value: "+91 9342977517",
      href: "tel:+919342977517",
      icon: "call"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ajith-v03",
      href: "https://linkedin.com/in/ajith-v03",
      icon: "share"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#080808]" id="Contact">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group border border-white/5 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50"></div>
          
          <div className="relative z-10 space-y-12">
            <div className="space-y-6">
              <span className="font-space text-xs font-bold tracking-[0.4em] text-secondary uppercase">
                // PARTNERSHIP
              </span>
              <h2 className="font-space text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
                Let’s Build Your Product
              </h2>
              <p className="font-inter text-lg text-on-surface-variant max-w-xl mx-auto font-light leading-relaxed">
                If you have an idea or need a developer to bring your vision to life, I’d love to work with you. Let's create something intelligent together.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 group/item"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover/item:bg-primary/10 group-hover/item:scale-110 transition-all duration-500 shadow-xl">
                    <span className="material-symbols-outlined text-2xl text-on-surface-variant group-hover/item:text-primary">
                      {info.icon}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="block font-inter text-sm text-white group-hover/item:text-primary transition-colors">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="pt-12">
              <a 
                href="mailto:ajithpec317@gmail.com"
                className="inline-block px-12 py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold text-xl rounded-2xl hover:shadow-neon transition-all hover:-translate-y-1 shadow-glow-primary"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
