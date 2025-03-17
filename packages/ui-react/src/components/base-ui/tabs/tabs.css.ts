import { type VariantProps, tv } from 'tailwind-variants'

const tabsStyles = tv({
  slots: {
    list: [],
    trigger: ['outline-0 outline-primary outline-offset-2 focus-visible:outline-2'],
    content: ['outline-0 outline-primary outline-hidden outline-offset-2 focus-visible:outline-2'],
  },
  variants: {
    variant: {
      line: {
        list: 'flex items-center justify-start border-b border-border',
        trigger: [
          '-mb-px items-center justify-center whitespace-nowrap border-transparent border-b-2 px-3 pb-2 font-medium text-sm transition-all',
          'text-muted-foreground',
          'hover:text-foreground hover:border-border',
          'data-[state=active]:border-primary data-[state=active]:text-primary',
          'data-[disabled]:pointer-events-none data-[disabled]:text-muted',
        ],
      },
      solid: {
        list: 'inline-flex items-center justify-center rounded-md p-1 bg-muted',
        trigger: [
          'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 font-medium text-sm ring-1 ring-inset',
          'text-muted-foreground ring-transparent hover:text-foreground transition-all',
          'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
          'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
        ],
      },
      curved: {
        list: [
          'inline-flex items-center justify-start rounded-md p-0 relative h-auto w-full gap-0.5 border-border bg-transparent',
          'before:bg-border before:absolute before:inset-x-0 before:bottom-0 before:h-px',
        ],
        trigger: [
          'inline-flex items-center justify-start whitespace-nowrap rounded-sm px-3 py-2 font-medium text-sm ring-1 ring-inset',
          'transition-all overflow-hidden rounded-b-none border-x border-t',
          'text-muted-foreground bg-muted hover:text-foreground ring-transparent',
          'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
          'data-[state=active]:z-10 data-[state=active]:shadow-none',
          'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'line',
  },
})

type TabsStyles = VariantProps<typeof tabsStyles>

export { tabsStyles, type TabsStyles }
