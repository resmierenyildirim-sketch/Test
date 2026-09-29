'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { asset } from '@/lib/asset';
import { content } from '@/lib/content';
import LineReveal from './LineReveal';

const { services, servicesTitle } = content;
const CARD_VW = 84;

// Masaüstünde dikey scroll'u yatay harekete çeviren renkli kartlar; mobilde üst üste yığılır.
export default function ServiceCards() {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current, t = track.current;
    if (!o || !t) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = o.offsetHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, -o.getBoundingClientRect().top / max)) : 0;
      const dist = Math.max(0, t.scrollWidth - window.innerWidth - 10);
      t.style.transform = `translate3d(${-p * dist}px,0,0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="services">
      <div className="px-4 pb-8 pt-8 md:px-10 md:pb-10 md:pt-16">
        <LineReveal as="h2" text={servicesTitle} className="text-[1.7rem] font-normal md:text-[3vw]" />
      </div>

      {/* Masaüstü: yatay kaydırma */}
      <div ref={outer} className="hs-outer relative hidden md:block" style={{ height: `calc(100vh + ${services.length * CARD_VW - 100}vw)` }}>
        <div className="hs-sticky sticky top-0 h-screen overflow-hidden py-[5px]">
          <div ref={track} className="hs-track flex h-full w-max gap-[5px] will-change-transform" style={{ marginLeft: -15 }}>
            {services.map((s) => (
              <article key={s.n} className={`grid h-full shrink-0 grid-cols-[55fr_45fr] overflow-hidden rounded-[15px] ${s.bg}`} style={{ width: `${CARD_VW}vw` }}>
                <div className="flex flex-col justify-between py-10 pl-14 pr-6">
                  <p className="text-[20vw] font-normal leading-[0.85]">{s.n}</p>
                  <h3 className="max-w-md text-[3vw] font-normal leading-[1.3]">{s.title}</h3>
                  <p className="max-w-lg text-base leading-relaxed">{s.text}</p>
                </div>
                <div className="relative my-14 mr-14 overflow-hidden rounded-[15px]">
                  <Image src={asset(s.img)} alt="" fill sizes="40vw" className="object-cover" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Mobil: üst üste yığılan kartlar */}
      <div className="px-3 pb-10 md:hidden">
        {services.map((s, i) => (
          <article
            key={s.n}
            className={`sticky mb-[6vh] flex flex-col rounded-[20px] p-6 ${s.bg}`}
            style={{ top: `calc(5.5rem + ${i} * 1rem)` }}
          >
            <p className="text-7xl font-normal leading-none">{s.n}</p>
            <h3 className="mt-8 text-2xl font-normal leading-tight">{s.title}</h3>
            <p className="mt-4 text-base leading-relaxed">{s.text}</p>
            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={asset(s.img)} alt="" fill sizes="100vw" className="object-cover" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
