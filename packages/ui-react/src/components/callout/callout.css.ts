import { type VariantProps, tv } from 'tailwind-variants'

const calloutStyles = tv({
  base: 'flex flex-col overflow-hidden rounded-md p-4 text-sm ring-1',
  slots: {
    header: 'flex items-center justify-start',
    icon: 'mr-1.5 size-5 shrink-0 p-0.5',
    title: 'font-semibold text-sm',
    content: 'overflow-y-auto',
    children: 'mt-2',
  },
  variants: {
    variant: {
      primary: 'text-primary-foreground bg-primary ring-ring/40',
      success: 'text-success-foreground bg-success ring-ring/40',
      error: 'text-destructive-foreground bg-destructive ring-ring/40',
      warning: 'text-warning-foreground bg-warning ring-ring/40',
      info: 'text-info-foreground bg-info ring-ring/40',
      neutral: 'text-muted-foreground bg-sidebar ring-ring/40',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type CalloutStyles = VariantProps<typeof calloutStyles>

export { calloutStyles, type CalloutStyles }
