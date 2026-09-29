import Image from 'next/image';
import { asset } from '@/lib/asset';
import { panels } from '@/lib/panels';
import HorizontalScroll from './HorizontalScroll';
import Reveal from './Reveal';

// Mobilde iki foto + düz liste; masaüstünde yatay kaydırma bölümü.
export default function Points() {
  return (
    <>
      <section className="px-4 pb-20 pt-2 md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <Image src={asset('/img/team-photo.webp')} alt="The Harbor team" width={1000} height={1325} sizes="50vw" className="aspect-[3/4] w-full rounded-2xl object-cover" />
          <Image src={asset('/img/office.webp')} alt="Harbor office" width={1000} height={1325} sizes="50vw" className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover" />
        </div>
        <div className="mt-10 space-y-6 px-1">
          {panels.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <h3 className="text-xl font-normal">{p.title}</h3>
              <p className="mt-2 text-[0.95rem] font-light opacity-70">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <HorizontalScroll />
    </>
  );
}
