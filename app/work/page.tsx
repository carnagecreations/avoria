'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Topo from '@/components/Topo';

const projects = [
  {
    id: 1,
    title: 'Montijo — Service Business Website',
    category: 'Web Design',
    client: 'Montijo',
    result: 'LIVE IN 6 DAYS · $0/MO HOSTING',
    description:
      'An agency quoted $1,800. This site went live in six days for a fraction of it — fast, professional, and owned outright by the client.',
    stack: ['NEXT.JS', 'CLOUDFLARE PAGES', 'HAND-CODED'],
    image: '/images/screenshot-montijo.webp',
  },
  {
    id: 2,
    title: "Brennan's — Local Business Website",
    category: 'Web Design',
    client: "Brennan's",
    result: '95+ LIGHTHOUSE · LEADS IN WEEK 1',
    description:
      'A conversion-ready local business site — gallery, contact form, 95+ Lighthouse — pulling real leads within its first week live.',
    stack: ['HAND-CODED', 'SEO SCHEMA', 'CONTACT PIPELINE'],
    image: '/images/screenshot-brennans.webp',
  },
  {
    id: 3,
    title: 'Rescue Website Rebuild — Beauties of the Beasts',
    category: 'Performance',
    client: 'Beauties of the Beasts',
    result: 'LIGHTHOUSE 52→97 · LOAD 6.2s→1.4s',
    description:
      'A WordPress/Divi site that took 6.2 seconds to load, rebuilt on a modern stack: Lighthouse 52 to 97, load time to 1.4 seconds, hosting bill from ~$25/mo to $0.',
    stack: ['WORDPRESS MIGRATION', 'CORE WEB VITALS', '$0 HOSTING'],
    image: '/images/screenshot-beauties.webp',
  },
  {
    id: 4,
    title: 'Salon Booking App',
    category: 'Web Apps',
    client: 'L. Castillo, Salon Owner',
    result: 'NO-SHOW RATE DROPPED IMMEDIATELY',
    description:
      'An agency quoted $8,000. The salon got a booking app shaped to its actual workflow for a fraction of that — and no-shows dropped the first week it ran.',
    stack: ['CUSTOM APP', 'BOOKING ENGINE', 'SMS REMINDERS'],
    image: null,
  },
];

