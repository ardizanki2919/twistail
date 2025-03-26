import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '#/components/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogDivider,
  DialogFooter,
  DialogHeader,
  type DialogProps,
  DialogTitle,
  DialogTrigger,
} from '#/components/dialog'
import { ScrollArea, ScrollBar } from '#/components/scroll-area'

const meta: Meta<DialogProps> = {
  component: Dialog,
  title: 'Base Components/Dialog',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    spacing: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Controls the spacing of the dialog content',
      table: {
        type: { summary: 'default | compact' },
        defaultValue: { summary: 'default' },
      },
    },
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
      <DialogContent className="sm:max-w-sm">
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
                  feugiat nulla et, suscipit dui.
                </p>
                <p className="pb-2">
                  Sed consectetur nibh mollis, ornare magna et, dictum tellus. Nam viverra dui a
                  enim iaculis, sed blandit orci consectetur. Maecenas et nisi eleifend velit
                  pretium eleifend sit amet eget nisl. Vestibulum eget ipsum semper purus pulvinar
                  iaculis.
                </p>
                <p className="pb-2">
                  Maecenas et nisi eleifend velit pretium eleifend sit amet eget nisl. Vestibulum
                  eget ipsum semper purus pulvinar iaculis. Nullam a volutpat purus. Aenean
                  pellentesque eros nec rutrum suscipit. Fusce ac lectus volutpat, feugiat nulla et,
                  suscipit dui.
                </p>
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full" variant="secondary">
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
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Warning: This action cannot be undone. This will permanently delete your account and
            remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full sm:w-fit" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" className="w-full sm:w-fit">
              Delete Account
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithDivider: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Terms & Conditions</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read our terms and conditions carefully before proceeding.
          </DialogDescription>
        </DialogHeader>
        <DialogDivider />
        <div className="max-h-[200px] overflow-y-auto text-sm">
          <p className="mb-4">
            By accessing or using our services, you agree to be bound by these Terms of Service. If
            you do not agree to these terms, please do not use our services.
          </p>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of our
            services following any changes constitutes your acceptance of the new Terms of Service.
          </p>
        </div>
        <DialogDivider />
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full sm:w-fit" variant="outline">
              Decline
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className="w-full sm:w-fit">Accept</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const CompactDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Compact Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xs" spacing="compact">
        <DialogHeader>
          <DialogTitle>Notification Settings</DialogTitle>
        </DialogHeader>
        <div className="mt-2 space-y-2 text-sm">
          <p>
            Compact dialogs use less space and are ideal for simple interactions or when screen real
            estate is limited.
          </p>
        </div>
        <DialogDivider />
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full" size="sm">
              Save Changes
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
          <Button variant="outline">Controlled Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Account Created Successfully</DialogTitle>
            <DialogDescription>Your account has been created successfully.</DialogDescription>
          </DialogHeader>
          <DialogDivider />
          <div className="text-muted-foreground text-sm">
            <p>
              This is a controlled dialog example where the open state is managed externally. This
              gives you more control over when the dialog opens and closes.
            </p>
          </div>
          <DialogDivider />
          <DialogFooter>
            <DialogClose asChild>
              <Button className="w-full sm:w-fit" variant="outline">
                Go back
              </Button>
            </DialogClose>
            <Button className="w-full sm:w-fit" onClick={() => setOpen(false)}>
              Ok, got it!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}
