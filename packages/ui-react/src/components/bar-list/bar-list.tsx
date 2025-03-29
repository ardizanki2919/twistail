import { HoverCard as HoverCardPrimitive } from 'radix-ui'
import * as React from 'react'
import { type BarListStyles, barListStyles } from './bar-list.css'

interface BarItemProps extends BarListStyles {
  id?: string | number
  title: string
  subtitle?: string
  value: number
  maxValue?: number
  color?: string
  tooltip?: string | React.ReactNode
  formatValue?: (value: number) => string
  onClick?: () => void
  href?: string
}

const BarItem = ({
  title,
  subtitle,
  value,
  maxValue,
  color,
  tooltip,
  formatValue,
  onClick,
  href,
  size,
  hideValue,
  hideTooltip,
  hideArrow,
  variant,
  interactive,
}: BarItemProps) => {
  const [open, setOpen] = React.useState(false)
  const styles = barListStyles({ size, hideValue, hideTooltip, hideArrow, variant, interactive })

  // Calculate percentage
  const percentage = Math.min(Math.max((value / (maxValue || 100)) * 100, 0), 100)

  // Format value display
  const displayValue = formatValue ? formatValue(value) : `${value}`

  // Custom color style for bar
  const barStyle = color ? { backgroundColor: color } : {}

  // Make sure ariaLabel is always available
  const accessibleLabel = `${title}: ${displayValue}`

  const handleOnClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }

  const barContent = (
    <div className={styles.item()}>
      <div className={styles.label()}>
        {href ? (
          <a
            href={href}
            className={styles.titleLink()}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {title}
          </a>
        ) : (
          <span className={styles.title()}>{title}</span>
        )}
        {subtitle && <span className={styles.subtitle()}>{subtitle}</span>}
      </div>
      <div className={styles.barContainer()}>
        <div
          className={styles.bar()}
          style={{ width: `${percentage}%`, ...barStyle }}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={maxValue || 100}
          aria-label={accessibleLabel}
        />
      </div>
      <span className={styles.value()}>{displayValue}</span>
    </div>
  )

  if (!tooltip || hideTooltip) {
    return onClick || href ? (
      <button
        type="button"
        className={styles.triggerWrapper()}
        onClick={handleOnClick}
        aria-label={accessibleLabel}
      >
        {barContent}
      </button>
    ) : (
      barContent
    )
  }

  return (
    <HoverCardPrimitive.Root open={open} onOpenChange={setOpen} openDelay={30} closeDelay={60}>
      <HoverCardPrimitive.Trigger asChild>
        {onClick || href ? (
          <button
            type="button"
            className={styles.triggerWrapper()}
            onClick={handleOnClick}
            aria-label={accessibleLabel}
          >
            {barContent}
          </button>
        ) : (
          <div className={styles.triggerWrapper()}>{barContent}</div>
        )}
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
          {!hideArrow && (
            <HoverCardPrimitive.Arrow
              className={styles.arrow()}
              aria-hidden="true"
              width={12}
              height={7}
            />
          )}
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  )
}

interface BarListProps extends React.HTMLAttributes<HTMLDivElement>, BarListStyles {
  data: BarItemProps[]
  valueFormatter?: (value: number) => string
  onValueChange?: (item: BarItemProps) => void
  sortOrder?: 'ascending' | 'descending' | 'none'
  showAnimation?: boolean
}

const BarList = React.forwardRef<HTMLDivElement, BarListProps>(
  (
    {
      data = [],
      className,
      size,
      hideValue,
      hideTooltip,
      hideArrow,
      variant,
      interactive,
      valueFormatter,
      onValueChange,
      sortOrder = 'none',
      showAnimation = false,
      ...props
    },
    forwardedRef
  ) => {
    const styles = barListStyles({
      size,
      hideValue,
      hideTooltip,
      hideArrow,
      variant,
      interactive,
      showAnimation,
    })

    // Sort data if sortOrder is provided
    const sortedData = React.useMemo(() => {
      if (sortOrder === 'none') return data

      return [...data].sort((a, b) => {
        if (sortOrder === 'ascending') {
          return a.value - b.value
        }
        return b.value - a.value
      })
    }, [data, sortOrder])

    // Calculate maxValue if not provided in items
    const maxValue = React.useMemo(() => {
      // If all items have maxValue, we don't need to calculate
      if (sortedData.every((item) => item.maxValue !== undefined)) return undefined

      // Otherwise, use the maximum value as reference
      return Math.max(...sortedData.map((item) => item.value), 0)
    }, [sortedData])

    return (
      <div
        ref={forwardedRef}
        className={styles.base({ className })}
        aria-sort={sortOrder !== 'none' ? sortOrder : undefined}
        {...props}
      >
        {sortedData.map((item, index) => {
          const itemKey = item.id || `${item.title}-${item.value}-${index}`

          // Apply valueFormatter if provided and item doesn't have its own formatValue
          const formattedItem = {
            ...item,
            formatValue:
              item.formatValue ||
              (valueFormatter ? (value: number) => valueFormatter(value) : undefined),
            maxValue: item.maxValue || maxValue,
            onClick: onValueChange ? () => onValueChange(item) : item.onClick,
            interactive:
              interactive || Boolean(onValueChange) || Boolean(item.onClick) || Boolean(item.href),
          }

          return (
            <BarItem
              key={itemKey}
              size={size}
              hideValue={hideValue}
              hideTooltip={hideTooltip}
              hideArrow={hideArrow}
              variant={variant}
              {...formattedItem}
            />
          )
        })}
      </div>
    )
  }
)

BarItem.displayName = 'BarItem'
BarList.displayName = 'BarList'

export { BarList, type BarItemProps, type BarListProps }
