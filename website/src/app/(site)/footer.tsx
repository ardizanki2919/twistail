'use client'

import CountryFlag from 'react-country-flag'
import Link from '#/app/link'

export default function Footer() {
  const navLinks = [
    { href: '/docs', label: 'About' },
    { href: '/docs/changelog', label: 'Changelog' },
    { href: '/docs/contributors', label: 'Contributors' },
    { href: '/docs/faqs', label: 'FAQs' },
  ]

  const secondaryLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/imprint', label: 'Imprint' },
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
                className="text-gray-500 transition duration-100 hover:text-blue-500 active:text-blue-600 dark:text-gray-300"
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
                className="text-gray-500 transition duration-100 hover:text-blue-500 active:text-blue-600 dark:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="py-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} - Made by{' '}
          <Link
            href="https://ripandis.com/?ref=twistail.com"
            className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text font-medium text-transparent hover:invert dark:from-sky-300 dark:to-blue-500"
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
