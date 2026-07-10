'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [budget, setBudget] = useState(10000);
  const projectedReturn = Math.round(budget * 3.5);

  const services = [
    {
      title: 'SEO Strategy & Implementation',
      description: 'Technical SEO, keyword optimization, and link building',
      details: [
        'Comprehensive SEO audit',
        'On-page optimization',
        'Technical SEO fixes',
        'Backlink strategy',
        'Monthly reporting',
      ],
      price: 'Custom',
    },
    {
      title: 'Content Marketing',
      description: 'Strategic content that ranks and converts',
      details: [
        'Content strategy development',
        'Blog post creation (4/month)',
        'Long-form guides',
        'Content optimization',
        'Performance tracking',
      ],
      price: 'Custom',
    },
    {
      title: 'Conversion Rate Optimization',
      description: 'Turn traffic into revenue',
      details: [
        'CRO audit',
        'A/B testing framework',
        'Landing page optimization',
        'Funnel analysis',
        'Monthly testing cycles',
      ],
      price: 'Custom',
    },
    {
      title: 'Technical Implementation',
      description: 'Infrastructure that supports growth',
      details: [
        'Website migrations',
        'Performance optimization',
        'Analytics setup',
        'Tag management',
        'Integration support',
      ],
      price: 'Custom',
    },
    {
      title: 'Strategy Consulting',
      description: 'Roadmap for digital dominance',
      details: [
        'Market analysis',
        'Competitor research',
        'Growth strategy',
        'Quarterly strategy calls',
        'Implementation support',
      ],
      price: 'Custom',
    },
    {
      title: 'Done-With-You Services',
      description: 'We build it, you execute it',
      details: [
        'Custom training',
        'Process documentation',
        'Template creation',
        'Support for 90 days',
        'Knowledge transfer',
      ],
      price: 'Custom',
    },
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
            <span className="glow-text">Services Built</span> for Scale
          </h1>
          <p className="text-xl text-gray-400">
            Each service is crafted to deliver measurable, sustainable growth for your business.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onClick={() => setExpandedService(expandedService === i ? null : i)}
              className="glass p-8 rounded-xl cursor-pointer transition-all duration-300 hover:border-cyan-400/50"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-cyan-400">{service.title}</h3>
                <motion.span
                  animate={{ rotate: expandedService === i ? 180 : 0 }}
                  className="text-2xl"
                >
                  ▼
                </motion.span>
              </div>

              <p className="text-gray-400 mb-4">{service.description}</p>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={expandedService === i ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="space-y-2 text-sm text-gray-300 border-t border-gray-700 pt-4">
                  {service.details.map((detail, j) => (
                    <li key={j}>✓ {detail}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ROI Calculator */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-8 glow-text">ROI Calculator</h2>

          <div className="mb-8">
            <p className="text-gray-400 mb-4">Budget: ${budget.toLocaleString()}</p>
            <input
              type="range"
              min="5000"
              max="100000"
              step="5000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-gray-400 text-sm mb-2">Investment</p>
              <p className="text-3xl font-bold text-cyan-400">${budget.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Projected Return (avg. 3.5x ROI)</p>
              <p className="text-3xl font-bold text-magenta-500">${projectedReturn.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Timeline</p>
              <p className="text-3xl font-bold text-cyan-400">6-12 months</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-8">*Based on historical client data. Results vary by industry and implementation.</p>
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
          <h2 className="text-4xl font-bold mb-6">Let's discuss your goals</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-cyan text-dark-950 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-smooth"
          >
            Book a Strategy Call
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
