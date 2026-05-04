import React from 'react';

const StrategyCTA = () => (
  <section id="Strategy" className="py-32 px-8 md:px-16" style={{ background: '#050505' }}>
    <div className="max-w-[1600px] mx-auto">
      <div className="bg-[#121212] rounded-3xl p-12 md:p-24 border border-white/5 relative overflow-hidden group">
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="section-label text-white/40">Exclusive Frameworks</p>
              <h2 className="text-white font-black tracking-tightest leading-tight"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                The 2026 AI<br />Product Playbook.
              </h2>
            </div>
            
            <p className="text-xl text-text-secondary font-light leading-relaxed">
              Stop guessing. Download my private collection of frameworks for building, validating, and scaling intelligent products.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               {[
                 "AI Viability Matrix",
                 "RAG vs Fine-Tuning",
                 "Agentic UX Design",
                 "Production Scaling"
               ].map(item => (
                 <div key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-white/20 text-sm">check_circle</span>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">{item}</span>
                 </div>
               ))}
            </div>
            
            <div className="pt-8">
              <a href="/ai-strategy-guide.pdf" download="AJITH_AI_Strategy_Guide.pdf">
                <button className="btn-luxury px-12 py-5 flex items-center gap-4">
                  Download Free Guide
                  <span className="material-symbols-outlined text-lg">download</span>
                </button>
              </a>
            </div>

          </div>

          <div className="hidden lg:flex justify-end">
             <div className="relative w-72 h-96 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl p-8 flex flex-col justify-between group-hover:rotate-2 transition-transform duration-700">
                <div className="space-y-4">
                  <div className="w-12 h-1 bg-white/20" />
                  <p className="text-xs font-bold tracking-widest text-white/40 uppercase">Frameworks</p>
                  <p className="text-2xl font-black text-white leading-tight">Scaling AI Agents in Production.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-white/20 tracking-widest uppercase">By AJITH V</p>
                  <div className="w-full h-px bg-white/5" />
                </div>
                {/* Book spine decoration */}
                <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-white/5 to-transparent rounded-l-xl" />
             </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default StrategyCTA;
