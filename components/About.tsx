import Image from 'next/image';
import { asset } from '@/lib/asset';
import { content } from '@/lib/content';
import LineReveal from './LineReveal';
import Reveal from './Reveal';

export default function About() {
  const a = content.about;
  return (
    <section id="about" className="about" data-hdr="dark">
      <LineReveal as="h2" text={a.lead} className="t-lead" />
      <div className="about-row">
        <Reveal><p className="t-body">{a.label}</p></Reveal>
        <div className="about-cols">
          <Reveal className="about-text">
            <p className="t-body">{a.p1}</p>
            <p className="t-body">{a.p2}</p>
            <a href="#services" className="ulink">{a.link}</a>
          </Reveal>
          <Reveal className="about-img">
            <Image src={asset('/img/ceo-2.webp')} alt="Harbor founder" width={768} height={794} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
