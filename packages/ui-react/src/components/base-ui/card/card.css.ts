import { type VariantProps, tv } from 'tailwind-variants'

const cardStyles = tv({
  base: [
    // base
    'relative w-full rounded-lg border p-6 text-left shadow-xs',
    // background color
    'bg-white dark:bg-gray-950',
    // border color
    'border-gray-200 dark:border-gray-900',
  ],
})

type CardStyles = VariantProps<typeof cardStyles>

export { cardStyles, type CardStyles }
