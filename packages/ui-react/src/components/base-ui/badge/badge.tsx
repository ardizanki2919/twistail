// Tremor Badge [v0.0.1]

import { Slot } from 'radix-ui'
import * as React from 'react'
import { clx } from 'twistail-utils'
import { type BadgeStyles, badgeStyles } from './badge.css'

interface BadgeProps extends React.ComponentPropsWithoutRef<'span'>, BadgeStyles {
  asChild?: boolean
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, asChild = false, ...props }: BadgeProps, forwardedRef) => {
    const Comp = asChild ? Slot.Root : 'span'
    return (
      <Comp
        ref={forwardedRef}
        className={clx(badgeStyles({ variant }), className)}
        tremor-id="tremor-raw"
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge, type BadgeProps }
