'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section-invert bg-ink mt-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-10">
        <p
          aria-hidden
          className="font-display text-paper/90 leading-[0.85] select-none mb-16 md:mb-20 -ml-1"
          style={{ fontSize: 'clamp(4.5rem, 17vw, 15rem)', letterSpacing: '-0.03em' }}
        >
          Avoria<span className="text-venom">.</span>
        </p>
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="font-mono text-sm tracking-[0.25em] uppercase font-medium mb-4 text-paper">
              Avoria
            </h3>
            <p className="text-paper/60 text-sm">Websites you own. Built to earn.</p>
            <p className="font-mono text-xs tracking-[0.15em] text-paper/40 mt-4">YUMA, AZ</p>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-venom mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-paper/60">
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
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-venom mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-paper/60">
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
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-venom mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-paper/60">
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

        <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs tracking-[0.1em] text-paper/40">
          <p>© {new Date().getFullYear()} AVORIA — HAND-CODED IN YUMA, AZ</p>
          <p className="hidden md:block">YES, THIS SITE TOO — GO AHEAD, VIEW SOURCE · 0 TRACKERS</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-paper/70 transition-smooth">
              PRIVACY
            </Link>
            <Link href="/terms" className="hover:text-paper/70 transition-smooth">
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
