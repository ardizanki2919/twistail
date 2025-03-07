// Tremor Checkbox [v0.0.3]

import * as CheckboxPrimitives from '@radix-ui/react-checkbox'
import { clx, focusRing } from '@twistail/react/utils'
import React from 'react'

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root>
>(({ className, checked, ...props }, forwardedRef) => {
  return (
    <CheckboxPrimitives.Root
      ref={forwardedRef}
      {...props}
      checked={checked}
      className={clx(
        // base
        'relative inline-flex size-4 shrink-0 appearance-none items-center justify-center rounded shadow-sm outline-none ring-1 ring-inset transition duration-100 enabled:cursor-pointer',
        // text color
        'text-white dark:text-slate-50',
        // background color
        'bg-white dark:bg-slate-950',
        // ring color
        'ring-slate-300 dark:ring-slate-800',
        // disabled
        'data-[disabled]:bg-slate-100 data-[disabled]:text-slate-400 data-[disabled]:ring-slate-300',
        'data-[disabled]:dark:bg-slate-800 data-[disabled]:dark:text-slate-500 data-[disabled]:dark:ring-slate-700',
        // checked and enabled
        'enabled:data-[state=checked]:bg-blue-500 enabled:data-[state=checked]:ring-0 enabled:data-[state=checked]:ring-transparent',
        // indeterminate
        'enabled:data-[state=indeterminate]:bg-blue-500 enabled:data-[state=indeterminate]:ring-0 enabled:data-[state=indeterminate]:ring-transparent',
        // focus
        focusRing,
        className
      )}
      tremor-id="tremor-raw"
    >
      <CheckboxPrimitives.Indicator asChild className="flex size-full items-center justify-center">
        {checked === 'indeterminate' ? (
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              x1="4"
              x2="12"
              y1="8"
              y2="8"
            />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2 5.59998L6.79999 9.99998L4.79999 7.99998"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        )}
      </CheckboxPrimitives.Indicator>
    </CheckboxPrimitives.Root>
  )
})

Checkbox.displayName = 'Checkbox'

export { Checkbox }
