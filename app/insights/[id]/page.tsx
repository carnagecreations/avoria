'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    title: 'What a $295 Website Taught Me About Agency Pricing',
    date: '2026-01-15',
    readTime: '6 min',
    category: 'Pricing',
    excerpt:
      "Most small-business sites are priced like subscriptions because that's what keeps agencies fed. Here's the honest cost breakdown.",
    content: `
      <p>When a client came to me with a $295 budget for a website, my first instinct was to explain why that was impossible. A real site costs thousands, right?</p>

      <p>But I sat with it. $295 is what someone charges for a service call. It's what a website costs if you build it the way your plumber builds a deck—no meetings, no revisions, one scope, one invoice.</p>

      <p>The reason agencies quote $2,000–$8,000 isn't because websites are expensive to make. It's because most agencies build the way lawyers bill—hourly, with buffer time, with layers of review, with meetings that cost more than the deliverable.</p>

      <p>What that client taught me: a website has a real cost to make it work. But there's a different cost to make it work while paying a team of five people to oversee it.</p>

      <p>I built theirs for a flat price. They got what they needed. No recurring fee. No subscription platform rent.</p>

      <p>That's the model now. One number. No surprises. You approve the draft, the invoice exists, we ship it.</p>
    `,
  },
  {
    id: 2,
    title: 'The Real Cost of Squarespace Over 3 Years',
    date: '2026-01-12',
    readTime: '5 min',
    category: 'Ownership',
    excerpt:
      '$23 a month sounds harmless. Multiply it out, add the template ceiling, and it\'s the most expensive "cheap" option there is.',
    content: `
      <p>$23 a month. That's how Squarespace prices itself into your brain. A coffee a week, right?</p>

      <p>Except it never stops. Three years later, you've paid $828. For a template site. With a Squarespace footer. That you can't modify without paying more.</p>

      <p>And you own nothing. The site lives on their server. Your data lives in their database. If they change their pricing, you change your pricing. If they sunset a feature you relied on, you rebuild.</p>

      <p>A hand-coded site costs more upfront. But after three years, you're still paying nothing. The code is yours. The server is yours. You can move it, modify it, sell it.</p>

      <p>That's not a feature. That's ownership.</p>
    `,
  },
  {
    id: 3,
    title: 'From Lighthouse 52 to 97: A Migration Case Study',
    date: '2026-01-10',
    readTime: '8 min',
    category: 'Performance',
    excerpt:
      'A real migration, step by step: what moved, what got deleted, and where the 4.8 seconds went.',
    content: `
      <p>A site that took 6.2 seconds to load. That's not a slow site. That's a site that's failing its job.</p>

      <p>The client had a WordPress build with Divi, three years of blog posts, and no idea why visitors bounced before the page loaded.</p>

      <p>We migrated to a modern stack: Next.js, static export, Cloudflare. No databases to query. No plugin bloat. No theme overhead.</p>

      <p>The result: 1.4 seconds. A 4.8-second improvement. Not because we're smarter. Because we removed the things that slow pages down.</p>

      <p>Lighthouse went from 52 to 97. That's the difference between "this site works sometimes" and "this site works."</p>
    `,
  },
  {
    id: 4,
    title: 'Why Nonprofits Get Left Behind on Software',
    date: '2026-01-08',
    readTime: '7 min',
    category: 'Nonprofit Tech',
    excerpt:
      "Rescues run on spreadsheets and prayer because nobody builds for them. I run one. Here's what actually works.",
    content: `
      <p>A rescue's problem is not a regular business problem. A regular business says: "We need this tool." A rescue says: "We're using 8 spreadsheets and they fight each other."</p>

      <p>Standard SaaS doesn't fit. A booking app designed for salons doesn't speak to animal intake workflows. A CRM built for sales doesn't understand adoption pipelines or medical hold statuses.</p>

      <p>So nonprofits stay on spreadsheets. And spreadsheets break. And animals pay for it.</p>

      <p>I run Beauties of the Beasts. I know what that feels like. So now I build software specifically for how rescues actually work—not how they wish they worked, but how they work right now, with their existing staff and their existing chaos.</p>

      <p>That's the only software that sticks.</p>
    `,
  },
  {
    id: 5,
    title: 'Custom App or Off-the-Shelf Tool: How to Decide',
    date: '2026-01-05',
    readTime: '6 min',
    category: 'Web Apps',
    excerpt: "Calendly is great until it isn't. Three signs you've outgrown the generic tool.",
    content: `
      <p>Every business starts with off-the-shelf tools. They're cheap, they're fast, they work. For a while.</p>

      <p>Then you hit the ceiling. Calendly doesn't know about your no-show patterns. HubSpot doesn't understand your intake process. Google Forms don't talk to your backend.</p>

      <p>Three signs you need to build:</p>

      <p>1. You've added a human to compensate for what the tool can't do. If you're spending 10 hours a week moving data between systems, it's time to consolidate.</p>

      <p>2. Your tool cost more than building something custom. When you're paying $500/month for a platform that does 40% of what you need, the math breaks.</p>

      <p>3. You're fighting the tool more than using it. You can't customize it. You can't automate it. You're stuck in its workflows because there's no other way.</p>

      <p>Custom doesn't mean complicated. It means built for how you actually work.</p>
    `,
  },
  {
    id: 6,
    title: 'What Hand-Coding Actually Buys You',
    date: '2026-01-02',
    readTime: '6 min',
    category: 'Web Design',
    excerpt:
      '"Hand-coded" isn\'t nostalgia. It\'s the difference between owning an asset and renting a layout.',
    content: `
      <p>"Hand-coded" gets thrown around like it's a luxury. It's not. It's a foundation.</p>

      <p>A page builder gives you templates. Those templates come with bloat—unused CSS, unused JavaScript, unused features that slow down your site and lock you into their ecosystem.</p>

      <p>Hand-coded means every line exists for a reason. No extra weight. No proprietary dependencies. No surprise price increases when they decide to sunset your builder.</p>

      <p>The code is readable. The site is yours. If you need to move it, you can. If you need to modify it, you have the source. If you need to sell it, a buyer gets a real asset, not a tied-up Wix account.</p>

      <p>That's not craftsmanship. That's ownership. And it's not optional for anything you care about.</p>
    `,
  },
];

export default function ArticlePage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="w-full pt-32 pb-24 md:pt-52 md:pb-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h1 className="mb-6">Article not found</h1>
          <Link href="/insights" className="text-viper hover:text-viper-dark transition-smooth">
            Back to Notes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">{article.category}</p>
          <h1 className="mb-6 max-w-4xl leading-[1.1]" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
            {article.title}
          </h1>
          <div className="flex gap-6 text-sm text-ink-faint">
            <p>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            <p>·</p>
            <p>{article.readTime}</p>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 pb-40 md:pb-56">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </section>

      {/* Back to articles */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 border-t border-line">
        <Link href="/insights" className="text-viper hover:text-viper-dark transition-smooth font-medium">
          ← Back to Notes
        </Link>
      </section>
    </div>
  );
}
