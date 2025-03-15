// Tremor TabNavigation [v0.1.0]

import { NavigationMenu as NavigationMenuPrimitives } from 'radix-ui'
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
  React.ComponentRef<typeof NavigationMenuPrimitives.Root>,
  Omit<
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Root>,
    'orientation' | 'defaultValue' | 'dir'
  >
>(({ className, children, ...props }, forwardedRef) => {
  const styles = tabNavigationStyles()
  return (
    <NavigationMenuPrimitives.Root ref={forwardedRef} {...props} asChild={false}>
      <NavigationMenuPrimitives.List className={styles.list({ className })}>
        {children}
      </NavigationMenuPrimitives.List>
    </NavigationMenuPrimitives.Root>
  )
})

const TabNavigationLink = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitives.Link>,
  Omit<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Link>, 'onSelect'> & {
    disabled?: boolean
  }
>(({ asChild, disabled, className, children, ...props }, forwardedRef) => {
  const styles = tabNavigationStyles({ disabled })
  return (
    <NavigationMenuPrimitives.Item className={styles.item()} aria-disabled={disabled}>
      <NavigationMenuPrimitives.Link
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
      </NavigationMenuPrimitives.Link>
    </NavigationMenuPrimitives.Item>
  )
})

TabNavigation.displayName = 'TabNavigation'
TabNavigationLink.displayName = 'TabNavigationLink'

export { TabNavigation, TabNavigationLink }
