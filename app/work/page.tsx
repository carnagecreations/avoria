'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Work() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [secretUnlocked, setSecretUnlocked] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'v' && e.ctrlKey) {
        setSecretUnlocked(true);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Scaling',
      category: 'Conversion',
      client: 'TechCorp',
      result: '312% revenue growth',
      description: 'Comprehensive CRO strategy that increased conversion rates from 1.2% to 5.1%.',
    },
    {
      id: 2,
      title: 'B2B SaaS SEO',
      category: 'SEO',
      client: 'NovaBrand',
      result: 'Top 3 for 47 keywords',
      description: 'Built authority through technical SEO and content marketing strategy.',
    },
    {
      id: 3,
      title: 'Content Authority',
      category: 'Content',
      client: 'ZenithCo',
      result: '450K monthly visitors',
      description: 'Created thought leadership content that positioned the brand as an industry leader.',
    },
    {
      id: 4,
      title: 'Brand Refresh',
      category: 'Conversion',
      client: 'VortexAI',
      result: '89% increase in qualified leads',
      description: 'Complete brand positioning and messaging overhaul with strategic content.',
    },
    {
      id: 5,
      title: 'Global Expansion',
      category: 'SEO',
      client: 'Premium Client',
      result: '15 new markets entered',
      description: 'Multi-market SEO strategy and localization.',
    },
    {
      id: 6,
      title: 'Crisis to Growth',
      category: 'Content',
      client: 'Recovery Case',
      result: 'Restored trust & 250% growth',
      description: 'Rebuilt brand reputation through strategic content marketing.',
    },
  ];

  const secretProject = {
    id: 999,
    title: 'Secret Project: Venom Vision',
    category: 'Secret',
    client: 'Venom Vision Designs',
    result: 'Infinite possibilities',
    description: 'This is where the magic happens. Unlock more by visiting all pages.',
  };

  const filters = ['All', 'SEO', 'Content', 'Conversion'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
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
            <span className="glow-text">Work That</span> Drives Results
          </h1>
          <p className="text-xl text-gray-400">
            Real projects. Real growth. Real numbers.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-lg transition-all ${
                filter === f
                  ? 'bg-gradient-cyan text-dark-950 font-semibold'
                  : 'glass text-gray-400 hover:text-cyan-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                onClick={() => setSelectedProject(project.id)}
                className="glass p-8 rounded-xl cursor-pointer group hover:border-cyan-400/50 transition-all min-h-64 flex flex-col justify-between"
              >
                <div>
                  <p className="text-cyan-400 text-xs font-semibold mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-500 mb-2">{project.client}</p>
                  <p className="text-cyan-400 font-semibold">{project.result}</p>
                </div>
              </motion.div>
            ))}

            {/* Secret Project */}
            {secretUnlocked && (
              <motion.div
                key={999}
                variants={itemVariants}
                layout
                onClick={() => setSelectedProject(999)}
                className="glass p-8 rounded-xl cursor-pointer group hover:border-magenta-500/50 transition-all min-h-64 flex flex-col justify-between border border-magenta-500/50"
              >
                <div>
                  <p className="text-magenta-500 text-xs font-semibold mb-2 animate-pulse">🔓 SECRET</p>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-magenta-500 transition-smooth">
                    {secretProject.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{secretProject.description}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-500 mb-2">{secretProject.client}</p>
                  <p className="text-magenta-500 font-semibold">{secretProject.result}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-2xl w-full p-8 rounded-xl max-h-96 overflow-y-auto"
            >
              {selectedProject === 999 ? (
                <>
                  <h2 className="text-3xl font-bold mb-4 glow-text">{secretProject.title}</h2>
                  <p className="text-gray-300 mb-6">{secretProject.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-gray-500 text-sm">Client</p>
                      <p className="font-semibold text-magenta-500">{secretProject.client}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Result</p>
                      <p className="font-semibold text-magenta-500">{secretProject.result}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Keep exploring to unlock more secrets...</p>
                </>
              ) : (
                <>
                  {filteredProjects.filter(p => p.id === selectedProject).map(project => (
                    <div key={project.id}>
                      <h2 className="text-3xl font-bold mb-4 glow-text">{project.title}</h2>
                      <p className="text-gray-300 mb-6">{project.description}</p>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div>
                          <p className="text-gray-500 text-sm">Category</p>
                          <p className="font-semibold text-cyan-400">{project.category}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Client</p>
                          <p className="font-semibold text-cyan-400">{project.client}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Result</p>
                          <p className="font-semibold text-cyan-400">{project.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 px-6 py-2 rounded-lg bg-gradient-cyan text-dark-950 font-semibold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Ready for your success story?</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-cyan text-dark-950 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-smooth"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
