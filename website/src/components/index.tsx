import { Accordion, Accordions } from 'fumadocs-ui/components/accordion'
import { Card, Cards } from 'fumadocs-ui/components/card'
import { Pre } from 'fumadocs-ui/components/codeblock'
import { File, Files, Folder } from 'fumadocs-ui/components/files'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import { Step, Steps } from 'fumadocs-ui/components/steps'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { TypeTable } from 'fumadocs-ui/components/type-table'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'
import { clx } from 'twistail-utils'
import Link from '#/app/link'
import { BadgeLink, Badges } from '#/components/badge-link'

const mdxComponents: MDXComponents = {
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link className={clx('font-medium underline underline-offset-4', className)} {...props} />
  ),
  Pre: ({ className, ...props }: React.ComponentProps<typeof Pre>) => (
    <Pre className={clx('font-mono', className)} {...props} />
  ),
  img: (props) => <ImageZoom {...props} />,
}

const components: MDXComponents = {
  ...defaultMdxComponents,
  ...mdxComponents,
  Accordion,
  Accordions,
  Badges,
  BadgeLink,
  Card,
  Cards,
  File,
  Files,
  Folder,
  Step,
  Steps,
  Tab,
  Tabs,
  TypeTable,
}

export { components }
