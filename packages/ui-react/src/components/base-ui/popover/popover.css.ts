import { type VariantProps, tv } from 'tailwind-variants'

const popoverStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type PopoverStyles = VariantProps<typeof popoverStyles>

export { popoverStyles, type PopoverStyles }
