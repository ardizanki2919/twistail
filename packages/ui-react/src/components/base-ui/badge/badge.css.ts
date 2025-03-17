import { type VariantProps, tv } from 'tailwind-variants'

const badgeStyles = tv({
  base: [
    'inline-flex items-center gap-x-1 rounded-md px-2 py-1',
    'font-medium text-xs ring-1 ring-inset whitespace-nowrap',
  ],
  variants: {
    variant: {
      primary: 'bg-primary/10 text-primary ring-primary/30',
      neutral: 'bg-muted text-muted-foreground ring-border',
      success: 'bg-success/10 text-success ring-success/20',
      error: 'bg-destructive/10 text-destructive ring-destructive/20',
      warning: 'bg-warning/10 text-warning ring-warning/20',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type BadgeStyles = VariantProps<typeof badgeStyles>

export { badgeStyles, type BadgeStyles }
