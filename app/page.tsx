import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import HorizontalScroll from '@/components/HorizontalScroll';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <HorizontalScroll />
        <Stats />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
