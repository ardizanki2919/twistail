'use client'

import CountryFlag from 'react-country-flag'
import Link from '#/app/link'

export default function Footer() {
  const navLinks = [
    { href: '/docs', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/docs/ui/contributors', label: 'Contributors' },
    { href: '/docs/ui/faqs', label: 'FAQs' },
  ]

  const secondaryLinks = [
    { href: '/imprint', label: 'Imprint' },
    { href: '/privacy', label: 'Privacy Policy' },
  ]

  return (
    <div className="pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 border-gray-200 border-y py-6 md:flex-row dark:border-gray-800">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-gray-500 text-sm transition duration-100 hover:text-blue-500 active:text-blue-600 dark:text-gray-300"
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
                className="font-semibold text-gray-500 text-sm transition duration-100 hover:text-blue-500 active:text-blue-600 dark:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="py-8 text-center font-medium text-gray-500 text-sm dark:text-gray-400">
          &copy; {new Date().getFullYear()} - Made by{' '}
          <Link
            href="https://ripandis.com/?ref=twistail.com"
            className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text font-semibold text-transparent hover:invert dark:from-sky-300 dark:to-blue-500"
            newTab
          >
            Aris Ripandi
          </Link>
          {' in '}
          <CountryFlag countryCode="ID" aria-label="Indonesia" />
        </div>
      </footer>
    </div>
  )
}
