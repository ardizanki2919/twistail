import { type VariantProps, tv } from 'tailwind-variants'

const accordionStyles = tv({
  slots: {
    // AccordionTrigger
    accordionHeader: 'flex',
    accordionTriger: [
      // base
      'group flex flex-1 cursor-pointer items-center justify-between py-3 text-left font-medium text-sm leading-none',
      // text color
      'text-gray-900 dark:text-gray-50',
      // disabled
      'data-[disabled]:cursor-default data-[disabled]:text-gray-400 dark:data-[disabled]:text-gray-600',
      //focus
      'focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset',
    ],
    accordionTrigerIcon: [
      // base
      'group-data-[state=open]:-rotate-45 size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)]',
      // text color
      'text-gray-400 dark:text-gray-600',
      // disabled
      'group-data-[disabled]:text-gray-300 group-data-[disabled]:dark:text-gray-700',
    ],
    // AccordionContent
    accordionContent: [
      'transform-gpu data-[state=closed]:animate-accordion-close data-[state=open]:animate-accordion-open',
    ],
    accordionContentDiv: [
      // base
      'overflow-hidden pb-4 text-sm',
      // text color
      'text-gray-700 dark:text-gray-200',
    ],
    // AccordionItem
    accordionItem: [
      // base
      'overflow-hidden border-b first:mt-0',
      // border color
      'border-gray-200 dark:border-gray-800',
    ],
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type AccordionStyles = VariantProps<typeof accordionStyles>

export { accordionStyles, type AccordionStyles }
