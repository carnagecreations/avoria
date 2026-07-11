'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// Custom cursor: venom dot + trailing ring that grows over interactive elements.
// Desktop fine-pointer only; native cursor restored if JS never runs.
export default function Cursor() {
  const prefersReduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (prefersReduced) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);
    document.documentElement.classList.add('has-cursor');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      setHovering(
        !!(e.target as Element).closest?.(
          'a, button, [role="button"], input, textarea, select, label, summary'
        )
      );
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [prefersReduced, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[100] pointer-events-none w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-venom border border-ink/30"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[99] pointer-events-none w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border border-paper mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 2 : 1, opacity: hovering ? 0.9 : 0.6 }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}
