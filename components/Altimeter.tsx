'use client';

import { useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';

const RAIL = 128; // px

// Fixed elevation gauge on the right edge — the page reads like a descent
// through a topo map. mix-blend-difference keeps it legible over both the
// paper and ink sections. Fine-pointer/desktop only via CSS.
export default function Altimeter() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const markerY = useTransform(smooth, [0, 1], [0, RAIL]);

  const [depth, setDepth] = useState(0);
  useMotionValueEvent(smooth, 'change', (v) => {
    setDepth(Math.max(0, Math.min(100, Math.round(v * 100))));
  });

  return (
    <div
      aria-hidden
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none flex-col items-center gap-4 mix-blend-difference text-paper"
    >
      <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-60 [writing-mode:vertical-rl]">
        Elev
      </span>
      <div className="relative" style={{ height: RAIL }}>
        <span className="absolute inset-y-0 left-1/2 w-px bg-current opacity-30" />
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <span
            key={t}
            className="absolute left-1/2 -translate-x-1/2 h-px w-2 bg-current opacity-40"
            style={{ top: t * RAIL }}
          />
        ))}
        <motion.span
          className="absolute left-1/2 -ml-[3px] -mt-[3px] w-1.5 h-1.5 rounded-full bg-current"
          style={{ top: markerY }}
        />
      </div>
      <span className="font-mono text-[9px] tracking-[0.2em] opacity-60 tabular-nums">
        {String(depth).padStart(3, '0')}
      </span>
    </div>
  );
}
