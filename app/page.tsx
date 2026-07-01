import Script from 'next/script'
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://balajirugs.com/#organization',
        name: 'Balaji World Trade LLP',
        url: 'https://balajirugs.com',
        logo: 'https://balajirugs.com/logo.png',
        telephone: '+91 8104715725',
        email: 'balajiworldtradellp@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          addressCountry: 'India',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: '+91 8104715725',
            email: 'balajiworldtradellp@gmail.com',
            areaServed: 'Worldwide',
            availableLanguage: ['English', 'Hindi'],
          },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://balajirugs.com/#localbusiness',
        name: 'Balaji World Trade LLP',
        url: 'https://balajirugs.com',
        image: 'https://balajirugs.com/og-image.jpg',
        telephone: '+91 8104715725',
        email: 'balajiworldtradellp@gmail.com',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          addressCountry: 'India',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          telephone: '+91 8104715725',
          email: 'balajiworldtradellp@gmail.com',
          areaServed: 'Worldwide',
          availableLanguage: ['English', 'Hindi'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://balajirugs.com/#website',
        name: 'Balaji Rugs',
        url: 'https://balajirugs.com',
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://balajirugs.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://balajirugs.com/',
          },
        ],
      },
    ],
  }

  return (
    <main className="pt-[70px] md:pt-[90px]">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
