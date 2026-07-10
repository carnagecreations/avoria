'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  const values = [
    {
      title: 'Data-Driven',
      description: 'Every decision backed by data. No guesswork. No fluff.',
      icon: '📊',
    },
    {
      title: 'Transparent',
      description: 'You know exactly what we\'re doing and why. Full reporting, always.',
      icon: '🔍',
    },
    {
      title: 'Results-Obsessed',
      description: 'We succeed when you succeed. Your revenue is our scoreboard.',
      icon: '🎯',
    },
    {
      title: 'Strategic',
      description: 'Long-term thinking. Sustainable growth. Compound returns.',
      icon: '📈',
    },
  ];

  const timeline = [
    { year: 2020, event: 'Started with a simple vision: make digital strategy accessible' },
    { year: 2021, event: 'First 10 clients hit $5M in combined revenue' },
    { year: 2022, event: 'Developed proprietary SEO methodology' },
    { year: 2023, event: 'Expanded to full-service agency model' },
    { year: 2024, event: 'Became market leader in premium digital strategy' },
    { year: 2025, event: 'Now working exclusively with high-growth businesses' },
  ];

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
            <span className="glow-text">Built for Growth</span>
          </h1>
          <p className="text-xl text-gray-400">
            We're a boutique agency dedicated to helping ambitious brands dominate their markets.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-xl mb-24"
        >
          <h2 className="text-4xl font-bold mb-8 glow-text">The Story</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Avoria was born from frustration. After years of working with traditional agencies, we saw a pattern:
              they promised results but delivered commoditized services. They focused on vanity metrics instead of
              actual revenue growth.
            </p>
            <p>
              We decided to do it differently. We built Avoria as a premium strategy firm for brands ready to think
              bigger. We focus exclusively on measurable business outcomes. Every strategy is custom. Every dollar
              spent is tracked.
            </p>
            <p>
              Today, our clients have generated over $100M in attributable revenue through our strategies. We're not
              the biggest agency. We're the one that gets results.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 glow-text">Our Values</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass p-8 rounded-xl group hover:border-cyan-400/50 transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-smooth">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 glow-text text-center">Our Journey</h2>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-cyan text-dark-950 font-bold">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg font-semibold">{item.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 glow-text">The Visionary Behind Avoria</h2>
          <div className="glass p-12 rounded-xl">
            <div className="w-32 h-32 rounded-full bg-gradient-cyan/20 border-2 border-cyan-400 mx-auto mb-6 flex items-center justify-center text-5xl">
              👤
            </div>
            <h3 className="text-2xl font-bold mb-2">The Founder</h3>
            <p className="text-gray-400 mb-4">Strategy visionary with 15+ years in digital growth</p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Built Avoria to challenge the status quo in digital strategy. Obsessed with data, results, and helping
              ambitious brands win.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Let's build something great together</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-cyan text-dark-950 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-smooth"
          >
            Start the Conversation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
