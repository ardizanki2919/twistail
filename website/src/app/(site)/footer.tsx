'use client'

import CountryFlag from 'react-country-flag'
import { Tooltip, TooltipContent, TooltipTrigger } from 'twistail-react/tooltip'
import { clx } from 'twistail-utils'
import Link from '#/app/link'

export default function Footer() {
  const navLinks = [
    { href: '/docs', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/docs/contributors', label: 'Contributors' },
    { href: '/docs#faqs', label: 'FAQs' },
  ]

  const secondaryLinks = [
    { href: '/imprint', label: 'Imprint' },
    { href: '/privacy', label: 'Privacy Policy' },
  ]

  return (
    <div className="pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 border-gray-200 border-y py-6 md:flex-row dark:border-gray-800">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-gray-500 text-sm transition duration-150 hover:text-blue-500 active:text-blue-600 dark:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-6">
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-gray-500 text-sm transition duration-150 hover:text-blue-500 active:text-blue-600 dark:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 py-8 text-center font-medium text-gray-500 text-sm dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} - A project by{' '}
            <Link
              href="https://ripandis.com/?utm_source=twistail.com&utm_medium=website&utm_campaign=footer"
              className={clx(
                'bg-gradient-to-r bg-clip-text font-semibold text-transparent transition-all duration-300',
                'from-sky-400 to-blue-600 dark:from-sky-300 dark:to-blue-500',
                'hover:from-blue-500 hover:to-sky-400'
              )}
              newTab
            >
              Aris Ripandi
            </Link>
            {', crafted in '}
            <CountryFlag countryCode="ID" aria-label="Indonesia" />
          </p>
          <p>
            This site is powered by{' '}
            <Tooltip delayDuration={10}>
              <TooltipTrigger asChild>
                <Link
                  href="https://www.netlify.com/?utm_source=twistail.com&utm_medium=website&utm_campaign=footer"
                  className={clx(
                    'bg-gradient-to-r bg-clip-text font-semibold text-transparent transition-all duration-300',
                    'from-teal-400 to-emerald-600 dark:from-teal-300 dark:to-emerald-500',
                    'hover:from-emerald-500 hover:to-teal-400'
                  )}
                  newTab
                >
                  Netlify
                </Link>
              </TooltipTrigger>
              <TooltipContent content="Deploy your website to Netlify" className="text-xs" />
            </Tooltip>
          </p>
        </div>
      </footer>
    </div>
  )
}
