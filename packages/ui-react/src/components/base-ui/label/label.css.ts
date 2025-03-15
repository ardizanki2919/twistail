import { type VariantProps, tv } from 'tailwind-variants'

const labelStyles = tv({
  base: 'text-sm leading-none text-gray-900 dark:text-gray-50',
  variants: {
    disabled: {
      true: 'text-gray-400 dark:text-gray-600',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

type LabelStyles = VariantProps<typeof labelStyles>

export { labelStyles, type LabelStyles }
