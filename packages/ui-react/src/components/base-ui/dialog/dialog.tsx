// Tremor Dialog [v0.0.1]

import * as DialogPrimitives from '@radix-ui/react-dialog'
import * as React from 'react'
import { cn } from 'twistail-utils'

const Dialog = (props: React.ComponentPropsWithoutRef<typeof DialogPrimitives.Root>) => {
  return <DialogPrimitives.Root {...props} />
}
Dialog.displayName = 'Dialog'

const DialogTrigger = DialogPrimitives.Trigger

DialogTrigger.displayName = 'DialogTrigger'

const DialogClose = DialogPrimitives.Close

DialogClose.displayName = 'DialogClose'

const DialogPortal = DialogPrimitives.Portal

DialogPortal.displayName = 'DialogPortal'

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Overlay>
>(({ className, ...props }, forwardedRef) => {
  return (
    <DialogPrimitives.Overlay
      ref={forwardedRef}
      className={cn(
        // base
        'fixed inset-0 z-50 overflow-y-auto',
        // background color
        'bg-black/70',
        // transition
        'data-[state=open]:motion-safe:motion-preset-fade data-[state=open]:motion-safe:motion-duration-300',
        'data-[state=closed]:motion-safe:motion-opacity-out-0 motion-duration-[0.25s]/opacity',
        className
      )}
      {...props}
    />
  )
})

DialogOverlay.displayName = 'DialogOverlay'

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content>
>(({ className, ...props }, forwardedRef) => {
  return (
    <DialogPortal>
      <DialogOverlay>
        <DialogPrimitives.Content
          ref={forwardedRef}
          className={cn(
            // base
            '-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-50 w-[95vw] max-w-lg overflow-y-auto rounded-md border p-6 shadow-lg',
            // border color
            'border-gray-200 dark:border-gray-900',
            // background color
            'bg-white dark:bg-[#090E1A]',
            // transition
            'data-[state=open]:motion-safe:motion-scale-in-[0.5] data-[state=open]:motion-safe:motion-opacity-in-[0%]',
            'data-[state=open]:motion-safe:motion-blur-in-[5px] data-[state=open]:motion-safe:motion-duration-[0.00s]',
            'data-[state=closed]:motion-safe:motion-scale-out-[0.5] data-[state=closed]:motion-safe:motion-opacity-out-0',
            'data-[state=closed]:motion-safe:motion-blur-out-[5px] data-[state=closed]:motion-safe:motion-duration-[0.00s]',
            'motion-duration-[0.29s]/scale motion-duration-[0.25s]/opacity motion-duration-[0.25s]/blur',
            // focus ring
            'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
            className
          )}
          tremor-id="tremor-raw"
          {...props}
        />
      </DialogOverlay>
    </DialogPortal>
  )
})

DialogContent.displayName = 'DialogContent'

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('flex flex-col gap-y-1', className)} {...props} />
}

DialogHeader.displayName = 'DialogHeader'

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Title>
>(({ className, ...props }, forwardedRef) => (
  <DialogPrimitives.Title
    ref={forwardedRef}
    className={cn(
      // base
      'font-semibold text-lg',
      // text color
      'text-gray-900 dark:text-gray-50',
      className
    )}
    {...props}
  />
))

DialogTitle.displayName = 'DialogTitle'

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Description>
>(({ className, ...props }, forwardedRef) => {
  return (
    <DialogPrimitives.Description
      ref={forwardedRef}
      className={cn('text-gray-500 dark:text-gray-500', className)}
      {...props}
    />
  )
})

DialogDescription.displayName = 'DialogDescription'

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...props}
    />
  )
}

DialogFooter.displayName = 'DialogFooter'

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
}
