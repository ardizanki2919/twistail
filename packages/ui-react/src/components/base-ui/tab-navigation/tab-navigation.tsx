// Tremor TabNavigation [v0.1.0]

import * as NavigationMenuPrimitives from '@radix-ui/react-navigation-menu'
import { clx, focusRing } from '@twistail/react/utils'
import React from 'react'

function getSubtree(
  options: { asChild: boolean | undefined; children: React.ReactNode },
  content: React.ReactNode | ((children: React.ReactNode) => React.ReactNode)
) {
  const { asChild, children } = options
  if (!asChild) return typeof content === 'function' ? content(children) : content

  const firstChild = React.Children.only(children) as React.ReactElement
  return React.cloneElement(firstChild, {
    // FIXME: This is a workaround to make the `asChild` prop work.
    // @ts-ignore
    children: typeof content === 'function' ? content(firstChild.props.children) : content,
  })
}

const TabNavigation = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitives.Root>,
  Omit<
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Root>,
    'orientation' | 'defaultValue' | 'dir'
  >
>(({ className, children, ...props }, forwardedRef) => (
  <NavigationMenuPrimitives.Root
    ref={forwardedRef}
    {...props}
    tremor-id="tremor-raw"
    asChild={false}
  >
    <NavigationMenuPrimitives.List
      className={clx(
        // base
        'flex items-center justify-start whitespace-nowrap border-b [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
        // border color
        'border-slate-200 dark:border-slate-800',
        className
      )}
    >
      {children}
    </NavigationMenuPrimitives.List>
  </NavigationMenuPrimitives.Root>
))

TabNavigation.displayName = 'TabNavigation'

const TabNavigationLink = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitives.Link>,
  Omit<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Link>, 'onSelect'> & {
    disabled?: boolean
  }
>(({ asChild, disabled, className, children, ...props }, forwardedRef) => (
  <NavigationMenuPrimitives.Item className="flex" aria-disabled={disabled}>
    <NavigationMenuPrimitives.Link
      aria-disabled={disabled}
      className={clx(
        'group relative flex shrink-0 select-none items-center justify-center',
        disabled ? 'pointer-events-none' : ''
      )}
      ref={forwardedRef}
      onSelect={() => {}}
      asChild={asChild}
      {...props}
    >
      {getSubtree({ asChild, children }, (children) => (
        <span
          className={clx(
            // base
            '-mb-px flex items-center justify-center whitespace-nowrap border-transparent border-b-2 px-3 pb-2 font-medium text-sm transition-all',
            // text color
            'text-slate-500 dark:text-slate-500',
            // hover
            'group-hover:text-slate-700 group-hover:dark:text-slate-400',
            // border hover
            'group-hover:border-slate-300 group-hover:dark:border-slate-400',
            // selected
            'group-data-[active]:border-blue-500 group-data-[active]:text-blue-500',
            'group-data-[active]:dark:border-blue-500 group-data-[active]:dark:text-blue-500',
            // disabled
            disabled ? 'pointer-events-none text-slate-300 dark:text-slate-700' : '',
            focusRing,
            className
          )}
        >
          {children}
        </span>
      ))}
    </NavigationMenuPrimitives.Link>
  </NavigationMenuPrimitives.Item>
))

TabNavigationLink.displayName = 'TabNavigationLink'

export { TabNavigation, TabNavigationLink }
