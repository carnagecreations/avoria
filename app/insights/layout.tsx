import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes — Straight Answers on Websites, Pricing & Ownership | Avoria',
  description:
    'What things really cost, why sites are slow, and when you have outgrown the off-the-shelf tool — from the person who builds the fixes.',
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
