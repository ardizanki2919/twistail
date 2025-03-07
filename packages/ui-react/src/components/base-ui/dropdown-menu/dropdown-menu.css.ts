import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const dropdownMenuStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type DropdownMenuStyles = VariantProps<typeof dropdownMenuStyles>

export { dropdownMenuStyles, type DropdownMenuStyles }
