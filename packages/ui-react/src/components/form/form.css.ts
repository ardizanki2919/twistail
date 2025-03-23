import { type VariantProps, tv } from 'tailwind-variants'

const formStyles = tv({
  slots: {
    root: 'w-full',
    field: 'mb-4 grid gap-1.5',
    label: [
      'text-sm font-medium leading-none',
      'text-foreground',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    ],
    control: [
      'flex w-full appearance-none rounded-md border shadow-xs outline-hidden transition sm:text-sm',
      'border-input bg-background text-foreground placeholder:text-muted-foreground px-3 py-2',
      'focus:border-primary focus:ring-2 focus:ring-primary/20',
      'disabled:cursor-not-allowed disabled:border-input disabled:bg-muted disabled:text-muted-foreground',
    ],
    message: ['text-sm font-medium', 'text-destructive'],
    validityState: ['text-sm', 'text-muted-foreground'],
    submit: [
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
      'bg-primary text-primary-foreground hover:bg-primary/90',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'h-10 px-4 py-2',
    ],
  },
  variants: {
    size: {
      default: {
        control: 'h-10',
        submit: 'h-10 px-4',
      },
      sm: {
        control: 'h-8 text-xs px-2.5 py-1.5',
        submit: 'h-8 px-3 text-xs',
        label: 'text-xs',
        message: 'text-xs',
        validityState: 'text-xs',
      },
      lg: {
        control: 'h-12 text-base px-4 py-3',
        submit: 'h-12 px-6 text-base',
      },
    },
    hasError: {
      true: {
        control: 'ring-1 border-destructive ring-destructive',
      },
    },
  },
  defaultVariants: {
    size: 'default',
    hasError: false,
  },
})

type FormStyles = VariantProps<typeof formStyles>

export { formStyles, type FormStyles }
