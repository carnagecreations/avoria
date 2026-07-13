import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Altimeter from "@/components/Altimeter";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Avoria — Web Design & Custom Apps | Pay After You Approve",
  description:
    "Hand-coded websites and custom apps. One flat price, no subscriptions — and no invoice until you've approved a working draft.",
  openGraph: {
    title: "Avoria — Web Design & Custom Apps",
    description:
      "Hand-coded websites and custom apps that clients own outright — one flat price, and no invoice until the draft is approved.",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Avoria",
  description:
    "Hand-coded websites and custom web applications that clients own outright — one flat price, and no invoice until the draft is approved.",
  areaServed: ["US"],
  founder: {
    "@type": "Person",
    name: "Shiann Bowman",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <MotionProvider>
          <Preloader />
          <SmoothScroll />
          <Cursor />
          <Altimeter />
          <Navigation />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
