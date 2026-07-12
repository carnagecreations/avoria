'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const principles = [
  {
    num: '01',
    title: 'You own what you pay for',
    description: 'Code, design, domain — transferred to you at launch, no strings attached.',
  },
  {
    num: '02',
    title: 'One number, no surprises',
    description: 'Scope and price agreed before work starts. The quote is the ceiling.',
  },
  {
    num: '03',
    title: 'Hand-coded on purpose',
    description: 'No Wix, no Squarespace, no builders. Every line exists for a reason.',
  },
  {
    num: '04',
    title: 'Built to outlast me',
    description: 'Fast, accessible, documented — your site keeps working even if we never speak again.',
  },
];

const timeline = [
  {
    label: 'THE PROBLEM',
    event:
      'Watched Yuma businesses get quoted $2,000–$8,000, plus retainer lock-in, for sites that should cost a fraction of that.',
  },
  {
    label: 'THE BUILD',
    event:
      'Started hand-coding sites and apps instead — full ownership, one flat price, no recurring bill.',
  },
  {
    label: 'THE PROOF',
    event:
      'A rescue site rebuilt from Lighthouse 52 to 97. A salon booking app for a fraction of an $8,000 quote. Real numbers, on the Work page.',
  },
  {
    label: 'THE LESSON',
    event:
      'Running a rescue taught me organizations need real software — not spreadsheets held together with hope.',
  },
  {
    label: 'TODAY',
    event:
      "50+ clients, a 5.0 average rating, zero refunds — because it's built right the first time.",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-8">About</p>
          <h1 className="mb-10 leading-[1.05]" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}>
            One person. <span className="stroke-em">All in</span>.
          </h1>
          <p className="text-xl md:text-2xl text-ink-soft max-w-2xl leading-relaxed">
            No account managers. No juniors. The person you talk to is the person
            who builds it.
          </p>
        </motion.div>
      </section>

      {/* The story */}
      <section className="py-40 md:py-56 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-12 gap-12 md:gap-20"
          >
            <p className="eyebrow md:col-span-3">The Story</p>
            <div className="md:col-span-9 space-y-8 text-xl text-ink-soft leading-relaxed max-w-4xl">
            <p>
              Avoria started with a pattern I couldn&apos;t unsee: small businesses
              in Yuma getting quoted $2,000 to $8,000 for websites that
              shouldn&apos;t cost anywhere near that — then locked into monthly
              platform fees on top of it, forever.
            </p>
            <p>
              So I built the opposite. Every site I ship is hand-coded, with no
              template platform underneath it. Every project is priced once, with
              nothing recurring after launch. And the code belongs to the client
              from day one — no lock-in, no ransom to leave.
            </p>
            <p>
              The standard comes from an unusual place. I also direct Beauties of
              the Beasts, a reptile rescue that has rehomed more than 300 animals,
              and I work as a vet tech. When an intake system fails at a rescue, an
              animal pays for it. I stopped being able to ship software that fails
              quietly — and that carried into every client build.
            </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-40 md:py-56 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-16">Principles</p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-x-16 gap-y-16"
            >
              {principles.map((p) => (
                <motion.div key={p.num} variants={itemVariants} className="border-t border-line pt-10">
                  <p className="font-mono text-sm text-ink-faint mb-5">{p.num}</p>
                  <h3 className="text-2xl md:text-3xl mb-4 leading-tight">{p.title}</h3>
                  <p className="text-ink-soft text-lg leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The journey */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 border-t border-line">
        <p className="eyebrow mb-10">The Journey</p>
        <div className="border-l border-line ml-2 space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              viewport={{ once: true }}
              className="pl-8 relative"
            >
              <span className="absolute left-[-4.5px] top-2 w-2 h-2 bg-viper" />
              <p className="font-mono text-xs tracking-[0.2em] text-viper mb-2">{item.label}</p>
              <p className="text-lg text-ink-soft max-w-2xl">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The person */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 border-t border-line">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-10 items-center"
        >
          <div className="md:col-span-4">
            <div className="aspect-square w-full max-w-[320px] frame-hard">
              <img
                src="/images/shiann-headshot.webp"
                alt="Shiann Bowman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
              The person behind Avoria.
            </h2>
            <h3 className="text-2xl mb-2">Shiann Bowman</h3>
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-viper mb-6">
              Web Developer · Rescue Director · Vet Tech
            </p>
            <p className="text-ink-soft text-lg leading-relaxed max-w-2xl">
              Shiann builds hand-coded sites and custom applications for businesses
              tired of paying rent on their own website — and directs Beauties of
              the Beasts, a reptile rescue nonprofit that has rehomed 300+ animals
              in Yuma, AZ.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-6">Let&apos;s build something that outlasts the invoice</p>
            <Link
              href="/contact"
              className="mega-link group"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 4.75rem)' }}
            >
              Start the conversation{' '}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-4" aria-hidden>
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
