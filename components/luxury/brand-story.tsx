import Image from 'next/image'

export default function BrandStory() {
  return (
    <section id="brand" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            Crafted in India. Exported with Care.
          </h2>
          <div className="w-16 h-1 bg-accent" />
        </div>

        {/* Split Layout: Image + Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/images/brand-story.png"
              alt="Indian artisan hand-knotting traditional rug"
              fill
              className="object-cover"
            />
          </div>

          {/* Story Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4">
                Handmade Indian Rugs for Global Buyers
              </h3>
              <p className="text-foreground/70 font-light leading-relaxed text-lg mb-4">
                Balaji World Trade LLP is a merchant exporter focused on handmade rugs and carpets from India. Founded by Shubham Maurya and Vivek Pal, the company works with skilled artisans and manufacturing partners across Indian weaving regions to serve international buyers.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed text-lg">
                From residences and boutique projects to commercial and retail requirements, our rugs reflect traditional craftsmanship and practical design. We focus on product quality, transparent communication, and dependable export support.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-serif text-sm uppercase tracking-widest text-accent mb-2">
                  Our Mission
                </h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  To connect international buyers with handmade Indian carpets and rugs through transparent and reliable export communication.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-sm uppercase tracking-widest text-accent mb-2">
                  Our Vision
                </h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  To build long-term B2B relationships as a dependable export partner for handmade rugs and carpets from India.
                </p>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="font-serif text-xl text-accent font-light">Handmade Focus</p>
                <p className="text-foreground/60 text-sm">Rugs sourced from artisan-led weaving clusters.</p>
              </div>
              <div>
                <p className="font-serif text-xl text-accent font-light">Export Support</p>
                <p className="text-foreground/60 text-sm">Documentation and communication for global shipments.</p>
              </div>
              <div>
                <p className="font-serif text-xl text-accent font-light">Custom Enquiries</p>
                <p className="text-foreground/60 text-sm">Sizes, styles, and catalogue requests for B2B buyers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
