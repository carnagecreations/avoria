'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-cyan-500/20 glass mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold glow-text mb-4">◆ AVORIA</h3>
            <p className="text-gray-400 text-sm">Visibility. Authority. Revenue.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-smooth">
                  SEO Mastery
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-smooth">
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-smooth">
                  Conversion Optimization
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-cyan-400 transition-smooth">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-cyan-400 transition-smooth">
                  Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-smooth">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-smooth">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-smooth">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Avoria. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300 transition-smooth">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-smooth">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
