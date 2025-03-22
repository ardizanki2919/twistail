'use client'

import * as Lucide from 'lucide-react'
import { useState } from 'react'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSubMenu,
  ContextMenuSubMenuContent,
  ContextMenuSubMenuTrigger,
  ContextMenuTrigger,
} from 'twistail-react/context-menu'

export default function ContextMenuDemo() {
  const [position, setPosition] = useState('bottom')
  const [showStatusBar, setShowStatusBar] = useState<boolean>(true)
  const [showActivityBar, setShowActivityBar] = useState<boolean>(false)
  const [showPanel, setShowPanel] = useState<boolean>(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[250px] w-[400px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuGroup>
          <ContextMenuItem shortcut="⌘S" inset>
            Account Settings
          </ContextMenuItem>
        </ContextMenuGroup>

        <ContextMenuSeparator />

        <ContextMenuGroup>
          <ContextMenuItem hint="Pro" inset>
            Manage workspace
          </ContextMenuItem>

          <ContextMenuSubMenu>
            <ContextMenuSubMenuTrigger inset>Invite users</ContextMenuSubMenuTrigger>
            <ContextMenuSubMenuContent>
              <ContextMenuItem>
                <span className="flex items-center gap-x-2">
                  <Lucide.MailPlus className="size-4 text-inherit" />
                  <span>Email</span>
                </span>
              </ContextMenuItem>

              <ContextMenuSubMenu>
                <ContextMenuSubMenuTrigger>
                  <span className="flex items-center gap-x-2">
                    <Lucide.MessageSquare className="size-4 text-inherit" />
                    <span>Message</span>
                  </span>
                </ContextMenuSubMenuTrigger>
                <ContextMenuSubMenuContent>
                  <ContextMenuItem>
                    <span className="flex items-center gap-x-2">
                      <Lucide.MessageCircle className="size-4 text-inherit" />
                      <span>Whatsapp</span>
                    </span>
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <span className="flex items-center gap-x-2">
                      <Lucide.Send className="size-4 text-inherit" />
                      <span>Telegram</span>
                    </span>
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <span className="flex items-center gap-x-2">
                      <Lucide.MessagesSquare className="size-4 text-inherit" />
                      <span>Discord</span>
                    </span>
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <span className="flex items-center gap-x-2">
                      <Lucide.Slack className="size-4 text-inherit" />
                      <span>Slack</span>
                    </span>
                  </ContextMenuItem>
                </ContextMenuSubMenuContent>
              </ContextMenuSubMenu>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <span className="flex items-center gap-x-2">
                  <Lucide.CirclePlus className="size-4 text-inherit" />
                  <span>More...</span>
                </span>
              </ContextMenuItem>
            </ContextMenuSubMenuContent>
          </ContextMenuSubMenu>
        </ContextMenuGroup>

        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={position} onValueChange={setPosition}>
          <ContextMenuRadioItem value="alpha" hint="A-Z">
            Alphabetical
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="alpha-reverse" hint="Z-A">
            Reverse Alphabetical
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="asc" hint="1-99">
            Created at
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />

        <ContextMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          Public
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
          Private
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel} disabled>
          Restricted
        </ContextMenuCheckboxItem>

        <ContextMenuSeparator />

        <ContextMenuItem>
          <span className="flex items-center gap-x-2">
            <Lucide.Activity className="size-4 text-inherit" />
            <span>Support</span>
          </span>
        </ContextMenuItem>
        <ContextMenuItem shortcut="⇧⌘Q">
          <span className="flex items-center gap-x-2">
            <Lucide.LogOut className="size-4 text-inherit" />
            <span>Sign out</span>
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
