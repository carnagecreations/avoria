'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Topo from '@/components/Topo';

const articles = [
  {
    id: 1,
    title: 'What a $295 Website Taught Me About Agency Pricing',
    excerpt:
      "Most small-business sites are priced like subscriptions because that's what keeps agencies fed. Here's the honest cost breakdown.",
    category: 'Pricing',
    readTime: '6 min',
    date: '2026-01-15',
  },
  {
    id: 2,
    title: 'The Real Cost of Squarespace Over 3 Years',
    excerpt:
      '$23 a month sounds harmless. Multiply it out, add the template ceiling, and it\'s the most expensive "cheap" option there is.',
    category: 'Ownership',
    readTime: '5 min',
    date: '2026-01-12',
  },
  {
    id: 3,
    title: 'From Lighthouse 52 to 97: A Migration Case Study',
    excerpt:
      'A real migration, step by step: what moved, what got deleted, and where the 4.8 seconds went.',
    category: 'Performance',
    readTime: '8 min',
    date: '2026-01-10',
  },
  {
    id: 4,
    title: 'Why Nonprofits Get Left Behind on Software',
    excerpt:
      "Rescues run on spreadsheets and prayer because nobody builds for them. I run one. Here's what actually works.",
    category: 'Nonprofit Tech',
    readTime: '7 min',
    date: '2026-01-08',
  },
  {
    id: 5,
    title: 'Custom App or Off-the-Shelf Tool: How to Decide',
    excerpt: "Calendly is great until it isn't. Three signs you've outgrown the generic tool.",
    category: 'Web Apps',
    readTime: '6 min',
    date: '2026-01-05',
  },
  {
    id: 6,
    title: 'What Hand-Coding Actually Buys You',
    excerpt:
      '"Hand-coded" isn\'t nostalgia. It\'s the difference between owning an asset and renting a layout.',
    category: 'Web Design',
    readTime: '6 min',
    date: '2026-01-02',
  },
];

export default function Insights() {
  const [email, setEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeSuccess(true);
    setEmail('');
    setTimeout(() => setSubscribeSuccess(false), 4000);
  };

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
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 max-w-[1200px] mx-auto px-6 md:px-10">
        <Topo className="pointer-events-none absolute -top-20 -right-24 w-[340px] md:w-[480px] text-viper/15" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="overline mb-4">Notes</p>
          <h1 className="mb-6 max-w-3xl leading-[1.02]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Straight answers about <span className="stroke-em">websites</span>.
          </h1>
          <p className="text-lg md:text-xl text-ink-soft max-w-xl">
            What things really cost, why sites are slow, and when you&apos;ve
            outgrown the off-the-shelf tool — from the person who builds the fixes.
          </p>
        </motion.div>
      </section>

      {/* Article list */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-16">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {articles.map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <Link
                href={`/insights/${article.id}`}
                className="group grid md:grid-cols-12 gap-3 md:gap-8 py-8 border-t border-line items-baseline"
              >
                <div className="md:col-span-2 font-mono text-xs tracking-[0.1em] text-ink-faint">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  }).toUpperCase()}
                </div>
                <div className="md:col-span-2 font-mono text-xs tracking-[0.15em] uppercase text-viper">
                  {article.category}
                </div>
                <div className="md:col-span-7">
                  <h2 className="text-2xl md:text-3xl mb-2 group-hover:text-viper transition-smooth">
                    {article.title}
                  </h2>
                  <p className="text-ink-soft text-sm">{article.excerpt}</p>
                </div>
                <div className="md:col-span-1 font-mono text-xs text-ink-faint md:text-right">
                  {article.readTime}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-24">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubscribe}
          className="border border-line bg-paper-deep p-8 md:p-12"
        >
          <h3 className="text-2xl mb-2">One useful note a month.</h3>
          <p className="text-ink-soft mb-6 max-w-lg">
            What I&apos;m learning building sites and software — no funnels, no
            spam. Unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 bg-paper border border-line focus:border-viper outline-none transition-smooth text-ink"
            />
            <button type="submit" className="btn-primary !py-3">
              Subscribe
            </button>
          </div>
          {subscribeSuccess && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-viper text-sm mt-4 font-mono tracking-[0.05em]"
            >
              ✓ You&apos;re in. First note lands next month.
            </motion.p>
          )}
        </motion.form>
      </section>

      {/* Closing CTA */}
      <section className="py-24 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="overline mb-6">Reading is free. So is the call.</p>
            <Link
              href="/contact"
              className="mega-link group"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 4.75rem)' }}
            >
              Book the free call{' '}
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
