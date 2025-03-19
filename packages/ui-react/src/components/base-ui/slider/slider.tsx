import { Slider as SliderPrimitive } from 'radix-ui'
import * as React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '#/components/base-ui/tooltip'
import { sliderStyles } from './slider.css'

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showTooltip?: boolean
  alwaysShowTooltip?: boolean
  tooltipSide?: 'bottom' | 'left' | 'top' | 'right'
  formatTooltip?: (value: number) => string
}

const Slider = React.forwardRef<React.ComponentRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    {
      className,
      showTooltip = true,
      alwaysShowTooltip = false,
      tooltipSide = 'top',
      formatTooltip,
      ...props
    },
    forwardedRef
  ) => {
    const values = props.value || props.defaultValue || []
    const styles = sliderStyles()

    // State to track current values for tooltip
    const [currentValues, setCurrentValues] = React.useState(values)
    const [isDragging, setIsDragging] = React.useState(false)
    const [hoveredThumbIndex, setHoveredThumbIndex] = React.useState<number | null>(null)

    // Update current values when props change
    React.useEffect(() => {
      if (props.value) {
        setCurrentValues(props.value)
      }
    }, [props.value])

    // Handle value changes
    const handleValueChange = (newValues: number[]) => {
      setCurrentValues(newValues)
      props.onValueChange?.(newValues)
    }

    // Handle drag start
    const handleDragStart = () => {
      setIsDragging(true)
    }

    // Handle drag end
    const handleDragEnd = () => {
      setIsDragging(false)
    }

    // Handle thumb hover
    const handleThumbMouseEnter = (index: number) => {
      setHoveredThumbIndex(index)
    }

    const handleThumbMouseLeave = () => {
      setHoveredThumbIndex(null)
    }

    // Determine if tooltip should be shown for a specific thumb
    const shouldShowTooltip = (index: number) => {
      if (!showTooltip) return false
      if (alwaysShowTooltip) return true
      if (isDragging && index === hoveredThumbIndex) return true
      if (hoveredThumbIndex === index) return true
      return false
    }

    // Add global event listeners for drag end
    React.useEffect(() => {
      if (isDragging) {
        const handleGlobalDragEnd = () => {
          setIsDragging(false)
        }
        document.addEventListener('pointerup', handleGlobalDragEnd)
        return () => {
          document.removeEventListener('pointerup', handleGlobalDragEnd)
        }
      }
    }, [isDragging])

    return (
      <SliderPrimitive.Root
        ref={forwardedRef}
        className={styles.root({ className })}
        onValueChange={handleValueChange}
        {...props}
      >
        <SliderPrimitive.Track className={styles.track()}>
          <SliderPrimitive.Range className={styles.range()} />
        </SliderPrimitive.Track>
        {currentValues.map((val, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: required for slider values
          <Tooltip key={`val-${index}`} open={shouldShowTooltip(index)}>
            <TooltipTrigger asChild>
              <SliderPrimitive.Thumb
                className={styles.thumb()}
                aria-label={`val-${index}`}
                onPointerDown={handleDragStart}
                onPointerUp={handleDragEnd}
                onMouseEnter={() => handleThumbMouseEnter(index)}
                onMouseLeave={handleThumbMouseLeave}
              />
            </TooltipTrigger>
            <TooltipContent
              side={tooltipSide}
              className={styles.tooltip()}
              content={formatTooltip ? formatTooltip(val) : val.toString()}
            />
          </Tooltip>
        ))}
      </SliderPrimitive.Root>
    )
  }
)

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
