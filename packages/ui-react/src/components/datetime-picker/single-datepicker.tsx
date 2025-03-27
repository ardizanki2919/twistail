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

interface DatePreset {
  label: string
  date: Date
}

interface SingleDatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  inlinePresets?: boolean
  internalPresets?: boolean
  presets?: DatePreset[]
  locale?: Locale
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
  className,
}: SingleDatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>()

  const handlePresetSelect = (preset: DatePreset) => {
    setDate(preset.date)
  }

  const handleInlinePresetsValueChange = (value: string) => {
    setDate(undefined)
    const selectedPreset = presets.find((preset) => preset.label === value)
    if (selectedPreset) {
      handlePresetSelect(selectedPreset)
    }
  }

  const styles = singleDatePickerStyles({ inlinePresets, internalPresets })

  return (
    <div className={styles.root({ className })}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={clx(styles.trigger(), inlinePresets && styles.triggerWithInlinePresets())}
            data-empty={!date}
          >
            <Lucide.Calendar className={styles.triggerIcon()} />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={styles.popoverContent()} align="end">
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
                  defaultMonth={date}
                  selected={date}
                  onSelect={setDate}
                  autoFocus
                />
              </div>
            </>
          ) : (
            <Calendar
              mode="single"
              locale={locale}
              defaultMonth={date}
              selected={date}
              onSelect={setDate}
              autoFocus
            />
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
