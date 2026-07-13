'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            Privacy Policy
          </h1>
          <p className="text-lg text-ink-soft max-w-2xl">
            How we handle your information.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 pb-40 md:pb-56 space-y-8 text-lg leading-relaxed text-ink-soft">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">What We Collect</h2>
          <p>
            When you contact us through our website, we collect the information you provide: your name, email address, phone number (if provided), and any message content. We use this only to respond to your inquiry.
          </p>
          <p>
            We may also collect usage data through analytics tools to understand how our website is being used. This data is anonymized and does not identify you personally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">How We Use Your Information</h2>
          <p>
            We use your contact information solely to respond to your inquiry or fulfill your request. We do not sell, rent, or share your personal information with third parties.
          </p>
          <p>
            If you choose to receive our newsletter, we use your email only to send you updates and insights. You can unsubscribe at any time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Cookies and Tracking</h2>
          <p>
            Our website uses cookies to enhance your experience. These are non-tracking cookies that help us remember your preferences and improve site functionality.
          </p>
          <p>
            We do not use cookies for advertising, profiling, or surveillance. You can disable cookies in your browser settings if you prefer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Third-Party Services</h2>
          <p>
            We use Cloudflare for hosting and DNS. Cloudflare does not track you; they provide infrastructure. For details on their privacy practices, see{' '}
            <a href="https://www.cloudflare.com/privacypolicy/" className="text-viper hover:text-viper-dark transition-smooth">
              Cloudflare's Privacy Policy
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information at any time. If you have questions about your data or want it removed, contact us and we'll handle it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Changes to This Policy</h2>
          <p>
            We may update this policy occasionally. Changes will be posted here, and we'll note the update date. Your continued use of the site means you accept the updated policy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Contact</h2>
          <p>
            Questions about this policy? Email us at{' '}
            <a href="mailto:bowman.shiann@gmail.com" className="text-viper hover:text-viper-dark transition-smooth">
              bowman.shiann@gmail.com
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-sm text-ink-faint pt-8 border-t border-line"
        >
          <p>Last updated: July 2026</p>
        </motion.div>
      </section>

      {/* Back link */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 border-t border-line">
        <Link href="/" className="text-viper hover:text-viper-dark transition-smooth font-medium">
          ← Back home
        </Link>
      </section>
    </div>
  );
}
