import Button from './Button';
import LineReveal from './LineReveal';
import Reveal from './Reveal';

const plans = [
  { name: 'Starter', price: '$99', featured: false,
    text: 'Perfect for individuals or small teams beginning their financial journey. A simple plan to help you get started with clarity.',
    features: ['1 Kick-off strategy call', '2 Follow-up sessions', 'Access to digital templates'] },
  { name: 'Professional', price: '$399', featured: true,
    text: 'Designed for growing businesses that need deeper insights and tailored strategies. Gain the guidance and tools to scale.',
    features: ['Monthly strategic planning session', 'Unlimited 1:1 consulting sessions', 'Resource library access', 'Email + text support'] },
  { name: 'Executive', price: '$599', featured: false,
    text: 'Built for leaders and organizations managing complex challenges. Unlock premium support, advanced strategies, and priority access.',
    features: ['Monthly executive review session', '6 Custom consulting sessions per month', 'VIP resource library access', 'Priority phone + email support'] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-neutral-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow">(Pricing)</p>
        <LineReveal as="h2" className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl" text="The strategic insight and guidance that leaders use to make confident financial decisions." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className="flex">
            <article className={`flex w-full flex-col rounded-2xl p-8 ${p.featured ? 'bg-black text-white' : 'bg-white'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                {p.featured && <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">Recommended</span>}
              </div>
              <p className="mt-4 opacity-70">{p.text}</p>
              <p className="mt-8 text-6xl font-semibold tracking-tight">{p.price}<span className="ml-1 text-base font-normal opacity-60">/month</span></p>
              <Button href="#contact" variant={p.featured ? 'light' : 'dark'} className="mt-8 text-center">Learn More</Button>
              <p className="eyebrow mt-8">Plan Includes:</p>
              <ul className="mt-3 space-y-2">
                {p.features.map((f) => <li key={f} className="border-t border-current/10 pt-2">{f}</li>)}
              </ul>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
