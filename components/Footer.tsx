'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section-invert bg-ink mt-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
        <p
          aria-hidden
          className="font-display text-paper/[0.92] leading-[0.9] select-none mb-20 md:mb-28 -ml-1"
          style={{ fontSize: 'clamp(4rem, 14vw, 11rem)', letterSpacing: '-0.02em' }}
        >
          Avoria<span className="text-venom">.</span>
        </p>
        <div className="grid md:grid-cols-4 gap-10 mb-20">
          <div>
            <p className="text-paper/60 text-sm max-w-[220px]">
              Websites you own. Built to earn.
            </p>
            <p className="eyebrow mt-5" style={{ color: 'rgba(250,249,245,0.35)' }}>
              Yuma, AZ
            </p>
          </div>
          <div>
            <p className="eyebrow mb-5" style={{ color: 'rgba(250,249,245,0.4)' }}>Services</p>
            <ul className="space-y-3 text-sm text-paper/60">
              <li>
                <Link href="/services" className="hover:text-paper transition-smooth">
                  Web design &amp; development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-paper transition-smooth">
                  Custom web applications
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-paper transition-smooth">
                  Performance &amp; SEO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5" style={{ color: 'rgba(250,249,245,0.4)' }}>Studio</p>
            <ul className="space-y-3 text-sm text-paper/60">
              <li>
                <Link href="/about" className="hover:text-paper transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-paper transition-smooth">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-paper transition-smooth">
                  Notes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5" style={{ color: 'rgba(250,249,245,0.4)' }}>Connect</p>
            <ul className="space-y-3 text-sm text-paper/60">
              <li>
                <Link href="/contact" className="hover:text-paper transition-smooth">
                  Contact
                </Link>
              </li>
              <li>
                <a href="tel:+19289163711" className="hover:text-paper transition-smooth">
                  (928) 916-3711
                </a>
              </li>
              <li>
                <a href="mailto:bowman.shiann@gmail.com" className="hover:text-paper transition-smooth">
                  bowman.shiann@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-paper/35">
          <p>© {new Date().getFullYear()} Avoria — hand-coded in Yuma, AZ</p>
          <p className="hidden md:block">This site too. Go ahead, view source.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-paper/70 transition-smooth">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-paper/70 transition-smooth">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
