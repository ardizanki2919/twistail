import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const calloutStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type CalloutStyles = VariantProps<typeof calloutStyles>

export { calloutStyles, type CalloutStyles }
