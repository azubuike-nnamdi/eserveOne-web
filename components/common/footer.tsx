import { logo } from '@/config/images';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex ">
                <Image src={logo} alt="EservOne Logo" width={200} height={100} />
              </div>
              <p className="text-muted-foreground text-sm">
                Connecting service providers with customers for quality, affordable services worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Beauty & Personal Care</li>
                <li>Home Services</li>
                <li>Health & Wellness</li>
                <li>Automotive</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>How It Works</li>
                <li>Safety</li>
                <li>Support</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy/delete-account" className="hover:text-foreground transition-colors">Delete Account</Link></li>
                <li><Link href="/privacy/policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/privacy/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                {/* <li><Link href="/privacy/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link></li> */}
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} EservOne. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
