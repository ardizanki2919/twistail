import * as Lucide from 'lucide-react'
import * as React from 'react'
import { Input } from '#/components/input'
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxTrigger,
  ListboxValue,
} from '#/components/listbox'
import { timePickerStyles } from './datetime-picker.css'
import type { Granularity, Period, TimePickerType } from './time-utils'
import { display12HourValue } from './time-utils'
import { getArrowByType, getDateByType, setDateByType } from './time-utils'

interface TimePickerProps {
  date?: Date | null
  onChange?: (date: Date | undefined) => void
  hourCycle?: 12 | 24
  /**
   * Determines the smallest unit that is displayed in the time picker.
   * Default is 'second'.
   */
  granularity?: Granularity
  className?: string
}

interface TimePickerRef {
  minuteRef: HTMLInputElement | null
  hourRef: HTMLInputElement | null
  secondRef: HTMLInputElement | null
  periodRef: HTMLButtonElement | null
}

const TimePicker = React.forwardRef<TimePickerRef, TimePickerProps>(
  ({ date, onChange, hourCycle = 24, granularity = 'second', className }, forwardedRef) => {
    const minuteRef = React.useRef<HTMLInputElement>(null)
    const hourRef = React.useRef<HTMLInputElement>(null)
    const secondRef = React.useRef<HTMLInputElement>(null)
    const periodRef = React.useRef<HTMLButtonElement>(null)
    const [period, setPeriod] = React.useState<Period>(date && date.getHours() >= 12 ? 'PM' : 'AM')

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

    const styles = timePickerStyles({ hourCycle, granularity })

    return (
      <div className={styles.container({ className })}>
        <label htmlFor="datetime-picker-hour-input" className={styles.label()}>
          <Lucide.Clock className={styles.labelIcon()} />
        </label>
        <TimePickerInput
          picker={hourCycle === 24 ? 'hours' : '12hours'}
          date={date}
          id="datetime-picker-hour-input"
          onDateChange={onChange}
          ref={hourRef}
          period={period}
          onRightFocus={() => minuteRef?.current?.focus()}
          className={styles.input()}
        />
        {(granularity === 'minute' || granularity === 'second') && (
          <>
            <span className={styles.separator()}>:</span>
            <TimePickerInput
              picker="minutes"
              date={date}
              onDateChange={onChange}
              ref={minuteRef}
              onLeftFocus={() => hourRef?.current?.focus()}
              onRightFocus={() => secondRef?.current?.focus()}
              className={styles.input()}
            />
          </>
        )}
        {granularity === 'second' && (
          <>
            <span className={styles.separator()}>:</span>
            <TimePickerInput
              picker="seconds"
              date={date}
              onDateChange={onChange}
              ref={secondRef}
              onLeftFocus={() => minuteRef?.current?.focus()}
              onRightFocus={() => periodRef?.current?.focus()}
              className={styles.input()}
            />
          </>
        )}
        {hourCycle === 12 && (
          <div className={styles.periodContainer()}>
            <TimePeriodSelect
              period={period}
              setPeriod={setPeriod}
              date={date}
              onDateChange={(date) => {
                onChange?.(date)
                if (date && date?.getHours() >= 12) {
                  setPeriod('PM')
                } else {
                  setPeriod('AM')
                }
              }}
              ref={periodRef}
              onLeftFocus={() => secondRef?.current?.focus()}
              className={styles.periodTrigger()}
            />
          </div>
        )}
      </div>
    )
  }
)

interface TimePeriodSelectProps {
  period: Period
  setPeriod?: (m: Period) => void
  date?: Date | null
  onDateChange?: (date: Date | undefined) => void
  onRightFocus?: () => void
  onLeftFocus?: () => void
  className?: string
}

const TimePeriodSelect = React.forwardRef<HTMLButtonElement, TimePeriodSelectProps>(
  (
    { period, setPeriod, date, onDateChange, onLeftFocus, onRightFocus, className },
    forwardedRef
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'ArrowRight') onRightFocus?.()
      if (e.key === 'ArrowLeft') onLeftFocus?.()
    }

    const handleValueChange = (value: Period) => {
      setPeriod?.(value)
      /**
       * Trigger an update whenever the user switches between AM and PM;
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
      <div className="flex h-10 items-center">
        <Listbox defaultValue={period} onValueChange={(value: Period) => handleValueChange(value)}>
          <ListboxTrigger ref={forwardedRef} className={className} onKeyDown={handleKeyDown}>
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
    forwardedRef
  ) => {
    const [flag, setFlag] = React.useState<boolean>(false)
    const [prevIntKey, setPrevIntKey] = React.useState<string>('0')

    /**
     * Allow the user to enter the second digit within 2 seconds
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

    return (
      <Input
        ref={forwardedRef}
        id={id || picker}
        name={name || picker}
        className={className}
        value={value || calculatedValue}
        onChange={(e) => {
          e.preventDefault()
          onChange?.(e)
        }}
        type={type}
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

TimePickerInput.displayName = 'TimePickerInput'
TimePeriodSelect.displayName = 'TimePeriodSelect'
TimePicker.displayName = 'TimePicker'

export { TimePicker, TimePeriodSelect, TimePickerInput }
export type { TimePickerProps, TimePickerRef, TimePickerInputProps }
