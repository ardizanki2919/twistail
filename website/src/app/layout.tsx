// Import global CSS stylesheet
import '@twistail/react/global.css'
import '../styles/global.css'

import { clx } from '@twistail/react/utils'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

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
      <body className={clx(fontSans.variable, fontMono.variable, 'font-sans antialiased')}>
        {children}
      </body>
    </html>
  )
}
