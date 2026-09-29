import Image from 'next/image';
import { asset } from '@/lib/asset';
import Button from './Button';
import LineReveal from './LineReveal';
import Reveal from './Reveal';
import TopTicker from './TopTicker';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-black text-white">
      <div className="hero-bg absolute inset-0">
        <Image src={asset('/img/mountains-harbor.webp')} alt="" fill priority sizes="100vw" className="hero-zoom object-cover object-[68%_center] opacity-90 md:object-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/30" />
      <TopTicker />
      <div className="hero-content relative mx-auto w-full max-w-7xl px-4 pb-6 pt-40 md:px-6 md:pb-14">
        <div className="md:grid md:grid-cols-[1fr_auto] md:items-end md:gap-10">
          <div>
            <LineReveal as="h1" text="Vision in Focus" className="text-[2.6rem] font-light leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-9xl" delay={200} />
            <Reveal delay={700} className="hidden md:block">
              <p className="mt-6 max-w-xl text-lg font-light">We give vision, structure, and the confidence you need to build momentum.</p>
            </Reveal>
          </div>
          <Reveal delay={900} className="mt-6 flex items-center gap-4 rounded-2xl bg-white/10 p-3 backdrop-blur-md md:mt-0 md:rounded-3xl md:p-4">
            <Image src={asset('/img/shaurya-kauhsish-w9Ae-0Gap9I.webp')} alt="Harbor consultant" width={120} height={120} className="size-16 rounded-xl object-cover md:size-24 md:rounded-2xl" />
            <div>
              <p className="eyebrow hidden md:block">(NYC Experts)</p>
              <p className="text-sm font-light md:mt-1 md:max-w-56">Expert financial consulting in Manhattan, New York.</p>
              <Button href="#contact" variant="light" arrow className="mt-2 md:mt-3">Book a Call</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
