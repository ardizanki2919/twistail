// Import global CSS stylesheet
import 'twistail-react/global.css'
import '../styles/global.css'

import { RootProvider } from 'fumadocs-ui/provider'
import type { Metadata } from 'next'
import { JetBrains_Mono, Mona_Sans } from 'next/font/google'
import { env } from 'std-env'
import { cn } from 'twistail-utils'

const fontSans = Mona_Sans({ variable: '--font-sans', subsets: ['latin'] })
const fontMono = JetBrains_Mono({ variable: '--font-mono', subsets: ['latin'] })

const baseUrl = env.NEXT_PUBLIC_BASE_URL || 'https://twistail.com'
const metaDescription = `Modular and extensible UI components library powered by Radix UI, Tailwind CSS, and TypeScript.`
const metaTitle = 'Twistail — React UI components library'
const ogImageUrl = 'https://twistail.com/images/banner.png'

export const metadata: Metadata = {
  title: { default: metaTitle, template: '%s - Twistail' },
  description: metaDescription,
  keywords: `Open Source,Responsive,UI Components,React,Tailwind CSS v4,Radix UI,TypeScript,Next.js,Server Components`,
  creator: '@riipandi',
  openGraph: {
    url: baseUrl,
    title: metaTitle,
    description: metaDescription,
    images: { url: ogImageUrl },
    siteName: 'Twistail',
    type: 'website',
  },
  twitter: {
    site: baseUrl,
    title: metaTitle,
    description: metaDescription,
    images: { url: ogImageUrl, alt: metaTitle },
    card: 'summary_large_image',
    creator: '@riipandi',
  },
}

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={cn(fontSans.variable, fontMono.variable)}>
        <RootProvider
          search={{
            enabled: true,
            options: { type: 'static' },
            links: [
              ['Homepage', '/'],
              ['Documentation', '/docs/ui'],
              ['Changelog', '/docs/ui/changelog'],
            ],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
