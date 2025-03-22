/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(site)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

import { GithubInfo } from 'fumadocs-ui/components/github-info'
import type { LinkItemType } from 'fumadocs-ui/layouts/links'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import * as Lucide from 'lucide-react'
import Image from 'next/image'
import { isDevelopment, isProduction } from 'std-env'

const TitleComponent = () => (
  <div className="flex w-full flex-1 items-center gap-2 py-1.5">
    <Image
      src="/images/brand-svg/brand-icon-dark.svg"
      className="h-5 w-auto"
      alt="Twistail"
      width={600}
      height={250}
      unoptimized
    />
    <span>Twistail Docs</span>
  </div>
)

export const navLinks: LinkItemType[] = [
  {
    type: 'main',
    text: 'Home',
    url: '/',
    active: 'nested-url',
  },
  {
    type: 'main',
    text: 'Blog',
    url: '/blog',
    active: 'nested-url',
  },
  {
    type: 'main',
    text: 'Storybook',
    url: 'https://storybook.twistail.com',
    icon: <Lucide.ExternalLink className="size-4" />,
    external: true,
    active: 'url',
    on: 'nav',
  },
  {
    type: 'custom',
    children: isProduction ? (
      <GithubInfo owner="riipandi" repo="twistail" className="lg:-mx-2" />
    ) : null,
  },
]

export const baseOptions: BaseLayoutProps = {
  nav: {
    url: '/docs',
    title: <TitleComponent />,
    transparentMode: 'none',
  },
  themeSwitch: {
    enabled: false,
    mode: 'light-dark',
  },
  githubUrl: isDevelopment ? 'https://github.com/riipandi/twistail' : undefined,
  links: navLinks,
}
