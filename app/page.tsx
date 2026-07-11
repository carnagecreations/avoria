'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Topo from '@/components/Topo';
import Reveal from '@/components/Reveal';
import Scramble from '@/components/Scramble';
import Magnetic from '@/components/Magnetic';

const faqs = [
  {
    q: 'What does a project cost?',
    a: "One flat number, quoted up front from your scope — and it doesn't change. No retainers, no subscriptions, no surprise line items. Hosting runs on free-tier infrastructure, so after launch your only recurring cost is the domain: about $11 a year.",
  },
  {
    q: 'How fast will my site be live?',
    a: 'Most websites go from first call to live in about a week: a working draft in days, one round of refinement, then launch. Custom apps usually take one to two weeks.',
  },
  {
    q: 'Do I actually own it?',
    a: "Completely. Code, design, domain, content — all transferred to you at launch. If you ever want to work with someone else, you take everything and go. That's the whole point.",
  },
  {
    q: 'What if something breaks later?',
    a: 'Every project includes a post-launch support window, and existing clients get priority response after that — replies average under three hours. No support contract, no hourly meter running.',
  },
  {
    q: 'Why not just use Squarespace or Wix?',
    a: 'A builder runs $23–$65 a month forever — $800 to $2,300+ every three years for a template your competitors also use. A hand-coded site costs once, loads faster, ranks better, and never bills you again.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const tickerItems = [
  'NO SUBSCRIPTIONS',
  'CODE YOU OWN',
  'ONE FLAT PRICE',
  'PAY AFTER APPROVAL',
  '$0/MO HOSTING',
  'HAND-CODED IN YUMA, AZ',
];

function SectionHeader({
  index,
  overline,
  children,
}: {
  index: string;
  overline: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-6 mb-14 md:mb-20">
      <div className="max-w-2xl">
        <p className="overline mb-4">
          <Scramble text={overline.toUpperCase()} />
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          <Reveal>{children}</Reveal>
        </h2>
      </div>
      <span
        className="ghost hidden md:block flex-shrink-0"
        style={{ fontSize: 'clamp(4rem, 9vw, 7.5rem)' }}
        aria-hidden
      >
        ({index})
      </span>
    </div>
  );
}

function BrowserFrame({
  image,
  label,
  children,
}: {
  image?: string | null;
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="frame-hard bg-paper">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-ink bg-paper-deep">
        <span className="w-2 h-2 rounded-full bg-clay" />
        <span className="w-2 h-2 rounded-full bg-venom border border-ink/20" />
        <span className="w-2 h-2 rounded-full bg-viper" />
        <span className="font-mono text-[10px] tracking-[0.12em] text-ink-faint ml-3 truncate">
          {label}
        </span>
      </div>
      <div className="aspect-[16/10] overflow-hidden">
        {image ? (
          <img src={image} alt={label} className="w-full h-full object-cover object-top" />
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [monthlyCost, setMonthlyCost] = useState(49);
  const threeYearCost = monthlyCost * 36;

  // Scroll-driven hero depth: layers drift apart as you scroll away
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const topoY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const topoRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const frameBackY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const frameFrontY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const featuredWork = [
    {
      title: 'Montijo',
      tag: 'Web Design',
      result: 'LIVE IN 6 DAYS · REPLACED A $1,800 QUOTE',
      image: '/images/screenshot-montijo.webp',
      label: 'montijo — live site',
    },
    {
      title: "Brennan's",
      tag: 'Web Design',
      result: '95+ LIGHTHOUSE · LEADS IN WEEK ONE',
      image: '/images/screenshot-brennans.webp',
      label: "brennan's — live site",
    },
    {
      title: 'Beauties of the Beasts',
      tag: 'Performance Rebuild',
      result: 'LIGHTHOUSE 52→97 · LOAD 6.2s→1.4s',
      image: '/images/screenshot-beauties.webp',
      label: 'beauties of the beasts — rebuild',
    },
  ];

  const process = [
    {
      num: '01',
      title: 'The call',
      body: "Fifteen minutes, free, no pitch. You describe what you need; you leave with a clear scope and one flat number. If it's not a fit, you'll hear that too.",
    },
    {
      num: '02',
      title: 'The draft',
      body: 'Within days — not months — you get a link to a working draft. Real pages, your actual content, live on a preview you can click through on your phone.',
    },
    {
      num: '03',
      title: 'The approval',
      body: "You review, I refine. And here's the part no agency will match: until you approve the draft, there is no invoice. Not even a deposit.",
      highlight: true,
    },
    {
      num: '04',
      title: 'The handoff',
      body: 'Launch day, everything transfers to you — code, design, domain, content. No hostage domains, no monthly platform bill. If we never speak again, your site keeps working.',
    },
  ];

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
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center pt-20">
        <motion.div
          style={{ y: topoY, rotate: topoRotate }}
          className="pointer-events-none absolute -top-16 -right-24 w-[420px] md:w-[680px]"
        >
          <Topo accent className="w-full text-viper/25" />
        </motion.div>
        <p className="side-caption pointer-events-none hidden xl:block absolute right-8 top-1/2 -translate-y-1/2">
          32.6927° N · 114.6277° W — Yuma, Arizona
        </p>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-venom opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-venom border border-ink/20" />
            </span>
            <p className="overline">
              <Scramble text="TAKING NEW PROJECTS — YUMA, AZ" />
            </p>
          </motion.div>

          <h1 className="leading-[0.95] mb-8" style={{ fontSize: 'clamp(3.25rem, 10vw, 8.5rem)' }}>
            <Reveal delay={0.05}>First you see it.</Reveal>
            <Reveal delay={0.18}>
              <span className="stroke-em">Then</span> you pay for it.
            </Reveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-lg md:text-xl text-ink-soft mb-10 max-w-xl leading-relaxed"
          >
            I hand-code websites and custom apps for Yuma businesses. You get a
            working draft in days, one flat price, zero subscriptions — and the
            invoice doesn&apos;t exist until you approve the draft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="flex flex-col sm:flex-row sm:items-center gap-5"
          >
            <Magnetic>
              <Link href="/contact" className="btn-primary">
                Book a free call
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/work" className="btn-secondary">
                See the work <span aria-hidden>→</span>
              </Link>
            </Magnetic>
          </motion.div>

          {/* Proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs tracking-[0.1em] text-ink-faint"
          >
            <span><span className="text-ink font-medium">5.0★</span> GOOGLE RATING</span>
            <span className="hidden sm:inline w-px h-4 bg-line" />
            <span><span className="text-ink font-medium">50+</span> CLIENTS</span>
            <span className="hidden sm:inline w-px h-4 bg-line" />
            <span><span className="text-ink font-medium">0</span> REFUNDS EVER REQUESTED</span>
            <span className="hidden sm:inline w-px h-4 bg-line" />
            <span>REPLIES <span className="text-ink font-medium">&lt; 3 HRS</span></span>
          </motion.div>
          </div>

          {/* Stacked work frames */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden lg:block lg:col-span-5 relative h-[520px]"
            aria-hidden
          >
            <motion.div style={{ y: frameBackY }} className="absolute top-10 right-0 w-[88%] rotate-[2.5deg]">
              <BrowserFrame
                image="/images/screenshot-beauties.webp"
                label="beauties of the beasts — rebuild"
              />
            </motion.div>
            <motion.div style={{ y: frameFrontY }} className="absolute bottom-6 left-0 w-[88%] rotate-[-2deg]">
              <BrowserFrame image="/images/screenshot-montijo.webp" label="montijo — live in 6 days" />
            </motion.div>
          </motion.div>
        </div>

        <p className="pointer-events-none absolute bottom-8 left-6 md:left-10 font-mono text-[11px] tracking-[0.3em] text-ink-faint">
          SCROLL ↓
        </p>
      </section>

      {/* ============ TICKER ============ */}
      <div className="section-invert bg-ink py-4 overflow-hidden border-y border-ink" aria-hidden>
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center flex-shrink-0">
              {tickerItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center font-mono text-xs tracking-[0.25em] text-paper px-8"
                >
                  {item}
                  <span className="text-venom ml-16">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ FEATURED WORK ============ */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <SectionHeader index="01" overline="Selected Work">
              Three builds. Three sets of <span className="stroke-em">receipts</span>.
            </SectionHeader>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
          >
            {featuredWork.map((project, i) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Link href="/work" className="group block">
                  <div className="mb-6 mr-2">
                    <BrowserFrame image={project.image} label={project.label} />
                  </div>
                  <p className="overline mb-2">
                    <span className="text-ink-faint">0{i + 1} — </span>
                    {project.tag}
                  </p>
                  <h3 className="text-xl mb-1 group-hover:text-viper transition-smooth">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs tracking-[0.08em] text-ink-faint">{project.result}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-right">
            <Link
              href="/work"
              className="font-mono text-[13px] tracking-[0.1em] uppercase text-ink hover:text-viper transition-smooth"
            >
              All case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ OWN VS RENT + ROI ============ */}
      <section className="py-24 md:py-32 bg-paper-deep dot-grid border-y border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <SectionHeader index="02" overline="The Math">
              Renting a website is the most expensive way to have one.
            </SectionHeader>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 md:gap-10"
          >
            {/* Rent column */}
            <div className="border border-line bg-paper p-8 md:p-10">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-clay mb-6">
                The platform subscription
              </p>
              <div className="font-display text-4xl md:text-5xl text-ink mb-2">
                $828–$2,340<span className="text-ink-faint text-2xl">+</span>
              </div>
              <p className="text-ink-faint text-sm mb-8">every 3 years, forever ($23–$65/mo)</p>
              <ul className="space-y-3 text-ink-soft text-sm">
                <li className="flex gap-3"><span className="text-clay">✕</span> A template thousands of other sites already use</li>
                <li className="flex gap-3"><span className="text-clay">✕</span> Slow loads and an SEO ceiling you can&apos;t fix</li>
                <li className="flex gap-3"><span className="text-clay">✕</span> Miss a payment — your site goes dark</li>
                <li className="flex gap-3"><span className="text-clay">✕</span> Their platform, their rules, their price hikes</li>
              </ul>
            </div>

            {/* Own column */}
            <div className="frame-hard bg-paper p-8 md:p-10 relative">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-venom" />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-viper mb-6">
                The Avoria build
              </p>
              <div className="font-display text-4xl md:text-5xl text-ink mb-2">One flat price</div>
              <p className="text-ink-faint text-sm mb-8">then ~$11/year for the domain. That&apos;s it.</p>
              <ul className="space-y-3 text-ink-soft text-sm">
                <li className="flex gap-3"><span className="text-viper">✓</span> Hand-coded for your business — one of one</li>
                <li className="flex gap-3"><span className="text-viper">✓</span> 95+ Lighthouse scores, SEO built in — not bolted on</li>
                <li className="flex gap-3"><span className="text-viper">✓</span> $0/month hosting on modern infrastructure</li>
                <li className="flex gap-3"><span className="text-viper">✓</span> Every line of code yours, permanently</li>
              </ul>
            </div>
          </motion.div>

          {/* ROI slider */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 border border-line bg-paper p-8 md:p-10"
          >
            <h3 className="text-2xl mb-2">Do your own math.</h3>
            <p className="text-ink-soft text-sm mb-8">Drag to your current monthly bill.</p>
            <input
              type="range"
              min="0"
              max="300"
              step="5"
              value={monthlyCost}
              onChange={(e) => setMonthlyCost(Number(e.target.value))}
              aria-label="Current monthly platform cost"
              className="mb-8"
            />
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="font-mono text-xs tracking-[0.15em] text-ink-faint uppercase mb-1">Your bill</p>
                <p className="font-display text-3xl md:text-4xl text-ink">${monthlyCost}<span className="text-lg text-ink-faint">/mo</span></p>
              </div>
              <div>
                <p className="font-mono text-xs tracking-[0.15em] text-ink-faint uppercase mb-1">Over 3 years</p>
                <p className="font-display text-3xl md:text-4xl text-clay">${threeYearCost.toLocaleString()}</p>
              </div>
              <div>
                <p className="font-mono text-xs tracking-[0.15em] text-ink-faint uppercase mb-1">Avoria after launch</p>
                <p className="font-display text-3xl md:text-4xl text-viper">$0<span className="text-lg text-ink-faint">/mo</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <SectionHeader index="03" overline="How It Works">
              First call to launch in about a <span className="stroke-em">week</span>.
            </SectionHeader>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {process.map((step) => (
              <motion.div
                key={step.num}
                variants={itemVariants}
                className={`grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-line items-start ${
                  step.highlight ? 'border-l-4 border-l-venom pl-4 md:pl-6 bg-paper-deep/60' : ''
                }`}
              >
                <span className="ghost md:col-span-2 text-6xl md:text-7xl" aria-hidden>
                  {step.num}
                </span>
                <h3 className="md:col-span-3 text-2xl md:text-3xl pt-1">{step.title}</h3>
                <p className="md:col-span-7 text-ink-soft leading-relaxed max-w-2xl pt-2">{step.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ GUARANTEE BAND ============ */}
      <section className="section-invert bg-ink py-28 md:py-36 relative overflow-hidden">
        <Topo className="pointer-events-none absolute -bottom-32 -left-32 w-[480px] md:w-[640px] text-paper/10" />
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-venom mb-6">
              The Guarantee
            </p>
            <h2 className="leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)' }}>
              If the draft isn&apos;t right, you owe{' '}
              <span className="stroke-em text-ink">nothing</span>.
            </h2>
            <p className="text-lg text-paper/70 max-w-2xl mx-auto">
              The work carries the risk — not you. Across 50+ clients, no one has
              ever walked away from a draft, and no one has ever asked for a refund.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <SectionHeader index="04" overline="Client Words">
              Nobody was paid to say this.
            </SectionHeader>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 md:gap-10"
          >
            {[
              {
                quote:
                  "I'd been putting off a website for two years because of the price… now I have something better than anything my competitors have. No subscription. No platform. Done.",
                who: 'T. Nguyen · Service Business Owner',
              },
              {
                quote:
                  'I needed a booking app for my salon and got quoted $8,000 by an agency. I got exactly what I needed for a fraction of that… my no-show rate dropped immediately.',
                who: 'L. Castillo · Salon Owner',
              },
            ].map((t) => (
              <motion.blockquote
                key={t.who}
                variants={itemVariants}
                className="relative border border-line bg-paper p-8 md:p-12 flex flex-col justify-between mr-2 mb-2"
              >
                <span className="ghost absolute -top-8 left-6 text-[7rem]" aria-hidden>
                  &ldquo;
                </span>
                <p className="font-display text-xl md:text-2xl leading-relaxed mb-8 text-ink relative z-10 pt-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="font-mono text-xs tracking-[0.1em] uppercase text-ink-faint">
                  {t.who}
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 mt-16 pt-12 border-t border-line"
          >
            {[
              { value: '50+', label: 'Happy Clients' },
              { value: '5.0★', label: 'Average Rating' },
              { value: '<3hr', label: 'Avg. Response' },
              { value: '0', label: 'Refunds Requested' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center md:text-left">
                <div className="font-display text-5xl md:text-6xl text-ink mb-2">{stat.value}</div>
                <p className="font-mono text-viper text-xs tracking-[0.15em] uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-24 md:py-32 bg-paper-deep dot-grid border-y border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <p className="overline mb-4">Questions</p>
            <h2 className="mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
              Everything people ask before booking.
            </h2>
            <p className="text-ink-soft mb-8">
              Anything else — call or text. You&apos;ll hear back within hours, from
              the person who builds the work.
            </p>
            <a
              href="tel:+19289163711"
              className="font-mono text-[13px] tracking-[0.1em] uppercase text-ink hover:text-viper transition-smooth"
            >
              (928) 916-3711 →
            </a>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={itemVariants} className="border-b border-line">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="text-lg font-medium text-ink group-hover:text-viper transition-smooth">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    className="text-2xl text-viper flex-shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={openFaq === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-ink-soft leading-relaxed pb-6 pr-10">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <Topo className="pointer-events-none absolute -top-24 -right-32 w-[420px] md:w-[560px] text-viper/15" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="mb-12 leading-[1.08]" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
              The call costs nothing. The draft costs nothing until you approve
              it. The only risk is{' '}
              <span className="stroke-em">keeping the site you have</span>.
            </h2>
            <Link
              href="/contact"
              className="mega-link group mb-10"
              style={{ fontSize: 'clamp(3rem, 8.5vw, 6.5rem)' }}
            >
              Book the free call{' '}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-4" aria-hidden>
                →
              </span>
            </Link>
            <div className="flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-3 mt-10">
              <a
                href="tel:+19289163711"
                className="font-mono text-[13px] tracking-[0.1em] uppercase text-ink hover:text-viper transition-smooth"
              >
                Or call/text (928) 916-3711
              </a>
              <p className="font-mono text-xs tracking-[0.12em] uppercase text-ink-faint">
                Replies in under 3 hours, from the person who builds the work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
