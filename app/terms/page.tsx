'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Terms() {
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
            Terms of Service
          </h1>
          <p className="text-lg text-ink-soft max-w-2xl">
            How we work together.
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
          <h2 className="text-2xl text-ink mb-4">Agreement</h2>
          <p>
            By contacting us or engaging our services, you agree to these terms. These terms govern the relationship between you and Avoria for web design, custom applications, and related services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Scope of Work</h2>
          <p>
            All projects begin with a detailed scope. The scope defines what will be delivered, the timeline, and the total price. Nothing changes without a written addendum.
          </p>
          <p>
            The quote is the ceiling—not an opening bid. Once approved, the invoice doesn't exist until you sign off on the delivered work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Payment</h2>
          <p>
            Payment is due upon final approval of the delivered work. We don't invoice until you've reviewed and agreed to what was built.
          </p>
          <p>
            We accept credit cards, bank transfers, and checks. Late payments may be subject to interest at a rate of 1.5% per month.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Revisions and Changes</h2>
          <p>
            All projects include one round of revisions. Changes within the scope are free. Changes outside the scope require an estimate and separate agreement.
          </p>
          <p>
            Scope creep kills deadlines. If the project direction changes, we'll discuss it openly and adjust the scope, timeline, or price accordingly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Ownership and IP</h2>
          <p>
            All code, design, and assets created specifically for you are yours. We transfer complete ownership at launch. The site, its source code, and all associated files belong to you.
          </p>
          <p>
            You can modify it, host it anywhere, sell it, or gift it. No lock-in. No recurring fees. No restrictions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Hosting and Support</h2>
          <p>
            We recommend hosting on Cloudflare Pages (free) or another modern host. You control the hosting; you own the bill.
          </p>
          <p>
            We provide a post-launch support window to fix any issues related to the deliverables. Extended support is available at our standard rates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Warranties and Liability</h2>
          <p>
            We warrant that all work will be completed in a professional manner and that the delivered site will function as designed. We do not warrant that your site will attract customers, generate revenue, or solve every business problem.
          </p>
          <p>
            Our liability is limited to the amount you paid. We are not responsible for lost profits, indirect damages, or third-party claims.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Refunds</h2>
          <p>
            Refunds are not offered once work has begun. If we haven't started your project and you decide to cancel, we'll refund any deposit paid.
          </p>
          <p>
            In the rare case where delivered work fails to meet the agreed scope, we'll fix it at no charge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Termination</h2>
          <p>
            Either party can terminate a project with written notice. If you terminate before completion, you'll be billed for work completed through the termination date.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Third-Party Content and Compliance</h2>
          <p>
            You're responsible for providing lawful content for your site—no copyrighted material, no infringing assets, no illegal services. We'll build what you ask for, but you warrant that your content and business comply with all applicable laws.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Changes to These Terms</h2>
          <p>
            We may update these terms. Changes will be posted here, and the date will be updated. Your continued engagement means you accept any changes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <h2 className="text-2xl text-ink mb-4">Dispute Resolution</h2>
          <p>
            Before taking any legal action, let's talk. Email us at{' '}
            <a href="mailto:bowman.shiann@gmail.com" className="text-viper hover:text-viper-dark transition-smooth">
              bowman.shiann@gmail.com
            </a>
            . Most disagreements can be solved over a conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
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
