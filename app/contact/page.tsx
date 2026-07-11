'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Topo from '@/components/Topo';

const needOptions = ['A NEW WEBSITE', 'A CUSTOM APP', 'A FASTER SITE', 'SOMETHING ELSE'];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    need: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', need: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 max-w-[1200px] mx-auto px-6 md:px-10">
        <Topo accent className="pointer-events-none absolute -top-20 -right-24 w-[340px] md:w-[480px] text-viper/15" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="overline mb-4">Contact</p>
          <h1 className="mb-6 leading-[1.02]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Book your <span className="stroke-em">free call</span>.
          </h1>
          <p className="text-lg md:text-xl text-ink-soft max-w-xl">
            Fifteen no-pressure minutes about what you need. You leave with a clear
            scope and a flat price — whether you build with me or not.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-24 border-t border-line pt-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-paper-deep border border-line p-8">
              <div>
                <label htmlFor="name" className="block font-mono text-xs tracking-[0.15em] uppercase text-ink mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-paper border border-line focus:border-viper outline-none transition-smooth text-ink"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-xs tracking-[0.15em] uppercase text-ink mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-paper border border-line focus:border-viper outline-none transition-smooth text-ink"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-ink mb-3">
                  What do you need?
                </p>
                <div className="flex flex-wrap gap-2">
                  {needOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, need: option })}
                      className={`font-mono text-[11px] tracking-[0.1em] px-4 py-2 border transition-smooth ${
                        formData.need === option
                          ? 'bg-ink text-paper border-ink'
                          : 'border-line text-ink-soft hover:border-ink'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs tracking-[0.15em] uppercase text-ink mb-2">
                  Tell me about it
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-paper border border-line focus:border-viper outline-none transition-smooth resize-none text-ink"
                  placeholder="What are you building, replacing, or escaping?"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send it
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-viper font-mono text-sm tracking-[0.05em] text-center"
                >
                  ✓ Got it. You&apos;ll hear back within hours — usually faster.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-10"
          >
            <div className="border-t border-line pt-6">
              <h3 className="text-xl mb-6">What happens next</h3>
              <ol className="space-y-5">
                <li>
                  <p className="font-mono text-xs tracking-[0.1em] uppercase text-viper mb-1">
                    1 — You hear back fast
                  </p>
                  <p className="text-sm text-ink-soft">
                    Average reply is under three hours, from the person who&apos;ll build the work.
                  </p>
                </li>
                <li>
                  <p className="font-mono text-xs tracking-[0.1em] uppercase text-viper mb-1">
                    2 — You get one number
                  </p>
                  <p className="text-sm text-ink-soft">
                    Clear scope, flat price, no retainers. A working draft follows within days.
                  </p>
                </li>
                <li>
                  <p className="font-mono text-xs tracking-[0.1em] uppercase text-viper mb-1">
                    3 — You approve before you pay
                  </p>
                  <p className="text-sm text-ink-soft">
                    The invoice doesn&apos;t exist until you sign off on the draft. The risk stays on my side.
                  </p>
                </li>
              </ol>
            </div>

            <div className="border-t border-line pt-6">
              <h3 className="text-xl mb-6">Quick facts</h3>
              <ul className="space-y-3 text-ink-soft text-sm">
                <li className="flex gap-3"><span className="text-viper">✓</span> Free first consultation</li>
                <li className="flex gap-3"><span className="text-viper">✓</span> No long-term contracts</li>
                <li className="flex gap-3"><span className="text-viper">✓</span> One-time pricing, no monthly fees</li>
                <li className="flex gap-3"><span className="text-viper">✓</span> You talk directly to the person building it</li>
                <li className="flex gap-3"><span className="text-viper">✓</span> Average response under 3 hours</li>
              </ul>
            </div>

            <div className="border-t border-line pt-6">
              <h3 className="text-xl mb-4">Prefer to talk?</h3>
              <p className="text-ink-soft mb-6 text-sm">Call or text — Yuma &amp; Foothills, AZ.</p>
              <a href="tel:+19289163711" className="btn-secondary w-full mb-3">
                (928) 916-3711
              </a>
              <a
                href="mailto:bowman.shiann@gmail.com"
                className="block text-center font-mono text-[13px] tracking-[0.08em] text-ink-soft hover:text-viper transition-smooth py-3"
              >
                bowman.shiann@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
