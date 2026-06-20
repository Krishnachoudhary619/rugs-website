export const companyInfo = {
  name: 'Balaji World Trade LLP',
  businessType: 'Merchant Exporter & Trader',
  industry: 'Handmade Carpets & Rugs Export',
  email: 'balajiworldtradellp@gmail.com',
  phones: ['+91 8104715725', '+91 77150 04948'],
  address: {
    line1: 'A-11/18 New Shantinagar Ram Rahim Compound,',
    line2: 'Behind Bharat Velvet, Sakinaka,',
    city: 'Mumbai – 400072',
    state: 'Maharashtra, India',
  },
  gstin: '27ABGFB6001M1ZH',
  websitePurpose:
    'Showcase handmade rugs and carpets, generate export enquiries, share catalogues, and communicate with international buyers.',
  jurisdiction: 'Mumbai, Maharashtra, India',
} as const

export function formatLastUpdated(date = new Date()) {
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
