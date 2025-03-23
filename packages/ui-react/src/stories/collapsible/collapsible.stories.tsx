import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import { Button } from '#/components/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '#/components/collapsible'

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  title: 'Base Components/Collapsible',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'The controlled open state of the collapsible',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'The default open state when initially rendered',
    },
  },
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2" defaultOpen>
      <div className="flex w-full items-center justify-between space-x-4 pr-0 pl-4">
        <h4 className="font-semibold text-sm">@riipandi starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <Lucide.ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const Notifications: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex w-full items-center justify-between space-x-4 pr-0 pl-4">
        <h4 className="font-semibold text-sm">Notifications (3)</h4>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="icon">
            <Lucide.Bell className="size-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md bg-muted px-4 py-3 text-sm">New message from @john</div>
        <div className="rounded-md bg-muted px-4 py-3 text-sm">Your order has shipped!</div>
        <div className="rounded-md bg-muted px-4 py-3 text-sm">Welcome to the platform</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const Settings: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex w-full items-center justify-between space-x-4 pr-0 pl-4">
        <h4 className="font-semibold text-sm">Advanced Settings</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <Lucide.Settings className="mr-2 size-4" />
            <span>Configure</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h4 className="font-medium text-sm">Developer Mode</h4>
              <p className="text-muted-foreground text-sm">Enable advanced features</p>
            </div>
            <Button variant="outline" size="sm">
              Enable
            </Button>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
