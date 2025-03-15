import { Tooltip as TooltipPrimitives } from 'radix-ui'
import * as React from 'react'
import { tooltipStyles } from './tooltip.css'

interface TooltipProps
  extends Omit<TooltipPrimitives.TooltipContentProps, 'content' | 'onClick'>,
    Pick<
      TooltipPrimitives.TooltipProps,
      'open' | 'defaultOpen' | 'onOpenChange' | 'delayDuration'
    > {
  content: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  side?: 'bottom' | 'left' | 'top' | 'right'
  showArrow?: boolean
}

const Tooltip = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitives.Content>,
  TooltipProps
>(
  (
    {
      children,
      className,
      content,
      delayDuration,
      defaultOpen,
      open,
      onClick,
      onOpenChange,
      showArrow = true,
      side,
      sideOffset = 10,
      asChild,
      ...props
    }: TooltipProps,
    forwardedRef
  ) => {
    const styles = tooltipStyles()
    return (
      <TooltipPrimitives.Provider delayDuration={150}>
        <TooltipPrimitives.Root
          open={open}
          defaultOpen={defaultOpen}
          onOpenChange={onOpenChange}
          delayDuration={delayDuration}
        >
          <TooltipPrimitives.Trigger onClick={onClick} asChild={asChild}>
            {children}
          </TooltipPrimitives.Trigger>
          <TooltipPrimitives.Portal>
            <TooltipPrimitives.Content
              ref={forwardedRef}
              sideOffset={sideOffset}
              className={styles.content({ className })}
              align="center"
              side={side}
              {...props}
            >
              {content}
              {showArrow ? (
                <TooltipPrimitives.Arrow
                  className={styles.arrow()}
                  aria-hidden="true"
                  width={12}
                  height={7}
                />
              ) : null}
            </TooltipPrimitives.Content>
          </TooltipPrimitives.Portal>
        </TooltipPrimitives.Root>
      </TooltipPrimitives.Provider>
    )
  }
)

Tooltip.displayName = 'Tooltip'

export { Tooltip, type TooltipProps }
