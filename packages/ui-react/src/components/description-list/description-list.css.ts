import { type VariantProps, tv } from 'tailwind-variants'

const descriptionListStyles = tv({
  slots: {
    dl: 'w-full grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6',
    dt: [
      'col-start-1 border-t border-border pt-3 text-muted-foreground',
      'first:border-none sm:border-t sm:border-border sm:py-3',
    ],
    dd: ['pt-1 pb-3 text-foreground', 'sm:border-t sm:border-border sm:py-3 sm:nth-2:border-none'],
  },
  variants: {
    variant: {
      default: {},
      bordered: {
        dl: 'border border-border rounded-lg p-4',
      },
      card: {
        dl: 'border border-border rounded-lg p-4 bg-card text-card-foreground shadow-sm',
      },
    },
    size: {
      xs: {
        dl: 'text-xs/5 sm:text-xs/5',
        dt: 'text-xs pt-2',
        dd: 'text-xs pt-1 pb-2',
      },
      sm: {
        dl: 'text-sm/5 sm:text-sm/5',
        dt: 'text-sm pt-2.5',
        dd: 'text-sm pt-1 pb-2.5',
      },
      md: {
        dl: 'text-base/6 sm:text-sm/6',
        dt: 'pt-3',
        dd: 'pt-1 pb-3',
      },
      lg: {
        dl: 'text-lg/6 sm:text-base/6',
        dt: 'pt-3.5',
        dd: 'pt-1.5 pb-3.5',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

type DescriptionListStyles = VariantProps<typeof descriptionListStyles>

export { descriptionListStyles, type DescriptionListStyles }
