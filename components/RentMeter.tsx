'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import Magnetic from '@/components/Magnetic';

const BILLS = [23, 49, 65, 99];
const MONTHS = 36;

export default function RentMeter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [bill, setBill] = useState(49);
  const [month, setMonth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Scroll drives the clock: months 0 → 36 across the middle of the section
  const monthValue = useTransform(scrollYProgress, [0.08, 0.8], [0, MONTHS], {
    clamp: true,
  });
  useMotionValueEvent(monthValue, 'change', (v) => {
    setMonth(Math.max(0, Math.min(MONTHS, Math.floor(v))));
  });

  // Endgame: the meter recedes, the verdict lands
  const meterOpacity = useTransform(scrollYProgress, [0.8, 0.88], [1, 0]);
  const meterScale = useTransform(scrollYProgress, [0.8, 0.88], [1, 0.96]);
  const verdictOpacity = useTransform(scrollYProgress, [0.86, 0.94], [0, 1]);
  const verdictY = useTransform(scrollYProgress, [0.86, 0.94], [28, 0]);
  const verdictEvents = useTransform(scrollYProgress, (p) =>
    p > 0.86 ? ('auto' as const) : ('none' as const)
  );
  const progressScaleX = useTransform(scrollYProgress, [0.08, 0.8], [0, 1], {
    clamp: true,
  });

  const total = month * bill;
  const year = Math.min(3, Math.floor((month - 1) / 12) + 1);

  return (
    <section
      ref={sectionRef}
      className="section-invert bg-ink relative h-[300vh]"
      aria-label="What three years of platform rent costs"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* The meter */}
        <motion.div
          style={{ opacity: meterOpacity, scale: meterScale }}
          className="flex-1 flex flex-col justify-center max-w-[1200px] mx-auto w-full px-6 md:px-10"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <p className="eyebrow mb-6">The meter</p>
              <h2 className="text-3xl md:text-5xl max-w-xl" style={{ lineHeight: 1.1 }}>
                Watch three years of rent <span className="stroke-em">go by</span>.
              </h2>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/40 mb-3">
                Your monthly bill
              </p>
              <div className="flex gap-2" role="group" aria-label="Choose your monthly bill">
                {BILLS.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBill(b)}
                    aria-pressed={bill === b}
                    className={`font-mono text-sm px-4 py-2 rounded-full border transition-smooth ${
                      bill === b
                        ? 'bg-venom text-ink border-venom'
                        : 'border-paper/20 text-paper/60 hover:border-paper/50 hover:text-paper'
                    }`}
                  >
                    ${b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
            {/* Running total */}
            <div className="md:col-span-7">
              <p
                className="font-display text-venom tabular-nums"
                style={{ fontSize: 'clamp(4.5rem, 13vw, 11rem)', lineHeight: 0.95 }}
                aria-live="polite"
              >
                ${total.toLocaleString()}
              </p>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/40 mt-6">
                {month === 0
                  ? 'Scroll — the billing starts'
                  : month < MONTHS
                    ? `Year ${year} · month ${month} · nothing owned yet`
                    : `Month ${MONTHS} · lease renews · still nothing owned`}
              </p>
            </div>

            {/* Receipt tape */}
            <div className="md:col-span-5">
              <div
                className="h-44 md:h-56 overflow-hidden flex flex-col justify-end gap-2.5"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent, black 45%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 45%)',
                }}
                aria-hidden
              >
                {Array.from({ length: month }, (_, i) => i + 1).map((m) => (
                  <div
                    key={m}
                    className="flex justify-between font-mono text-[11px] tracking-[0.15em] uppercase text-paper/50 border-b border-paper/[0.07] pb-2"
                  >
                    <span>Mo {String(m).padStart(2, '0')} — template rent</span>
                    <span className="text-paper/70">−${bill}.00</span>
                  </div>
                ))}
                {month === MONTHS && (
                  <div className="flex justify-between font-mono text-[11px] tracking-[0.15em] uppercase text-venom pt-1">
                    <span>Owned at end of term</span>
                    <span>$0.00</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* The verdict */}
        <motion.div
          style={{ opacity: verdictOpacity, y: verdictY, pointerEvents: verdictEvents }}
          className="absolute inset-0 flex items-center"
        >
          <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10">
            <p className="eyebrow mb-10">The other way</p>
            <h2 className="max-w-4xl mb-10" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
              ${(MONTHS * bill).toLocaleString()} gone — or pay{' '}
              <span className="stroke-em">once</span> and own it.
            </h2>
            <p className="text-paper/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
              An Avoria build is one flat price — often less than a single year of
              that meter — then about $11 a year for the domain. The meter never
              starts, and every line of code is yours.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <Magnetic>
                <Link href="/contact" className="btn-primary !px-10 !py-4">
                  Stop the meter
                </Link>
              </Magnetic>
              <p className="text-[13px] text-paper/40">
                No invoice until you approve a working draft.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline hairline */}
        <div className="relative border-t border-paper/10">
          <motion.div
            className="absolute top-[-1px] left-0 h-[1px] bg-venom origin-left w-full"
            style={{ scaleX: progressScaleX }}
          />
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex justify-between py-4">
            {['Today', 'Year 1', 'Year 2', 'Year 3'].map((label) => (
              <span
                key={label}
                className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/30"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
