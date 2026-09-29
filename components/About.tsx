import Image from 'next/image';
import { asset } from '@/lib/asset';
import LineReveal from './LineReveal';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:px-6 md:py-28">
      <div>
        <LineReveal
          as="p"
          className="text-[1.7rem] font-light leading-snug sm:text-4xl md:text-5xl"
          text="We provide leaders with the strategies they need to make confident decisions. Our approach combines actionable insights with personalized guidance."
        />
        <Reveal delay={200}>
          <p className="eyebrow mt-10">(About Us)</p>
          <p className="mt-4 max-w-lg text-base font-light opacity-70 md:text-lg">
            Whether you’re just starting out or scaling to the next level, we’re here to support your growth every step of the way.
          </p>
          <a href="#services" className="group mt-6 inline-flex items-center gap-2 text-sm underline underline-offset-[6px]">
            View Services <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
      <Reveal effect="zoom" className="overflow-hidden rounded-3xl">
        <Image src={asset('/img/ceo-2.webp')} alt="Harbor founder" width={768} height={794} className="w-full object-cover" />
      </Reveal>
    </section>
  );
}
