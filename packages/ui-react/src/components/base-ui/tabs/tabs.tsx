// Tremor Tabs [v0.1.0]

import * as TabsPrimitives from '@radix-ui/react-tabs'
import React from 'react'
import { clx, focusRing } from 'twistail-react/utils'

const Tabs = (
  props: Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitives.Root>, 'orientation'>
) => {
  return <TabsPrimitives.Root tremor-id="tremor-raw" {...props} />
}

Tabs.displayName = 'Tabs'

type TabsListVariant = 'line' | 'solid'

const TabsListVariantContext = React.createContext<TabsListVariant>('line')

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitives.List> {
  variant?: TabsListVariant
}

const variantStyles: Record<TabsListVariant, string> = {
  line: clx(
    // base
    'flex items-center justify-start border-b',
    // border color
    'border-slate-200 dark:border-slate-800'
  ),
  solid: clx(
    // base
    'inline-flex items-center justify-center rounded-md p-1',
    // background color
    'bg-slate-100 dark:bg-slate-900'
  ),
}

const TabsList = React.forwardRef<React.ComponentRef<typeof TabsPrimitives.List>, TabsListProps>(
  ({ className, variant = 'line', children, ...props }, forwardedRef) => (
    <TabsPrimitives.List
      ref={forwardedRef}
      className={clx(variantStyles[variant], className)}
      {...props}
    >
      <TabsListVariantContext.Provider value={variant}>{children}</TabsListVariantContext.Provider>
    </TabsPrimitives.List>
  )
)

TabsList.displayName = 'TabsList'

function getVariantStyles(tabVariant: TabsListVariant) {
  switch (tabVariant) {
    case 'line':
      return clx(
        // base
        '-mb-px items-center justify-center whitespace-nowrap border-transparent border-b-2 px-3 pb-2 font-medium text-sm transition-all',
        // text color
        'text-slate-500 dark:text-slate-500',
        // hover
        'hover:text-slate-700 hover:dark:text-slate-400',
        // border hover
        'hover:border-slate-300 hover:dark:border-slate-400',
        // selected
        'data-[state=active]:border-blue-500 data-[state=active]:text-blue-500',
        'data-[state=active]:dark:border-blue-500 data-[state=active]:dark:text-blue-500',
        // disabled
        'data-[disabled]:pointer-events-none',
        'data-[disabled]:text-slate-300 data-[disabled]:dark:text-slate-700'
      )
    case 'solid':
      return clx(
        // base
        'inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1 font-medium text-sm ring-1 ring-inset transition-all',
        // text color
        'text-slate-500 dark:text-slate-400',
        // hover
        'hover:text-slate-700 hover:dark:text-slate-200',
        // ring
        'ring-transparent',
        // selected
        'data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow',
        'data-[state=active]:dark:bg-slate-950 data-[state=active]:dark:text-slate-50',
        // disabled
        'data-[disabled]:pointer-events-none data-[disabled]:text-slate-400 data-[disabled]:opacity-50 data-[disabled]:dark:text-slate-600'
      )
  }
}

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger>
>(({ className, children, ...props }, forwardedRef) => {
  const variant = React.useContext(TabsListVariantContext)
  return (
    <TabsPrimitives.Trigger
      ref={forwardedRef}
      className={clx(getVariantStyles(variant), focusRing, className)}
      {...props}
    >
      {children}
    </TabsPrimitives.Trigger>
  )
})

TabsTrigger.displayName = 'TabsTrigger'

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.Content>
>(({ className, ...props }, forwardedRef) => (
  <TabsPrimitives.Content
    ref={forwardedRef}
    className={clx('outline-none', focusRing, className)}
    {...props}
  />
))

TabsContent.displayName = 'TabsContent'

export { Tabs, TabsContent, TabsList, TabsTrigger }
