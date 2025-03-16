import { RadioGroup as RadioGroupPrimitive } from 'radix-ui'
import * as React from 'react'
import { radioGroupStyles } from './radio-group.css'

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, forwardedRef) => {
  const styles = radioGroupStyles()
  return (
    <RadioGroupPrimitive.Root
      ref={forwardedRef}
      className={styles.root({ className })}
      {...props}
    />
  )
})

const RadioGroupIndicator = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator>
>(({ className, ...props }, forwardedRef) => {
  const styles = radioGroupStyles()
  return (
    <RadioGroupPrimitive.Indicator
      ref={forwardedRef}
      className={styles.indicator({ className })}
      {...props}
    >
      <div className={styles.indicatorInner()} />
    </RadioGroupPrimitive.Indicator>
  )
})

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, forwardedRef) => {
  const styles = radioGroupStyles()
  return (
    <RadioGroupPrimitive.Item ref={forwardedRef} className={styles.item({ className })} {...props}>
      <div className={styles.itemInner()}>
        <RadioGroupIndicator />
      </div>
    </RadioGroupPrimitive.Item>
  )
})

RadioGroup.displayName = 'RadioGroup'
RadioGroupIndicator.displayName = 'RadioGroupIndicator'
RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
