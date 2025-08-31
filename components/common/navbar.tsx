import { Info, PackageSearch, Search, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const navbar = () => {
  return (
    <main>
      <header className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="dark:bg-gray-900 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image src="/assets/images/eservone-logo.png" alt="Logo" width={130} height={100} />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link href="#features" className="dark:text-white hover:text-gray-300 transition-colors text-sm font-medium">
                Features
              </Link>
              <Link
                href="#services"
                className="dark:text-white hover:text-gray-300 transition-colors text-sm font-medium"
              >
                Services
              </Link>
              <Link href="#how-it-works" className="dark:text-white hover:text-gray-300 transition-colors text-sm font-medium">
                How It Works
              </Link>
              <Link href="#about" className="dark:text-white hover:text-gray-300 transition-colors text-sm font-medium">
                About
              </Link>
            </div>

            {/* CTA Button */}
            <Button className="dark:bg-white dark:text-gray-900 hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-medium">
              Get Started
            </Button>

          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-lg border-t border-gray-100">
        <div className="flex items-center justify-around py-4 px-6">
          <Link
            href="#features"
            className="flex flex-col items-center space-y-1 dark:text-gray-600 hover:text-primary transition-colors"
          >
            <PackageSearch className="h-6 w-6" />
            <span className="text-xs font-medium">Features</span>
          </Link>
          <Link
            href="#services"
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-primary transition-colors"
          >
            <Search className="h-6 w-6" />
            <span className="text-xs font-medium">Services</span>
          </Link>
          <Link
            href="#how-it-works"
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-primary transition-colors"
          >
            <Users className="h-6 w-6" />
            <span className="text-xs font-medium">How It Works</span>
          </Link>
          <Link
            href="#support"
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-primary transition-colors"
          >
            <Info className="h-6 w-6" />
            <span className="text-xs font-medium">About</span>
          </Link>
        </div>
      </nav>
    </main>
  )
}

export default navbar