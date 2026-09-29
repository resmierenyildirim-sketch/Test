'use client';

import { useEffect, useRef } from 'react';
import { createNoise3D } from '@/lib/simplex';

type Props = { color?: readonly [number, number, number]; speed?: number };

const ACCENT = [255, 74, 75] as const;

// Salient "animated gradient": düşük çözünürlüklü canvas üzerinde simplex gürültüsüyle akan tek renkli lekeler.
export default function AnimatedGradient({ color = ACCENT, speed = 850 }: Props) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvas.current;
    const host = cv?.parentElement;
    if (!cv || !host) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const res = window.innerWidth < 690 ? 90 : 110;
    cv.width = res;
    cv.height = res;
    const img = ctx.getImageData(0, 0, res, res);
    const data = img.data;
    const noise = createNoise3D(7);
    let clock = 0, raf = 0, inView = true;
    let ax = 1.4, ay = 1.4;
    const measure = () => {
      const t = host.clientHeight / Math.max(1, host.clientWidth);
      const a = t < 1 ? { x: 1.4, y: 1.4 * t } : { x: t / 3, y: 1 };
      ax = a.x; ay = a.y;
    };
    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!inView) return;
      for (let x = 0; x < res; x++) {
        for (let y = 0; y < res; y++) {
          const n = noise((x / res) * ax, (y / res) * ay, clock / speed);
          const o = 4 * (x + y * res);
          data[o] = color[0]; data[o + 1] = color[1]; data[o + 2] = color[2];
          data[o + 3] = 265 * n; // negatif değerler 0'a kırpılır
        }
      }
      ctx.putImageData(img, 0, 0);
      clock += 1;
    };
    measure();
    frame();
    if (reduce) { cancelAnimationFrame(raf); }
    cv.classList.add('on');
    const io = new IntersectionObserver(([e]) => { inView = e.isIntersecting; }, { rootMargin: '250px' });
    io.observe(host);
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    return () => { cancelAnimationFrame(raf); io.disconnect(); ro.disconnect(); };
  }, [color, speed]);

  return <canvas ref={canvas} aria-hidden="true" />;
}
