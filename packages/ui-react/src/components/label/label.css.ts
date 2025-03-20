import { type VariantProps, tv } from 'tailwind-variants'

const labelStyles = tv({
  base: 'text-sm leading-none text-foreground',
  variants: {
    disabled: {
      true: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

type LabelStyles = VariantProps<typeof labelStyles>

export { labelStyles, type LabelStyles }
