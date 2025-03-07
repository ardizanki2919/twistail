'use client'

import { usePathname } from 'next/navigation'
import { clx } from 'twistail-react/utils'
import Link from '#/app/link'
// import { urls } from '#/constants'

import { GitHubIcon } from './icons'

export const NavBar = () => {
  const pathname = usePathname()

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <header className="flex items-center justify-between py-4 md:py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 font-bold text-2xl text-black md:text-3xl"
          aria-label="logo"
        >
          <img src="/images/brand-svg/brand-icon-dark.svg" className="h-8 w-auto" alt="Twistail" />
          <span className="sr-only">Twistail</span>
        </Link>

        <div className="hidden items-center gap-12 lg:flex">
          <div className="flex items-center justify-center gap-8 lg:justify-start">
            <nav className="flex gap-10">
              <Link
                href="/docs/components"
                className="font-medium text-gray-600 transition duration-100 hover:text-blue-500 active:text-blue-700"
              >
                Components
              </Link>
              <Link
                href="/docs/getting-started"
                className={clx(
                  pathname === '/docs' ? 'text-blue-500' : 'text-gray-600',
                  'font-medium transition duration-100 hover:text-blue-500 active:text-blue-700'
                )}
              >
                Documentation
              </Link>{' '}
              <Link
                href="/faqs"
                className={clx(
                  pathname === '/faqs' ? 'text-blue-500' : 'text-gray-600',
                  'font-medium transition duration-100 hover:text-blue-500 active:text-blue-700'
                )}
              >
                FAQs
              </Link>
            </nav>
            <div className="h-px w-12 bg-gray-200" />
            <div className="flex gap-6">
              <Link
                href="https://github.com/riipandi/twistail"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <GitHubIcon className="size-5" />
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 font-semibold text-gray-500 text-sm ring-blue-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
      </header>
    </div>
  )
}
