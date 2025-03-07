import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const switchStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type SwitchStyles = VariantProps<typeof switchStyles>

export { switchStyles, type SwitchStyles }
