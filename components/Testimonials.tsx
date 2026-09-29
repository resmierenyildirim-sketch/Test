import Image from 'next/image';
import { asset } from '@/lib/asset';
import LineReveal from './LineReveal';

const items = [
  { img: '/img/testimonial-man.webp', name: 'Gabriel Roberts', role: 'Marketing Director', rot: -2,
    quote: 'Professional, reliable, and easy to understand — Jonathan gave me the clarity I needed to plan my finances.' },
  { img: '/img/allyssa-sayers-w2Qx9eaA3I0.webp', name: 'Marissa Lawson', role: 'CCO, Nectar Media', rot: 1.5,
    quote: 'Clear, practical advice that actually made sense. Exactly the guidance I received helped me move forward with confidence.' },
  { img: '/img/zeelool-glasses-kJy7MMIfcNU.webp', name: 'Samuel Mitchell', role: 'Restaurant Owner', rot: -1,
    quote: 'Straightforward and supportive. Working together turned numbers into an actionable plan I could trust.' },
];

// Yorum kartları sticky ile hafif eğik bir deste gibi üst üste biner.
export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-20 md:px-6 md:py-28">
      <p className="eyebrow text-center">Testimonials</p>
      <LineReveal as="h2" text="They love us" className="mt-3 text-center text-3xl font-light tracking-tight md:text-6xl" />
      <div className="mx-auto mt-12 max-w-md md:max-w-xl">
        {items.map((t, i) => (
          <figure
            key={t.name}
            className="sticky mb-[10vh] flex min-h-[21rem] flex-col justify-between rounded-3xl bg-neutral-200 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            style={{ top: `calc(6rem + ${i} * 1rem)`, transform: `rotate(${t.rot}deg)` }}
          >
            <div className="flex items-start justify-between">
              <span className="text-7xl font-light leading-none" aria-hidden="true">{t.name[0]}</span>
              <Image src={asset(t.img)} alt={t.name} width={64} height={64} className="size-14 rounded-2xl object-cover" />
            </div>
            <div>
              <blockquote className="text-lg font-light leading-snug">“{t.quote}”</blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-sm opacity-60">{t.role}</p>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
