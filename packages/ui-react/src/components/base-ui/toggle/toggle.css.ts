// import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const toggleStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type ToggleStyles = VariantProps<typeof toggleStyles>

export { toggleStyles, type ToggleStyles }
