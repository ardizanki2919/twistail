import { Popover as PopoverPrimitives } from 'radix-ui'
import * as React from 'react'
import { popoverStyles } from './popover.css'

const Popover = (props: React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Root>) => {
  return <PopoverPrimitives.Root {...props} />
}

const PopoverTrigger = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Trigger>
>((props, forwardedRef) => {
  return <PopoverPrimitives.Trigger ref={forwardedRef} {...props} />
})

const PopoverAnchor = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitives.Anchor>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Anchor>
>((props, forwardedRef) => {
  return <PopoverPrimitives.Anchor ref={forwardedRef} {...props} />
})

const PopoverClose = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Close>
>((props, forwardedRef) => {
  return <PopoverPrimitives.Close ref={forwardedRef} {...props} />
})

type ContentProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Content>

const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitives.Content>,
  ContentProps
>(
  (
    {
      className,
      sideOffset = 10,
      side = 'bottom',
      align = 'center',
      collisionPadding,
      avoidCollisions = true,
      ...props
    }: ContentProps,
    forwardedRef
  ) => {
    return (
      <PopoverPrimitives.Portal>
        <PopoverPrimitives.Content
          ref={forwardedRef}
          sideOffset={sideOffset}
          side={side}
          align={align}
          collisionPadding={collisionPadding}
          avoidCollisions={avoidCollisions}
          className={popoverStyles({ className })}
          // https://github.com/radix-ui/primitives/issues/1159
          onWheel={(event) => {
            event.stopPropagation()
            const isScrollingDown = event.deltaY > 0
            if (isScrollingDown) {
              event.currentTarget.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }))
            } else {
              event.currentTarget.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }))
            }
          }}
          {...props}
        />
      </PopoverPrimitives.Portal>
    )
  }
)

Popover.displayName = 'Popover'
PopoverTrigger.displayName = 'PopoverTrigger'
PopoverAnchor.displayName = 'PopoverAnchor'
PopoverClose.displayName = 'PopoverClose'
PopoverContent.displayName = 'PopoverContent'

export { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger }
