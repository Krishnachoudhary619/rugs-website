import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl font-light mb-4">
              Balaji <span className="text-accent">World Trade</span>
            </div>
            <p className="text-foreground/60 font-light text-sm leading-relaxed mb-4">
              Handmade Indian Rugs for Export Enquiries.
            </p>
            <p className="text-foreground/60 font-light text-sm leading-relaxed">
              Quality You Expect, Trust You Deserve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-light mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#brand"
                  className="text-foreground/60 hover:text-accent transition-colors font-light text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-light mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+918104715725"
                    className="block text-foreground/60 hover:text-accent transition-colors font-light text-sm"
                  >
                    +91 8104715725
                  </a>
                  <a
                    href="tel:+917715004948"
                    className="block text-foreground/60 hover:text-accent transition-colors font-light text-sm"
                  >
                    +91 77150 04948
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <a
                  href="mailto:balajiworldtradellp@gmail.com"
                  className="text-foreground/60 hover:text-accent transition-colors font-light text-sm"
                >
                  balajiworldtradellp@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-foreground/60 font-light text-sm">
                  A-11/18 New Shantinagar Ram Rahim Compound, Behind Bharat Velvet, Sakinaka, Mumbai – 400072, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-foreground/60 font-light text-sm">
              © {new Date().getFullYear()} Balaji World Trade LLP. All rights reserved.
            </p>

            {/* Legal */}
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-foreground/60 hover:text-accent transition-colors font-light"
              >
                Privacy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-foreground/60 hover:text-accent transition-colors font-light"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
