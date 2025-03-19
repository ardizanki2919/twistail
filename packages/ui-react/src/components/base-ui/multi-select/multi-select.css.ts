import { type VariantProps, tv } from 'tailwind-variants'

const multiSelectStyles = tv({
  slots: {
    root: 'hover:-translate-y-1 m-1 transition delay-150 duration-300 ease-in-out hover:scale-110',
    badge: '',
  },
  variants: {
    variant: {
      default: 'border-foreground/10 bg-card text-foreground hover:bg-card/80',
      secondary:
        'border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive:
        'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
      inverted: 'inverted',
    },
  },
  defaultVariants: { variant: 'default' },
})

type MultiSelectStyles = VariantProps<typeof multiSelectStyles>

export { multiSelectStyles, type MultiSelectStyles }
