// Tremor Switch [v0.0.1]

import { Switch as SwitchPrimitives } from 'radix-ui'
import * as React from 'react'
import { type SwitchStyles, switchStyles } from './switch.css'

interface SwitchProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, 'asChild'>,
    SwitchStyles {}

const Switch = React.forwardRef<React.ComponentRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, size, ...props }: SwitchProps, forwardedRef) => {
    const styles = switchStyles({ size })
    return (
      <SwitchPrimitives.Root ref={forwardedRef} className={styles.root({ className })} {...props}>
        <SwitchPrimitives.Thumb className={styles.thumb()} />
      </SwitchPrimitives.Root>
    )
  }
)

Switch.displayName = 'Switch'

export { Switch }
