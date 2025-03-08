// Import global CSS stylesheet
import 'twistail-react/global.css'
import '../styles/global.css'

import { RootProvider } from 'fumadocs-ui/provider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { cn } from 'twistail-react/utils'

const fontSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const fontMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

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
