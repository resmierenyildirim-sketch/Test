import Image from 'next/image';
import { asset } from '@/lib/asset';
import LineReveal from './LineReveal';
import Reveal from './Reveal';

const stats = [
  { label: 'Value created', value: '$175M', text: 'Empowering growth through strategic solutions.' },
  { label: 'Return client rate', value: '92%', text: 'Building lasting partnerships built on trust.' },
  { label: 'Projects delivered', value: '320+', text: 'Driving successful outcomes across industries.' },
];

export default function Stats() {
  return (
    <section className="relative mx-3 overflow-hidden rounded-3xl text-white md:mx-6">
      <Image src={asset('/img/uriel-xtgONQzGgOE.webp')} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-28">
        <LineReveal
          as="p"
          className="max-w-3xl text-[1.7rem] font-light leading-tight md:text-5xl"
          text="Layouts, service descriptions, and visuals here are sample examples. Customize them to fit your industry, audience, and goals."
        />
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-24 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 140} className="border-t border-white/25 pt-5">
              <p className="eyebrow">{s.label}</p>
              <p className="mt-4 text-5xl font-light tracking-tight md:text-7xl">{s.value}</p>
              <p className="mt-4 text-sm font-light opacity-80 md:text-base">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
