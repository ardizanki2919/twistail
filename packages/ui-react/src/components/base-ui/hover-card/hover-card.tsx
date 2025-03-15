import { HoverCard as HoverCardPrimitives } from 'radix-ui'
import * as React from 'react'
import { hoverCardStyles } from './hover-card.css'

interface HoverCardProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitives.Root> {}

const HoverCard = ({ openDelay = 40, closeDelay = 40, ...props }: HoverCardProps) => {
  return <HoverCardPrimitives.Root openDelay={openDelay} closeDelay={closeDelay} {...props} />
}

const HoverCardTrigger = HoverCardPrimitives.Trigger

const HoverCardContent = React.forwardRef<
  React.ComponentRef<typeof HoverCardPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitives.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitives.Content
    ref={ref}
    className={hoverCardStyles({ className })}
    sideOffset={sideOffset}
    align={align}
    {...props}
  />
))

HoverCard.displayName = 'HoverCard'
HoverCardContent.displayName = HoverCardPrimitives.Content.displayName
HoverCardTrigger.displayName = HoverCardPrimitives.Trigger.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
