import { type VariantProps, tv } from 'tailwind-variants'

const tooltipStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type TooltipStyles = VariantProps<typeof tooltipStyles>

export { tooltipStyles, type TooltipStyles }
