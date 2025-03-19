import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import * as React from 'react'
import { Button, Command, CommandDialog, CommandEmpty, CommandGroup } from '#/components'
import { CommandInput, CommandItem, CommandList } from '#/components'
import { CommandSeparator, CommandShortcut, Kbd } from '#/components'

const meta: Meta<typeof Command> = {
  component: Command,
  title: 'Base Components/Command',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="w-[460px] rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className="min-w-[420px]">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Lucide.Calendar className="mr-2 size-4" strokeWidth={2} />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Lucide.Smile className="mr-2 size-4" strokeWidth={2} />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Lucide.Calculator className="mr-2 size-4" strokeWidth={2} />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <Lucide.User className="mr-2 size-4" strokeWidth={2} />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Lucide.CreditCard className="mr-2 size-4" strokeWidth={2} />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Lucide.Settings className="mr-2 size-4" strokeWidth={2} />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithTrigger: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open) => !open)
        }
      }
      document.addEventListener('keydown', down)
      return () => document.removeEventListener('keydown', down)
    }, [])

    return (
      <>
        <Button variant="outline" className="gap-2" onClick={() => setOpen((open) => !open)}>
          <span>Open Command</span>
          <Kbd keys={['command']}>J</Kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Lucide.Calendar className="mr-2 size-4" strokeWidth={2} />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Lucide.Smile className="mr-2 size-4" strokeWidth={2} />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Lucide.Calculator className="mr-2 size-4" strokeWidth={2} />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <Lucide.User className="mr-2 size-4" strokeWidth={2} />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Lucide.CreditCard className="mr-2 size-4" strokeWidth={2} />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Lucide.Settings className="mr-2 size-4" strokeWidth={2} />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    )
  },
}
