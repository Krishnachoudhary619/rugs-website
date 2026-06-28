import { Globe, Users, Shield, CheckCircle } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle,
    title: 'Premium Quality Products',
    description: 'Every rug is carefully sourced and inspected to meet international quality expectations.',
  },
  {
    icon: Users,
    title: 'Custom Sizes & Designs',
    description: 'Tailored rug solutions for hospitality, retail, and interior design projects.',
  },
  {
    icon: Globe,
    title: 'Worldwide Shipping',
    description: 'Reliable export solutions for buyers across global markets.',
  },
  {
    icon: Shield,
    title: 'Strict Quality Inspection',
    description: 'Every order undergoes detailed quality checks before dispatch.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="pt-24 md:pt-32 pb-10 md:pb-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Why Global Buyers Choose Balaji World Trade LLP
          </h2>
          <p className="text-foreground/60 font-light text-lg">
            Quality craftsmanship, transparent partnerships, and reliable service from enquiry to delivery.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-light text-foreground mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-14 pt-12 border-t border-border">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="text-center rounded-lg border border-border/60 bg-card/30 px-6 py-4 flex flex-col justify-center min-h-[96px]">
              <p className="font-serif text-3xl md:text-4xl font-light text-accent mb-2">GSTIN</p>
              <p className="text-foreground/60 font-light text-sm break-all">27ABGFB6001M1ZH</p>
            </div>
            <div className="text-center rounded-lg border border-border/60 bg-card/30 px-6 py-4 flex flex-col justify-center min-h-[96px]">
              <p className="font-serif text-3xl md:text-4xl font-light text-accent mb-2">Merchant Exporter</p>
              <p className="text-foreground/60 font-light text-sm">&amp; Trader</p>
            </div>
            {/* <div>
              <p className="font-serif text-4xl font-light text-accent mb-2">45+</p>
              <p className="text-foreground/60 font-light text-sm">Countries Served</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-light text-accent mb-2">ISO</p>
              <p className="text-foreground/60 font-light text-sm">Quality Certified</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
