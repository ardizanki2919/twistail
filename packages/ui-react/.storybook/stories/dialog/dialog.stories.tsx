import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@twistail/ui-react/components'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@twistail/ui-react/components'
import { DialogFooter, DialogHeader, DialogTitle } from '@twistail/ui-react/components'
import { DialogDescription } from '@twistail/ui-react/components'
import React from 'react'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Basic Components/Dialog',
  tags: ['status:wip'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => {
    return (
      <>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Account Created Successfully</DialogTitle>
              <DialogDescription className="mt-1 text-sm/7">
                Your account has been created successfully. You can now login to your account. For
                more information, please contact us.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="secondary">
                  Go back
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button className="w-full sm:w-fit">Ok, got it!</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Account Created Successfully</DialogTitle>
              <DialogDescription className="mt-1 text-sm/7">
                Your account has been created successfully. You can now login to your account. For
                more information, please contact us.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="secondary">
                  Go back
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button className="w-full sm:w-fit">Ok, got it!</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}
