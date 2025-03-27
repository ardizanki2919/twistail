import { add, format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import * as Lucide from 'lucide-react'
import * as React from 'react'
import { clx } from 'twistail-utils'
import { Button } from '#/components/button'
import { Calendar, type CalendarProps } from '#/components/calendar'
import { Input } from '#/components/input'
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxTrigger,
  ListboxValue,
} from '#/components/listbox'
import { Popover, PopoverContent, PopoverTrigger } from '#/components/popover'
import { type DatetimePickerStyles, datetimePickerStyles } from './datetime-picker.css'
import {
  Period,
  TimePickerType,
  display12HourValue,
  getArrowByType,
  getDateByType,
  setDateByType,
} from './datetime-utils'

interface PeriodSelectorProps {
  period: Period
  setPeriod?: (m: Period) => void
  date?: Date | null
  onDateChange?: (date: Date | undefined) => void
  onRightFocus?: () => void
  onLeftFocus?: () => void
}

const TimePeriodSelect = React.forwardRef<HTMLButtonElement, PeriodSelectorProps>(
  ({ period, setPeriod, date, onDateChange, onLeftFocus, onRightFocus }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'ArrowRight') onRightFocus?.()
      if (e.key === 'ArrowLeft') onLeftFocus?.()
    }

    const styles = datetimePickerStyles()

    const handleValueChange = (value: Period) => {
      setPeriod?.(value)
      /**
       * trigger an update whenever the user switches between AM and PM;
       * otherwise user must manually change the hour each time
       */
      if (date) {
        const tempDate = new Date(date)
        const hours = display12HourValue(date.getHours())
        onDateChange?.(
          setDateByType(tempDate, hours.toString(), '12hours', period === 'AM' ? 'PM' : 'AM')
        )
      }
    }

    return (
      <div className={styles.periodSelectWrapper()}>
        <Listbox defaultValue={period} onValueChange={(value: Period) => handleValueChange(value)}>
          <ListboxTrigger
            ref={ref}
            className={styles.periodSelectTrigger()}
            onKeyDown={handleKeyDown}
          >
            <ListboxValue />
          </ListboxTrigger>
          <ListboxContent>
            <ListboxItem value="AM">AM</ListboxItem>
            <ListboxItem value="PM">PM</ListboxItem>
          </ListboxContent>
        </Listbox>
      </div>
    )
  }
)

interface TimePickerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  picker: TimePickerType
  date?: Date | null
  onDateChange?: (date: Date | undefined) => void
  period?: Period
  onRightFocus?: () => void
  onLeftFocus?: () => void
}

const TimePickerInput = React.forwardRef<HTMLInputElement, TimePickerInputProps>(
  (
    {
      className,
      type = 'tel',
      value,
      id,
      name,
      date = new Date(new Date().setHours(0, 0, 0, 0)),
      onDateChange,
      onChange,
      onKeyDown,
      picker,
      period,
      onLeftFocus,
      onRightFocus,
      ...props
    },
    ref
  ) => {
    const [flag, setFlag] = React.useState<boolean>(false)
    const [prevIntKey, setPrevIntKey] = React.useState<string>('0')
    const styles = datetimePickerStyles()

    /**
     * allow the user to enter the second digit within 2 seconds
     * otherwise start again with entering first digit
     */
    React.useEffect(() => {
      if (flag) {
        const timer = setTimeout(() => {
          setFlag(false)
        }, 2000)

        return () => clearTimeout(timer)
      }
    }, [flag])

    const calculatedValue = React.useMemo(() => {
      return getDateByType(date, picker)
    }, [date, picker])

    const calculateNewValue = (key: string) => {
      /*
       * If picker is '12hours' and the first digit is 0, then the second digit is automatically set to 1.
       * The second entered digit will break the condition and the value will be set to 10-12.
       */
      if (picker === '12hours') {
        if (flag && calculatedValue.slice(1, 2) === '1' && prevIntKey === '0') return `0${key}`
      }

      return !flag ? `0${key}` : calculatedValue.slice(1, 2) + key
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Tab') return
      e.preventDefault()
      if (e.key === 'ArrowRight') onRightFocus?.()
      if (e.key === 'ArrowLeft') onLeftFocus?.()
      if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
        const step = e.key === 'ArrowUp' ? 1 : -1
        const newValue = getArrowByType(calculatedValue, step, picker)
        if (flag) setFlag(false)
        const tempDate = date ? new Date(date) : new Date()
        onDateChange?.(setDateByType(tempDate, newValue, picker, period))
      }
      if (e.key >= '0' && e.key <= '9') {
        if (picker === '12hours') setPrevIntKey(e.key)

        const newValue = calculateNewValue(e.key)
        if (flag) onRightFocus?.()
        setFlag((prev) => !prev)
        const tempDate = date ? new Date(date) : new Date()
        onDateChange?.(setDateByType(tempDate, newValue, picker, period))
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      onChange?.(e)
    }

    return (
      <Input
        ref={ref}
        type={type}
        id={id || picker}
        name={name || picker}
        className={styles.timePickerInput({ className })}
        value={value || calculatedValue}
        onChange={handleChange}
        inputMode="decimal"
        onKeyDown={(e) => {
          onKeyDown?.(e)
          handleKeyDown(e)
        }}
        {...props}
      />
    )
  }
)

