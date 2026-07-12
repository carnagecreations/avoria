'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow mb-4">Services</p>
          <h1 className="mb-6 max-w-4xl leading-[1.02]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Six ways in. Everything ships the same way:{' '}
            <span className="stroke-em">yours</span>.
          </h1>
          <p className="text-lg md:text-xl text-ink-soft max-w-xl">
            Every engagement is hand-coded, priced once, and owned by you the day
            it launches.
          </p>
        </motion.div>
      </section>

      {/* Service rows */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-24">
        {services.map((service, i) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.05 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 border-t border-line"
          >
            <div className="md:col-span-5">
              <p className="ghost text-5xl md:text-6xl mb-5" aria-hidden>{service.num}</p>
              <h2 className="text-2xl md:text-3xl mb-4">{service.title}</h2>
              <p className="text-ink-soft leading-relaxed">{service.description}</p>
            </div>
            <div className="md:col-span-7 md:pt-10">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-ink-soft">
                {service.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="text-viper flex-shrink-0">✓</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Pricing block */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-ink pt-10 md:pt-14"
        >
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            What it costs.
          </h2>
          <p className="text-lg text-ink-soft max-w-3xl leading-relaxed">
            Every project gets one flat number, quoted up front from your scope.
            Simple sites land in the hundreds — not thousands. Apps are quoted the
            same way: once. And because the invoice doesn&apos;t exist until
            you&apos;ve approved the draft, the quote is the ceiling — not the
            opening bid.
          </p>
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
            <p className="eyebrow mb-6">Next step — the call is free</p>
            <Link
              href="/contact"
              className="mega-link group"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 4.75rem)' }}
            >
              Get your number{' '}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-4" aria-hidden>
                →
              </span>
            </Link>
            <p className="font-mono text-xs tracking-[0.12em] uppercase text-ink-faint mt-10">
              Or call/text (928) 916-3711 · Replies in under 3 hours
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
