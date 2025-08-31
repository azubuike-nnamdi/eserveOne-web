import { CheckCircle } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { GlowingEffect } from '../ui/glowing-effect'

export default function ValuePreposition() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Service Seekers */}
          <div className="relative rounded-lg">
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={48}
              inactiveZone={0.1}
              variant="default"
              blur={1}
              borderWidth={2}
            />
            <Card className="border-0 bg-card/50 backdrop-blur-sm relative shadow-none">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">For Customers</Badge>
                <CardTitle className="text-2xl">Find Quality Services</CardTitle>
                <CardDescription>
                  Discover and book trusted professionals in your area
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Verified Professionals</div>
                    <div className="text-sm text-muted-foreground">All service providers are identity verified with certificates</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Transparent Pricing</div>
                    <div className="text-sm text-muted-foreground">Clear pricing with upfront payment options</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Secure Booking</div>
                    <div className="text-sm text-muted-foreground">Protected transactions and appointment management</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* For Service Providers */}
          <div className="relative rounded-lg">
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={48}
              inactiveZone={0.1}
              variant="default"
              blur={1}
              borderWidth={2}
            />
            <Card className="border-0 bg-card/50 backdrop-blur-sm relative">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">For Professionals</Badge>
                <CardTitle className="text-2xl">Grow Your Business</CardTitle>
                <CardDescription>
                  Reach more customers and manage your services efficiently
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Increased Visibility</div>
                    <div className="text-sm text-muted-foreground">Access to a broader customer base through our platform</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Streamlined Operations</div>
                    <div className="text-sm text-muted-foreground">Automated booking, payments, and customer management</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Professional Credibility</div>
                    <div className="text-sm text-muted-foreground">Verification badges and portfolio showcase</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}