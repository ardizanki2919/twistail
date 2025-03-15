import { type VariantProps, tv } from 'tailwind-variants'

const tableStyles = tv({
  slots: {
    root: 'w-full overflow-auto whitespace-nowrap',
    table: [
      // base
      'w-full caption-bottom border-b',
      // border color
      'border-gray-200 dark:border-gray-800',
    ],
    head: [],
    headerCell: [
      // base
      'border-b px-4 py-3.5 text-left font-semibold text-sm',
      // text color
      'text-gray-900 dark:text-gray-50',
      // border color
      'border-gray-200 dark:border-gray-800',
    ],
    body: [
      // base
      'divide-y',
      // divide color
      'divide-gray-200 dark:divide-gray-800',
    ],
    row: [
      '[&_td:last-child]:pr-4 [&_th:last-child]:pr-4',
      '[&_td:first-child]:pl-4 [&_th:first-child]:pl-4',
    ],
    cell: [
      // base
      'p-4 text-sm',
      // text color
      'text-gray-600 dark:text-gray-400',
    ],
    foot: [
      // base
      'border-t text-left font-medium',
      // text color
      'text-gray-900 dark:text-gray-50',
      // border color
      'border-gray-200 dark:border-gray-800',
    ],
    caption: [
      // base
      'mt-3 px-3 text-center text-sm',
      // text color
      'text-gray-500 dark:text-gray-500',
    ],
  },
})

type TableStyles = VariantProps<typeof tableStyles>

export { tableStyles, type TableStyles }
