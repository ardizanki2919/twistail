import type { Metadata } from 'next'
import Footer from './footer'
import SectionCTA from './section-cta'
import SectionHero from './section-hero'

export const metadata: Metadata = {
  title: { absolute: 'Twistail — React UI components library' },
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <SectionHero />
      <SectionCTA />
      <Footer />
    </div>
  )
}
