// import { focusRing } from 'twistail-react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const tableStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type TableStyles = VariantProps<typeof tableStyles>

export { tableStyles, type TableStyles }
