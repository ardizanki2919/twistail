import { type VariantProps, tv } from 'tailwind-variants'

const paginationStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type PagnationStyles = VariantProps<typeof paginationStyles>

export { paginationStyles, type PagnationStyles }
