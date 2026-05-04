import React, { useState } from 'react';

const ReviewForm = () => {
  const [form, setForm] = useState({ name: '', role: '', review: '' });
  const [done, setDone] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (form.name.trim() && form.review.trim()) {
      setDone(true);
      setTimeout(() => {
        setDone(false);
        setForm({ name: '', role: '', review: '' });
      }, 4000);
    }
  };

  return (
    <section id="Review" className="bg-white py-28 px-8 md:px-16">
      <div className="max-w-2xl mx-auto">

        <p className="text-[10px] tracking-[0.45em] uppercase text-neutral-400 mb-16">
          Share Your Experience
        </p>

        {done ? (
          <div className="py-16 text-center space-y-4">
            <p className="font-display text-3xl text-ink">Thank you.</p>
            <p className="text-sm text-neutral-400">Your review has been received.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-3">
                  Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  required
                  placeholder="Your name"
                  className="input-underline"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-3">
                  Role
                </label>
                <input
                  name="role"
                  value={form.role}
                  onChange={handle}
                  placeholder="e.g. Founder, Client"
                  className="input-underline"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-3">
                Review *
              </label>
              <textarea
                name="review"
                value={form.review}
                onChange={handle}
                required
                rows={4}
                placeholder="Share your experience..."
                className="input-underline resize-none"
              />
            </div>

            <button
              type="submit"
              className="text-xs tracking-[0.35em] uppercase border border-ink text-ink px-8 py-3 hover:bg-ink hover:text-white transition-all duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ReviewForm;
