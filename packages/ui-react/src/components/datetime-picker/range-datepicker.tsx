import { format, startOfMonth, startOfYear, subDays } from 'date-fns'
import { type Locale, enUS } from 'date-fns/locale'
import * as Lucide from 'lucide-react'
import * as React from 'react'
import { DateRange } from 'react-day-picker'
import { clx } from 'twistail-utils'
import { Button } from '#/components/button'
import { Calendar } from '#/components/calendar'
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxTrigger,
  ListboxValue,
} from '#/components/listbox'
import { Popover, PopoverContent, PopoverTrigger } from '#/components/popover'
import { type RangeDatePickerStyles, rangeDatePickerStyles } from './datetime-picker.css'
import { TimePicker } from './time-picker'
import { type Granularity } from './time-utils'

interface DateRangePreset {
  label: string
  range: {
    from: Date
    to?: Date
  }
}

interface RangeDatePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    RangeDatePickerStyles {
  numberOfMonths?: 2 | 3 | 4 | 5 | 6
  presets?: DateRangePreset[]
  locale?: Locale
  withTimePicker?: boolean
  granularity?: Granularity
  hourCycle?: 12 | 24
  displayFormat?: string
  value?: DateRange
  onChange?: (range: DateRange | undefined) => void
  placeholder?: string
}

const defaultPresets: DateRangePreset[] = [
  {
    label: 'Today',
    range: {
      from: new Date(),
      to: new Date(),
    },
  },
  {
    label: 'Yesterday',
    range: {
      from: subDays(new Date(), 1),
      to: subDays(new Date(), 1),
    },
  },
  {
    label: 'Last 7 Days',
    range: {
      from: subDays(new Date(), 6),
      to: new Date(),
    },
  },
  {
    label: 'Last 30 Days',
    range: {
      from: subDays(new Date(), 29),
      to: new Date(),
    },
  },
  {
    label: 'Month to Date',
    range: {
      from: startOfMonth(new Date()),
      to: new Date(),
    },
  },
  {
    label: 'Year to Date',
    range: {
      from: startOfYear(new Date()),
      to: new Date(),
    },
  },
  {
    label: 'This Year',
    range: {
      from: new Date(new Date().getFullYear(), 0, 1),
      to: new Date(),
    },
  },
]

