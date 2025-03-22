'use client'

import { Button } from 'twistail-react/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubMenu,
  DropdownMenuSubMenuContent,
  DropdownMenuSubMenuTrigger,
  DropdownMenuTrigger,
} from 'twistail-react/dropdown-menu'

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem shortcut="⇧⌘P">Profile</DropdownMenuItem>
          <DropdownMenuItem disabled shortcut="⌘B">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem shortcut="⌘S">Settings</DropdownMenuItem>
          <DropdownMenuItem shortcut="⌘K">Shortcuts</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem hint="Pro">Team</DropdownMenuItem>
          <DropdownMenuSubMenu>
            <DropdownMenuSubMenuTrigger>Invite users</DropdownMenuSubMenuTrigger>
            <DropdownMenuSubMenuContent>
              <DropdownMenuItem>Email</DropdownMenuItem>
              <DropdownMenuItem>Message</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>More...</DropdownMenuItem>
            </DropdownMenuSubMenuContent>
          </DropdownMenuSubMenu>
          <DropdownMenuItem shortcut="⌘+T">New Team</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
