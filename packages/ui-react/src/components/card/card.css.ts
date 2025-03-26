import { type VariantProps, tv } from 'tailwind-variants'

const cardStyles = tv({
  slots: {
    base: [
      'relative w-full rounded-lg border shadow-sm bg-card text-card-foreground border-border',
      'outline-0 outline-primary outline-offset-2 focus-visible:outline-2 transition-colors duration-200',
    ],
    header: 'flex flex-col space-y-1.5 p-6',
    title: 'font-semibold leading-none tracking-tight text-foreground text-lg',
    description: 'text-sm text-muted-foreground',
    content: 'p-6',
    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6',
    divider: 'mx-6 my-0 border-border border-t',
  },
  variants: {
    spacing: {
      default: {},
      compact: {
        header: 'p-5',
        content: 'p-5',
        footer: 'p-5',
        divider: 'mx-5 my-0',
      },
    },
  },
  defaultVariants: {
    spacing: 'default',
  },
})

type CardStyles = VariantProps<typeof cardStyles>

export { cardStyles, type CardStyles }
