import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Material Sourcing',
    description:
      'We select only the finest natural materials from trusted suppliers across India. Premium silk, wool, and traditional vegetable dyes ensure uncompromising quality.',
    image: '/images/craft-materials.png',
  },
  {
    number: '02',
    title: 'Hand-Knotting Process',
    description:
      'Each knot is tied by skilled artisans using time-honored techniques passed down through generations. A single rug may contain millions of knots.',
    image: '/images/craft-knotting.png',
  },
  {
    number: '03',
    title: 'Quality Inspection',
    description:
      'Every rug undergoes rigorous quality checks. Our master craftspeople inspect each piece to ensure flawless execution and durability.',
    image: '/images/craft-inspection.png',
  },
]

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            The Art of Craftsmanship
          </h2>
          <p className="text-foreground/60 font-light text-lg max-w-3xl">
            Our rugs are born from meticulous attention to detail. Each step in our process reflects centuries of tradition and an unwavering commitment to excellence.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${
                index % 2 === 1 ? 'md:[direction:rtl]' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                <div className="flex items-start gap-6 mb-6">
                  <span className="font-serif text-5xl font-light text-accent/30">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 font-light leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 pt-24 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div className="text-center">
            <p className="font-serif text-4xl text-accent font-light mb-2">120-180</p>
            <p className="text-foreground/60 font-light">Hours per rug</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl text-accent font-light mb-2">100%</p>
            <p className="text-foreground/60 font-light">Natural materials</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl text-accent font-light mb-2">50+</p>
            <p className="text-foreground/60 font-light">Years durability</p>
          </div>
        </div>
      </div>
    </section>
  )
}
