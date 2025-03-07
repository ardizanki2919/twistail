// Tremor Toggle [v0.0.0]

import * as TogglePrimitive from '@radix-ui/react-toggle'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { clx, focusRing } from '@twistail/react/utils'
import React from 'react'

const toggleStyles = [
  // base
  'group inline-flex h-9 min-w-9 items-center justify-center gap-2 rounded-md border px-2 text-sm font-medium shadow-sm transition-all duration-100 ease-in-out',
  'border-slate-300 dark:border-slate-800',
  // text color
  'text-slate-700 dark:text-slate-300',
  // background color
  'bg-white dark:bg-slate-950',
  //hover color
  'hover:bg-slate-50 dark:hover:bg-slate-900/60',
  // disabled
  'disabled:pointer-events-none disabled:text-slate-400 disabled:dark:text-slate-600',
  'data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900 dark:data-[state=on]:bg-slate-800 dark:data-[state=on]:text-slate-50',
  focusRing,
]

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={clx(toggleStyles, className)} {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle }

const ToggleGroup = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={clx('flex flex-nowrap items-center justify-center gap-1', className)}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Item ref={ref} className={clx(toggleStyles, className)} {...props}>
    {children}
  </ToggleGroupPrimitive.Item>
))

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
