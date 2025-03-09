import { type VariantProps, tv } from 'tailwind-variants'

const textareaStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type TextareaStyles = VariantProps<typeof textareaStyles>

export { textareaStyles, type TextareaStyles }
