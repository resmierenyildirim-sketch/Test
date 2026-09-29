'use client';

import Image from 'next/image';
import { useEffect, useRef, type CSSProperties } from 'react';
import { asset } from '@/lib/asset';
import { content } from '@/lib/content';

const { items, left, right } = content.testimonials;
const clamp = (v: number) => Math.min(1, Math.max(0, v));
const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;
// Üstteki kartların uçuş sırasındaki eğim açıları (derece), yığındaki sıraya göre.
const EXIT_ROT = [0, -15, 18, -13, 16];
const EXPOSE = 20; // arkadaki kartların görünen payı (px)

// Salient "layered card reveal / stack": kartlar üst üste durur, kaydırdıkça üsttekiler eğilip yukarı uçar.
export default function TestimonialDeck() {
  const outer = useRef<HTMLElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const n = items.length;

  useEffect(() => {
    const o = outer.current;
    if (!o) return;
    const mq = window.matchMedia('(prefers-reduced-motion: no-preference)');
    let raf = 0, start = 0, end = 1;
    const stackOff: number[] = [];
    const measure = () => {
      start = o.getBoundingClientRect().top + window.scrollY;
      const H = o.offsetHeight;
      end = start + H - H / n;
      const vh = window.innerHeight;
      const extra = window.innerWidth < 1000 ? 100 : 40;
      cards.current.forEach((c, i) => {
        if (c) stackOff[n - 1 - i] = Math.max(200, Math.ceil(vh / 2 + c.offsetHeight / 2 + extra));
      });
    };
    const update = () => {
      raf = 0;
      if (!mq.matches) return;
      const p = clamp((window.scrollY - start) / Math.max(1, end - start));
      const seg = Math.max(1, n - 1);
      const s = Math.min(seg - 1, Math.floor(p * seg));
      const a = clamp(p * seg - s);
      const c = s + easeInOutSine(a);
      const r = n - 1 - s; // şu an uçan kartın yığın sırası
      cards.current.forEach((el, i) => {
        if (!el) return;
        const e = n - 1 - i; // 0 = en alttaki, n-1 = en üstteki
        let off = 0, sc = 1, rot = 0;
        if (e === 0) {
          const depth = Math.max(0, n - 1 - e - c);
          sc = Math.max(0.75, 1 - depth * 0.04);
          off = depth * EXPOSE;
        } else if (e > r) {
          off = -(stackOff[e] ?? 0);
          rot = EXIT_ROT[e] ?? 15;
        } else if (e === r) {
          const t = easeInOutSine(a);
          off = -(stackOff[e] ?? 0) * t;
          rot = (EXIT_ROT[e] ?? 15) * t;
        } else {
          const depth = Math.max(0, n - 1 - e - c);
          sc = Math.max(0.75, 1 - depth * 0.04);
          off = depth * EXPOSE;
        }
        el.style.setProperty('--so', `${off}px`);
        el.style.setProperty('--ss', String(sc));
        el.style.setProperty('--sr', `${rot}deg`);
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onResize = () => { measure(); onScroll(); };
    measure(); update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
      cancelAnimationFrame(raf);
    };
  }, [n]);

  return (
    <section id="testimonials" ref={outer} className="deck" data-hdr="dark" style={{ '--n': n } as CSSProperties}>
      <div className="deck-stick">
        <p className="deck-label deck-label--l">{left}</p>
        <p className="deck-label deck-label--r">{right}</p>
        {items.map((t, i) => (
          <figure
            key={t.name}
            ref={(el) => { cards.current[i] = el; }}
            className={`deck-card ${t.bg}`}
            style={{ zIndex: n - i, '--so': `${i * EXPOSE}px`, '--ss': Math.max(0.75, 1 - i * 0.04) } as CSSProperties}
          >
            <div className="deck-top">
              <span className="deck-initial" aria-hidden="true">{t.name[0]}</span>
              <Image src={asset(t.img)} alt={t.name} width={194} height={292} className="deck-thumb" />
            </div>
            <div>
              <blockquote className="deck-quote">“{t.quote}”</blockquote>
              <figcaption>
                <p className="deck-name">{t.name}</p>
                <p className="deck-role">{t.role}</p>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
