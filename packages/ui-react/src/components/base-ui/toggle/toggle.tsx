import { ToggleGroup as ToggleGroupPrimitives } from 'radix-ui'
import { Toggle as TogglePrimitives } from 'radix-ui'
import * as React from 'react'
import { toggleStyles } from './toggle.css'

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitives.Root>
>(({ className, ...props }, forwardedRef) => {
  const styles = toggleStyles()
  return (
    <TogglePrimitives.Root ref={forwardedRef} className={styles.base({ className })} {...props} />
  )
})

const ToggleGroup = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitives.Root>
>(({ className, ...props }, forwardedRef) => {
  const styles = toggleStyles()
  return (
    <ToggleGroupPrimitives.Root
      ref={forwardedRef}
      className={styles.group({ className })}
      {...props}
    />
  )
})

const ToggleGroupItem = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitives.Item>
>(({ className, ...props }, forwardedRef) => {
  const styles = toggleStyles()
  return (
    <ToggleGroupPrimitives.Item
      ref={forwardedRef}
      className={styles.base({ className })}
      {...props}
    />
  )
})

Toggle.displayName = TogglePrimitives.Root.displayName
ToggleGroup.displayName = ToggleGroupPrimitives.Root.displayName
ToggleGroupItem.displayName = ToggleGroupPrimitives.Item.displayName

export { Toggle, ToggleGroup, ToggleGroupItem }
