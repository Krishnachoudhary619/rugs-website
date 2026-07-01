import Image from 'next/image'

const galleryItems = [
  {
    image: '/images/gallery-1.png',
    title: 'Modern Living',
    category: 'Residential',
  },
  {
    image: '/images/gallery-2.png',
    title: 'Luxury Hospitality',
    category: 'Hotel Suite',
  },
  {
    image: '/images/gallery-3.png',
    title: 'Artisan Details',
    category: 'Close-up',
  },
  {
    image: '/images/gallery-4.png',
    title: 'Designer Villa',
    category: 'Residential',
  },
  {
    image: '/images/gallery-5.png',
    title: 'Bedroom Elegance',
    category: 'Residential',
  },
  {
    image: '/images/gallery-6.png',
    title: 'Formal Spaces',
    category: 'Dining',
  },
]

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            In Homes & Spaces
          </h2>
          <p className="text-foreground/60 font-light text-lg max-w-3xl">
            Discover how our handcrafted rugs transform interiors into sanctuaries of elegance.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${
                index === 2 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={`${item.title} handmade rug project in India`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs uppercase tracking-widest text-accent mb-2">
                  {item.category}
                </p>
                <h3 className="font-serif text-xl md:text-2xl font-light">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
