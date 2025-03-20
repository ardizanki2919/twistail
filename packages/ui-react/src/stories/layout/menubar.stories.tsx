import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import * as React from 'react'
import { Button } from '#/components/button'
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
} from '#/components/menubar'

const meta: Meta<typeof Menubar> = {
  component: Menubar,
  title: 'Layout Components/Menubar',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="flex w-full min-w-xl flex-col items-center justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Menubar>

export const Default: Story = {
  render: () => {
    const [position, setPosition] = React.useState('benoit')
    const [showBookmarksBar, setShowBookmarksBar] = React.useState<boolean>(true)
    const [showFullURLs, setShowFullURLs] = React.useState<boolean>(true)
    const [showDeveloperTools, setShowDeveloperTools] = React.useState<boolean>(false)

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
  },
}

export const GigaMenu: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => {
    return (
      <Menubar className="w-full max-w-screen-xl border-0 bg-background shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="font-medium">Products</MenubarTrigger>
          <MenubarContent className="grid w-[550px] grid-cols-2 gap-3 p-4" side="bottom">
            <div className="col-span-2">
              <h3 className="mb-2 font-semibold text-lg">Our Products</h3>
              <p className="mb-4 text-muted-foreground text-sm">
                Explore our complete suite of tools and services
              </p>
            </div>

            <div>
              <MenubarItem className="flex h-auto flex-col items-start p-3">
                <span className="mb-1 flex items-center gap-x-2">
                  <Lucide.Layers className="size-5 text-primary" />
                  <span className="font-medium">Analytics Platform</span>
                </span>
                <span className="text-muted-foreground text-xs">
                  Real-time data insights and visualization
                </span>
              </MenubarItem>

              <MenubarItem className="flex h-auto flex-col items-start p-3">
                <span className="mb-1 flex items-center gap-x-2">
                  <Lucide.Shield className="size-5 text-primary" />
                  <span className="font-medium">Security Suite</span>
                </span>
                <span className="text-muted-foreground text-xs">
                  Enterprise-grade protection for your data
                </span>
              </MenubarItem>
            </div>

            <div>
              <MenubarItem className="flex h-auto flex-col items-start p-3">
                <span className="mb-1 flex items-center gap-x-2">
                  <Lucide.Cloud className="size-5 text-primary" />
                  <span className="font-medium">Cloud Services</span>
                </span>
                <span className="text-muted-foreground text-xs">
                  Scalable infrastructure for your applications
                </span>
              </MenubarItem>

              <MenubarItem className="flex h-auto flex-col items-start p-3">
                <span className="mb-1 flex items-center gap-x-2">
                  <Lucide.Code2 className="size-5 text-primary" />
                  <span className="font-medium">Developer Tools</span>
                </span>
                <span className="text-muted-foreground text-xs">Build better software, faster</span>
              </MenubarItem>
            </div>

            <div className="-my-1 col-span-2 mt-2 border-t pt-2">
              <MenubarItem className="flex items-center gap-x-2 py-2">
                <Lucide.ExternalLink className="size-4 text-muted-foreground" />
                <span>View all products</span>
              </MenubarItem>
            </div>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="font-medium">Solutions</MenubarTrigger>
          <MenubarContent className="w-[450px] p-4">
            <div className="grid grid-cols-1 gap-2">
              <h3 className="mb-2 font-semibold text-lg">Solutions by Industry</h3>

              <MenubarItem className="p-2">
                <span className="flex items-center gap-x-2">
                  <Lucide.Building2 className="size-4 text-primary" />
                  <span>Enterprise</span>
                </span>
              </MenubarItem>

              <MenubarItem className="p-2">
                <span className="flex items-center gap-x-2">
                  <Lucide.ShoppingCart className="size-4 text-primary" />
                  <span>E-commerce</span>
                </span>
              </MenubarItem>

              <MenubarItem className="p-2">
                <span className="flex items-center gap-x-2">
                  <Lucide.Stethoscope className="size-4 text-primary" />
                  <span>Healthcare</span>
                </span>
              </MenubarItem>

              <MenubarItem className="p-2">
                <span className="flex items-center gap-x-2">
                  <Lucide.GraduationCap className="size-4 text-primary" />
                  <span>Education</span>
                </span>
              </MenubarItem>
            </div>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="font-medium">Resources</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Documentation</MenubarItem>
            <MenubarItem>Guides</MenubarItem>
            <MenubarItem>Blog</MenubarItem>
            <MenubarItem>Webinars</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="font-medium">Pricing</MenubarTrigger>
        </MenubarMenu>

        <div className="ml-auto flex items-center gap-x-2">
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Button variant="secondary" size="sm">
                Sign In
              </Button>
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="text-white" asChild>
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </MenubarTrigger>
          </MenubarMenu>
        </div>
      </Menubar>
    )
  },
}
