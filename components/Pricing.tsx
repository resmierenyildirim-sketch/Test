import { content } from '@/lib/content';
import Button from './Button';
import LineReveal from './LineReveal';
import Reveal from './Reveal';

// Sadece dekoratif, nötr şekiller. Kendi müşteri/ortak logolarını buraya koyabilirsin.
const marks = [
  <circle key="a" cx="16" cy="16" r="12" />,
  <rect key="b" x="4" y="4" width="24" height="24" rx="4" />,
  <path key="c" d="M16 3 29 27H3Z" />,
  <path key="d" d="M4 16a12 12 0 0 1 24 0v12H4Z" />,
  <path key="e" d="M16 3l3.5 9.5L29 16l-9.5 3.5L16 29l-3.5-9.5L3 16l9.5-3.5Z" />,
  <path key="f" d="M4 8h24v6H4zM4 18h24v6H4z" />,
];

export default function Pricing() {
  const p = content.pricing;
  return (
    <section id="pricing" className="px-4 py-16 md:px-10 md:py-32">
      <p className="text-center text-sm md:text-base">{p.label}</p>
      <LineReveal
        as="h2"
        text={p.title}
        className="mx-auto mt-5 max-w-[64rem] text-center text-[1.7rem] font-light leading-[1.2] tracking-[-0.02em] md:text-[2.75rem]"
      />
      <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between gap-6 px-2 opacity-70 md:mt-16" aria-hidden="true">
        {marks.map((m, i) => (
          <svg key={i} viewBox="0 0 32 32" className={`size-7 fill-current md:size-9 ${i > 2 ? 'hidden md:block' : ''}`}>{m}</svg>
        ))}
      </div>

      <div className="mt-12 grid gap-14 md:mt-14 md:grid-cols-3 md:gap-0 md:border md:border-black/15">
        {p.plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 120} className={`flex ${i > 0 ? 'md:border-l md:border-black/15' : ''}`}>
            <article className="flex w-full flex-col md:p-10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-light md:text-[1.7rem]">{plan.name}</h3>
                {plan.featured && <span className="rounded-full bg-accent px-3.5 py-1.5 text-sm">{p.badge}</span>}
              </div>
              <p className="mt-5 min-h-[5.5rem] text-[0.95rem] leading-relaxed opacity-60">{plan.text}</p>
              <p className="mt-10 text-5xl font-light tracking-[-0.04em] md:mt-16">{plan.price}<span className="ml-1 text-base tracking-normal opacity-70">/month</span></p>
              <Button href="#contact" arrow full className="mt-6">{p.cta}</Button>
              <p className="mt-10 text-sm opacity-70">{p.includes}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.95rem] marker:opacity-50">
                {plan.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
