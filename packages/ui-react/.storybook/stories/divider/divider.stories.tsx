import { RiCalendar2Line } from '@remixicon/react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Divider } from '@twistail/ui-react/components'

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Basic Components/Divider',
  tags: ['status:wip'],
}

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: () => <Divider />,
}

export const WithChildren: Story = {
  render: () => (
    <div className="w-96">
      <Divider />
      <Divider>
        <RiCalendar2Line className="h-5 w-5" />
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
    <>
      <p className="text-gray-500 text-sm dark:text-gray-500">Tickets Sold</p>
      <p className="font-semibold text-3xl text-gray-900 dark:text-gray-50">1,587</p>
      <Divider>Details</Divider>
      <p className="mt-2 text-gray-500 text-sm leading-7 dark:text-gray-500">
        Ticket sales peaked in March, largely due to the "March Mountain Madness" event on March
        12th, drawing significant tourist interest. Operational efficiencies and local hotel
        partnerships further boosted sales. Additionally, targeted social media promotions ahead of
        the event significantly increased online bookings.
      </p>
    </>
  ),
}

export const ButtonChild: Story = {
  render: () => (
    <Divider>
      <Button variant="secondary" className="rounded-full">
        Show more
      </Button>
    </Divider>
  ),
}
