import { Time } from '@internationalized/date'
import { TimeValue } from '@react-aria/datepicker'
import { enUS } from 'date-fns/locale'
import { Popover as PopoverPrimitive } from 'radix-ui'
import * as React from 'react'
import { clx } from 'twistail-utils'
import { Button } from '#/components/button'
import { Calendar } from '#/components/calendar'
import { CalendarPopover, PresetContainer, TimeInput, Trigger } from './datetime-utils'
import { SingleProps } from './types'
import { formatDate } from './utils'

const SingleDatePicker = ({
  defaultValue,
  value,
  onChange,
  presets,
  disabled,
  disabledDays,
  disableNavigation,
  className,
  showTimePicker,
  placeholder = 'Select date',
  hasError,
  translations,
  locale = enUS,
  align = 'center',
  ...props
}: SingleProps) => {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(value ?? defaultValue ?? undefined)
  const [month, setMonth] = React.useState<Date | undefined>(date)

  const [time, setTime] = React.useState<TimeValue | null>(
    value
      ? new Time(value.getHours(), value.getMinutes())
      : defaultValue
        ? new Time(defaultValue.getHours(), defaultValue.getMinutes())
        : new Time(0, 0)
  )

  // biome-ignore lint/correctness/useExhaustiveDependencies: TODO: fix this later
  const initialDate = React.useMemo(() => {
    return date
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  React.useEffect(() => {
    setDate(value ?? defaultValue ?? undefined)
  }, [value, defaultValue])

  React.useEffect(() => {
    if (date) {
      setMonth(date)
    }
  }, [date])

  // biome-ignore lint/correctness/useExhaustiveDependencies: TODO: fix this later
  React.useEffect(() => {
    if (!open) {
      setMonth(date)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const onCancel = () => {
    setDate(initialDate)
    setTime(
      initialDate ? new Time(initialDate.getHours(), initialDate.getMinutes()) : new Time(0, 0)
    )
    setOpen(false)
  }

  const onOpenChange = (open: boolean) => {
    if (!open) {
      onCancel()
    }

    setOpen(open)
  }

  const onDateChange = (date: Date | undefined) => {
    const newDate = date
    if (showTimePicker) {
      if (newDate && !time) {
        setTime(new Time(0, 0))
      }
      if (newDate && time) {
        newDate.setHours(time.hour)
        newDate.setMinutes(time.minute)
      }
    }
    setDate(newDate)
  }

  const onTimeChange = (time: TimeValue | null) => {
    setTime(time)

    if (!date) {
      return
    }

    const newDate = new Date(date.getTime())

    if (!time) {
      newDate.setHours(0)
      newDate.setMinutes(0)
    } else {
      newDate.setHours(time.hour)
      newDate.setMinutes(time.minute)
    }

    setDate(newDate)
  }

  const formattedDate = React.useMemo(() => {
    if (!date) {
      return null
    }

    return formatDate(date, locale, showTimePicker)
  }, [date, locale, showTimePicker])

  const onApply = () => {
    setOpen(false)
    onChange?.(date)
  }

  React.useEffect(() => {
    setDate(value ?? defaultValue ?? undefined)
    setTime(
      value
        ? new Time(value.getHours(), value.getMinutes())
        : defaultValue
          ? new Time(defaultValue.getHours(), defaultValue.getMinutes())
          : new Time(0, 0)
    )
  }, [value, defaultValue])

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
        {formattedDate}
      </Trigger>
      <CalendarPopover align={align}>
        <div className="flex">
          <div className="flex flex-col sm:flex-row sm:items-start">
            {presets && presets.length > 0 && (
              <div
                className={clx(
                  'relative flex h-14 w-full items-center overflow-auto sm:h-full sm:w-44',
                  'border-gray-200 border-b sm:border-r sm:border-b-0 dark:border-gray-800'
                )}
              >
                <div className="absolute px-2 pr-2 sm:inset-0 sm:left-0 sm:py-2">
                  <PresetContainer currentValue={date} presets={presets} onSelect={onDateChange} />
                </div>
              </div>
            )}
            <div>
              <Calendar
                mode="single"
                month={month}
                onMonthChange={setMonth}
                selected={date}
                onSelect={onDateChange}
                disabled={disabledDays}
                locale={locale}
                disableNavigation={disableNavigation}
                autoFocus={true}
                {...props}
              />
              {showTimePicker && (
                <div className="border-gray-200 border-t p-3 dark:border-gray-800">
                  <TimeInput
                    aria-label="Time"
                    onChange={onTimeChange}
                    isDisabled={!date}
                    value={time}
                    isRequired={props.required}
                  />
                </div>
              )}
              <div className="flex items-center gap-x-2 border-gray-200 border-t p-3 dark:border-gray-800">
                <Button variant="secondary" className="h-8 w-full" type="button" onClick={onCancel}>
                  {translations?.cancel ?? 'Cancel'}
                </Button>
                <Button variant="primary" className="h-8 w-full" type="button" onClick={onApply}>
                  {translations?.apply ?? 'Apply'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CalendarPopover>
    </PopoverPrimitive.Root>
  )
}

export { SingleDatePicker }
