import { AriaTimeFieldProps, TimeValue } from '@react-aria/datepicker'
import { DateFieldState, DateSegment } from '@react-stately/datepicker'
import { Locale } from 'date-fns'
import { Matcher } from 'react-day-picker'
import { VariantProps } from 'tailwind-variants'
import { triggerStyles } from './datetime-utils'

// Time Input Types
export type TimeSegmentProps = {
  segment: DateSegment
  state: DateFieldState
}

export type TimeInputProps = Omit<
  AriaTimeFieldProps<TimeValue>,
  'label' | 'shouldForceLeadingZeros' | 'description' | 'errorMessage'
>

// Trigger Types
export interface TriggerProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof triggerStyles> {
  placeholder?: string
}

// Date Range Types
export type DateRange = {
  from: Date | undefined
  to?: Date | undefined
}

// Preset Types
export interface Preset {
  label: string
}

export interface DatePreset extends Preset {
  date: Date
}

export interface DateRangePreset extends Preset {
  dateRange: DateRange
}

export type PresetContainerProps<TPreset extends Preset, TValue> = {
  presets: TPreset[]
  onSelect: (value: TValue) => void
  currentValue?: TValue
}

// Calendar Props
export type CalendarProps = {
  fromYear?: number
  toYear?: number
  fromMonth?: Date
  toMonth?: Date
  fromDay?: Date
  toDay?: Date
  fromDate?: Date
  toDate?: Date
  locale?: Locale
}

// Translations
export type Translations = {
  cancel?: string
  apply?: string
  start?: string
  end?: string
  range?: string
}

// Picker Props
export interface PickerProps extends CalendarProps {
  className?: string
  disabled?: boolean
  disabledDays?: Matcher | Matcher[] | undefined
  required?: boolean
  showTimePicker?: boolean
  placeholder?: string
  disableNavigation?: boolean
  hasError?: boolean
  id?: string
  translations?: Translations
  align?: 'center' | 'end' | 'start'
  'aria-invalid'?: boolean
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-required'?: boolean
}

// Single Date Picker Props
export interface SingleProps extends Omit<PickerProps, 'translations'> {
  presets?: DatePreset[]
  defaultValue?: Date
  value?: Date
  onChange?: (date: Date | undefined) => void
  translations?: Omit<Translations, 'range'>
}

// Range Date Picker Props
export interface RangeProps extends PickerProps {
  presets?: DateRangePreset[]
  defaultValue?: DateRange
  value?: DateRange
  onChange?: (dateRange: DateRange | undefined) => void
}

export type SingleDatePickerProps = {
  presets?: DatePreset[]
  defaultValue?: Date
  value?: Date
  onChange?: (date: Date | undefined) => void
} & PickerProps

export type RangeDatePickerProps = {
  presets?: DateRangePreset[]
  defaultValue?: DateRange
  value?: DateRange
  onChange?: (dateRange: DateRange | undefined) => void
} & PickerProps
