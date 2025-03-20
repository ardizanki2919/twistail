import { type VariantProps, tv } from 'tailwind-variants'

const tabNavigationStyles = tv({
  slots: {
    list: [
      'flex items-center justify-start whitespace-nowrap border-b border-border',
      '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    ],
    item: 'flex',
    link: 'group relative flex shrink-0 select-none items-center justify-center',
    linkInner: [
      '-mb-px flex items-center justify-center whitespace-nowrap border-transparent border-b-2 px-3 pb-2 font-medium text-sm transition-all',
      'text-muted-foreground group-hover:text-foreground group-hover:border-border',
      'group-data-[active]:border-primary group-data-[active]:text-primary',
      'outline-0 outline-primary outline-offset-2 focus-visible:outline-2',
    ],
  },
  variants: {
    disabled: {
      true: {
        link: 'pointer-events-none',
        linkInner: 'pointer-events-none text-muted',
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

type TabNavigationStyles = VariantProps<typeof tabNavigationStyles>

export { tabNavigationStyles, type TabNavigationStyles }
