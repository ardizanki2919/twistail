import { type VariantProps, tv } from 'tailwind-variants'

const tabsStyles = tv({
  slots: {
    list: [],
    trigger: [
      'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
    ],
    content: [
      'outline-0 outline-blue-500 outline-hidden outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
    ],
  },
  variants: {
    variant: {
      line: {
        list: [
          // base
          'flex items-center justify-start border-b',
          // border color
          'border-gray-200 dark:border-gray-800',
        ],
        trigger: [
          // base
          '-mb-px items-center justify-center whitespace-nowrap border-transparent border-b-2 px-3 pb-2 font-medium text-sm transition-all',
          // text color
          'text-gray-500 dark:text-gray-500',
          // hover
          'hover:text-gray-700 hover:dark:text-gray-400',
          // border hover
          'hover:border-gray-300 hover:dark:border-gray-400',
          // selected
          'data-[state=active]:border-blue-500 data-[state=active]:text-blue-500',
          'data-[state=active]:dark:border-blue-500 data-[state=active]:dark:text-blue-500',
          // disabled
          'data-[disabled]:pointer-events-none',
          'data-[disabled]:text-gray-300 data-[disabled]:dark:text-gray-700',
        ],
      },
      solid: {
        list: [
          // base
          'inline-flex items-center justify-center rounded-md p-1',
          // background color
          'bg-gray-100 dark:bg-gray-900',
        ],
        trigger: [
          // base
          'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 font-medium text-sm ring-1 ring-inset transition-all',
          // text color
          'text-gray-500 dark:text-gray-400',
          // hover
          'hover:text-gray-700 hover:dark:text-gray-200',
          // ring
          'ring-transparent',
          // selected
          'data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow',
          'data-[state=active]:dark:bg-gray-950 data-[state=active]:dark:text-gray-50',
          // disabled
          'data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:opacity-50 data-[disabled]:dark:text-gray-600',
        ],
      },
      curved: {
        list: [
          // base
          'inline-flex items-center justify-start rounded-md p-0 relative h-auto w-full gap-0.5',
          // background color
          'border-gray-200 dark:border-gray-800 bg-transparent',
          // additional styles
          'before:bg-border before:absolute before:inset-x-0 before:bottom-0 before:h-px',
        ],
        trigger: [
          // base
          'inline-flex items-center justify-start whitespace-nowrap rounded-sm px-3 py-2 font-medium text-sm ring-1 ring-inset transition-all overflow-hidden rounded-b-none border-x border-t',
          // colors
          'text-gray-500 dark:text-gray-400 bg-muted hover:text-gray-700 hover:dark:text-gray-200 ring-transparent',
          // selected
          'data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow',
          'data-[state=active]:dark:bg-gray-950 data-[state=active]:dark:text-gray-50',
          'data-[state=active]:z-10 data-[state=active]:shadow-none',
          // disabled
          'data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:opacity-50 data-[disabled]:dark:text-gray-600',
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
