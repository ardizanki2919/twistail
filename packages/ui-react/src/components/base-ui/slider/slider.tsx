import { Slider as SliderPrimitive } from 'radix-ui'
import * as React from 'react'
import { sliderStyles } from './slider.css'

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  ariaLabelThumb?: string
}

const Slider = React.forwardRef<React.ComponentRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, ariaLabelThumb, ...props }, forwardedRef) => {
    const value = props.value || props.defaultValue
    const styles = sliderStyles()
    return (
      <SliderPrimitive.Root ref={forwardedRef} className={styles.root({ className })} {...props}>
        <SliderPrimitive.Track className={styles.track()}>
          <SliderPrimitive.Range className={styles.range()} />
        </SliderPrimitive.Track>
        {value?.map((val) => (
          <SliderPrimitive.Thumb
            key={val.toString()}
            className={styles.thumb()}
            aria-label={ariaLabelThumb}
          />
        ))}
      </SliderPrimitive.Root>
    )
  }
)

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
