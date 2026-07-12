'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const needOptions = ['A new website', 'A custom app', 'A faster site', 'Something else'];
const timelineOptions = ['As soon as possible', 'Within a month', 'Just exploring'];

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Status = 'idle' | 'sending' | 'done' | 'error';

export default function Contact() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    need: '',
    timeline: '',
    message: '',
    name: '',
    email: '',
    website: '', // honeypot — humans never see or fill this
  });

  const steps = ['The project', 'The details', 'You'];

  const canNext =
    (step === 0 && form.need && form.timeline) ||
    (step === 1 && form.message.trim().length > 0) ||
    step === 2;

  const submit = async () => {
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg('Add your name and a valid email so I can reply.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || 'Something went wrong.');
      setStatus('done');
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : 'Something went wrong.');
      setStatus('error');
    }
  };

  const chip = (selected: boolean) =>
    `text-[14px] px-5 py-3 rounded-full border transition-smooth ${
      selected
        ? 'bg-ink text-paper border-ink'
        : 'border-line text-ink-soft hover:border-ink hover:text-ink'
    }`;

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing }}
        >
          <p className="eyebrow mb-4">Start a project</p>
          <h1 className="mb-6 leading-[1.02]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Tell me what you <span className="stroke-em">need</span>.
          </h1>
          <p className="text-lg md:text-xl text-ink-soft max-w-xl">
            Three quick steps — under a minute. You&apos;ll get one flat number
            back, usually within three hours.
          </p>
        </motion.div>
      </section>

      {/* Form */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-28 border-t border-line pt-14 md:pt-16">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
          <div className="md:col-span-3">
            {status === 'done' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easing }}
                className="border border-line bg-paper-deep p-10 md:p-14"
              >
                <p className="eyebrow mb-6" style={{ color: '#2F3B24' }}>Received</p>
                <h2 className="mb-5" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                  Your brief just landed.
                </h2>
                <p className="text-ink-soft text-lg leading-relaxed max-w-lg">
                  I read every submission personally — you&apos;ll hear back with a
                  clear scope and one flat number, usually within three hours.
                  Watch your inbox.
                </p>
              </motion.div>
            ) : (
              <div>
                {/* Proof, right where the decision happens */}
                <p className="text-[13px] text-ink-faint mb-8">
                  <span className="text-ink">50+</span> Yuma businesses ·{' '}
                  <span className="text-ink">5.0★</span> average rating ·{' '}
                  <span className="text-ink">zero</span> refunds ever requested
                </p>

                {/* Progress bar — starts ahead so finishing feels closer */}
                <div className="h-[3px] bg-line mb-4 overflow-hidden rounded-full">
                  <motion.div
                    className="h-full bg-viper rounded-full"
                    initial={false}
                    animate={{ width: `${15 + step * 35}%` }}
                    transition={{ duration: 0.5, ease: easing }}
                  />
                </div>

                {/* Progress */}
                <div className="flex items-center gap-4 mb-10">
                  {steps.map((label, i) => (
                    <button
                      key={label}
                      onClick={() => i < step && setStep(i)}
                      className={`flex items-center gap-3 ${i < step ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <span
                        className={`font-mono text-[11px] tracking-[0.15em] uppercase transition-smooth ${
                          i === step ? 'text-ink' : i < step ? 'text-viper' : 'text-ink-faint'
                        }`}
                      >
                        {i < step ? '✓ ' : `${i + 1} — `}
                        {label}
                      </span>
                      {i < steps.length - 1 && <span className="w-8 h-px bg-line" />}
                    </button>
                  ))}
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="absolute opacity-0 pointer-events-none h-0 w-0"
                />

                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.35, ease: easing }}
                    >
                      <h2 className="text-2xl md:text-3xl mb-8">What do you need?</h2>
                      <div className="flex flex-wrap gap-3 mb-12">
                        {needOptions.map((o) => (
                          <button key={o} type="button" onClick={() => setForm({ ...form, need: o })} className={chip(form.need === o)}>
                            {o}
                          </button>
                        ))}
                      </div>
                      <h2 className="text-2xl md:text-3xl mb-8">How soon?</h2>
                      <div className="flex flex-wrap gap-3">
                        {timelineOptions.map((o) => (
                          <button key={o} type="button" onClick={() => setForm({ ...form, timeline: o })} className={chip(form.timeline === o)}>
                            {o}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.35, ease: easing }}
                    >
                      <h2 className="text-2xl md:text-3xl mb-3">Tell me about it.</h2>
                      <p className="text-ink-soft mb-8">
                        A few sentences is plenty — what you&apos;re building, replacing, or escaping.
                      </p>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={7}
                        autoFocus
                        placeholder="e.g. I run a landscaping business and my Wix site costs $39/mo and never brings in work…"
                        className="w-full px-5 py-4 bg-paper-deep border border-line focus:border-viper outline-none transition-smooth resize-none text-ink text-lg"
                      />
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.35, ease: easing }}
                    >
                      <h2 className="text-2xl md:text-3xl mb-8">Where should the number go?</h2>
                      <div className="space-y-6 max-w-md">
                        <div>
                          <label htmlFor="name" className="block font-mono text-[11px] tracking-[0.15em] uppercase text-ink-faint mb-2">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            autoFocus
                            className="w-full px-5 py-4 bg-paper-deep border border-line focus:border-viper outline-none transition-smooth text-ink"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block font-mono text-[11px] tracking-[0.15em] uppercase text-ink-faint mb-2">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-5 py-4 bg-paper-deep border border-line focus:border-viper outline-none transition-smooth text-ink"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {status === 'error' && (
                  <p className="text-clay text-sm mt-6">{errorMsg}</p>
                )}

                <div className="flex items-center gap-6 mt-12">
                  {step > 0 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="text-sm font-medium text-ink-faint hover:text-ink transition-smooth"
                    >
                      ← Back
                    </button>
                  )}
                  {step < 2 ? (
                    <button
                      onClick={() => canNext && setStep(step + 1)}
                      disabled={!canNext}
                      className={`btn-primary !px-10 ${!canNext ? 'opacity-30 pointer-events-none' : ''}`}
                    >
                      Continue →
                    </button>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={submit}
                        disabled={status === 'sending'}
                        className={`btn-primary !px-10 ${status === 'sending' ? 'opacity-60 pointer-events-none' : ''}`}
                      >
                        {status === 'sending' ? 'Sending…' : 'Send it — get my number'}
                      </button>
                      <p className="text-[12px] text-ink-faint">
                        No commitment — you&apos;re just getting a number.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="md:col-span-2 space-y-10">
            <div className="border-t border-line pt-6">
              <h3 className="text-xl mb-6">What happens next</h3>
              <ol className="space-y-5">
                <li>
                  <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-viper mb-1">
                    1 — Your brief lands instantly
                  </p>
                  <p className="text-sm text-ink-soft">
                    Straight to my desk — read personally, not by a sales team.
                  </p>
                </li>
                <li>
                  <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-viper mb-1">
                    2 — You get one number
                  </p>
                  <p className="text-sm text-ink-soft">
                    Clear scope, flat price, no retainers — usually within three hours.
                  </p>
                </li>
                <li>
                  <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-viper mb-1">
                    3 — You approve before you pay
                  </p>
                  <p className="text-sm text-ink-soft">
                    A working draft follows within days. The invoice doesn&apos;t exist
                    until you sign off on it.
                  </p>
                </li>
              </ol>
            </div>

            <div className="border-t border-line pt-6">
              <h3 className="text-xl mb-6">Quick facts</h3>
              <ul className="space-y-3 text-ink-soft text-sm">
                <li className="flex gap-3"><span className="text-viper">✓</span> Free — no commitment at any step</li>
                <li className="flex gap-3"><span className="text-viper">✓</span> No long-term contracts</li>
                <li className="flex gap-3"><span className="text-viper">✓</span> One-time pricing, no monthly fees</li>
                <li className="flex gap-3"><span className="text-viper">✓</span> You talk directly to the person building it</li>
                <li className="flex gap-3"><span className="text-viper">✓</span> Average response under 3 hours</li>
              </ul>
            </div>

            <div className="border-t border-line pt-6">
              <h3 className="text-xl mb-4">Prefer to talk it through?</h3>
              <p className="text-ink-soft mb-4 text-sm">
                Call or text works too — Yuma &amp; Foothills, AZ.
              </p>
              <a
                href="tel:+19289163711"
                className="text-sm font-medium text-ink hover:text-viper transition-smooth"
              >
                (928) 916-3711 →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
