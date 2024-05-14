import HeroSection from '@/components/Hero';
import AboutSection from '@/components/About';
import IntroVideo from '@/components/IntroVideo';
import GallerySection from '@/components/Gallery';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroVideo />
      <AboutSection />
      <GallerySection />
    </>
  );
}
