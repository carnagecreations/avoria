import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full">
        <p className="eyebrow mb-4">404</p>
        <h1 className="mb-6 leading-[1.02]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          This page shed its <span className="stroke-em">skin</span>.
        </h1>
        <p className="text-lg text-ink-soft max-w-xl mb-10">
          It&apos;s not here anymore — but everything worth seeing is one click away.
        </p>
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
