'use client'

import CountryFlag from 'react-country-flag'
import Link from '#/app/link'

export default function Footer() {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12 dark:bg-gray-900">
      <footer className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-gray-200 border-y py-6 md:flex-row dark:border-gray-800">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link
              href="#"
              className="text-gray-500 transition duration-100 hover:text-blue-500 active:text-blue-600 dark:text-gray-300"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-500 transition duration-100 hover:text-blue-500 active:text-blue-600 dark:text-gray-300"
            >
              Changelog
            </Link>
            <Link
              href="#"
              className="text-gray-500 transition duration-100 hover:text-blue-500 active:text-blue-600 dark:text-gray-300"
            >
              Contributors
            </Link>
            <Link
              href="#"
              className="text-gray-500 transition duration-100 hover:text-blue-500 active:text-blue-600 dark:text-gray-300"
            >
              FAQs
            </Link>
          </nav>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-500 transition duration-100 hover:text-blue-500 active:text-blue-600 dark:text-gray-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/imprint"
              className="text-gray-500 transition duration-100 hover:text-blue-500 active:text-blue-600 dark:text-gray-300"
            >
              Imprint
            </Link>
          </div>
        </div>

        <div className="py-8 text-center text-gray-400 text-sm">
          &copy; 2023 - Made by{' '}
          <Link
            href="https://ripandis.com/?ref=twistail.com"
            className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text font-medium text-transparent hover:invert"
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
