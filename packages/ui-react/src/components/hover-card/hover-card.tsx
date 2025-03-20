import { HoverCard as HoverCardPrimitive } from 'radix-ui'
import * as React from 'react'
import { hoverCardStyles } from './hover-card.css'

interface HoverCardProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root> {}

const HoverCard = ({ openDelay = 40, closeDelay = 40, ...props }: HoverCardProps) => {
  return <HoverCardPrimitive.Root openDelay={openDelay} closeDelay={closeDelay} {...props} />
}

const HoverCardTrigger = HoverCardPrimitive.Trigger
const HoverCardPortal = HoverCardPrimitive.Portal

const HoverCardContent = React.forwardRef<
  React.ComponentRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, forwardedRef) => (
  <HoverCardPortal>
    <HoverCardPrimitive.Content
      ref={forwardedRef}
      className={hoverCardStyles({ className })}
      sideOffset={sideOffset}
      align={align}
      {...props}
    />
  </HoverCardPortal>
))

HoverCard.displayName = 'HoverCard'
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardPortal }
