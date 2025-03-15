import { Tabs as TabsPrimitives } from 'radix-ui'
import * as React from 'react'
import { type TabsStyles, tabsStyles } from './tabs.css'

const Tabs = (
  props: Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitives.Root>, 'orientation'>
) => <TabsPrimitives.Root {...props} />

type TabsListVariant = NonNullable<TabsStyles['variant']>

const TabsListVariantContext = React.createContext<TabsListVariant>('line')

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitives.List> {
  variant?: TabsListVariant
}

const TabsList = React.forwardRef<React.ComponentRef<typeof TabsPrimitives.List>, TabsListProps>(
  ({ className, variant = 'line', children, ...props }, forwardedRef) => {
    const styles = tabsStyles({ variant })
    return (
      <TabsPrimitives.List ref={forwardedRef} className={styles.list({ className })} {...props}>
        <TabsListVariantContext.Provider value={variant}>
          {children}
        </TabsListVariantContext.Provider>
      </TabsPrimitives.List>
    )
  }
)

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger>
>(({ className, ...props }, forwardedRef) => {
  const variant = React.useContext(TabsListVariantContext)
  const styles = tabsStyles({ variant })
  return (
    <TabsPrimitives.Trigger
      ref={forwardedRef}
      className={styles.trigger({ className })}
      {...props}
    />
  )
})

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.Content>
>(({ className, ...props }, forwardedRef) => {
  const styles = tabsStyles()
  return (
    <TabsPrimitives.Content
      ref={forwardedRef}
      className={styles.content({ className })}
      {...props}
    />
  )
})

Tabs.displayName = 'Tabs'
TabsList.displayName = 'TabsList'
TabsTrigger.displayName = 'TabsTrigger'
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsContent, TabsList, TabsTrigger }
