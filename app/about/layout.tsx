import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Shiann Bowman | Avoria, Yuma AZ',
  description:
    'One person, all in: web developer, rescue director, vet tech. Why Avoria builds hand-coded sites clients own outright.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
