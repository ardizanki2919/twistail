import { useDateSegment, useTimeField } from '@react-aria/datepicker'
import { useTimeFieldState } from '@react-stately/datepicker'
import * as Lucide from 'lucide-react'
import { Popover as PopoverPrimitive } from 'radix-ui'
import * as React from 'react'
import { tv } from 'tailwind-variants'
import { clx } from 'twistail-utils'
import { TimeInputProps, TimeSegmentProps, TriggerProps } from './types'
import { DatePreset, DateRange, DateRangePreset, Preset, PresetContainerProps } from './types'
import { compareDates, compareRanges } from './utils'

const triggerStyles = tv({
  base: [
    // base
    'peer flex w-full cursor-pointer appearance-none items-center gap-x-2 truncate rounded-md border px-3 py-2 shadow-xs outline-hidden transition-all sm:text-sm',
    // background color
    'bg-white dark:bg-gray-950',
    // border color
    'border-gray-300 dark:border-gray-800',
    // text color
    'text-gray-900 dark:text-gray-50',
    // placeholder color
    'placeholder-gray-400 dark:placeholder-gray-500',
    // hover
    'hover:bg-gray-50 hover:dark:bg-gray-950/50',
    // disabled
    'disabled:pointer-events-none',
    'disabled:bg-gray-100 disabled:text-gray-400',
    'disabled:dark:border-gray-800 disabled:dark:bg-gray-900 disabled:dark:text-gray-500',
    // focus
    'focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:dark:border-blue-700 focus:dark:ring-blue-700/30' /* focusInput */,
    // invalid (optional)
    // "aria-[invalid=true]:dark:ring-red-400/20 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-200 aria-[invalid=true]:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
  ],
  variants: {
    hasError: {
      true: 'ring-1 border-red-500 dark:border-red-700 ring-red-200 dark:ring-red-700/30' /* hasErrorInput */,
    },
  },
})

const Trigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
  ({ className, children, placeholder, hasError, ...props }: TriggerProps, forwardedRef) => {
    return (
      <PopoverPrimitive.Trigger asChild>
        <button
          ref={forwardedRef}
          className={clx(triggerStyles({ hasError }), className)}
          {...props}
        >
          <Lucide.CalendarFold className="size-5 shrink-0 text-gray-400 dark:text-gray-600" />
          <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left text-gray-900 dark:text-gray-50">
            {children ? (
              children
            ) : placeholder ? (
              <span className="text-gray-400 dark:text-gray-600">{placeholder}</span>
            ) : null}
          </span>
        </button>
      </PopoverPrimitive.Trigger>
    )
  }
)

const CalendarPopover = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  React.ComponentProps<typeof PopoverPrimitive.Content>
>(({ align, className, children, ...props }, forwardedRef) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={forwardedRef}
        sideOffset={10}
        side="bottom"
        align={align}
        avoidCollisions
        onOpenAutoFocus={(e) => e.preventDefault()}
        className={clx(
          // base
          'relative z-50 w-fit rounded-md border text-sm shadow-black/[2.5%] shadow-lg',
          // widths
          'min-w-[calc(var(--radix-select-trigger-width)-2px)] max-w-[95vw]',
          // border color
          'border-gray-200 dark:border-gray-800',
          // background color
          'bg-white dark:bg-gray-950',
          // transition
          'will-change-[transform,opacity]',
          'data-[state=closed]:animate-hide',
          'data-[state=open]:data-[side=bottom]:animate-slide-down-fade data-[state=open]:data-[side=left]:animate-slide-down-fade data-[state=open]:data-[side=right]:animate-slide-right-fade data-[state=open]:data-[side=top]:animate-slide-up-fade',
          className
        )}
        {...props}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
})

