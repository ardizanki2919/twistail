'use client'

import React from 'react'
import { cn } from 'twistail-utils'
import Link from '#/app/link'

export default function RedirectComponent({ targetUrl }: { targetUrl: string }) {
  // State to track if we're currently in the process of redirecting
  const [isRedirecting, setIsRedirecting] = React.useState(false)

  React.useEffect(() => {
    // Set redirecting state immediately
    setIsRedirecting(true)

    // Use requestAnimationFrame to ensure smoother visual transition
    requestAnimationFrame(() => {
      // Small timeout to ensure animation has time to be processed
      setTimeout(() => {
        window.location.href = targetUrl
      }, 100)
    })

    // Cleanup function
    return () => {
      setIsRedirecting(false)
    }
  }, [targetUrl])

  // Set initial body styles to prevent flash
  React.useEffect(() => {
    // Apply overflow hidden to prevent scrolling during redirect
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      className={cn(
        isRedirecting ? 'opacity-100' : 'opacity-0',
        'fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-900',
        'transition-opacity duration-300'
      )}
    >
      <div className="px-4 text-center">
        <div className="mb-4 flex justify-center">
          {/* Simple loading spinner */}
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
        </div>
        <h1 className="mb-2 font-bold text-2xl text-neutral-900 dark:text-white">Redirecting...</h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          If you are not redirected automatically, please{' '}
          <Link href={targetUrl} className="text-blue-500 hover:underline">
            click here
          </Link>
        </p>
      </div>
      <noscript>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-900">
          <p className="p-4 text-center text-red-500">
            JavaScript is required for redirection. Please{' '}
            <a href={targetUrl} className="font-bold underline">
              click here to continue
            </a>
          </p>
        </div>
      </noscript>
    </div>
  )
}
