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

interface DateRangePreset {
  label: string
  range: {
    from: Date
    to?: Date
  }
}

interface RangeDatePickerProps extends React.HTMLAttributes<HTMLDivElement>, RangeDatePickerStyles {
  numberOfMonths?: 2 | 3 | 4 | 5 | 6
  presets?: DateRangePreset[]
  locale?: Locale
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
  className,
}: RangeDatePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>()

  const handlePresetSelect = (preset: DateRangePreset) => {
    setDate({
      from: preset.range.from,
      to: preset.range.to,
    })
  }

  const handleInlinePresetsValueChange = (value: string) => {
    setDate(undefined)
    const selectedPreset = presets.find((preset) => preset.label === value)
    if (selectedPreset) {
      handlePresetSelect(selectedPreset)
    }
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
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={styles.popoverContent()} align="start">
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
                  onSelect={setDate}
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
              onSelect={setDate}
              selected={date}
              autoFocus
            />
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
