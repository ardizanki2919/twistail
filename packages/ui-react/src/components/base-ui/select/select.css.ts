// import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const selectStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type SelectStyles = VariantProps<typeof selectStyles>

export { selectStyles, type SelectStyles }
