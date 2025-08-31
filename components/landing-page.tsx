import Features from '@/components/sections/features';
import Services from '@/components/sections/services';
import ValuePreposition from '@/components/sections/value-preposition';
import { Download, Users } from 'lucide-react';
import HowItWorks from './sections/how-it-works';
import MakeMoney from './sections/make-money';
import NowAvailable from './sections/now-available';
import { Button } from './ui/button';
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
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and service providers on EservOne today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Download for Free
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Users className="w-4 h-4 mr-2" />
              Join as Provider
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 