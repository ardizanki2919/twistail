import { Label as LabelPrimitives } from 'radix-ui'
import * as React from 'react'
import { labelStyles } from './label.css'

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root> {
  disabled?: boolean
}

const Label = React.forwardRef<React.ComponentRef<typeof LabelPrimitives.Root>, LabelProps>(
  ({ className, disabled, ...props }, forwardedRef) => (
    <LabelPrimitives.Root
      ref={forwardedRef}
      className={labelStyles({ disabled, className })}
      aria-disabled={disabled}
      {...props}
    />
  )
)

Label.displayName = 'Label'

export { Label }
