'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-96 flex items-center justify-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="glow-text">Let's Talk Strategy</span>
          </h1>
          <p className="text-xl text-gray-400">
            Ready to transform your digital presence? Let's discuss your goals and see if we're the right fit.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-gray-700 focus:border-cyan-400 outline-none transition-smooth"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-gray-700 focus:border-cyan-400 outline-none transition-smooth"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-gray-700 focus:border-cyan-400 outline-none transition-smooth"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-gray-700 focus:border-cyan-400 outline-none transition-smooth resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-lg bg-gradient-cyan text-dark-950 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-smooth"
              >
                Send Message
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-4 rounded-lg bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-center"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨ Message sent! We'll be in touch soon.
                  </motion.div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 glow-text">What Happens Next</h3>
              <ol className="space-y-4 text-gray-300">
                <li>
                  <span className="font-semibold text-cyan-400">1. We Review</span>
                  <p className="text-sm text-gray-400 mt-1">We analyze your submission and see if we're aligned.</p>
                </li>
                <li>
                  <span className="font-semibold text-cyan-400">2. We Connect</span>
                  <p className="text-sm text-gray-400 mt-1">Schedule a 30-min strategy call to discuss goals.</p>
                </li>
                <li>
                  <span className="font-semibold text-cyan-400">3. We Propose</span>
                  <p className="text-sm text-gray-400 mt-1">Get a custom proposal with strategy and timeline.</p>
                </li>
              </ol>
            </div>

            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 glow-text">Quick Facts</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>✓ Free strategy consultation</li>
                <li>✓ No long-term contracts</li>
                <li>✓ Performance-based pricing available</li>
                <li>✓ Direct access to leadership</li>
                <li>✓ Limited 2026 slots available</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 glow-text">Prefer to Schedule?</h3>
              <p className="text-gray-300 mb-4">Use our calendar to book a time that works for you.</p>
              <button className="w-full px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-smooth">
                Open Calendly
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thank You Animation */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-40"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                opacity: 1,
              }}
              animate={{
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 400,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 400,
                opacity: 0,
              }}
              transition={{ duration: 2, delay: i * 0.05 }}
              className="text-2xl"
            >
              ✨
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
