import type { Metadata } from 'next'
import LegalPageLayout from '@/components/luxury/legal-page-layout'
import { companyInfo } from '@/lib/company-info'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Balaji World Trade LLP',
  description:
    'Terms and Conditions for using the Balaji World Trade LLP website and engaging with our handmade rugs and carpets export services.',
  robots: { index: true, follow: true },
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-foreground/70 font-light leading-relaxed">{children}</div>
    </section>
  )
}

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      description="Please read these terms carefully before using our website or submitting an enquiry for handmade rugs and carpet exports."
    >
      <Section title="1. Introduction">
        <p>
          Welcome to the website of {companyInfo.name}. By accessing or using this website, you
          agree to comply with and be bound by these Terms &amp; Conditions. If you do not agree,
          please do not use this website.
        </p>
        <p>
          {companyInfo.name} is a {companyInfo.businessType.toLowerCase()} specialising in{' '}
          {companyInfo.industry.toLowerCase()}. This website is intended to showcase our products,
          share catalogues, and facilitate communication with international buyers.
        </p>
      </Section>

      <Section title="2. Website Usage">
        <p>
          You agree to use this website only for lawful purposes and in a manner that does not
          infringe the rights of others or restrict their use of the website.
        </p>
        <p>You must not:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Misuse, copy, scrape, or reproduce website content without permission</li>
          <li>Attempt to gain unauthorised access to our systems or data</li>
          <li>Upload or transmit harmful, misleading, or unlawful material</li>
          <li>Use the website in any way that could damage our reputation or business operations</li>
        </ul>
      </Section>

      <Section title="3. Product Information">
        <p>
          Product images, descriptions, colours, sizes, materials, and specifications displayed on
          this website are provided for general informational purposes. As our rugs and carpets are
          handmade, natural variations in colour, texture, pattern, and dimensions may occur.
        </p>
        <p>
          We make reasonable efforts to ensure accuracy, but we do not guarantee that all product
          details on the website will exactly match the final manufactured or delivered product.
        </p>
      </Section>

      <Section title="4. Pricing & Quotations">
        <ul className="list-disc pl-5 space-y-2">
          <li>Prices, rates, and quotations may change without prior notice.</li>
          <li>Export quotations are subject to product availability and order confirmation.</li>
          <li>Freight charges, import duties, taxes, and local clearance fees may vary by destination country.</li>
          <li>All quotations are non-binding until formally confirmed in writing by {companyInfo.name}.</li>
        </ul>
      </Section>

      <Section title="5. Orders & Custom Manufacturing">
        <ul className="list-disc pl-5 space-y-2">
          <li>All orders are subject to acceptance and confirmation by {companyInfo.name}.</li>
          <li>Custom designs, sizes, and manufacturing requests may require advance payment or deposit.</li>
          <li>Production timelines for custom or bulk orders may vary depending on design complexity and material availability.</li>
          <li>Order specifications must be agreed upon in writing before production begins.</li>
        </ul>
      </Section>

      <Section title="6. Shipping & Delivery">
        <p>
          Estimated delivery timelines are provided in good faith but are not guaranteed. Delays
          caused by customs clearance, logistics providers, port congestion, weather conditions,
          government regulations, or other events beyond our reasonable control are not the
          responsibility of {companyInfo.name}.
        </p>
        <p>
          Risk of loss or damage during transit is governed by the agreed shipping terms between
          the buyer and seller for each order.
        </p>
      </Section>

      <Section title="7. Intellectual Property">
        <p>
          All website content — including images, photographs, logos, branding, product
          descriptions, text, graphics, and design elements — is the property of{' '}
          {companyInfo.name} unless otherwise stated.
        </p>
        <p>
          No content from this website may be copied, reproduced, distributed, or used for
          commercial purposes without our prior written consent.
        </p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, {companyInfo.name} shall not be liable
          for any indirect, incidental, special, consequential, or punitive damages arising from
          your use of this website or from any product enquiry, quotation, or purchase.
        </p>
        <p>
          We do not warrant that the website will be uninterrupted, error-free, or free from
          security vulnerabilities.
        </p>
      </Section>

      <Section title="9. External Links">
        <p>
          This website may contain links to third-party websites or services, including messaging
          platforms and logistics providers. We are not responsible for the content, privacy
          practices, or policies of any third-party websites.
        </p>
      </Section>

      <Section title="10. Governing Law">
        <p>
          These Terms &amp; Conditions shall be governed by and construed in accordance with the
          laws of India.
        </p>
        <h3 className="font-serif text-lg font-light text-foreground pt-2">
          Jurisdiction
        </h3>
        <p>
          Any disputes arising from the use of this website or related business transactions shall
          be subject to the exclusive jurisdiction of the courts in {companyInfo.jurisdiction}.
        </p>
      </Section>

      <Section title="11. Contact Information">
        <p>For questions regarding these Terms &amp; Conditions, please contact:</p>
        <div className="rounded-lg border border-border bg-background/50 p-5 space-y-2 text-foreground/80">
          <p className="font-medium text-foreground">{companyInfo.name}</p>
          <p>
            Email:{' '}
            <a
              href={`mailto:${companyInfo.email}`}
              className="text-foreground hover:text-accent transition-colors"
            >
              {companyInfo.email}
            </a>
          </p>
          <p>
            Phone:{' '}
            <a
              href="tel:+918104715725"
              className="text-foreground hover:text-accent transition-colors"
            >
              {companyInfo.phones[0]}
            </a>
          </p>
          <p>{companyInfo.jurisdiction}</p>
        </div>
      </Section>
    </LegalPageLayout>
  )
}
