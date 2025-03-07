import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const toastStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type ToastStyles = VariantProps<typeof toastStyles>

export { toastStyles, type ToastStyles }
