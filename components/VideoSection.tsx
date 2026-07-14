'use client';

import { motion } from 'framer-motion';

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function VideoSection({ videoId, headline }: { videoId: string; headline: string }) {
  return (
    <section className="section-invert bg-ink py-40 md:py-56 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="mb-16"
        >
          <h2 className="mb-8" style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)', lineHeight: 1.05 }}>
            {headline}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing, delay: 0.1 }}
          className="w-full bg-black rounded-lg overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]"
        >
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
