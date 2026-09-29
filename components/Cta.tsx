import { content } from '@/lib/content';
import ContentTrail from './ContentTrail';
import LineReveal from './LineReveal';
import SmartLink from './SmartLink';

export default function Cta() {
  const c = content.cta;
  return (
    <section className="cta" data-hdr="dark">
      <div className="cta-in">
        <SmartLink href={c.href} aria-label="Book a meeting">
          <LineReveal as="h2" text={c.text} fx="blur-bottom" />
        </SmartLink>
      </div>
      <ContentTrail texts={c.trail} colors={c.trailColors} />
    </section>
  );
}
