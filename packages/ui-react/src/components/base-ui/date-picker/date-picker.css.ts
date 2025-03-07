import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const datePickerStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type DatePickerStyles = VariantProps<typeof datePickerStyles>

export { datePickerStyles, type DatePickerStyles }