const TimeSegment = ({ segment, state }: TimeSegmentProps) => {
  const forwardedRef = React.useRef<HTMLDivElement>(null)
  const { segmentProps } = useDateSegment(segment, state, forwardedRef)
  const isColon = segment.type === 'literal' && segment.text === ':'
  const isSpace = segment.type === 'literal' && segment.text === ' '
  const isDecorator = isColon || isSpace

  return (
    <div
      {...segmentProps}
      ref={forwardedRef}
      className={clx(
        // base
        'relative block w-full appearance-none rounded-md border px-2.5 py-1.5 text-left uppercase tabular-nums shadow-xs outline-hidden transition sm:text-sm',
        // border color
        'border-gray-300 dark:border-gray-800',
        // text color
        'text-gray-900 dark:text-gray-50',
        // background color
        'bg-white dark:bg-gray-950',
        // focus
        'focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:dark:border-blue-700 focus:dark:ring-blue-700/30' /* focusInput */,
        // invalid (optional)
        'invalid:border-red-500 invalid:ring-2 invalid:ring-red-200 group-aria-[invalid=true]/time-input:border-red-500 group-aria-[invalid=true]/time-input:ring-2 group-aria-[invalid=true]/time-input:ring-red-200 group-aria-[invalid=true]/time-input:dark:ring-red-400/20',
        {
          '!w-fit border-none bg-transparent px-0 text-gray-400 shadow-none': isDecorator,
          hidden: isSpace,
          'border-gray-300 bg-gray-100 text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500':
            state.isDisabled,
          '!bg-transparent !text-gray-400': !segment.isEditable,
        }
      )}
    >
      <span
        aria-hidden="true"
        className={clx('pointer-events-none block w-full text-left text-gray-700 sm:text-sm', {
          hidden: !segment.isPlaceholder,
          'h-0': !segment.isPlaceholder,
        })}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? ' ' : segment.text}
    </div>
  )
}

const TimeInput = React.forwardRef<HTMLDivElement, TimeInputProps>(
  ({ hourCycle, ...props }: TimeInputProps, forwardedRef) => {
    const innerRef = React.useRef<HTMLDivElement>(null)

    React.useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
      forwardedRef,
      () => innerRef?.current
    )

    const locale = window !== undefined ? window.navigator.language : 'en-US'

    const state = useTimeFieldState({
      hourCycle: hourCycle,
      locale: locale,
      shouldForceLeadingZeros: true,
      autoFocus: true,
      ...props,
    })

    const { fieldProps } = useTimeField(
      {
        ...props,
        hourCycle: hourCycle,
        shouldForceLeadingZeros: true,
      },
      state,
      innerRef
    )

    return (
      <div {...fieldProps} ref={innerRef} className="group/time-input inline-flex w-full gap-x-2">
        {state.segments.map((segment, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: TODO: fix this later
          <TimeSegment key={i} segment={segment} state={state} />
        ))}
      </div>
    )
  }
)

const PresetContainer = <TPreset extends Preset, TValue>({
  // Available preset configurations
  presets,
  // Event handler when a preset is selected
  onSelect,
  // Currently selected preset
  currentValue,
}: PresetContainerProps<TPreset, TValue>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isDateRangePresets = (preset: any): preset is DateRangePreset => {
    return 'dateRange' in preset
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isDatePresets = (preset: any): preset is DatePreset => {
    return 'date' in preset
  }

  const handleClick = (preset: TPreset) => {
    if (isDateRangePresets(preset)) {
      onSelect(preset.dateRange as TValue)
    } else if (isDatePresets(preset)) {
      onSelect(preset.date as TValue)
    }
  }

  const matchesCurrent = (preset: TPreset) => {
    if (isDateRangePresets(preset)) {
      const value = currentValue as DateRange | undefined

      return value && compareRanges(value, preset.dateRange)
    }

    if (isDatePresets(preset)) {
      const value = currentValue as Date | undefined

      return value && compareDates(value, preset.date)
    }

    return false
  }

  return (
    <ul className="flex items-start gap-x-2 sm:flex-col">
      {presets.map((preset, index) => {
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: fix this later
          <li key={index} className="sm:w-full sm:py-px">
            <button
              type="button"
              title={preset.label}
              className={clx(
                // base
                'relative w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-sm border px-2.5 py-1.5 text-left text-base shadow-xs outline-hidden transition-all sm:border-none sm:py-2 sm:text-sm sm:shadow-none',
                // text color
                'text-gray-700 dark:text-gray-300',
                // border color
                'border-gray-200 dark:border-gray-800',
                // focus
                'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
                // background color
                'focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900',
                'hover:bg-gray-100 hover:dark:bg-gray-900',
                {
                  'bg-gray-100 dark:bg-gray-900': matchesCurrent(preset),
                }
              )}
              onClick={() => handleClick(preset)}
              aria-label={`Select ${preset.label}`}
            >
              <span>{preset.label}</span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

CalendarPopover.displayName = 'DatePicker.CalendarPopover'
Trigger.displayName = 'DatePicker.Trigger'
TimeInput.displayName = 'TimeInput'
PresetContainer.displayName = 'DatePicker.PresetContainer'

export { Trigger, triggerStyles, CalendarPopover, TimeInput, PresetContainer }
