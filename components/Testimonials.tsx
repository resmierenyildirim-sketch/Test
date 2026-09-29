import Image from 'next/image';
import { asset } from '@/lib/asset';
import LineReveal from './LineReveal';
import Reveal from './Reveal';

const items = [
  { img: '/img/zeelool-glasses-kJy7MMIfcNU.webp', name: 'Samuel Mitchell', role: 'Restaurant Owner',
    quote: 'Straightforward and supportive. Working together turned numbers into an actionable plan I could trust.' },
  { img: '/img/allyssa-sayers-w2Qx9eaA3I0.webp', name: 'Marissa Lawson', role: 'CCO, Nectar Media',
    quote: 'Clear, practical advice that actually made sense. Exactly the guidance I received helped me move forward with confidence.' },
  { img: '/img/testimonial-man.webp', name: 'Gabriel Roberts', role: 'Marketing Director',
    quote: 'Professional, reliable, and easy to understand — Jonathan gave me the clarity I needed to plan my finances.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24">
      <p className="eyebrow">Testimonials</p>
      <LineReveal as="h2" text="They love us" className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 120} className="flex">
          <figure className="flex w-full flex-col rounded-2xl bg-neutral-100 p-8">
            <blockquote className="flex-1 text-xl leading-snug">“{t.quote}”</blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <Image src={asset(t.img)} alt={t.name} width={56} height={56} className="size-14 rounded-full object-cover" />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm opacity-60">{t.role}</p>
              </div>
            </figcaption>
          </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
