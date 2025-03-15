import { type VariantProps, tv } from 'tailwind-variants'

const tabNavigationStyles = tv({
  slots: {
    list: [
      // base
      'flex items-center justify-start whitespace-nowrap border-b [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
      // border color
      'border-gray-200 dark:border-gray-800',
    ],
    item: 'flex',
    link: 'group relative flex shrink-0 select-none items-center justify-center',
    linkInner: [
      // base
      '-mb-px flex items-center justify-center whitespace-nowrap border-transparent border-b-2 px-3 pb-2 font-medium text-sm transition-all',
      // text color
      'text-gray-500 dark:text-gray-500',
      // hover
      'group-hover:text-gray-700 group-hover:dark:text-gray-400',
      // border hover
      'group-hover:border-gray-300 group-hover:dark:border-gray-400',
      // selected
      'group-data-[active]:border-blue-500 group-data-[active]:text-blue-500',
      'group-data-[active]:dark:border-blue-500 group-data-[active]:dark:text-blue-500',
      'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
    ],
  },
  variants: {
    disabled: {
      true: {
        link: 'pointer-events-none',
        linkInner: 'pointer-events-none text-gray-300 dark:text-gray-700',
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

type TabNavigationStyles = VariantProps<typeof tabNavigationStyles>

export { tabNavigationStyles, type TabNavigationStyles }
