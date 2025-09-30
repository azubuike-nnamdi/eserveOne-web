"use client";

import { Factory, Home, Info, Search, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatedLink } from '../ui/animated-link';

const Navbar = () => {

  const pathname = usePathname();
  return (
    <main>
      <header className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="dark:bg-gray-900 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Image src="/assets/images/eservone-logo.png" alt="Logo" width={130} height={100} />
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <AnimatedLink href="/" className="dark:text-white  transition-colors text-xs font-medium">
                Home
              </AnimatedLink>
              {pathname === "/" && <AnimatedLink
                href="#services"
                className="dark:text-white  transition-colors text-xs font-medium"
              >
                Services
              </AnimatedLink>}

              <AnimatedLink href="/careers" className="dark:text-white  transition-colors text-xs font-medium">
                Careers
              </AnimatedLink>
              <AnimatedLink href="/about" className="dark:text-white  transition-colors text-xs font-medium">
                About Us
              </AnimatedLink>
              <AnimatedLink href="/contact-us" className="dark:text-white  transition-colors text-xs font-medium">
                Contact Us
              </AnimatedLink>
            </div>

            {/* CTA Button */}
            {/* <Button className="dark:bg-white dark:text-gray-900 hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-medium">
              Get Started
            </Button> */}

          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-lg border-t border-gray-100">
        <div className="flex items-center justify-around py-4 px-6">
          <Link
            href="/"
            className="flex flex-col items-center space-y-1 dark:text-gray-600 hover:text-primary transition-colors"
          >
            <Home className="h-6 w-6" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          {pathname === "/" && <Link
            href="#services"
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-primary transition-colors"
          >
            <Search className="h-6 w-6" />
            <span className="text-xs font-medium">Services</span>
          </Link>}
          <Link
            href="/about"
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-primary transition-colors"
          >
            <Users className="h-6 w-6" />
            <span className="text-xs font-medium">About</span>
          </Link>
          <Link
            href="/careers"
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-primary transition-colors"
          >
            <Factory className="h-6 w-6" />
            <span className="text-xs font-medium">Careers</span>
          </Link>
          <Link
            href="/contact-us"
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-primary transition-colors"
          >
            <Info className="h-6 w-6" />
            <span className="text-xs font-medium">Contact Us</span>
          </Link>
        </div>
      </nav>
    </main>
  )
}

export default Navbar