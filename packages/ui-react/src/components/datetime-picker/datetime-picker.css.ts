import { type VariantProps, tv } from 'tailwind-variants'

const singleDatePickerStyles = tv({
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

const rangeDatePickerStyles = tv({
  slots: {
    root: 'inline-flex',
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type SingleDatePickerStyles = VariantProps<typeof singleDatePickerStyles>
type RangeDatePickerStyles = VariantProps<typeof rangeDatePickerStyles>

export { singleDatePickerStyles, rangeDatePickerStyles }
export type { SingleDatePickerStyles, RangeDatePickerStyles }
