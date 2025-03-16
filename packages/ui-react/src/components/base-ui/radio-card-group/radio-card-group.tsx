import { RadioGroup as RadioGroupPrimitive } from 'radix-ui'
import * as React from 'react'
import { radioCardGroupStyles } from './radio-card-group.css'

const RadioCardGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, forwardedRef) => {
  const styles = radioCardGroupStyles()
  return (
    <RadioGroupPrimitive.Root
      ref={forwardedRef}
      className={styles.root({ className })}
      {...props}
    />
  )
})

const RadioCardItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, forwardedRef) => {
  const styles = radioCardGroupStyles()
  return (
    <RadioGroupPrimitive.Item
      ref={forwardedRef}
      className={styles.item({ className })}
      {...props}
    />
  )
})

const RadioCardIndicator = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator>
>(({ className, ...props }, forwardedRef) => {
  const styles = radioCardGroupStyles()
  return (
    <div className={styles.indicatorContainer({ className })}>
      <RadioGroupPrimitive.Indicator ref={forwardedRef} className={styles.indicator()} {...props}>
        <div className={styles.indicatorInner()} />
      </RadioGroupPrimitive.Indicator>
    </div>
  )
})

RadioCardGroup.displayName = 'RadioCardGroup'
RadioCardItem.displayName = 'RadioCardItem'
RadioCardIndicator.displayName = 'RadioCardIndicator'

export { RadioCardGroup, RadioCardIndicator, RadioCardItem }
