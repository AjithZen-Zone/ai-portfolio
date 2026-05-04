import React from 'react';

const testimonials = [
  {
    quote: "AJITH delivered exactly what we needed. The AI integration was smooth and the product felt production-ready. Highly recommended.",
    author: "Founder",
    context: "Startup Project"
  },
  {
    quote: "Fast, reliable, and very easy to work with. He understands both development and product thinking.",
    author: "Freelance Client",
    context: "Product Design"
  },
  {
    quote: "Impressive work on AI-based systems. The solution was clean, efficient, and well-structured.",
    author: "Tech Reviewer",
    context: "System Architecture"
  },
  {
    quote: "Great communication and fast delivery. Turned our idea into a working product quicker than expected.",
    author: "Product Owner",
    context: "MVP Development"
  },
  {
    quote: "Strong problem-solving skills and attention to detail. Would definitely work again.",
    author: "Design Collaborator",
    context: "UI/UX Project"
  }
];

const Testimonials = () => (
  <section id="Trust" className="py-48 px-8 md:px-16" style={{ background: '#050505' }}>
    <div className="max-w-6xl mx-auto space-y-32">
      <div className="space-y-4">
        <p className="section-label">Trust</p>
        <h2 className="text-white font-black tracking-tightest"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          Client Feedback
        </h2>
      </div>

      <div className="space-y-48">
        {testimonials.map((t, i) => (
          <div key={i} className="max-w-5xl space-y-10 animate-fade-in-up">
            <p className="text-white font-medium leading-tight tracking-tight"
               style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              "{t.quote}"
            </p>
            <div className="flex items-center gap-6">
               <div className="w-12 h-px bg-white/20" />
               <div className="space-y-1">
                  <p className="text-sm font-bold tracking-[0.2em] uppercase text-white">{t.author}</p>
                  <p className="text-xs text-text-muted uppercase tracking-[0.1em]">{t.context}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
