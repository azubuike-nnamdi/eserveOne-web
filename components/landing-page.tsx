import Features from '@/components/sections/features';
import Services from '@/components/sections/services';
import ValuePreposition from '@/components/sections/value-preposition';
import Hero from '@/components/ui/hero';
import { Download, Users } from 'lucide-react';
import { Button } from './ui/button';

export default function LandingPage() {
  return (
    <div>
      <Hero />
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