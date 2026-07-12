'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Topo from '@/components/Topo';
import Reveal from '@/components/Reveal';
import ContourField from '@/components/ContourField';
import Marquee from '@/components/Marquee';
import CountUp from '@/components/CountUp';
import Magnetic from '@/components/Magnetic';

const faqs = [
  {
    q: 'What does a project cost?',
    a: "One flat number, quoted up front from your scope — and it doesn't change. No retainers, no subscriptions, no surprise line items. Hosting runs on free-tier infrastructure, so after launch your only recurring cost is the domain: about $11 a year.",
  },
  {
    q: 'How fast will my site be live?',
    a: 'Most websites go from first brief to live in about a week: a working draft in days, one round of refinement, then launch. Custom apps usually take one to two weeks.',
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

const featuredWork = [
  {
    title: 'Montijo',
    tag: 'Web Design',
    result: 'Live in 6 days — replaced a $1,800 quote',
    image: '/images/screenshot-montijo.webp',
  },
  {
    title: "Brennan's",
    tag: 'Web Design',
    result: '95+ Lighthouse — leads in week one',
    image: '/images/screenshot-brennans.webp',
  },
  {
    title: 'Beauties of the Beasts',
    tag: 'Performance Rebuild',
    result: 'Lighthouse 52→97 — load 6.2s→1.4s',
    image: '/images/screenshot-beauties.webp',
  },
];

const process = [
  {
    num: '01',
    title: 'The brief',
    body: "Three quick questions on the site — under a minute, no pitch, no commitment. You describe what you need; you get back a clear scope and one flat number. If it's not a fit, you'll hear that too.",
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
  },
  {
    num: '04',
    title: 'The handoff',
    body: 'Launch day, everything transfers to you — code, design, domain, content. No hostage domains, no monthly platform bill. If we never speak again, your site keeps working.',
  },
];

const tickerItems = [
  '5.0★ Google rating',
  '50+ clients served',
  'Zero refunds ever requested',
  'Replies under 3 hours',
  'Pay only after you approve',
  '$0/mo hosting',
];

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [monthlyCost, setMonthlyCost] = useState(49);
  const threeYearCost = monthlyCost * 36;

  // Horizontal gallery: vertical scroll drives horizontal glide
  const galleryRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start start', 'end end'],
  });
  const galleryX = useTransform(scrollYProgress, [0, 1], ['2%', '-66%']);

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ============ HERO — interactive contour field ============ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ContourField />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full pb-28">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: easing }}
            className="eyebrow mb-12"
          >
            Avoria — Web design studio · Yuma, AZ
          </motion.p>

          <h1 style={{ fontSize: 'clamp(3rem, 8.5vw, 8rem)', lineHeight: 0.98 }}>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easing, delay: 0.15 }}
              >
                First you see it.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.12em] md:pl-[14%]">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easing, delay: 0.3 }}
              >
                <span className="stroke-em">Then</span> you pay for it.
              </motion.span>
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end mt-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.9, ease: easing }}
              className="md:col-span-6 text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl"
            >
              I hand-code websites and custom apps for Yuma businesses. One flat
              price, zero subscriptions — and the invoice doesn&apos;t exist until
              you approve a working draft.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: easing }}
              className="md:col-span-6 flex flex-col sm:flex-row sm:items-center md:justify-end gap-6"
            >
              <div className="flex flex-col gap-3">
                <Magnetic>
                  <Link href="/contact" className="btn-primary !px-10 !py-4">
                    Start your project
                  </Link>
                </Magnetic>
                <p className="text-[12px] text-ink-faint text-center">
                  No invoice until you approve the draft.
                </p>
              </div>
              <Link
                href="/work"
                className="text-sm font-medium text-ink hover:text-viper transition-smooth"
              >
                See the work →
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Velocity ticker pinned to hero base */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 z-10 border-y border-line bg-paper/60 backdrop-blur-sm"
        >
          <Marquee className="py-4">
            {tickerItems.map((item) => (
              <span
                key={item}
                className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-soft px-8 inline-flex items-center gap-8"
              >
                {item}
                <span className="text-viper" aria-hidden>✦</span>
              </span>
            ))}
          </Marquee>
        </motion.div>
      </section>

      {/* ============ WORK — horizontal scroll gallery ============ */}
      <section ref={galleryRef} className="relative h-[320vh] section-invert bg-ink">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x: galleryX }} className="flex items-center gap-8 md:gap-14 pl-[6vw]">
            {/* Intro card */}
            <div className="flex-shrink-0 w-[80vw] md:w-[34vw]">
              <p className="eyebrow mb-6">Selected work</p>
              <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', lineHeight: 1.05 }}>
                Proof, with the <span className="stroke-em">numbers</span> attached.
              </h2>
              <p className="text-paper/50 mt-6 max-w-sm">
                Scroll — the receipts move sideways.
              </p>
            </div>

            {featuredWork.map((project, i) => (
              <Link
                key={project.title}
                href="/work"
                className="group flex-shrink-0 w-[82vw] md:w-[52vw]"
              >
                <div className="frame-hard">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="flex items-baseline justify-between gap-6 mt-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-paper/30">0{i + 1}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl text-paper group-hover:text-venom transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-sm text-paper/40 mt-1">{project.tag}</p>
                    </div>
                  </div>
                  <p className="text-sm text-paper/60 text-right">{project.result}</p>
                </div>
              </Link>
            ))}

            {/* End card */}
            <div className="flex-shrink-0 w-[70vw] md:w-[30vw] pr-[8vw]">
              <p className="font-display text-3xl md:text-4xl text-paper mb-8">
                Your project could be plate 04.
              </p>
              <Magnetic>
                <Link href="/work" className="btn-primary">
                  All case studies →
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ OWN VS RENT ============ */}
      <section className="py-28 md:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16 md:mb-24">
            <p className="eyebrow mb-5">The math</p>
            <h2 className="mb-6" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
              <Reveal>
                Renting a website is the most expensive way to have one.
              </Reveal>
            </h2>
            <p className="text-ink-soft text-lg">
              The builder ad says $23 a month. The math says four figures every
              three years, forever — for a template your competitors are also using.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
            className="grid md:grid-cols-2 gap-x-16 gap-y-14"
          >
            <div className="border-t border-line pt-8">
              <p className="eyebrow mb-8">The platform subscription</p>
              <div className="font-display text-4xl md:text-5xl text-ink mb-2">
                $828–$2,340<span className="text-ink-faint text-2xl">+</span>
              </div>
              <p className="text-ink-faint text-sm mb-10">every 3 years, forever ($23–$65/mo)</p>
              <ul className="space-y-4 text-ink-soft text-[15px]">
                <li>A template thousands of other sites already use</li>
                <li>Slow loads and an SEO ceiling you can&apos;t fix</li>
                <li>Miss a payment — your site goes dark</li>
                <li>Their platform, their rules, their price hikes</li>
              </ul>
            </div>

            <div className="border-t border-ink pt-8">
              <p className="eyebrow mb-8" style={{ color: '#2F3B24' }}>The Avoria build</p>
              <div className="font-display text-4xl md:text-5xl text-ink mb-2">One flat price</div>
              <p className="text-ink-faint text-sm mb-10">then ~$11/year for the domain. That&apos;s it.</p>
              <ul className="space-y-4 text-ink text-[15px]">
                <li>Hand-coded for your business — one of one</li>
                <li>95+ Lighthouse scores, SEO built in — not bolted on</li>
                <li>$0/month hosting on modern infrastructure</li>
                <li>Every line of code yours, permanently</li>
              </ul>
            </div>
          </motion.div>

          {/* ROI slider */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
            className="mt-20 md:mt-28 border-t border-line pt-10 max-w-3xl"
          >
            <h3 className="text-xl mb-1">Do your own math.</h3>
            <p className="text-ink-faint text-sm mb-10">Drag to your current monthly bill.</p>
            <input
              type="range"
              min="0"
              max="300"
              step="5"
              value={monthlyCost}
              onChange={(e) => setMonthlyCost(Number(e.target.value))}
              aria-label="Current monthly platform cost"
              className="mb-10"
            />
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="eyebrow mb-2">Your bill</p>
                <p className="font-display text-2xl md:text-3xl text-ink">
                  ${monthlyCost}<span className="text-base text-ink-faint">/mo</span>
                </p>
              </div>
              <div>
                <p className="eyebrow mb-2" style={{ color: '#96552F' }}>Gone in 3 years</p>
                <p className="font-display text-2xl md:text-3xl text-clay">
                  ${threeYearCost.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="eyebrow mb-2">After launch</p>
                <p className="font-display text-2xl md:text-3xl text-viper">
                  $0<span className="text-base text-ink-faint">/mo</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ PROCESS — stacking cards ============ */}
      <section className="py-28 md:py-40 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="mb-16 md:mb-20">
            <p className="eyebrow mb-5">How it works</p>
            <h2 className="max-w-2xl" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
              <Reveal>
                Brief to launch in about a <span className="stroke-em">week</span>.
              </Reveal>
            </h2>
          </div>

          <div className="relative">
            {process.map((step, i) => (
              <div
                key={step.num}
                className="sticky"
                style={{ top: `calc(14vh + ${i * 4.5}rem)`, marginBottom: i === process.length - 1 ? 0 : '3rem' }}
              >
                <div className="bg-paper border border-line shadow-[0_-12px_40px_-20px_rgba(22,21,16,0.18)] p-8 md:p-14 min-h-[38vh] flex flex-col md:flex-row md:items-start gap-6 md:gap-14">
                  <span className="ghost text-6xl md:text-8xl flex-shrink-0" aria-hidden>
                    {step.num}
                  </span>
                  <div className="max-w-2xl">
                    <h3 className="text-3xl md:text-4xl mb-5">{step.title}</h3>
                    <p className="text-ink-soft text-lg leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GUARANTEE ============ */}
      <section className="section-invert bg-ink py-32 md:py-44 relative overflow-hidden">
        <Topo className="pointer-events-none absolute -bottom-40 -right-40 w-[560px] md:w-[720px] text-paper/[0.05]" />
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easing }}
          >
            <p className="eyebrow mb-8" style={{ color: '#C0A869' }}>
              The guarantee
            </p>
            <h2 className="mb-8" style={{ fontSize: 'clamp(2.75rem, 7.5vw, 6.25rem)', lineHeight: 1.05 }}>
              If the draft isn&apos;t right, you owe{' '}
              <span className="stroke-em">nothing</span>.
            </h2>
            <p className="text-lg text-paper/60 max-w-xl mx-auto">
              The work carries the risk — not you. Across 50+ clients, no one has
              ever walked away from a draft, and no one has ever asked for a refund.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ TESTIMONIALS — staggered ============ */}
      <section className="py-28 md:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p className="eyebrow mb-16">Client words</p>
          <div className="space-y-16 md:space-y-24">
            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: easing }}
              className="max-w-3xl"
            >
              <p
                className="font-display text-ink mb-8"
                style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.5rem)', lineHeight: 1.4 }}
              >
                &ldquo;I&apos;d been putting off a website for two years because of the
                price… now I have something better than anything my competitors have.
                No subscription. No platform. Done.&rdquo;
              </p>
              <footer className="text-sm text-ink-faint">T. Nguyen — Service Business Owner</footer>
            </motion.blockquote>

            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: easing }}
              className="max-w-3xl md:ml-auto md:text-right"
            >
              <p
                className="font-display text-ink mb-8"
                style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.5rem)', lineHeight: 1.4 }}
              >
                &ldquo;I needed a booking app for my salon and got quoted $8,000 by an
                agency. I got exactly what I needed for a fraction of that… my no-show
                rate dropped immediately.&rdquo;
              </p>
              <footer className="text-sm text-ink-faint">L. Castillo — Salon Owner</footer>
            </motion.blockquote>
          </div>

          {/* Count-up stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 pt-12 border-t border-line text-center md:text-left">
            <div>
              <div className="font-display text-4xl md:text-5xl text-ink mb-2">
                <CountUp value={50} suffix="+" />
              </div>
              <p className="text-[13px] text-ink-faint">Happy clients</p>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-ink mb-2">
                <CountUp value={5.0} decimals={1} suffix="★" />
              </div>
              <p className="text-[13px] text-ink-faint">Average rating</p>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-ink mb-2">
                <CountUp value={3} prefix="<" suffix="hr" />
              </div>
              <p className="text-[13px] text-ink-faint">Avg. response</p>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-ink mb-2">
                <CountUp value={0} />
              </div>
              <p className="text-[13px] text-ink-faint">Refunds requested</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-28 md:py-40 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <p className="eyebrow mb-5">Questions</p>
            <h2 className="mb-6" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)' }}>
              Everything people ask before booking.
            </h2>
            <p className="text-ink-soft mb-8">
              Anything else — send it through the form. You&apos;ll hear back within
              hours, from the person who builds the work.
            </p>
            <a
              href="/contact"
              className="text-sm font-medium text-ink hover:text-viper transition-smooth"
            >
              Start your project →
            </a>
          </div>

          <div className="lg:col-span-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-line">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                >
                  <span className="text-[17px] font-medium text-ink group-hover:text-viper transition-smooth">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    className="text-xl text-ink-faint flex-shrink-0 font-light"
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={openFaq === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: easing }}
                  className="overflow-hidden"
                >
                  <p className="text-ink-soft leading-relaxed pb-7 pr-10">{faq.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-32 md:py-48 border-t border-line relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easing }}
          >
            <p className="eyebrow mb-8">Next step</p>
            <h2 className="mb-12" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', lineHeight: 1.12 }}>
              The call costs nothing. The draft costs nothing until you approve it.
              The only risk is <span className="stroke-em">keeping the site you have</span>.
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 mb-10">
              <Magnetic>
                <Link href="/contact" className="btn-primary !px-10 !py-4">
                  Start your project
                </Link>
              </Magnetic>
              <span className="text-sm text-ink-faint">
                Three steps, under a minute — one flat number back.
              </span>
            </div>
            <p className="text-[13px] text-ink-faint">
              Read personally. Replies in under 3 hours.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
