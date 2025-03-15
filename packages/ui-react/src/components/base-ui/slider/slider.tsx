import { Slider as SliderPrimitives } from 'radix-ui'
import * as React from 'react'
import { sliderStyles } from './slider.css'

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitives.Root> {
  ariaLabelThumb?: string
}

const Slider = React.forwardRef<React.ComponentRef<typeof SliderPrimitives.Root>, SliderProps>(
  ({ className, ariaLabelThumb, ...props }, forwardedRef) => {
    const value = props.value || props.defaultValue
    const styles = sliderStyles()
    return (
      <SliderPrimitives.Root ref={forwardedRef} className={styles.root({ className })} {...props}>
        <SliderPrimitives.Track className={styles.track()}>
          <SliderPrimitives.Range className={styles.range()} />
        </SliderPrimitives.Track>
        {value?.map((val) => (
          <SliderPrimitives.Thumb
            key={val.toString()}
            className={styles.thumb()}
            aria-label={ariaLabelThumb}
          />
        ))}
      </SliderPrimitives.Root>
    )
  }
)

Slider.displayName = SliderPrimitives.Root.displayName

export { Slider }
