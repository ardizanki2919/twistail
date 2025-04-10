import type { Meta, StoryObj } from '@storybook/react'
import { clx } from 'twistail-utils'
import { Badge, badgeStyles } from '#/components/badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Base Components/Badge',
  tags: ['autodocs', 'status:done'],
  args: {
    children: 'Badge',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: [...Object.keys(badgeStyles.variants.variant)],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
}

export const AnchorBadge: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <a href="#" className={clx(badgeStyles({ variant: 'success' }), 'cursor-pointer')}>
        Anchor element
      </a>
    </div>
  ),
}

export const CustomisedBadge: Story = {
  render: () => (
    <div className="flex w-full min-w-3xl items-center justify-between gap-8 rounded-md bg-blue-50 py-2.5 pr-4 pl-2.5 text-sm dark:bg-blue-900/50">
      <div className="flex items-center gap-2 truncate">
        <Badge className="rounded-full bg-blue-800 text-white ring-0 dark:bg-blue-500 dark:text-white dark:ring-0">
          Export Request
        </Badge>
        <span className="truncate text-blue-800 dark:text-blue-400">
          Your export is ready for download: <span className="font-semibold">263 transactions</span>
        </span>
      </div>
      <button
        type="button"
        className="cursor-pointer font-semibold text-blue-800 dark:text-blue-400"
      >
        Download
      </button>
    </div>
  ),
}
