import { type VariantProps, tv } from 'tailwind-variants'

const badgeStyles = tv({
  base: [
    'inline-flex items-center gap-x-1 rounded-md px-2 py-1',
    'font-medium text-xs ring-1 ring-inset whitespace-nowrap',
  ],
  variants: {
    variant: {
      neutral: 'text-foreground bg-sidebar ring-ring/40',
      primary: 'text-primary-foreground bg-primary ring-ring/40',
      success: 'text-success-foreground bg-success ring-ring/40',
      error: 'text-destructive-foreground bg-destructive ring-ring/40',
      warning: 'text-warning-foreground bg-warning ring-ring/40',
      info: 'text-info-foreground bg-info ring-ring/40',
    },
  },
  defaultVariants: {
    variant: 'neutral',
  },
})

type BadgeStyles = VariantProps<typeof badgeStyles>

export { badgeStyles, type BadgeStyles }
