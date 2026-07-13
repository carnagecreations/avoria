'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'SanctuaryBase — Animal Sanctuary Management App',
    category: 'Web Apps',
    client: 'Saint Francis Rescue & Sanctuary',
    result: '60 screens · Real animal care operations',
    description:
      'A complete operational app for managing animal sanctuary care: daily animal records with 16 tabs (medical, feeding, behavior), volunteer shift scheduling, vet triage tool with AI chat, people/CRM, and public website integration. Hand-coded from intake to production.',
    stack: ['Next.js', 'Cloudflare KV', 'Custom app', 'SMS', 'AI integration'],
    image: '/images/screenshot-sanctuarybase.webp',
    url: 'https://sanctuarybase.pages.dev/',
    featured: true,
  },
  {
    id: 2,
    title: 'Frank & Son — Window Tinting Shop',
    category: 'Web Design',
    client: 'Frank & Son',
    result: "Yuma's oldest tint shop since day one",
    description:
      'Ceramic and dyed window tint — a local landmark rebuilt as a conversion-focused site. Service gallery, quote calculator, headlight restoration showcase, and a tint visualizer tool.',
    stack: ['Next.js', 'Cloudflare Pages', 'Contact pipeline'],
    image: '/images/screenshot-frank-son.webp',
    url: 'https://fswindowtintyuma.com/',
  },
  {
    id: 3,
    title: 'Saint Francis Rescue & Sanctuary — Nonprofit Site',
    category: 'Nonprofit',
    client: 'Saint Francis Rescue & Sanctuary',
    result: 'Adoption pipeline · volunteer signup',
    description:
      'A farm sanctuary in Yuma — not a shelter, a permanent home. The site powers animal adoption listings, foster placements, volunteer sign-ups, and donation pages. Feeds directly into SanctuaryBase ops.',
    stack: ['Next.js', 'Airtable sync', 'Donation pipeline'],
    image: '/images/screenshot-saint-francis.webp',
    url: 'https://sfrescue.org/',
  },
  {
    id: 4,
    title: 'Horror Ghouls — Haunted Bakery',
    category: 'Web Design',
    client: 'Horror Ghouls',
    result: 'Movie-night dessert builder',
    description:
      'Two bakers, one haunted kitchen. A bakery site for custom boxes — classic cookies, slasher-themed pastries, a caramel puffcorn cult following, and a video showing the haunted kitchen in action.',
    stack: ['Next.js', 'Cloudflare Pages', 'Custom box builder'],
    image: '/images/screenshot-horror-ghouls.webp',
    url: 'https://horrorghouls.pages.dev/',
  },
  {
    id: 5,
    title: 'Montijo — Service Business Website',
    category: 'Web Design',
    client: 'Montijo',
    result: 'Live in 6 days · $0/mo hosting',
    description:
      'An agency quoted $1,800. This site went live in six days for a fraction of it — fast, professional, and owned outright by the client.',
    stack: ['Next.js', 'Cloudflare Pages', 'Hand-coded'],
    image: '/images/screenshot-montijo.webp',
    url: 'https://marymontijo.pages.dev/',
  },
  {
    id: 6,
    title: "Brennan's — Local Business Website",
    category: 'Web Design',
    client: "Brennan's",
    result: '95+ Lighthouse · leads in week 1',
    description:
      'A conversion-ready local business site — gallery, contact form, 95+ Lighthouse — pulling real leads within its first week live.',
    stack: ['Hand-coded', 'SEO schema', 'Contact pipeline'],
    image: '/images/screenshot-brennans.webp',
    url: 'https://brennansyuma.com/',
  },
  {
    id: 7,
    title: 'Rescue Website Rebuild — Beauties of the Beasts',
    category: 'Performance',
    client: 'Beauties of the Beasts',
    result: 'Lighthouse 52→97 · load 6.2s→1.4s',
    description:
      'A WordPress/Divi site that took 6.2 seconds to load, rebuilt on a modern stack: Lighthouse 52 to 97, load time to 1.4 seconds, hosting bill from ~$25/mo to $0.',
    stack: ['WordPress migration', 'Core Web Vitals', '$0 hosting'],
    image: '/images/screenshot-beauties.webp',
    url: 'https://yumareptiles.com/',
  },
  {
    id: 8,
    title: 'Salon Booking App',
    category: 'Web Apps',
    client: 'L. Castillo, Salon Owner',
    result: 'No-show rate dropped immediately',
    description:
      'An agency quoted $8,000. The salon got a booking app shaped to its actual workflow for a fraction of that — and no-shows dropped the first week it ran.',
    stack: ['Custom app', 'Booking engine', 'SMS reminders'],
    image: '/images/screenshot-salon-booking.webp',
  },
];

