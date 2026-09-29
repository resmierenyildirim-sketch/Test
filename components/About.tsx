import Image from 'next/image';
import { asset } from '@/lib/asset';
import Button from './Button';
import LineReveal from './LineReveal';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
      <div>
        <p className="eyebrow">(About Us)</p>
        <LineReveal
          as="p"
          className="mt-6 text-3xl font-medium leading-snug sm:text-4xl"
          text="We provide leaders with the strategies they need to make confident decisions. Our approach combines actionable insights with personalized guidance."
        />
        <Reveal delay={200}>
          <p className="mt-6 max-w-lg text-lg opacity-70">
            Whether you’re just starting out or scaling to the next level, we’re here to support your growth every step of the way.
          </p>
          <Button href="#services" className="mt-8">View Services</Button>
        </Reveal>
      </div>
      <Reveal effect="zoom" className="overflow-hidden rounded-2xl">
        <Image src={asset('/img/ceo-2.webp')} alt="Harbor founder" width={768} height={794} className="w-full object-cover" />
      </Reveal>
    </section>
  );
}
