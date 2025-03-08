// Import global CSS stylesheet
import 'twistail-react/global.css'
import '../styles/global.css'

import { RootProvider } from 'fumadocs-ui/provider'
import type { Metadata } from 'next'
import { JetBrains_Mono, Mona_Sans } from 'next/font/google'
import { cn } from 'twistail-utils'

const fontSans = Mona_Sans({ variable: '--font-sans', subsets: ['latin'] })
const fontMono = JetBrains_Mono({ variable: '--font-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Twistail',
    template: '%s - Twistail',
  },
  description: `Modular and extensible UI components library powered by Radix UI, Tailwind CSS, and TypeScript.`,
}

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <meta property="og:image" content="/images/twistail-og.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Twistail" />
        <meta name="twitter:image" content="/images/twistail-og.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta property="twitter:image:alt" content="Twistail" />
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
