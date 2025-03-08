// Import global CSS stylesheet
import 'twistail-react/global.css'
import '../styles/global.css'

import { RootProvider } from 'fumadocs-ui/provider'
import type { Metadata } from 'next'
import { JetBrains_Mono, Mona_Sans } from 'next/font/google'
import { cn } from 'twistail-utils'

const fontSans = Mona_Sans({ variable: '--font-sans', subsets: ['latin'] })
const fontMono = JetBrains_Mono({ variable: '--font-mono', subsets: ['latin'] })

const metaDescription = `Modular and extensible UI components library powered by Radix UI, Tailwind CSS, and TypeScript.`
const metaTitle = 'Twistail — React UI components library'
const ogImageUrl = 'https://twistail.com/images/twistail-og.png'

export const metadata: Metadata = {
  title: { default: metaTitle, template: '%s - Twistail' },
  description: metaDescription,
}

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        {/* <!-- Open Graph Meta Tags --> */}
        <meta property="og:url" content="https://twistail.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImageUrl} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="twistail.com" />
        <meta property="twitter:url" content="https://twistail.com" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
      </head>
      <body
        className={cn(
          fontSans.variable,
          fontMono.variable,
          'font-sans antialiased dark:bg-gray-900'
        )}
      >
        <RootProvider search={{ enabled: false, options: { type: 'static' } }}>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
