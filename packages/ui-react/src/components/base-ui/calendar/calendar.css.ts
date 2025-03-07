// import { focusRing } from 'twistail-react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const calendarStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type CalendarStyles = VariantProps<typeof calendarStyles>

export { calendarStyles, type CalendarStyles }