const secretProject = {
  id: 999,
  title: 'Beauties of the Beasts',
  category: 'Secret',
  client: "Founder's Nonprofit",
  result: '300+ REPTILES REHOMED',
  description:
    'The project behind the projects. A reptile rescue that proved organizations need real software, not spreadsheets held together with hope — the lesson every build here inherits.',
};

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

  const filters = ['All', 'Web Design', 'Web Apps', 'Performance'];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
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
          <p className="overline mb-4">Selected Work</p>
          <h1 className="mb-6 max-w-3xl leading-[1.02]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            The work, with <span className="stroke-em">numbers attached</span>.
          </h1>
          <p className="text-lg md:text-xl text-ink-soft max-w-xl">
            No &ldquo;increased brand engagement&rdquo; here. Launch timelines,
            Lighthouse scores, and what each client stopped paying.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-8">
        <div className="flex flex-wrap gap-8 border-b border-line pb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-[13px] tracking-[0.12em] uppercase transition-smooth relative pb-1 ${
                filter === f ? 'text-ink' : 'text-ink-faint hover:text-ink'
              }`}
            >
              {f}
              {filter === f && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-venom" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Editorial stacked list */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 md:space-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                onClick={() => setSelectedProject(project.id)}
                className="group cursor-pointer grid md:grid-cols-2 gap-6 md:gap-10 items-center border-b border-line pb-8 md:pb-12"
              >
                <div className="order-1 mr-2 mb-2">
                  <div className="frame-hard bg-paper">
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-ink bg-paper-deep">
                      <span className="w-2 h-2 rounded-full bg-clay" />
                      <span className="w-2 h-2 rounded-full bg-venom border border-ink/20" />
                      <span className="w-2 h-2 rounded-full bg-viper" />
                      <span className="font-mono text-[10px] tracking-[0.12em] text-ink-faint ml-3 truncate">
                        {project.client.toLowerCase()}
                      </span>
                    </div>
                    <div className="aspect-video w-full overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full bg-paper-deep flex items-center justify-center">
                          <span className="font-mono text-xs tracking-[0.15em] text-ink-faint">
                            PRIVATE BUILD — SHOWN ON REQUEST
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="order-2">
                  <p className="overline mb-3">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl mb-3 group-hover:text-viper transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-ink-soft mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-[0.12em] px-3 py-1.5 border border-line text-ink-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-line pt-4">
                    <p className="text-sm text-ink-faint">{project.client}</p>
                    <p className="font-mono text-xs tracking-[0.08em] text-ink font-medium text-right">
                      {project.result}
                    </p>
                  </div>
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
                className="group cursor-pointer grid md:grid-cols-2 gap-6 md:gap-10 items-center border-b border-clay/40 pb-8 md:pb-12"
              >
                <div className="aspect-video w-full overflow-hidden border border-clay/40 bg-clay/5 flex items-center justify-center order-1">
                  <span className="text-4xl opacity-60">🦎</span>
                </div>
                <div className="order-2">
                  <p className="font-mono text-xs tracking-[0.2em] uppercase text-clay mb-3">Secret</p>
                  <h3 className="text-2xl md:text-3xl mb-3 group-hover:text-clay transition-smooth">
                    {secretProject.title}
                  </h3>
                  <p className="text-ink-soft mb-6">{secretProject.description}</p>
                  <div className="flex items-center justify-between gap-4 border-t border-line pt-4">
                    <p className="text-sm text-ink-faint">{secretProject.client}</p>
                    <p className="font-mono text-xs tracking-[0.08em] text-clay font-medium">
                      {secretProject.result}
                    </p>
                  </div>
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
            className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-paper border border-line max-w-2xl w-full p-8 md:p-10 max-h-[80vh] overflow-y-auto"
            >
              {selectedProject === 999 ? (
                <>
                  <h2 className="text-2xl md:text-3xl mb-4">{secretProject.title}</h2>
                  <p className="text-ink-soft mb-6">{secretProject.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6 font-mono text-sm">
                    <div>
                      <p className="text-ink-faint text-xs uppercase tracking-[0.1em] mb-1">Client</p>
                      <p className="text-clay">{secretProject.client}</p>
                    </div>
                    <div>
                      <p className="text-ink-faint text-xs uppercase tracking-[0.1em] mb-1">Result</p>
                      <p className="text-clay">{secretProject.result}</p>
                    </div>
                  </div>
                  <p className="text-ink-faint text-sm">Keep exploring to unlock more secrets…</p>
                </>
              ) : (
                <>
                  {projects
                    .filter((p) => p.id === selectedProject)
                    .map((project) => (
                      <div key={project.id}>
                        <h2 className="text-2xl md:text-3xl mb-4">{project.title}</h2>
                        <p className="text-ink-soft mb-6">{project.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 font-mono text-sm">
                          <div>
                            <p className="text-ink-faint text-xs uppercase tracking-[0.1em] mb-1">Category</p>
                            <p className="text-viper">{project.category}</p>
                          </div>
                          <div>
                            <p className="text-ink-faint text-xs uppercase tracking-[0.1em] mb-1">Client</p>
                            <p className="text-viper">{project.client}</p>
                          </div>
                          <div>
                            <p className="text-ink-faint text-xs uppercase tracking-[0.1em] mb-1">Result</p>
                            <p className="text-viper">{project.result}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </>
              )}
              <button onClick={() => setSelectedProject(null)} className="btn-primary !py-2.5 !px-6 mt-4">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="overline mb-6">Your business could be the next row on this page</p>
            <Link
              href="/contact"
              className="mega-link group"
              style={{ fontSize: 'clamp(2.75rem, 8vw, 6rem)' }}
            >
              Start your project{' '}
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
