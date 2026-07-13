'use client';

import { useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

export type Service = {
  num: string;
  title: string;
  description: string;
  details: string[];
};

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Pinned chapter scroller: the viewport locks and scroll flips through the
// services like slides in a dark reading room. Desktop only — the page keeps
// its stacked layout on small screens.
export default function ServiceChapters({ services }: { services: Service[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    setActive(Math.min(services.length - 1, Math.max(0, Math.floor(p * services.length))));
  });

  const service = services[active];

  return (
    <section
      ref={sectionRef}
      className="hidden md:block relative section-invert bg-ink"
      style={{ height: `${services.length * 90}vh` }}
      aria-label="Services"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-10 w-full grid grid-cols-12 gap-16 items-center">
          {/* Numeral + title */}
          <div className="col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.45, ease: easing }}
              >
                <p
                  className="ghost leading-none mb-6"
                  aria-hidden
                  style={{ fontSize: 'clamp(8rem, 16vw, 15rem)', color: 'rgba(192, 168, 105, 0.25)' }}
                >
                  {service.num}
                </p>
                <h2 className="text-4xl lg:text-5xl leading-tight">{service.title}</h2>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description + details */}
          <div className="col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.45, ease: easing, delay: 0.06 }}
              >
                <p className="text-xl text-paper/70 leading-relaxed mb-10 max-w-xl">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-x-10 gap-y-5">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex gap-4 text-[15px] leading-relaxed text-paper/70">
                      <span className="flex-shrink-0 pt-1 text-venom">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Chapter rail */}
        <div className="absolute left-10 bottom-10 flex items-center gap-6">
          <span className="font-mono text-[11px] tracking-[0.25em] text-paper/40 tabular-nums">
            {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
          </span>
          <div className="flex gap-2">
            {services.map((s, i) => (
              <span
                key={s.num}
                className={`h-px transition-all duration-500 ${
                  i === active ? 'w-10 bg-venom' : 'w-4 bg-paper/25'
                }`}
              />
            ))}
          </div>
        </div>

        <p className="absolute right-10 bottom-10 font-mono text-[10px] tracking-[0.25em] uppercase text-paper/30">
          Keep scrolling
        </p>
      </div>
    </section>
  );
}
