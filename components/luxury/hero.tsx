'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, type Variants } from 'framer-motion'

const heroImages = [
  {
    src: '/images/royal-rugs1.jpg',
    alt: 'Premium hand knotted rugs exporter from India',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=',
  },
  {
    src: '/images/luxury-rug-hero-2.png',
    alt: 'Luxury wool rugs manufactured in India',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=',
  },
  {
    src: '/images/luxury-rug-hero-3.png',
    alt: 'Custom handmade rugs for hospitality projects',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=',
  },
]

const SLIDE_DURATION = 5000
const TRANSITION_DURATION = 1000

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsAutoplay(false)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    setIsAutoplay(false)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setIsAutoplay(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsAutoplay(false)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsAutoplay(true)
  }, [])

  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, SLIDE_DURATION)

    return () => clearInterval(interval)
  }, [isAutoplay])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={85}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={image.blurDataURL}
            />
            {/* Premium gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/55" />

            {/* Subtle zoom animation on active slide */}
            {index === currentIndex && (
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 5, ease: 'easeInOut', delay: 0.2 }}
                className="absolute inset-0 origin-center"
              >
                {/* This div ensures the zoom effect is visible */}
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 py-12 md:py-0 overflow-y-auto md:overflow-visible">
          <motion.div
            className="max-w-4xl flex flex-col gap-3 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Heading - Reduced size on mobile by 15-20% */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-4.5xl md:text-7xl font-light text-balance leading-tight"
            >
              Luxury Handmade Rugs & Carpets From India
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto text-gray-100"
            >
              Balaji World Trade LLP connects international buyers with expertly crafted handmade rugs and carpets sourced from India&apos;s finest weaving regions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-2 md:mt-4"
            >
              <Button
                asChild
                className="h-12 sm:h-14 min-w-[240px] bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 text-sm sm:text-base transition-all duration-300"
              >
                <Link href="#collections">View Collections</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 sm:h-14 min-w-[240px] bg-white/12 hover:bg-white/20 border-white/40 text-white font-medium px-8 text-sm sm:text-base backdrop-blur-sm transition-all duration-300"
              >
                <a
                  href="https://wa.me/918104715725?text=Hi%20Balaji%20World%20Trade!%20I%20would%20like%20to%20request%20your%20latest%20catalogue%20and%20pricing%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/whatsapp-icon.png"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                  WhatsApp Catalogue
                </a>
              </Button>
            </motion.div>

            {/* Trust Highlights - Hidden on mobile to save space */}
            <motion.div
              variants={itemVariants}
              className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base mt-4 md:mt-8"
            >
              <div className="text-white/90 hover:text-white transition-colors">✓ Worldwide Export</div>
              <div className="text-white/90 hover:text-white transition-colors">✓ Custom Designs</div>
              <div className="text-white/90 hover:text-white transition-colors">✓ Quality Inspected</div>
              <div className="text-white/90 hover:text-white transition-colors">✓ Competitive Pricing</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <motion.button
          onClick={prevSlide}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:block p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 hidden md:block p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Dot Indicators with Progress Bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 rounded-full overflow-hidden ${index === currentIndex
                  ? 'bg-white w-8 h-2'
                  : 'bg-white/40 hover:bg-white/60 w-2 h-2'
                }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
            >
              {/* Progress bar for active slide */}
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                  style={{ originX: 0 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
