'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b border-border/70 bg-[#F7F2EA]/95 backdrop-blur-md transition-all duration-500 ${isScrolled ? 'shadow-md' : 'shadow-sm'
        } ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-3 md:px-8">
        <div className="flex items-center justify-between h-[70px] md:h-[90px]">
          {/* Brand Block: logo + name as one unit */}
          <Link
            href="/"
            className="group flex items-center gap-2 md:gap-3 lg:gap-4 shrink-0 max-w-[220px] sm:max-w-[260px] lg:max-w-[300px]"
          >
            <Image
              src="/images/balaji-logo.png"
              alt="Balaji World Trade LLP logo"
              width={300}
              height={300}
              priority
              sizes="(max-width: 768px) 80px, 110px"
              className="h-[70px] md:h-[95px] w-auto object-contain"
            />
            <div className="min-w-0 text-left leading-none">
              <p className="font-serif text-[18px] sm:text-[22px] lg:text-[26px] font-semibold text-[#0B1B45] tracking-[0.06em]">
                BALAJI
              </p>
              <p className="mt-1 text-[8px] sm:text-[9px] lg:text-[10px] uppercase font-medium tracking-[0.25em] text-[#C9A84C]">
                WORLD TRADE LLP
              </p>
            </div>
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden lg:flex items-center gap-8 ml-6 flex-1 justify-end">
            <nav className="flex items-center gap-7">
              <a
                href="#brand"
                className="text-[#0B1B45]/85 hover:text-[#C9A84C] transition-colors text-sm tracking-wide cursor-pointer"
              >
                Our Story
              </a>
              <a
                href="#collections"
                className="text-[#0B1B45]/85 hover:text-[#C9A84C] transition-colors text-sm tracking-wide cursor-pointer"
              >
                Collections
              </a>
              <a
                href="#craftsmanship"
                className="text-[#0B1B45]/85 hover:text-[#C9A84C] transition-colors text-sm tracking-wide cursor-pointer"
              >
                Craftsmanship
              </a>
              <a
                href="#export"
                className="text-[#0B1B45]/85 hover:text-[#C9A84C] transition-colors text-sm tracking-wide cursor-pointer"
              >
                Export
              </a>
              <a
                href="#contact"
                className="text-[#0B1B45]/85 hover:text-[#C9A84C] transition-colors text-sm tracking-wide cursor-pointer"
              >
                Contact
              </a>
            </nav>

            <Button
              asChild
              className="h-10 rounded-xl bg-[#0B1B45] text-white hover:bg-[#10265f] px-5 font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <a href="https://wa.me/918104715725" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/whatsapp-icon.png"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="w-4 h-4 mr-2 object-contain"
                />
                WhatsApp Catalogue
              </a>
            </Button>
          </div>

          {/* Mobile / Tablet CTA */}
          <div className="hidden md:block lg:hidden">
            <Button
              asChild
              className="h-10 rounded-xl bg-[#0B1B45] text-white hover:bg-[#10265f] px-4 font-medium tracking-wide transition-all duration-300"
            >
              <a href="https://wa.me/918104715725" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/whatsapp-icon.png"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex-shrink-0 p-2 text-[#0B1B45]"
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
          <nav className="lg:hidden pb-6 pt-3 space-y-4">
            <a
              href="#brand"
              className="block text-[#0B1B45]/85 hover:text-[#C9A84C] transition-colors font-light cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
            <a
              href="#collections"
              className="block text-[#0B1B45]/85 hover:text-[#C9A84C] transition-colors font-light cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </a>
            <a
              href="#craftsmanship"
              className="block text-[#0B1B45]/85 hover:text-[#C9A84C] transition-colors font-light cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Craftsmanship
            </a>
            <a
              href="#export"
              className="block text-[#0B1B45]/85 hover:text-[#C9A84C] transition-colors font-light cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Export
            </a>
            <a
              href="#contact"
              className="block text-[#0B1B45]/85 hover:text-[#C9A84C] transition-colors font-light cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              asChild
              className="w-full h-11 rounded-xl bg-[#0B1B45] hover:bg-[#10265f] text-white"
            >
              <a href="https://wa.me/918104715725" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/whatsapp-icon.png"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="w-4 h-4 mr-2 object-contain"
                />
                WhatsApp Catalogue
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
