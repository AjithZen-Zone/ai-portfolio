import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const ProjectForm = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', description: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.full_name,
        from_email: form.email,
        phone: form.phone,
        message: form.description,
        to_email: 'ajithpec317@gmail.com',
      }, PUBLIC_KEY);
      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', description: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="Start" className="py-48 px-8 md:px-16 bg-[#080808]">
      <div className="max-w-4xl mx-auto space-y-24">

        {/* Editorial Header */}
        <div className="space-y-6">
          <p className="section-label">Collaboration</p>
          <h2 className="text-white font-black tracking-tightest leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
            Start a<br />Project.
          </h2>
        </div>

        {status === 'success' ? (
          <div className="py-12 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">Your request has been sent successfully.</h3>
            <p className="text-text-secondary font-light">I’ll contact you soon.</p>
            <button onClick={() => setStatus('idle')} className="btn-luxury px-10 mt-6">Send Another</button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-16 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              <div className="space-y-2">
                <label className="input-label-luxury">Full Name *</label>
                <input name="full_name" value={form.full_name} onChange={handleChange}
                  placeholder="Enter your full name" className="input-minimal" required />
              </div>
              <div className="space-y-2">
                <label className="input-label-luxury">Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="name@company.com" className="input-minimal" required />
              </div>
              <div className="space-y-2">
                <label className="input-label-luxury">Phone Number *</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX" className="input-minimal" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="input-label-luxury">Project Description *</label>
              <textarea name="description" value={form.description} onChange={handleChange}
                rows={4} placeholder="Briefly describe your vision and goals..." className="input-minimal resize-none" required />
            </div>

            <div className="pt-10">
              <button type="submit" disabled={status === 'sending'}
                className="btn-luxury w-full md:w-auto px-16 py-5 disabled:opacity-50">
                {status === 'sending' ? 'Sending...' : 'Start a Project'}
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

export default ProjectForm;
