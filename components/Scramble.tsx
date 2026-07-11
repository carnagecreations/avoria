'use client';

import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#·—/';

// Decode effect: text scrambles into place when it scrolls into view.
export default function Scramble({ text, className = '' }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const played = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played.current) return;
        played.current = true;
        let frame = 0;
        const total = 20;
        const id = setInterval(() => {
          frame++;
          const progress = frame / total;
          setDisplay(
            text
              .split('')
              .map((c, i) =>
                c === ' ' || i / text.length < progress
                  ? c
                  : CHARS[Math.floor(Math.random() * CHARS.length)]
              )
              .join('')
          );
          if (frame >= total) {
            setDisplay(text);
            clearInterval(id);
          }
        }, 32);
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [text]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
