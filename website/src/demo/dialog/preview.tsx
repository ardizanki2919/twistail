'use client'

import { Button } from 'twistail-react/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogDivider,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'twistail-react/dialog'

export default function DialogDemo() {
  return (
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
  )
}
