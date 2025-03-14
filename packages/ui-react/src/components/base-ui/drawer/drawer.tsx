// Tremor Drawer [v0.0.2]

import * as Lucide from 'lucide-react'
import { Dialog as DrawerPrimitives } from 'radix-ui'
import * as React from 'react'
import { Button } from 'twistail-react'
import { type DrawerStyles, drawerStyles } from './drawer.css'

const Drawer = (props: React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Root>) => {
  return <DrawerPrimitives.Root {...props} />
}

const DrawerTrigger = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Trigger>
>(({ className, ...props }, ref) => {
  const styles = drawerStyles()
  return <DrawerPrimitives.Trigger ref={ref} className={styles.trigger({ className })} {...props} />
})

const DrawerClose = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Close>
>(({ className, ...props }, ref) => {
  const styles = drawerStyles()
  return <DrawerPrimitives.Close ref={ref} className={styles.close({ className })} {...props} />
})

const DrawerPortal = DrawerPrimitives.Portal

const DrawerOverlay = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Overlay>
>(({ className, ...props }, forwardedRef) => {
  const styles = drawerStyles()
  return (
    <DrawerPrimitives.Overlay
      ref={forwardedRef}
      className={styles.overlay({ className })}
      {...props}
    />
  )
})

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Content>,
    DrawerStyles {}

const DrawerContent = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitives.Content>,
  DrawerContentProps
>(({ side = 'right', className, ...props }, forwardedRef) => {
  const styles = drawerStyles({ side })
  return (
    <DrawerPortal>
      <DrawerOverlay>
        <DrawerPrimitives.Content
          ref={forwardedRef}
          className={styles.content({ className })}
          {...props}
        />
      </DrawerOverlay>
    </DrawerPortal>
  )
})

const DrawerHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ children, className, ...props }, ref) => {
    const styles = drawerStyles()
    return (
      <div ref={ref} className={styles.headerRoot()} {...props}>
        <div className={styles.header({ className })}>{children}</div>
        <DrawerPrimitives.Close asChild>
          <Button variant="ghost" className={styles.headerCloseButton()} size="sm">
            <Lucide.X className={styles.headerCloseIcon()} aria-hidden="true" strokeWidth={2} />
          </Button>
        </DrawerPrimitives.Close>
      </div>
    )
  }
)

const DrawerTitle = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Title>
>(({ className, ...props }, forwardedRef) => {
  const styles = drawerStyles()
  return (
    <DrawerPrimitives.Title ref={forwardedRef} className={styles.title({ className })} {...props} />
  )
})

const DrawerBody = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    const styles = drawerStyles()
    return <div ref={ref} className={styles.body({ className })} {...props} />
  }
)

const DrawerDescription = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Description>
>(({ className, ...props }, forwardedRef) => {
  const styles = drawerStyles()
  return (
    <DrawerPrimitives.Description
      ref={forwardedRef}
      className={styles.description({ className })}
      {...props}
    />
  )
})

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const styles = drawerStyles()
  return <div className={styles.footer({ className })} {...props} />
}

Drawer.displayName = 'Drawer'
DrawerTrigger.displayName = 'Drawer.Trigger'
DrawerClose.displayName = 'Drawer.Close'
DrawerPortal.displayName = 'DrawerPortal'
DrawerOverlay.displayName = 'DrawerOverlay'
DrawerContent.displayName = 'DrawerContent'
DrawerHeader.displayName = 'Drawer.Header'
DrawerTitle.displayName = 'DrawerTitle'
DrawerBody.displayName = 'Drawer.Body'
DrawerDescription.displayName = 'DrawerDescription'
DrawerFooter.displayName = 'DrawerFooter'

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
}
