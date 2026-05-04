import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const FeedbackForm = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email || 'Not provided',
        message: form.message,
        subject: 'User Feedback',
        to_email: 'ajithpec317@gmail.com',
      }, PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="Feedback" className="py-48 px-8 md:px-16" style={{ background: '#050505' }}>
      <div className="max-w-4xl mx-auto space-y-24">

        {/* Editorial Header */}
        <div className="space-y-6">
          <p className="section-label">Feedback</p>
          <h2 className="text-white font-black tracking-tightest leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
            Share Your<br />Feedback.
          </h2>
          <p className="text-lg text-text-secondary font-light leading-relaxed max-w-md">
            Your feedback helps improve my work and services.
          </p>
        </div>

        {status === 'success' ? (
          <div className="py-12 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">Thank you for your feedback!</h3>
            <button onClick={() => setStatus('idle')} className="btn-luxury px-10 mt-6">Send More</button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-16 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              <div className="space-y-2">
                <label className="input-label-luxury">Name *</label>
                <input name="name" value={form.name} onChange={handleChange}
                  placeholder="Your Name" className="input-minimal" required />
              </div>
              <div className="space-y-2">
                <label className="input-label-luxury">Email (Optional)</label>
                <input name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="your@email.com" className="input-minimal" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="input-label-luxury">Feedback Message *</label>
              <textarea name="message" value={form.message} onChange={handleChange}
                rows={4} placeholder="Your thoughts..." className="input-minimal resize-none" required />
            </div>

            <div className="pt-10">
              <button type="submit" disabled={status === 'sending'}
                className="btn-luxury w-full md:w-auto px-16 py-5 disabled:opacity-50">
                {status === 'sending' ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>

            {status === 'error' && (
              <p className="text-xs font-bold text-red-500 tracking-widest uppercase">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default FeedbackForm;
