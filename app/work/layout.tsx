import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work — Real Sites, Real Numbers | Avoria, Yuma AZ',
  description:
    'Case studies with numbers attached: launch timelines, Lighthouse scores, and what each client stopped paying.',
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
