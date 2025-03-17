import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '#/components'
import { Drawer, DrawerBody, DrawerClose, DrawerTrigger } from '#/components'
import { DrawerFooter, DrawerHeader, DrawerTitle } from '#/components'
import { DrawerContent, DrawerDescription } from '#/components'

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Base Components/Drawer',
  tags: ['status:done'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => {
    return (
      <>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="secondary">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent className="sm:max-w-lg">
            <DrawerHeader>
              <DrawerTitle>Account Created Successfully</DrawerTitle>
              <DrawerDescription className="mt-1 text-sm">
                Your account has been created successfully. You can now login to your account. For
                more information, please contact us.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody>This is they body of the drawer, content goes here.</DrawerBody>
            <DrawerFooter className="mt-6">
              <DrawerClose asChild>
                <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="secondary">
                  Go back
                </Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button className="w-full sm:w-fit">Ok, got it!</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  },
}

const DRAWER_SIDES = ['top', 'right', 'bottom', 'left'] as const

export const Positions: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-2 gap-2">
        {DRAWER_SIDES.map((side) => (
          <Drawer key={side}>
            <DrawerTrigger asChild>
              <Button variant="secondary">{side}</Button>
            </DrawerTrigger>
            <DrawerContent className="sm:max-w-lg" side={side}>
              <DrawerHeader>
                <DrawerTitle>Account Created Successfully</DrawerTitle>
                <DrawerDescription className="mt-1 text-sm">
                  Your account has been created successfully. You can now login to your account. For
                  more information, please contact us.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerBody>This is they body of the drawer, content goes here.</DrawerBody>
              <DrawerFooter className="mt-6">
                <DrawerClose asChild>
                  <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="secondary">
                    Go back
                  </Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button className="w-full sm:w-fit">Ok, got it!</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="secondary">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent className="sm:max-w-lg">
            <DrawerHeader>
              <DrawerTitle>Account Created Successfully</DrawerTitle>
              <DrawerDescription className="mt-1 text-sm">
                Your account has been created successfully. You can now login to your account. For
                more information, please contact us.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody>This is they body of the drawer, content goes here.</DrawerBody>
            <DrawerFooter className="mt-6">
              <DrawerClose asChild>
                <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="secondary">
                  Go back
                </Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button className="w-full sm:w-fit">Ok, got it!</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  },
}
