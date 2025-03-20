import { Slot } from 'radix-ui'
import * as React from 'react'
import { cardStyles } from './card.css'

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot.Root : 'div'
    return <Comp ref={forwardedRef} className={cardStyles({ className })} {...props} />
  }
)

Card.displayName = 'Card'

export { Card, type CardProps }
