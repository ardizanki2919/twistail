import { RadioGroup as RadioGroupPrimitives } from 'radix-ui'
import * as React from 'react'
import { radioGroupStyles } from './radio-group.css'

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Root>
>(({ className, ...props }, forwardedRef) => {
  const styles = radioGroupStyles()
  return (
    <RadioGroupPrimitives.Root
      ref={forwardedRef}
      className={styles.root({ className })}
      {...props}
    />
  )
})

const RadioGroupIndicator = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitives.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Indicator>
>(({ className, ...props }, forwardedRef) => {
  const styles = radioGroupStyles()
  return (
    <RadioGroupPrimitives.Indicator
      ref={forwardedRef}
      className={styles.indicator({ className })}
      {...props}
    >
      <div className={styles.indicatorInner()} />
    </RadioGroupPrimitives.Indicator>
  )
})

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item>
>(({ className, ...props }, forwardedRef) => {
  const styles = radioGroupStyles()
  return (
    <RadioGroupPrimitives.Item ref={forwardedRef} className={styles.item({ className })} {...props}>
      <div className={styles.itemInner()}>
        <RadioGroupIndicator />
      </div>
    </RadioGroupPrimitives.Item>
  )
})

RadioGroup.displayName = 'RadioGroup'
RadioGroupIndicator.displayName = 'RadioGroupIndicator'
RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
