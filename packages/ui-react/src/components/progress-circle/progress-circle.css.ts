import { type VariantProps, tv } from 'tailwind-variants'

const progressCircleStyles = tv({
  base: 'relative',
  slots: {
    root: 'relative',
    svg: '-rotate-90 transform',
    background: 'transition-colors ease-linear',
    indicator: 'transition-colors ease-linear',
    content: 'absolute inset-0 flex items-center justify-center',
  },
  variants: {
    variant: {
      default: {
        background: 'stroke-secondary',
        indicator: 'stroke-primary',
      },
      neutral: {
        background: 'stroke-muted',
        indicator: 'stroke-muted-foreground',
      },
      warning: {
        background: 'stroke-warning/30',
        indicator: 'stroke-warning',
      },
      error: {
        background: 'stroke-destructive/30',
        indicator: 'stroke-destructive',
      },
      success: {
        background: 'stroke-success/30',
        indicator: 'stroke-success',
      },
    },
    animated: {
      true: {
        indicator: 'transform-gpu transition-all duration-300 ease-in-out',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    animated: true,
  },
})

type ProgressCircleStyles = VariantProps<typeof progressCircleStyles>

export { progressCircleStyles, type ProgressCircleStyles }
