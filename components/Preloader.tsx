'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Intro curtain: ink panel with the wordmark, lifts away. Once per session.
export default function Preloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('avoria-intro')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setShow(true);
    document.documentElement.style.overflow = 'hidden';
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('avoria-intro', '1');
      document.documentElement.style.overflow = '';
    }, 1400);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="curtain"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-ink flex items-center justify-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-display text-paper text-4xl md:text-6xl"
          >
            Avoria<span className="text-venom">.</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
