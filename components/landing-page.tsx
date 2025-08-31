import Features from '@/components/sections/features';
import Services from '@/components/sections/services';
import ValuePreposition from '@/components/sections/value-preposition';
import GetStarted from './sections/get-started';
import HowItWorks from './sections/how-it-works';
import MakeMoney from './sections/make-money';
import NowAvailable from './sections/now-available';
import NewHero from './ui/new-hero';

export default function LandingPage() {
  return (
    <div>
      <NewHero />
      {/* <Hero /> */}
      <NowAvailable />
      <HowItWorks />
      <MakeMoney />
      <Features />
      <Services />
      <ValuePreposition />
      <GetStarted />
    </div>
  );
} 