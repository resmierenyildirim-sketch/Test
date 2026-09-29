import Image from 'next/image';
import { asset } from '@/lib/asset';
import { content } from '@/lib/content';
import Reveal from './Reveal';
import ScrollFill from './ScrollFill';

// Gökyüzü arka planlı, ekrana sabitlenen bölüm: başlık kaydırdıkça kelime kelime dolar.
export default function Stats() {
  const s = content.stats;
  return (
    <section className="relative overflow-clip text-white">
      <Image src={asset('/img/uriel-xtgONQzGgOE.webp')} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b3a78]/25 via-transparent to-black/10" />
      <div className="stats-outer relative h-[190svh]">
        <div className="stats-sticky sticky top-0 flex h-svh flex-col justify-between px-4 pb-10 pt-[16vh] md:px-10 md:pb-14">
          <ScrollFill
            text={s.lead}
            className="max-w-[88rem] text-[2.1rem] font-normal leading-[1.2] md:text-[5vw]"
          />
          <div className="border-t border-white/30 pt-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-10">
              {s.items.map((it, i) => (
                <Reveal key={it.label} delay={i * 140}>
                  <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm backdrop-blur-sm md:text-lg">{it.label}</span>
                  <div className="mt-6 flex flex-col gap-3 md:mt-10 md:flex-row md:items-end md:gap-6">
                    <p className="text-5xl font-normal leading-none md:text-[3vw]">{it.value}</p>
                    <p className="max-w-[15rem] text-sm leading-snug md:pb-1 md:text-lg">{it.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
