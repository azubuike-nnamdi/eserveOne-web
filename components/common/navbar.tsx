import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Home, Search, User, Users } from 'lucide-react'

const navbar = () => {
  return (
    <main>
      <header className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="bg-gray-900 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-sm">E1</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link href="#features" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                Features
              </Link>
              <Link
                href="#services"
                className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
              >
                Services
              </Link>
              <Link href="#how-it-works" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                How It Works
              </Link>
              <Link href="#about" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                About
              </Link>
            </div>

            {/* CTA Button */}
            <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-medium">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-lg border-t border-gray-100">
        <div className="flex items-center justify-around py-4 px-6">
          <Link
            href="#"
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-primary transition-colors"
          >
            <Home className="h-6 w-6" />
            <span className="text-xs font-medium">Home</span>
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
            <span className="text-xs font-medium">Providers</span>
          </Link>
          <Link
            href="#support"
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-primary transition-colors"
          >
            <User className="h-6 w-6" />
            <span className="text-xs font-medium">Profile</span>
          </Link>
        </div>
      </nav>
    </main>
  )
}

export default navbar