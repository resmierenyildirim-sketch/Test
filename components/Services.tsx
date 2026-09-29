import { content } from '@/lib/content';
import HorizontalCards from './HorizontalCards';
import Reveal from './Reveal';

export default function Services() {
  return (
    <div data-hdr="dark">
      <div className="svc-title">
        <Reveal><h2 className="t-lead">{content.servicesTitle}</h2></Reveal>
      </div>
      <section id="services" className="svc">
        <HorizontalCards items={content.services} />
      </section>
    </div>
  );
}
