import { type VariantProps, tv } from 'tailwind-variants'

const cardStyles = tv({
  base: [
    'relative w-full rounded-lg border p-6 text-left shadow-xs',
    'bg-card text-card-foreground border-border',
  ],
})

type CardStyles = VariantProps<typeof cardStyles>

export { cardStyles, type CardStyles }
