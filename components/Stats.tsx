import Image from 'next/image';
import { asset } from '@/lib/asset';
import { content } from '@/lib/content';
import Reveal from './Reveal';
import ScrollFill from './ScrollFill';

export default function Stats() {
  const s = content.stats;
  return (
    <section className="relative flex min-h-[110svh] flex-col justify-between overflow-hidden text-white">
      <Image src={asset('/img/uriel-xtgONQzGgOE.webp')} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative px-4 pt-20 md:px-10 md:pt-28">
        <ScrollFill text={s.lead} className="max-w-[88rem] text-[2.1rem] font-light leading-[1.12] tracking-[-0.03em] md:text-[5.2vw]" />
      </div>
      <div className="relative px-4 pb-12 pt-24 md:px-10 md:pb-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 border-t border-white/30 pt-6 md:grid-cols-3 md:gap-x-10">
          {s.items.map((it, i) => (
            <Reveal key={it.label} delay={i * 140}>
              <span className="inline-block rounded-full bg-white/25 px-4 py-1 text-sm backdrop-blur-sm">{it.label}</span>
              <p className="mt-8 text-5xl font-light tracking-[-0.04em] md:text-[6.5vw] md:leading-none">{it.value}</p>
              <p className="mt-5 max-w-[16rem] text-sm md:text-base">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
