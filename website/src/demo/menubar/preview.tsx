'use client'

import * as Lucide from 'lucide-react'
import { useState } from 'react'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from 'twistail-react/menubar'

export default function MenubarDemo() {
  const [position, setPosition] = useState('benoit')
  const [showBookmarksBar, setShowBookmarksBar] = useState<boolean>(true)
  const [showFullURLs, setShowFullURLs] = useState<boolean>(true)
  const [showDeveloperTools, setShowDeveloperTools] = useState<boolean>(false)

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem shortcut="⌘T">New Tab</MenubarItem>
            <MenubarItem shortcut="⌘N">New Window</MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <span className="flex items-center gap-x-2">
                    <Lucide.Mail className="size-4 text-inherit" />
                    <span>Email link</span>
                  </span>
                </MenubarItem>
                <MenubarItem>
                  <span className="flex items-center gap-x-2">
                    <Lucide.MessageSquare className="size-4 text-inherit" />
                    <span>Messages</span>
                  </span>
                </MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger>
                    <span className="flex items-center gap-x-2">
                      <Lucide.Share2 className="size-4 text-inherit" />
                      <span>Social</span>
                    </span>
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>
                      <span className="flex items-center gap-x-2">
                        <Lucide.Twitter className="size-4 text-inherit" />
                        <span>Twitter</span>
                      </span>
                    </MenubarItem>
                    <MenubarItem>
                      <span className="flex items-center gap-x-2">
                        <Lucide.Facebook className="size-4 text-inherit" />
                        <span>Facebook</span>
                      </span>
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem shortcut="⌘P">Print...</MenubarItem>
          <MenubarItem shortcut="⌘Q">Exit</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem shortcut="⌘Z">Undo</MenubarItem>
          <MenubarItem shortcut="⇧⌘Z">Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem shortcut="⌘F">Find...</MenubarItem>
              <MenubarItem shortcut="⌘G">Find Next</MenubarItem>
              <MenubarItem shortcut="⇧⌘G">Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem shortcut="⌘X">Cut</MenubarItem>
          <MenubarItem shortcut="⌘C">Copy</MenubarItem>
          <MenubarItem shortcut="⌘V">Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={showBookmarksBar}
            onCheckedChange={setShowBookmarksBar}
            shortcut="⌘B"
          >
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={showFullURLs} onCheckedChange={setShowFullURLs}>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={showDeveloperTools}
            onCheckedChange={setShowDeveloperTools}
            shortcut="⌥⌘I"
          >
            Developer Tools
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset shortcut="⌘R">
            Reload
          </MenubarItem>
          <MenubarItem disabled inset shortcut="⇧⌘R">
            Force Reload
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset shortcut="F11">
            Toggle Fullscreen
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={position} onValueChange={setPosition}>
            <MenubarRadioItem value="andy" hint="Admin">
              Andy
            </MenubarRadioItem>
            <MenubarRadioItem value="benoit" hint="Owner">
              Benoit
            </MenubarRadioItem>
            <MenubarRadioItem value="luis" hint="Member">
              Luis
            </MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>
            <span className="flex items-center gap-x-2">
              <Lucide.UserPlus className="size-4 text-inherit" />
              <span>Add Profile...</span>
            </span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
