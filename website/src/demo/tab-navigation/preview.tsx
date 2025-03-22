'use client'

import { TabNavigation, TabNavigationLink } from 'twistail-react/tab-navigation'

export default function TabNavigationDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center justify-center">
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
    </div>
  )
}
