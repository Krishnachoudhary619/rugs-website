import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Material Sourcing',
    description:
      'We source natural fibers and materials through established supplier and weaving networks across India, based on design and buyer requirements.',
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
      'Each rug is reviewed before dispatch for construction, finishing, and packing readiness.',
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
            Our process follows a clear sequence from material selection to final inspection, with a focus on consistency and export readiness.
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
                  alt={`${step.title} for handmade rugs exporter in India`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
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

        {/* Bottom Highlights */}
        <div className="mt-24 pt-24 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div className="text-center">
            <p className="font-serif text-4xl text-accent font-light mb-2">Handmade</p>
            <p className="text-foreground/60 font-light">Artisan weaving methods</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl text-accent font-light mb-2">Material-Led</p>
            <p className="text-foreground/60 font-light">Wool, silk, and blended options</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl text-accent font-light mb-2">Quality Check</p>
            <p className="text-foreground/60 font-light">Inspection before dispatch</p>
          </div>
        </div>
      </div>
    </section>
  )
}
