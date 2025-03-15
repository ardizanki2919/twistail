import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button, ScrollArea, ScrollBar } from '#/components'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '#/components'
import { DialogFooter, DialogHeader, DialogTitle } from '#/components'
import { DialogDescription } from '#/components'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Base Components/Dialog',
  tags: ['status:preview'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="p-4 sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription asChild>
            <ScrollArea className="mt-2 rounded-md border">
              <div className="max-h-96 w-full p-2 pr-4 text-foreground text-sm/6">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies, odio quis
                  blandit vestibulum, orci elit suscipit urna, at lobortis arcu enim vel purus.
                  Maecenas luctus sem dui, lobortis dignissim enim consequat in. Nullam a volutpat
                  purus. Aenean pellentesque eros nec rutrum suscipit. Fusce ac lectus volutpat,
                  feugiat nulla et, suscipit dui. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Ut maximus, risus et convallis
                  placerat, risus urna feugiat neque, in vestibulum leo arcu vitae justo. Duis magna
                  mi, maximus at neque sed, tempor congue ligula. In iaculis metus nec euismod
                  egestas. Donec id porttitor nulla. Donec feugiat iaculis lacus, ut elementum dui
                  faucibus sed. Sed ut ipsum non tellus dignissim accumsan. Vivamus luctus malesuada
                  lacus sed dictum.
                </p>
                <p className="pb-2">
                  Sed consectetur nibh mollis, ornare magna et, dictum tellus. Nam viverra dui a
                  enim iaculis, sed blandit orci consectetur. Maecenas et nisi eleifend velit
                  pretium eleifend sit amet eget nisl. Vestibulum eget ipsum semper purus pulvinar
                  iaculis. Sed ut odio eu felis porttitor ultrices eu sed odio. Nullam lorem sapien,
                  pellentesque convallis libero vel, tempus accumsan nisi. Morbi efficitur ex vitae
                  felis luctus cursus. Suspendisse nibh neque, gravida sed elementum ullamcorper,
                  gravida in nisi. Donec et luctus metus. Fusce sed est dictum, imperdiet nisi eu,
                  suscipit odio. In id enim at tortor malesuada vulputate eu eu sem. Mauris blandit
                  faucibus euismod.
                </p>
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button className="mt-2 w-full sm:mt-0" variant="secondary">
              Accept
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const AlertDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Account Deleted Successfully</DialogTitle>
          <DialogDescription className="mt-1 text-sm/6">
            Warning: This action cannot be undone. This will permanently delete your account and
            remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" className="w-full sm:w-fit">
              Continue
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Account Created Successfully</DialogTitle>
            <DialogDescription className="mt-1 text-sm/6">
              Your account has been created successfully. You can now login to your account. For
              more information, please contact us.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="outline">
                Go back
              </Button>
            </DialogClose>
            <Button className="w-full sm:w-fit" onClick={() => setOpen(!open)}>
              Ok, got it!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}
