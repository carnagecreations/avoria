'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Notes', href: '/insights' },
    { name: 'About', href: '/about' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/90 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl text-ink hover:text-viper transition-smooth"
        >
          Avoria
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[13px] font-medium transition-smooth relative ${
                  active ? 'text-ink' : 'text-ink-faint hover:text-ink'
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-px bg-ink" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-7">
          <Link href="/contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-6">
            Start a project
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 relative z-50"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6, backgroundColor: '#F7F4ED' } : { rotate: 0, y: 0, backgroundColor: '#1B1813' }}
              className="w-6 h-[2px] bg-ink"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-ink"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6, backgroundColor: '#F7F4ED' } : { rotate: 0, y: 0, backgroundColor: '#1B1813' }}
              className="w-6 h-[2px] bg-ink"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu — full-screen ink overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-ink section-invert"
          >
            <div className="h-full flex flex-col justify-center px-8 gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-4xl text-paper hover:text-venom transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-6"
              >
                <Link href="/contact" className="btn-primary" onClick={() => setIsOpen(false)}>
                  Start a project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
