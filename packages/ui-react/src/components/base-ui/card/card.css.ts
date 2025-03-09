import { type VariantProps, tv } from 'tailwind-variants'

const cardStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type CardStyles = VariantProps<typeof cardStyles>

export { cardStyles, type CardStyles }
