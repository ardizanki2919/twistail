// import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const dividerStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type DividerStyles = VariantProps<typeof dividerStyles>

export { dividerStyles, type DividerStyles }