const secretProject = {
  id: 999,
  title: 'Beauties of the Beasts',
  category: 'Secret',
  client: "Founder's Nonprofit",
  result: '300+ reptiles rehomed',
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

  const filters = ['All', 'Web Design', 'Web Apps', 'Performance', 'Nonprofit'];

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
      <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-8">Selected Work</p>
          <h1 className="mb-10 max-w-4xl leading-[1.05]" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}>
            The work, with <span className="stroke-em">numbers attached</span>.
          </h1>
          <p className="text-xl md:text-2xl text-ink-soft max-w-2xl leading-relaxed">
            No &ldquo;increased brand engagement&rdquo; here. Launch timelines,
            Lighthouse scores, and what each client stopped paying.
          </p>
        </motion.div>
      </section>

      {/* Featured: SanctuaryBase */}
      <section className="py-40 md:py-56 border-t border-line section-invert bg-ink">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow mb-8" style={{ color: '#C0A869' }}>The custom app</p>
                <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1 }} className="mb-10 text-paper">
                  SanctuaryBase — Animal Sanctuary Operations
                </h2>
                <p className="text-xl text-paper/70 mb-8 leading-relaxed max-w-2xl">
                  60 screens. A complete operational app built from scratch for Saint Francis Rescue & Sanctuary in Yuma — handling daily animal care, medical records, volunteer scheduling, vet triage, and public adoption listings.
                </p>
                <ul className="space-y-5 mb-12 max-w-2xl">
                  <li className="text-paper/70 flex gap-3">
                    <span className="text-venom flex-shrink-0">✓</span>
                    <span>16-tab animal medical records (Profile, Health, Meds, Behavior, Website listing, and more)</span>
                  </li>
                  <li className="text-paper/70 flex gap-3">
                    <span className="text-venom flex-shrink-0">✓</span>
                    <span>Volunteer shift scheduling with calendar and slot management</span>
                  </li>
                  <li className="text-paper/70 flex gap-3">
                    <span className="text-venom flex-shrink-0">✓</span>
                    <span>Vet Hub: emergency protocols, species care guides, symptom triage, AI chat, and contact directory</span>
                  </li>
                  <li className="text-paper/70 flex gap-3">
                    <span className="text-venom flex-shrink-0">✓</span>
                    <span>Admin dashboard with compliance tracking, daily care logging, and operations overview</span>
                  </li>
                  <li className="text-paper/70 flex gap-3">
                    <span className="text-venom flex-shrink-0">✓</span>
                    <span>Inbox: adoption, foster, volunteer applications with status pipelines</span>
                  </li>
                </ul>
                <p className="text-sm text-paper/50">Stack: Next.js, Cloudflare KV, SMS integration, AI chat, real sanctuary operations</p>
              </div>
              <div>
                <div className="bg-paper/10 border border-paper/20 p-8 md:p-10 rounded text-paper/70 text-sm leading-relaxed space-y-4">
                  <p className="text-paper">The standard for every custom app here.</p>
                  <p>
                    When a sanctuary staff member opens this app, they're not learning a template — they're using a system built around exactly how they work. Intake wizard walks through vet history. Feeding logs track what each animal gets. Behavior notes auto-surface on next shift. Medical alerts flag overdue vaccines. The app does the thinking so the people can focus on care.
                  </p>
                  <p>
                    Because I run a reptile rescue too, I built this understanding something the standard SaaS can't: what happens when the system fails is the animal that pays for it. So every screen was tested live with real staff, and every feature stays only if the team actually uses it.
                  </p>
                  <p className="text-paper/50 italic">
                    This is the lesson that carries into every custom app and every integration — operations software isn't clever until it's invisible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-wrap gap-10 border-b border-line pb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-sm font-medium transition-smooth relative pb-2 ${
                filter === f ? 'text-ink' : 'text-ink-faint hover:text-ink'
              }`}
            >
              {f}
              {filter === f && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-ink" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Editorial stacked list */}
      <section className="py-40 md:py-56">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-32 md:space-y-48"
          >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                onClick={() => setSelectedProject(project.id)}
                className="group cursor-pointer"
              >
                <div className={`md:w-[82%] ${i % 2 === 1 ? 'md:ml-auto' : ''}`}>
                  <div className="frame-hard">
                    <div className="aspect-[16/10] w-full overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full bg-paper-deep flex items-center justify-center">
                          <span className="text-[13px] text-ink-faint">
                            Private build — shown on request
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-12 gap-4 md:gap-8 mt-8">
                    <div className="md:col-span-6">
                      <p className="eyebrow mb-3">{project.category}</p>
                      <h3 className="text-2xl md:text-3xl group-hover:text-viper transition-smooth">
                        {project.title}
                      </h3>
                    </div>
                    <div className="md:col-span-6">
                      <p className="text-ink-soft mb-5">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.stack.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] tracking-[0.06em] px-3.5 py-1.5 rounded-full border border-line text-ink-faint"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-baseline justify-between gap-4 border-t border-line pt-4">
                        <p className="text-sm text-ink-faint">{project.client}</p>
                        <p className="text-[13px] text-ink-soft text-right">{project.result}</p>
                      </div>
                    </div>
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
                  <p className="eyebrow mb-3">Secret</p>
                  <h3 className="text-2xl md:text-3xl mb-3 group-hover:text-clay transition-smooth">
                    {secretProject.title}
                  </h3>
                  <p className="text-ink-soft mb-6">{secretProject.description}</p>
                  <div className="flex items-center justify-between gap-4 border-t border-line pt-4">
                    <p className="text-sm text-ink-faint">{secretProject.client}</p>
                    <p className="text-[13px] text-clay">
                      {secretProject.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </motion.div>
        </div>
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
                        {project.url && (
                          <div className="mb-6 pt-4 border-t border-line">
                            <p className="text-ink-faint text-xs uppercase tracking-[0.1em] mb-3">Live Site</p>
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-viper hover:text-viper-dark transition-colors font-medium"
                            >
                              Visit {project.url.replace('https://', '').replace('/', '')} →
                            </a>
                          </div>
                        )}
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
            <p className="eyebrow mb-6">Your business could be the next row on this page</p>
            <Link
              href="/contact"
              className="mega-link group"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 4.75rem)' }}
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
