import SiteChrome from '@/components/SiteChrome';
import SmoothScroll from '@/components/SmoothScroll';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Points from '@/components/Points';
import Stats from '@/components/Stats';
import TestimonialDeck from '@/components/TestimonialDeck';
import Pricing from '@/components/Pricing';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <SiteChrome>
        <main>
          <Hero />
          <About />
          <Services />
          <Points />
          <Stats />
          <TestimonialDeck />
          <Pricing />
          <Cta />
        </main>
        <Footer />
      </SiteChrome>
    </>
  );
}
