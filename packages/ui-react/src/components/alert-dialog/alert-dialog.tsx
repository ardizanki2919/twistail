import { AlertDialog as AlertDialogPrimitive } from 'radix-ui'
import * as React from 'react'
import { type ButtonProps, buttonStyles } from '#/components/button'
import { type AlertDialogStyles, alertDialogStyles } from './alert-dialog.css'

interface AlertDialogProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root>,
    AlertDialogStyles {}

const AlertDialog = AlertDialogPrimitive.Root
const AlertDialogTrigger = AlertDialogPrimitive.Trigger
const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, fowardedRef) => {
  const styles = alertDialogStyles()
  return (
    <AlertDialogPrimitive.Overlay
      ref={fowardedRef}
      className={styles.overlay({ className })}
      {...props}
    />
  )
})

const AlertDialogContent = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & AlertDialogStyles
>(({ className, spacing, ...props }, fowardedRef) => {
  const styles = alertDialogStyles({ spacing })
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        ref={fowardedRef}
        className={styles.content({ className })}
        {...props}
      />
    </AlertDialogPortal>
  )
})

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const styles = alertDialogStyles()
  return <div className={styles.header({ className })} {...props} />
}

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const styles = alertDialogStyles()
  return <div className={styles.footer({ className })} {...props} />
}

const AlertDialogTitle = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, fowardedRef) => {
  const styles = alertDialogStyles()
  return (
    <AlertDialogPrimitive.Title
      ref={fowardedRef}
      className={styles.title({ className })}
      {...props}
    />
  )
})

const AlertDialogDescription = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, fowardedRef) => {
  const styles = alertDialogStyles()
  return (
    <AlertDialogPrimitive.Description
      ref={fowardedRef}
      className={styles.description({ className })}
      {...props}
    />
  )
})

const AlertDialogDivider = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const styles = alertDialogStyles()
  return <div className={styles.divider({ className })} {...props} />
}

interface AlertDialogActionProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>,
    Pick<ButtonProps, 'variant' | 'size'> {}

const AlertDialogAction = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionProps
>(({ className, variant = 'primary', size, ...props }, fowardedRef) => {
  const styles = buttonStyles({ variant, size })
  return (
    <AlertDialogPrimitive.Action
      ref={fowardedRef}
      className={styles.base({ className })}
      {...props}
    />
  )
})

interface AlertDialogCancelProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>,
    Pick<ButtonProps, 'variant' | 'size'> {}

const AlertDialogCancel = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Cancel>,
  AlertDialogCancelProps
>(({ className, size, ...props }, fowardedRef) => {
  const styles = buttonStyles({ variant: 'outline', size })
  return (
    <AlertDialogPrimitive.Cancel
      ref={fowardedRef}
      className={styles.base({ className })}
      {...props}
    />
  )
})

AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName
AlertDialogHeader.displayName = 'AlertDialogHeader'
AlertDialogFooter.displayName = 'AlertDialogFooter'
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName
AlertDialogDivider.displayName = 'AlertDialogDivider'

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDivider,
  type AlertDialogProps,
}
