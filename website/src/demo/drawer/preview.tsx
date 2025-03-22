'use client'

import { Button } from 'twistail-react/button'
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from 'twistail-react/drawer'

export default function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-lg">
        <DrawerHeader>
          <DrawerTitle>Account Created Successfully</DrawerTitle>
          <DrawerDescription className="mt-1 text-sm">
            Your account has been created successfully. You can now login to your account. For more
            information, please contact us.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody className="py-4">
          This is they body of the drawer, content goes here.
        </DrawerBody>
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
  )
}
