import HeroSection from '@/components/Hero';
import AboutSection from '@/components/About';
import IntroVideo from '@/components/IntroVideo';
import ProgramSection from '@/components/Programs';
import PrizeSection from '@/components/Prize';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroVideo />
      <AboutSection />
      <PrizeSection />
      <ProgramSection />
    </>
  );
}
