import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
      <div>
        <p className="eyebrow">(About Us)</p>
        <p className="mt-6 text-3xl font-medium leading-snug sm:text-4xl">
          We provide leaders with the strategies they need to make confident decisions. Our approach combines actionable insights with personalized guidance.
        </p>
        <p className="mt-6 max-w-lg text-lg opacity-70">
          Whether you’re just starting out or scaling to the next level, we’re here to support your growth every step of the way.
        </p>
        <a href="#services" className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-accent">View Services</a>
      </div>
      <Image src="/img/ceo-2.webp" alt="Harbor founder" width={768} height={794} className="w-full rounded-2xl object-cover" />
    </section>
  );
}
