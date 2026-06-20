'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          {/* Logo */}
          <Link href="/" className="flex-1 min-w-0 pr-2">
            <div className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-tight whitespace-nowrap">
              <span className="text-foreground">Balaji</span>{' '}
              <span className="text-accent">World Trade</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a
              href="#brand"
              className="text-foreground/80 hover:text-accent transition-colors font-light cursor-pointer"
            >
              Our Story
            </a>
            <a
              href="#collections"
              className="text-foreground/80 hover:text-accent transition-colors font-light cursor-pointer"
            >
              Collections
            </a>
            <a
              href="#craftsmanship"
              className="text-foreground/80 hover:text-accent transition-colors font-light cursor-pointer"
            >
              Craftsmanship
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-accent transition-colors font-light cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            >
              <a href="https://wa.me/918104715725" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex-shrink-0 p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 space-y-4">
            <a
              href="#brand"
              className="block text-foreground/80 hover:text-accent transition-colors font-light cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
            <a
              href="#collections"
              className="block text-foreground/80 hover:text-accent transition-colors font-light cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </a>
            <a
              href="#craftsmanship"
              className="block text-foreground/80 hover:text-accent transition-colors font-light cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Craftsmanship
            </a>
            <a
              href="#contact"
              className="block text-foreground/80 hover:text-accent transition-colors font-light cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              asChild
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="https://wa.me/918104715725" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
