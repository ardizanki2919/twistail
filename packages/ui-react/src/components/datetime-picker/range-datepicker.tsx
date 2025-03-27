import { format, startOfMonth, startOfYear, subDays } from 'date-fns'
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
import { rangeDatePickerStyles } from './datetime-picker.css'

interface DateRangePreset {
  label: string
  range: {
    from: Date
    to?: Date
  }
}

interface RangeDatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  inlinePresets?: boolean
  internalPresets?: boolean
  numberOfMonths?: 2 | 3 | 4 | 5 | 6
  presets?: DateRangePreset[]
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

export function RangeDatePicker({
  inlinePresets,
  internalPresets,
  numberOfMonths = 2,
  presets = defaultPresets,
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

  const styles = rangeDatePickerStyles()

  return (
    <div className={styles.root({ className })}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={clx(
              'w-[260px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
              inlinePresets && 'rounded-r-none'
            )}
          >
            <Lucide.Calendar className="mr-2 h-4 w-4" />
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
        <PopoverContent className="w-auto p-0" align="end">
          {internalPresets ? (
            <>
              <div className="flex">
                <div className="justify-evenly px-3 py-4">
                  <div className="flex w-32 flex-col gap-1">
                    {presets.map((preset) => (
                      <Button
                        key={preset.label}
                        onClick={() => handlePresetSelect(preset)}
                        className="w-full justify-start text-left"
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
          <ListboxTrigger className="w-[140px] rounded-l-none border-l-0">
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