function RangeDatePicker({
  inlinePresets,
  internalPresets,
  numberOfMonths = 2,
  presets = defaultPresets,
  locale = enUS,
  withTimePicker = false,
  granularity = 'second',
  hourCycle = 24,
  displayFormat,
  value,
  onChange,
  placeholder = 'Pick a date range',
  className,
}: RangeDatePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(value)

  React.useEffect(() => {
    setDate(value)
  }, [value])

  const handlePresetSelect = (preset: DateRangePreset) => {
    const newRange = {
      from: new Date(preset.range.from),
      to: preset.range.to ? new Date(preset.range.to) : undefined,
    }

    // Preserve time if we already have dates
    if (date?.from && newRange.from) {
      newRange.from.setHours(
        date.from.getHours(),
        date.from.getMinutes(),
        date.from.getSeconds(),
        date.from.getMilliseconds()
      )
    }

    if (date?.to && newRange.to) {
      newRange.to.setHours(
        date.to.getHours(),
        date.to.getMinutes(),
        date.to.getSeconds(),
        date.to.getMilliseconds()
      )
    }

    setDate(newRange)
    onChange?.(newRange)
  }

  const handleInlinePresetsValueChange = (value: string) => {
    setDate(undefined)
    const selectedPreset = presets.find((preset) => preset.label === value)
    if (selectedPreset) {
      handlePresetSelect(selectedPreset)
    }
  }

  const handleRangeSelect = (newRange: DateRange | undefined) => {
    if (!newRange) {
      setDate(undefined)
      onChange?.(undefined)
      return
    }

    // Preserve time if we already have dates
    const updatedRange = { ...newRange }

    if (date?.from && updatedRange.from) {
      updatedRange.from.setHours(
        date.from.getHours(),
        date.from.getMinutes(),
        date.from.getSeconds(),
        date.from.getMilliseconds()
      )
    }

    if (date?.to && updatedRange.to) {
      updatedRange.to.setHours(
        date.to.getHours(),
        date.to.getMinutes(),
        date.to.getSeconds(),
        date.to.getMilliseconds()
      )
    }

    setDate(updatedRange)
    onChange?.(updatedRange)
  }

  const handleFromTimeChange = (newDate: Date | undefined) => {
    if (!newDate || !date) return

    const updatedRange = { ...date }
    updatedRange.from = newDate

    setDate(updatedRange)
    onChange?.(updatedRange)
  }

  const handleToTimeChange = (newDate: Date | undefined) => {
    if (!newDate || !date || !date.to) return

    const updatedRange = { ...date }
    updatedRange.to = newDate

    setDate(updatedRange)
    onChange?.(updatedRange)
  }

  const getDisplayFormat = () => {
    if (displayFormat) return displayFormat

    if (!withTimePicker) return 'PPP'

    if (hourCycle === 24) {
      return `PPP HH:mm${granularity === 'second' ? ':ss' : ''}`
    }

    return `PPP hh:mm${granularity === 'second' ? ':ss' : ''} b`
  }

  const styles = rangeDatePickerStyles({ inlinePresets, internalPresets })

  return (
    <div className={styles.root({ className })}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={clx(styles.trigger(), inlinePresets && styles.triggerWithInlinePresets())}
            data-empty={!date}
          >
            <Lucide.Calendar className={styles.triggerIcon()} />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, getDisplayFormat(), { locale })} -{' '}
                  {format(date.to, getDisplayFormat(), { locale })}
                </>
              ) : (
                format(date.from, getDisplayFormat(), { locale })
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={styles.popoverContent()} align="center">
          {internalPresets ? (
            <>
              <div className={styles.calendarWrapper()}>
                <div className={styles.presetsContainer()}>
                  <div className={styles.presetsColumn()}>
                    {presets.map((preset) => (
                      <Button
                        key={preset.label}
                        onClick={() => handlePresetSelect(preset)}
                        className={styles.presetButton()}
                        variant="ghost"
                        size="sm"
                      >
                        {preset.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <Calendar
                  mode="range"
                  locale={locale}
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={handleRangeSelect}
                  numberOfMonths={numberOfMonths}
                  autoFocus
                />
              </div>
            </>
          ) : (
            <Calendar
              mode="range"
              locale={locale}
              defaultMonth={date?.from}
              numberOfMonths={numberOfMonths}
              onSelect={handleRangeSelect}
              selected={date}
              autoFocus
            />
          )}

          {withTimePicker && (
            <div className="border-border border-t pt-3 pb-1">
              <div className="flex flex-row items-start justify-around gap-8 space-y-2 px-2">
                <div>
                  <div className="px-2 font-medium text-sm">Start Time</div>
                  <TimePicker
                    date={date?.from || new Date()}
                    onChange={handleFromTimeChange}
                    hourCycle={hourCycle}
                    granularity={granularity}
                  />
                </div>

                {date?.to && (
                  <div>
                    <div className="px-2 font-medium text-sm">End Time</div>
                    <TimePicker
                      date={date.to}
                      onChange={handleToTimeChange}
                      hourCycle={hourCycle}
                      granularity={granularity}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
      {inlinePresets && (
        <Listbox onValueChange={handleInlinePresetsValueChange}>
          <ListboxTrigger className={styles.inlineListboxTrigger()}>
            <ListboxValue placeholder="Select Range" />
          </ListboxTrigger>
          <ListboxContent position="popper">
            {presets.map((preset) => (
              <ListboxItem key={preset.label} value={preset.label}>
                {preset.label}
              </ListboxItem>
            ))}
          </ListboxContent>
        </Listbox>
      )}
    </div>
  )
}

export { RangeDatePicker, type RangeDatePickerProps }
