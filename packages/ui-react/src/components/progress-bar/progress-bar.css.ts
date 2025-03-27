import { type VariantProps, tv } from 'tailwind-variants'

const progressBarStyles = tv({
  base: [],
  slots: {},
  variants: {},
  defaultVariants: {},
})

type ProgressBarStyles = VariantProps<typeof progressBarStyles>

export { progressBarStyles, type ProgressBarStyles }
