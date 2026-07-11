'use client';

import { motion } from 'framer-motion';

// Headline reveal — fade-up on first view. Same proven mechanism as the rest
// of the site's in-view animations (the masked-translate variant shipped stuck
// at its hidden state in production).
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      className={`block ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.span>
  );
}
