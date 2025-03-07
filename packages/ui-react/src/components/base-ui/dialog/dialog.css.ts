import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const dialogStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type DialogStyles = VariantProps<typeof dialogStyles>

export { dialogStyles, type DialogStyles }
