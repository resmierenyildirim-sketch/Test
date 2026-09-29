'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { asset } from '@/lib/asset';
import { content } from '@/lib/content';

const { items, left, right } = content.testimonials;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

// Sabitlenen alanda kartlar üst üste durur; kaydırdıkça üstteki eğilip yukarı uçar.
export default function TestimonialDeck() {
  const outer = useRef<HTMLElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const o = outer.current;
    if (!o) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const n = items.length;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = o.offsetHeight - window.innerHeight;
      const p = max > 0 ? clamp(-o.getBoundingClientRect().top / max) : 0;
      const s = p * (n - 1);
      cards.current.forEach((c, i) => {
        if (!c) return;
        const t = i === n - 1 ? 0 : clamp(s - i);
        const depth = Math.max(0, i - s);
        c.style.transform =
          `translate(${-t * 14}vw, calc(${depth * 16}px + ${-t * 120}vh)) rotate(${-t * 16}deg) scale(${1 - depth * 0.035})`;
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section
      id="testimonials"
      ref={outer}
      className="deck-outer relative"
      style={{ height: `${100 + (items.length - 1) * 85}vh` }}
    >
      <div className="deck-sticky sticky top-0 h-screen overflow-hidden">
        <p className="absolute left-1/2 top-24 -translate-x-1/2 text-sm md:left-10 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:text-base">{left}</p>
        <p className="absolute right-10 top-1/2 hidden -translate-y-1/2 md:block">{right}</p>
        <div className="deck-stack grid h-full place-items-center">
          {items.map((t, i) => (
            <figure
              key={t.name}
              ref={(el) => { cards.current[i] = el; }}
              className={`deck-card col-start-1 row-start-1 flex h-[31rem] w-[min(85vw,25rem)] flex-col justify-between rounded-[20px] p-7 will-change-transform ${t.bg}`}
              style={{ zIndex: items.length - i }}
            >
              <div className="flex items-start justify-between">
                <span className="text-7xl font-normal leading-none" aria-hidden="true">{t.name[0]}</span>
                <Image src={asset(t.img)} alt={t.name} width={96} height={146} className="h-32 w-24 rounded-2xl object-cover" />
              </div>
              <div>
                <blockquote className="text-xl font-normal leading-snug">“{t.quote}”</blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-sm">{t.role}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
