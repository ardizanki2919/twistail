import { Dialog as DialogPrimitive } from 'radix-ui'
import * as React from 'react'
import { dialogStyles } from './dialog.css'

const Dialog = (props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>) => {
  return <DialogPrimitive.Root {...props} />
}

const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close
const DialogPortal = DialogPrimitive.Portal

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, forwardedRef) => {
  const styles = dialogStyles()
  return (
    <DialogPrimitive.Overlay
      ref={forwardedRef}
      className={styles.overlay({ className })}
      {...props}
    />
  )
})

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, ...props }, forwardedRef) => {
  const styles = dialogStyles()
  return (
    <DialogPortal>
      <DialogOverlay>
        <DialogPrimitive.Content
          ref={forwardedRef}
          className={styles.content({ className })}
          {...props}
        />
      </DialogOverlay>
    </DialogPortal>
  )
})

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const styles = dialogStyles()
  return <div className={styles.header({ className })} {...props} />
}

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, forwardedRef) => {
  const styles = dialogStyles()
  return (
    <DialogPrimitive.Title ref={forwardedRef} className={styles.title({ className })} {...props} />
  )
})

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, forwardedRef) => {
  const styles = dialogStyles()
  return (
    <DialogPrimitive.Description
      ref={forwardedRef}
      className={styles.description({ className })}
      {...props}
    />
  )
})

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const styles = dialogStyles()
  return <div className={styles.footer({ className })} {...props} />
}

Dialog.displayName = 'Dialog'
DialogTrigger.displayName = 'DialogTrigger'
DialogClose.displayName = 'DialogClose'
DialogPortal.displayName = 'DialogPortal'
DialogOverlay.displayName = 'DialogOverlay'
DialogContent.displayName = 'DialogContent'
DialogHeader.displayName = 'DialogHeader'
DialogTitle.displayName = 'DialogTitle'
DialogDescription.displayName = 'DialogDescription'
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
