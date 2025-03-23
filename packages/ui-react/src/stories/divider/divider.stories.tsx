import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import { Button } from '#/components/button'
import { Divider } from '#/components/divider'
import { Text } from '#/components/text'

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Base Components/Divider',
  tags: ['autodocs', 'status:done'],
  decorators: [
    (Story) => (
      <div className="flex w-full min-w-xl flex-col items-center justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: () => <Divider />,
}

export const WithChildren: Story = {
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div className="w-96">
      <Divider />
      <Divider>
        <Lucide.CalendarDays className="size-5" strokeWidth={1.5} />
      </Divider>
      <Divider>Standard</Divider>
      <Divider>
        <span className="px-4">With little bit more space</span>
      </Divider>
    </div>
  ),
}

export const MoreText: Story = {
  render: () => (
    <div className="max-w-xl flex-1">
      <p className="text-gray-500 text-sm dark:text-gray-500">Tickets Sold</p>
      <p className="font-semibold text-3xl text-gray-900 dark:text-gray-50">1,587</p>
      <Divider>Details</Divider>
      <Text className="text-muted-foreground">
        Ticket sales peaked in March, largely due to the "March Mountain Madness" event on March
        12th, drawing significant tourist interest. Operational efficiencies and local hotel
        partnerships further boosted sales. Additionally, targeted social media promotions ahead of
        the event significantly increased online bookings.
      </Text>
    </div>
  ),
}

export const ButtonChild: Story = {
  render: () => (
    <Divider>
      <Button variant="secondary" className="rounded-full px-4" size="sm">
        Show more
      </Button>
    </Divider>
  ),
}

export const WithVertical: Story = {
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div className="w-[320px]">
      <div className="space-y-1">
        <h4 className="font-medium text-sm leading-none">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">An open-source UI component library.</p>
      </div>
      <Divider className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Divider orientation="vertical" className="mr-4" />
        <div>Docs</div>
        <Divider orientation="vertical" className="mr-4" />
        <div>Source</div>
      </div>
    </div>
  ),
}
