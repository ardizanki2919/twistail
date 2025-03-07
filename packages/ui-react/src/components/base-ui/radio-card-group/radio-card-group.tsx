// Tremor Radio Card [v0.0.3]

import * as RadioGroupPrimitives from '@radix-ui/react-radio-group'
import { clx, focusInput, focusRing } from '@twistail/react/utils'
import React from 'react'

const RadioCardGroup = React.forwardRef<
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

RadioCardGroup.displayName = 'RadioCardGroup'

const RadioCardItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Item
      ref={forwardedRef}
      className={clx(
        // base
        'group relative w-full rounded-md border p-4 text-left shadow-sm transition focus:outline-none',
        // background color
        'bg-white dark:bg-slate-950',
        // border color
        'border-slate-300 dark:border-slate-800',
        'data-[state=checked]:border-blue-500',
        'data-[state=checked]:dark:border-blue-500',
        // disabled
        'data-[disabled]:border-slate-100 data-[disabled]:dark:border-slate-800',
        'data-[disabled]:bg-slate-50 data-[disabled]:shadow-none data-[disabled]:dark:bg-slate-900',
        focusInput,
        className
      )}
      {...props}
    >
      {children}
    </RadioGroupPrimitives.Item>
  )
})

RadioCardItem.displayName = 'RadioCardItem'

const RadioCardIndicator = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitives.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Indicator>
>(({ className, ...props }, forwardedRef) => {
  return (
    <div
      className={clx(
        // base
        'relative flex size-4 shrink-0 appearance-none items-center justify-center rounded-full border shadow-sm outline-none',
        // border color
        'border-slate-300 dark:border-slate-800',
        // background color
        'bg-white dark:bg-slate-950',
        // checked
        'group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-blue-500',
        // disabled
        'group-data-[disabled]:border-slate-300 group-data-[disabled]:bg-slate-100 group-data-[disabled]:text-slate-400',
        'group-data-[disabled]:dark:border-slate-700 group-data-[disabled]:dark:bg-slate-800',
        // focus
        focusRing,
        className
      )}
    >
      <RadioGroupPrimitives.Indicator
        ref={forwardedRef}
        className={clx('flex items-center justify-center')}
        {...props}
      >
        <div
          className={clx(
            // base
            'size size-1.5 shrink-0 rounded-full',
            // indicator
            'bg-white',
            // disabled
            'group-data-[disabled]:bg-slate-400 group-data-[disabled]:dark:bg-slate-500'
          )}
        />
      </RadioGroupPrimitives.Indicator>
    </div>
  )
})

RadioCardIndicator.displayName = 'RadioCardIndicator'

export { RadioCardGroup, RadioCardIndicator, RadioCardItem }
