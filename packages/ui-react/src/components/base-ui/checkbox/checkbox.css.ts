// import { focusRing } from 'twistail-react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const checkboxStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type CheckboxStyles = VariantProps<typeof checkboxStyles>

export { checkboxStyles, type CheckboxStyles }
