import Header from '@/components/luxury/header'
import FeaturedCollections from '@/components/luxury/featured-collections'
import CTASection from '@/components/luxury/cta-section'
import Footer from '@/components/luxury/footer'

export default function CollectionsPage() {
  return (
    <main className="pt-[70px] md:pt-[90px]">
      <Header />
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            Handmade Rug Collections From India
          </h1>
          <p className="text-foreground/70 max-w-3xl text-lg font-light">
            Explore hand knotted, wool, jute, kilim, flatweave, and custom handmade rugs for importers,
            wholesalers, retailers, hospitality groups, and interior designers worldwide.
          </p>
        </div>
      </section>
      <FeaturedCollections />
      <CTASection />
      <Footer />
    </main>
  )
}
