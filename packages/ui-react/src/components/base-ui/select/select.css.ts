import { type VariantProps, tv } from 'tailwind-variants'

const selectStyles = tv({
  base: [
    'peer w-full cursor-pointer appearance-none truncate rounded-md border py-2 pl-3 pr-7 shadow-xs outline-hidden transition-all sm:text-sm',
    'bg-background text-foreground border-input placeholder-muted-foreground hover:bg-accent',
    'disabled:pointer-events-none disabled:bg-muted disabled:text-muted-foreground disabled:border-input',
    'focus:border-primary focus:ring-2 focus:ring-primary/20',
  ],
  variants: {
    hasError: {
      true: 'ring-1 border-destructive ring-destructive/20',
    },
  },
})

type SelectStyles = VariantProps<typeof selectStyles>

export { selectStyles, type SelectStyles }
