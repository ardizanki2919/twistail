import { type VariantProps, tv } from 'tailwind-variants'

const selectStyles = tv({
  slots: {
    wrapper: 'relative',
    select: [
      'peer w-full cursor-pointer appearance-none truncate rounded-md border py-2 pl-3 pr-7 shadow-xs outline-hidden',
      'bg-background text-foreground border-input placeholder-muted-foreground hover:bg-accent transition-all sm:text-sm',
      'disabled:pointer-events-none disabled:bg-muted disabled:text-muted-foreground disabled:border-input',
      'focus:border-primary focus:ring-2 focus:ring-primary/20',
    ],
    icon: [
      'absolute right-2.5 top-1/2 -translate-y-1/2 size-5 text-muted-foreground',
      'peer-disabled:text-muted pointer-events-none',
    ],
  },
  variants: {
    hasError: {
      true: {
        select: 'ring-1 border-destructive ring-destructive/20',
      },
    },
  },
})

type SelectStyles = VariantProps<typeof selectStyles>

export { selectStyles, type SelectStyles }
