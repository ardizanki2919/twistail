import { DocsLayout } from 'fumadocs-ui/layouts/notebook'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { clx } from 'twistail-utils'
import { baseOptions } from '#/app/layout.config'
import Link from '#/app/link'
import { source } from '#/lib/source'

export const metadata: Metadata = {
  title: {
    default: 'Twistail Documentation',
    template: '%s - Twistail Documentation',
  },
}

const Footer = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-1 py-0 text-center font-medium text-gray-500 text-xs md:text-left dark:text-gray-400">
      <p>
        &copy;{` ${new Date().getFullYear()} | Made by `}
        <Link
          href="https://ripandis.com/?utm_source=twistail.com&utm_medium=website&utm_campaign=footer"
          className={clx(
            'bg-gradient-to-r bg-clip-text font-semibold text-transparent transition-all duration-300',
            'from-sky-400 to-blue-600 dark:from-sky-300 dark:to-blue-500',
            'hover:from-blue-500 hover:to-sky-400'
          )}
          newTab
        >
          @riipandi
        </Link>
      </p>
    </div>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tabMode="sidebar"
      tree={source.pageTree}
      nav={baseOptions.nav}
      links={baseOptions.links}
      githubUrl={baseOptions.githubUrl}
      themeSwitch={baseOptions.themeSwitch}
      sidebar={{
        collapsible: true,
        footer: <Footer />,
        // tabs: [
        //   {
        //     url: '/docs',
        //     title: 'Twistail Components',
        //     description: 'List of all components',
        //     icon: <Lucide.BookOpenText className="m-1 size-6" strokeWidth={2} />,
        //   },
        // ],
      }}
    >
      {children}
    </DocsLayout>
  )
}
