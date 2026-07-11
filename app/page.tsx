'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Topo from '@/components/Topo';
import Reveal from '@/components/Reveal';

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
  },
  {
    num: '04',
    title: 'The handoff',
    body: 'Launch day, everything transfers to you — code, design, domain, content. No hostage domains, no monthly platform bill. If we never speak again, your site keeps working.',
  },
];

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [monthlyCost, setMonthlyCost] = useState(49);
  const threeYearCost = monthlyCost * 36;

  return (
    <div className="w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ============ HERO ============ */}
      <section className="relative min-h-[92vh] flex flex-col justify-center pt-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easing }}
            className="overline mb-10"
          >
            Avoria — Web design studio · Yuma, AZ
          </motion.p>

          <h1
            className="mb-10 max-w-5xl"
            style={{ fontSize: 'clamp(2.9rem, 7vw, 6.25rem)', lineHeight: 1.04 }}
          >
            <Reveal delay={0.1}>First you see it.</Reveal>
            <Reveal delay={0.22}>
              <span className="stroke-em">Then</span> you pay for it.
            </Reveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: easing }}
            className="text-lg md:text-xl text-ink-soft mb-12 max-w-xl leading-relaxed"
          >
            I hand-code websites and custom apps for Yuma businesses. One flat
            price, zero subscriptions — and the invoice doesn&apos;t exist until
            you approve a working draft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: easing }}
            className="flex flex-col sm:flex-row sm:items-center gap-6"
          >
            <Link href="/contact" className="btn-primary">
              Book a free call
            </Link>
            <Link
              href="/work"
              className="text-sm font-medium text-ink hover:text-viper transition-smooth"
            >
              See the work →
            </Link>
          </motion.div>
        </div>

        {/* Quiet proof row pinned to hero base */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: easing }}
          className="max-w-[1200px] mx-auto px-6 md:px-10 w-full mt-auto pb-10 pt-16"
        >
          <div className="border-t border-line pt-6 flex flex-wrap gap-x-12 gap-y-3 text-[13px] text-ink-faint">
            <span><span className="text-ink">5.0★</span>&ensp;Google rating</span>
            <span><span className="text-ink">50+</span>&ensp;clients served</span>
            <span><span className="text-ink">Zero</span>&ensp;refunds ever requested</span>
            <span>Replies&ensp;<span className="text-ink">under 3 hours</span></span>
          </div>
        </motion.div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section className="py-28 md:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="mb-16 md:mb-24">
            <p className="overline mb-5">Selected work</p>
            <h2 className="max-w-2xl" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
              <Reveal>
                Proof, with the <span className="stroke-em">numbers</span> attached.
              </Reveal>
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {featuredWork.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, ease: easing }}
              >
                <Link href="/work" className="group block">
                  <div className={`md:w-[82%] ${i % 2 === 1 ? 'md:ml-auto' : ''}`}>
                    <div className="frame-hard">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-[16/10] object-cover object-top"
                      />
                    </div>
                    <div className="flex items-baseline justify-between gap-6 mt-6">
                      <div>
                        <h3 className="text-xl md:text-2xl group-hover:text-viper transition-smooth">
                          {project.title}
                        </h3>
                        <p className="text-sm text-ink-faint mt-1">{project.tag}</p>
                      </div>
                      <p className="text-sm text-ink-soft text-right">{project.result}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/work"
              className="text-sm font-medium text-ink hover:text-viper transition-smooth"
            >
              All case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ OWN VS RENT ============ */}
      <section className="py-28 md:py-40 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16 md:mb-24">
            <p className="overline mb-5">The math</p>
            <h2 className="mb-6" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
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
              <p className="overline mb-8">The platform subscription</p>
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
              <p className="overline mb-8" style={{ color: '#2F3B24' }}>The Avoria build</p>
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

          {/* ROI slider — quiet instrument */}
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
                <p className="overline mb-2">Your bill</p>
                <p className="font-display text-2xl md:text-3xl text-ink">
                  ${monthlyCost}<span className="text-base text-ink-faint">/mo</span>
                </p>
              </div>
              <div>
                <p className="overline mb-2">Over 3 years</p>
                <p className="font-display text-2xl md:text-3xl text-clay">
                  ${threeYearCost.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="overline mb-2">After launch</p>
                <p className="font-display text-2xl md:text-3xl text-viper">
                  $0<span className="text-base text-ink-faint">/mo</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="py-28 md:py-40 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="mb-16 md:mb-24">
            <p className="overline mb-5">How it works</p>
            <h2 className="max-w-2xl" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
              <Reveal>
                First call to launch in about a <span className="stroke-em">week</span>.
              </Reveal>
            </h2>
          </div>

          <div>
            {process.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: easing }}
                className="grid md:grid-cols-12 gap-3 md:gap-8 py-10 md:py-12 border-t border-line"
              >
                <p className="md:col-span-1 font-mono text-xs text-ink-faint pt-2">{step.num}</p>
                <h3 className="md:col-span-3 text-2xl">{step.title}</h3>
                <p className="md:col-span-6 md:col-start-6 text-ink-soft leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
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
            <p className="overline mb-8" style={{ color: '#C0A869' }}>
              The guarantee
            </p>
            <h2 className="mb-8" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)', lineHeight: 1.12 }}>
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

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-28 md:py-40">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <p className="overline mb-16 text-center">Client words</p>
          <div className="space-y-20 md:space-y-24">
            {[
              {
                quote:
                  "I'd been putting off a website for two years because of the price… now I have something better than anything my competitors have. No subscription. No platform. Done.",
                who: 'T. Nguyen — Service Business Owner',
              },
              {
                quote:
                  'I needed a booking app for my salon and got quoted $8,000 by an agency. I got exactly what I needed for a fraction of that… my no-show rate dropped immediately.',
                who: 'L. Castillo — Salon Owner',
              },
            ].map((t) => (
              <motion.blockquote
                key={t.who}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: easing }}
                className="text-center"
              >
                <p
                  className="font-display text-ink mb-8"
                  style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', lineHeight: 1.45 }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="text-sm text-ink-faint">{t.who}</footer>
              </motion.blockquote>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easing }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 pt-12 border-t border-line text-center"
          >
            {[
              { value: '50+', label: 'Happy clients' },
              { value: '5.0★', label: 'Average rating' },
              { value: '<3hr', label: 'Avg. response' },
              { value: '0', label: 'Refunds requested' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl text-ink mb-2">{stat.value}</div>
                <p className="text-[13px] text-ink-faint">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-28 md:py-40 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <p className="overline mb-5">Questions</p>
            <h2 className="mb-6" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)' }}>
              Everything people ask before booking.
            </h2>
            <p className="text-ink-soft mb-8">
              Anything else — call or text. You&apos;ll hear back within hours, from
              the person who builds the work.
            </p>
            <a
              href="tel:+19289163711"
              className="text-sm font-medium text-ink hover:text-viper transition-smooth"
            >
              (928) 916-3711 →
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
      <section className="py-32 md:py-48 border-t border-line">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easing }}
          >
            <p className="overline mb-8">Next step</p>
            <h2 className="mb-12" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.15 }}>
              The call costs nothing. The draft costs nothing until you approve it.
              The only risk is <span className="stroke-em">keeping the site you have</span>.
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 mb-10">
              <Link href="/contact" className="btn-primary">
                Book a free call
              </Link>
              <a
                href="tel:+19289163711"
                className="text-sm font-medium text-ink hover:text-viper transition-smooth"
              >
                Or call/text (928) 916-3711
              </a>
            </div>
            <p className="text-[13px] text-ink-faint">
              Replies in under 3 hours, from the person who builds the work.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
