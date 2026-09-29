import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServiceCards from '@/components/ServiceCards';
import Points from '@/components/Points';
import Stats from '@/components/Stats';
import TestimonialDeck from '@/components/TestimonialDeck';
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
        <About />
        <ServiceCards />
        <Points />
        <Stats />
        <TestimonialDeck />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
