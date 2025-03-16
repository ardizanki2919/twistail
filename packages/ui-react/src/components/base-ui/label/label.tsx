import { Label as LabelPrimitive } from 'radix-ui'
import * as React from 'react'
import { labelStyles } from './label.css'

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  disabled?: boolean
}

const Label = React.forwardRef<React.ComponentRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, disabled, ...props }, forwardedRef) => (
    <LabelPrimitive.Root
      ref={forwardedRef}
      className={labelStyles({ disabled, className })}
      aria-disabled={disabled}
      {...props}
    />
  )
)

Label.displayName = 'Label'

export { Label }
