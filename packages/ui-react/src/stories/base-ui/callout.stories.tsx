import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import { Callout, calloutStyles } from '#/components'

const meta: Meta<typeof Callout> = {
  component: Callout,
  title: 'Base Components/Callout',
  tags: ['status:done'],
  args: {
    title: 'Sales Performance',
    children: `System Update: Enhanced Salesforce and Dynamics 365 integration now delivers key sales performance metrics directly to your dashboard for improved target achievement.`,
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: [...Object.keys(calloutStyles.variants.variant)],
    },
  },
}

export default meta
type Story = StoryObj<typeof Callout>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Callout variant="primary" {...args} />
      <Callout variant="success" {...args} />
      <Callout variant="error" {...args} />
      <Callout variant="warning" {...args} />
      <Callout variant="info" {...args} />
      <Callout variant="neutral" {...args} />
    </div>
  ),
}

export const WithIcon: Story = {
  args: {
    icon: <Lucide.Info className="mr-1.5 size-5 shrink-0 p-0.5" />,
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Callout variant="primary" {...args} />
      <Callout variant="success" {...args} />
      <Callout variant="error" {...args} />
      <Callout variant="warning" {...args} />
      <Callout variant="neutral" {...args} />
    </div>
  ),
}

export const LucideIcon: Story = {
  args: { icon: Lucide.OctagonAlert },
  render: (args) => <Callout {...args} />,
}
