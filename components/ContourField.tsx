'use client';

import { useEffect, useRef } from 'react';

// Interactive topographic field: contour lines drift slowly and ripple away
// from the cursor. Pure 2D canvas — no WebGL, cheap to run.
export default function ContourField({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let t = 0;
    let W = 0;
    let H = 0;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const LINES = 24;
    const STEP = 12;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < LINES; i++) {
        const y0 = (H / (LINES + 1)) * (i + 1);
        ctx.beginPath();
        for (let x = -20; x <= W + 20; x += STEP) {
          const n =
            Math.sin(x * 0.006 + t + i * 0.55) *
            Math.cos(x * 0.0032 - t * 0.7 + i * 1.1);
          let y = y0 + n * 16;
          const dx = x - mouse.x;
          const dy = y0 - mouse.y;
          const d2 = dx * dx + dy * dy;
          y += (dy >= 0 ? 1 : -1) * 52 * Math.exp(-d2 / 24000);
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = 'rgba(22, 21, 16, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const onResize = () => {
      resize();
      if (reduced) draw();
    };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);

    if (reduced) {
      draw();
    } else {
      const loop = () => {
        t += 0.012;
        draw();
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={`block w-full h-full ${className}`} />;
}
