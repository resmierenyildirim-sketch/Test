import Image from 'next/image';
import { asset } from '@/lib/asset';
import Button from './Button';
import LineReveal from './LineReveal';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-black text-white">
      <div className="hero-bg absolute inset-0">
        <Image src={asset('/img/mountains-harbor.webp')} alt="" fill priority sizes="100vw" className="hero-zoom object-cover opacity-90" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
      <div className="hero-content relative mx-auto grid w-full max-w-7xl gap-10 px-6 pb-16 pt-40 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <LineReveal as="h1" text="Vision in Focus" className="text-6xl font-semibold leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl" delay={200} />
          <Reveal delay={700}>
            <p className="mt-6 max-w-xl text-lg">We give vision, structure, and the confidence you need to build momentum.</p>
          </Reveal>
        </div>
        <Reveal delay={900} className="flex items-center gap-5">
          <Image src={asset('/img/shaurya-kauhsish-w9Ae-0Gap9I.webp')} alt="Harbor consultant" width={120} height={120} className="size-24 rounded-full object-cover" />
          <div>
            <p className="eyebrow">(NYC Experts)</p>
            <p className="mt-1 max-w-56 text-sm">Expert financial consulting in Manhattan, New York.</p>
            <Button href="#contact" variant="light" className="mt-3">Book a Call</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