interface TimePickerProps {
  date?: Date | null
  onChange?: (date: Date | undefined) => void
  hourCycle?: 12 | 24
  /**
   * Determines the smallest unit that is displayed in the datetime picker.
   * Default is 'second'.
   * */
  granularity?: Granularity
}

interface TimePickerRef {
  minuteRef: HTMLInputElement | null
  hourRef: HTMLInputElement | null
  secondRef: HTMLInputElement | null
}

const TimePicker = React.forwardRef<TimePickerRef, TimePickerProps>(
  ({ date, onChange, hourCycle = 24, granularity = 'second' }, forwardedRef) => {
    const minuteRef = React.useRef<HTMLInputElement>(null)
    const hourRef = React.useRef<HTMLInputElement>(null)
    const secondRef = React.useRef<HTMLInputElement>(null)
    const periodRef = React.useRef<HTMLButtonElement>(null)
    const [period, setPeriod] = React.useState<Period>(date && date.getHours() >= 12 ? 'PM' : 'AM')

    const styles = datetimePickerStyles()

    React.useImperativeHandle(
      forwardedRef,
      () => ({
        minuteRef: minuteRef.current,
        hourRef: hourRef.current,
        secondRef: secondRef.current,
        periodRef: periodRef.current,
      }),
      []
    )

    const handleDateChange = (date: Date | undefined) => {
      onChange?.(date)
      if (date && date?.getHours() >= 12) {
        setPeriod('PM')
      } else {
        setPeriod('AM')
      }
    }

    return (
      <div className={styles.timePicker()}>
        <label htmlFor="datetime-picker-hour-input" className={styles.timePickerLabel()}>
          <Lucide.Clock className={styles.timePickerLabelIcon()} />
        </label>
        <div className="mr-2 flex w-full items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2">
            <TimePickerInput
              ref={hourRef}
              id="datetime-picker-hour-input"
              picker={hourCycle === 24 ? 'hours' : '12hours'}
              onDateChange={onChange}
              date={date}
              period={period}
              onRightFocus={() => minuteRef?.current?.focus()}
            />
          </div>
          {(granularity === 'minute' || granularity === 'second') && (
            <div className="inline-flex items-center gap-2">
              <span>:</span>
              <TimePickerInput
                picker="minutes"
                date={date}
                onDateChange={onChange}
                ref={minuteRef}
                onLeftFocus={() => hourRef?.current?.focus()}
                onRightFocus={() => secondRef?.current?.focus()}
              />
            </div>
          )}
          {granularity === 'second' && (
            <div className="inline-flex items-center gap-2">
              <span>:</span>
              <TimePickerInput
                picker="seconds"
                date={date}
                onDateChange={onChange}
                ref={secondRef}
                onLeftFocus={() => minuteRef?.current?.focus()}
                onRightFocus={() => periodRef?.current?.focus()}
              />
            </div>
          )}
          {hourCycle === 12 && (
            <div className="grid gap-1 text-center">
              <TimePeriodSelect
                ref={periodRef}
                period={period}
                setPeriod={setPeriod}
                date={date}
                onDateChange={handleDateChange}
                onLeftFocus={() => secondRef?.current?.focus()}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
)

type Granularity = 'day' | 'hour' | 'minute' | 'second'

type DatetimePickerProps = {
  value?: Date
  onChange?: (date: Date | undefined) => void
  onMonthChange?: (date: Date | undefined) => void
  disabled?: boolean
  /** showing `AM/PM` or not. */
  hourCycle?: 12 | 24
  placeholder?: string
  /**
   * The year range will be: `This year + yearRange` and `this year - yearRange`.
   * Default is 50.
   * For example:
   * This year is 2024, The year dropdown will be 1974 to 2024 which is generated by `2024 - 50 = 1974` and `2024 + 50 = 2074`.
   * */
  yearRange?: number
  /**
   * The format is derived from the `date-fns` documentation.
   * @reference https://date-fns.org/v3.6.0/docs/format
   **/
  displayFormat?: { hour24?: string; hour12?: string }
  /**
   * The granularity prop allows you to control the smallest unit that is displayed by DatetimePicker.
   * By default, the value is `second` which shows all time inputs.
   **/
  granularity?: Granularity
  className?: string
  /**
   * Show the default month and time when popup the calendar. Default is the current Date().
   **/
  defaultPopupValue?: Date
} & Pick<CalendarProps, 'locale' | 'weekStartsOn' | 'showWeekNumber' | 'showOutsideDays'>

type DatetimePickerRef = {
  value?: Date
} & Omit<HTMLButtonElement, 'value'>

const DatetimePicker = React.forwardRef<Partial<DatetimePickerRef>, DatetimePickerProps>(
  (
    {
      locale = enUS,
      defaultPopupValue = new Date(new Date().setHours(0, 0, 0, 0)),
      value,
      onChange,
      onMonthChange,
      hourCycle = 24,
      yearRange = 50,
      disabled = false,
      displayFormat,
      granularity = 'second',
      placeholder = 'Pick a date',
      className,
      ...props
    },
    ref
  ) => {
    const [month, setMonth] = React.useState<Date>(value ?? defaultPopupValue)
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const [displayDate, setDisplayDate] = React.useState<Date | undefined>(value ?? undefined)
    onMonthChange ||= onChange

    /**
     * Makes sure display date updates when value change on
     * parent component
     */
    React.useEffect(() => {
      setDisplayDate(value)
    }, [value])

    /**
     * carry over the current time when a user clicks a new day
     * instead of resetting to 00:00
     */
    const handleMonthChange = (newDay: Date | undefined) => {
      if (!newDay) {
        return
      }
      if (!defaultPopupValue) {
        newDay.setHours(month?.getHours() ?? 0, month?.getMinutes() ?? 0, month?.getSeconds() ?? 0)
        onMonthChange?.(newDay)
        setMonth(newDay)
        return
      }
      const diff = newDay.getTime() - defaultPopupValue.getTime()
      const diffInDays = diff / (1000 * 60 * 60 * 24)
      const newDateFull = add(defaultPopupValue, { days: Math.ceil(diffInDays) })
      newDateFull.setHours(
        month?.getHours() ?? 0,
        month?.getMinutes() ?? 0,
        month?.getSeconds() ?? 0
      )
      onMonthChange?.(newDateFull)
      setMonth(newDateFull)
    }

    const onSelect = (newDay?: Date) => {
      if (!newDay) {
        return
      }
      onChange?.(newDay)
      setMonth(newDay)
      setDisplayDate(newDay)
    }

    React.useImperativeHandle(
      ref,
      () => ({
        ...buttonRef.current,
        value: displayDate,
      }),
      [displayDate]
    )

    const initHourFormat = {
      hour24:
        displayFormat?.hour24 ??
        `PPP HH:mm${!granularity || granularity === 'second' ? ':ss' : ''}`,
      hour12:
        displayFormat?.hour12 ??
        `PP hh:mm${!granularity || granularity === 'second' ? ':ss' : ''} b`,
    }

    let loc = enUS
    const { options, localize, formatLong } = locale
    if (options && localize && formatLong) {
      loc = {
        ...enUS,
        options,
        localize,
        formatLong,
      }
    }

    return (
      <Popover>
        <PopoverTrigger asChild disabled={disabled}>
          <Button
            variant="outline"
            className={clx(
              'w-full justify-start text-left font-normal',
              !displayDate && 'text-muted-foreground',
              className
            )}
            ref={buttonRef}
          >
            <Lucide.Calendar className="mr-2 h-4 w-4" />
            {displayDate ? (
              format(
                displayDate,
                hourCycle === 24 ? initHourFormat.hour24 : initHourFormat.hour12,
                {
                  locale: loc,
                }
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={displayDate}
            month={month}
            onSelect={(newDate) => {
              if (newDate) {
                newDate.setHours(
                  month?.getHours() ?? 0,
                  month?.getMinutes() ?? 0,
                  month?.getSeconds() ?? 0
                )
                onSelect(newDate)
              }
            }}
            onMonthChange={handleMonthChange}
            yearRange={yearRange}
            locale={locale}
            {...props}
          />
          {granularity !== 'day' && (
            <div className="border-border border-t p-3">
              <TimePicker
                onChange={(value) => {
                  onChange?.(value)
                  setDisplayDate(value)
                  if (value) {
                    setMonth(value)
                  }
                }}
                date={month}
                hourCycle={hourCycle}
                granularity={granularity}
              />
            </div>
          )}
        </PopoverContent>
      </Popover>
    )
  }
)

DatetimePicker.displayName = 'DatetimePicker'
TimePeriodSelect.displayName = 'TimePeriodSelect'
TimePickerInput.displayName = 'TimePickerInput'
TimePicker.displayName = 'TimePicker'

export { DatetimePicker, TimePickerInput, TimePicker }
export type { DatetimePickerProps, DatetimePickerRef }
