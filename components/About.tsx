import Image from 'next/image';
import { asset } from '@/lib/asset';
import { content } from '@/lib/content';
import LineReveal from './LineReveal';
import Reveal from './Reveal';

export default function About() {
  const a = content.about;
  return (
    <section id="about" className="px-4 pb-16 pt-20 md:px-10 md:pb-24 md:pt-32">
      <LineReveal as="p" text={a.lead} className="max-w-[92rem] text-[1.7rem] font-normal leading-[1.2] md:text-[3vw]" />
      <div className="mt-10 grid gap-8 md:mt-16 md:grid-cols-2">
        <p className="text-sm md:text-base">{a.label}</p>
        <Reveal delay={150} className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm text-base leading-relaxed md:text-base">
            <p>{a.p1}</p>
            <p className="mt-6">{a.p2}</p>
            <a href="#services" className="mt-6 inline-block border-b border-current pb-0.5 text-sm">{a.link}</a>
          </div>
          <Image src={asset('/img/ceo-2.webp')} alt="Harbor founder" width={768} height={794} className="aspect-[5/6] w-32 rounded-2xl object-cover md:w-[12.6rem]" />
        </Reveal>
      </div>
    </section>
  );
}
