import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SiteChrome from '@/components/SiteChrome';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Contact | Harbor',
  description: 'Get in touch with Harbor. Tell us how we can support you and we will get back to you shortly.',
};

export default function ContactPage() {
  return (
    <>
      <SmoothScroll />
      <SiteChrome home={false} ticker={false}>
        <main>
          <ContactSection />
        </main>
        <Footer home={false} />
      </SiteChrome>
    </>
  );
}
