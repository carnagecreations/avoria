import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Free Call — Avoria | Web Design Yuma, AZ',
  description:
    'Fifteen no-pressure minutes about what you need. You leave with a clear scope and a flat price — whether you build with Avoria or not.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
