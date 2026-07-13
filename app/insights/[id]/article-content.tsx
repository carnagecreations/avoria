'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { articles } from '../articles';

interface ArticleContentProps {
  article: (typeof articles)[0];
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">{article.category}</p>
          <h1 className="mb-6 max-w-4xl leading-[1.1]" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
            {article.title}
          </h1>
          <div className="flex gap-6 text-sm text-ink-faint">
            <p>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            <p>·</p>
            <p>{article.readTime}</p>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 pb-40 md:pb-56">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </section>

      {/* Back to articles */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 border-t border-line">
        <Link href="/insights" className="text-viper hover:text-viper-dark transition-smooth font-medium">
          ← Back to Notes
        </Link>
      </section>
    </div>
  );
}
