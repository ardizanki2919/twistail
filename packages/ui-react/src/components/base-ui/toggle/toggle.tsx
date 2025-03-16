import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui'
import { Toggle as TogglePrimitive } from 'radix-ui'
import * as React from 'react'
import { toggleStyles } from './toggle.css'

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, forwardedRef) => {
  const styles = toggleStyles()
  return (
    <TogglePrimitive.Root ref={forwardedRef} className={styles.base({ className })} {...props} />
  )
})

const ToggleGroup = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, ...props }, forwardedRef) => {
  const styles = toggleStyles()
  return (
    <ToggleGroupPrimitive.Root
      ref={forwardedRef}
      className={styles.group({ className })}
      {...props}
    />
  )
})

const ToggleGroupItem = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, ...props }, forwardedRef) => {
  const styles = toggleStyles()
  return (
    <ToggleGroupPrimitive.Item
      ref={forwardedRef}
      className={styles.base({ className })}
      {...props}
    />
  )
})

Toggle.displayName = TogglePrimitive.Root.displayName
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { Toggle, ToggleGroup, ToggleGroupItem }
