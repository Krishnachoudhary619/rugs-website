import { Globe, Zap, Users, PackageOpen, Leaf, Shield, CheckCircle, Truck } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle,
    title: 'Premium Quality Products',
    description: 'Every rug is carefully sourced and inspected to meet international quality expectations.',
  },
  {
    icon: Zap,
    title: 'Competitive Export Pricing',
    description: 'Direct sourcing and strong supplier relationships help us provide exceptional value.',
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
    icon: Leaf,
    title: 'Trusted Manufacturing Network',
    description: 'Strong partnerships with experienced artisans and manufacturers.',
  },
  {
    icon: Shield,
    title: 'Strict Quality Inspection',
    description: 'Every order undergoes detailed quality checks before dispatch.',
  },
  {
    icon: PackageOpen,
    title: 'Professional Packaging',
    description: 'Export-grade packaging ensuring safe delivery.',
  },
  {
    icon: Truck,
    title: 'On-Time Delivery',
    description: 'Efficient logistics and dependable timelines.',
  },
  {
    icon: Users,
    title: 'Buyer-Centric Service',
    description: 'Dedicated support from enquiry to delivery.',
  },
  {
    icon: CheckCircle,
    title: 'Long-Term Partnerships',
    description: 'Focused on building sustainable business relationships worldwide.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-background">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
        <div className="mt-24 pt-24 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl font-light text-accent mb-2">GSTIN</p>
              <p className="text-foreground/60 font-light text-sm">27ABGFB6001M1ZH</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-light text-accent mb-2">Merchant Exporter</p>
              <p className="text-foreground/60 font-light text-sm">& Trader</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-light text-accent mb-2">45+</p>
              <p className="text-foreground/60 font-light text-sm">Countries Served</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-light text-accent mb-2">ISO</p>
              <p className="text-foreground/60 font-light text-sm">Quality Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
