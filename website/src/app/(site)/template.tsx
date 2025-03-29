'use client'

import Footer from './footer'
import { NavBar } from './navbar'

export default function Template({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <div className="-z-10 fixed inset-0 overflow-hidden bg-white dark:bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="ray-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="0%"
                    className="text-blue-400/30 dark:text-blue-700/20"
                    stopColor="currentColor"
                  />
                  <stop offset="100%" className="text-transparent" stopColor="currentColor" />
                </linearGradient>
                <linearGradient id="ray-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop
                    offset="0%"
                    className="text-blue-400/30 dark:text-blue-700/20"
                    stopColor="currentColor"
                  />
                  <stop offset="100%" className="text-transparent" stopColor="currentColor" />
                </linearGradient>
              </defs>
              <polygon points="0,0 100,0 50,100" fill="url(#ray-gradient-1)" />
              <polygon points="100,0 100,100 0,50" fill="url(#ray-gradient-2)" />
            </svg>
          </div>
        </div>
      </div>
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
