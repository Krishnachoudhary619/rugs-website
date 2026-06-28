import Link from 'next/link'

export default function CTASection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
          Request Our Catalogue
        </h2>
        <p className="text-lg font-light opacity-90 mb-12 max-w-2xl mx-auto">
          Get detailed specifications, pricing, and custom design options from Balaji World Trade LLP. Perfect for retailers, designers, and international buyers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/918104715725?text=Hi%20Balaji%20World%20Trade!%20I%20would%20like%20to%20request%20your%20latest%20catalogue%20and%20pricing%20information."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-4 rounded transition-colors"
          >
            Chat on WhatsApp
          </a>
          <Link
            href="mailto:balajiworldtradellp@gmail.com?subject=Catalogue%20Request"
            className="inline-block bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-medium px-8 py-4 rounded transition-colors"
          >
            Email Us
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-center gap-8 text-sm">
          <div>
            <p className="opacity-75">Direct Communication</p>
            <p className="font-medium">WhatsApp & Email Support</p>
          </div>
          <div>
            <p className="opacity-75">Detailed Information</p>
            <p className="font-medium">Complete Specifications</p>
          </div>
          <div>
            <p className="opacity-75">Expert Support</p>
            <p className="font-medium">Dedicated Team</p>
          </div>
        </div>
      </div>
    </section>
  )
}
