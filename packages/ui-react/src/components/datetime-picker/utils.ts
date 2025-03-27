import { Locale, format } from 'date-fns'
import { DatePreset, DateRange, DateRangePreset, PickerProps } from './types'

/**
 * Checks if the browser locale uses 24-hour clock format
 */
export const isBrowserLocaleClockType24h = () => {
  const language = typeof window !== 'undefined' ? window.navigator.language : 'en-US'

  const hr = new Intl.DateTimeFormat(language, {
    hour: 'numeric',
  }).format()

  return Number.isInteger(Number(hr))
}

/**
 * Formats a date with optional time inclusion
 */
export const formatDate = (date: Date, locale: Locale, includeTime?: boolean): string => {
  const usesAmPm = !isBrowserLocaleClockType24h()
  let dateString: string

  if (includeTime) {
    dateString = usesAmPm
      ? format(date, 'dd MMM, yyyy h:mm a', { locale })
      : format(date, 'dd MMM, yyyy HH:mm', { locale })
  } else {
    dateString = format(date, 'dd MMM, yyyy', { locale })
  }

  return dateString
}

/**
 * Compares two dates for equality (day, month, year)
 */
export const compareDates = (date1: Date, date2: Date) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  )
}

/**
 * Compares two date ranges for equality
 */
export const compareRanges = (range1: DateRange, range2: DateRange) => {
  const from1 = range1.from
  const from2 = range2.from

  let equalFrom = false

  if (from1 && from2) {
    const sameFrom = compareDates(from1, from2)

    if (sameFrom) {
      equalFrom = true
    }
  }

  const to1 = range1.to
  const to2 = range2.to

  let equalTo = false

  if (to1 && to2) {
    const sameTo = compareDates(to1, to2)

    if (sameTo) {
      equalTo = true
    }
  }

  return equalFrom && equalTo
}

/**
 * Validates presets against picker rules
 */
export const validatePresets = (presets: DateRangePreset[] | DatePreset[], rules: PickerProps) => {
  const { toYear, fromYear, fromMonth, toMonth, fromDay, toDay } = rules

  if (presets && presets.length > 0) {
    const fromYearToUse = fromYear
    const toYearToUse = toYear

    for (const preset of presets) {
      if ('date' in preset) {
        const presetYear = preset.date.getFullYear()

        if (fromYear && presetYear < fromYear) {
          throw new Error(`Preset ${preset.label} is before fromYear ${fromYearToUse}.`)
        }

        if (toYear && presetYear > toYear) {
          throw new Error(`Preset ${preset.label} is after toYear ${toYearToUse}.`)
        }

        if (fromMonth) {
          const presetMonth = preset.date.getMonth()

          if (presetMonth < fromMonth.getMonth()) {
            throw new Error(`Preset ${preset.label} is before fromMonth ${fromMonth}.`)
          }
        }

        if (toMonth) {
          const presetMonth = preset.date.getMonth()

          if (presetMonth > toMonth.getMonth()) {
            throw new Error(`Preset ${preset.label} is after toMonth ${toMonth}.`)
          }
        }

        if (fromDay) {
          const presetDay = preset.date.getDate()

          if (presetDay < fromDay.getDate()) {
            throw new Error(`Preset ${preset.label} is before fromDay ${fromDay}.`)
          }
        }

        if (toDay) {
          const presetDay = preset.date.getDate()

          if (presetDay > toDay.getDate()) {
            throw new Error(
              `Preset ${preset.label} is after toDay ${format(toDay, 'MMM dd, yyyy')}.`
            )
          }
        }
      }

      if ('dateRange' in preset) {
        const presetFromYear = preset.dateRange.from?.getFullYear()
        const presetToYear = preset.dateRange.to?.getFullYear()

        if (presetFromYear && fromYear && presetFromYear < fromYear) {
          throw new Error(`Preset ${preset.label}'s 'from' is before fromYear ${fromYearToUse}.`)
        }

        if (presetToYear && toYear && presetToYear > toYear) {
          throw new Error(`Preset ${preset.label}'s 'to' is after toYear ${toYearToUse}.`)
        }

        if (fromMonth) {
          const presetMonth = preset.dateRange.from?.getMonth()

          if (presetMonth && presetMonth < fromMonth.getMonth()) {
            throw new Error(
              `Preset ${preset.label}'s 'from' is before fromMonth ${format(
                fromMonth,
                'MMM, yyyy'
              )}.`
            )
          }
        }

        if (toMonth) {
          const presetMonth = preset.dateRange.to?.getMonth()

          if (presetMonth && presetMonth > toMonth.getMonth()) {
            throw new Error(
              `Preset ${preset.label}'s 'to' is after toMonth ${format(toMonth, 'MMM, yyyy')}.`
            )
          }
        }

        if (fromDay) {
          const presetDay = preset.dateRange.from?.getDate()

          if (presetDay && presetDay < fromDay.getDate()) {
            throw new Error(
              `Preset ${
                preset.dateRange.from
              }'s 'from' is before fromDay ${format(fromDay, 'MMM dd, yyyy')}.`
            )
          }
        }

        if (toDay) {
          const presetDay = preset.dateRange.to?.getDate()

          if (presetDay && presetDay > toDay.getDate()) {
            throw new Error(
              `Preset ${preset.label}'s 'to' is after toDay ${format(toDay, 'MMM dd, yyyy')}.`
            )
          }
        }
      }
    }
  }
}
