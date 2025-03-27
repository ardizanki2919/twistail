import { RangeDatePicker } from './range-date-picker'
import { SingleDatePicker } from './single-date-picker'
import type { RangeDatePickerProps, SingleDatePickerProps } from './types'
import { validatePresets } from './utils'

const DatePicker = ({ presets, ...props }: SingleDatePickerProps) => {
  if (presets) {
    validatePresets(presets, props)
  }

  return <SingleDatePicker presets={presets} {...props} />
}

const DateRangePicker = ({ presets, ...props }: RangeDatePickerProps) => {
  if (presets) {
    validatePresets(presets, props)
  }
  return <RangeDatePicker presets={presets} {...props} />
}

DatePicker.displayName = 'DatePicker'
DateRangePicker.displayName = 'DateRangePicker'

export { DatePicker, DateRangePicker }
