// Tremor Tooltip [v0.1.0]

import * as TooltipPrimitives from '@radix-ui/react-tooltip'
import React from 'react'
import { clx } from 'twistail-react/utils'

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
    return (
      <TooltipPrimitives.Provider delayDuration={150}>
        <TooltipPrimitives.Root
          open={open}
          defaultOpen={defaultOpen}
          onOpenChange={onOpenChange}
          delayDuration={delayDuration}
          tremor-id="tremor-raw"
        >
          <TooltipPrimitives.Trigger onClick={onClick} asChild={asChild}>
            {children}
          </TooltipPrimitives.Trigger>
          <TooltipPrimitives.Portal>
            <TooltipPrimitives.Content
              ref={forwardedRef}
              side={side}
              sideOffset={sideOffset}
              align="center"
              className={clx(
                // base
                'max-w-60 select-none rounded-md px-2.5 py-1.5 text-sm leading-5 shadow-md',
                // text color
                'text-slate-50 dark:text-slate-900',
                // background color
                'bg-slate-900 dark:bg-slate-50',
                // transition
                'will-change-[transform,opacity]',
                'data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade data-[state=closed]:animate-hide',
                className
              )}
              {...props}
            >
              {content}
              {showArrow ? (
                <TooltipPrimitives.Arrow
                  className="border-none fill-slate-900 dark:fill-slate-50"
                  width={12}
                  height={7}
                  aria-hidden="true"
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
