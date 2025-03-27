import { format, startOfMonth, startOfYear, subDays } from 'date-fns'
import { type Locale, enUS } from 'date-fns/locale'
import * as Lucide from 'lucide-react'
import * as React from 'react'
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
import { singleDatePickerStyles } from './datetime-picker.css'
import { TimePicker } from './time-picker'
import { type Granularity } from './time-utils'

interface DatePreset {
  label: string
  date: Date
}

interface SingleDatePickerProps {
  inlinePresets?: boolean
  internalPresets?: boolean
  presets?: DatePreset[]
  locale?: Locale
  showTimePicker?: boolean
  displayFormat?: string
  granularity?: Granularity
  hourCycle?: 12 | 24
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
}

const defaultPresets: DatePreset[] = [
  {
    label: 'Today',
    date: new Date(),
  },
  {
    label: 'Yesterday',
    date: subDays(new Date(), 1),
  },
  {
    label: 'Start of Week',
    date: (() => {
      const date = new Date()
      const day = date.getDay()
      const diff = date.getDate() - day + (day === 0 ? -6 : 1)
      return new Date(date.setDate(diff))
    })(),
  },
  {
    label: 'Start of Month',
    date: startOfMonth(new Date()),
  },
  {
    label: 'Start of Year',
    date: startOfYear(new Date()),
  },
]

function SingleDatePicker({
  inlinePresets,
  internalPresets,
  presets = defaultPresets,
  locale = enUS,
  showTimePicker = false,
  displayFormat,
  granularity = 'second',
  hourCycle = 24,
  value,
  onChange,
  className,
  placeholder = 'Pick a date',
}: SingleDatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(value)
  const [month, setMonth] = React.useState<Date>(value || new Date())

  React.useEffect(() => {
    setDate(value)
  }, [value])

  const handlePresetSelect = (preset: DatePreset) => {
    const newDate = new Date(preset.date)
    if (date) {
      // Maintain time from the previous date
      newDate.setHours(
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      )
    }
    setDate(newDate)
    onChange?.(newDate)
  }

  const handleInlinePresetsValueChange = (value: string) => {
    const selectedPreset = presets.find((preset) => preset.label === value)
    if (selectedPreset) {
      handlePresetSelect(selectedPreset)
    }
  }

  const handleDateSelect = (newDate: Date | undefined) => {
    if (!newDate) return

    if (date) {
      // Maintain time from the previous date
      newDate.setHours(
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      )
    }

    setDate(newDate)
    setMonth(newDate)
    onChange?.(newDate)
  }

  const handleTimeChange = (newDate: Date | undefined) => {
    if (!newDate) return

    setDate(newDate)
    onChange?.(newDate)
  }

  const getDisplayFormat = () => {
    if (displayFormat) return displayFormat

    if (!showTimePicker) return 'PPP'

    if (hourCycle === 24) {
      return `PPP HH:mm${granularity === 'second' ? ':ss' : ''}`
    }

    return `PPP hh:mm${granularity === 'second' ? ':ss' : ''} b`
  }

  const styles = singleDatePickerStyles({ inlinePresets, internalPresets })

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
            {date ? format(date, getDisplayFormat(), { locale }) : <span>{placeholder}</span>}
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
                  mode="single"
                  locale={locale}
                  month={month}
                  defaultMonth={date}
                  selected={date}
                  onSelect={handleDateSelect}
                  onMonthChange={setMonth}
                  autoFocus
                />
              </div>
            </>
          ) : (
            <Calendar
              mode="single"
              locale={locale}
              month={month}
              defaultMonth={date}
              selected={date}
              onSelect={handleDateSelect}
              onMonthChange={setMonth}
              autoFocus
            />
          )}

          {showTimePicker && (
            <div className="border-border border-t p-3">
              <TimePicker
                date={date || new Date()}
                onChange={handleTimeChange}
                hourCycle={hourCycle}
                granularity={granularity}
              />
            </div>
          )}
        </PopoverContent>
      </Popover>
      {inlinePresets && (
        <Listbox onValueChange={handleInlinePresetsValueChange}>
          <ListboxTrigger className={styles.inlineListboxTrigger()}>
            <ListboxValue placeholder="Select Date" />
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

export { SingleDatePicker, type SingleDatePickerProps }
