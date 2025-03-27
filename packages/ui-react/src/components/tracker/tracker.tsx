import { HoverCard as HoverCardPrimitive } from 'radix-ui'
import * as React from 'react'
import { type TrackerStyles, trackerStyles } from './tracker.css'

interface TrackerBlockProps extends TrackerStyles {
  key?: string | number
  color?: string
  tooltip?: string | React.ReactNode
  defaultColor?: string
  onClick?: () => void
  ariaLabel?: string
  disabled?: boolean
}

const Block = ({
  color,
  tooltip,
  defaultColor,
  hoverEffect,
  flatten,
  onClick,
  ariaLabel,
  disabled = false,
}: TrackerBlockProps) => {
  const [open, setOpen] = React.useState(false)
  const styles = trackerStyles({ hoverEffect, flatten })

  if (!tooltip) {
    return (
      <div className={styles.block()}>
        <div
          className={styles.blockInner({ className: color || defaultColor })}
          role="presentation"
        />
      </div>
    )
  }

  // Make sure ariaLabel is always available
  const accessibleLabel = ariaLabel || (typeof tooltip === 'string' ? tooltip : 'Tracker item')

  const handleOnClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
    setOpen(true)
  }

  return (
    <HoverCardPrimitive.Root open={open} onOpenChange={setOpen} openDelay={30} closeDelay={60}>
      <HoverCardPrimitive.Trigger asChild>
        <button
          type="button"
          className={styles.block()}
          onClick={handleOnClick}
          aria-label={accessibleLabel}
          disabled={disabled}
        >
          <span className="sr-only">{accessibleLabel}</span>
          <div
            className={styles.blockInner({ className: color || defaultColor })}
            aria-hidden="true"
          />
        </button>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
          align="center"
          side="top"
          sideOffset={10}
          className={styles.tooltip()}
          avoidCollisions
        >
          {tooltip}
          <HoverCardPrimitive.Arrow
            className={styles.arrow()}
            aria-hidden="true"
            width={12}
            height={7}
          />
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  )
}

interface TrackerProps extends React.HTMLAttributes<HTMLDivElement>, TrackerStyles {
  data: TrackerBlockProps[]
  defaultColor?: string
  emptyColor?: string
}

const Tracker = React.forwardRef<HTMLDivElement, TrackerProps>(
  (
    {
      data = [],
      defaultColor = 'bg-muted',
      className,
      hoverEffect,
      flatten,
      size,
      showArrow = true,
      emptyColor = 'bg-muted/30',
      ...props
    },
    forwardedRef
  ) => {
    const styles = trackerStyles({ hoverEffect, size, showArrow, flatten })

    // Handle empty data case
    if (data.length === 0) {
      return (
        <div ref={forwardedRef} className={styles.base({ className })} {...props}>
          <div className={styles.block()}>
            <div className={styles.blockInner({ className: emptyColor })} />
          </div>
        </div>
      )
    }

    return (
      <div ref={forwardedRef} className={styles.base({ className })} {...props}>
        {data.map((blockProps, index) => (
          <Block
            key={blockProps.key ?? index}
            defaultColor={defaultColor}
            hoverEffect={hoverEffect}
            flatten={flatten}
            {...blockProps}
          />
        ))}
      </div>
    )
  }
)

Block.displayName = 'TrackerBlock'
Tracker.displayName = 'Tracker'

export { Tracker, type TrackerBlockProps, type TrackerProps }
