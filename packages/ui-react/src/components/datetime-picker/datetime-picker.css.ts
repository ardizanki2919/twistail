import { type VariantProps, tv } from 'tailwind-variants'

const datetimePickerStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type DatetimePickerStyles = VariantProps<typeof datetimePickerStyles>

export { datetimePickerStyles, type DatetimePickerStyles }
