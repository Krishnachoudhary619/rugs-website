import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { CartProvider } from '@/components/boty/cart-context'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const bingSiteVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION

const siteUrl = 'https://balajirugs.com'
const ogImageUrl = `${siteUrl}/og-image.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Balaji World Trade LLP | Premium Handmade Rugs & Carpets From India',
  description:
    'Luxury handmade rugs and carpets crafted in India and delivered worldwide. Explore hand knotted, wool, kilim, flatweave, jute, and custom rugs.',
  keywords: [
    'handmade rugs exporter india',
    'handmade carpets exporter india',
    'premium rugs india',
    'hand knotted rugs exporter',
    'wool rugs exporter india',
    'custom rugs manufacturer india',
    'kilim rugs supplier india',
    'jute rugs exporter',
    'handmade carpet manufacturer india',
    'rug exporter mumbai',
    'luxury rugs india',
    'hospitality rugs supplier',
    'handmade rugs wholesale',
    'custom carpet manufacturer',
    'indian rugs exporter',
    'Balaji World Trade LLP',
    'premium handmade rugs and carpets exporter from India',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Balaji World Trade LLP | Premium Handmade Rugs & Carpets From India',
    description:
      'Luxury handmade rugs and carpets crafted in India and delivered worldwide.',
    url: siteUrl,
    siteName: 'Balaji World Trade LLP',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Balaji World Trade LLP Premium Handmade Rugs',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balaji World Trade LLP',
    description: 'Premium Handmade Rugs & Carpets From India',
    images: [ogImageUrl],
  },
  verification: {
    google: googleSiteVerification,
    ...(bingSiteVerification
      ? {
          other: {
            'msvalidate.01': bingSiteVerification,
          },
        }
      : {}),
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#F7F2EA',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/royal-rugs1.jpg"
          fetchPriority="high"
        />
      </head>
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}');
                `,
              }}
            />
          </>
        ) : null}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
