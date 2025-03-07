import type { Metadata } from 'next'
import LandingPage from './landing'

export const metadata: Metadata = {
  title: { absolute: 'Twistail — React UI components library' },
}

export default function Page() {
  return <LandingPage />
}
