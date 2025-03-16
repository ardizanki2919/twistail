import { Switch as SwitchPrimitive } from 'radix-ui'
import * as React from 'react'
import { type SwitchStyles, switchStyles } from './switch.css'

interface SwitchProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, 'asChild'>,
    SwitchStyles {}

const Switch = React.forwardRef<React.ComponentRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, size, ...props }: SwitchProps, forwardedRef) => {
    const styles = switchStyles({ size })
    return (
      <SwitchPrimitive.Root ref={forwardedRef} className={styles.root({ className })} {...props}>
        <SwitchPrimitive.Thumb className={styles.thumb()} />
      </SwitchPrimitive.Root>
    )
  }
)

Switch.displayName = 'Switch'

export { Switch }
