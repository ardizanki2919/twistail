import { type VariantProps, tv } from 'tailwind-variants'

const formStyles = tv({
  slots: {
    root: 'w-full',
    field: 'mb-4 grid gap-2',
    label: [
      'text-sm font-medium leading-none text-foreground',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    ],
    control: [
      'flex w-full appearance-none rounded-md border shadow-xs outline-hidden transition sm:text-sm',
      'border-input bg-background text-foreground placeholder:text-muted-foreground px-3 py-2',
      'focus:border-primary focus:ring-2 focus:ring-primary/20',
      'disabled:cursor-not-allowed disabled:border-input disabled:bg-muted disabled:text-muted-foreground',
      'data-[invalid=true]:ring-1 data-[invalid=true]:border-destructive data-[invalid=true]:ring-destructive/20',
      'data-[valid=true]:border-success data-[valid=true]:ring-1 data-[valid]:ring-success/20',
    ],
    message: 'text-xs font-medium text-destructive',
    validityState: 'text-sm text-muted-foreground',
  },
  variants: {
    size: {
      xs: {
        control: 'h-7 text-xs px-2.5 py-1.5',
        submit: 'h-7 px-2.5 text-xs',
        label: 'text-xs',
        message: 'text-xs',
        validityState: 'text-xs',
      },
      sm: {
        control: 'h-8 text-xs px-3 py-1.5',
        submit: 'h-8 px-3 text-xs',
        label: 'text-xs',
        message: 'text-xs',
        validityState: 'text-xs',
      },
      md: {
        control: 'h-10 px-4 py-2',
        submit: 'h-10 px-4 text-sm',
      },
      lg: {
        control: 'h-12 text-base px-4 py-3',
        submit: 'h-12 px-8 text-base',
      },
      xl: {
        control: 'h-14 text-base px-4 py-3',
        submit: 'h-14 px-8 text-base',
      },
    },
    hasError: {
      true: {
        control: 'ring-1 border-destructive ring-destructive/20',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    hasError: false,
  },
})

type FormStyles = VariantProps<typeof formStyles>

export { formStyles, type FormStyles }
