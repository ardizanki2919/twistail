// Tremor Drawer [v0.0.2]

import * as DrawerPrimitives from '@radix-ui/react-dialog'
import { RiCloseLine } from '@remixicon/react'
import * as React from 'react'
import { Button } from 'twistail-react/components'
import { clx, focusRing } from 'twistail-react/utils'

const Drawer = (props: React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Root>) => {
  return <DrawerPrimitives.Root tremor-id="tremor-raw" {...props} />
}
Drawer.displayName = 'Drawer'

const DrawerTrigger = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Trigger>
>(({ className, ...props }, ref) => {
  return <DrawerPrimitives.Trigger ref={ref} className={clx(className)} {...props} />
})
DrawerTrigger.displayName = 'Drawer.Trigger'

const DrawerClose = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Close>
>(({ className, ...props }, ref) => {
  return <DrawerPrimitives.Close ref={ref} className={clx(className)} {...props} />
})
DrawerClose.displayName = 'Drawer.Close'

const DrawerPortal = DrawerPrimitives.Portal

DrawerPortal.displayName = 'DrawerPortal'

const DrawerOverlay = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Overlay>
>(({ className, ...props }, forwardedRef) => {
  return (
    <DrawerPrimitives.Overlay
      ref={forwardedRef}
      className={clx(
        // base
        'fixed inset-0 z-50 overflow-y-auto',
        // background color
        'bg-black/30',
        // transition
        'data-[state=closed]:animate-hide data-[state=open]:animate-dialogOverlayShow',
        className
      )}
      {...props}
      style={{
        animationDuration: '400ms',
        animationFillMode: 'backwards',
      }}
    />
  )
})

DrawerOverlay.displayName = 'DrawerOverlay'

const DrawerContent = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Content>
>(({ className, ...props }, forwardedRef) => {
  return (
    <DrawerPortal>
      <DrawerOverlay>
        <DrawerPrimitives.Content
          ref={forwardedRef}
          className={clx(
            // base
            'fixed inset-y-2 z-50 mx-auto flex w-[95vw] flex-1 flex-col overflow-y-auto rounded-md border p-4 shadow-lg focus:outline-none max-sm:inset-x-2 sm:inset-y-2 sm:right-2 sm:max-w-lg sm:p-6',
            // border color
            'border-slate-200 dark:border-slate-900',
            // background color
            'bg-white dark:bg-[#090E1A]',
            // transition
            'data-[state=closed]:animate-drawerSlideRightAndFade data-[state=open]:animate-drawerSlideLeftAndFade',
            focusRing,
            className
          )}
          {...props}
        />
      </DrawerOverlay>
    </DrawerPortal>
  )
})

DrawerContent.displayName = 'DrawerContent'

const DrawerHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className="flex items-start justify-between gap-x-4 border-slate-200 border-b pb-4 dark:border-slate-900"
        {...props}
      >
        <div className={clx('mt-1 flex flex-col gap-y-1', className)}>{children}</div>
        <DrawerPrimitives.Close asChild>
          <Button
            variant="ghost"
            className="aspect-square p-1 hover:bg-slate-100 hover:dark:bg-slate-400/10"
          >
            <RiCloseLine className="size-6" aria-hidden="true" />
          </Button>
        </DrawerPrimitives.Close>
      </div>
    )
  }
)

DrawerHeader.displayName = 'Drawer.Header'

const DrawerTitle = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Title>
>(({ className, ...props }, forwardedRef) => (
  <DrawerPrimitives.Title
    ref={forwardedRef}
    className={clx(
      // base
      'font-semibold text-base',
      // text color
      'text-slate-900 dark:text-slate-50',
      className
    )}
    {...props}
  />
))

DrawerTitle.displayName = 'DrawerTitle'

const DrawerBody = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={clx('flex-1 py-4', className)} {...props} />
  }
)
DrawerBody.displayName = 'Drawer.Body'

const DrawerDescription = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Description>
>(({ className, ...props }, forwardedRef) => {
  return (
    <DrawerPrimitives.Description
      ref={forwardedRef}
      className={clx('text-slate-500 dark:text-slate-500', className)}
      {...props}
    />
  )
})

DrawerDescription.displayName = 'DrawerDescription'

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clx(
        'flex flex-col-reverse border-slate-200 border-t pt-4 sm:flex-row sm:justify-end sm:space-x-2 dark:border-slate-900',
        className
      )}
      {...props}
    />
  )
}

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
