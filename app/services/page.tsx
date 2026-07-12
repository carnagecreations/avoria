'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Magnetic from '@/components/Magnetic';

const services = [
  {
    num: '01',
    title: 'Custom web design & development',
    description:
      'A site built line by line for your business — no template underneath, no page builder, no monthly ransom.',
    details: [
      'Hand-coded — no builders, no bloat',
      'SEO and schema markup engineered in from day one',
      'Mobile-first, 95+ Lighthouse targets',
      'Full code ownership at launch',
      'One clear revision round before going live',
      '$0/month hosting on modern infrastructure',
    ],
  },
  {
    num: '02',
    title: 'Custom web applications',
    description:
      'The tool you keep wishing existed — booking systems, client portals, quote calculators — built around how you actually work.',
    details: [
      'Booking & scheduling tools',
      'Client portals & dashboards',
      'Quote calculators & intake forms',
      "Shaped to your exact workflow, not a template's",
      'One-time cost — no per-seat, no per-month',
      'Most apps ship in 1–2 weeks',
    ],
  },
  {
    num: '03',
    title: 'Performance & technical SEO',
    description: 'Your site is slow, and Google knows it. This fixes both.',
    details: [
      'Full technical SEO audit with a prioritized fix list',
      'Core Web Vitals optimization',
      'Lighthouse scores into the 90s',
      'Structured data & schema implementation',
      'Site speed re-engineering',
      'Ongoing monitoring available — never required',
    ],
  },
  {
    num: '04',
    title: 'Migrations & replatforming',
    description:
      'Escape WordPress or a page builder without losing your content, your rankings, or a day of uptime.',
    details: [
      'WordPress/Divi to modern stack',
      'Zero-downtime cutover planning',
      'Content and SEO preserved through the move',
      'Hosting cost reduction — often to $0/mo',
      'Legacy system audit before anything moves',
      'Full documentation handed off with the keys',
    ],
  },
  {
    num: '05',
    title: 'Nonprofit & mission-driven technology',
    description:
      "Real software for organizations doing real work — built by someone who runs one. I direct a reptile rescue, so shelter intake systems and volunteer tools aren't guesses here. They're lived requirements.",
    details: [
      'Shelter & rescue management systems',
      'Volunteer & intake tracking',
      'Donor & adoption-applicant workflows',
      'Priced for real nonprofit budgets',
      'Role-based access & compliance reporting',
      'Ongoing support for mission-critical tools',
    ],
  },
  {
    num: '06',
    title: 'Ongoing strategy & support',
    description: "Help after launch when you want it — never a contract because you're trapped.",
    details: [
      'Post-launch support window on every project',
      'Content & copy updates',
      'Analytics setup & plain-English reviews',
      'Priority response for existing clients',
      'Roadmap planning for new features',
      'No long-term contract, ever',
    ],
  },
];

export default function Services() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-8">Services</p>
          <h1 className="mb-10 max-w-5xl leading-[1.05]" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}>
            Six ways in. Everything ships the same way:{' '}
            <span className="stroke-em">yours</span>.
          </h1>
          <p className="text-xl md:text-2xl text-ink-soft max-w-2xl leading-relaxed">
            Every engagement is hand-coded, priced once, and owned by you the day
            it launches.
          </p>
        </motion.div>
      </section>

      {/* Service rows — alternating dark sections */}
      <section className="w-full">
        {services.map((service, i) => (
          <motion.section
            key={service.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`py-28 md:py-40 ${i % 2 === 1 ? 'section-invert bg-ink' : ''}`}
          >
            <div className="max-w-[1200px] mx-auto px-6 md:px-10">
              <div className="grid md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-5">
                  <p className="ghost text-7xl md:text-8xl mb-8" aria-hidden style={{ color: i % 2 === 1 ? '#C0A869' : 'currentColor' }}>
                    {service.num}
                  </p>
                  <h2 className="text-3xl md:text-4xl mb-6 leading-tight">{service.title}</h2>
                  <p className={`text-lg leading-relaxed ${i % 2 === 1 ? 'text-paper/70' : 'text-ink-soft'}`}>
                    {service.description}
                  </p>
                </div>
                <div className="md:col-span-7 md:pt-6">
                  <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                    {service.details.map((detail) => (
                      <li key={detail} className={`flex gap-4 text-base leading-relaxed ${i % 2 === 1 ? 'text-paper/70' : 'text-ink-soft'}`}>
                        <span className={`flex-shrink-0 pt-1 ${i % 2 === 1 ? 'text-venom' : 'text-viper'}`}>✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </section>

      {/* Pricing block */}
      <section className="py-40 md:py-56 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-10">Pricing</p>
            <h2 className="mb-12 max-w-3xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.75rem)', lineHeight: 1.1 }}>
              What it costs.
            </h2>
            <p className="text-xl text-ink-soft max-w-4xl leading-relaxed">
              Local agencies quote $2,000–$8,000 for this work, plus a retainer to
              keep it alive. Here, every project gets one flat number, quoted up
              front from your scope — simple sites land in the hundreds, not
              thousands, and apps are quoted the same way: once. And because the
              invoice doesn&apos;t exist until you&apos;ve approved the draft, the
              quote is the ceiling — not the opening bid.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 md:py-60 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-12">Next step — no commitment</p>
            <Magnetic>
              <Link
                href="/contact"
                className="mega-link group block"
                style={{ fontSize: 'clamp(3rem, 7.5vw, 5.5rem)', lineHeight: 1.1 }}
              >
                Get your number{' '}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-6" aria-hidden>
                  →
                </span>
              </Link>
            </Magnetic>
            <p className="font-mono text-sm tracking-[0.12em] uppercase text-ink-faint mt-16">
              Three steps, under a minute · One flat number back within hours
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
