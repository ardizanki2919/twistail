import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui'
import * as React from 'react'
import { tabNavigationStyles } from './tab-navigation.css'

function getSubtree(
  options: { asChild: boolean | undefined; children: React.ReactNode },
  content: React.ReactNode | ((children: React.ReactNode) => React.ReactNode)
) {
  const { asChild, children } = options
  if (!asChild) return typeof content === 'function' ? content(children) : content

  const firstChild = React.Children.only(children) as React.ReactElement<{
    children?: React.ReactNode
  }>

  return React.cloneElement(
    firstChild,
    undefined,
    typeof content === 'function' ? content(firstChild.props.children) : content
  )
}

const TabNavigation = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Root>,
  Omit<
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>,
    'orientation' | 'defaultValue' | 'dir'
  >
>(({ className, children, ...props }, forwardedRef) => {
  const styles = tabNavigationStyles()
  return (
    <NavigationMenuPrimitive.Root ref={forwardedRef} {...props} asChild={false}>
      <NavigationMenuPrimitive.List className={styles.list({ className })}>
        {children}
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  )
})

const TabNavigationLink = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Link>,
  Omit<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>, 'onSelect'> & {
    disabled?: boolean
  }
>(({ asChild, disabled, className, children, ...props }, forwardedRef) => {
  const styles = tabNavigationStyles({ disabled })
  return (
    <NavigationMenuPrimitive.Item className={styles.item()} aria-disabled={disabled}>
      <NavigationMenuPrimitive.Link
        aria-disabled={disabled}
        className={styles.link()}
        ref={forwardedRef}
        onSelect={() => {}}
        asChild={asChild}
        {...props}
      >
        {getSubtree({ asChild, children }, (children) => (
          <span className={styles.linkInner({ className })}>{children}</span>
        ))}
      </NavigationMenuPrimitive.Link>
    </NavigationMenuPrimitive.Item>
  )
})

TabNavigation.displayName = 'TabNavigation'
TabNavigationLink.displayName = 'TabNavigationLink'

export { TabNavigation, TabNavigationLink }
