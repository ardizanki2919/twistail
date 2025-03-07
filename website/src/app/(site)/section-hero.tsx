'use client'

import Link from '#/app/link'

export default function SectionHero() {
  return (
    <header className="relative flex min-h-[55vh] flex-col justify-center">
      {/* Decorative elements */}
      <div className="-z-10 absolute top-20 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="-z-10 absolute bottom-20 left-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Main content */}
      <div className="space-y-8">
        <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 dark:bg-blue-500/20">
          <span className="font-medium text-blue-600 text-sm dark:text-blue-400">
            Currently in development.
          </span>
        </div>

        <h1 className="max-w-4xl font-bold text-5xl text-zinc-900 tracking-tight md:text-7xl dark:text-white">
          Twistail{' '}
          <span className="relative">
            React UI
            <span className="-bottom-2 absolute left-0 h-1 w-full bg-blue-500" />
          </span>{' '}
          library.
        </h1>

        <p className="mt-14 max-w-2xl text-xl text-zinc-600 leading-relaxed dark:text-zinc-300">
          Twistail is a modular and extensible React UI library that provides a set of pre-built
          components and utilities to help you build beautiful and responsive user interfaces.
        </p>

        <div className="flex gap-4">
          <Link
            href="/docs/getting-started"
            className="group relative overflow-hidden rounded-lg bg-zinc-900 px-8 py-4 font-medium text-lg text-white transition-all hover:bg-zinc-800 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600"
          >
            Getting started
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all group-hover:w-full dark:bg-white" />
          </Link>

          <Link
            href="/docs/components"
            className="group flex items-center gap-2 px-8 py-4 font-medium text-lg text-zinc-600 dark:text-zinc-300"
          >
            Browse components
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
