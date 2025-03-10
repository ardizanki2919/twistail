'use client'

import { ThemeToggle } from 'fumadocs-ui/components/layout/theme-toggle'
import * as Lucide from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from 'twistail-utils'
import Link from '#/app/link'
// import { urls } from '#/constants'

import { GitHubIcon } from './icons'

// Navigation items array for easier management
const navItems = [
  { href: '/docs/ui/components', label: 'Components' },
  { href: '/docs', label: 'Documentation' },
  { href: '/docs/ui/changelog', label: 'Changelog' },
  { href: '/docs/ui/faqs', label: 'FAQs', matchPath: '/docs/ui/faqs' },
]

export const NavBar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6">
      <header className="flex items-center justify-between py-4 md:py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 font-bold text-2xl text-black md:text-3xl dark:text-white"
          aria-label="logo"
        >
          <Image
            src="/images/brand-svg/brand-icon-dark.svg"
            className="h-8 w-auto"
            alt="Twistail"
            width={600}
            height={250}
            unoptimized
          />
          <span className="sr-only">Twistail</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-12 lg:flex">
          <div className="flex items-center justify-center gap-8 lg:justify-start">
            <nav className="flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'group relative py-1 font-medium text-sm transition-all duration-200',
                    (item.matchPath && pathname === item.matchPath) || pathname === item.href
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-neutral-600 hover:text-indigo-600 dark:text-neutral-300 dark:hover:text-indigo-400'
                  )}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Animated underline for active state */}
                  {((item.matchPath && pathname === item.matchPath) || pathname === item.href) && (
                    <span className="-bottom-0.5 absolute left-0 h-0.5 w-full rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  )}

                  {/* Hover animated underline */}
                  <span
                    className={cn(
                      '-bottom-0.5 absolute left-0 h-0.5 rounded-full bg-indigo-600 transition-all duration-300 ease-out dark:bg-indigo-400',
                      (item.matchPath && pathname === item.matchPath) || pathname === item.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              ))}
            </nav>
            <div className="h-px w-12 bg-neutral-200 dark:bg-neutral-700" />
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/riipandi/twistail"
                className="text-neutral-500 transition-all duration-200 hover:scale-110 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                aria-label="GitHub repository"
                newTab
              >
                <GitHubIcon className="size-6" />
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={cn(
            isMenuOpen ? 'hidden' : 'inline-flex',
            'relative z-50 items-center gap-2 rounded-lg bg-neutral-100 px-2.5 py-2 font-medium text-neutral-700 text-sm shadow-sm ring-blue-300 hover:bg-neutral-200 focus-visible:ring lg:hidden dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700'
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          <Lucide.Menu
            className={cn(
              'size-5 transition-all duration-300',
              isMenuOpen && 'rotate-90 scale-0 opacity-0'
            )}
          />
          <Lucide.X
            className={cn(
              'absolute size-5 transition-all duration-300',
              !isMenuOpen && '-rotate-90 scale-0 opacity-0'
            )}
          />
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 z-40 transform bg-white/80 backdrop-blur-sm transition-all duration-300 ease-in-out lg:hidden dark:bg-neutral-950/80',
          isMenuOpen
            ? 'translate-x-0 opacity-100'
            : 'pointer-events-none translate-x-full opacity-0'
        )}
        aria-hidden={!isMenuOpen}
      >
        <div
          className="absolute right-0 flex h-full w-full max-w-sm transform flex-col bg-white shadow-xl transition-transform duration-500 ease-in-out dark:bg-neutral-900"
          style={{
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transitionDelay: isMenuOpen ? '150ms' : '0ms',
          }}
        >
          <div className="flex h-full flex-col overflow-y-auto">
            <div className="flex items-center justify-between border-b p-4 lg:pr-6 dark:border-neutral-800">
              <Image
                src="/images/brand-svg/brand-icon-dark.svg"
                className="h-8 w-auto"
                alt="Twistail"
                width={150}
                height={60}
                unoptimized
              />
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="relative z-50 items-center gap-2 rounded-lg bg-neutral-100 px-2.5 py-2 font-medium text-neutral-700 text-sm shadow-sm ring-blue-300 hover:bg-neutral-200 focus-visible:ring lg:hidden dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
              >
                <Lucide.X className="size-5" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            <nav className="flex-1 p-6">
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <li
                    key={item.label}
                    style={{
                      animationDelay: `${(index + 1) * 75}ms`,
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'group -mx-3 relative flex items-center overflow-hidden rounded-lg px-3 py-2 font-medium text-base transition-all duration-200',
                        (item.matchPath && pathname === item.matchPath) || pathname === item.href
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'text-neutral-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400'
                      )}
                    >
                      <span className="relative z-10">{item.label}</span>

                      {/* Hover background effect */}
                      <span
                        className={cn(
                          'absolute inset-0 origin-left transform bg-blue-50 transition-transform duration-300 ease-out dark:bg-blue-900/20',
                          (item.matchPath && pathname === item.matchPath) || pathname === item.href
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        )}
                      />

                      {/* Active indicator */}
                      {((item.matchPath && pathname === item.matchPath) ||
                        pathname === item.href) && (
                        <span className="-translate-y-1/2 absolute top-1/2 left-0 h-6 w-1 rounded-r-full bg-blue-600 dark:bg-blue-400" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto border-t p-6 dark:border-neutral-800">
              <Link
                href="https://github.com/riipandi/twistail"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-neutral-100 px-4 py-3 font-medium text-neutral-800 transition-all duration-200 hover:bg-neutral-200 hover:shadow-md dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                newTab
              >
                <GitHubIcon className="size-5" />
                <span>View on GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
