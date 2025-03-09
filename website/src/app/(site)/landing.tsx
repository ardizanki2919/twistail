'use client'

import Atropos from 'atropos/react'
import * as Lucide from 'lucide-react'
import Image from 'next/image'
import Link from '#/app/link'
import 'atropos/css'

export default function LandingPage() {
  const installCommand = `npm install twistail-react`
  const handleCopy = () => navigator.clipboard.writeText(installCommand)

  return (
    <div className="my-8 md:mt-12 xl:my-14">
      <div className="bg-transparent pb-6 sm:pb-8 lg:pb-12">
        <svg
          className="-z-10 absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-gray-800"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>

        <div className="mx-auto max-w-screen-xl px-4 md:px-6">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-14 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-20">
              <div className="mx-auto mb-8 inline-flex space-x-6 lg:mx-0">
                <div className="inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 dark:bg-rose-500/20">
                  <span className="font-medium text-rose-600 text-sm dark:text-rose-100">
                    Currently in development
                  </span>
                </div>
                <Link
                  href="https://npmjs.com/package/twistail-react"
                  className="inline-flex items-center space-x-2 font-medium text-gray-600 text-sm leading-6"
                  newTab
                >
                  <span className="dark:text-gray-300">Alpha v0.1.x</span>
                  <Lucide.ExternalLink
                    className="size-4 text-gray-400 dark:text-gray-300"
                    aria-hidden="true"
                    strokeWidth={2}
                  />
                </Link>
              </div>

              <div className="mx-auto max-w-2xl">
                <h1 className="max-w-4xl font-bold text-5xl text-gray-900 tracking-tight md:text-6xl dark:text-white">
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                    Twistail
                  </span>{' '}
                  <span className="relative text-black dark:text-white">
                    UI library
                    <span className="-bottom-2 absolute left-0 h-1 w-full bg-blue-500" />
                  </span>
                </h1>

                <p className="mt-12 mb-8 text-center text-gray-500 leading-relaxed md:mb-12 lg:text-left xl:text-lg dark:text-gray-400">
                  Speed up building your website and dashboard by using modular and extensible UI
                  components built on top of
                  <br className="hidden lg:inline-block" />{' '}
                  <Link
                    href="https://www.radix-ui.com/primitives?ref=twistail"
                    className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text font-medium text-transparent hover:invert"
                    newTab
                  >
                    Radix UI
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="https://tailwindcss.com/?ref=twistail"
                    className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text font-medium text-transparent hover:invert"
                    newTab
                  >
                    Tailwind CSS
                  </Link>
                  .
                </p>
              </div>

              <div className="-mt-2">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    href="/docs/ui/installation"
                    className="inline-block rounded-lg bg-blue-500 px-8 py-3 text-center font-medium text-sm text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base dark:text-white"
                  >
                    Get started
                  </Link>

                  <div className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-gray-200 bg-gray-100 px-4 py-3 text-center font-medium text-gray-600 text-sm outline-none ring-gray-300 md:text-base">
                    <span className="font-medium font-mono text-sm tracking-tight group-hover:text-blue-500">
                      {installCommand}
                    </span>
                    <Lucide.ClipboardCopy
                      className="size-5 cursor-pointer group-hover:text-blue-500"
                      onClick={handleCopy}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>
                <div className="order-first mt-8 flex items-center justify-center gap-2 text-center text-gray-400 text-xs sm:text-sm lg:justify-start">
                  <p>20+ components</p>&#x2022;<p>Open Source</p>&#x2022;
                  <p>First Class TypeScript</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex h-[18rem] overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mt-0 md:h-auto xl:w-1/2">
              <Atropos
                activeOffset={40}
                shadowScale={1.05}
                className="h-full w-full rounded-lg bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset"
              >
                <Image
                  src="/images/screenshots/SCR-20230129-p89.png"
                  className="h-full w-full rounded-md object-cover object-center shadow-2xl ring-1 ring-gray-900/10"
                  alt="hero image"
                  width={1632}
                  height={968}
                  priority
                />
              </Atropos>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
