'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Insights() {
  const [email, setEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const articles = [
    {
      id: 1,
      title: 'The Death of Traditional SEO',
      excerpt: 'Why keyword stuffing is dead and semantic search has taken over.',
      category: 'SEO',
      readTime: '6 min',
      date: '2026-01-15',
    },
    {
      id: 2,
      title: 'Content ROI: Measuring What Matters',
      excerpt: 'A framework for calculating the true impact of your content investments.',
      category: 'Content Strategy',
      readTime: '8 min',
      date: '2026-01-12',
    },
    {
      id: 3,
      title: 'The CRO Playbook for 2026',
      excerpt: 'Proven tactics to increase conversion rates without increasing budget.',
      category: 'Conversion',
      readTime: '7 min',
      date: '2026-01-10',
    },
    {
      id: 4,
      title: 'AI is Changing SEO: Here\'s How to Adapt',
      excerpt: 'A practical guide to staying ahead as AI reshapes search.',
      category: 'SEO',
      readTime: '9 min',
      date: '2026-01-08',
    },
    {
      id: 5,
      title: 'Why Your Competitors Are Winning',
      excerpt: 'Common mistakes that hold brands back from market leadership.',
      category: 'Strategy',
      readTime: '5 min',
      date: '2026-01-05',
    },
    {
      id: 6,
      title: 'Building a Content Flywheel',
      excerpt: 'How to create content that compounds in value over time.',
      category: 'Content Strategy',
      readTime: '10 min',
      date: '2026-01-02',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeSuccess(true);
    setEmail('');
    setTimeout(() => setSubscribeSuccess(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-96 flex items-center justify-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="glow-text">Insights & Ideas</span> to Move Forward
          </h1>
          <p className="text-xl text-gray-400">
            Thought leadership and practical strategy for digital growth
          </p>
        </motion.div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          onSubmit={handleSubscribe}
          className="glass p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h2>
          <p className="text-gray-400 mb-6">Get our latest insights delivered to your inbox.</p>
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-dark-800 border border-gray-700 focus:border-cyan-400 outline-none transition-smooth"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-cyan text-dark-950 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-smooth"
            >
              Subscribe
            </button>
          </div>
          {subscribeSuccess && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-cyan-400 text-sm mt-4"
            >
              ✓ Thanks for subscribing!
            </motion.p>
          )}
        </motion.form>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {articles.map((article) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
            >
              <Link href={`/insights/${article.id}`}>
                <div className="glass p-8 rounded-xl cursor-pointer group hover:border-cyan-400/50 transition-all h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-smooth flex-1">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>

                  <div className="text-xs text-gray-500">
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Reading Progress + Suggestion */}
      <section className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Dive deeper into strategy</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our insights are based on data, tested in real campaigns, and designed to give you an unfair advantage.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-cyan text-dark-950 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-smooth"
          >
            Get a Strategy Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
