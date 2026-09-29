export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-2xl">Want to get started? Click here to book a meeting.</p>
        <a href="mailto:hello@example.com" className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-medium text-black hover:bg-accent hover:text-white">Book a meeting</a>
        <div className="mt-20 grid gap-8 border-t border-white/20 pt-10 sm:grid-cols-4">
          <div><p className="eyebrow">Say hello</p><a href="mailto:hello@example.com">Let’s talk</a></div>
          <div><p className="eyebrow">Start today</p><a href="tel:+10000000000">Call us</a></div>
          <div className="flex gap-5"><a href="#">Twitter</a><a href="#">Instagram</a><a href="#">Linkedin</a></div>
          <nav className="flex gap-5" aria-label="Footer"><a href="#about">About</a><a href="#services">Services</a><a href="#pricing">Pricing</a></nav>
        </div>
        <div className="mt-16 flex flex-wrap items-end justify-between gap-4">
          <p className="text-8xl font-semibold tracking-tight sm:text-[10rem] sm:leading-none">Harbor</p>
          <p className="text-sm opacity-60">© {new Date().getFullYear()} Harbor. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
