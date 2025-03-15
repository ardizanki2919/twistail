import { Dialog as DialogPrimitives } from 'radix-ui'
import * as React from 'react'
import { dialogStyles } from './dialog.css'

const Dialog = (props: React.ComponentPropsWithoutRef<typeof DialogPrimitives.Root>) => {
  return <DialogPrimitives.Root {...props} />
}

const DialogTrigger = DialogPrimitives.Trigger
const DialogClose = DialogPrimitives.Close
const DialogPortal = DialogPrimitives.Portal

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Overlay>
>(({ className, ...props }, forwardedRef) => {
  const styles = dialogStyles()
  return (
    <DialogPrimitives.Overlay
      ref={forwardedRef}
      className={styles.overlay({ className })}
      {...props}
    />
  )
})

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content>
>(({ className, ...props }, forwardedRef) => {
  const styles = dialogStyles()
  return (
    <DialogPortal>
      <DialogOverlay>
        <DialogPrimitives.Content
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
  React.ComponentRef<typeof DialogPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Title>
>(({ className, ...props }, forwardedRef) => {
  const styles = dialogStyles()
  return (
    <DialogPrimitives.Title ref={forwardedRef} className={styles.title({ className })} {...props} />
  )
})

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Description>
>(({ className, ...props }, forwardedRef) => {
  const styles = dialogStyles()
  return (
    <DialogPrimitives.Description
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
