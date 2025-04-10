import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '#/components/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '#/components/dialog'
import { Divider } from '#/components/divider'
import { Input } from '#/components/input'
import { Label } from '#/components/label'
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '#/components/popover'

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: 'Base Components/Popover',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button variant="primary">Open</Button>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here</PopoverContent>
    </Popover>
  ),
}

export const WithSeperator: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <p className="p-2">Place content for the popover here</p>
        <Divider className="my-0" />
        <p className="p-2">Place content for the popover here</p>
      </PopoverContent>
    </Popover>
  ),
}

export const Close: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Form</Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <form>
          <div className="flex flex-col gap-2 p-2">
            <label htmlFor="number">Salary</label>
            <Input id="number" name="number" type="number" placeholder="$100K" />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" placeholder="Emma" />
          </div>
          <div className="flex items-center gap-2 border-gray-200 border-t p-2 dark:border-gray-800">
            <PopoverClose asChild>
              <Button className="w-full" variant="secondary" size="sm">
                Clear
              </Button>
            </PopoverClose>
            <Button className="mx-auto w-full" type="submit" size="sm">
              Apply
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  ),
}

export const PopoverInDialog: Story = {
  render: () => {
    const [dialogOpen, setDialogOpen] = React.useState(false)
    return (
      <>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Select shirt size</DialogTitle>
              <DialogDescription className="text-sm leading-7">Shirt type</DialogDescription>
              <Popover>
                <PopoverTrigger asChild>
                  <Button>Open</Button>
                </PopoverTrigger>
                <PopoverContent className="z-50 p-0">
                  <form>
                    <div className="flex flex-col gap-2 p-2">
                      <label htmlFor="number">Salary</label>
                      <Input id="number" name="number" type="number" placeholder="$100K" />
                    </div>
                    <div className="flex flex-col gap-2 p-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" type="text" placeholder="Emma" />
                    </div>
                    <div className="flex items-center gap-2 border-gray-200 border-t p-2 dark:border-gray-800">
                      <PopoverClose asChild>
                        <Button className="w-full" variant="secondary">
                          Clear
                        </Button>
                      </PopoverClose>
                      <Button className="mx-auto w-full" type="submit">
                        Apply
                      </Button>
                    </div>
                  </form>
                </PopoverContent>
              </Popover>
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
