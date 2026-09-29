import Image from 'next/image';
import { asset } from '@/lib/asset';
import { content } from '@/lib/content';
import Button from './Button';
import LineReveal from './LineReveal';
import Reveal from './Reveal';
import TopTicker from './TopTicker';

export default function Hero() {
  const h = content.hero;
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-black text-white">
      <div className="hero-bg absolute inset-0">
        <Image src={asset('/img/mountains-harbor.webp')} alt="" fill priority sizes="100vw" className="hero-zoom object-cover object-[68%_center] opacity-95 md:object-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/20" />
      <TopTicker />
      <div className="hero-content relative w-full px-4 md:px-10">
        <LineReveal
          as="h1"
          text={h.title}
          className="whitespace-nowrap text-[11vw] font-normal leading-[1] tracking-[-0.045em] md:text-[12vw]"
          delay={200}
        />
        <div className="mt-4 border-t border-white/25 md:mt-6 md:grid md:grid-cols-2">
          <Reveal delay={800} className="flex items-start justify-between gap-6 py-4 md:py-8 md:pr-10">
            <div className="flex items-center gap-4 rounded-2xl bg-black/35 p-3 backdrop-blur-md md:rounded-3xl md:p-3.5">
              <Image src={asset('/img/shaurya-kauhsish-w9Ae-0Gap9I.webp')} alt="Harbor advisor" width={120} height={120} className="size-16 rounded-xl object-cover md:size-28 md:rounded-2xl" />
              <div>
                <p className="max-w-[16rem] text-sm font-light leading-snug md:text-xl">{h.card}</p>
                <Button href="#contact" variant="light" arrow className="mt-2 md:mt-3">{h.cta}</Button>
              </div>
            </div>
            <p className="hidden pt-1 text-sm md:block">{h.label}</p>
          </Reveal>
          <Reveal delay={1000} className="hidden items-start justify-between gap-6 border-l border-white/25 py-8 pl-10 md:flex">
            <p className="max-w-xs text-xl font-light leading-snug">{h.tagline}</p>
            <a href="#about" aria-label="Scroll down" className="text-2xl leading-none">↓</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
