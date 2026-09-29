import Image from 'next/image';
import { asset } from '@/lib/asset';
import { content } from '@/lib/content';
import LineReveal from './LineReveal';
import Reveal from './Reveal';

export default function Points() {
  const b = content.beliefs;
  return (
    <section className="px-4 pb-20 pt-6 md:px-10 md:pb-32 md:pt-28">
      <LineReveal as="p" text={b.lead} className="max-w-[92rem] text-[1.7rem] font-normal leading-[1.2] md:text-[3vw]" />
      <div className="mt-10 grid gap-10 md:mt-20 md:grid-cols-2">
        <div className="flex items-end justify-between gap-[1.5%] md:max-w-[54rem]">
          <div className="relative aspect-[3/4] w-[65.5%] overflow-hidden rounded-2xl">
            <Image src={asset('/img/team-photo.webp')} alt="The Harbor team" fill sizes="(min-width:768px) 32vw, 65vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] w-[33%] overflow-hidden rounded-2xl">
            <Image src={asset('/img/office.webp')} alt="Harbor office" fill sizes="(min-width:768px) 16vw, 33vw" className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col justify-end gap-8 md:pl-[14vw]">
          {b.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <h3 className="text-xl font-normal md:text-2xl">{it.title}</h3>
              <p className="mt-2 max-w-md text-base leading-relaxed">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
