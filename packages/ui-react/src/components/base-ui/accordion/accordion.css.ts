import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const accordionStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type AccordionStyles = VariantProps<typeof accordionStyles>

export { accordionStyles, type AccordionStyles }
