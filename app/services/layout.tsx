import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Web Design, Custom Apps & SEO in Yuma, AZ | Avoria',
  description:
    'Hand-coded websites, custom web applications, performance SEO, and migrations — every engagement priced once and owned by you the day it launches.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
