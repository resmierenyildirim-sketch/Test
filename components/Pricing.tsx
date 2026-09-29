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

// Mobilde düz liste, masaüstünde kart görünümü.
export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:bg-neutral-100 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <p className="eyebrow text-center">(Pricing)</p>
        <LineReveal
          as="h2"
          className="mx-auto mt-4 max-w-2xl text-center text-2xl font-light leading-snug tracking-tight md:text-5xl"
          text="The strategic insight and guidance that leaders use to make confident financial decisions."
        />
        <div className="mt-14 grid gap-14 md:mt-16 md:grid-cols-3 md:gap-6">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className="flex">
              <article className={`flex w-full flex-col md:rounded-3xl md:p-8 ${p.featured ? 'md:bg-black md:text-white' : 'md:bg-white'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-light">{p.name}</h3>
                  {p.featured && <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">Recommended</span>}
                </div>
                <p className="mt-4 text-[0.95rem] font-light opacity-60">{p.text}</p>
                <p className="mt-10 text-5xl font-light tracking-tight md:text-6xl">{p.price}<span className="ml-1 text-sm opacity-60">/month</span></p>
                {p.featured ? (
                  <>
                    <Button href="#contact" arrow full className="mt-6 md:hidden">Learn More</Button>
                    <Button href="#contact" variant="light" arrow full className="mt-6 hidden md:flex">Learn More</Button>
                  </>
                ) : (
                  <Button href="#contact" arrow full className="mt-6">Learn More</Button>
                )}
                <p className="eyebrow mt-10">Plan Includes:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.95rem] font-light marker:opacity-50">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
