import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import { TabNavigation, TabNavigationLink } from '#/components'

const meta: Meta<typeof TabNavigation> = {
  component: TabNavigation,
  title: 'Base Components/TabNavigation',
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
type Story = StoryObj<typeof TabNavigation>

export const Default: Story = {
  render: () => (
    <TabNavigation>
      <TabNavigationLink href="#" active>
        Home
      </TabNavigationLink>
      <TabNavigationLink href="#">Balances</TabNavigationLink>
      <TabNavigationLink href="#">Transactions</TabNavigationLink>
      <TabNavigationLink href="#" disabled>
        Customers
      </TabNavigationLink>
    </TabNavigation>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <TabNavigation>
      <TabNavigationLink href="#" active className="inline-flex gap-2">
        <Lucide.Home className="size-4" aria-hidden="true" />
        Home
      </TabNavigationLink>
      <TabNavigationLink href="#" className="inline-flex gap-2">
        <Lucide.CreditCard className="-ml-1 size-4" aria-hidden="true" />
        Balances
      </TabNavigationLink>
      <TabNavigationLink href="#" className="inline-flex gap-2">
        <Lucide.ReceiptText className="-ml-1 size-4" aria-hidden="true" />
        Transactions
      </TabNavigationLink>
      <TabNavigationLink href="#" className="inline-flex gap-2">
        <Lucide.UsersRound className="-ml-1 size-4" aria-hidden="true" />
        Customers
      </TabNavigationLink>
    </TabNavigation>
  ),
}
