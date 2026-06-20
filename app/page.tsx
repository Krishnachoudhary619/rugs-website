import Header from "@/components/luxury/header"
import Hero from "@/components/luxury/hero"
import BrandStory from "@/components/luxury/brand-story"
import FeaturedCollections from "@/components/luxury/featured-collections"
import Craftsmanship from "@/components/luxury/craftsmanship"
import Gallery from "@/components/luxury/gallery"
import WhyChooseUs from "@/components/luxury/why-choose-us"
import GlobalExport from "@/components/luxury/global-export"
import CTASection from "@/components/luxury/cta-section"
import Footer from "@/components/luxury/footer"

export default function HomePage() {
  return (
    <main className="pt-20">
      <Header />
      <Hero />
      <BrandStory />
      <FeaturedCollections />
      <Craftsmanship />
      <Gallery />
      <WhyChooseUs />
      <GlobalExport />
      <CTASection />
      <Footer />
    </main>
  )
}
