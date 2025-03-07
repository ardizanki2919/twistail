'use client'

import Link from '#/app/link'

export default function SectionCTA() {
  return (
    <section className="border-zinc-200 border-t py-16 dark:border-zinc-800">
      <div className="flex flex-col items-start gap-6 rounded-2xl bg-zinc-900 p-8 md:flex-row md:items-center md:justify-between dark:bg-blue-500/10">
        <div>
          <h2 className="font-semibold text-2xl text-white">Ready to build something great?</h2>
          <p className="mt-2 text-zinc-300">
            Explore the library and build your next project with ease.
          </p>
        </div>
        <Link
          href="/docs"
          className="rounded-lg bg-blue-500 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-600 dark:text-white"
        >
          Read the docs →
        </Link>
      </div>
    </section>
  )
}
