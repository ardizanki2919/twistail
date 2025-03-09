'use client'

import type { TOCItemType } from 'fumadocs-core/server'
import { useEffect, useRef } from 'react'
import { cn } from 'twistail-utils'
import Link from '#/app/link'

export default function CustomTOC({ items }: { items: TOCItemType[] }) {
  if (!items || items.length === 0) return null
  return <CustomTOCClient items={items} />
}

function CustomTOCClient({ items }: { items: TOCItemType[] }) {
  // Ref to track if we recently clicked a TOC item
  const recentlyClicked = useRef(false)
  const clickTimeout = useRef<NodeJS.Timeout | null>(null)

  // Filter the first heading element
  const filteredItems = items.filter((item, index) => {
    // Skip if it's the first heading element and it's a H1
    if (index === 0 && item.depth === 1) {
      return false
    }
    return true
  })

  // Extract ID from URL
  const getIdFromUrl = (url: string) => {
    if (!url) return ''
    return url.startsWith('#') ? url.substring(1) : url
  }

  // Scroll to the element with the given ID
  const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()

    // Set the recent click flag
    recentlyClicked.current = true

    // Clear any existing timeout
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current)
    }

    // Reset the flag after a delay
    clickTimeout.current = setTimeout(() => {
      recentlyClicked.current = false
    }, 1000) // Keep the flag active for 1 second

    const element = document.getElementById(id)
    if (!element) return

    // Calculate scroll position with offset for fixed header
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset

    // Update URL
    history.pushState(null, '', `#${id}`)

    // Scroll to element
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  // Handle URL updates on scroll - always called unconditionally
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Early return if no items after filtering
    if (filteredItems.length === 0) return

    // Check if we're at the top of the page
    const isAtTop = () => window.scrollY < 100

    // Update URL based on scroll position
    const handleScroll = () => {
      // Skip URL updates if we recently clicked a TOC item
      if (recentlyClicked.current) return

      // If at top, remove hashtag
      if (isAtTop()) {
        const { pathname, search } = window.location
        if (window.location.hash) {
          history.replaceState(null, '', pathname + search)
        }
      }
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current)
      }
    }
  }, [filteredItems]) // Keep this dependency array

  // If no items after filtering, return null
  if (filteredItems.length === 0) return null

  return (
    <aside className="sticky top-20 hidden h-fit w-64 shrink-0 lg:block">
      <div className="border-gray-200 border-l-2 pl-4 dark:border-gray-700">
        <h3 className="mb-4 font-medium text-gray-900 text-lg dark:text-white">On this page</h3>
        <nav className="toc-nav">
          <ul className="space-y-1">
            {filteredItems.map((item) => {
              // Extract ID from the URL to be used as a key
              const id = getIdFromUrl(item.url)

              // use depth to determine the indentation and text size
              const indentClass = (() => {
                switch (item.depth) {
                  case 1:
                    return 'font-medium' // H1
                  case 2:
                    return 'ml-0' // H2
                  case 3:
                    return 'ml-3 text-sm' // H3
                  case 4:
                    return 'ml-6 text-sm' // H4
                  default:
                    return 'ml-9 text-xs' // H5, H6, etc
                }
              })()

              return (
                <li key={id || item.url} className={cn(indentClass, '-mx-2.5')}>
                  <Link
                    href={item.url}
                    onClick={(e) => scrollToElement(e, id)}
                    className={cn(
                      'border-transparent text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400',
                      '-ml-[8px] block border-l-2 py-1 pl-4 text-sm transition-colors'
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
