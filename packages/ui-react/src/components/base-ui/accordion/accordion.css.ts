import { type VariantProps, tv } from 'tailwind-variants'

const accordionStyles = tv({
  slots: {
    root: [],
    // AccordionTrigger
    header: 'flex',
    triger: [
      // base
      'group flex flex-1 cursor-pointer items-center justify-between py-3 text-left font-medium text-sm leading-none',
      // text color
      'text-gray-900 dark:text-gray-50',
      // disabled
      'data-[disabled]:cursor-default data-[disabled]:text-gray-400 dark:data-[disabled]:text-gray-600',
      //focus
      'focus-visible:z-10 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset',
    ],
    trigerIcon: [
      // base
      'group-data-[state=open]:-rotate-45 size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)]',
      // text color
      'text-gray-400 dark:text-gray-600',
      // disabled
      'group-data-[disabled]:text-gray-300 group-data-[disabled]:dark:text-gray-700',
    ],
    content: [
      'transform-gpu data-[state=closed]:animate-accordion-close data-[state=open]:animate-accordion-open',
    ],
    contentInner: 'overflow-hidden pb-4 text-sm text-accent-foreground',
    item: 'overflow-hidden border-b first:mt-0 border-gray-200 dark:border-gray-800',
  },
})

type AccordionStyles = VariantProps<typeof accordionStyles>

export { accordionStyles, type AccordionStyles }
