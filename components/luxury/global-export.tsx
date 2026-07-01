'use client'

import Image from 'next/image'

export default function GlobalExport() {
  return (
    <section id="export" className="pt-10 md:pt-14 pb-24 md:pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            Serving Buyers Across The World
          </h2>
          <div className="w-16 h-1 bg-accent" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-foreground/70 font-light leading-relaxed text-lg">
              We proudly support importers, wholesalers, retailers, hospitality groups, and interior designers seeking premium handmade rugs from India.
            </p>
            <p className="text-foreground/70 font-light leading-relaxed text-lg">
              Our export process ensures quality, consistency, and professional service from enquiry to delivery.
            </p>

            {/* Buyer Types */}
            <div className="space-y-4 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Importers & Wholesalers</h3>
                  <p className="text-foreground/60 font-light text-sm">Bulk orders with competitive export pricing and flexible terms.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Retailers & Boutiques</h3>
                  <p className="text-foreground/60 font-light text-sm">Curated collections with custom packaging and branding options.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Hospitality & Interior Design</h3>
                  <p className="text-foreground/60 font-light text-sm">Bespoke designs and custom sizing for commercial projects.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Direct Buyers</h3>
                  <p className="text-foreground/60 font-light text-sm">Individual collectors and design enthusiasts worldwide.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/images/craftsmanship-weaving.png"
              alt="Global rug export and shipping"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
