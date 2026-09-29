import { asset } from '@/lib/asset';
import { contactHref, content } from '@/lib/content';
import Button from './Button';
import LineReveal from './LineReveal';

export default function Pricing() {
  const p = content.pricing;
  // Logo şeridi kesintisiz dönsün diye liste iki kez basılır.
  const logos = [...p.logos, ...p.logos];
  return (
    <section id="pricing" data-hdr="dark">
      <div className="pr-head">
        <p className="lbl">{p.label}</p>
        <LineReveal as="h2" text={p.title} className="t-lead" />
      </div>

      <div className="logos" aria-hidden="true">
        <div className="logos-mask">
          <div className="logos-track">
            {logos.map((l, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={asset(l.src)} width={l.w} height={l.h} alt="" loading="lazy" />
            ))}
          </div>
        </div>
      </div>

      <div className="plans">
        {p.plans.map((plan) => (
          <article key={plan.name} className="plan">
            <div className="plan-name">
              <h3>{plan.name}</h3>
              {plan.featured && <span className="plan-badge">{p.badge}</span>}
            </div>
            <p className="plan-desc t-body">{plan.text}</p>
            <p className="plan-price">{plan.price}<small>{p.period}</small></p>
            <Button href={contactHref} tone="dark" full>{p.cta}</Button>
            <div className="plan-inc t-body">
              <p>{p.includes}</p>
              <ul>{plan.features.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
