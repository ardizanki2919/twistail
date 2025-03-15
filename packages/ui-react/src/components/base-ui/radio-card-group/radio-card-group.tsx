import { RadioGroup as RadioGroupPrimitives } from 'radix-ui'
import * as React from 'react'
import { radioCardGroupStyles } from './radio-card-group.css'

const RadioCardGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Root>
>(({ className, ...props }, forwardedRef) => {
  const styles = radioCardGroupStyles()
  return (
    <RadioGroupPrimitives.Root
      ref={forwardedRef}
      className={styles.root({ className })}
      {...props}
    />
  )
})

const RadioCardItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item>
>(({ className, ...props }, forwardedRef) => {
  const styles = radioCardGroupStyles()
  return (
    <RadioGroupPrimitives.Item
      ref={forwardedRef}
      className={styles.item({ className })}
      {...props}
    />
  )
})

const RadioCardIndicator = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitives.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Indicator>
>(({ className, ...props }, forwardedRef) => {
  const styles = radioCardGroupStyles()
  return (
    <div className={styles.indicatorContainer({ className })}>
      <RadioGroupPrimitives.Indicator ref={forwardedRef} className={styles.indicator()} {...props}>
        <div className={styles.indicatorInner()} />
      </RadioGroupPrimitives.Indicator>
    </div>
  )
})

RadioCardGroup.displayName = 'RadioCardGroup'
RadioCardItem.displayName = 'RadioCardItem'
RadioCardIndicator.displayName = 'RadioCardIndicator'

export { RadioCardGroup, RadioCardIndicator, RadioCardItem }
