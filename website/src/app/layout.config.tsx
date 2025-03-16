/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(site)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

import { GithubInfo } from 'fumadocs-ui/components/github-info'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import Image from 'next/image'

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

export const baseOptions: BaseLayoutProps = {
  nav: {
    url: '/',
    title: <TitleComponent />,
    transparentMode: 'none',
  },
  themeSwitch: {
    enabled: true,
    mode: 'light-dark',
  },
  links: [
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
      external: true,
      active: 'url',
    },
    {
      type: 'custom',
      children: <GithubInfo owner="riipandi" repo="twistail" className="lg:-mx-2" />,
    },
  ],
}
