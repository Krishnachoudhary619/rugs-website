import type { Metadata } from 'next'
import LegalPageLayout from '@/components/luxury/legal-page-layout'
import { companyInfo } from '@/lib/company-info'

export const metadata: Metadata = {
  title: 'Privacy Policy | Balaji World Trade LLP',
  description:
    'Privacy Policy for Balaji World Trade LLP. Learn how we collect, use, and protect your personal information when you enquire about handmade rugs and carpets.',
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

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="How Balaji World Trade LLP collects, uses, and protects your information when you visit our website or enquire about our handmade rugs and carpets."
    >
      <Section title="1. Introduction">
        <p>
          {companyInfo.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) values your privacy
          and is committed to protecting your personal information. This Privacy Policy explains
          how we collect, use, disclose, and safeguard information when you visit our website or
          communicate with us regarding handmade carpets and rugs export enquiries.
        </p>
        <p>
          Our website is designed to {companyInfo.websitePurpose.toLowerCase()}. By using this
          website or submitting an enquiry, you agree to the practices described in this policy.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company information</li>
          <li>Country or location</li>
          <li>Enquiry details and product preferences</li>
          <li>Website analytics data</li>
          <li>Device and browser information</li>
        </ul>
      </Section>

      <Section title="3. How We Use Information">
        <p>We use collected information to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Respond to product and export enquiries</li>
          <li>Share product catalogues, specifications, and pricing information</li>
          <li>Process export-related communications and documentation</li>
          <li>Improve website performance and user experience</li>
          <li>Provide customer support before and after order placement</li>
          <li>Send marketing communications where permitted and with your consent (optional)</li>
        </ul>
      </Section>

      <Section title="4. Cookies & Analytics">
        <p>
          Our website may use cookies and analytics tools to understand visitor behaviour, measure
          performance, and improve the browsing experience. Cookies are small data files stored on
          your device that help us remember preferences and analyse traffic patterns.
        </p>
        <p>
          You can control or disable cookies through your browser settings. Please note that
          disabling cookies may affect certain website features.
        </p>
      </Section>

      <Section title="5. Information Sharing">
        <p>
          We do not sell, rent, or trade your personal information to third parties for marketing
          purposes.
        </p>
        <p>We may share information with trusted parties when necessary, including:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Logistics and freight partners</li>
          <li>Shipping and courier providers</li>
          <li>Technology and service providers supporting our operations</li>
          <li>Government or regulatory authorities when legally required</li>
        </ul>
        <p>
          All such parties are expected to handle information responsibly and only for legitimate
          business purposes.
        </p>
      </Section>

      <Section title="6. Data Security">
        <p>
          We implement reasonable administrative, technical, and organisational measures to
          protect personal information against unauthorised access, disclosure, alteration, or
          destruction. While we strive to protect your data, no method of transmission over the
          internet is completely secure.
        </p>
      </Section>

      <Section title="7. International Visitors">
        <p>
          Our website serves international buyers and visitors from multiple countries. If you
          access our website from outside India, please note that your information may be
          transferred to, stored in, and processed in India, where our business operations are
          based.
        </p>
      </Section>

      <Section title="8. User Rights">
        <p>Depending on applicable laws, you may have the right to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Request access to the personal information we hold about you</li>
          <li>Request correction of inaccurate or incomplete information</li>
          <li>Request deletion of your personal information, subject to legal obligations</li>
          <li>Withdraw consent for marketing communications at any time</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the details provided below. We will
          respond within a reasonable timeframe.
        </p>
      </Section>

      <Section title="9. Contact Information">
        <p>
          For privacy-related questions, requests, or concerns, please contact:
        </p>
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
          <p>
            {companyInfo.address.line1} {companyInfo.address.line2} {companyInfo.address.city},{' '}
            {companyInfo.address.state}
          </p>
        </div>
      </Section>
    </LegalPageLayout>
  )
}
