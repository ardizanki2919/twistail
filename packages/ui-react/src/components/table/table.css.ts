import { type VariantProps, tv } from 'tailwind-variants'

const tableStyles = tv({
  slots: {
    root: 'w-full overflow-auto whitespace-nowrap',
    table: 'w-full caption-bottom border-b border-border',
    head: [],
    headerCell: [
      'border-b px-4 py-3.5 text-left font-semibold text-sm text-foreground border-border',
    ],
    body: 'divide-y divide-border',
    row: [
      '[&_td:last-child]:pr-4 [&_th:last-child]:pr-4',
      '[&_td:first-child]:pl-4 [&_th:first-child]:pl-4',
    ],
    cell: 'p-4 text-sm text-muted-foreground',
    foot: 'border-t text-left font-medium text-foreground border-border',
    caption: 'mt-3 px-3 text-center text-sm text-muted-foreground',
  },
})

type TableStyles = VariantProps<typeof tableStyles>

export { tableStyles, type TableStyles }
