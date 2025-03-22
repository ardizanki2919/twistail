'use client'

import * as Lucide from 'lucide-react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from 'twistail-react/command'

export default function CommandDemo() {
  return (
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
  )
}
