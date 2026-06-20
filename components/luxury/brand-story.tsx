import Image from 'next/image'

export default function BrandStory() {
  return (
    <section id="brand" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            Crafted in India. Trusted Worldwide.
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
                Premium Indian Rugs, Delivered Worldwide
              </h3>
              <p className="text-foreground/70 font-light leading-relaxed text-lg mb-4">
                Balaji World Trade LLP is a trusted merchant exporter specializing in premium handmade rugs and carpets from India. Founded by Shubham Maurya and Vivek Pal, the company works closely with skilled artisans and trusted manufacturing partners across India's renowned weaving regions to deliver exceptional quality products to international markets.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed text-lg">
                From luxury residences and boutique hotels to commercial spaces and retail collections, our rugs combine traditional craftsmanship with global design standards. We focus on quality, transparency, competitive pricing, and long-term partnerships with buyers worldwide.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-serif text-sm uppercase tracking-widest text-accent mb-2">
                  Our Mission
                </h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  To connect international buyers with the finest Indian handmade carpets and rugs while ensuring quality, transparency, and customer satisfaction in every transaction.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-sm uppercase tracking-widest text-accent mb-2">
                  Our Vision
                </h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  To become a globally recognized and trusted export partner for premium handmade rugs and carpets from India.
                </p>
              </div>
            </div>

            <div className="pt-8 flex gap-8">
              <div>
                <p className="font-serif text-3xl text-accent font-light">2000+</p>
                <p className="text-foreground/60 text-sm">Master Artisans</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-accent font-light">45+</p>
                <p className="text-foreground/60 text-sm">Countries Served</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-accent font-light">10k+</p>
                <p className="text-foreground/60 text-sm">Designs Created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
