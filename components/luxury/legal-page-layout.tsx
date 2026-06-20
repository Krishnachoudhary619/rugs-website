import Link from 'next/link'
import Header from '@/components/luxury/header'
import Footer from '@/components/luxury/footer'
import { companyInfo, formatLastUpdated } from '@/lib/company-info'

type LegalPageLayoutProps = {
  title: string
  description: string
  children: React.ReactNode
}

export default function LegalPageLayout({
  title,
  description,
  children,
}: LegalPageLayoutProps) {
  const lastUpdated = formatLastUpdated()

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-accent font-medium mb-4">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4 text-balance">
            {title}
          </h1>
          <p className="text-foreground/60 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="rounded-lg border border-border bg-card/40 p-6 md:p-8 mb-10">
            <h2 className="font-serif text-xl font-light text-foreground mb-4">
              Company Information
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <dt className="text-foreground/50 font-light mb-1">Company Name</dt>
                <dd className="text-foreground font-light">{companyInfo.name}</dd>
              </div>
              <div>
                <dt className="text-foreground/50 font-light mb-1">Business Type</dt>
                <dd className="text-foreground font-light">{companyInfo.businessType}</dd>
              </div>
              <div>
                <dt className="text-foreground/50 font-light mb-1">Industry</dt>
                <dd className="text-foreground font-light">{companyInfo.industry}</dd>
              </div>
              <div>
                <dt className="text-foreground/50 font-light mb-1">GSTIN</dt>
                <dd className="text-foreground font-light">{companyInfo.gstin}</dd>
              </div>
              <div>
                <dt className="text-foreground/50 font-light mb-1">Email</dt>
                <dd>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-foreground font-light hover:text-accent transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-foreground/50 font-light mb-1">Phone</dt>
                <dd className="space-y-1">
                  {companyInfo.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block text-foreground font-light hover:text-accent transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-foreground/50 font-light mb-1">Address</dt>
                <dd className="text-foreground font-light leading-relaxed">
                  {companyInfo.address.line1}
                  <br />
                  {companyInfo.address.line2}
                  <br />
                  {companyInfo.address.city}, {companyInfo.address.state}
                </dd>
              </div>
            </dl>
          </div>

          <article className="legal-content space-y-10">{children}</article>

          <p className="mt-12 pt-8 border-t border-border text-sm text-foreground/50 font-light">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href="/privacy-policy"
              className="text-foreground/60 hover:text-accent transition-colors font-light"
            >
              Privacy Policy
            </Link>
            <span className="text-foreground/30">|</span>
            <Link
              href="/terms-and-conditions"
              className="text-foreground/60 hover:text-accent transition-colors font-light"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-foreground/30">|</span>
            <Link
              href="/"
              className="text-foreground/60 hover:text-accent transition-colors font-light"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
