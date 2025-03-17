import { type VariantProps, tv } from 'tailwind-variants'

const accordionStyles = tv({
  slots: {
    root: [],
    header: 'flex',
    triger: [
      'group flex flex-1 cursor-pointer items-center justify-between py-3 text-left font-medium text-sm leading-none text-foreground',
      'focus-visible:z-10 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset',
      'data-[disabled]:cursor-default data-[disabled]:text-muted-foreground',
    ],
    trigerIcon: [
      'text-muted-foreground size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)]',
      'group-data-[disabled]:text-muted group-data-[state=open]:-rotate-45',
    ],
    content: [
      'transform-gpu data-[state=closed]:animate-accordion-close data-[state=open]:animate-accordion-open',
    ],
    contentInner: 'overflow-hidden pb-4 text-sm text-accent-foreground',
    item: 'overflow-hidden border-b first:mt-0 border-border',
  },
})

type AccordionStyles = VariantProps<typeof accordionStyles>

export { accordionStyles, type AccordionStyles }
