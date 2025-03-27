import { Time } from '@internationalized/date'
import { TimeValue } from '@react-aria/datepicker'
import { enUS } from 'date-fns/locale'
import * as Lucide from 'lucide-react'
import { Popover as PopoverPrimitive } from 'radix-ui'
import * as React from 'react'
import { clx } from 'twistail-utils'
import { Button } from '#/components/button'
import { Calendar as CalendarPrimitive } from '#/components/calendar'
import { CalendarPopover, PresetContainer, TimeInput, Trigger } from './datetime-utils'
import { DateRange, RangeProps } from './types'
import { formatDate } from './utils'

const RangeDatePicker = ({
  defaultValue,
  value,
  onChange,
  presets,
  disabled,
  disableNavigation,
  disabledDays,
  locale = enUS,
  showTimePicker,
  placeholder = 'Select date range',
  hasError,
  translations,
  align = 'center',
  className,
  ...props
}: RangeProps) => {
  const [open, setOpen] = React.useState(false)
  const [range, setRange] = React.useState<DateRange | undefined>(
    value ?? defaultValue ?? undefined
  )
  const [month, setMonth] = React.useState<Date | undefined>(range?.from)

  const [startTime, setStartTime] = React.useState<TimeValue | null>(
    value?.from
      ? new Time(value.from.getHours(), value.from.getMinutes())
      : defaultValue?.from
        ? new Time(defaultValue.from.getHours(), defaultValue.from.getMinutes())
        : new Time(0, 0)
  )
  const [endTime, setEndTime] = React.useState<TimeValue | null>(
    value?.to
      ? new Time(value.to.getHours(), value.to.getMinutes())
      : defaultValue?.to
        ? new Time(defaultValue.to.getHours(), defaultValue.to.getMinutes())
        : new Time(0, 0)
  )

  // biome-ignore lint/correctness/useExhaustiveDependencies: TODO: fix this later
  const initialRange = React.useMemo(() => {
    return range
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  React.useEffect(() => {
    setRange(value ?? defaultValue ?? undefined)
  }, [value, defaultValue])

  React.useEffect(() => {
    if (range) {
      setMonth(range.from)
    }
  }, [range])

  // biome-ignore lint/correctness/useExhaustiveDependencies: TODO: fix this later
  React.useEffect(() => {
    if (!open) {
      setMonth(range?.from)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const onRangeChange = (range: DateRange | undefined) => {
    const newRange = range
    if (showTimePicker) {
      if (newRange?.from && !startTime) {
        setStartTime(new Time(0, 0))
      }

      if (newRange?.to && !endTime) {
        setEndTime(new Time(0, 0))
      }

      if (newRange?.from && startTime) {
        newRange.from.setHours(startTime.hour)
        newRange.from.setMinutes(startTime.minute)
      }

      if (newRange?.to && endTime) {
        newRange.to.setHours(endTime.hour)
        newRange.to.setMinutes(endTime.minute)
      }
    }

    setRange(newRange)
  }

  const onCancel = () => {
    setRange(initialRange)
    setStartTime(
      initialRange?.from
        ? new Time(initialRange.from.getHours(), initialRange.from.getMinutes())
        : new Time(0, 0)
    )
    setEndTime(
      initialRange?.to
        ? new Time(initialRange.to.getHours(), initialRange.to.getMinutes())
        : new Time(0, 0)
    )
    setOpen(false)
  }

  const onOpenChange = (open: boolean) => {
    if (!open) {
      onCancel()
    }

    setOpen(open)
  }

  const onTimeChange = (time: TimeValue | null, pos: 'start' | 'end') => {
    switch (pos) {
      case 'start':
        setStartTime(time)
        break
      case 'end':
        setEndTime(time)
        break
    }

    if (!range) {
      return
    }

    if (pos === 'start') {
      if (!range.from) {
        return
      }

      const newDate = new Date(range.from.getTime())

      if (!time) {
        newDate.setHours(0)
        newDate.setMinutes(0)
      } else {
        newDate.setHours(time.hour)
        newDate.setMinutes(time.minute)
      }

      setRange({
        ...range,
        from: newDate,
      })
    }

    if (pos === 'end') {
      if (!range.to) {
        return
      }

      const newDate = new Date(range.to.getTime())

      if (!time) {
        newDate.setHours(0)
        newDate.setMinutes(0)
      } else {
        newDate.setHours(time.hour)
        newDate.setMinutes(time.minute)
      }

      setRange({
        ...range,
        to: newDate,
      })
    }
  }

  React.useEffect(() => {
    setRange(value ?? defaultValue ?? undefined)

    setStartTime(
      value?.from
        ? new Time(value.from.getHours(), value.from.getMinutes())
        : defaultValue?.from
          ? new Time(defaultValue.from.getHours(), defaultValue.from.getMinutes())
          : new Time(0, 0)
    )
    setEndTime(
      value?.to
        ? new Time(value.to.getHours(), value.to.getMinutes())
        : defaultValue?.to
          ? new Time(defaultValue.to.getHours(), defaultValue.to.getMinutes())
          : new Time(0, 0)
    )
  }, [value, defaultValue])

  const displayRange = React.useMemo(() => {
    if (!range) {
      return null
    }

    return `${range.from ? formatDate(range.from, locale, showTimePicker) : ''} - ${
      range.to ? formatDate(range.to, locale, showTimePicker) : ''
    }`
  }, [range, locale, showTimePicker])

  const onApply = () => {
    setOpen(false)
    onChange?.(range)
  }

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <Trigger
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        hasError={hasError}
        aria-required={props.required || props['aria-required']}
        aria-invalid={props['aria-invalid']}
        aria-label={props['aria-label']}
        aria-labelledby={props['aria-labelledby']}
      >
        {displayRange}
      </Trigger>
      <CalendarPopover align={align}>
        <div className="flex">
          <div className="flex flex-col overflow-x-auto sm:flex-row sm:items-start">
            {presets && presets.length > 0 && (
              <div
                className={clx(
                  'relative flex h-16 w-full items-center sm:h-full sm:w-40',
                  'border-gray-200 border-b sm:border-r sm:border-b-0 dark:border-gray-800',
                  'overflow-auto'
                )}
              >
                <div className="absolute px-3 sm:inset-0 sm:left-0 sm:p-2">
                  <PresetContainer
                    currentValue={range}
                    presets={presets}
                    onSelect={onRangeChange}
                  />
                </div>
              </div>
            )}
            <div className="overflow-x-auto">
              <CalendarPrimitive
                mode="range"
                selected={range}
                onSelect={onRangeChange}
                month={month}
                onMonthChange={setMonth}
                numberOfMonths={2}
                disabled={disabledDays}
                disableNavigation={disableNavigation}
                locale={locale}
                initialFocus
                classNames={{
                  months:
                    'flex flex-row divide-x divide-gray-200 dark:divide-gray-800 overflow-x-auto',
                }}
                {...props}
              />
              {showTimePicker && (
                <div className="flex items-center justify-evenly gap-x-3 border-gray-200 border-t p-3 dark:border-gray-800">
                  <div className="flex flex-1 items-center gap-x-2">
                    <span className="text-gray-700 dark:text-gray-30">
                      {translations?.start ?? 'Start'}:
                    </span>
                    <TimeInput
                      value={startTime}
                      onChange={(v) => onTimeChange(v, 'start')}
                      aria-label="Start date time"
                      isDisabled={!range?.from}
                      isRequired={props.required}
                    />
                  </div>
                  <Lucide.Minus className="size-4 shrink-0 text-gray-400" />
                  <div className="flex flex-1 items-center gap-x-2">
                    <span className="text-gray-700 dark:text-gray-30">
                      {translations?.end ?? 'End'}:
                    </span>
                    <TimeInput
                      value={endTime}
                      onChange={(v) => onTimeChange(v, 'end')}
                      aria-label="End date time"
                      isDisabled={!range?.to}
                      isRequired={props.required}
                    />
                  </div>
                </div>
              )}
              <div className="border-gray-200 border-t p-3 sm:flex sm:items-center sm:justify-between dark:border-gray-800">
                <p className="text-gray-900 tabular-nums dark:text-gray-50">
                  <span className="text-gray-700 dark:text-gray-300">
                    {translations?.range ?? 'Range'}:
                  </span>{' '}
                  <span className="font-medium">{displayRange}</span>
                </p>
                <div className="mt-2 flex items-center gap-x-2 sm:mt-0">
                  <Button
                    variant="secondary"
                    className="h-8 w-full sm:w-fit"
                    type="button"
                    onClick={onCancel}
                  >
                    {translations?.cancel ?? 'Cancel'}
                  </Button>
                  <Button
                    variant="primary"
                    className="h-8 w-full sm:w-fit"
                    type="button"
                    onClick={onApply}
                  >
                    {translations?.apply ?? 'Apply'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CalendarPopover>
    </PopoverPrimitive.Root>
  )
}

export { RangeDatePicker }
