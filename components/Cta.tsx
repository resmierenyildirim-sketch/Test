import { content } from '@/lib/content';
import ContentTrail from './ContentTrail';
import LineReveal from './LineReveal';

export default function Cta() {
  const c = content.cta;
  return (
    <section id="contact" className="cta" data-hdr="dark">
      <div className="cta-in">
        <a href={c.href} aria-label="Book a meeting">
          <LineReveal as="h2" text={c.text} fx="blur-bottom" />
        </a>
      </div>
      <ContentTrail texts={c.trail} colors={c.trailColors} />
    </section>
  );
}
