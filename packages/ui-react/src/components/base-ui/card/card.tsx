// Tremor Card [v0.0.2]

import { Slot } from 'radix-ui'
import * as React from 'react'
import { clx } from 'twistail-utils'

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot.Root : 'div'
    return (
      <Comp
        ref={forwardedRef}
        className={clx(
          // base
          'relative w-full rounded-lg border p-6 text-left shadow-xs',
          // background color
          'bg-white dark:bg-gray-950',
          // border color
          'border-gray-200 dark:border-gray-900',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card, type CardProps }
