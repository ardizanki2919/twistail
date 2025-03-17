import { type VariantProps, tv } from 'tailwind-variants'

const textareaStyles = tv({
  base: [
    'flex min-h-[4rem] w-full rounded-md border px-3 py-1.5 shadow-xs outline-hidden transition-colors sm:text-sm',
    'text-foreground border-input bg-background placeholder-muted-foreground',
    'disabled:border-input disabled:bg-muted disabled:text-muted-foreground',
    'focus:border-primary focus:ring-2 focus:ring-primary/20',
    'aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-destructive/20 aria-[invalid=true]:border-destructive',
    'invalid:ring-2 invalid:ring-destructive/20 invalid:border-destructive',
  ],
  variants: {
    hasError: {
      true: 'border-destructive ring-1 ring-destructive/20',
    },
  },
  defaultVariants: {
    hasError: false,
  },
})

type TextareaStyles = VariantProps<typeof textareaStyles>

export { textareaStyles, type TextareaStyles }
