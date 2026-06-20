'use client'

import Image from 'next/image'
import Link from 'next/link'

const collections = [
  {
    title: 'Hand Knotted Rugs',
    description: 'Luxury handcrafted rugs created by skilled artisans using traditional weaving techniques.',
    image: '/images/hand-knotted.jpg',
    href: '#collections',
  },
  {
    title: 'Hand Tufted Rugs',
    description: 'Elegant and durable rugs suitable for residential and commercial projects.',
    image: '/images/hand-tufted.jpg',
    href: '#collections',
  },
  {
    title: 'Flatweave Rugs',
    description: 'Contemporary and lightweight designs with versatile styling options.',
    image: '/images/falt-weave.jpg',
    href: '#collections',
  },
  {
    title: 'Kilim Rugs',
    description: 'Timeless geometric patterns inspired by traditional craftsmanship.',
    image: '/images/kilim-rugs.webp',
    href: '#collections',
  },
  {
    title: 'Dhurries',
    description: 'Handwoven Indian classics offering simplicity and durability.',
    image: '/images/dhurrie-rugs.jpg',
    href: '#collections',
  },
  {
    title: 'Wool Rugs',
    description: 'Premium wool constructions with exceptional comfort and longevity.',
    image: '/images/wool-rugs.jpg',
    href: '#collections',
  },
  {
    title: 'Jute Rugs',
    description: 'Natural and sustainable rugs designed for modern interiors.',
    image: '/images/jute-rugs.jpg',
    href: '#collections',
  },
  {
    title: 'Cotton Rugs',
    description: 'Lightweight, practical, and beautifully textured.',
    image: '/images/cotton-rugs.jpg',
    href: '#collections',
  },
  {
    title: 'Shaggy Rugs',
    description: 'Soft, luxurious pile designed for comfort and warmth.',
    image: '/images/shaggy-rugs.jpg',
    href: '#collections',
  },
]

export default function FeaturedCollections() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            Explore Our Collections
          </h2>
          <p className="text-foreground/60 font-light text-lg max-w-2xl">
            Discover our diverse range of premium handmade rugs and carpets, each offering unique craftsmanship and design excellence.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={index}
              href={collection.href}
              className="group overflow-hidden rounded-lg"
            >
              <div className="relative h-80 overflow-hidden rounded-lg">
                {/* Background Image */}
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white via-white/70 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end px-6 pb-4 pt-6 text-foreground">
                  <div>
                    <h3 className="font-serif text-3xl font-light mb-2">
                      {collection.title}
                    </h3>
                    <p className="font-light text-sm text-foreground/80">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
