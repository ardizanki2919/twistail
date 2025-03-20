import * as Lucide from 'lucide-react'
import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui'
import * as React from 'react'
import { type NavigationMenuStyles, navigationMenuStyles } from './navigation-menu.css'

const NavigationMenu = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, forwarderRef) => {
  const styles = navigationMenuStyles()
  return (
    <NavigationMenuPrimitive.Root
      ref={forwarderRef}
      className={styles.root({ className })}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
})

const NavigationMenuList = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, forwarderRef) => {
  const styles = navigationMenuStyles()
  return (
    <NavigationMenuPrimitive.List
      ref={forwarderRef}
      className={styles.list({ className })}
      {...props}
    />
  )
})

const NavigationMenuItem = NavigationMenuPrimitive.Item

const NavigationMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, forwarderRef) => {
  const styles = navigationMenuStyles()
  return (
    <NavigationMenuPrimitive.Trigger
      ref={forwarderRef}
      className={styles.trigger({ className })}
      {...props}
    >
      {children}{' '}
      <Lucide.ChevronDown
        className={styles.triggerIndicator()}
        aria-hidden="true"
        strokeWidth={2.5}
      />
    </NavigationMenuPrimitive.Trigger>
  )
})

const NavigationMenuContent = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, forwarderRef) => {
  const styles = navigationMenuStyles()
  return (
    <NavigationMenuPrimitive.Content
      ref={forwarderRef}
      className={styles.content({ className })}
      {...props}
    />
  )
})

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, forwarderRef) => {
  const styles = navigationMenuStyles()
  return (
    <div className={styles.viewportWrapper()}>
      <NavigationMenuPrimitive.Viewport
        className={styles.viewport({ className })}
        ref={forwarderRef}
        {...props}
      />
    </div>
  )
})

const NavigationMenuIndicator = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, forwarderRef) => {
  const styles = navigationMenuStyles()
  return (
    <NavigationMenuPrimitive.Indicator
      ref={forwarderRef}
      className={styles.indicator({ className })}
      {...props}
    >
      <div className={styles.indicatorInner()} />
    </NavigationMenuPrimitive.Indicator>
  )
})

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
