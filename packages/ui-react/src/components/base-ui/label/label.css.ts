// import { focusRing } from 'twistail-react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const labelStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type LabelStyles = VariantProps<typeof labelStyles>

export { labelStyles, type LabelStyles }
