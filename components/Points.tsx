import Image from 'next/image';
import { asset } from '@/lib/asset';
import { content } from '@/lib/content';
import LineReveal from './LineReveal';
import Reveal from './Reveal';

export default function Points() {
  const b = content.beliefs;
  return (
    <section className="pts" data-hdr="dark">
      <LineReveal as="h2" text={b.lead} className="t-lead" />
      <div className="pts-row">
        <div className="pts-imgs">
          <div className="pts-big">
            <Image src={asset('/img/team-photo.webp')} alt="The Harbor team" fill sizes="(min-width: 1000px) 34vw, 50vw" className="object-cover" />
          </div>
          <div className="pts-small">
            <Image src={asset('/img/office.webp')} alt="Harbor office" fill sizes="(min-width: 1000px) 17vw, 50vw" className="object-cover" />
          </div>
        </div>
        <div className="pts-list">
          {b.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <h4 className="t-h4">{it.title}</h4>
              <p className="t-body">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
