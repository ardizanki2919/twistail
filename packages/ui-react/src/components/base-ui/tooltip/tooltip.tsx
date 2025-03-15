import { Tooltip as TooltipPrimitives } from 'radix-ui'
import * as React from 'react'
import { tooltipStyles } from './tooltip.css'

interface TooltipProps
  extends Pick<
    TooltipPrimitives.TooltipProps,
    'open' | 'defaultOpen' | 'onOpenChange' | 'delayDuration'
  > {
  delayDuration?: number
}

interface TooltipTriggerProps extends TooltipPrimitives.TooltipTriggerProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

interface TooltipContentProps extends Omit<TooltipPrimitives.TooltipContentProps, 'content'> {
  side?: 'bottom' | 'left' | 'top' | 'right'
  content?: React.ReactNode
  showArrow?: boolean
}

const Tooltip: React.FC<TooltipProps & { children: React.ReactNode }> = ({
  children,
  delayDuration = 150,
  ...rootProps
}) => {
  return (
    <TooltipPrimitives.Provider delayDuration={delayDuration}>
      <TooltipPrimitives.Root {...rootProps}>{children}</TooltipPrimitives.Root>
    </TooltipPrimitives.Provider>
  )
}

const TooltipTrigger = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitives.Trigger>,
  TooltipTriggerProps
>(({ onClick, asChild, ...props }: TooltipTriggerProps, forwardedRef) => {
  return (
    <TooltipPrimitives.Trigger ref={forwardedRef} onClick={onClick} asChild={asChild} {...props} />
  )
})

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitives.Content>,
  TooltipContentProps
>(
  (
    {
      className,
      content,
      children,
      showArrow = true,
      side,
      sideOffset = 10,
      ...props
    }: TooltipContentProps,
    forwardedRef
  ) => {
    const styles = tooltipStyles()
    const contentToRender = content || children

    return (
      <TooltipPrimitives.Portal>
        <TooltipPrimitives.Content
          ref={forwardedRef}
          sideOffset={sideOffset}
          className={styles.content({ className })}
          align="center"
          side={side}
          {...props}
        >
          {contentToRender}
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
    )
  }
)

Tooltip.displayName = 'Tooltip'
TooltipTrigger.displayName = 'TooltipTrigger'
TooltipContent.displayName = 'TooltipContent'

export { Tooltip, TooltipTrigger, TooltipContent }
