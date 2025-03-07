// Tremor RadioGroup [v0.0.2]

import * as RadioGroupPrimitives from '@radix-ui/react-radio-group'
import { clx, focusRing } from '@twistail/react/utils'
import React from 'react'

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Root>
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Root
      ref={forwardedRef}
      className={clx('grid gap-2', className)}
      tremor-id="tremor-raw"
      {...props}
    />
  )
})

RadioGroup.displayName = 'RadioGroup'

const RadioGroupIndicator = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitives.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Indicator>
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Indicator
      ref={forwardedRef}
      className={clx('flex items-center justify-center', className)}
      {...props}
    >
      <div
        className={clx(
          // base
          'size-1.5 shrink-0 rounded-full',
          // indicator
          'bg-white',
          // disabled
          'group-data-[disabled]:bg-gray-400 group-data-[disabled]:dark:bg-gray-500'
        )}
      />
    </RadioGroupPrimitives.Indicator>
  )
})

RadioGroupIndicator.displayName = 'RadioGroupIndicator'

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item>
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Item
      ref={forwardedRef}
      className={clx(
        'group relative flex size-4 appearance-none items-center justify-center outline-none',
        className
      )}
      {...props}
    >
      <div
        className={clx(
          // base
          'flex size-4 shrink-0 items-center justify-center rounded-full border shadow-sm',
          // border color
          'border-gray-300 dark:border-gray-800',
          // background color
          'bg-white dark:bg-gray-950',
          // checked
          'group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-blue-500',
          // disabled
          'group-data-[disabled]:border',
          'group-data-[disabled]:border-gray-300 group-data-[disabled]:bg-gray-100 group-data-[disabled]:text-gray-400',
          'group-data-[disabled]:dark:border-gray-700 group-data-[disabled]:dark:bg-gray-800',
          // focus
          focusRing
        )}
      >
        <RadioGroupIndicator />
      </div>
    </RadioGroupPrimitives.Item>
  )
})

RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
