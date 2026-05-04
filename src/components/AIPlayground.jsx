import React, { useState } from 'react';

const AIPlayground = () => {
  const [idea, setIdea] = useState('');
  const [status, setStatus] = useState('idle'); // idle | analyzing | done
  const [result, setResult] = useState(null);

  const analyzeIdea = () => {
    if (!idea.trim()) return;
    setStatus('analyzing');
    
    // Simulate AI processing
    setTimeout(() => {
      setStatus('done');
      setResult({
        viability: Math.floor(Math.random() * 20) + 75, // 75-95%
        techComplexity: "Moderate",
        aiOpportunity: "High",
        feedback: "This idea has strong market potential. Leveraging a RAG-based architecture could significantly improve user retention."
      });
    }, 2000);
  };

  return (
    <section id="Playground" className="py-32 px-8 md:px-16 bg-[#0a0a0a]">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="space-y-8">
          <p className="section-label">Interactive</p>
          <h2 className="text-white font-black tracking-tightest leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
            AI Playground.
          </h2>
          <p className="text-xl text-text-secondary font-light max-w-md leading-relaxed">
            Experience my AI product thinking in real-time. Enter a startup idea below to get an instant AI-powered validation report.
          </p>
        </div>

        <div className="relative group">
          {/* Box container */}
          <div className="bg-[#121212] rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl space-y-8">
            <div className="space-y-4">
              <label className="input-label-luxury">Startup Idea</label>
              <textarea 
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g., An AI-powered personal trainer for professional swimmers..."
                className="input-minimal h-32 resize-none"
                disabled={status === 'analyzing'}
              />
            </div>

            <button 
              onClick={analyzeIdea}
              disabled={status === 'analyzing' || !idea.trim()}
              className="btn-luxury w-full py-5 disabled:opacity-50"
            >
              {status === 'analyzing' ? 'AI Analyzing...' : 'Analyze Idea'}
            </button>

            {status === 'done' && result && (
              <div className="pt-8 border-t border-white/5 space-y-6 animate-fade-in-up">
                 <div className="flex justify-between items-end">
                    <p className="text-xs font-bold tracking-widest text-white/40 uppercase">Viability Score</p>
                    <p className="text-4xl font-black text-white">{result.viability}%</p>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/[0.02] rounded-lg">
                       <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Complexity</p>
                       <p className="text-sm text-white">{result.techComplexity}</p>
                    </div>
                    <div className="p-4 bg-white/[0.02] rounded-lg">
                       <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">AI Match</p>
                       <p className="text-sm text-white">{result.aiOpportunity}</p>
                    </div>
                 </div>
                 <p className="text-sm text-text-secondary leading-relaxed italic">
                   "{result.feedback}"
                 </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIPlayground;
